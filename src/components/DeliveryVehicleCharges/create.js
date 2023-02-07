import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  useTranslate,
  NumberInput,
  SelectInput,
  Create,
  ReferenceInput,
  useGetList,
  regex,
} from "react-admin";

import _ from "lodash";
import { RESOURCES } from "../../constants";
import { useFormState } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    width: "60%",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  numberInput: {
    maxWidth: 256,
    width: "100%",
  },
});
export const CreateDeliveryVehicleCharge = (props) => {
  const classes = useStyles();
  const translate = useTranslate();
  const { data, ids, loading, error } = useGetList(
    RESOURCES.VEHICLES,
    { page: 1, perPage: 20 },
    { field: "name", order: "ASC" },
    {}
  );

  const FormInput = (props) => {
    const { values } = useFormState();
    let country = null;
    if (!_.isEmpty(values)) {
      country = values.country;
      delete values.data;
      delete values.country;
      values.data = JSON.stringify(values);
      values.country = country;
    }
    for (var key in values) {
      if (values.hasOwnProperty(key)) {
        console.log(key + " -> " + values[key]);
      }
    }
    // let data = [];
    // {ids.map(function (id) {
    //     let obj = {};
    //  //   obj[values]
    // })
    // console.log({ values });
    return null;
  };
  return (
    <Create
      {...props}
      title={
        translate("ra.strings.setting") +
        ` #${!_.isUndefined(props.id) ? props.id : ""}`
      }
    >
      <SimpleForm validate={validate}>
        <ReferenceInput
          label="Select Country"
          source="country"
          reference="countries"
        >
          <SelectInput optionText="en" />
        </ReferenceInput>
        {/* {ids.map((id) => (
          <NumberInput
            source={`${data[id].name}_base_fee`}
            format={(v) => _.round(v)}
            label={`Base Fee For ${data[id].display_name}`}
            validate={validateSlot}
            //validate={[regex(/^[0-9]+$/,'number ']}
          />
        ))} */}
        {ids.map(function (id) {
          return (
            <div className={classes.root}>
              <NumberInput
                className={classes.numberInput}
                source={`base_fee${id}`}
                format={(v) => _.round(v)}
                label={`Base Fee For ${data[id].display_name}`}
                validate={validateSlot}
                //validate={[regex(/^[0-9]+$/,'number ']}
              />
              <NumberInput
                className={classes.numberInput}
                source={`fee_per_km${id}`}
                format={(v) => _.round(v)}
                label={`Fee Per KM For ${data[id].display_name}`}
                validate={validateSlot}
                //validate={[regex(/^[0-9]+$/,'number ']}
              />
              <NumberInput
                className={classes.numberInput}
                source={`fee_per_minute${id}`}
                format={(v) => _.round(v)}
                label={`Fee Per Minute For ${data[id].display_name}`}
                validate={validateSlot}
                //validate={[regex(/^[0-9]+$/,'number ']}
              />
            </div>
          );
        })}
        <FormInput />
      </SimpleForm>
    </Create>
  );
};
const validate = (values) => {
  const errors = {};

  if (!values.country) {
    errors.country = ["Country is required"];
  }
  if (values.waspha_fee_delivery <= 0) {
    errors.waspha_fee_delivery = [
      "Invalid value for Waspha commission(Delivery)",
    ];
  }
  if (values.waspha_fee_pickup <= 0) {
    errors.waspha_fee_pickup = ["Invalid value for Waspha commission(Pickup)"];
  }

  return errors;
};
const validateSlot = [required(), regex(/^[0-9]+$/, "Must be a valid number")];

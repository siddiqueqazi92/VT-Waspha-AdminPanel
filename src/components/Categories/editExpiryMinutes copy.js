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
  SaveButton,
} from "react-admin";

import _ from "lodash";
import { RESOURCES, API_URL } from "../../constants";
import { useFormState } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "material-ui";

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

export const EditExpiryMinutes = () => {
  const classes = useStyles();
  const translate = useTranslate();
  const { data, ids, loading, error } = useGetList(
    RESOURCES.COUNTRIES,
    { page: 1, perPage: 20 },
    { field: "name", order: "ASC" },
    {}
  );

  const FormInput = () => {
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
  const handleSave = () => {
    const { push, record, showNotification, refresh } = this.props;

    const updatedRecord = {
      store_id: record.id,
      is_waspha_express_subscribed: true,
    };
    var auth = localStorage.getItem("auth");
    const { access_token } = JSON.parse(auth);
    const url = API_URL + "/update-vendor-subscription-waspha-express";

    fetch(url, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      method: "POST",
      body: JSON.stringify(updatedRecord),
    })
      .then((response) => {
        console.log({ response: response });
        this.handleApproveConfirmation();
        showNotification("Vendor subscribed to waspha express");
        //useRedirect("list", "vendors");
        push("/vendors");
        refresh();
      })
      .catch((e) => {
        console.error(e);
        showNotification(
          "Error: Unable to subscribe vendor to waspha express",
          "warning"
        );
      });
  };

  return (
    // <SimpleForm validate={validate}>
    <SimpleForm>
      <ReferenceInput
        label="Select Country"
        source="country"
        reference="countries"
      >
        <SelectInput optionText="en" />
      </ReferenceInput>

      {ids.map(function (id) {
        return (
          <div className={classes.root}>
            <NumberInput
              className={classes.numberInput}
              source={`timeout[${id}]`}
              format={(v) => _.round(v)}
              label={`Timeout For ${data[id].name.en}`}
              validate={validateSlot}
              //validate={[regex(/^[0-9]+$/,'number ']}
            />
          </div>
        );
      })}
    </SimpleForm>
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

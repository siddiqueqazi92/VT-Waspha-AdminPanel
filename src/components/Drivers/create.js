import React, { useState } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  PasswordInput,
  required,
  regex,
  email,
  RadioButtonGroupInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import PhoneInput from "react-phone-input-2";
import { Field } from "react-final-form";
import "react-phone-input-2/lib/bootstrap.css";

import { GOOGLE_API_KEY } from "../../constants";
import { getQueryStringValue } from "../Common/Functions";
import { useFormState } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  boxWidth: {
    width: "256px",
  },
});
export const CreateDriver = (props) => {
  const [online, setChecked] = useState(false);
  const [offline, setOfflineChecked] = useState(false);
  const types = [
    { id: "online", name: "Online" },
    { id: "offline", name: "Offline" },
    { id: "waspha_express", name: "Waspha Express" },
  ];
  const onChangeSelectInput = (e) => {
    e.target.value === "online" ? setChecked(true) : setChecked(false);
    e.target.value === "offline"
      ? setOfflineChecked(true)
      : setOfflineChecked(false);
    console.log({ online, value: e.target.value });
  };
  const VendorInput = () => {
    const classes = useStyles();

    let filter = getQueryStringValue("filter");
    if (filter) {
      filter = JSON.parse(filter);
    }
    return (
      <ReferenceInput
        label="Select Vendor"
        source="store_id"
        reference="vendors"
        defaultValue={filter.store_id}
        className={classes.boxWidth}
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
    );
  };
  return (
    <Create {...props}>
      <SimpleForm>
        {/* <RadioButtonGroupInput
          source="type"
          choices={types}
          validate={validateType}
          onChange={onChangeSelectInput}
        /> */}

        <SelectInput
          source="type"
          choices={types}
          validate={validateType}
          onChange={onChangeSelectInput}
        />
        <TextInput source="name" validate={validateDriverName} />
        {online && <TextInput source="email" validate={validateDriverEmail} />}
        {online && (
          <PasswordInput source="password" validate={validatePassword} />
        )}

        <Field
          name="contact"
          render={({ input, meta }) => {
            return (
              <div>
                {meta.touched && meta.error && <span>{meta.error}</span>}

                <PhoneInput
                  validate={validateRequired}
                  containerStyle={{
                    marginBottom: 20,
                  }}
                  inputStyle={{
                    borderTop: "none",
                    background: "#f5f5f5",
                    borderLeft: "none",
                    borderRight: "none",
                    borderBottom: "1px solid #0000006b",
                    borderRadius: 0,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    width: 256,
                  }}
                  source="contact"
                  placeholder="Contact"
                  inputProps={{
                    name: "contact",
                    required: true,
                    autoFocus: true,
                  }}
                  isValid={(value, country) => {
                    if (value.match(/12345/)) {
                      return "Invalid value: " + value + ", " + country.name;
                    } else if (value.match(/1234/)) {
                      return false;
                    } else {
                      return true;
                    }
                  }}
                  onChange={(value, data) => {
                    input.onChange({
                      number: value.replace(data.dialCode, ""),
                      country_code: "+" + data.dialCode,
                    });
                  }}
                />
              </div>
            );
          }}
        />

        {(online || offline) && <VendorInput />}
        {/* <VendorInput /> */}

        <ReferenceInput
          label="Select Vehicle"
          source="vehicle_id"
          reference="vehicles"
          validate={validateRequired}
        >
          <SelectInput optionText="display_name" />
        </ReferenceInput>
        <TextInput source="vehicle_name" />
        <TextInput source="number_plate" />
      </SimpleForm>
    </Create>
  );
};

//validation
const validateDriverName = [
  required(),
  regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i, "Must be a valid name"),
];
const validateDriverEmail = [required(), email()];
const validatePassword = required();
const validateType = required();
const validateVendor = required();
const validateRequired = required();

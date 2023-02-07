import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  useTranslate,
  NumberInput,
  SelectInput,
} from "react-admin";

import _ from "lodash";

export const EditDeliveryVehicleCharge = (props) => {
  const translate = useTranslate();

  return (
    <Edit
      {...props}
      title={
        translate("ra.strings.setting") +
        ` #${!_.isUndefined(props.id) ? props.id : ""}`
      }
    >
      <SimpleForm validate={validate}>
        <TextInput source="en" label="ra.strings.english" />
        <TextInput source="ar" label="ra.strings.arabic" />
      </SimpleForm>
    </Edit>
  );
};
const validate = (values) => {
  const errors = {};

  if (!values.value) {
    errors.value = ["Waspha commission is required"];
  }
  if (values.value <= 0) {
    errors.value = ["Invalid value for Waspha commission"];
  }

  return errors;
};

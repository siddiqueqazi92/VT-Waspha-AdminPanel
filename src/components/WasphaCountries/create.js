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
} from "react-admin";

import _ from "lodash";

export const CreateWasphaCountry = (props) => {
  const translate = useTranslate();

  return (
    <Create {...props} title={translate("ra.strings.create_waspha_country")}>
      <SimpleForm validate={validate}>
        <ReferenceInput
          label="Select Country"
          source="country_id"
          reference="countries"
          filter={{ view: "create_waspha_country" }}
        >
          <SelectInput optionText="en" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
const validate = (values) => {
  const errors = {};

  if (!values.country_id) {
    errors.country_id = ["Country is required"];
  }

  return errors;
};

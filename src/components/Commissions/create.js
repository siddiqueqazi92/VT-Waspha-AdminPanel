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

export const CreateCommission = (props) => {
  const translate = useTranslate();

  return (
    <Create {...props} title={translate("ra.strings.create_waspha_commission")}>
      <SimpleForm validate={validate}>
        <ReferenceInput
          label="Select Country"
          source="country"
          reference="countries"
          filter={{ view: "create_waspha_commission" }}
        >
          <SelectInput optionText="en" />
        </ReferenceInput>
        <NumberInput
          source="waspha_fee_delivery"
          label="ra.strings.waspha_commission_delivery"
          min="1"
        />
        <SelectInput
          label="ra.strings.type"
          source="waspha_fee_delivery_type"
          choices={[
            { id: "percentage", name: "Percentage" },
            { id: "fixed", name: "Fixed" },
          ]}
          onClick={(e) => e.stopPropagation()}
        />
        <NumberInput
          source="waspha_fee_pickup"
          label="ra.strings.waspha_commission_pickup"
          min="1"
        />
        <SelectInput
          label="ra.strings.type"
          source="waspha_fee_pickup_type"
          choices={[
            { id: "percentage", name: "Percentage" },
            { id: "fixed", name: "Fixed" },
          ]}
          onClick={(e) => e.stopPropagation()}
        />
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

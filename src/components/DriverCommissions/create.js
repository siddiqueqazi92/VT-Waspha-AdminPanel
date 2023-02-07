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

export const CreateDriverCommission = (props) => {
  const translate = useTranslate();

  return (
    <Create {...props} title={translate("ra.strings.driver_commission")}>
      <SimpleForm validate={validate}>
        <ReferenceInput
          label="Select Country"
          source="country"
          reference="countries"
          filter={{ view: "create_waspha_commission_driver" }}
        >
          <SelectInput optionText="en" />
        </ReferenceInput>
        <NumberInput
          source="waspha_fee_normal"
          label="ra.strings.waspha_commission_normal"
          min="1"
        />
        <SelectInput
          label="ra.strings.type"
          source="waspha_fee_normal_type"
          choices={[
            { id: "percentage", name: "Percentage" },
            { id: "fixed", name: "Fixed" },
          ]}
          onClick={(e) => e.stopPropagation()}
        />
        <NumberInput
          source="waspha_fee_traditional"
          label="ra.strings.waspha_commission_traditional"
          min="1"
        />
        <SelectInput
          label="ra.strings.type"
          source="waspha_fee_traditional_type"
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

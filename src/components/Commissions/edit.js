import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  useTranslate,
  NumberInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import _ from "lodash";
import { EditToolbarNoDeleteButton } from "../Common/Toolbars";

export const EditCommission = (props) => {
  const translate = useTranslate();

  return (
    <Edit
      {...props}
      title={
        translate("ra.strings.setting") +
        ` #${!_.isUndefined(props.id) ? props.id : ""}`
      }
    >
      <SimpleForm validate={validate} toolbar={<EditToolbarNoDeleteButton />}>
        <ReferenceInput
          label="Select Country"
          source="country.id"
          reference="countries"
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
    </Edit>
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

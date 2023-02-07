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

export const EditDriverCommission = (props) => {
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
    </Edit>
  );
};
const validate = (values) => {
  const errors = {};

  if (!values.country) {
    errors.country = ["Country is required"];
  }
  if (values.waspha_fee_normal <= 0) {
    errors.waspha_fee_normal = [
      "Invalid value for Waspha commission(Delivery)",
    ];
  }
  if (values.waspha_fee_traditional <= 0) {
    errors.waspha_fee_traditional = [
      "Invalid value for Waspha commission(Pickup)",
    ];
  }

  return errors;
};

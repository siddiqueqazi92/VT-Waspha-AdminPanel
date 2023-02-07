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
import { EditToolbarNoDeleteButton } from "../Common/Toolbars";

export const EditSetting = (props) => {
  const translate = useTranslate();

  return (
    <Edit
      {...props}
      title={
        translate("ra.strings.setting") +
        ` #${!_.isUndefined(props.id) ? props.id : ""}`
      }
    >
      <SimpleForm
        validate={validate}
        toolbar={<EditToolbarNoDeleteButton />}
        redirect="list"
      >
        <TextInput disabled source="id" />
        <TextInput disabled source="display_name" label="ra.strings.name" />
        <NumberInput source="value" label="ra.strings.value" min="1" />
        {/* <SelectInput
          label="ra.strings.type"
          source="type.value"
          choices={[
            { id: "percentage", name: "Percentage" },
            { id: "fixed", name: "Fixed" },
          ]}
          onClick={(e) => e.stopPropagation()}
        /> */}
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

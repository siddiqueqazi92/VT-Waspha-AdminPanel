import React from "react";
import { SimpleForm, TextInput, Edit, required } from "react-admin";
import { EditToolbarNoDeleteButton } from "../Common/Toolbars";

export const EditTranslation = (props) => {
  return (
    <div>
      <Edit {...props}>
        <SimpleForm toolbar={<EditToolbarNoDeleteButton />}>
          <TextInput disabled source="id" />
          <TextInput
            source="key"
            label="ra.strings.key"
            validate={validateRequired}
          />

          <TextInput
            source="en"
            label="ra.strings.english"
            validate={validateRequired}
          />
          <TextInput
            source="ar"
            label="ra.strings.arabic"
            validate={validateRequired}
          />
        </SimpleForm>
      </Edit>
    </div>
  );
};
const validateRequired = required();

import React from "react";
import { SimpleForm, TextInput, Edit, required } from "react-admin";
import { EditToolbarNoDeleteButton } from "../Common/Toolbars";

export const EditTemplate = (props) => {
  return (
    <div>
      <Edit {...props}>
        <SimpleForm toolbar={<EditToolbarNoDeleteButton />}>
          <TextInput disabled source="id" />
          <TextInput
            source="notification_type"
            label="ra.strings.key"
            disabled
          />

          <TextInput
            source="title.en"
            label="ra.strings.title_en"
            validate={validateRequired}
          />
          <TextInput
            source="title.ar"
            label="ra.strings.title_ar"
            validate={validateRequired}
          />
          <TextInput
            source="body.en"
            label="ra.strings.body_en"
            validate={validateRequired}
          />
          <TextInput
            source="body.ar"
            label="ra.strings.body_ar"
            validate={validateRequired}
          />
        </SimpleForm>
      </Edit>
    </div>
  );
};
const validateRequired = required();

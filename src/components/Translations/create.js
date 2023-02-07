import React from "react";
import { Create, SimpleForm, TextInput, required } from "react-admin";

export const CreateTranslation = (props) => {
  return (
    <div>
      <Create {...props}>
        <SimpleForm redirect="list">
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
      </Create>
    </div>
  );
};
const validateRequired = required();

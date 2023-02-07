import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  PasswordInput,
  required,
  regex,
  email,
} from "react-admin";
import PhoneInput from "react-phone-input-2";
import { Field } from "react-final-form";
import "react-phone-input-2/lib/bootstrap.css";

export const CreateUser = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" validate={validateUserName} />
        <TextInput source="email" validate={validateUserEmail} />
        <Field
          name="contact"
          render={({ input, meta }) => {
            return (
              <div>
                {meta.touched && meta.error && <span>{meta.error}</span>}

                <PhoneInput
                  containerStyle={{
                    marginBottom: 20,
                  }}
                  inputStyle={{
                    borderTop: "none",
                    background: "#f5f5f5",
                    borderLeft: "none",
                    borderRight: "none",
                    borderBottom: "1px solid #0000006b",
                    borderRadius: 0,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    width: 256,
                  }}
                  source="contact"
                  placeholder="Contact"
                  inputProps={{
                    name: "contact",
                    required: true,
                    autoFocus: true,
                  }}
                  isValid={(value, country) => {
                    if (value.match(/12345/)) {
                      return "Invalid value: " + value + ", " + country.name;
                    } else if (value.match(/1234/)) {
                      return false;
                    } else {
                      return true;
                    }
                  }}
                  onChange={(value, data) => {
                    input.onChange({ phone: value, ...data });
                  }}
                  value={input.data}
                />
              </div>
            );
          }}
        />

        <PasswordInput source="password" validate={validatePassword} />
      </SimpleForm>
    </Create>
  );
};

//validation
const validateUserName = [
  required(),
  regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i, "Must be a valid name"),
];
const validateUserEmail = [required(), email()];
const validatePassword = required();

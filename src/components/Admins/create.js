import React from "react";
import {
  Create,
  SimpleForm,
  NumberInput,
  SelectInput,
  TextInput,
  PasswordInput,
} from "react-admin";
import PhoneInput from "react-phone-input-2";
import { Field } from "react-final-form";
import "react-phone-input-2/lib/bootstrap.css";

export const CreateAdmin = (props) => {
  // const [contact, setContact] = useState({
  //   contact_details: { number: "", country_code: "" },
  // });

  return (
    <Create title="Create Admin" {...props}>
      <SimpleForm validate={validateAdminCreation} redirect="list">
        <TextInput source="name" />
        <TextInput source="email" />
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

        <PasswordInput source="password" />
        <SelectInput
          source="role_id"
          label="ra.strings.role"
          choices={[{ id: 2, name: "Admin" }]}
        />
      </SimpleForm>
    </Create>
  );
};

const validateAdminCreation = (values) => {
  const errors = {};
  const adminName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i;
  if (!values.name || adminName.test(values.name) === false) {
    errors.name = ["The name is invalid"];
  }
  if (!values.email) {
    errors.email = ["The email is invalid"];
  }
  if (!values.contact) {
    errors.contact = ["The contact number is invalid"];
  }
  if (!values.password) {
    errors.password = ["The password field shouldn't be empty"];
  }
  return errors;
};

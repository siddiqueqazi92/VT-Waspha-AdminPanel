import * as React from "react";
import { Edit, SimpleForm, TextInput, SelectInput } from "react-admin";
import PhoneInput from "react-phone-input-2";
import { Field } from "react-final-form";
import "react-phone-input-2/lib/bootstrap.css";

const EditAdmin = (props) => (
  <Edit title="Edit Admin" {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
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
                value={props.contact}
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
      <SelectInput source="role_id" choices={[{ id: 2, name: "Admin" }]} />
    </SimpleForm>
  </Edit>
);

export default EditAdmin;

import React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  EmailField,
  FunctionField,
} from "react-admin";

export const ShowDriver = (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="store_id.business_name" label="Vendor" />

        <FunctionField
          label="Phone"
          render={(record) => `${record.country_code}${record.contact}`}
        />
        <TextField source="type" />
      </SimpleShowLayout>
    </Show>
  );
};

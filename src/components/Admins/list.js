import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  NumberField,
  SelectField,
  EditButton,
  DeleteButton,
  FunctionField,
} from "react-admin";

const AdminList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <FunctionField
        label="ra.strings.phone"
        render={(record) => `${record.country_code}${record.contact}`}
      />
      <TextField source="role" />
      {/* <SelectField
        source="role"
        choices={[
          { id: "PE", name: "post_editor" },
          { id: "CM", name: "comment_moderator" },
        ]}
      /> */}
      <EditButton />
      <DeleteButton undoable={false} />
    </Datagrid>
  </List>
);

export default AdminList;

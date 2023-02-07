import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

const RolesList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="display_name" />
        <EditButton />
        <DeleteButton undoable={false} />
      </Datagrid>
    </List>
  );
};

export default RolesList;

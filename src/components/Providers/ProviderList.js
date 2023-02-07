import React from "react";
import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from "react-admin";

export const ProviderList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="address" />
        <TextField source="owner" />
        <EditButton />
        <DeleteButton undoable={false} />
      </Datagrid>
    </List>
  );
};

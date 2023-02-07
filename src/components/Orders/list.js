import React from "react";
import {
  Datagrid,
  DateField,
  DeleteButton,
  EditButton,
  List,
  TextField,
  RichTextField,
} from "react-admin";
import BulkDeleteButton from "../Buttons/BulkDeleteButton";
import { RESOURCES } from "../../constants";

export const OrderList = (props) => {
  return (
    <List
      {...props}
      title="ra.strings.orders"
      bulkActionButtons={<BulkDeleteButton resource_name={RESOURCES.ORDERS} />}
    >
      <Datagrid rowClick="show">
        <TextField source="id" label="ra.strings.id" />
        <TextField source="type" label="ra.strings.type" />
        <RichTextField source="store_name" label="ra.strings.store_name" />
        <TextField source="status" label="ra.strings.status" />
        <DateField source="createdAt" label="ra.strings.created_at" />

        <DeleteButton undoable={false} />
      </Datagrid>
    </List>
  );
};

import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  TextInput,
  Filter,
  ReferenceInput,
  SelectInput,
  FunctionField,
  useTranslate,
  RefreshButton,
} from "react-admin";

export const TemplateList = (props) => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      exporter={false}
      title="ra.strings.notification_templates"
    >
      <Datagrid>
        <TextField source="id" label="ra.strings.id" />
        <TextField source="notification_type" label="ra.strings.key" />
        <TextField source="title.en" label="ra.strings.english" />
        <TextField source="title.ar" label="ra.strings.arabic" />

        <EditButton />
      </Datagrid>
    </List>
  );
};

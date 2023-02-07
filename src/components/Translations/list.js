import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

import { TranslationFilter } from "./Filters";

export const TranslationList = (props) => {
  return (
    <List
      {...props}
      filters={<TranslationFilter />}
      bulkActionButtons={false}
      exporter={false}
      title="ra.strings.translations"
    >
      <Datagrid>
        <TextField source="id" label="ra.strings.id" />
        <TextField source="key" label="ra.strings.key" />
        <TextField source="en" label="ra.strings.english" />
        <TextField source="ar" label="ra.strings.arabic" />

        <EditButton />
        <DeleteButton undoable={false} />
      </Datagrid>
    </List>
  );
};

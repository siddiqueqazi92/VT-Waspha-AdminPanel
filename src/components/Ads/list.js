import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  FunctionField,
  BooleanField,
  NumberField,
} from "react-admin";
import { DateFieldCustom } from "../Common/Fields";
import BulkDeleteButton from "../Buttons/BulkDeleteButton";
import { RESOURCES } from "../../constants";

export const AdList = (props) => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      exporter={false}
      title="ra.strings.ads"
      bulkActionButtons={<BulkDeleteButton resource_name={RESOURCES.ADS} />}
    >
      <Datagrid rowClick="show">
        <TextField source="id" label="ra.strings.id" />
        <TextField source="type_description" label="ra.strings.type" />
        <BooleanField source="is_requested" label="ra.strings.is_requested" />

        <TextField
          source="category.name"
          label="ra.strings.category"
          sortable={false}
        />
        <TextField
          source="subcategory.name"
          label="ra.strings.subcategory"
          sortable={false}
        />
        <NumberField
          source="radius"
          label="ra.strings.radius"
          sortable={false}
        />

        <DateFieldCustom source="start_time" label="ra.strings.start_time" />
        <DateFieldCustom source="end_time" label="ra.strings.end_time" />

        <EditButton />
        <DeleteButton undoable={false} />
      </Datagrid>
    </List>
  );
};

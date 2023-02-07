import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  FunctionField,
} from "react-admin";
import _ from "lodash";
import { EditReason } from "./edit";
import { ShowReason } from "./show";
export const ReasonList = (props) => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      exporter={false}
      title="ra.strings.cancellation_reasons"
    >
      <Datagrid expand={<ShowReason />}>
        <TextField source="display_name" label="ra.strings.name" />

        {/* <EditButton /> */}
      </Datagrid>
    </List>
  );
};

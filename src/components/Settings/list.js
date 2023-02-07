import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  FunctionField,
} from "react-admin";
import _ from "lodash";
export const SettingList = (props) => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      exporter={false}
      title="ra.strings.settings"
    >
      <Datagrid>
        <TextField source="display_name" label="ra.strings.name" />
        <FunctionField
          label="ra.strings.value"
          render={(record) =>
            `${record.value}${
              !_.isUndefined(record.type) && record.type.value == "percentage"
                ? "%"
                : "(fixed)"
            }`
          }
        />
        <EditButton />
      </Datagrid>
    </List>
  );
};

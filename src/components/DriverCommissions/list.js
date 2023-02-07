import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  FunctionField,
} from "react-admin";
import _ from "lodash";
export const DriverCommissionList = (props) => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      exporter={false}
      title="ra.strings.driver_commissions"
    >
      <Datagrid>
        <TextField source="country.en" label="ra.strings.country" />
        <FunctionField
          label="ra.strings.waspha_commission_normal"
          render={(record) =>
            `${record.waspha_fee_normal}${
              !_.isUndefined(record.waspha_fee_normal_type) &&
              record.waspha_fee_normal_type == "percentage"
                ? "%"
                : "(fixed)"
            }`
          }
        />
        <FunctionField
          label="ra.strings.waspha_commission_traditional"
          render={(record) =>
            `${record.waspha_fee_traditional}${
              !_.isUndefined(record.waspha_fee_traditional_type) &&
              record.waspha_fee_traditional_type == "percentage"
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

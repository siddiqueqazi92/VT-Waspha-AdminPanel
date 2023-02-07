import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  FunctionField,
} from "react-admin";
import _ from "lodash";
export const CommissionList = (props) => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      exporter={false}
      title="ra.strings.commissions"
    >
      <Datagrid>
        <TextField source="country.en" label="ra.strings.country" />
        <FunctionField
          label="ra.strings.waspha_commission_delivery"
          render={(record) =>
            `${record.waspha_fee_delivery}${
              !_.isUndefined(record.waspha_fee_delivery_type) &&
              record.waspha_fee_delivery_type == "percentage"
                ? "%"
                : "(fixed)"
            }`
          }
        />
        <FunctionField
          label="ra.strings.waspha_commission_pickup"
          render={(record) =>
            `${record.waspha_fee_pickup}${
              !_.isUndefined(record.waspha_fee_pickup_type) &&
              record.waspha_fee_pickup_type == "percentage"
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

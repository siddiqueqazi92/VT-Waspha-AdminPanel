import * as React from "react";
import { List, Datagrid, TextField, NumberField } from "react-admin";

export const ReportList = (props) => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      exporter={false}
      title="ra.strings.vendor_reports"
    >
      <Datagrid rowClick="show">
        <TextField source="id" label="ra.strings.provider_id" />
        <TextField source="business_name" label="ra.strings.provider_name" />

        {/* <TextField source="user.id" label="ra.strings.user_id" />
        <TextField source="user.name" label="ra.strings.user_name" /> */}
        <NumberField
          source="credit_amount"
          label="ra.strings.credit_amount"
          sortable={false}
        />
        <NumberField
          source="debit_amount"
          label="ra.strings.debit_amount"
          sortable={false}
        />

        {/* <FunctionField
          label="ra.strings.discount"
          render={(record) => `${record.discount}%`}
        />
        <DateFieldCustom source="start_time" label="ra.strings.start_time" />
        <DateFieldCustom source="end_time" label="ra.strings.end_time" /> */}
      </Datagrid>
    </List>
  );
};

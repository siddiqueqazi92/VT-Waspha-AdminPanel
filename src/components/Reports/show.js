import * as React from "react";
import {
  Show,
  TextField,
  Datagrid,
  TabbedShowLayout,
  Tab,
  ShowController,
  ArrayField,
  useTranslate,
  NumberField,
} from "react-admin";

import _ from "lodash";

export const ShowReport = (props) => {
  const translate = useTranslate();
  return (
    <ShowController {...props}>
      {(controllerProps) => (
        <Show
          {...props}
          {...controllerProps}
          title={
            translate("ra.strings.vendor_report") +
            ` #${
              !_.isUndefined(controllerProps.record)
                ? controllerProps.record.id
                : ""
            }`
          }
        >
          <TabbedShowLayout>
            <Tab label="ra.strings.detail">
              <TextField source="id" label="ra.strings.provider_id" />

              <TextField
                source="business_name"
                label="ra.strings.provider_name"
              />

              <NumberField
                source="total_earning"
                label="ra.strings.total_earning"
              />
              <NumberField
                source="credit_amount"
                label="ra.strings.credit_amount"
              />
              <NumberField
                source="debit_amount"
                label="ra.strings.debit_amount"
              />
            </Tab>
            {!_.isUndefined(controllerProps.record) &&
              controllerProps.record.orders &&
              controllerProps.record.orders.length && (
                <Tab label="ra.strings.orders">
                  <ArrayField source="orders" addLabel={false}>
                    <Datagrid
                      addLabel={false}
                      rowClick={(id, basePath, record) => {
                        console.log({ id, record, basePath });
                        return `/orders/${record.id}/show`;
                      }}
                    >
                      <TextField source="id" label="ra.strings.id" />
                      <TextField source="user.id" label="ra.strings.user_id" />
                      <TextField
                        source="user.name"
                        label="ra.strings.user_name"
                      />
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
                    </Datagrid>
                  </ArrayField>
                </Tab>
              )}
          </TabbedShowLayout>
        </Show>
      )}
    </ShowController>
  );
};

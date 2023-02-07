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
import { ShowDeliveryVehicleCharge } from "./show";
export const DeliveryVehicleChargeList = (props) => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      exporter={false}
      title="ra.strings.delivery_vehicle_charges"
    >
      <Datagrid expand={<ShowDeliveryVehicleCharge />}>
        <TextField source="country" label="ra.strings.country" />

        {/* <EditButton /> */}
      </Datagrid>
    </List>
  );
};

import * as React from "react";
import {
  Show,
  TextField,
  TabbedShowLayout,
  Tab,
  ShowController,
  useTranslate,
  NumberField,
  RichTextField,
  ArrayField,
  Datagrid,
  EditButton,
  Link,
} from "react-admin";

import { LANGUAGE, RESOURCES } from "../../constants";
import _ from "lodash";
import Button from "@material-ui/core/Button";
import EditDeliveryVehicleChargeButton from "./Buttons/editDeliveryVehicleChargeButton";

const LinkToEdit = ({ record }) => {
  return record ? (
    <Button
      onClick={(e) => {
        e.stopPropagation();
      }}
      color="primary"
      component={Link}
      to={{
        pathname: `/${RESOURCES.CANCELLATION_REASONS}/${record.id}`,
        search: `filter=${JSON.stringify({ from: "Edit" })}`,
      }}
    >
      Orders
    </Button>
  ) : null;
};

export const ShowDeliveryVehicleCharge = (props) => {
  const translate = useTranslate();
  return (
    <ShowController {...props}>
      {(controllerProps) => (
        <Show {...props} {...controllerProps} title="ra.strings.space">
          {controllerProps.record && controllerProps.record.charges && (
            <ArrayField source="charges" addLabel={false}>
              <Datagrid>
                <TextField source="id" label="ra.strings.id" />
                <TextField
                  source="delivery_vehicle"
                  label="ra.strings.delivery_vehicle"
                />
                <NumberField source="base_fee" label="ra.strings.base_fee" />
                <NumberField
                  source="fee_per_km"
                  label="ra.strings.fee_per_km"
                />
                <NumberField
                  source="fee_per_minute"
                  label="ra.strings.fee_per_minute"
                />
                {/* <EditButton called_from="editPage" /> */}
                {/* <LinkToEdit /> */}
                <EditDeliveryVehicleChargeButton />
              </Datagrid>
            </ArrayField>
          )}
        </Show>
      )}
    </ShowController>
  );
};

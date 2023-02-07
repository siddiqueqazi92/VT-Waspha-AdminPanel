import * as React from "react";
import {
  Show,
  TextField,
  RichTextField,
  Datagrid,
  TabbedShowLayout,
  Tab,
  ArrayField,
  ShowController,
  useTranslate,
  FunctionField,
} from "react-admin";
import { RatioField } from "./Fields";
import { DateFieldLabeled } from "../Common/Fields";
import { LANGUAGE } from "../../constants";
import _ from "lodash";

export const ShowOrder = (props) => {
  const translate = useTranslate();
  return (
    <ShowController {...props}>
      {(controllerProps) => (
        <Show {...props} {...controllerProps}>
          <TabbedShowLayout>
            <Tab label="ra.strings.detail">
              <TextField
                source="rfp_store_id.rfp_id"
                label="ra.strings.order_id"
              />
              <TextField source="id" label="ra.strings.proposal_id" />
              <TextField source="vendor.id" label="ra.strings.provider_id" />
              <TextField
                source="vendor.name"
                label="ra.strings.provider_name"
              />
              <TextField source="user.id" label="ra.strings.user_id" />
              <TextField source="user.name" label="ra.strings.user_name" />

              <TextField source="type" label="ra.strings.type" />
              <TextField
                source={"category.name." + LANGUAGE}
                label="ra.strings.category"
              />
              {/* <RichTextField source="delivery_location" /> */}
              <RichTextField source="status" label="ra.strings.status" />
              <TextField
                label="ra.strings.proposal_prep_time"
                source="proposal_prep_time"
              />
              <TextField
                label="ra.strings.proposal_selection_time"
                source="proposal_selection_time"
              />
              {controllerProps.record &&
                controllerProps.record.delivery_mode_id && (
                  <FunctionField
                    label="ra.strings.delivery_mode"
                    render={(record) =>
                      `${record.delivery_mode_id["title"][LANGUAGE]}
                    ${record.delivery_mode_id["subtitle"][LANGUAGE]}`
                    }
                  />
                )}
              {controllerProps.record &&
                !_.isEmpty(controllerProps.record.driver) && (
                  <TextField
                    source="driver.name"
                    label="ra.strings.delivery_partner"
                  />
                )}
              {controllerProps.record &&
                controllerProps.record.delivery_vehicle_id && (
                  <FunctionField
                    label="ra.strings.delivery_vehicle"
                    render={(record) =>
                      `${record.delivery_vehicle_id["title"][LANGUAGE]}
                  ${record.delivery_vehicle_id["subtitle"][LANGUAGE] || ""}`
                    }
                  />
                )}

              <DateFieldLabeled
                source="rfp_time"
                label="ra.strings.order_time"
              />
              <DateFieldLabeled
                source="createdAt"
                label="ra.strings.proposal_time"
              />
            </Tab>
            <Tab label="ra.strings.items">
              {/* <ReferenceManyField
            addLabel={false}
            reference="order-items"
            target="order_id"
            sort={{ field: "createdAt", order: "ASC" }}
          > */}
              <ArrayField source="items" addLabel={false}>
                <Datagrid>
                  <TextField source="id" />
                  <TextField source="title" label="ra.strings.name" />
                  <TextField source="price" label="ra.strings.price" />
                  <TextField source="quantity" label="ra.strings.quantity" />
                  <TextField
                    source="requirements"
                    label="ra.strings.requirements"
                    emptyText={translate("ra.strings.na")}
                  />
                </Datagrid>
              </ArrayField>
              {/* </ReferenceManyField> */}
            </Tab>
            <Tab label="ra.strings.invoice">
              <ArrayField source="invoice.bill" addLabel={false}>
                <Datagrid addLabel={false}>
                  <TextField source="label" label="" />
                  {/* <TextField source="value" label="aadad" /> */}
                  {controllerProps.record && <RatioField />}
                </Datagrid>
              </ArrayField>
            </Tab>
          </TabbedShowLayout>
        </Show>
      )}
    </ShowController>
  );
};

import * as React from "react";
import {
  Show,
  TextField,
  DateField,
  Datagrid,
  TabbedShowLayout,
  Tab,
  ReferenceManyField,
  ArrayField,
} from "react-admin";
import { LANGUAGE, RESOURCES } from "../../constants";
import { DateFieldLabeled } from "../Common/Fields";

export const ShowRfp = (props) => (
  <Show {...props}>
    <TabbedShowLayout>
      <Tab label="ra.strings.detail">
        <TextField source="user.name" label="ra.strings.user" />
        <TextField source="type" label="ra.strings.type" />
        <TextField
          source={"category.name." + LANGUAGE}
          label="ra.strings.category"
        />
        <TextField
          source="delivery_location"
          label="ra.strings.delivery_location"
        />
        <TextField source="status" label="ra.strings.status" />
        <DateFieldLabeled source="createdAt" label="ra.strings.created_at" />
      </Tab>
      <Tab label="ra.strings.items">
        <ArrayField source="items" addLabel={false}>
          <Datagrid>
            <TextField source="id" label="ra.strings.id" />
            <TextField source="name.en" label="ra.strings.name" />
            <TextField source="quantity" label="ra.strings.quantity" />
            <TextField
              source="additional_notes"
              label="ra.strings.additional_notes"
            />
          </Datagrid>
        </ArrayField>
      </Tab>
      <Tab label="ra.strings.proposals">
        <ReferenceManyField
          addLabel={false}
          reference={RESOURCES.ORDERS}
          target="rfp_id"
          sort={{ field: "createdAt", order: "ASC" }}
        >
          <Datagrid rowClick="show">
            <TextField source="id" label="ra.strings.id" />
            <TextField source="type" label="ra.strings.type" />
            <TextField source="store_name" label="ra.strings.store_name" />
            <TextField source="status" label="ra.strings.status" />
            <DateField source="createdAt" label="ra.strings.created_at" />
          </Datagrid>
        </ReferenceManyField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);

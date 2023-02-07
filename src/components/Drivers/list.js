import React from "react";
import {
  Datagrid,
  List,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  FunctionField,
  useTranslate,
  setFilter,
  Link,
  FileField,
} from "react-admin";
import { DriverFilter } from "./Filters";
import { RESOURCES, ROLES } from "../../constants";
import BulkDeleteButton from "../Buttons/BulkDeleteButton";

import { ApproveRejectButton, AddZoneOptionButton } from "./Fields";
import SendMessageButton from "../Buttons/SendMessageButton";
import UserLinkField from "../Common/Fields/UserLinkField";

export const DriverList = (props) => {
  const translate = useTranslate();
  const componentWillUnmount = (props) => {
    props.setFilters({ is_approved: true });
  };
  return (
    <List
      componentWillUnmount={componentWillUnmount}
      {...props}
      filters={<DriverFilter />}
      title="ra.strings.delivery_partners"
      bulkActionButtons={<BulkDeleteButton resource_name={RESOURCES.DRIVERS} />}
      sort={{ field: "createdAt", order: "DESC" }}
      filterDefaultValues={{ status: "all", countryId: 132, is_approved: true }}
    >
      <Datagrid rowClick="show">
        <TextField source="id" label="ra.strings.id" />
        <UserLinkField label="ra.strings.delivery_partner" />
        <EmailField
          source="email"
          label="ra.strings.email"
          emptyText={translate("ra.strings.na")}
        />
        <TextField source="type" label="ra.strings.type" />

        <FunctionField
          label="ra.strings.phone"
          render={(record) => `${record.country_code}${record.contact}`}
        />
        {/* <FileField
          source="document"
          label="ra.strings.document"
          title="View Document"
          target="_blank"
          onClick={(e) => {
            e.stopPropagation();
          }}
        /> */}

        <EditButton />
        <ApproveRejectButton />
        <AddZoneOptionButton />
        <SendMessageButton role={ROLES.DRIVER} />
        <DeleteButton undoable={false} />
      </Datagrid>
    </List>
  );
};

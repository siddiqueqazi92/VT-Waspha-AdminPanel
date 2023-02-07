import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  FunctionField,
  useTranslate,
} from "react-admin";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { UserFilter } from "./Filters";
import { RESOURCES } from "../../constants";
import BulkDeleteButton from "../Buttons/BulkDeleteButton";
import UserLinkField from "../Common/Fields/UserLinkField";

const LinkToRelatedOrders = ({ record }) => {
  const translate = useTranslate();
  return record ? (
    <Button
      onClick={(e) => {
        e.stopPropagation();
      }}
      color="primary"
      component={Link}
      to={{
        pathname: "/rfps",
        search: `filter=${JSON.stringify({ user_id: record.id })}`,
      }}
    >
      {translate("ra.strings.rfps")}
    </Button>
  ) : null;
};

const LinkToRelatedWallets = ({ record }) => {
  const translate = useTranslate();
  return record ? (
    <Button
      onClick={(e) => {
        e.stopPropagation();
      }}
      color="primary"
      component={Link}
      to={{
        pathname: "/wallets",
        search: `filter=${JSON.stringify({ user_id: record.id })}`,
      }}
    >
      {translate("ra.strings.wallets")}
    </Button>
  ) : null;
};

export const UserList = (props) => (
  <div>
    <List
      {...props}
      filterDefaultValues={{ is_fraud: false }}
      filters={<UserFilter />}
      bulkActionButtons={<BulkDeleteButton resource_name={RESOURCES.USERS} />}
      title="ra.strings.users"
    >
      <Datagrid rowClick="show">
        <TextField source="id" label="ra.strings.id" />
        <UserLinkField label="ra.strings.user" />

        <EmailField source="email" label="ra.strings.email" />

        <FunctionField
          label="ra.strings.phone"
          render={(record) => `${record.country_code}${record.contact}`}
        />
        <LinkToRelatedWallets />
        <LinkToRelatedOrders />
        {/* <CheckboxInput source="permissions" /> */}
        <EditButton />
        <DeleteButton undoable={false} />
      </Datagrid>
    </List>
  </div>
);

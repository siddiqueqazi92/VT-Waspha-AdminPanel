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

export const ZoneList = (props) => (
  <div>
    <List
      {...props}
      filterDefaultValues={{ countryId: 132, is_fraud: false }}
      filters={<UserFilter />}
      // bulkActionButtons={<BulkDeleteButton resource_name={RESOURCES.ZONES} />}
      bulkActionButtons={false}
      title="ra.strings.zones"
    >
      <Datagrid rowClick="show">
        <TextField source="id" label="ra.strings.id" />
        <TextField source="name" label="ra.strings.name" />

        <EditButton />
        <DeleteButton undoable={false} />
      </Datagrid>
    </List>
  </div>
);

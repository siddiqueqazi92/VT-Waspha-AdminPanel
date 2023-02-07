import React from "react";
import {
  Datagrid,
  DateField,
  DeleteButton,
  List,
  TextField,
  useTranslate,
} from "react-admin";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { LANGUAGE, RESOURCES } from "../../constants";
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
        pathname: "/orders",
        search: `filter=${JSON.stringify({ rfp_id: record.id })}`,
      }}
    >
      {translate("ra.strings.proposals")}
    </Button>
  ) : null;
};
export const RfpList = (props) => {
  return (
    <List
      {...props}
      title="ra.strings.rfps"
      bulkActionButtons={<BulkDeleteButton resource_name={RESOURCES.RFPS} />}
    >
      <Datagrid rowClick="show">
        <TextField source="id" label="ra.strings.id" />
        {/* <TextField source="user" label="ra.strings.user" /> */}
        <UserLinkField label="ra.strings.user" />
        <TextField
          source={"category." + LANGUAGE}
          label="ra.strings.category"
        />
        <TextField source="type" label="ra.strings.type" />
        <TextField source="status" label="ra.strings.status" />
        <DateField source="createdAt" label="ra.strings.created_at" />
        <LinkToRelatedOrders />
        <DeleteButton undoable={false} />
      </Datagrid>
    </List>
  );
};

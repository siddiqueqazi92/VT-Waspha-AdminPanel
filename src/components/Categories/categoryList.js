import React from "react";
import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  DateField,
  TextField,
  Filter,
  SearchInput,
  ChipField,
  linkToRecord,
} from "react-admin";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { LANGUAGE, RESOURCES, RESOURCE_TYPES } from "../../constants";
import BulkDeleteButton from "../Buttons/BulkDeleteButton";

const LinkToRelatedOrders = ({ record }) => {
  return record ? (
    <Button
      onClick={(e) => {
        e.stopPropagation();
      }}
      color="primary"
      component={Link}
      to={{
        pathname: `/${RESOURCES.ORDERS}`,
        search: `filter=${JSON.stringify({ category_id: record.id })}`,
      }}
    >
      Orders
    </Button>
  ) : null;
};
const EditTimeOutsButton = ({ record }) => {
  return record && record.has_timeouts ? (
    <Button
      onClick={(e) => {
        e.stopPropagation();
      }}
      color="primary"
      component={Link}
      to={{
        pathname: `/${RESOURCES.CATEGORY_TIMEOUTS}/${record.id}`,
        //search: `filter=${JSON.stringify({ category_id: record.id })}`,
      }}
    >
      Edit Timeouts
    </Button>
  ) : (
    <Button
      onClick={(e) => {
        e.stopPropagation();
      }}
      color="primary"
      component={Link}
      to={{
        pathname: `/${RESOURCES.CATEGORY_TIMEOUTS}/${RESOURCE_TYPES.CREATE}`,
        search: `filter=${JSON.stringify({ category_id: record.id })}`,
      }}
    >
      Add Timeouts
    </Button>
  );
};

export const CategoryList = (props) => {
  return (
    <div>
      <List
        {...props}
        filters={<CategoryFilter />}
        bulkActionButtons={
          <BulkDeleteButton resource_name={RESOURCES.CATEGORIES} />
        }
        title="ra.strings.categories"
      >
        <Datagrid rowClick="show">
          <TextField source="id" label="ra.strings.id" />
          <TextField source={"name." + LANGUAGE} label="ra.strings.name" />
          <TextField source="slug" label="ra.strings.slug" />
          <ChipField
            source={"parent." + LANGUAGE}
            label="ra.strings.parent_category"
            emptyText="None"
            sortable={false}
          />
          <DateField source="createdAt" label="ra.strings.created_at" />
          <LinkToRelatedOrders />
          <EditButton />
          {/* <Link
            to={`/${RESOURCES.CATEGORIES}/edit-timeouts/:id`}
            {...props}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Edit Expiry Time
          </Link> */}
          <EditTimeOutsButton />
          <DeleteButton undoable={false} />
          {/* <Temp /> */}
        </Datagrid>
      </List>
    </div>
  );
};

//categorylist filter

const CategoryFilter = (props) => {
  return (
    <Filter {...props}>
      <SearchInput source="q" alwaysOn />
      {/* <TextInput source="name" defaultValue="Qui tempore rerum et voluptates" /> */}
      {/* <DateInput label="Created At" source="createdAt" defaultValue /> */}
    </Filter>
  );
};

// const QuickFilter = ({ label }) => {
//   const translate = useTranslate();
//   const classes = useQuickFilterStyles();
//   return <Chip className={classes.chip} label={translate(label)} />;
// };

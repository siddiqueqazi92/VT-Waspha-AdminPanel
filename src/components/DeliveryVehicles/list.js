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
  ImageField,
} from "react-admin";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { LANGUAGE, RESOURCES } from "../../constants";
import BulkDeleteButton from "../Buttons/BulkDeleteButton";
import { MyListActions } from "../Common/Actions";

export const DeliveryVehicleList = (props) => {
  return (
    <div>
      <List
        {...props}
        filters={<CategoryFilter />}
        // bulkActionButtons={
        //   <BulkDeleteButton resource_name={RESOURCES.DELIVERY_VEHICLES} />
        // }
        bulkActionButtons={false}
        title="ra.strings.delivery_vehicles"
        // actions={MyListActions}
      >
        <Datagrid rowClick="show">
          <TextField source="id" label="ra.strings.id" />
          <TextField source="title" label="ra.strings.title_en" />
          <TextField source="title_ar" label="ra.strings.title_ar" />

          <DateField source="createdAt" label="ra.strings.created_at" />
          <EditButton />
          {/* <DeleteButton undoable={false} /> */}
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

import React from "react";
import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from "react-admin";
import BulkDeleteButton from "../Buttons/BulkDeleteButton";
import { RESOURCES } from "../../constants";

export const WasphaCountryList = (props) => {
  return (
    <div>
      <List
        {...props}
        sort={{ field: "id", order: "ASC" }}
        bulkActionButtons={
          <BulkDeleteButton resource_name={RESOURCES.WASPHA_COUNTRIES} />
        }
        title="ra.strings.waspha_countries"
      >
        <Datagrid>
          <TextField source="en" />
          <TextField source="ar" />
          <TextField source="country_code" />
          <TextField source="dial_code" />
          <EditButton />
          <DeleteButton undoable={false} />
        </Datagrid>
      </List>
    </div>
  );
};

//categorylist filter

// const CountryFilter = (props) => {
//   return (
//     <Filter {...props}>
//       <SearchInput source="name" alwaysOn />
//       {/* <TextInput source="name" defaultValue="Qui tempore rerum et voluptates" /> */}
//       <DateInput label="Created At" source="createdAt" defaultValue />
//     </Filter>
//   );
// };

// const QuickFilter = ({ label }) => {
//   const translate = useTranslate();
//   const classes = useQuickFilterStyles();
//   return <Chip className={classes.chip} label={translate(label)} />;
// };

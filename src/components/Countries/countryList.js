import React from "react";
import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from "react-admin";

export const CountryList = (props) => {
  return (
    <div>
      <List {...props} sort={{ field: "id", order: "ASC" }}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="en" />
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

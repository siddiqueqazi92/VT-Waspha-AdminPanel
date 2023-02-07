import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  FunctionField,
  BooleanField,
} from "react-admin";
import { DateFieldCustom } from "../Common/Fields";
import BulkDeleteButton from "../Buttons/BulkDeleteButton";
import { RESOURCES } from "../../constants";

export const PromoCodeList = (props) => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      exporter={false}
      title="ra.strings.promo_codes"
      bulkActionButtons={
        <BulkDeleteButton resource_name={RESOURCES.PROMO_CODES} />
      }
    >
      <Datagrid>
        <TextField source="id" label="ra.strings.id" />
        <TextField source="promo_code" label="ra.strings.promo_code" />
        <BooleanField source="is_requested" label="ra.strings.is_requested" />

        <TextField
          source="category.name"
          label="ra.strings.category"
          sortable={false}
        />
        <TextField
          source="subcategory.name"
          label="ra.strings.subcategory"
          sortable={false}
        />

        <FunctionField
          label="ra.strings.discount"
          render={(record) => `${record.discount}%`}
        />
        <DateFieldCustom source="start_time" label="ra.strings.start_time" />
        <DateFieldCustom source="end_time" label="ra.strings.end_time" />

        <EditButton />
        <DeleteButton undoable={false} />
      </Datagrid>
    </List>
  );
};

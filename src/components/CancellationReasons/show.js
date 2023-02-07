import * as React from "react";
import {
  Show,
  TextField,
  TabbedShowLayout,
  Tab,
  ShowController,
  useTranslate,
  NumberField,
  RichTextField,
  ArrayField,
  Datagrid,
  EditButton,
  Link,
} from "react-admin";

import { LANGUAGE, RESOURCES } from "../../constants";
import _ from "lodash";
import Button from "@material-ui/core/Button";
import EditReasonItemButton from "../CancellationReasonsItems/Buttons/editReasonItemButton";

const LinkToEdit = ({ record }) => {
  return record ? (
    <Button
      onClick={(e) => {
        e.stopPropagation();
      }}
      color="primary"
      component={Link}
      to={{
        pathname: `/${RESOURCES.CANCELLATION_REASONS}/${record.id}`,
        search: `filter=${JSON.stringify({ from: "Edit" })}`,
      }}
    >
      Orders
    </Button>
  ) : null;
};

export const ShowReason = (props) => {
  const translate = useTranslate();
  return (
    <ShowController {...props}>
      {(controllerProps) => (
        <Show {...props} {...controllerProps}>
          {controllerProps.record && controllerProps.record.options && (
            <ArrayField source="options" addLabel={false}>
              <Datagrid

              // rowClick={(id, basePath, record) => {
              //   console.log({
              //     idddd: id,
              //     basePath: basePath,
              //     record: record,
              //   });
              //   //const mData = JSON.parse(record.data);
              //   return `${RESOURCES.CANCELLATION_REASON_ITEMS}/${record.id}`;
              // }}
              >
                <TextField source="id" label="ra.strings.id" />
                <TextField source="en" label="ra.strings.english" />
                <TextField source="ar" label="ra.strings.arabic" />
                {/* <EditButton called_from="editPage" /> */}
                {/* <LinkToEdit /> */}
                <EditReasonItemButton />
              </Datagrid>
            </ArrayField>
          )}
        </Show>
      )}
    </ShowController>
  );
};

import * as React from "react";
import {
  Show,
  TextField,
  Datagrid,
  TabbedShowLayout,
  Tab,
  ReferenceManyField,
  ImageField,
  ShowController,
  FunctionField,
  EmailField,
  useTranslate,
  Pagination,
} from "react-admin";
import { LinkToRelatedOrder } from "../Common/Fields";
import SectionShapes from "../Drivers/Maps/SectionShapes";
import ShapesShow from "../Common/Maps/ShapesShow";

export const ShowZone = (props) => {
  const translate = useTranslate();
  return (
    <ShowController {...props}>
      {(controllerProps) => (
        <Show {...props} {...controllerProps}>
          <TabbedShowLayout>
            <Tab label="ra.strings.detail">
              <TextField source="id" label="ra.strings.id" />
              <TextField source="name" label="ra.strings.name" />
            </Tab>
            <Tab label="ra.strings.zone_map">
              <ShapesShow />
            </Tab>
          </TabbedShowLayout>
        </Show>
      )}
    </ShowController>
  );
};

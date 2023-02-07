import * as React from "react";
import {
  Show,
  TextField,
  TabbedShowLayout,
  Tab,
  ImageField,
  ShowController,
  useTranslate,
} from "react-admin";
import { LANGUAGE } from "../../constants";
import { DateFieldLabeled } from "../Common/Fields";
import _ from "lodash";

export const ShowDeliveryVehicle = (props) => {
  const translate = useTranslate();
  return (
    <ShowController {...props}>
      {(controllerProps) => (
        <Show
          {...props}
          {...controllerProps}
          // title={
          //   translate("ra.strings.delivery_vehicle") + " #"
          //   //   !_.isUndefined(controllerProps.record) &&
          //   // !_.isUndefined(controllerProps.record.id)
          //   //   ? controllerProps.record.id
          //   //   : ""
          // }
        >
          <TabbedShowLayout>
            <Tab label="ra.strings.detail">
              <TextField source="id" label="ra.strings.id" />
              <TextField source="title" label="ra.strings.title_en" />
              <TextField source="title_ar" label="ra.strings.title_ar" />
              {controllerProps.record && controllerProps.record.subtitle && (
                <TextField source="subtitle" label="ra.strings.subtitle_en" />
              )}
              {controllerProps.record && controllerProps.record.subtitle_ar && (
                <TextField source="subtitle" label="ra.strings.subtitle_ar" />
              )}

              {controllerProps.record && controllerProps.record.image && (
                <ImageField source="image" label="ra.strings.image" />
              )}
              {controllerProps.record && controllerProps.record.color_image && (
                <ImageField
                  source="color_image"
                  label="ra.strings.color_image"
                />
              )}

              <DateFieldLabeled
                source="createdAt"
                label="ra.strings.created_at"
              />
            </Tab>
          </TabbedShowLayout>
        </Show>
      )}
    </ShowController>
  );
};

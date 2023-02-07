import * as React from "react";
import {
  Show,
  TextField,
  RichTextField,
  Datagrid,
  TabbedShowLayout,
  Tab,
  ReferenceManyField,
  ImageField,
  ShowController,
  useTranslate,
  Pagination,
  CreateActions,
  CreateButton,
  BooleanField,
} from "react-admin";
import { LANGUAGE, AD_TYPES } from "../../constants";
import { DateFieldLabeled } from "../Common/Fields";

export const ShowAd = (props) => {
  const translate = useTranslate();
  return (
    <ShowController {...props}>
      {(controllerProps) => (
        <Show {...props} {...controllerProps}>
          <TabbedShowLayout>
            <Tab label="ra.strings.detail">
              <TextField source="id" label="ra.strings.id" />

              {controllerProps.record && controllerProps.record.type && (
                <TextField source="type_description" label="ra.strings.type" />
              )}

              <BooleanField
                source="is_requested"
                label="ra.strings.is_requested"
              />

              {controllerProps.record && controllerProps.record.category && (
                <TextField source="category.name" label="ra.strings.category" />
              )}

              {controllerProps.record && controllerProps.record.subcategory && (
                <TextField
                  source="subcategory.name"
                  label="ra.strings.subcategory"
                />
              )}
              {controllerProps.record && controllerProps.record.location && (
                <TextField
                  source="location.address"
                  label="ra.strings.location"
                />
              )}
              {controllerProps.record && controllerProps.record.radius && (
                <TextField source="radius" label="ra.strings.radius" />
              )}
              <DateFieldLabeled
                source="start_time"
                label="ra.strings.start_time"
              />
              <DateFieldLabeled source="end_time" label="ra.strings.end_time" />

              <DateFieldLabeled
                source="createdAt"
                label="ra.strings.created_at"
              />
            </Tab>
            {controllerProps.record && controllerProps.record.media && (
              <Tab label="ra.strings.media">
                {controllerProps.record.type == AD_TYPES.POPUP_AD && (
                  <ImageField source="media.en" label="ra.strings.media_en" />
                )}
                {controllerProps.record.type == AD_TYPES.POPUP_AD && (
                  <ImageField source="media.ar" label="ra.strings.media_ar" />
                )}
              </Tab>
            )}
            {controllerProps.record && controllerProps.record.description && (
              <Tab label="ra.strings.description">
                <RichTextField
                  source="description.en"
                  label="ra.strings.description_en"
                />
                <RichTextField
                  source="description.ar"
                  label="ra.strings.description_ar"
                />
              </Tab>
            )}
            {controllerProps.record && controllerProps.record.vendors && (
              <Tab label="ra.strings.vendors"></Tab>
            )}
          </TabbedShowLayout>
        </Show>
      )}
    </ShowController>
  );
};

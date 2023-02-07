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
import { LANGUAGE } from "../../constants";
import { DateFieldLabeled } from "../Common/Fields";

export const ShowStoreCategory = (props) => {
  const translate = useTranslate();
  return (
    <ShowController {...props}>
      {(controllerProps) => (
        <Show
          {...props}
          {...controllerProps}
          title={translate("ra.strings.business_category") + ` #${props.id}`}
        >
          <TabbedShowLayout>
            <Tab label="ra.strings.detail">
              <TextField source="id" label="ra.strings.id" />
              {controllerProps.record && controllerProps.record.name && (
                <RichTextField source="name" label="ra.strings.name_en" />
              )}
              {controllerProps.record && controllerProps.record.name_ar && (
                <RichTextField source="name_ar" label="ra.strings.name_ar" />
              )}

              {controllerProps.record && controllerProps.record.parent && (
                <TextField
                  source="parent.display_name"
                  label="ra.strings.parent_category"
                />
              )}

              <DateFieldLabeled
                source="createdAt"
                label="ra.strings.created_at"
              />
            </Tab>
            {controllerProps.record &&
              (controllerProps.record.image ||
                controllerProps.record.image_ar) && (
                <Tab label="ra.strings.image">
                  {controllerProps.record && controllerProps.record.image && (
                    <ImageField source="image" label="ra.strings.image_en" />
                  )}
                  {controllerProps.record &&
                    controllerProps.record.image_ar && (
                      <ImageField
                        source="image_ar"
                        label="ra.strings.image_ar"
                      />
                    )}
                </Tab>
              )}
            {controllerProps.record &&
              (controllerProps.record.description ||
                controllerProps.record.description_ar) && (
                <Tab label="ra.strings.description">
                  {controllerProps.record &&
                    controllerProps.record.description && (
                      <RichTextField
                        source="description"
                        label="ra.strings.description_en"
                      />
                    )}
                  {controllerProps.record &&
                    controllerProps.record.description_ar && (
                      <RichTextField
                        source="description_ar"
                        label="ra.strings.description_ar"
                      />
                    )}
                </Tab>
              )}
          </TabbedShowLayout>
        </Show>
      )}
    </ShowController>
  );
};

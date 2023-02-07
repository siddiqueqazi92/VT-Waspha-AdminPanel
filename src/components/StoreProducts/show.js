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

export const ShowStoreProduct = (props) => {
  const translate = useTranslate();
  return (
    <ShowController {...props}>
      {(controllerProps) => (
        <Show
          {...props}
          {...controllerProps}
          title={translate("ra.strings.store_product") + ` #${props.id}`}
        >
          <TabbedShowLayout>
            <Tab label="ra.strings.detail">
              <TextField source="id" label="ra.strings.id" />
              {controllerProps.record && controllerProps.record.title && (
                <RichTextField source="title" label="ra.strings.title_en" />
              )}
              {controllerProps.record && controllerProps.record.title_ar && (
                <RichTextField source="title_ar" label="ra.strings.title_ar" />
              )}

              {controllerProps.record && controllerProps.record.category && (
                <TextField
                  source="category.display_name"
                  label="ra.strings.category"
                />
              )}
              <BooleanField
                source="is_featured"
                label="ra.strings.is_featured"
              />

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

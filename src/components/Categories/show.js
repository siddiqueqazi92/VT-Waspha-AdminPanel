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
} from "react-admin";
import { LANGUAGE } from "../../constants";
import { DateFieldLabeled } from "../Common/Fields";

export const ShowCategory = (props) => {
  const translate = useTranslate();
  return (
    <ShowController {...props}>
      {(controllerProps) => (
        <Show {...props} {...controllerProps}>
          <TabbedShowLayout>
            <Tab label="ra.strings.detail">
              <TextField source="id" label="ra.strings.id" />
              <TextField source={"name." + LANGUAGE} label="ra.strings.name" />
              {controllerProps.record && controllerProps.record.parent && (
                <TextField
                  source={"parent" + LANGUAGE}
                  label="ra.strings.parent_category"
                />
              )}

              <TextField source="slug" label="ra.strings.slug" />
              {controllerProps.record && controllerProps.record.image && (
                <ImageField source="image" label="ra.strings.image" />
              )}
              {controllerProps.record &&
                controllerProps.record.secondary_image && (
                  <ImageField
                    source="secondary_image"
                    label="ra.strings.secondary_image"
                  />
                )}
              {controllerProps.record && controllerProps.record.description && (
                <RichTextField
                  source="description"
                  label="ra.strings.description"
                />
              )}

              <DateFieldLabeled
                source="createdAt"
                label="ra.strings.created_at"
              />
            </Tab>
            <Tab label="ra.strings.subcategories">
              <CreateButton basePath="/users" />
              <ReferenceManyField
                addLabel={false}
                reference="categories"
                target="parent_id"
                sort={{ field: "createdAt", order: "DESC" }}
                pagination={<Pagination />}
                perPage={10}
              >
                <Datagrid>
                  <TextField source="id" />
                  <TextField
                    source={"name." + LANGUAGE}
                    label="ra.strings.name"
                  />
                  <TextField source="slug" label="ra.strings.slug" />

                  <TextField
                    source="description"
                    label="ra.strings.description"
                    emptyText={translate("ra.strings.na")}
                  />
                </Datagrid>
              </ReferenceManyField>
            </Tab>
          </TabbedShowLayout>
        </Show>
      )}
    </ShowController>
  );
};

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

export const ShowUser = (props) => {
  const translate = useTranslate();
  return (
    <ShowController {...props}>
      {(controllerProps) => (
        <Show {...props} {...controllerProps}>
          <TabbedShowLayout>
            <Tab label="ra.strings.detail">
              <TextField source="id" label="ra.strings.id" />
              <TextField source="name" label="ra.strings.name" />
              <EmailField source="email" label="ra.strings.email" />

              <FunctionField
                label="ra.strings.phone"
                render={(record) => `${record.country_code}${record.contact}`}
              />

              {controllerProps.record && controllerProps.record.avatar && (
                <ImageField source="avatar" label="ra.strings.avatar" />
              )}
            </Tab>
            <Tab label="ra.strings.reviews">
              <ReferenceManyField
                addLabel={false}
                reference="reviews"
                target="user_id"
                sort={{ field: "createdAt", order: "DESC" }}
                pagination={<Pagination />}
                perPage={10}
              >
                <Datagrid>
                  <TextField
                    source="review"
                    label="ra.strings.review"
                    emptyText={translate("ra.strings.na")}
                  />
                  <TextField source="rating" label="ra.strings.rating" />

                  {/* <TextField
                    source="reviewed_by.name"
                    label="ra.strings.reviewed_by"
                  /> */}
                  <FunctionField
                    label="ra.strings.reviewed_by"
                    render={(record) =>
                      `${record.reviewed_by.name.en || record.reviewed_by.name}`
                    }
                  />

                  {/* <ImageField source="reviewed_by.image" /> */}
                  <LinkToRelatedOrder />
                </Datagrid>
              </ReferenceManyField>
            </Tab>
            <Tab label="ra.strings.favourite_locations">
              <ReferenceManyField
                addLabel={false}
                reference="addresses"
                target="user_id"
                sort={{ field: "createdAt", order: "DESC" }}
                pagination={<Pagination />}
                perPage={10}
              >
                <Datagrid>
                  <TextField source="title" label="ra.strings.title" />
                  <TextField source="phone" label="ra.strings.phone" />
                  <TextField source="landmark" label="ra.strings.landmark" />
                  <TextField source="address" label="ra.strings.address" />
                </Datagrid>
              </ReferenceManyField>
            </Tab>
          </TabbedShowLayout>
        </Show>
      )}
    </ShowController>
  );
};

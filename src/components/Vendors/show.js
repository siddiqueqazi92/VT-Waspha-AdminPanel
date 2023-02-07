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
  BooleanField,
  ArrayField,
  useTranslate,
  Pagination,
  EmailField,
  DateField,
  CreateButton,
  EditButton,
  RichTextField,
  FileField,
} from "react-admin";

import {
  LinkToRelatedOrder,
  TimeFieldCustom,
  DateFieldLabeled,
} from "../Common/Fields";
import { LANGUAGE, RESOURCES, RESOURCE_TYPES } from "../../constants";
import _ from "lodash";

const CustomCreateButton = ({ record, basePath, resourcePath }) => {
  console.log({ basePath, record, resourcePath });
  return (
    <div>
      <CreateButton
        // to={`/${RESOURCES.STORE_PRODUCTS}/create/${record.id}`}
        to={{
          pathname: `${resourcePath}/${RESOURCE_TYPES.CREATE}`,
          search: `filter=${JSON.stringify({ store_id: record.id })}`,
        }}
      />
    </div>
  );
};
export const ShowVendor = (props) => {
  const translate = useTranslate();
  return (
    <ShowController {...props}>
      {(controllerProps) => (
        <Show {...props} {...controllerProps}>
          <TabbedShowLayout>
            <Tab label="ra.strings.detail">
              <TextField source="id" label="ra.strings.id" />
              <TextField source="business_name" label="ra.strings.name" />
              <BooleanField
                source="vendor.is_approved"
                label="ra.strings.approved"
              />
              <BooleanField
                source="vendor.is_waspha_express_subscribed"
                label="ra.strings.is_subscribed_to_waspha_express"
              />
              <EmailField source="vendor.email" label="ra.strings.email" />
              <FunctionField
                label="ra.strings.phone"
                render={(record) => `${record.country_code}${record.phone}`}
              />
              <TextField source="address" label="ra.strings.address" />
              <BooleanField source="is_online" label="ra.strings.is_online" />
              <BooleanField source="delivery" label="ra.strings.delivery" />
              <BooleanField source="pickup" label="ra.strings.pickup" />
              <TextField
                source="proposal_selection_time"
                label="ra.strings.proposal_selection_time"
              />
              <TextField
                source="proposal_prep_time"
                label="ra.strings.proposal_prep_time"
              />
              <FunctionField
                label="ra.strings.waspha_commission_delivery"
                render={(record) =>
                  `${record.waspha_fee_delivery}${
                    record.waspha_fee_delivery_type == "percentage"
                      ? "%"
                      : "(fixed)"
                  }`
                }
              />
              <FunctionField
                label="ra.strings.waspha_commission_pickup"
                render={(record) =>
                  `${record.waspha_fee_pickup}${
                    record.waspha_fee_pickup_type == "percentage"
                      ? "%"
                      : "(fixed)"
                  }`
                }
              />
              {controllerProps.record &&
                controllerProps.record.timings == "fulltime" && (
                  <TextField source="timings" label="ra.strings.timings" />
                )}
              <DateFieldLabeled
                source="createdAt"
                label="ra.strings.created_at"
              />
              {controllerProps.record && controllerProps.record.image && (
                <ImageField source="image" label="ra.strings.logo" />
              )}

              {/* {controllerProps.record &&
                controllerProps.record.documents &&
                controllerProps.record.documents.document1 && (
                  <FileField
                    source="documents.document1"
                    label="ra.strings.document"
                    title="View Document"
                    target="_blank"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  />
                )} */}
            </Tab>

            {controllerProps.record &&
              !_.isEmpty(controllerProps.record.documents) && (
                <Tab label="ra.strings.documents">
                  {Object.keys(controllerProps.record.documents).map(function (
                    doc
                  ) {
                    return (
                      <FileField
                        source={`documents.${doc}`}
                        label=" "
                        title="View Document"
                        target="_blank"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      />
                    );
                  })}
                </Tab>
              )}
            <Tab label="ra.strings.categories">
              <ArrayField source="categories" addLabel={false}>
                <Datagrid addLabel={false}>
                  <TextField source="id" label="ra.strings.id" />
                  <TextField
                    source={"name." + LANGUAGE}
                    label="ra.strings.name"
                  />
                </Datagrid>
              </ArrayField>
            </Tab>
            {controllerProps.record &&
              controllerProps.record.timings == "custom" && (
                <Tab label="ra.strings.timings">
                  <ArrayField source="slots" addLabel={false}>
                    <Datagrid>
                      <TextField source="day" label="ra.strings.day" />
                      <TimeFieldCustom source="from" label="ra.strings.from" />
                      <TimeFieldCustom source="to" label="ra.strings.to" />
                    </Datagrid>
                  </ArrayField>
                </Tab>
              )}
            <Tab label="ra.strings.reviews">
              <ReferenceManyField
                addLabel={false}
                reference="reviews"
                target="store_id"
                sort={{ field: "createdAt", order: "DESC" }}
                pagination={<Pagination />}
                perPage={10}
              >
                <Datagrid>
                  <TextField
                    source="reviews"
                    label="ra.strings.review"
                    emptyText={translate("ra.strings.na")}
                  />
                  <TextField source="rating" label="ra.strings.rating" />

                  {/* <ReviewerField /> */}
                  <TextField
                    source="reviewed_by.name"
                    label="ra.strings.reviewed_by"
                  />

                  {/* <ImageField source="reviewed_by.image" /> */}
                  <LinkToRelatedOrder />
                </Datagrid>
              </ReferenceManyField>
            </Tab>
            <Tab label="ra.strings.business_categories">
              <CustomCreateButton
                resourcePath={`/${RESOURCES.STORE_CATEGORIES}`}
              />
              <ReferenceManyField
                addLabel={false}
                reference={RESOURCES.STORE_CATEGORIES}
                target="store_id"
                sort={{ field: "createdAt", order: "DESC" }}
                pagination={<Pagination />}
                perPage={10}
              >
                <Datagrid rowClick="show">
                  <TextField source="id" label="ra.strings.id" />
                  <RichTextField
                    source="name"
                    label="ra.strings.name_en"
                    emptyText="N/A"
                  />
                  <RichTextField
                    source="name_ar"
                    label="ra.strings.name_ar"
                    emptyText="N/A"
                  />

                  <DateField source="createdAt" />
                  <EditButton />
                </Datagrid>
              </ReferenceManyField>
            </Tab>
            <Tab label="ra.strings.products">
              <CustomCreateButton
                resourcePath={`/${RESOURCES.STORE_PRODUCTS}`}
              />
              <ReferenceManyField
                addLabel={false}
                reference={RESOURCES.STORE_PRODUCTS}
                target="store_id"
                sort={{ field: "createdAt", order: "DESC" }}
                pagination={<Pagination />}
                perPage={10}
              >
                <Datagrid rowClick="show">
                  <TextField source="id" label="ra.strings.id" />
                  <RichTextField
                    source="title"
                    label="ra.strings.title_en"
                    emptyText="N/A"
                  />
                  <RichTextField
                    source="title_ar"
                    label="ra.strings.title_ar"
                    emptyText="N/A"
                  />

                  <DateField source="createdAt" />
                  <EditButton />
                </Datagrid>
              </ReferenceManyField>
            </Tab>
            <Tab label="ra.strings.delivery_partners">
              <CustomCreateButton resourcePath={`/${RESOURCES.DRIVERS}`} />
              <ReferenceManyField
                addLabel={false}
                reference={RESOURCES.DRIVERS}
                target="storeId"
                sort={{ field: "createdAt", order: "DESC" }}
                pagination={<Pagination />}
                perPage={10}
              >
                <Datagrid rowClick="show">
                  <TextField source="id" label="ra.strings.id" />
                  <RichTextField
                    source="name"
                    label="ra.strings.name"
                    emptyText="N/A"
                  />
                  <TextField
                    source="email"
                    label="ra.strings.email"
                    emptyText="N/A"
                  />
                  <FunctionField
                    label="ra.strings.phone"
                    render={(record) =>
                      `${record.country_code}${record.contact}`
                    }
                  />
                  <EditButton />
                </Datagrid>
              </ReferenceManyField>
            </Tab>
          </TabbedShowLayout>
        </Show>
      )}
    </ShowController>
  );
};

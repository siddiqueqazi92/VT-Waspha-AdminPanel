import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  DateField,
  RichTextField,
  Datagrid,
  TabbedShowLayout,
  Tab,
  ReferenceManyField,
  ImageField,
  ShowController,
  FunctionField,
  EmailField,
  UrlField,
  useTranslate,
  FileField,
} from "react-admin";
import { LinkToRelatedOrder } from "../Common/Fields";
import _ from "lodash";
import { DRIVER_TYPES } from "../../constants";
const MyUrlField = ({ record, source }) => (
  <a href={`#/orders/${record.ride.proposal_id}/show`}>Assigned Order</a>
);
export const ShowDriver = (props) => {
  const translate = useTranslate();
  return (
    <ShowController {...props}>
      {(controllerProps) => (
        <Show
          {...props}
          {...controllerProps}
          title={
            translate("ra.strings.delivery_partner") +
            ` #${!_.isUndefined(props.id) ? props.id : ""}`
          }
        >
          <TabbedShowLayout>
            <Tab label="ra.strings.detail">
              <TextField source="id" label="ra.strings.id" />
              <TextField source="name" label="ra.strings.name" />
              <EmailField source="email" label="ra.strings.email" />
              {controllerProps.record && controllerProps.record.store && (
                <TextField
                  source="store.business_name"
                  label="ra.strings.vendor"
                />
              )}

              <FunctionField
                label="ra.strings.phone"
                render={(record) => `${record.country_code}${record.contact}`}
              />
              <FunctionField
                label="ra.strings.type"
                render={(record) => `${DRIVER_TYPES.DESCRIPTION[record.type]}`}
              />

              {controllerProps.record && controllerProps.record.vehicle && (
                <TextField
                  source="vehicle.display_name"
                  label="ra.strings.vehicle"
                />
              )}
              {controllerProps.record &&
                controllerProps.record.vehicle_name && (
                  <TextField
                    source="vehicle_name"
                    label="ra.strings.vehicle_name"
                  />
                )}
              {controllerProps.record &&
                controllerProps.record.number_plate && (
                  <TextField
                    source="number_plate"
                    label="ra.strings.number_plate"
                  />
                )}
              {controllerProps.record && controllerProps.record.ride && (
                <MyUrlField />
              )}
              {controllerProps.record && controllerProps.record.avatar && (
                <ImageField source="avatar" label="ra.strings.avatar" />
              )}
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
            <Tab label="ra.strings.orders">
              {/* <ReferenceManyField
                addLabel={false}
                reference="categories"
                target="parent_id"
                sort={{ field: "createdAt", order: "ASC" }}
              >
                <Datagrid>
                  <TextField source="id" />
                  <TextField source="name" label="Name" />
                  <TextField source="slug" />
  
                  <TextField source="description" emptyText="N/A" />
                </Datagrid>
              </ReferenceManyField> */}
            </Tab>
            <Tab label="ra.strings.reviews">
              <ReferenceManyField
                addLabel={false}
                reference="reviews"
                target="driver_id"
                sort={{ field: "createdAt", order: "DESC" }}
              >
                <Datagrid>
                  <TextField
                    source="review"
                    label="ra.strings.review"
                    emptyText={translate("ra.strings.na")}
                  />
                  <TextField source="rating" label="ra.strings.rating" />

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
          </TabbedShowLayout>
        </Show>
      )}
    </ShowController>
  );
};

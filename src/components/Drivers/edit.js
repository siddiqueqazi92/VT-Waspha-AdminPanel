import React, { useState } from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  RadioButtonGroupInput,
  required,
  ReferenceInput,
  SelectInput,
  ImageInput,
  useTranslate,
  email,
} from "react-admin";
import { PreviewImage } from "../Common/Fields";
import _ from "lodash";

import { makeStyles } from "@material-ui/core/styles";
import SectionShapes from "./Maps/SectionShapes";
import MapComponent from "./Maps/MapComponent";
import { GOOGLE_API_KEY, DRIVER_TYPES } from "../../constants";
import { EditToolbarNoDeleteButton } from "../Common/Toolbars";

// import { GMapInput } from "@fusionworks/ra-google-maps-input";
const ZoneOption = (props) => {
  console.log({ aaadddd: props.record });
  const choices = [
    { id: "fixed_zone", name: "Fixed Zone" },
    { id: "free_zone", name: "Free Zone" },
    { id: "all", name: "All" },
  ];
  return (
    <SelectInput
      source="zone_option"
      label="ra.strings.zone_option"
      choices={choices}
      defaultValue={props.record.zone_option}
    />
  );
};

export const EditDriver = (props) => {
  const [online, setChecked] = useState(false);
  const types = [
    { id: "online", name: "Online" },
    { id: "offline", name: "Offline" },
  ];
  const onClickRadioBtn = (id) => {
    id === "online" ? setChecked(true) : setChecked(false);
  };
  const translate = useTranslate();
  return (
    <Edit
      {...props}
      title={
        translate("ra.strings.delivery_partner") +
        ` #${!_.isUndefined(props.id) ? props.id : ""}`
      }
    >
      <SimpleForm redirect="show" toolbar={<EditToolbarNoDeleteButton />}>
        {/* <MapComponent /> */}
        {/* <ShapesComponent styles={styles} /> */}
        {/* <SectionShapes /> */}
        {/* <GMapInput source="coordinates" googleKey={GOOGLE_API_KEY} /> */}
        <TextInput disabled source="id" />
        <TextInput source="name" validate={validateRequired} />
        <ReferenceInput
          label="Select Vendor"
          source="vendor_id"
          reference="vendors"
          validate={validateVendor}
        >
          <SelectInput optionText="name" optionValue="id" />
        </ReferenceInput>
        <ReferenceInput
          label="Select Vehicle"
          source="vehicle.id"
          reference="vehicles"
          validate={validateRequired}
          onChange={(value, data) => {
            console.log({ value1111: value, data11111: data });
          }}
        >
          <SelectInput
            source="vehicle_id"
            optionText="display_name"
            optionValue="id"
          />
        </ReferenceInput>
        <TextInput source="vehicle_name" />
        <TextInput source="number_plate" />
        {/* <ZoneOption /> */}
        {/* <RadioButtonGroupInput
          label="ra.strings.type"
          source="type"
          choices={types}
        /> */}
        <ImageInput source="avatar" label="Upload avatar" accept="image/*">
          <PreviewImage source="avatar" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};
//const validateType = required();

const validateDriverEmail = [required(), email()];
const validatePassword = required();
const validateType = required();
const validateVendor = required();
const validateRequired = required();

import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  required,
  mediaInput,
  mediaField,
  BooleanInput,
  ReferenceArrayInput,
  AutocompleteArrayInput,
  DateTimeInput,
  FileInput,
  FileField,
} from "react-admin";

import { useFormState } from "react-final-form";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import { PMInput, SMInput, AllRolesInput } from "./Fields";
import AutocompleteInput from "../Common/Maps/AutoCompleteInput";
// import { GMapInput } from "@fusionworks/ra-google-maps-input";
import { GOOGLE_API_KEY } from "../../constants";
const useStyles = makeStyles({
  boxWidth: {
    width: "256px",
  },
  role_name: {
    display: "inline-block",
    width: 544,
    //   backgroundColor: "#000000",
  },
  root: {
    display: "flex",
    alignItems: "center",
    width: "60%",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  numberInput: {
    maxWidth: 256,
    width: "100%",
  },
});

const countries = ["USA", "UK", "France"];
const cities = {
  164: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
  160: ["London", "Birmingham", "Glasgow", "Liverpool", "Bristol"],
};
const toChoices = (items) => {
  if (items) {
    items.map((item) => ({ id: item, name: item }));
  } else {
  }
};
const CityInput = (props) => {
  const { values } = useFormState();
  console.log({ catasas: values.category_id });
  return (
    <SelectInput
      choices={values.category_id ? toChoices(cities[values.country]) : []}
      {...props}
    />
  );
};

const SubcategoryInput = (props) => {
  const { values } = useFormState();
  const classes = useStyles();

  if (values.category_id && props.choices) {
    const selectedCategory = props.choices.filter(
      (subcategory) => subcategory.parent_id === values.category_id
    );

    return (
      <SelectInput
        label="ra.strings.select_subcategory"
        source="subcategory_id"
        choices={selectedCategory}
        optionText="en"
        {...selectedCategory}
        className={classes.boxWidth}
      />
    );
  }
  return (
    <SelectInput
      source="subcategory_id"
      label="ra.strings.select_subcategory"
      className={classes.boxWidth}
    />
  );
};
export const CreateAd = (props) => {
  const classes = useStyles();
  return (
    <Create {...props}>
      {/* <SimpleForm validate={validateCategoryCreation}> */}
      <SimpleForm>
        <div className={classes.root}>
          <SelectInput
            className={classes.numberInput}
            label="ra.strings.type"
            source="type"
            choices={[
              { id: "popup_ad", name: "Popup Ad" },
              { id: "prize_ad", name: "Ad With Price" },
              { id: "notification_ad", name: "Ad With Notification" },
            ]}
          />

          {/* <GMapInput source="coordinates" googleKey={GOOGLE_API_KEY} /> */}

          {/* <GPAutocompleteInput
          source="address_full"
          placeholder="Find address"
          onPlaceSelected={onPlaceSelected}
          gaOptions={{ types: ["address"] }}
        />

        <TextInput source="address_street" disabled label="Ulica" />
        <TextInput source="address_postcode" disabled label="Kod pocztowy" />
        <TextInput source="address_city" disabled label="Miasto" /> */}
          {/* <NumberInput
          source="discount"
          label="ra.strings.discount"
          min={0}
          max={100}
          validate={required()}
          className={classes.role_name}
        /> */}
          {/* <NumberInput
            source="percent"
            format={(v) => v * 100}
            parse={(v) => parseFloat(v) / 100}
            label="Formatted number"
          /> */}

          <BooleanInput label="ra.strings.is_requested" source="is_requested" />
        </div>
        <div className={classes.root}>
          <BooleanInput
            label="ra.strings.all_users_vendors_drivers"
            source="all_roles"
          />
        </div>
        <AllRolesInput />
        <div className={classes.root}>
          <ReferenceInput
            className={classes.boxWidth}
            label="ra.strings.select_country"
            source="country_id"
            reference="countries"
            allowEmpty
            validate={required()}
          >
            <SelectInput optionText="name.en" />
          </ReferenceInput>
          <ReferenceInput
            className={classes.boxWidth}
            label="ra.strings.select_category"
            source="category_id"
            reference="categories"
            allowEmpty
          >
            <SelectInput optionText="en" />
          </ReferenceInput>

          <ReferenceInput
            className={classes.boxWidth}
            label="ra.strings.select_subcategory"
            source="subcategory_id"
            reference="categories"
            allowEmpty
          >
            <SubcategoryInput />
          </ReferenceInput>
        </div>
        <div className={classes.root}>
          <DateTimeInput
            source="start_time"
            label="ra.strings.start_time"
            validate={required()}
          />
          <DateTimeInput
            source="end_time"
            label="ra.strings.end_time"
            validate={required()}
          />
        </div>
        <div className={classes.root}>
          <BooleanInput label="ra.strings.all_service_modes" source="sm_all" />
          <SMInput />
        </div>
        <div className={classes.root}>
          <TextInput
            source="description.en"
            label="ra.strings.description_en"
            multiline
          />
          <TextInput
            source="description.ar"
            label="ra.strings.description_ar"
            multiline
          />
        </div>
        <div className={classes.root}>
          <FileInput source="media.en" label="ra.strings.media_en">
            <FileField source="src" title="title" />
          </FileInput>
          <FileInput source="media.ar" label="ra.strings.media_ar">
            <FileField source="src" title="title" />
          </FileInput>
        </div>
        {/* <AutocompleteInput /> */}
        <NumberInput source="radius" label="ra.strings.radius" />
      </SimpleForm>
    </Create>
  );
};

const validateCategoryCreation = (values) => {
  //console.log({ valuessdds: values });
  const errors = {};
  if (_.isUndefined(values.media)) {
    errors.media = {
      en: "Either upload en media or ar media",
      ar: "Either upload en media or ar media",
    };
    //errors.media = ["One media is required"];
  }

  return errors;
};

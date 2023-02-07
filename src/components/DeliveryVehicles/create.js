import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  useTranslate,
  Create,
  ImageInput,
  ImageField,
} from "react-admin";

import _ from "lodash";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    width: "40%",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  numberInput: {
    maxWidth: 256,
    width: "100%",
  },
});
export const CreateDeliveryVehicle = (props) => {
  const classes = useStyles();
  const translate = useTranslate();

  return (
    <Create
      {...props}
      title={`Create ` + translate("ra.strings.delivery_vehicle")}
    >
      <SimpleForm validate={validate}>
        <div className={classes.root}>
          <TextInput
            className={classes.numberInput}
            source="title"
            label="ra.strings.title_en"
            //validate={validateSlot}
            //validate={[regex(/^[0-9]+$/,'number ']}
          />
          <TextInput
            className={classes.numberInput}
            source="title_ar"
            label="ra.strings.title_ar"
            //validate={validateSlot}
            //validate={[regex(/^[0-9]+$/,'number ']}
          />
        </div>
        <div className={classes.root}>
          <TextInput
            className={classes.numberInput}
            source="subtitle"
            label="ra.strings.subtitle_en"
            //validate={validateSlot}
            //validate={[regex(/^[0-9]+$/,'number ']}
          />
          <TextInput
            className={classes.numberInput}
            source="subtitle_ar"
            label="ra.strings.subtitle_ar"
            //validate={validateSlot}
            //validate={[regex(/^[0-9]+$/,'number ']}
          />
        </div>
        <div className={classes.root}>
          <ImageInput source="image" label="ra.strings.image" accept="image/*">
            <ImageField source="src" title="title" />
          </ImageInput>
          <ImageInput
            source="color_image"
            label="ra.strings.color_image"
            accept="image/*"
          >
            <ImageField source="src" title="title" />
          </ImageInput>
        </div>
      </SimpleForm>
    </Create>
  );
};
const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = ["required"];
  }
  if (!values.title_ar) {
    errors.title_ar = ["required"];
  }
  if (!values.image) {
    errors.image = ["required"];
  }
  if (!values.color_image) {
    errors.color_image = ["required"];
  }

  return errors;
};

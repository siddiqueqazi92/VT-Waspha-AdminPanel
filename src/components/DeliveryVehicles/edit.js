import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  useTranslate,
  ImageInput,
  ImageField,
} from "react-admin";

import _ from "lodash";

import { makeStyles } from "@material-ui/core/styles";
import { PreviewImage } from "../Common/Fields";
import { EditToolbarNoDeleteButton } from "../Common/Toolbars";

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
export const EditDeliveryVehicle = (props) => {
  const classes = useStyles();
  const translate = useTranslate();

  return (
    <Edit {...props} title={`Edit ` + translate("ra.strings.delivery_vehicle")}>
      <SimpleForm validate={validate} toolbar={<EditToolbarNoDeleteButton />}>
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
            <PreviewImage source="image" />
          </ImageInput>
          <ImageInput
            source="color_image"
            label="ra.strings.color_image"
            accept="image/*"
          >
            <PreviewImage source="color_image" />
          </ImageInput>
        </div>
      </SimpleForm>
    </Edit>
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

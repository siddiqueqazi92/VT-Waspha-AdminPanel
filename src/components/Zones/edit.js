import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  PasswordInput,
  required,
  regex,
  email,
  useGetList,
  NumberInput,
  Edit,
} from "react-admin";
import PhoneInput from "react-phone-input-2";
import { Field } from "react-final-form";
import "react-phone-input-2/lib/bootstrap.css";

import ShapesCreate from "../Common/Maps/ShapesCreate";
import { RESOURCES } from "../../constants";
import { useFormState } from "react-final-form";
import ShapesShow from "../Common/Maps/ShapesShow";
import { EditToolbarNoDeleteButton } from "../Common/Toolbars";

export const EditZone = (props) => {
  const [state, setState] = React.useState({
    coords: [],
  });
  const { data, ids, loading, error } = useGetList(
    RESOURCES.VEHICLES,
    { page: 1, perPage: 20 },
    { field: "name", order: "ASC" },
    {}
  );
  function setCoordsCallback(mCoords) {
    setState({
      coords: mCoords,
    });

    console.log({ c: state.coords });
  }
  const CoordsInput = (props) => {
    const { values } = useFormState();
    values.coords = state.coords;
    let slots = [];
    ids.map(function (id) {
      let slot = {};
      slot.vehicle_id = id;
      slot.allowed_slots = values[data[id].name];
      slots.push(slot);
    });
    values.slots = slots;
    return null;
  };
  return (
    <Edit {...props}>
      <SimpleForm toolbar={<EditToolbarNoDeleteButton />}>
        <TextInput source="name" validate={validateUserName} />

        {ids.map((id) => (
          <NumberInput
            source={data[id].name}
            label={`Allowed Slots For ${data[id].display_name}`}
          />
        ))}
        <CoordsInput />

        {/* <ShapesCreate setCoordsCallback={setCoordsCallback} /> */}
        <ShapesShow />
      </SimpleForm>
    </Edit>
  );
};

//validation
const validateUserName = [
  required(),
  regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i, "Must be a valid name"),
];
const validateUserEmail = [required(), email()];
const validatePassword = required();

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
  minValue,
} from "react-admin";
import _ from "lodash";
import PhoneInput from "react-phone-input-2";
import { Field } from "react-final-form";
import "react-phone-input-2/lib/bootstrap.css";

import ShapesCreate from "../Common/Maps/ShapesCreate";
import { RESOURCES } from "../../constants";
import { useFormState } from "react-final-form";
import { number } from "prop-types";

export const CreateZone = (props) => {
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
    <Create {...props}>
      <SimpleForm redirect="list">
        <TextInput source="name" validate={validateUserName} />

        {ids.map((id) => (
          <NumberInput
            source={data[id].name}
            format={(v) => _.round(v)}
            label={`Allowed Slots For ${data[id].display_name}`}
            validate={validateSlot}
            //validate={[regex(/^[0-9]+$/,'number ']}
          />
        ))}
        <CoordsInput />

        <ShapesCreate setCoordsCallback={setCoordsCallback} />
      </SimpleForm>
    </Create>
  );
};

//validation
const validateUserName = [
  required(),
  regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i, "Must be a valid name"),
];
const validateSlot = [required(), regex(/^[0-9]+$/, "Must be a valid number")];
//const validateSlot = [required(), number(), minValue(1)];

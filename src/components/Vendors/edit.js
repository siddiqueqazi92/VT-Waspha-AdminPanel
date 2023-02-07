import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  TabbedForm,
  FormTab,
  BooleanInput,
  NumberInput,
  useEditController,
  DateTimeInput,
  required,
  CheckboxGroupInput,
} from "react-admin";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import _ from "lodash";
import { useFormState } from "react-final-form";
import { TimePicker } from "material-ui";
import { TimeInput } from "react-admin-date-inputs2";
import DateFnsUtils from "@date-io/date-fns";
import { EditToolbarNoDeleteButton } from "../Common/Toolbars";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    width: "60%",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  rootWrapper: {
    display: "flex",
    alignItems: "stretch",
    width: "60%",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  marginTop0: {
    marginTop: 0,
  },
  numberInput: {
    maxWidth: 256,
    width: "100%",
  },
});
function makeSlots(values) {
  let slots = [];
  for (let i = 1; i <= 7; i++) {
    let slot = {};
    slot.day = values[`day${i}`];
    slot.from = values[`from${i}`];
    slot.to = values[`to${i}`];
    slots.push(slot);
  }
  return slots;
}
export const TimingsInput = (props) => {
  const { values } = useFormState();
  const classes = useStyles();

  if (values.is_fulltime == true) {
    return null;
  }

  values.timings = values.is_fulltime ? "fulltime" : "custom";
  values.slots = makeSlots(values);
  console.log({ values });
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let i = 1;
  return days.map(function (day) {
    //console.log({ bb: props.record[`day${i++}`] });
    return (
      <div className={classes.rootWrapper}>
        {/* <CheckboxGroupInput /> */}
        <TextInput
          className={classes.numberInput}
          //source={props.record[`day${i++}`]}
          source={"day" + i}
          //source={day}
          label="ra.strings.day"
          disabled={true}
        />
        {/* <DateTimeInput
          // source={source_from}
          source={"from" + i}
          label="ra.strings.from"
          //validate={required()}
          //defaultValue={!_.isUndefined(slot) ? slot.from : ""}
          // format={dateFormatter}
          // parse={dateParser}
        />
        <DateTimeInput
          source={"to" + i++}
          label="ra.strings.to"
          //validate={required()}
          //format={dateFormatter}
          // parse={dateParser}
        /> */}

        {/* <TimePicker hintText="12hr Format" /> */}
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <TimeInput
            className={classes.marginTop0}
            source={"from" + i}
            label="ra.strings.from"
            options={{ variant: "filled" }}
          />
        </MuiPickersUtilsProvider>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <TimeInput
            className={classes.marginTop0}
            source={"to" + i++}
            label="ra.strings.to"
            //options={{ format: "HH:mm:ss" }}
          />
        </MuiPickersUtilsProvider>
      </div>
    );
  });
};

export const EditVendor = (props) => {
  const classes = useStyles();
  const controllerProps = useEditController(props);
  const timings = !_.isUndefined(controllerProps.record)
    ? controllerProps.record.timings
    : null;
  return (
    <Edit {...props}>
      <TabbedForm validate={validate} toolbar={<EditToolbarNoDeleteButton />}>
        <FormTab label="ra.strings.detail">
          <div className={classes.root}>
            <TextInput source="business_name" label="ra.strings.name_en" />
            <TextInput source="ar" label="ra.strings.name_ar" />
            <NumberInput
              source="delivery_range"
              label="ra.strings.delivery_range"
              min="0"
            />
          </div>
          <div className={classes.root}>
            <NumberInput
              source="proposal_prep_time"
              label="ra.strings.proposal_prep_time"
              min="0"
            />
            <NumberInput
              source="proposal_selection_time"
              label="ra.strings.proposal_selection_time"
              min="0"
            />
            <BooleanInput source="delivery" />
          </div>

          <div className={classes.root}>
            <BooleanInput source="pickup" />
          </div>
        </FormTab>
        <FormTab label="ra.strings.timings">
          <BooleanInput
            source="is_fulltime"
            //  format={(v) => timings == "fulltime"}
            label="ra.strings.fulltime"
          />
          <TimingsInput />
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

const validate = (values) => {
  const errors = {};
  for (let i = 1; i <= 7; i++) {
    let date_from = new Date(values[`from${i}`]);
    let date_to = new Date(values[`to${i}`]);
    var minutes_from = Math.floor(date_from.getTime() / 60000);
    var minutes_to = Math.floor(date_to.getTime() / 60000);
    // console.log({
    //   date_from: date_from,
    //   date_to: date_to,
    //   ajdfk: date_from.getTime() == date_to.getTime(),
    //   isEqual: +date_from === +date_to,
    //   startgetTime: date_from.getTime(),
    //   endgetTime: date_to.getTime(),
    //   minutes_from,
    //   minutes_to,
    // });
    if (values[`from${i}`] && minutes_from === minutes_to) {
      errors[`from${i}`] = ["Start and End time can not be same"];
      errors[`to${i}`] = ["Start and End time can not be same"];
    }
  }

  return errors;
};

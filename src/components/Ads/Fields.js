import { useFormState } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";
import {
  SelectArrayInput,
  ReferenceArrayInput,
  AutocompleteArrayInput,
} from "react-admin";

const useStyles = makeStyles({
  boxWidth: {
    width: "256px !important",
  },
});

export const PMInput = (props) => {
  const { values } = useFormState();
  const classes = useStyles();

  if (values.pm_all == true) {
    return null;
  }
  return (
    <SelectArrayInput
      label="ra.strings.payment_methods"
      source="payment_methods"
      choices={[
        { id: "cash_on_delivery", name: "Cash on delivery" },
        { id: "card", name: "Card" },
        { id: "wallet", name: "Wallet" },
      ]}
      className={classes.boxWidth}
    />
  );
};
export const SMInput = (props) => {
  const { values } = useFormState();
  const classes = useStyles();

  if (values.sm_all == true) {
    return null;
  }
  return (
    <SelectArrayInput
      label="ra.strings.service_modes"
      emptyValue="No"
      source="service_modes"
      choices={[
        { id: "delivery", name: "Delivery" },
        { id: "pickup", name: "Pickup" },
      ]}
      className={classes.boxWidth}
    />
  );
};
export const AllRolesInput = (props) => {
  const { values } = useFormState();
  const classes = useStyles();

  if (values.all_roles == true) {
    return null;
  }
  return (
    <div className={classes.root}>
      <ReferenceArrayInput
        label="ra.strings.select_vendor"
        source="vendor_id"
        reference="vendors"
        allowEmpty
        className={classes.boxWidth}
      >
        <AutocompleteArrayInput />
      </ReferenceArrayInput>
      <ReferenceArrayInput
        label="ra.strings.select_users"
        source="user_id"
        reference="users"
        allowEmpty
        className={classes.boxWidth}
      >
        <AutocompleteArrayInput />
      </ReferenceArrayInput>
      <ReferenceArrayInput
        label="ra.strings.select_delivery_partners"
        source="driver_id"
        reference="drivers"
        allowEmpty
        className={classes.boxWidth}
      >
        <AutocompleteArrayInput />
      </ReferenceArrayInput>
    </div>
  );
};

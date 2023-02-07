import { useFormState } from "react-final-form";
import { makeStyles } from "@material-ui/core/styles";
import { SelectArrayInput } from "react-admin";

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

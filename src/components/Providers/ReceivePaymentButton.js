import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReceivePaymentForm from "./ReceivePaymentForm";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
});

const ReceivePaymentButton = (props) => {
  const classes = useStyles();
  const [version, setVersion] = useState(0);
  //const { values } = useFormState({ subscription: spySubscription });
  const handleChange = useCallback(() => setVersion(version + 1), [version]);

  return (
    <div className={classes.root}>
      <ReceivePaymentForm store_id={props.record.id} onChange={handleChange} />
    </div>
  );
};

export default ReceivePaymentButton;

import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import EditWasphaCommissionForm from "./EditWasphaCommissionForm";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
});

const EditWasphaCommissionButton = (props) => {
  //console.log({ propsIn: props });
  const classes = useStyles();
  const [version, setVersion] = useState(0);
  //const { values } = useFormState({ subscription: spySubscription });
  const handleChange = useCallback(() => setVersion(version + 1), [version]);

  return (
    <div className={classes.root}>
      <EditWasphaCommissionForm
        store_id={props.record.id}
        previous_value_delivery={props.record.waspha_fee_delivery}
        previous_value_delivery_type={props.record.waspha_fee_delivery_type}
        previous_value_pickup={props.record.waspha_fee_pickup}
        previous_value_pickup_type={props.record.waspha_fee_pickup_type}
        onChange={handleChange}
      />
    </div>
  );
};

export default EditWasphaCommissionButton;

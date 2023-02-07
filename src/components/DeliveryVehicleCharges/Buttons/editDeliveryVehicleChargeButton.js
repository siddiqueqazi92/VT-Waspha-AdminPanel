import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import EditDeliveryVehicleChargeForm from "../Forms/editDeliveryVehicleChargeForm";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
});

const EditDeliveryVehicleChargeButton = (props) => {
  //console.log({ propsIn: props });
  const classes = useStyles();
  const [version, setVersion] = useState(0);
  //const { values } = useFormState({ subscription: spySubscription });
  const handleChange = useCallback(() => setVersion(version + 1), [version]);

  return (
    <div className={classes.root}>
      <EditDeliveryVehicleChargeForm
        id={props.record.id}
        base_fee={props.record.base_fee}
        fee_per_km={props.record.fee_per_km}
        fee_per_minute={props.record.fee_per_minute}
        onChange={handleChange}
      />
    </div>
  );
};

export default EditDeliveryVehicleChargeButton;

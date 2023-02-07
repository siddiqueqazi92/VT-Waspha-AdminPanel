import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PostQuickCreateButton from "./PostQuickCreateButton";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
});

const SendMessageButton = (props) => {
  const classes = useStyles();
  const [version, setVersion] = useState(0);
  //const { values } = useFormState({ subscription: spySubscription });
  const handleChange = useCallback(() => setVersion(version + 1), [version]);

  return (
    <div className={classes.root}>
      <PostQuickCreateButton
        vendor_id={props.record.owner_id}
        onChange={handleChange}
      />
    </div>
  );
};

export default SendMessageButton;

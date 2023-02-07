import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SendMessageForm from "../Forms/SendMessageForm";
import { ROLES } from "../../constants";

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
  // console.log({ propssdss: props });
  let id = props.record.id;
  switch (props.role) {
    case ROLES.VENDOR:
      id = props.record.owner_id;
      break;
  }
  return (
    <div className={classes.root}>
      <SendMessageForm id={id} role={props.role} onChange={handleChange} />
    </div>
  );
};

export default SendMessageButton;

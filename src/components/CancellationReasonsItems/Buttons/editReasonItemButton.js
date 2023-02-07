import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";

import EditReasonItemForm from "../Forms/editReasonItemForm";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
});

const EditReasonItemButton = (props) => {
  //console.log({ propsIn: props });
  const classes = useStyles();
  const [version, setVersion] = useState(0);
  //const { values } = useFormState({ subscription: spySubscription });
  const handleChange = useCallback(() => setVersion(version + 1), [version]);

  return (
    <div className={classes.root}>
      <EditReasonItemForm
        id={props.record.id}
        en={props.record.en}
        ar={props.record.ar}
        onChange={handleChange}
      />
    </div>
  );
};

export default EditReasonItemButton;

import * as React from "react";
import { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { FieldProps } from "react-admin";
import AvatarField from "./AvatarField";
import { RESOURCES } from "../../../constants";
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "center",
  },
  avatar: {
    marginRight: theme.spacing(1),
    marginTop: -theme.spacing(0.5),
    marginBottom: -theme.spacing(0.5),
  },
}));

const FullNameField = (props) => {
  let { record, size } = props;
  const classes = useStyles();
  let user = record.user;
  let name = record.name;
  if (_.isObject(user)) {
    name = user.name;
    record = user;
  }

  return record ? (
    <div className={classes.root}>
      <AvatarField className={classes.avatar} record={record} size={size} />
      {name}
    </div>
  ) : null;
};

export default memo(FullNameField);

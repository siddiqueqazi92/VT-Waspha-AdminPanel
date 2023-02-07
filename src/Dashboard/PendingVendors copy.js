import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StoreIcon from "@material-ui/icons/Store";
import { Link } from "react-router-dom";
import { useTranslate } from "react-admin";

import CardWithIcon from "./CardWithIcon";
import StarRatingField from "../reviews/StarRatingField";
import { RESOURCES } from "../constants";

const PendingVendors = ({ vendors = [], nb = 0 }) => {
  const classes = useStyles();
  const translate = useTranslate();
  return (
    <CardWithIcon
      to={`/${RESOURCES.VENDORS}`}
      icon={StoreIcon}
      title={translate("ra.strings.pending_vendors")}
      subtitle={nb}
    >
      <List>
        {vendors.map((record) => (
          <ListItem
            key={record.id}
            button
            component={Link}
            to={`/${RESOURCES.VENDORS}/${record.id}`}
            // alignItems="flex-start"
          >
            <ListItemAvatar>
              <Avatar src={`${record.image}?size=32x32`} />
            </ListItemAvatar>
            <ListItemText primary={`${record.name}`} />
          </ListItem>
        ))}
      </List>
      <Box flexGrow="1">&nbsp;</Box>
      <Button
        className={classes.link}
        component={Link}
        to={`/${RESOURCES.VENDORS}`}
        size="small"
        color="primary"
      >
        <Box p={1} className={classes.linkContent}>
          {translate("ra.strings.all_vendors")}
        </Box>
      </Button>
    </CardWithIcon>
  );
};

const useStyles = makeStyles((theme) => ({
  avatar: {
    background: theme.palette.background.paper,
  },
  listItemText: {
    overflowY: "hidden",
    height: "4em",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  },
  link: {
    borderRadius: 0,
  },
  linkContent: {
    color: theme.palette.primary.main,
  },
}));

export default PendingVendors;

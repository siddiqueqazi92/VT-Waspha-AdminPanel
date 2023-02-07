import { useNotify, useRefresh } from "react-admin";
import ApproveButton from "./ApproveButton";

import DisApproveButton from "./DisApproveButton";
import MarkOnlineButton from "./MarkOnlineButton";
import MarkOfflineButton from "./MarkOfflineButton";
import { ROLES } from "../../constants";
import SubWasphaExpressButton from "./SubWasphaExpressButton";
import UnsubWasphaExpressButton from "./UnsubWasphaExpressButton";
import SubWasphaBoxButton from "./SubWasphaBoxButton";
import UnsubWasphaBoxButton from "./UnsubWasphaBoxButton";
import SubUnsubServicesForm from "./SubUnsubServicesForm";
import { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";

export const ApproveRejectButton = (props) => {
  const notify = useNotify();
  const showAlert = (msg, type = "success") => {
    notify(msg, type);
  };

  const refresh = useRefresh();
  const show = props.record.is_approved;

  return show == false ? (
    <ApproveButton showNotification={showAlert} {...props} refresh={refresh} />
  ) : (
    <DisApproveButton
      showNotification={showAlert}
      {...props}
      refresh={refresh}
    />
  );
};
export const MarkOnlineOfflineButton = (props) => {
  const notify = useNotify();
  const showAlert = (msg) => {
    notify(msg);
  };
  const refresh = useRefresh();
  const show = props.record.is_online;
  const is_approved = props.record.is_approved;

  if (is_approved) {
    return show == false ? (
      <MarkOnlineButton
        showNotification={showAlert}
        {...props}
        role={ROLES.VENDOR}
        refresh={refresh}
      />
    ) : (
      <MarkOfflineButton
        showNotification={showAlert}
        {...props}
        role={ROLES.VENDOR}
        refresh={refresh}
      />
    );
  }
  return null;
};

export const SubUnsubWasphaExpressButton = (props) => {
  const notify = useNotify();
  const showAlert = (msg) => {
    notify(msg);
  };

  const refresh = useRefresh();
  const show = props.record.is_waspha_express_subscribed;

  return show == false ? (
    <SubWasphaExpressButton
      showNotification={showAlert}
      {...props}
      refresh={refresh}
    />
  ) : (
    <UnsubWasphaExpressButton
      showNotification={showAlert}
      {...props}
      refresh={refresh}
    />
  );
};
export const SubUnsubWasphaBoxButton = (props) => {
  const notify = useNotify();
  const showAlert = (msg) => {
    notify(msg);
  };

  const refresh = useRefresh();
  const show = props.record.services.waspha_box;

  return show == false ? (
    <SubWasphaBoxButton
      showNotification={showAlert}
      {...props}
      refresh={refresh}
    />
  ) : (
    <UnsubWasphaBoxButton
      showNotification={showAlert}
      {...props}
      refresh={refresh}
    />
  );
};

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
});
export const SubUnsubServicesButton = (props) => {
  const classes = useStyles();
  const [version, setVersion] = useState(0);
  //const { values } = useFormState({ subscription: spySubscription });
  const handleChange = useCallback(() => setVersion(version + 1), [version]);
  console.log({ propssdss: props });
  let id = props.record.id;

  return (
    <div className={classes.root}>
      <SubUnsubServicesForm
        id={id}
        services={props.record.services}
        onChange={handleChange}
      />
    </div>
  );
};

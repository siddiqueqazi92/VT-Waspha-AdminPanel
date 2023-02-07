import { useRefresh, useNotify, Button } from "react-admin";
import ApproveButton from "./ApproveButton";
import DisApproveButton from "./DisApproveButton";
import { DRIVER_TYPES, ROLES } from "../../constants";
import AddZoneOptionForm from "./AddZoneOptionForm";
import { useState } from "react";

export const ApproveRejectButton = (props) => {
  const notify = useNotify();
  const showAlert = (msg) => {
    notify(msg);
  };

  const refresh = useRefresh();
  const show = props.record.is_approved;

  if (props.record.type == DRIVER_TYPES.WASPHA_EXPRESS) {
    return show == false ? (
      <ApproveButton
        showNotification={showAlert}
        {...props}
        refresh={refresh}
      />
    ) : (
      <DisApproveButton
        showNotification={showAlert}
        {...props}
        refresh={refresh}
      />
    );
  }
  return null;
};
export const AddZoneOptionButton = (props) => {
  const notify = useNotify();
  const [showDialog, setDialogVisibility] = useState(false);
  const showAlert = (msg) => {
    notify(msg);
  };
  const handleClick = (e) => {
    e.stopPropagation();
    setDialogVisibility(true);
  };

  //console.log({ id: props.record.id, zo: props.record.zone_option });
  const show =
    props.record.type == DRIVER_TYPES.WASPHA_EXPRESS &&
    props.record.is_approved == true;
  if (showDialog == true) {
    //console.log({ shouldShowDialogYesss: showDialog });
    return (
      <div>
        <AddZoneOptionForm
          id={props.record.id}
          role={ROLES.DRIVER}
          onChange={() => {
            console.log("ads");
          }}
          zone_option={props.record.zone_option}
        />
        <Button
          onClick={handleClick}
          label={
            props.record.zone_option
              ? "ra.strings.change_zone_option"
              : "ra.strings.add_zone_option"
          }
        ></Button>
      </div>
    );
  }

  return show == true ? (
    <Button
      onClick={handleClick}
      label={
        props.record.zone_option
          ? "ra.strings.change_zone_option"
          : "ra.strings.add_zone_option"
      }
    ></Button>
  ) : null;
};

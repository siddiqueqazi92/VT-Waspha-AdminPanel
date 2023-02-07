import React, { useState } from "react";

import {
  required,
  Button,
  SaveButton,
  TextInput,
  useCreate,
  useNotify,
  FormWithRedirect,
  useTranslate,
  useRefresh,
  NumberInput,
} from "react-admin";

import IconCancel from "@material-ui/icons/Cancel";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { RESOURCES, API_URL } from "../../../constants";
import { push } from "react-router-redux";

function EditDeliveryVehicleChargeForm({
  id,
  base_fee,
  fee_per_km,
  fee_per_minute,
}) {
  const refresh = useRefresh();
  const translate = useTranslate();
  const [showDialog, setShowDialog] = useState(false);
  const [create, { loading }] = useCreate("messages");
  const notify = useNotify();
  // const form = useForm();

  const handleClick = (e) => {
    e.stopPropagation();
    setShowDialog(true);
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    setShowDialog(false);
  };

  const handleSubmit = async (values) => {
    values.id = id;
    var auth = localStorage.getItem("auth");
    const { access_token } = JSON.parse(auth);
    const url = `${API_URL}/${RESOURCES.DELIVERY_VEHICLE_CHARGES}/update/${id}`;

    fetch(url, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((response) => {
        //console.log({ response121212: response });
        //this.handleApproveConfirmation();
        //showNotification("ra.strings.updated_successfully");
        notify("ra.strings.updated");
        //useRedirect("list", "vendors");
        push(`/${RESOURCES.DELIVERY_VEHICLE_CHARGES}`);
        refresh();
        setShowDialog(false);
      })
      .catch((e) => {
        console.error(e);
        //showNotification("Error: vendor not approved", "warning");
        notify("Error: unable to update", "error");
      });
  };

  return (
    <>
      <Button onClick={handleClick} label="ra.action.edit"></Button>
      <Dialog
        fullWidth
        open={showDialog}
        onClose={handleCloseClick}
        aria-label="ra.strings.edit_cancellation_reason"
      >
        <DialogTitle>{translate("ra.action.edit")}</DialogTitle>

        <FormWithRedirect
          resource="messages"
          save={handleSubmit}
          render={({ handleSubmitWithRedirect, pristine, saving }) => (
            <>
              <DialogContent>
                <NumberInput
                  source="base_fee"
                  label="ra.strings.base_fee"
                  validate={required()}
                  defaultValue={base_fee}
                  fullWidth
                  multiline
                  onClick={(e) => e.stopPropagation()}
                />
                <NumberInput
                  source="fee_per_km"
                  label="ra.strings.fee_per_km"
                  validate={required()}
                  defaultValue={fee_per_km}
                  fullWidth
                  multiline
                  onClick={(e) => e.stopPropagation()}
                />
                <NumberInput
                  source="fee_per_minute"
                  label="ra.strings.fee_per_minute"
                  validate={required()}
                  defaultValue={fee_per_minute}
                  fullWidth
                  multiline
                  onClick={(e) => e.stopPropagation()}
                />
              </DialogContent>
              <DialogActions>
                <Button
                  label="ra.action.cancel"
                  onClick={handleCloseClick}
                  disabled={loading}
                >
                  <IconCancel />
                </Button>
                <SaveButton
                  handleSubmitWithRedirect={handleSubmitWithRedirect}
                  pristine={pristine}
                  saving={saving}
                  disabled={loading}
                  label="ra.action.save"
                  onClick={(e) => e.stopPropagation()}
                />
              </DialogActions>
            </>
          )}
        />
      </Dialog>
    </>
  );
}

export default EditDeliveryVehicleChargeForm;

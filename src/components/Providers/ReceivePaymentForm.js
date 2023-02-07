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
  NumberInput,
  useRefresh,
  minValue,
} from "react-admin";

import IconCancel from "@material-ui/icons/Cancel";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import ReceivePaymentButton from "./ReceivePaymentButton";
import { API_URL } from "../../constants";
import { push } from "react-router-redux";

function ReceivePaymentForm({ store_id, onChange }) {
  const translate = useTranslate();
  const [showDialog, setShowDialog] = useState(false);
  const [create, { loading }] = useCreate("messages");
  const notify = useNotify();
  const refresh = useRefresh();

  const handleClick = (e) => {
    e.stopPropagation();
    setShowDialog(true);
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    setShowDialog(false);
  };

  const handleSubmit = async (values) => {
    values.store_id = store_id;
    var auth = localStorage.getItem("auth");
    const { access_token } = JSON.parse(auth);
    const url = API_URL + "/receive-payment-from-vendor";

    fetch(url, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((response) => {
        console.log({ response121212: response });
        //this.handleApproveConfirmation();
        //showNotification("ra.strings.updated_successfully");
        notify("ra.strings.updated");
        //useRedirect("list", "vendors");
        push("/vendors");
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
      <Button onClick={handleClick} label="ra.strings.receive_payment"></Button>
      <Dialog
        fullWidth
        open={showDialog}
        onClose={handleCloseClick}
        aria-label="ra.strings.receive_payment_from_vendor"
        onClick={(e) => e.stopPropagation()}
        disableBackdropClick={true}
      >
        <DialogTitle>
          {translate("ra.strings.receive_payment_from_vendor")}
        </DialogTitle>

        <FormWithRedirect
          resource="messages"
          save={handleSubmit}
          render={({ handleSubmitWithRedirect, pristine, saving }) => (
            <>
              <DialogContent>
                <NumberInput
                  source="amount_received"
                  label="ra.strings.amount_received"
                  validate={[required(), minValue(1)]}
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

export default ReceivePaymentForm;

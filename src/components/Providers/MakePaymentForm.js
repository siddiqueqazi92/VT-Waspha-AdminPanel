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
import { API_URL } from "../../constants";
import { push } from "react-router-redux";
import { number } from "prop-types";

function MakePaymentForm({ store_id, onChange }) {
  const [create, { loading }] = useCreate("messages");
  const translate = useTranslate();
  const [showDialog, setShowDialog] = useState(false);

  const notify = useNotify();
  // const form = useForm();
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
    const url = API_URL + "/make-payment-to-vendor";

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
      <Button onClick={handleClick} label="ra.strings.make_payment"></Button>
      <Dialog
        fullWidth
        open={showDialog}
        onClose={handleCloseClick}
        aria-label="ra.strings.make_payment_to_vendor"
        onClick={(e) => e.stopPropagation()}
        disableBackdropClick={true}
      >
        <DialogTitle>
          {translate("ra.strings.make_payment_to_vendor")}
        </DialogTitle>

        <FormWithRedirect
          resource="messages"
          save={handleSubmit}
          render={({ handleSubmitWithRedirect, pristine, saving }) => (
            <>
              <DialogContent>
                <NumberInput
                  source="amount_paid"
                  label="ra.strings.amount_paid"
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

export default MakePaymentForm;

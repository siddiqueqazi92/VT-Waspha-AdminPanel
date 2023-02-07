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
  BooleanInput,
  useRefresh,
} from "react-admin";

import IconCancel from "@material-ui/icons/Cancel";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { API_URL, RESPONSE_STATUS } from "../../constants";
import { push } from "react-router-redux";
function SubUnsubServicesForm({ id, services, onChange }) {
  console.log({ services });
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
    const updatedRecord = {
      store: id,
      waspha_box: values.waspha_box,
      waspha_express: values.waspha_express,
      delivery: values.delivery,
      pickup: values.pickup,
    };
    var auth = localStorage.getItem("auth");
    const { access_token } = JSON.parse(auth);
    const url = API_URL + "/update-vendor-services";
    fetch(url, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      method: "POST",
      body: JSON.stringify(updatedRecord),
    })
      .then((response) => {
        console.log({ response: response });
        if (response.status == RESPONSE_STATUS.UPDATED) {
          notify("ra.strings.updated_successfully");
        } else {
          notify("Unable to update", "warning");
        }

        push("/vendors");
        refresh();
        setShowDialog(false);
      })
      .catch((e) => {
        console.error(e);
        notify("Error: Unable to unsubscribe vendor to WASPHA Box", "error");
      });    
  };

  return (
    <>
      <Button
        onClick={handleClick}
        label="ra.strings.sub_unsub_services"
      ></Button>
      <Dialog
        fullWidth
        open={showDialog}
        onClose={handleCloseClick}
        aria-label="ra.strings.sub_unsub_services"
        onClick={(e) => e.stopPropagation()}
        disableBackdropClick={true}
      >
        <DialogTitle>{translate("ra.strings.sub_unsub_services")}</DialogTitle>

        <FormWithRedirect
          resource="messages"
          save={handleSubmit}
          render={({ handleSubmitWithRedirect, pristine, saving }) => (
            <>
              <DialogContent>
                <BooleanInput
                  source="waspha_box"
                  label="ra.strings.waspha_box"
                  defaultValue={services.waspha_box}
                  onClick={(e) => e.stopPropagation()}
                />
                <BooleanInput
                  source="waspha_express"
                  label="ra.strings.waspha_express"
                  defaultValue={services.waspha_express}
                  onClick={(e) => e.stopPropagation()}
                />
                <BooleanInput
                  source="delivery"
                  label="ra.strings.delivery"
                  defaultValue={services.delivery}
                  onClick={(e) => e.stopPropagation()}
                />
                <BooleanInput
                  source="pickup"
                  label="ra.strings.pickup"
                  defaultValue={services.pickup}
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

export default SubUnsubServicesForm;

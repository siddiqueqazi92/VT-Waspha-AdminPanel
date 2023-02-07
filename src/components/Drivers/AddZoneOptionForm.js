import React, { useState, useEffect } from "react";

import {
  required,
  Button,
  SaveButton,
  TextInput,
  useCreate,
  useNotify,
  FormWithRedirect,
  useTranslate,
  SelectInput,
  useRefresh,
} from "react-admin";

import IconCancel from "@material-ui/icons/Cancel";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { API_URL } from "../../constants";
const choices = [
  { id: "fixed_zone", name: "Fixed Zone" },
  { id: "free_zone", name: "Free Zone" },
  { id: "all", name: "All" },
];

function AddZoneOptionForm({ id, role, onChange, zone_option }) {
  const translate = useTranslate();
  const [showDialog, setShowDialog] = useState(false);
  const [create, { loading }] = useCreate("messages");
  const notify = useNotify();
  const refresh = useRefresh();

  // const form = useForm();
  console.log({ id, role, onChange });
  const handleClick = (e) => {
    e.stopPropagation();
    setShowDialog(true);
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    // props.setDialogVisibility(false);
    setShowDialog(false);
  };

  const handleSubmit = async (values) => {
    console.log({ valuesInAddZOForm: values });
    const updatedRecord = {
      driver_id: id,
      zone_option: values.zone_option,
    };
    var auth = localStorage.getItem("auth");
    const { access_token } = JSON.parse(auth);
    const url = API_URL + "/add-zone-option";
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
        // push("/drivers");
        refresh();
      })
      .catch((e) => {
        console.error(e);
        //showNotification("Error: driver not approved", "warning");
      });
  };

  useEffect(() => {
    setShowDialog(true);
  });

  return (
    <>
      <Dialog
        open={showDialog}
        onClose={handleCloseClick}
        aria-label={"ra.strings.add_zone_option"}
        onClick={(e) => e.stopPropagation()}
        //disableBackdropClick={false}
      >
        <DialogTitle>{translate("ra.strings.add_zone_option")}</DialogTitle>

        <FormWithRedirect
          resource="messages"
          save={handleSubmit}
          render={({ handleSubmitWithRedirect, pristine, saving }) => (
            <>
              <DialogContent>
                <SelectInput
                  source="zone_option"
                  label="ra.strings.zone_option"
                  fullWidth={true}
                  choices={choices}
                  defaultValue={zone_option}
                />
              </DialogContent>
              <DialogActions>
                {/* <Button
                  label="ra.action.cancel"
                  onClick={handleCloseClick}
                  disabled={loading}
                >
                  <IconCancel />
                </Button> */}
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

export default AddZoneOptionForm;

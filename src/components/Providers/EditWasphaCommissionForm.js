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
  SelectInput,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

import { push } from "react-router-redux";
import IconCancel from "@material-ui/icons/Cancel";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { API_URL } from "../../constants";
import { SelectField } from "material-ui";

const useStyles = makeStyles({
  boxWidth: {
    width: "256px",
  },
  role_name: {
    display: "inline-block",
    width: 544,
    //   backgroundColor: "#000000",
  },
});

function EditWasphaCommissionForm({
  store_id,
  onChange,
  previous_value_delivery,
  previous_value_delivery_type,
  previous_value_pickup,
  previous_value_pickup_type,
}) {
  const classes = useStyles();
  const translate = useTranslate();
  const refresh = useRefresh();
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
    values.store_id = store_id;
    var auth = localStorage.getItem("auth");
    const { access_token } = JSON.parse(auth);
    const url = API_URL + "/edit-store-attributes";

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
      <Button
        onClick={handleClick}
        label="ra.strings.edit_waspha_commission"
      ></Button>
      <Dialog
        fullWidth
        open={showDialog}
        onClose={handleCloseClick}
        aria-label="ra.strings.edit_waspha_commission"
        onClick={(e) => e.stopPropagation()}
        disableBackdropClick={true}
      >
        <DialogTitle>
          {translate("ra.strings.edit_waspha_commission")}
        </DialogTitle>

        <FormWithRedirect
          resource="messages"
          save={handleSubmit}
          validate={validate}
          render={({ handleSubmitWithRedirect, pristine, saving }) => (
            <>
              <DialogContent>
                <div
                  style={{
                    width: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <NumberInput
                    source="waspha_fee_delivery"
                    label="ra.strings.waspha_commission_delivery"
                    min="1"
                    defaultValue={previous_value_delivery}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      width: "60%",
                    }}
                  />

                  <SelectInput
                    label="ra.strings.type"
                    source="waspha_fee_delivery_type"
                    choices={[
                      { id: "percentage", name: "Percentage" },
                      { id: "fixed", name: "Fixed" },
                    ]}
                    defaultValue={previous_value_delivery_type}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
                <div
                  style={{
                    width: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <NumberInput
                    source="waspha_fee_pickup"
                    label="ra.strings.waspha_commission_pickup"
                    min="1"
                    defaultValue={previous_value_pickup}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      width: "60%",
                    }}
                  />
                  <SelectInput
                    label="ra.strings.type"
                    source="waspha_fee_pickup_type"
                    choices={[
                      { id: "percentage", name: "Percentage" },
                      { id: "fixed", name: "Fixed" },
                    ]}
                    defaultValue={previous_value_pickup_type}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
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

export default EditWasphaCommissionForm;

const validate = (values) => {
  const errors = {};

  if (!values.waspha_fee_delivery) {
    errors.waspha_fee_delivery = ["Required"];
  }
  if (values.waspha_fee_delivery <= 0) {
    errors.waspha_fee_delivery = ["Invalid value"];
  }
  if (!values.waspha_fee_pickup) {
    errors.waspha_fee_pickup = ["Required"];
  }
  if (values.waspha_fee_pickup <= 0) {
    errors.waspha_fee_pickup = ["Invalid value"];
  }

  return errors;
};

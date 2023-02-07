// in src/drivers/ApproveButton.js
import React, { Component, useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FlatButton from "material-ui/FlatButton";
import { showNotification as showNotificationAction } from "admin-on-rest";
import { push as pushAction } from "react-router-redux";

import { Button, Confirm, useRedirect } from "react-admin";
import { API_URL, ROLES } from "../../constants";
import _ from "lodash";
import SendMessageForm from "../Forms/SendMessageForm";
import AddZoneOptionForm from "./AddZoneOptionForm";

class ApproveButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmationModalShow: false,
      showForm: false,
    };
  }
  handleClick = () => {
    const { push, record, showNotification, refresh } = this.props;

    const updatedRecord = { driver_id: record.id, is_approved: true };
    var auth = localStorage.getItem("auth");
    const { access_token } = JSON.parse(auth);
    const url = API_URL + "/change-driver-status";

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
        this.handleApproveConfirmation();
        // showNotification("driver approved");
        //useRedirect("list", "drivers");
        this.setState({ showForm: true }, () => {
          //console.log("stsdnfjngdjnedfgn gjknxdfgngdfin");
        });
        // push("/drivers");
        //refresh();
      })
      .catch((e) => {
        console.error(e);
        showNotification("Error: driver not approved", "warning");
      });
  };

  handleApproveConfirmation = (e) => {
    if (!_.isUndefined(e)) {
      e.stopPropagation();
    }

    const temp = !this.state.confirmationModalShow;
    this.setState({
      confirmationModalShow: temp,
    });
  };

  render() {
    //const redirect = (basePath, id, data) => `${API_URL}/drivers`;
    const { showForm } = this.state;

    // console.log("render is working" + JSON.stringify(this.props));
    return (
      <>
        <Button
          label="ra.strings.approve"
          handleApproveConfirmation
          onClick={this.handleApproveConfirmation}
        />
        {/* <AddZoneOptionForm
          id={1}
          role={ROLES.DRIVER}
          onChange={() => {
            console.log("ads");
          }}
          shouldShowDialog={true}
        /> */}
        {showForm ? (
          <AddZoneOptionForm
            id={this.props.record.id}
            role={ROLES.DRIVER}
            onChange={() => {
              //console.log("ads");
            }}
          />
        ) : (
          <Confirm
            isOpen={this.state.confirmationModalShow}
            loading={!this.state.confirmationModalShow}
            title="ra.strings.approve_driver"
            content="ra.message.are_you_sure"
            onConfirm={this.handleClick}
            onClose={this.handleApproveConfirmation}
          />
        )}
      </>
    );
  }
}

ApproveButton.propTypes = {
  push: PropTypes.func,
  record: PropTypes.object,
  showNotification: PropTypes.func,
};

export default connect(null, {
  push: pushAction,
})(ApproveButton);

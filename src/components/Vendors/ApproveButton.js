// in src/vendors/ApproveButton.js
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FlatButton from "material-ui/FlatButton";
import { showNotification as showNotificationAction } from "admin-on-rest";
import { push as pushAction } from "react-router-redux";

import { Button, Confirm, useRedirect } from "react-admin";
import { API_URL, RESPONSE_STATUS } from "../../constants";
import _ from "lodash";

class ApproveButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmationModalShow: false,
    };
  }
  handleClick = () => {
    const { push, record, showNotification, refresh } = this.props;

    const updatedRecord = { store_id: record.id, is_approved: true };
    var auth = localStorage.getItem("auth");
    const { access_token } = JSON.parse(auth);
    const url = API_URL + "/change-vendor-status";

    fetch(url, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      method: "POST",
      body: JSON.stringify(updatedRecord),
    })
      .then((response) => {
        this.handleApproveConfirmation();
        if (response.status == RESPONSE_STATUS.UPDATED) {
          showNotification("vendor approved");
        } else {
          response.text().then((text) => {
            text = JSON.parse(text);
            showNotification(text.message, "warning");
            push("/vendors");
            refresh();
          });
        }

        //useRedirect("list", "vendors");
        push("/vendors");
        refresh();
      })
      .catch((e) => {
        console.error(e);
        showNotification("Error: vendor not approved", "warning");
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
    //const redirect = (basePath, id, data) => `${API_URL}/vendors`;
    return (
      <>
        <Button
          label="ra.strings.approve"
          handleApproveConfirmation
          onClick={this.handleApproveConfirmation}
        />
        <Confirm
          isOpen={this.state.confirmationModalShow}
          loading={!this.state.confirmationModalShow}
          title="ra.strings.approve_vendor"
          content="ra.message.are_you_sure"
          onConfirm={this.handleClick}
          onClose={this.handleApproveConfirmation}
        />
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

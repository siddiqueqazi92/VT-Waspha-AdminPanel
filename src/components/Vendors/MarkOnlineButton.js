// in src/vendors/MarkOnlineButton.js
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FlatButton from "material-ui/FlatButton";
import { showNotification as showNotificationAction } from "admin-on-rest";
import { push as pushAction } from "react-router-redux";

import { Button, Confirm, useRedirect } from "react-admin";
import { API_URL } from "../../constants";
import _ from "lodash";

class MarkOnlineButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmationModalShow: false,
    };
  }

  handleClick = () => {
    const { push, record, showNotification, role, refresh } = this.props;

    const updatedRecord = { id: record.id, is_online: true, role: role };
    var auth = localStorage.getItem("auth");
    const { access_token } = JSON.parse(auth);
    const url = API_URL + "/change-online-status";

    fetch(url, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      method: "POST",
      body: JSON.stringify(updatedRecord),
    })
      .then((response) => {
        //console.log({ response: response.ok });
        this.handleApproveConfirmation();
        if (response.ok) {
          showNotification("Vendor is online now");
          //useRedirect("list", "vendors");
          push("/vendors");
          refresh();
        }
        //showNotification("Error: Failed to mark vendor online", "error");
      })
      .catch((e) => {
        console.error(e);
        showNotification("Error: Failed to mark vendor online", "error");
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
          label="ra.strings.mark_online"
          handleApproveConfirmation
          onClick={this.handleApproveConfirmation}
        />
        <Confirm
          isOpen={this.state.confirmationModalShow}
          loading={!this.state.confirmationModalShow}
          title="ra.strings.mark_online"
          content="ra.message.are_you_sure"
          onConfirm={this.handleClick}
          onClose={this.handleApproveConfirmation}
        />
      </>
    );
  }
}

MarkOnlineButton.propTypes = {
  push: PropTypes.func,
  record: PropTypes.object,
  showNotification: PropTypes.func,
};

export default connect(null, {
  push: pushAction,
})(MarkOnlineButton);

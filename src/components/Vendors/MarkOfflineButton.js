// in src/vendors/MarkOfflineButton.js
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FlatButton from "material-ui/FlatButton";

import { push as pushAction } from "react-router-redux";

import { Button, Confirm, useRedirect } from "react-admin";
import { API_URL } from "../../constants";
import _ from "lodash";

class MarkOfflineButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmationModalShow: false,
    };
  }
  handleClick = () => {
    const { push, record, showNotification, role, refresh } = this.props;

    const updatedRecord = { id: record.id, is_online: false, role: role };
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
        //console.log({ response: response });
        this.handleApproveConfirmation();
        if (response.ok) {
          showNotification("Vendor is offline now");
          //useRedirect("list", "vendors");
          push("/vendors");
          refresh();
        }
        //showNotification("Error: Failed to mark vendor offline", "error");
      })
      .catch((e) => {
        console.error(e);
        showNotification("Error: Failed to mark vendor offline", "warning");
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
          label="ra.strings.mark_offline"
          handleApproveConfirmation
          onClick={this.handleApproveConfirmation}
        />
        <Confirm
          isOpen={this.state.confirmationModalShow}
          loading={!this.state.confirmationModalShow}
          title="ra.strings.mark_offline"
          content="ra.message.are_you_sure"
          onConfirm={this.handleClick}
          onClose={this.handleApproveConfirmation}
        />
      </>
    );
  }
}

MarkOfflineButton.propTypes = {
  push: PropTypes.func,
  record: PropTypes.object,
  showNotification: PropTypes.func,
};

export default connect(null, {
  push: pushAction,
})(MarkOfflineButton);

// in src/vendors/UnsubWasphaExpressButton.js
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FlatButton from "material-ui/FlatButton";
import { showNotification as showNotificationAction } from "admin-on-rest";
import { push as pushAction } from "react-router-redux";

import { Button, Confirm, useRedirect } from "react-admin";
import { API_URL } from "../../constants";
import _ from "lodash";

class UnsubWasphaExpressButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmationModalShow: false,
    };
  }
  handleClick = () => {
    const { push, record, showNotification, refresh } = this.props;

    const updatedRecord = {
      store_id: record.id,
      is_waspha_express_subscribed: false,
    };
    var auth = localStorage.getItem("auth");
    const { access_token } = JSON.parse(auth);
    const url = API_URL + "/update-vendor-subscription-waspha-express";

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
        showNotification("Vendor unsubscribed to waspha express");
        //useRedirect("list", "vendors");
        push("/vendors");
        refresh();
      })
      .catch((e) => {
        console.error(e);
        showNotification(
          "Error: Unable to unsubscribe vendor to waspha express",
          "warning"
        );
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
          label="ra.strings.unsubscribe_waspha_express"
          handleApproveConfirmation
          onClick={this.handleApproveConfirmation}
        />
        <Confirm
          isOpen={this.state.confirmationModalShow}
          loading={!this.state.confirmationModalShow}
          title="ra.strings.unsusbcribe_vendor_to_waspha_express"
          content="ra.message.are_you_sure"
          onConfirm={this.handleClick}
          onClose={this.handleApproveConfirmation}
        />
      </>
    );
  }
}

UnsubWasphaExpressButton.propTypes = {
  push: PropTypes.func,
  record: PropTypes.object,
  showNotification: PropTypes.func,
};

export default connect(null, {
  push: pushAction,
})(UnsubWasphaExpressButton);

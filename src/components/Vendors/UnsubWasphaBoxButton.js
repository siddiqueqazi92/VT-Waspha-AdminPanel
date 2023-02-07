// in src/vendors/UnsubWasphaBoxButton.js
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FlatButton from "material-ui/FlatButton";
import { showNotification as showNotificationAction } from "admin-on-rest";
import { push as pushAction } from "react-router-redux";

import { Button, Confirm, useRedirect } from "react-admin";
import { API_URL } from "../../constants";
import _ from "lodash";

class UnsubWasphaBoxButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmationModalShow: false,
    };
  }
  handleClick = () => {
    const { push, record, showNotification, refresh } = this.props;

    const updatedRecord = {
      store: record.id,
      waspha_box: false,
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
        this.handleApproveConfirmation();
        showNotification("Vendor unsubscribed to WASPHA Box");
        //useRedirect("list", "vendors");
        push("/vendors");
        refresh();
      })
      .catch((e) => {
        console.error(e);
        showNotification(
          "Error: Unable to unsubscribe vendor to WASPHA Box",
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
          label="ra.strings.unsubscribe_waspha_box"
          handleApproveConfirmation
          onClick={this.handleApproveConfirmation}
        />
        <Confirm
          isOpen={this.state.confirmationModalShow}
          loading={!this.state.confirmationModalShow}
          title="ra.strings.unsusbcribe_vendor_to_waspha_box"
          content="ra.message.are_you_sure"
          onConfirm={this.handleClick}
          onClose={this.handleApproveConfirmation}
        />
      </>
    );
  }
}

UnsubWasphaBoxButton.propTypes = {
  push: PropTypes.func,
  record: PropTypes.object,
  showNotification: PropTypes.func,
};

export default connect(null, {
  push: pushAction,
})(UnsubWasphaBoxButton);

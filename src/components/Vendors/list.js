import React from "react";
import {
  Datagrid,
  DeleteButton,
  List,
  TextField,
  BooleanField,
  FunctionField,
  useTranslate,
  NumberField,
  EditButton,
} from "react-admin";

import { VendorFilter } from "./Filters";
import {
  ApproveRejectButton,
  MarkOnlineOfflineButton,
  SubUnsubWasphaExpressButton,
  SubUnsubWasphaBoxButton,
  SubUnsubServicesButton,
} from "./Fields";
import { LANGUAGE, RESOURCES, ROLES } from "../../constants";

import BulkDeleteButton from "../Buttons/BulkDeleteButton";
import EditWasphaCommissionButton from "../Providers/EditWasphaCommissionButton";
import MakePaymentButton from "../Providers/MakePaymentButton";
import ReceivePaymentButton from "../Providers/ReceivePaymentButton";
import SendMessageButton from "../Buttons/SendMessageButton";
import UserLinkField from "../Common/Fields/UserLinkField";

export const VendorList = (props) => {
  return (
    <List
      {...props}
      filterDefaultValues={{ countryId: 132, isApproved: true }}
      filters={<VendorFilter />}
      title="ra.strings.vendors"
      bulkActionButtons={<BulkDeleteButton resource_name={RESOURCES.VENDORS} />}
    >
      <Datagrid rowClick="show">
        <TextField source="id" label="ra.strings.id" />
        <UserLinkField label="ra.strings.vendor" />

        <FunctionField
          label="ra.strings.phone"
          render={(record) => `${record.country_code}${record.phone}`}
        />
        <TextField source="owner" label="ra.strings.owner" />
        {/* <TextField
          source={"category." + LANGUAGE}
          label="ra.strings.category"
        /> */}
        <BooleanField source="is_approved" label="ra.strings.approved" />
        <BooleanField source="is_online" label="ra.strings.online" />

        <NumberField
          source="credit_amount"
          label="ra.strings.credit_amount"
          options={{ maximumFractionDigits: 2 }}
        />
        <NumberField
          source="debit_amount"
          label="ra.strings.debit_amount"
          options={{ maximumFractionDigits: 2 }}
        />

        {/* <FunctionField
          label="ra.strings.waspha_commission_delivery"
          render={(record) =>
            `${record.waspha_fee_delivery}${
              record.waspha_fee_delivery_type == "percentage" ? "%" : "(fixed)"
            }`
          }
        />
        <FunctionField
          label="ra.strings.waspha_commission_pickup"
          render={(record) =>
            `${record.waspha_fee_pickup}${
              record.waspha_fee_pickup_type == "percentage" ? "%" : "(fixed)"
            }`
          }
        /> */}
        {/* <LinkToRelatedReports /> */}

        {/* <SubUnsubServicesButton /> */}
        {/* <SubUnsubWasphaBoxButton /> */}
        <SubUnsubWasphaExpressButton />
        <EditWasphaCommissionButton />
        <ApproveRejectButton />
        <SendMessageButton role={ROLES.VENDOR} />
        <MarkOnlineOfflineButton />
        <MakePaymentButton />
        <ReceivePaymentButton />
        <EditButton />
        <DeleteButton undoable={false} />
        {/* <SendButton /> */}
      </Datagrid>
    </List>
  );
};

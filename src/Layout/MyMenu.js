// in src/Menu.js
import * as React from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@material-ui/core";
import {
  MenuItemLink,
  getResources,
  useTranslate,
  DashboardMenuItem,
  usePermissions,
} from "react-admin";
import DefaultIcon from "@material-ui/icons/ViewList";
import _ from "lodash";
import { RESOURCES } from "../constants";
import SubMenu from "./SubMenu";
import Users from "../components/Users";
import Vendors from "../components/Vendors";
import Drivers from "../components/Drivers";
import Reports from "../components/Reports";
import DeliveryPartnerReports from "../components/DeliveryPartnerReports";
import Rfps from "../components/Rfps";
import Commissions from "../components/Commissions";
import DriverCommissions from "../components/DriverCommissions";
import Orders from "../components/Orders";
import Settings from "../components/Settings";
import Translations from "../components/Translations";
import NotificationTemplates from "../components/NotificationTemplates";
import ScreenContents from "../components/ScreenContents";
import CancellationReasons from "../components/CancellationReasons";
import DeliveryVehicles from "../components/DeliveryVehicles";
import DeliveryVehicleCharges from "../components/DeliveryVehicleCharges";
import Ads from "../components/Ads";

import { useState } from "react";
import PromoCodes from "../components/PromoCodes";
import Zones from "../components/Zones";
import Wallets from "../components/Wallets";
import Categories from "../components/Categories";
import Admins from "../components/Admins";
import WasphaCountries from "../components/WasphaCountries";

import { ROLES } from "../constants";
const MyMenu = ({ onMenuClick, logout, dense = false }) => {
  const { permissions } = usePermissions();
  const [state, setState] = useState({
    menuUsers: true,
    menuVendors: true,
    menuDrivers: true,
    menuCategories: true,
    menuCommissions: true,
    menuDriverCommissions: true,
    menuReports: true,
    menuDeliveryPartnerReports: true,
    menuRfps: true,
    menuOrders: true,
    menuSettings: true,
    menuTranslations: true,
    menuNotificationTemplates: true,
    menuScreenContents: true,
    menuCancellationReasons: true,
    menuDeliveryVehicles: true,
    menuDeliveryVehicleCharges: true,
    menuAds: true,
    menuPromoCodes: true,
    menuZones: true,
    menuWallets: true,
    menuCategories: true,
    menuWasphaCountries: true,
    menuAdmins: true,
  });
  const isXSmall = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const open = useSelector((state) => state.admin.ui.sidebarOpen);
  let resources = useSelector(getResources);
  resources = _.filter(resources, { hasList: true });

  const translate = useTranslate();
  const handleToggle = (menu) => {
    setState((state) => ({ ...state, [menu]: !state[menu] }));
  };
  return (
    <div>
      <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open} />
      {permissions === ROLES.SUPER_ADMIN && (
        <>
          <MenuItemLink
            to={`/${RESOURCES.WASPHA_COUNTRIES}`}
            primaryText={translate("ra.strings.waspha_countries")}
            leftIcon={<WasphaCountries.icon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
          <MenuItemLink
            to={`/${RESOURCES.ADMINS}`}
            primaryText={translate("ra.strings.admins")}
            leftIcon={<Admins.icon />}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
        </>
      )}
      <SubMenu
        handleToggle={() => handleToggle("menuUsers")}
        isOpen={state.menuUsers}
        sidebarIsOpen={open}
        name={translate("ra.strings.users")}
        icon={<Users.icon />}
        dense={dense}
      >
        <MenuItemLink
          to={`/${RESOURCES.USERS}`}
          primaryText={translate("ra.strings.all_users")}
          leftIcon={<Users.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />

        <MenuItemLink
          to={`/${RESOURCES.RFPS}`}
          primaryText={translate("ra.strings.rfps")}
          leftIcon={<Rfps.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
        <MenuItemLink
          to={`/${RESOURCES.COMMISSIONS}`}
          primaryText={translate("ra.strings.commissions")}
          leftIcon={<Commissions.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
        <MenuItemLink
          to={`/${RESOURCES.WALLETS}`}
          primaryText={translate("ra.strings.wallets")}
          leftIcon={<Wallets.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={() => handleToggle("menuVendors")}
        isOpen={state.menuVendors}
        sidebarIsOpen={open}
        name={translate("ra.strings.vendors")}
        icon={<Vendors.icon />}
        dense={dense}
      >
        <MenuItemLink
          to={`/${RESOURCES.CATEGORIES}`}
          primaryText={translate("ra.strings.categories")}
          leftIcon={<Categories.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
        <MenuItemLink
          to={`/${RESOURCES.VENDORS}`}
          primaryText={translate("ra.strings.all_vendors")}
          leftIcon={<Vendors.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
        <MenuItemLink
          to={`/${RESOURCES.ORDERS}`}
          primaryText={translate("ra.strings.orders")}
          leftIcon={<Orders.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
        <MenuItemLink
          to={`/${RESOURCES.REPORTS}`}
          primaryText={translate("ra.strings.reports")}
          leftIcon={<Reports.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={() => handleToggle("menuDrivers")}
        isOpen={state.menuDrivers}
        sidebarIsOpen={open}
        name={translate("ra.strings.delivery_partners")}
        icon={<Drivers.icon />}
        dense={dense}
      >
        <MenuItemLink
          to={`/${RESOURCES.DRIVERS}`}
          primaryText={translate("ra.strings.all_delivery_partners")}
          leftIcon={<Drivers.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
        <MenuItemLink
          to={`/${RESOURCES.DELIVERY_PARTNER_REPORTS}`}
          primaryText={translate("ra.strings.reports")}
          leftIcon={<DeliveryPartnerReports.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
        <MenuItemLink
          to={`/${RESOURCES.DRIVER_COMMISSIONS}`}
          primaryText={translate("ra.strings.commissions")}
          leftIcon={<DriverCommissions.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
      </SubMenu>
      <SubMenu
        handleToggle={() => handleToggle("menuDeliveryVehicles")}
        isOpen={state.menuDeliveryVehicles}
        sidebarIsOpen={open}
        name={translate("ra.strings.delivery_vehicles")}
        icon={<Drivers.icon />}
        dense={dense}
      >
        <MenuItemLink
          to={`/${RESOURCES.DELIVERY_VEHICLES}`}
          primaryText={translate("ra.strings.all_delivery_vehicles")}
          leftIcon={<DeliveryVehicles.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
        <MenuItemLink
          to={`/${RESOURCES.DELIVERY_VEHICLE_CHARGES}`}
          primaryText={translate("ra.strings.charges")}
          leftIcon={<DeliveryVehicleCharges.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
      </SubMenu>
      <MenuItemLink
        to={`/${RESOURCES.PROMO_CODES}`}
        primaryText={translate("ra.strings.promo_codes")}
        leftIcon={<PromoCodes.icon />}
        onClick={onMenuClick}
        sidebarIsOpen={open}
        dense={dense}
      />
      <MenuItemLink
        to={`/${RESOURCES.ZONES}`}
        primaryText={translate("ra.strings.zones")}
        leftIcon={<Zones.icon />}
        onClick={onMenuClick}
        sidebarIsOpen={open}
        dense={dense}
      />
      <MenuItemLink
        to={`/${RESOURCES.ADS}`}
        primaryText={translate("ra.strings.ads")}
        leftIcon={<Ads.icon />}
        onClick={onMenuClick}
        sidebarIsOpen={open}
        dense={dense}
      />
      <SubMenu
        handleToggle={() => handleToggle("menuSettings")}
        isOpen={state.menuSettings}
        sidebarIsOpen={open}
        name={translate("ra.strings.settings")}
        icon={<Settings.icon />}
        dense={dense}
      >
        <MenuItemLink
          to={`/${RESOURCES.SETTINGS}`}
          primaryText={translate("ra.strings.general")}
          leftIcon={<Settings.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
        <MenuItemLink
          to={`/${RESOURCES.TRANSLATIONS}`}
          primaryText={translate("ra.strings.translations")}
          leftIcon={<Translations.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
        <MenuItemLink
          to={`/${RESOURCES.NOTIFICATION_TEMPLATES}`}
          primaryText={translate("ra.strings.notification_templates")}
          leftIcon={<NotificationTemplates.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
        <MenuItemLink
          to={`/${RESOURCES.SCREEN_CONTENTS}`}
          primaryText={translate("ra.strings.screen_contents")}
          leftIcon={<ScreenContents.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
        <MenuItemLink
          to={`/${RESOURCES.CANCELLATION_REASONS}`}
          primaryText={translate("ra.strings.cancellation_reasons")}
          leftIcon={<CancellationReasons.icon />}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
      </SubMenu>

      {isXSmall && logout}
    </div>
  );
};

export default MyMenu;

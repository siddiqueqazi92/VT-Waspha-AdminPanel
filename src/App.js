import * as React from "react";
import { Admin, Resource } from "react-admin";

import authProvider from "./providers/authProvider";
import myDataProvider from "./providers/dataProvider";

import { createHashHistory } from "history";

import { i18nProvider, theme } from "./i18n/i18Provider";
import { RESOURCES } from "./constants";
import MyLayout from "./Layout/MyLayout";
import { Dashboard } from "./Dashboard";
import customRoutes from "./routes";
import CategoryTimeouts from "./components/CategoryTimeouts";
import WasphaCountries from "./components/WasphaCountries";
import Admins from "./components/Admins";
import Ads from "./components/Ads";
import Users from "./components/Users";
import Categories from "./components/Categories";
import Vendors from "./components/Vendors";
import Reports from "./components/Reports";
import Drivers from "./components/Drivers";
import DeliveryPartnerReports from "./components/DeliveryPartnerReports";
import Orders from "./components/Orders";
import Wallets from "./components/Wallets";
import Rfps from "./components/Rfps";
import Translations from "./components/Translations";
import NotificationTemplates from "./components/NotificationTemplates";
import PromoCodes from "./components/PromoCodes";
import ScreenContents from "./components/ScreenContents";
import Settings from "./components/Settings";
import Commissions from "./components/Commissions";
import DriverCommissions from "./components/DriverCommissions";
import CancellationReasons from "./components/CancellationReasons";
import CancellationReasonsItems from "./components/CancellationReasonsItems";
import Zones from "./components/Zones";
import DeliveryVehicles from "./components/DeliveryVehicles";
import DeliveryVehicleCharges from "./components/DeliveryVehicleCharges";
import StoreProducts from "./components/StoreProducts";
import StoreCategories from "./components/StoreCategories";

// const myTheme = createMuiTheme({
//   palette: {
//     primary: indigo,
//     secondary: pink,
//     error: red,
//   },
// });

const history = createHashHistory();

class App extends React.Component {
  render() {
    return (
      <Admin
        layout={MyLayout}
        theme={theme}
        dashboard={Dashboard}
        authProvider={authProvider}
        dataProvider={myDataProvider}
        i18nProvider={i18nProvider}
        // theme={myTheme}
        history={history}
        customRoutes={customRoutes}
      >
        <Resource name={RESOURCES.USERS} {...Users} />

        {/* 
        <Resource
          name="roles"
          list={RolesList}
          create={CreateRole}
          edit={EditRole}
          icon={AssignmentIcon}
        /> */}

        <Resource name={RESOURCES.ADMINS} {...Admins} />

        <Resource name={RESOURCES.CATEGORIES} {...Categories} />

        <Resource name={RESOURCES.VENDORS} {...Vendors} />
        <Resource name={RESOURCES.REPORTS} {...Reports} />

        <Resource name={RESOURCES.DRIVERS} {...Drivers} />

        <Resource
          name={RESOURCES.DELIVERY_PARTNER_REPORTS}
          {...DeliveryPartnerReports}
        />
        <Resource name={RESOURCES.ORDERS} {...Orders} />
        <Resource name={RESOURCES.ORDER_ITEMS} />
        <Resource name={RESOURCES.COUNTRIES} />
        <Resource name={RESOURCES.MESSAGES} />
        <Resource name={RESOURCES.WALLETS} {...Wallets} />
        <Resource name={RESOURCES.VEHICLES} />
        <Resource name={RESOURCES.REVIEWS} />

        <Resource name={RESOURCES.RFPS} {...Rfps} />
        <Resource name={RESOURCES.TRANSLATIONS} {...Translations} />
        <Resource
          name={RESOURCES.NOTIFICATION_TEMPLATES}
          {...NotificationTemplates}
        />
        <Resource name={RESOURCES.PROMO_CODES} {...PromoCodes} />
        <Resource name="rfp-items" exlude={true} />
        <Resource name="addresses" />

        <Resource name={RESOURCES.SCREEN_CONTENTS} {...ScreenContents} />
        <Resource name={RESOURCES.SETTINGS} {...Settings} />
        <Resource name={RESOURCES.COMMISSIONS} {...Commissions} />
        <Resource name={RESOURCES.DRIVER_COMMISSIONS} {...DriverCommissions} />
        <Resource
          name={RESOURCES.CANCELLATION_REASONS}
          {...CancellationReasons}
        />
        <Resource
          name={RESOURCES.CANCELLATION_REASON_ITEMS}
          {...CancellationReasonsItems}
        />
        <Resource name={RESOURCES.ZONES} {...Zones} />
        <Resource name={RESOURCES.DELIVERY_VEHICLES} {...DeliveryVehicles} />
        <Resource
          name={RESOURCES.DELIVERY_VEHICLE_CHARGES}
          {...DeliveryVehicleCharges}
        />
        <Resource name={RESOURCES.ADS} {...Ads} />
        <Resource name={RESOURCES.STORE_PRODUCTS} {...StoreProducts} />
        <Resource name={RESOURCES.STORE_CATEGORIES} {...StoreCategories} />

        <Resource name={RESOURCES.CATEGORY_TIMEOUTS} {...CategoryTimeouts} />
        <Resource name={RESOURCES.WASPHA_COUNTRIES} {...WasphaCountries} />
      </Admin>
    );
  }
}

export default App;

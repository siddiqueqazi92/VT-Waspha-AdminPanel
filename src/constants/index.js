// export const API_URL = "http://localhost:1337/admin";
//export const API_URL = "http://localhost:1338/admin";
//export const API_URL = "https://waspha-staging.herokuapp.com/admin";
//export const API_URL = "https://waspha-production.herokuapp.com/admin";
export const API_URL = "https://api.waspha.com/admin";
export const GOOGLE_API_KEY = "AIzaSyDtWfZpDw1wz9RFr9hC9a92UQtBWLfT2lY";
export const RESOURCES = {
	PROMO_CODES: "promo-codes",
	REPORTS: "reports",
	DELIVERY_PARTNER_REPORTS: "delivery-partner-reports",
	SCREEN_CONTENTS: "screen-contents",
	USERS: "users",
	CATEGORIES: "categories",
	DRIVERS: "drivers",
	ORDERS: "orders",
	NOTIFICATION_TEMPLATES: "notification-templates",
	TRANSLATIONS: "translations",
	RFPS: "rfps",
	REVIEWS: "reviews",
	VEHICLES: "vehicles",
	WALLETS: "wallets",
	MESSAGES: "messages",
	COUNTRIES: "countries",
	ORDER_ITEMS: "order-items",
	DRIVERS: "drivers",
	VENDORS: "vendors",
	SETTINGS: "settings",
	CANCELLATION_REASONS: "cancellation-reasons",
	CANCELLATION_REASON_ITEMS: "cancellation-reason-items",
	COMMISSIONS: "commissions",
	DRIVER_COMMISSIONS: "driver-commissions",
	ZONES: "zones",
	DELIVERY_VEHICLES: "delivery-vehicles",
	DELIVERY_VEHICLE_CHARGES: "delivery-vehicle-charges",
	ADS: "ads",
	STORE_PRODUCTS: "store-products",
	STORE_CATEGORIES: "store-categories",
	CATEGORY_TIMEOUTS: "category-timeouts",
	WASPHA_COUNTRIES: "waspha-countries",
	ADMINS: "admins",
};
export const RESOURCE_TYPES = {
	GET: "get",
	ADD: "add",
	DELETE: "delete",
	UPDATE: "update",
	CREATE: "create",
};

export const ROLES = {
	SUPER_ADMIN: "super_admin",
	ADMIN: "admin",
	VENDOR: "vendor",
	USER: "user",
	DRIVER: "driver",
};
export const DRIVER_TYPES = {
	ONLINE: "online",
	OFFLINE: "offline",
	WASPHA_EXPRESS: "waspha_express",
	DESCRIPTION: {
		online: "Online",
		offline: "Offline",
		waspha_express: "Waspha Express",
	},
};
export const AD_TYPES = {
	POPUP_AD: "popup_ad",
	PRIZE_AD: "prize_ad",
	NOTIFICATION_AD: "notification_ad",
};
export const RESPONSE_STATUS = {
	OK: 200,
	CREATED: 201,
	UPDATED: 201,
};
// date time formats
export const DATE_FORMAT1 = "Do MMMM YYYY, HH:mm";
export const DATE_FORMAT2 = "Do MMM";
export const DATE_FORMAT3 = "Do MMM YYYY";
export const DATE_FORMAT4 = "DD/MM/YYYY";
export const DATE_FORMAT5 = "MMM D";
export const DATE_FORMAT6 = "MMM YYYY";
export const DATE_FORMAT7 = "ddd D MMM";
export const DATE_FORMAT8 = "ddd, D MMM";
export const DATE_FORMAT9 = "DD MMM";
export const DATE_FORMAT10 = "D MMM YYYY";
export const DATE_TIME_FORMAT1 = "YYYY-MM-DD HH:mm";
export const DATE_TIME_FORMAT2 = "MMM D HH A";
export const DATE_TIME_FORMAT3 = "HH:mm DD-MM-YYYY";
export const DATE_TIME_FORMAT4 = "dddd Do MMM, YYYY @ HH:mm";
export const DATE_TIME_FORMAT5 = "dddd Do MMM, YYYY @ hh: mm a";
export const DATE_TIME_FORMAT6 = "D MMM YYYY at HH: mm";
export const DATE_TIME_FORMAT_BULK = "DD/MM/YYYY HH:mm";
export const DATE_TIME_FORMAT7 = "DD MMMM YYYY";
export const DATE_TIME_FORMAT8 = "MMMM YYYY";

export const TIME_FORMAT1 = "HH:mm";
export const TIME_FORMAT2 = "H [h] : mm [min]";
export const TIME_FORMAT3 = "hh A";
export const TIME_FORMAT4 = "hh:mm A";
export const TIME_FORMAT5 = "h:mm A";
export const TIME_ZONE = (-1 * new Date().getTimezoneOffset()) / 60;

let auth = localStorage.getItem("auth");
let lang = "en";
if (auth) {
	const { language } = JSON.parse(auth);
	lang = language;
}
export const LANGUAGE = lang;

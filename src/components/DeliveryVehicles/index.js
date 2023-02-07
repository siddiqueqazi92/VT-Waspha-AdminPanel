import { DeliveryVehicleList } from "./list";
import { EditDeliveryVehicle } from "./edit";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import { CreateDeliveryVehicle } from "./create";
import { ShowDeliveryVehicle } from "./show";

export default {
  list: DeliveryVehicleList,
  create: CreateDeliveryVehicle,
  edit: EditDeliveryVehicle,
  show: ShowDeliveryVehicle,
  icon: DriveEtaIcon,
};

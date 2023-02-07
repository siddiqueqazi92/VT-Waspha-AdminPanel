import { DriverCommissionList } from "./list";
import { EditDriverCommission } from "./edit";
import MoneyIcon from "@material-ui/icons/Money";
import { CreateDriverCommission } from "./create";
import { ShowDriverCommission } from "./show";

export default {
  list: DriverCommissionList,
  create: CreateDriverCommission,
  edit: EditDriverCommission,
  show: ShowDriverCommission,
  icon: MoneyIcon,
};

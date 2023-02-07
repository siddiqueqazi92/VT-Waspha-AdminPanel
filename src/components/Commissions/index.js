import { CommissionList } from "./list";
import { EditCommission } from "./edit";
import MoneyIcon from "@material-ui/icons/Money";
import { CreateCommission } from "./create";
import { ShowCommission } from "./show";

export default {
  list: CommissionList,
  create: CreateCommission,
  edit: EditCommission,
  show: ShowCommission,
  icon: MoneyIcon,
};

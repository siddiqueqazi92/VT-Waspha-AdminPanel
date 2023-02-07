import { UserList } from "./list";
import { UserEdit } from "./edit";
import PeopleIcon from "@material-ui/icons/People";
import { CreateUser } from "./create";
import { ShowUser } from "./show";

export default {
  list: UserList,
  create: CreateUser,
  edit: UserEdit,
  show: ShowUser,
  icon: PeopleIcon,
};

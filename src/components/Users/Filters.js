import {
  Filter,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanField,
  NullableBooleanInput,
  usePermissions,
} from "react-admin";
import { ROLES } from "../../constants";

let auth = localStorage.getItem("auth");
let lang = "en";
if (auth) {
  const { language } = JSON.parse(auth);
  lang = language;
}

const UserFilter = (props) => {
  const { permissions } = usePermissions();
  return (
    <Filter {...props}>
      <TextInput label="ra.action.search" source="q" alwaysOn />
      <NullableBooleanInput
        label="ra.strings.fraud"
        source="is_fraud"
        emptyText="ra.strings.all"
        alwaysOn
      />
      {permissions === ROLES.SUPER_ADMIN && (
        <ReferenceInput
          label="ra.strings.country"
          source="countryId"
          sortBy="countryId"
          reference="countries"
          alwaysOn
        >
          <SelectInput optionText={"name." + lang} />
        </ReferenceInput>
      )}
    </Filter>
  );
};

export { UserFilter };

import {
  Filter,
  TextInput,
  NullableBooleanInput,
  ReferenceInput,
  SelectInput,
  useTranslate,
  usePermissions,
} from "react-admin";
import { CountryFilter } from "../Common/Filters";
import { ROLES } from "../../constants";
const choices = [
  { id: 2, name: "All" },
  { id: 1, name: "Approved" },
  { id: 0, name: "Unapproved" },
];

let auth = localStorage.getItem("auth");
let lang = "en";
if (auth) {
  const { language } = JSON.parse(auth);
  lang = language;
}
export const VendorFilter = (props) => {
  const { permissions } = usePermissions();
  const translate = useTranslate();
  return (
    <Filter {...props}>
      <TextInput label="ra.action.search" source="q" alwaysOn />
      <NullableBooleanInput
        label="ra.strings.approved"
        source="isApproved"
        optionText="ra.strings.all"
        alwaysOn
      />
      {/* <SelectInput source="status" choices={choices} alwaysOn /> */}
      {permissions === ROLES.SUPER_ADMIN && (
        <ReferenceInput
          label="ra.strings.country"
          source="countryId"
          reference="countries"
          alwaysOn
          // emptyText={translate("ra.strings.all")}
        >
          <SelectInput optionText={"name." + lang} />
        </ReferenceInput>
      )}
      {/* {permissions === ROLES.SUPER_ADMIN && <CountryFilter />} */}
      <CountryFilter />
    </Filter>
  );
};

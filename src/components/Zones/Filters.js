import {
  Filter,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanField,
  NullableBooleanInput,
} from "react-admin";

let auth = localStorage.getItem("auth");
let lang = "en";
if (auth) {
  const { language } = JSON.parse(auth);
  lang = language;
}

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="ra.action.search" source="q" alwaysOn />
    <NullableBooleanInput
      label="ra.strings.fraud"
      source="is_fraud"
      emptyText="ra.strings.all"
      alwaysOn
    />
    <ReferenceInput
      label="ra.strings.country"
      source="countryId"
      sortBy="countryId"
      reference="countries"
      alwaysOn
    >
      <SelectInput optionText={"name." + lang} />
    </ReferenceInput>
  </Filter>
);

export { UserFilter };

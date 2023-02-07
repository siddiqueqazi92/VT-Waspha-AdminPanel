import {
  Filter,
  TextInput,
  NullableBooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
const choices = [
  { id: "all", name: "All" },
  { id: "online", name: "Online" },
  { id: "offline", name: "Offline" },
  { id: "waspha_express", name: "Waspha Express" },
];
export const DriverFilter = (props) => (
  <Filter {...props}>
    <TextInput label="ra.action.search" source="q" alwaysOn />
    <NullableBooleanInput
      label="ra.strings.approved"
      source="is_approved"
      optionText="ra.strings.all"
      alwaysOn
    />
    <SelectInput
      source="status"
      label="ra.strings.type"
      choices={choices}
      alwaysOn
    />

    <ReferenceInput
      label="ra.strings.country"
      source="countryId"
      reference="countries"
      alwaysOn
    >
      <SelectInput optionText="en" />
    </ReferenceInput>
    <ReferenceInput
      label="ra.strings.vendor"
      source="storeId"
      reference="vendors"
      alwaysOn
    >
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

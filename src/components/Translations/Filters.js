import { Filter, SearchInput } from "react-admin";
//import { SearchFilter } from "../Common/Filters";

export const TranslationFilter = (props) => (
  <Filter {...props}>
    <SearchInput source="q" alwaysOn />
  </Filter>
);

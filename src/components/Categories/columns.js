import { TextField } from "material-ui";

export const ParentCategory = (props) => {
  console.log({ proposqwd: props });
  //sconst parent = props.record.parent_id;

  // return parent != null ? <TextField source="parent_id.name" /> : null;
  return <TextField source="name" />;
};

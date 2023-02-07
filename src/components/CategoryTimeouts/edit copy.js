import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  ImageInput,
  ImageField,
  useRedirect,
  useNotify,
  useRefresh,
  useGetList,
  NumberInput,
  required,
  regex,
  useGetOne,
} from "react-admin";
import { RESOURCES } from "../../constants";
import { makeStyles } from "@material-ui/core/styles";
import _ from "lodash";
import { getQueryStringValue } from "../Common/Functions";
import { useFormState } from "react-final-form";
import { jsonServerRestClient } from "admin-on-rest/lib/rest";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    width: "60%",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  numberInput: {
    maxWidth: 256,
    width: "100%",
  },
});

const CategoryInput = ({ record }) => {
  const { values } = useFormState();
  const classes = useStyles();

  if (!_.isUndefined(values.data)) {
    delete values.data;
  }
  values.data = JSON.stringify(values);
  values.category_id = record.id;

  let data = {};
  for (let key in values) {
    if (key.includes("expiry_time")) {
      data[key] = values[key];
    }
  }
  values.data = data;
  console.log({ values });
  return (
    <TextInput
      source={record.category_name}
      className={classes.numberInput}
      disabled
    />
  );
};
export const EditCategoryTimeouts = (props) => {
  let { data, ids, loading, error } = useGetList(
    RESOURCES.COUNTRIES,
    { page: 1, perPage: 20 },
    { field: "name", order: "ASC" },
    {}
  );

  const classes = useStyles();
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();
  const onSuccess = () => {
    notify(`Changes saved`);
    redirect("/category-timeouts");
    refresh();
  };

  return (
    <div>
      <Edit {...props} onSuccess={onSuccess}>
        <SimpleForm>
          <CategoryInput />
          {ids.map(function (id) {
            return (
              <div className={classes.root}>
                <NumberInput
                  className={classes.numberInput}
                  source={`expiry_time${id}`}
                  format={(v) => _.round(v)}
                  label={`Timeout For ${data[id].name.en}`}
                  validate={validateSlot}
                  //validate={[regex(/^[0-9]+$/,'number ']}
                />
              </div>
            );
          })}
        </SimpleForm>
      </Edit>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  const userName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i;
  const catSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  if (!values.en && !values.ar) {
    errors.en = ["Either En or Ar is required"];
    errors.ar = ["Either En or Ar is required"];
  }
  if (values.en && userName.test(values.en) === false) {
    errors.en = ["The name is invalid"];
  }
  if (values.slug && catSlug.test(values.slug) === false) {
    errors.slug = ["Only small letters and number"];
  }
  return errors;
};
const validateSlot = [required(), regex(/^[0-9]+$/, "Must be a valid number")];

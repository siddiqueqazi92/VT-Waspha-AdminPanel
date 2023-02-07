import React from "react";
import {
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  required,
  ImageInput,
  DateTimeInput,
  BooleanInput,
  ReferenceArrayInput,
  AutocompleteArrayInput,
  Edit,
  useTranslate,
} from "react-admin";
import { PreviewImage } from "../Common/Fields";
import { useFormState } from "react-final-form";
import _ from "lodash";
import { makeStyles } from "@material-ui/core/styles";
import { PMInput, SMInput } from "./Fields";
import { EditToolbarNoDeleteButton } from "../Common/Toolbars";
const useStyles = makeStyles({
  boxWidth: {
    width: "256px !important",
  },
});

const SubcategoryInput = (props) => {
  const classes = useStyles();
  const { values } = useFormState();

  if (values.category_id && props.choices) {
    const selectedCategory = props.choices.filter(
      (subcategory) => subcategory.parent_id === values.category_id
    );

    return (
      <SelectInput
        label="ra.strings.select_subcategory"
        source="subcategory_id"
        choices={selectedCategory}
        optionText="en"
        {...selectedCategory}
        className={classes.boxWidth}
      />
    );
  }

  return (
    <SelectInput
      source="subcategory_id"
      label="ra.strings.select_subcategory"
      className={classes.boxWidth}
    />
  );
};
export const EditPromoCode = (props) => {
  const translate = useTranslate();
  return (
    <div>
      <Edit
        {...props}
        title={
          translate("ra.strings.promo_code") +
          ` #${!_.isUndefined(props.id) ? props.id : ""}`
        }
      >
        <SimpleForm
          validate={validateCategoryCreation}
          toolbar={<EditToolbarNoDeleteButton />}
        >
          <TextInput disabled source="id" />
          <TextInput
            source="promo_code"
            label="ra.strings.promo_code"
            validate={required()}
            disabled
          ></TextInput>

          <NumberInput
            source="discount"
            label="ra.strings.discount"
            min={0}
            max={100}
            validate={required()}
          />
          {/* <NumberInput
            source="percent"
            format={(v) => v * 100}
            parse={(v) => parseFloat(v) / 100}
            label="Formatted number"
          /> */}
          <ReferenceInput
            label="ra.strings.select_country"
            source="country_id"
            reference="countries"
            allowEmpty
            validate={required()}
          >
            <SelectInput optionText="name.en" />
          </ReferenceInput>
          <BooleanInput label="ra.strings.is_requested" source="is_requested" />
          <ReferenceArrayInput
            label="ra.strings.select_vendor"
            source="vendor_id"
            reference="vendors"
            allowEmpty
          >
            <AutocompleteArrayInput />
          </ReferenceArrayInput>
          <ReferenceInput
            label="ra.strings.select_category"
            source="category_id"
            reference="categories"
            allowEmpty
          >
            <SelectInput optionText="en" />
          </ReferenceInput>
          <ReferenceInput
            label="ra.strings.select_subcategory"
            source="subcategory_id"
            reference="categories"
            allowEmpty
          >
            <SubcategoryInput />
          </ReferenceInput>
          <ReferenceArrayInput
            label="ra.strings.select_users"
            source="user_id"
            reference="users"
            allowEmpty
          >
            <AutocompleteArrayInput />
          </ReferenceArrayInput>
          <DateTimeInput
            source="start_time"
            label="ra.strings.start_time"
            validate={required()}
          />
          <DateTimeInput
            source="end_time"
            label="ra.strings.end_time"
            validate={required()}
          />
          <BooleanInput
            label="ra.strings.all_payment_methods"
            source="pm_all"
          />
          <PMInput />

          <BooleanInput label="ra.strings.all_service_modes" source="sm_all" />
          <SMInput />
          {/* <SelectArrayInput
            label="ra.strings.payment_methods"
            source="payment_methods"
            choices={[
              { id: "cash_on_delivery", name: "Cash on delivery" },
              { id: "card", name: "Card" },
              { id: "wallet", name: "Wallet" },
            ]}
          />
          <SelectArrayInput
            label="ra.strings.service_modes"
            emptyValue="No"
            source="service_modes"
            choices={[
              { id: "delivery", name: "Delivery" },
              { id: "pickup", name: "Pickup" },
            ]}
          /> */}
          <SelectInput
            label="ra.strings.apply_on"
            source="apply_on"
            choices={[
              { id: "subtotal", name: "Subtotal" },
              { id: "total", name: "Total" },
              { id: "waspha_fee", name: "Waspha Fee" },
              { id: "delivery_fee", name: "Delivery Fee" },
            ]}
          />
          <TextInput
            source="min_order_amount"
            label="ra.strings.min_order_amount"
            validate={required()}
          />
          <TextInput source="max_discount" label="ra.strings.max_discount" />
          <TextInput
            source="number_of_uses"
            label="ra.strings.number_of_uses"
            validate={required()}
          />
          <TextInput
            source="description.en"
            label="ra.strings.description_en"
            multiline
          />
          <TextInput
            source="description.ar"
            label="ra.strings.description_ar"
            multiline
          />
          <ImageInput
            source="image.en"
            label="ra.strings.image_en"
            accept="image/*"
          >
            <PreviewImage source="image.en" />
          </ImageInput>
          <ImageInput
            source="image.ar"
            label="ra.strings.image_ar"
            accept="image/*"
          >
            <PreviewImage source="image.ar" />
          </ImageInput>
        </SimpleForm>
      </Edit>
    </div>
  );
};

const validateCategoryCreation = (values) => {
  console.log({ valuessdds: values });
  const errors = {};
  if (_.isUndefined(values.image)) {
    errors.image = {
      en: "Either upload en image or ar image",
      ar: "Either upload en image or ar image",
    };
    //errors.image = ["One image is required"];
  }

  return errors;
};

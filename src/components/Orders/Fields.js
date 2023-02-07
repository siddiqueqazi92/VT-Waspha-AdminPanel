export const RatioField = (props) => {
  console.log({ propsinRationField: props.record });
  let key = props.record.key;
  let value = props.record.value;

  if (key == "waspha_fee_ratio") {
    console.log("asudsudhsd");
  }
  return key === "waspha_fee_ratio" ? (
    <span>{value}%</span>
  ) : (
    <span>{value}</span>
  );
};

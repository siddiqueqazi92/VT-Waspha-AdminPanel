import * as React from "react";
import { useSelector } from "react-redux";

import { shapeExampleStyles } from "./styles";
import ShapesComponentCreate from "./ShapesComponentCreate";

function selector(state) {
  //console.log({ stateaaaa: state });
  //return state.getIn(["app", "shapes"]);
  return {
    app: state["templateReducer"]?.getIn(["app"]),
    shapes: state["templateReducer"]?.getIn(["shapes"]),
  };
}

function ShapesCreate(props) {
  //return <ShapesComponent styles={shapeExampleStyles} />;
  const shapes = useSelector(selector);
  return shapes ? (
    <ShapesComponentCreate
      setCoordsCallback={props.setCoordsCallback}
      styles={shapeExampleStyles}
    />
  ) : (
    <></>
  );
}

export default React.memo(ShapesCreate);

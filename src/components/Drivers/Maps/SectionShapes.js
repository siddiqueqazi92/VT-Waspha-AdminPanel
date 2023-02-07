import * as React from "react";
import { useSelector } from "react-redux";

import { shapeExampleStyles } from "./styles";
import ShapesComponent from "./ShapesComponent";

function selector(state) {
  //console.log({ stateaaaa: state });
  //return state.getIn(["app", "shapes"]);
  return {
    app: state["templateReducer"]?.getIn(["app"]),
    shapes: state["templateReducer"]?.getIn(["shapes"]),
  };
}

function SectionShapes() {
  //return <ShapesComponent styles={shapeExampleStyles} />;
  const shapes = useSelector(selector);
  return shapes ? <ShapesComponent styles={shapeExampleStyles} /> : <></>;
}

export default React.memo(SectionShapes);

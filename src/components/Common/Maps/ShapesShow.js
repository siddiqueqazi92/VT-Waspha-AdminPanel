import * as React from "react";
import { useSelector } from "react-redux";

import { shapeExampleStyles } from "./styles";
import ShapesComponentShow from "./ShapesComponentShow";
import _ from "lodash";

function selector(state) {
  //console.log({ stateaaaa: state });
  //return state.getIn(["app", "shapes"]);
  return {
    app: state["templateReducer"]?.getIn(["app"]),
    shapes: state["templateReducer"]?.getIn(["shapes"]),
  };
}

function changeKeys(data, keys) {
  try {
    let result = data.map(function (o) {
      return _.mapKeys(o, function (v, k) {
        return k in keys ? keys[k] : k;
      });
    });

    return result;
  } catch (err) {
    return [];
  }
}
function ShapesShow(props) {
  let latlng = changeKeys(props.record.latlng, {
    latitude: "lat",
    longitude: "lng",
  });

  //return <ShapesComponent styles={shapeExampleStyles} />;
  const shapes = useSelector(selector);
  return shapes ? (
    <ShapesComponentShow styles={shapeExampleStyles} latlng={latlng} />
  ) : (
    <></>
  );
}

export default React.memo(ShapesShow);

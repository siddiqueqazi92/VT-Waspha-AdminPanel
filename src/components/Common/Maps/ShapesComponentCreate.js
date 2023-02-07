import * as React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { GoogleMap, Polygon, useJsApiLoader } from "@react-google-maps/api";

//import pinIcon from "../assets/pin.svg";
import { GOOGLE_API_KEY } from "../../../constants";
import { Button } from "react-admin";

const POLYLINE_OPTIONS = {
  strokeColor: "#FF0000",
  strokeOpacity: 1.0,
  strokeWeight: 2,
};

const ShapesComponentCreatePropTypes = {
  styles: PropTypes.shape({
    container: PropTypes.object.isRequired,
  }).isRequired,
};

// const mapCenter = {
//   lat: 0,
//   lng: -180,
// };
const mapCenter = {
  lat: 24.8607,
  lng: 67.0011,
};

function ShapesComponentCreate(props) {
  const [polylineVisible, setPolylineVisible] = React.useState(true);
  const [polylineOptions, setPolylineOptions] = React.useState(
    JSON.stringify(POLYLINE_OPTIONS)
  );

  const onCheckboxChange = React.useCallback(() => {
    setPolylineVisible((bool) => !bool);
  }, []);

  const onTextAreaChange = React.useCallback(({ target: { value } }) => {
    setPolylineOptions(value);
  }, []);

  const onClick = React.useCallback(() => {
    console.info("I have been clicked!");
  }, []);

  const po = React.useMemo(() => {
    try {
      return JSON.parse(polylineOptions);
    } catch (e) {
      return POLYLINE_OPTIONS;
    }
  }, [polylineOptions]);

  const [state, setState] = React.useState({
    coords: [],
  });
  const { coords } = state;
  const m_sfPolygonOptions = {
    //fillColor: "#FF5500",
    // fillOpacity: 1,
    strokeColor: "#8F128F",
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    paths: coords,
    zIndex: 1,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_API_KEY,
  });
  function handleClick(event) {
    var lat = event.latLng.lat();
    var lng = event.latLng.lng();

    const { coords } = state;

    let mCoords = _.cloneDeep(coords);

    mCoords.push({ lat, lng });

    if (mCoords.length > 5) {
      return;
    }
    setState({
      coords: mCoords,
    });
    props.setCoordsCallback(mCoords);
  }

  function onClearBtnClick() {
    setState({ coords: [] });
  }

  return isLoaded ? (
    <div className="map">
      <div className="map-container">
        {/* <Button>fvlegnjgjn</Button> */}
        <Button label="ra.action.clear_zone" onClick={onClearBtnClick} />

        <GoogleMap
          id="shapes-example"
          mapContainerStyle={props.styles.container}
          zoom={12}
          center={mapCenter}
          onClick={(e) => handleClick(e)}
        >
          <Polygon path={coords} options={m_sfPolygonOptions} />;
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
}

ShapesComponentCreate.propTypes = ShapesComponentCreatePropTypes;

export default React.memo(ShapesComponentCreate);

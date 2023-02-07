import * as React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import {
  Google,
  GoogleMap,
  Polyline,
  Polygon,
  Rectangle,
  Circle,
  Marker,
  OverlayView,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";

//import pinIcon from "../assets/pin.svg";
import PinDropIcon from "@material-ui/icons/PinDrop";
import { GOOGLE_API_KEY } from "../../../constants";
const google = {};
let mPolygonArr = [
  // { lat: 24.872225256023125, lng: 66.90239470825196 },
  // { lat: 24.87004488459556, lng: 66.96110289916993 },
  // { lat: 24.85010827700514, lng: 66.95869963989259 },
  // { lat: 24.871913776745586, lng: 66.89209502563477 },
];
const FLIGHT_PLAN_COORDS = [
  { lat: 37.772, lng: -122.214 },
  { lat: 21.291, lng: -157.821 },
  { lat: -18.142, lng: 178.431 },
  { lat: -27.467, lng: 153.027 },
];

const BRISBANE_COORDS = [
  { lat: -27.467, lng: 153.027 },
  { lat: -23.467, lng: 152.027 },
  { lat: -28.567, lng: 149.627 },
  { lat: -27.467, lng: 153.027 },
];

const RECTANGLE_BOUNDS = {
  north: 38.685,
  south: 33.671,
  east: -115.234,
  west: -118.251,
};

const POLYLINE_OPTIONS = {
  strokeColor: "#FF0000",
  strokeOpacity: 1.0,
  strokeWeight: 2,
};

const ShapesComponentPropTypes = {
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

const MARKER_POSITION = {
  lat: 37.772,
  lng: -122.214,
};

const OVERLAY_VIEW_POSITION = {
  lat: 35.772,
  lng: -120.214,
};

const INFO_WINDOW_POSITION = {
  lat: 33.772,
  lng: -117.214,
};

const brisbanePolygonOptions = {
  fillColor: "#00FF00",
  fillOpacity: 1,
  strokeColor: "#22FF22",
  strokeOpacity: 1,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
  paths: BRISBANE_COORDS,
  zIndex: 1,
};

const sfPolygonOptions = {
  fillColor: "#FF5500",
  fillOpacity: 1,
  strokeColor: "#FF7700",
  strokeOpacity: 1,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
  paths: mPolygonArr,
  zIndex: 1,
};

const circleOptions = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  center: {
    lat: 34.052,
    lng: -118.243,
  },
  radius: 300000,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  zIndex: 1,
};

const textareaStyle = {
  minHeight: "6rem",
  maxHeight: "12rem",
  width: "100%",
  minWidth: "15rem",
  maxWidth: "40rem",
};

const infoWindowStyle = {
  background: `white`,
  border: `1px solid ##CCC`,
  padding: 15,
};

function ShapesComponent({ styles }) {
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
    fillColor: "#FF5500",
    fillOpacity: 1,
    strokeColor: "#FF7700",
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
    setState({
      coords: mCoords,
    });
  }
  return isLoaded ? (
    <div className="map">
      <div className="map-settings">
        <hr className="mt-0 mb-3" />

        <div className="custom-control custom-checkbox mb-3">
          <input
            id="show-polyline-checkbox"
            className="custom-control-input"
            type="checkbox"
            checked={polylineVisible}
            onChange={onCheckboxChange}
          />
          <label
            className="custom-control-label"
            htmlFor="show-polyline-checkbox"
          >
            Show flight path
          </label>
        </div>

        <div className="form-group mb-4">
          <label htmlFor="polyline-options-input">
            Polyline options (valid JSON):
          </label>

          <textarea
            id="polyline-options-input"
            className="form-control"
            type="text"
            value={polylineOptions}
            style={textareaStyle}
            onChange={onTextAreaChange}
          />
        </div>
      </div>

      <div className="map-container">
        <GoogleMap
          id="shapes-example"
          mapContainerStyle={styles.container}
          zoom={12}
          center={mapCenter}
          onClick={(e) => handleClick(e)}
        >
          {polylineVisible && (
            <Polyline path={FLIGHT_PLAN_COORDS} options={po} />
          )}
          <Polygon path={BRISBANE_COORDS} options={brisbanePolygonOptions} />
          <Polygon path={coords} options={m_sfPolygonOptions} />;
          {/* <Rectangle bounds={RECTANGLE_BOUNDS} />

          <Circle options={circleOptions} />

          <Marker position={MARKER_POSITION} icon={PinDropIcon} /> */}
          {/* <OverlayView
            position={OVERLAY_VIEW_POSITION}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div style={infoWindowStyle}>
              <h1>OverlayView</h1>

              <button onClick={onClick} type="button">
                I have been clicked
              </button>
            </div>
          </OverlayView> */}
          {/* <InfoWindow position={INFO_WINDOW_POSITION}>
            <div style={infoWindowStyle}>
              <h1>InfoWindow</h1>
            </div>
          </InfoWindow> */}
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
}

ShapesComponent.propTypes = ShapesComponentPropTypes;

export default React.memo(ShapesComponent);

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

import { GOOGLE_API_KEY } from "../../../constants";
import { Button } from "react-admin";

const POLYLINE_OPTIONS = {
  strokeColor: "#FF0000",
  strokeOpacity: 1.0,
  strokeWeight: 2,
};

const ShapesComponentShowPropTypes = {
  styles: PropTypes.shape({
    container: PropTypes.object.isRequired,
  }).isRequired,
};

// const mapCenter = {
//   lat: 0,
//   lng: -180,
// };

function ShapesComponentShow({ styles, latlng }) {
  let mapCenter = null;

  const [mCoords, setCoords] = React.useState(latlng);

  if (!_.isUndefined(latlng[0])) {
    mapCenter = {
      lat: latlng[0].latitude || latlng[0].lat || 24.8746,
      lng: latlng[0].longitude || latlng[0].lng || 24.8746,
    };
  }

  console.log({ latlng: latlng, mapCenter: mapCenter });
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

  // const [state, setState] = React.useState({
  //   coords: [],
  // });
  // const { coords } = state;
  const ShapesComponentShowShow = {
    //fillColor: "#FF5500",
    //fillOpacity: 1,
    strokeColor: "#8F128F",
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    paths: mCoords,
    zIndex: 1,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_API_KEY,
  });

  const onClearBtnClick = () => {
    //setCoords([]);
  };
  // function handleClick(event) {
  //   var lat = event.latLng.lat();
  //   var lng = event.latLng.lng();

  //   const { coords } = mCoords;

  //   let mCoords2 = _.cloneDeep(coords);

  //   mCoords2.push({ lat, lng });

  //   if (mCoords2.length > 5) {
  //     return;
  //   }
  //   setCoords({
  //     mCoords: mCoords2,
  //   });
  //   // props.setCoordsCallback(mCoords);
  // }

  return isLoaded ? (
    <div className="map">
      {/* <Button label="delete" onClick={onClearBtnClick} /> */}

      <div className="map-container">
        <GoogleMap
          id="shapes-example"
          mapContainerStyle={styles.container}
          zoom={12}
          center={mapCenter}
          //onClick={(e) => handleClick(e)}
        >
          <Polygon path={latlng} options={ShapesComponentShowShow} />;
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
}

ShapesComponentShow.propTypes = ShapesComponentShowPropTypes;

export default React.memo(ShapesComponentShow);

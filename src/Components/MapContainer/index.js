import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { CircleF, MarkerF } from "@react-google-maps/api";
import marker from "../../Assets/marker.png";
import userLoc from "../../Assets/userLoc.png";
//import { useState } from "react";

/*passed to props:
 CenterCoord = {
  centerObj: { lat: number; lng: number };
};*/

function MapContainer(props) {
  const mapStyles = {
    height: "96%",
    width: "100%",
    position: "relative",
  };
  //const [mapState, setMapState] = useState(null);

  const options = {
    strokeColor: "#006390",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#fbb02d",
    fillOpacity: 0.15,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 2000,
    zIndex: 1,
  };

  const onLoad = (circle) => {
    console.log("Circle onLoad circle: ", circle);
  };

  const onUnmount = (circle) => {
    console.log("Circle onUnmount circle: ", circle);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDJresVS0RQllmIQivLkPz5xNeP19P4pOQ">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={props.centerObj}
      >
        <CircleF
          // optional
          onLoad={onLoad}
          // optional
          onUnmount={onUnmount}
          // required
          center={props.userLocation}
          // required
          options={options}
        />

        <MarkerF
          //onLoad={onLoad}
          position={props.userLocation}

          icon={userLoc}
          onClick={() => {
            props.markerOnClick(console.log("you clicked the user marker!"));
          }}

          // icon="https://i.postimg.cc/DfXqkmRL/human-location-svgrepo-com.png"
          //icon="https://i.postimg.cc/vHS5C8xs/user-location-50x50.png"

        />
        {props.eventsArr.map(function (item, index) {
          return (
            <MarkerF
              key={index}
              clickable
              animation="bounce"
              position={{ lat: Number(item.lat), lng: Number(item.lng) }}
              //onLoad={onLoad}

              icon={marker}

              // icon="https://i.postimg.cc/3x9Q98BD/placeholder-svgrepo-com.png"
              //icon="https://i.postimg.cc/FHys3D4B/turnuparrow50px.png"

              onClick={() => {
                props.markerOnClick(item.eventid);
              }}
            />
          );
        })}
      </GoogleMap>
    </LoadScript>
  );
}
export default MapContainer;

//{ lat: 50.993625146749665, lng: - 0.11788521861601084 }
/*
const { GoogleMap, LoadScript } = require("../../");
const ScriptLoaded = require("../../docs/ScriptLoaded").default;

const mapContainerStyle = {
  height: "400px",
  width: "800px"
}

const center = {
  lat: -3.745,
  lng: -38.523
}

const options = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1
}

const onLoad = circle => {
  console.log('Circle onLoad circle: ', circle)
}

const onUnmount = circle => {
  console.log('Circle onUnmount circle: ', circle)
}

<ScriptLoaded>
  <GoogleMap
    id="circle-example"
    mapContainerStyle={mapContainerStyle}
    zoom={7}
    center={center}
  >
    <Circle
      // optional
      onLoad={onLoad}
      // optional
      onUnmount={onUnmount}
      // required
      center={center}
      // required
      options={options}
    />
  </GoogleMap>
</ScriptLoaded>*/

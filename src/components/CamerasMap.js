import * as L from "leaflet";
import React from "react";
import Constants from "../Constants";
import DetailCard from "./DetailCard";
const CamerasMap = () => {

  const Icon = () => {
    return L.icon({
      iconUrl: `/static/svg/camera.png`,
      iconSize: [20, 20],
      iconAnchor: [0, 0],
    });
  };

  const [cameras, setcameras] = React.useState([]);
  const [selectedId, setSelectedId] = React.useState(null);

  React.useEffect(() => {

    const url = Constants.cameras;

    (async () => {
      let response = await fetch(url);
      let data = await response.json();

      // console.log(data)

      let map = L.map("map").setView([30.266666, -97.73333], 10);
      data.attributes.forEach((location, index) => {
        L.marker([location.lat, location.lon], {
          icon: Icon(),
        })
          .on("click", () => setSelectedId(index))
          .addTo(map);
      });
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
        map
      );

      setcameras(data);
    })();
  }, []);
  return (
    <>
      <div id="map"></div>
      <DetailCard data={cameras} id={selectedId} setId={setSelectedId} header={false}/>
    </>
  );
};

export default CamerasMap;

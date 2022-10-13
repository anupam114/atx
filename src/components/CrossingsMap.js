import * as L from "leaflet";
import React from "react";
import Constants from "../Constants";
import DetailCard from "./DetailCard";
const CrossingsMap = () => {
  const Icon = (state) => {
    return L.icon({
      iconUrl: `/static/svg/${state}.png`,
      iconSize: [20, 20],
      iconAnchor: [0, 0],
    });
  };

  const [crossings, setcrossings] = React.useState([]);
  const [selectedId, setSelectedId] = React.useState(null);

  React.useEffect(() => {
    let url = Constants.crossings;

    (async () => {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      let map = L.map("map").setView([30.266666, -97.73333], 9);
      data.attributes.forEach((location, index) => {
        L.marker([location.lat, location.lon], {
          icon: Icon(location.status),
        })
          .on("click", () => setSelectedId(index))
          .addTo(map);
      });
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
        map
      );

      setcrossings(data);
    })();
  }, []);
  return (
    <>
      <div id="map"></div>
      <DetailCard 
      data={crossings} 
      id={selectedId} 
      setId={setSelectedId}
      header={true}
      content="CROSSINGS ARE OPEN" />
    </>
  );
};

export default CrossingsMap;

import * as L from "leaflet";
import React from "react";
import Constants from "../Constants";
import DetailCard from "./DetailCard";
const ClosoureMap = () => {
  const Icon = (state) => {
    return L.icon({
      iconUrl: `/svg/${state}.png`,
      iconSize: [20, 20],
      iconAnchor: [0, 0],
    });
  };
  const [closures, setclosures] = React.useState([]);
  const [selectedId, setSelectedId] = React.useState(null);

  React.useEffect(() => {
    let url = Constants.closures;

    (async () => {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data.attributes);

      var map = L.map("map").setView([30.266666, -97.73333], 9);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
        map
      );

      data.attributes.forEach((location, index) => {
        L.marker([location.lat, location.lon], {
          icon: Icon(location.status),
        })
          .on("click", () => setSelectedId(index))
          .addTo(map);
      });

      setclosures(data)

    })();
  }, []);
  return (
    <>
      <div id="map"></div>
      <DetailCard
        data={closures}
        id={selectedId}
        setId={setSelectedId}
        header={true}
        content="CROSSINGS ARE CLOSED"
      />
    </>
  );
};

export default ClosoureMap;

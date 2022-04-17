import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet packagen
import "leaflet-defaulticon-compatibility";

export const Map = ({ individualItem }) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ width: "30%", height: "300px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          <p>{`Location : ${individualItem[0].location}`}</p>
          <p>{`Contact: ${individualItem[0].contact}`}</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

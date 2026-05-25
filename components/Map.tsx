// components/Map.tsx
"use client";

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from "leaflet";
import "leaflet/dist/leaflet.css"


// --- FIX CODE START ---
// Delete the hidden, broken default paths defined by Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;

// Re-assign the icon configuration with functional CDN URLs
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});
// --- FIX CODE END ---

// const position = [22.8165, 89.5686]
const position = { lat: 22.8165, lng: 89.5686 }

export default function Map() {

  return (
  <div style={{ height: "600px", width: "100%", position: "relative" }}>
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100%", width: "100%" }} /* Tells Leaflet to fill the 600px wrapper */
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    </MapContainer>
  </div>
);
}
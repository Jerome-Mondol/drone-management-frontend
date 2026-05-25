// components/MapWrapper.tsx
"use client";

import dynamic from "next/dynamic";


const MapComponent = dynamic(() => import('./Map'), {
    ssr: false,
    loading: () => (
    <div style={{ height: "500px", width: "100%", background: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p>Loading Map Environment...</p>
    </div>
    )
})


export default function MapWrapper() {
  return <MapComponent />;
}
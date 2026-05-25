// app/page.tsx
import MapWrapper from "../components/MapWrapper";

export default function Page() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>My Application Map</h1>
      <div style={{ marginTop: "1rem", border: "1px solid #ccc" }}>
        {/* Import the wrapper safely */}
        <MapWrapper />
      </div>
    </main>
  );
}
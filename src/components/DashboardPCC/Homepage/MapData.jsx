import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const countries = [
  { name: "United States", value: 80, lat: 37.0902, lng: -95.7129 },
  { name: "Nigeria", value: 65, lat: 9.082, lng: 8.6753 },
  { name: "United Kingdom", value: 54, lat: 55.3781, lng: -3.436 },
  { name: "Kenya", value: 43, lat: -1.2921, lng: 36.8219 },
  { name: "Finland", value: 31, lat: 61.9241, lng: 25.7482 },
];

export default function MapData() {
  return (
    <div className="py-6 space-y-8 px-8 font-sans bg-white min-h-screen my-6 rounded-lg shadow">
      {/* Community Map + Data */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        <div className="h-96 overflow-hidden col-span-3">
          <p className="text-2xl font-semibold ">
            Community Members by Country
          </p>
          <p className="text-gray-600 pb-6">
            This map shows your community members by country
          </p>
          <MapContainer
            center={[20, 0]}
            zoom={2}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {countries.map((c) => (
              <Marker key={c.name} position={[c.lat, c.lng]}>
                <Popup>
                  {c.name}: {c.value}%
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="bg-white  ">
          <h3 className="text-3xl font-bold mb-1 text-center">98.2K</h3>
          <p className="text-sm text-gray-500 mb-4 text-center">
            Total community members
          </p>
          <div className="space-y-3">
            {countries.map((c) => (
              <div key={c.name}>
                <div className="flex justify-between text-sm font-medium mb-1">
                  <span>{c.name}</span>
                  <span>{c.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-full rounded-full"
                    style={{ width: `${c.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-yellow-600 mt-3 cursor-pointer">
            See All Demographics
          </p>
        </div>
      </div>
    </div>
  );
}

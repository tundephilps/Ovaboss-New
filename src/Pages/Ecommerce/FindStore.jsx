// import { Search, MapPin } from 'lucide-react';
import { useState, useEffect, useRef } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

export default function FindStore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCenter, setActiveCenter] = useState(1);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const mapRef = useRef(null);
  const googleMapRef = useRef(null);

  const centres = [
    {
      id: 1,
      name: "Oxofoss Ikeja Centre",
      address: "123 Awolowo Way, Ikeja, Lagos, Nigeria",
      workingHours: "Mon-Sat: 9 AM - 8 PM",
      phone: "+234 802 234 5678",
      lat: 6.5969,
      lng: 3.3421,
    },
    {
      id: 2,
      name: "Oxofoss London Centre",
      address: "45 Oxford Street, London, W1D 2DZ, United Kingdom",
      workingHours: "Mon-Sun: 10 AM - 6 PM",
      phone: "+44 20 7946 0121",
      lat: 51.5152,
      lng: -0.1418,
    },
    {
      id: 3,
      name: "Oxofoss Manchester Centre",
      address: "75 Deansgate, Manchester, M3 2FW, United Kingdom",
      workingHours: "Mon-Sat: 9 AM - 7 PM",
      phone: "+44 161 123 4567",
      lat: 53.4808,
      lng: -2.2426,
    },
  ];

  // Load Google Maps Script
  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = initializeMap;
        document.head.appendChild(script);
      } else {
        initializeMap();
      }
    };

    loadGoogleMapsScript();

    return () => {
      // Cleanup if needed
      if (markers.length) {
        markers.forEach((marker) => marker.setMap(null));
      }
    };
  }, []);

  // Initialize map when script loads
  const initializeMap = () => {
    if (!mapRef.current) return;

    // Default to first center location
    const defaultCenter = {
      lat: centres[0].lat,
      lng: centres[0].lng,
    };

    const mapOptions = {
      center: defaultCenter,
      zoom: 12,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      zoomControlOptions: {
        position: window.google.maps.ControlPosition.RIGHT_TOP,
      },
    };

    const newMap = new window.google.maps.Map(mapRef.current, mapOptions);
    setMap(newMap);
    googleMapRef.current = newMap;

    // Add markers for each center
    addMarkers(newMap);
  };

  // Add markers for all centers
  const addMarkers = (mapInstance) => {
    if (!mapInstance) return;

    const newMarkers = centres.map((centre, index) => {
      // Create marker
      const marker = new window.google.maps.Marker({
        position: { lat: centre.lat, lng: centre.lng },
        map: mapInstance,
        title: centre.name,
        label: {
          text: `${index + 1}`,
          color: "white",
          fontWeight: "bold",
        },
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: "#EAB308",
          fillOpacity: 1,
          strokeWeight: 0,
          scale: 12,
        },
      });

      // Create info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div class="p-2 min-w-[180px]">
            <p class="font-bold text-sm">${centre.name}</p>
            <button class="bg-yellow-500 text-xs text-white px-2 py-1 mt-1 rounded">
              Directions
            </button>
          </div>
        `,
      });

      // Show info window on active marker
      if (centre.id === activeCenter) {
        infoWindow.open(mapInstance, marker);
      }

      // Add click event
      marker.addListener("click", () => {
        setActiveCenter(centre.id);

        // Close all info windows
        markers.forEach((m) => {
          if (m.infoWindow) m.infoWindow.close();
        });

        // Open this info window
        infoWindow.open(mapInstance, marker);
      });

      return { marker, infoWindow };
    });

    setMarkers(newMarkers);
  };

  return (
    <div className="bg-[#faf9f9]">
      <div className="max-w-7xl mx-auto px-4 py-8 ">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="lg:text-5xl text-3xl font-bold mb-2">
            Find a Centre Near You
          </h1>
          <p className="text-gray-600">
            Locate the nearest centre, pick-up center, or partner seller with
            ease
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Enter location..."
              className="w-full border border-gray-300 rounded-md py-2 pl-4 pr-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-500 p-2 rounded">
              <FaSearch size={16} className="text-white" />
            </button>
          </div>
        </div>

        {/* Map and Listings */}
        <div className="grid lg:grid-cols-5 grid-cols-1 gap-6">
          {/* Centre Listings - Left Side */}
          <div className="w-full lg:col-span-2 col-span-5 space-y-4">
            {centres.map((centre) => (
              <div
                key={centre.id}
                className={`bg-white border rounded-md p-4 transition-shadow hover:shadow-md ${
                  activeCenter === centre.id
                    ? "border-yellow-500"
                    : "border-gray-200"
                }`}
                onClick={() => {
                  setActiveCenter(centre.id);
                  // Center map on this location
                  if (googleMapRef.current) {
                    googleMapRef.current.panTo({
                      lat: centre.lat,
                      lng: centre.lng,
                    });
                    googleMapRef.current.setZoom(15);
                  }
                  // Open info window
                  if (markers.length) {
                    const markerObj = markers.find(
                      (m, idx) => idx === centre.id - 1
                    );
                    if (markerObj) {
                      markers.forEach((m) => m.infoWindow.close());
                      markerObj.infoWindow.open(
                        googleMapRef.current,
                        markerObj.marker
                      );
                    }
                  }
                }}
              >
                <div className="flex items-start">
                  <div className="h-6 w-6 bg-yellow-500 rounded-sm flex items-center justify-center flex-shrink-0 mr-3">
                    <CiLocationOn size={16} className="text-white" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-gray-800">{centre.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {centre.address}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">Working hours:</p>
                    <p className="text-sm text-gray-700">
                      {centre.workingHours}
                    </p>
                    <p className="text-sm text-gray-700 mt-1">{centre.phone}</p>

                    <div className="flex space-x-2 mt-3">
                      <button
                        className="bg-yellow-500 text-xs text-white px-3 py-1 rounded hover:bg-yellow-600 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(
                            `https://www.google.com/maps/dir/?api=1&destination=${centre.lat},${centre.lng}`,
                            "_blank"
                          );
                        }}
                      >
                        Directions
                      </button>
                      <button
                        className="border border-yellow-500 text-xs text-yellow-500 px-3 py-1 rounded hover:bg-yellow-50 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Contact us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="text-xs text-right text-gray-500 mt-2">
              Map data ©
            </div>
          </div>

          {/* Map - Right Side */}
          <div className="w-full lg:col-span-3 col-span-5 flex   rounded-md h-full  relative">
            {/* Google Maps Container */}
            <div
              ref={mapRef}
              className="h-full w-full"
              style={{ borderRadius: "0.375rem" }}
            ></div>

            {/* Attribution overlay */}
            <div className="absolute bottom-0 right-0 bg-white bg-opacity-80 px-1 text-xs text-gray-500">
              Map data © Google
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useDispatch } from "react-redux";

import { takeCordinates } from "../../redux/store/infoWetherReducer";

import "./leaflett.scss";
import "leaflet/dist/leaflet.css";

export default function OurMap() {

  const dispatch = useDispatch();
  const defaultCord = { lat: 51.505, lng: -0.09 };

  const FindLocationCords = () => {
    const map = useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        const cordinates = [lat, lng];
        dispatch(takeCordinates(cordinates));
      },
    });
    return null;
  };

  return (
    <MapContainer center={defaultCord} zoom={15}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={defaultCord}>
        <Popup>
          im here 
        </Popup>
      </Marker>
      <FindLocationCords />
    </MapContainer>
  );
}

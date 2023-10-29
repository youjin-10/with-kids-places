import useKakaoLoader from "@/hooks/useKakaoLoader";
import { PlaceData } from "@/types";
import { Map } from "react-kakao-maps-sdk";
import MapMarkerContent from "./MapMarkerContent";
import EventMarkerContainer from "./EventMarkerContainer";

const MapContainer = ({ places }: { places: PlaceData[] }) => {
  useKakaoLoader();

  const handleClickMarker = (placeName: string) => {
    window.open(`https://map.kakao.com/link/search/성동구 ${placeName}`);
  };

  return (
    <Map
      center={{ lat: 37.5634272053432, lng: 127.036930141185 }} // 성동구청
      style={{ width: "100%", height: "380px" }}
      level={7}
    >
      {places.map((place) => {
        return (
          <EventMarkerContainer
            key={`EventMarkerContainer-${place.latitude}-${place.longitude}`}
            position={{ lat: place.latitude, lng: place.longitude }}
            content={<MapMarkerContent place={place} />}
            onClickMarker={() => handleClickMarker(place.name)}
          />
        );
      })}
    </Map>
  );
};

export default MapContainer;

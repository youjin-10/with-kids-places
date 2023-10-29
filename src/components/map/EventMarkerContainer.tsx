import { useState } from "react";
import { MapMarker } from "react-kakao-maps-sdk";

const EventMarkerContainer = ({
  position,
  content,
  onClickMarker,
}: {
  position: { lat: any; lng: any }; // 데이터는 string이고 number로 치환하면 마커가 보이지 않음. any 처리.
  content: JSX.Element;
  onClickMarker: any;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <MapMarker
      position={position}
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
      onClick={onClickMarker}
    >
      {isVisible && content}
    </MapMarker>
  );
};

export default EventMarkerContainer;

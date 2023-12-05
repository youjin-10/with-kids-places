import { getPlaceTypeKor } from "@/rules";
import { PlaceData } from "@/types";
import { Badge, Box, Text } from "@chakra-ui/react";

const MapMarkerContent = ({ place }: { place: PlaceData }) => {
  return (
    <Box p={2} width='40'>
      <Badge>{getPlaceTypeKor(place.type)}</Badge>

      <Text fontSize="sm" fontWeight="semibold">
        {place.name}
      </Text>

      <Text fontSize="xs">
        {place.discountMenu} {place.discountAmount} 할인
      </Text>
    </Box>
  );
};

export default MapMarkerContent;

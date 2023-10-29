import { PlaceData } from "@/types";
import { Card, CardBody, Link, Text } from "@chakra-ui/react";

const PlaceDataCard = ({ place }: { place: PlaceData }) => {
  return (
    <Card my={2}>
      <CardBody>
        <Link
          href={`https://map.kakao.com/link/search/성동구 ${p.name}`}
          target="_blank"
        >
          <Text fontWeight="semibold" textDecorationLine="underline">
            {place.name}
          </Text>
        </Link>

        <Text fontSize="sm" mb={2}>
          📍 {place.address}
        </Text>
        <Text color="gray.600" fontSize="sm">
          대표메뉴: {place.mainMenu}
        </Text>
        <Text color="gray.600" fontSize="sm">
          {place.discountMenu} {place.discountAmount} 할인
        </Text>
      </CardBody>
    </Card>
  );
};

export default PlaceDataCard;

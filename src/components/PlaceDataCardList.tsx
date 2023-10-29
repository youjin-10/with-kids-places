import { PlaceData } from "@/types";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import PlaceDataCard from "./PlaceDataCard";

const PlaceDataCardList = ({ placeList }: { placeList: PlaceData[] }) => {
  return (
    <Box height={40} overflowY="scroll" p={4} mb={4}>
      <Text fontWeight="semibold">총 {placeList.length} 곳</Text>

      {placeList.map((p, i) => {
        return <PlaceDataCard place={p} />;
      })}
    </Box>
  );
};

export default PlaceDataCardList;

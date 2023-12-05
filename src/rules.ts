import { PLACE_TYPES } from "./constant";

export const getPlaceTypeKor = (placeType: string) => {
  if (placeType === PLACE_TYPES.KOREAN) return "한식";
  if (placeType === PLACE_TYPES.WESTERN) return "양식";
  if (placeType === PLACE_TYPES.CHINESE) return "중식";
  if (placeType === PLACE_TYPES.JAPANESE) return "일식";
  if (placeType === PLACE_TYPES.CAFE) return "카페";
  if (placeType === PLACE_TYPES.BAKERY) return "베이커리";
  return "?";
};

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { PLACE_TYPES } from "@/constant";
import {
  Badge,
  Box,
  Card,
  CardBody,
  Link,
  ListIcon,
  ListItem,
  OrderedList,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import useKakaoLoader from "@/hooks/useKakaoLoader";
import { PlaceData } from "@/types";
import { getPlaceTypeKor } from "@/rules";

const places: PlaceData[] = [
  {
    type: PLACE_TYPES.KOREAN,
    name: "햄찌와 베찌(왕십리점)",
    address: "무학로2길 34(도선동)",
    longitude: "127.033391521922",
    latitude: "37.5631956219088",

    mainMenu: "부대찌개",
    discountMenu: "베이컨찌개",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "진숙맛집",
    address: "독서당로 296-1 지층",
    longitude: "127.021897781384",
    latitude: "37.5480347938131",

    mainMenu: "잔치국수",
    discountMenu: "잔치국수",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "예바다",
    address: "성수일로10길 26 하우스디세종타워 상가동 110호(성수2가)",
    longitude: "127.052952183671",
    latitude: "37.5465865067207",

    mainMenu: "돈가스",
    discountMenu: "돈가스",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "돈경",
    address: "장터길 17-1 1층 (금호동3가)",
    longitude: "127.017755011284",
    latitude: "37.5484403081403",

    mainMenu: "우동",
    discountMenu: "우동",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "남원추어탕",
    address: "용답중앙11길 13",
    longitude: "127.051921294567",
    latitude: "37.5661576193023",

    mainMenu: "추어탕",
    discountMenu: "추어탕",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "만세회관 성수본점",
    address: "아차산로126, 104호 (성수동2가)",
    longitude: "127.058053868759",
    latitude: "37.5434989075604",

    mainMenu: "갈비",
    discountMenu: "전체 메뉴",
    discountAmount: "10%",
  },
  {
    // type: 'western',
    type: PLACE_TYPES.CAFE,
    name: "어썸블리스",
    address: "상원2길 5-11 3층 (성수동1가)",
    longitude: "127.049475456916",
    latitude: "37.5462433825302",

    mainMenu: "카페",
    discountMenu: "전체메뉴",
    discountAmount: "10%",
  },
  {
    type: PLACE_TYPES.WESTERN,
    name: "고든램지 스트리트 피자",
    address: "왕십리로 83-21 디타워 서울포레스트 B1(성수동1가)",
    longitude: "127.043357753557",
    latitude: "37.5441547484979",

    mainMenu: "피자",
    discountMenu: "전체메뉴",
    discountAmount: "10%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "그린한식뷔페",
    address: "상원1길 25(성수동1가)",
    longitude: "127.047977996156",
    latitude: "37.5458559401876",

    mainMenu: "한식부페",
    discountMenu: "한식부페",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "한성식당",
    address: "뚝섬로4길 5(성수동1가)",
    longitude: "127.049796136921",
    latitude: "37.5397576734129",

    mainMenu: "백반",
    discountMenu: "백반",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.JAPANESE,
    name: "푸른바다횟집",
    address: "성덕정15길4-17(성수동2가)",
    longitude: "127.054282311475",
    latitude: "37.5380656906319",

    mainMenu: "회",
    discountMenu: "회",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.CHINESE,
    name: "승리원",
    address: "왕십리로78（성수동1가）",
    longitude: "127.045140949255",
    latitude: "37.5444735746324",

    mainMenu: "짜장면, 짬뽕",
    discountMenu: "짜장면",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "시골밥상",
    address: "둘레9가길 36(성수동1가)",
    longitude: "127.0505332068",
    latitude: "37.5377652490681",

    mainMenu: "김치찌개,된장찌개, 돈까스",
    discountMenu: "돈까스",
    discountAmount: "5%",
  },
  // {
  //   type: PLACE_TYPES.KOREAN,
  //   name: "뽀식이네",
  //   address: "성수이로20길58 지하1층(성수2가동)",
  //   longitude: "127.062564487279",
  //   latitude: "37.5417658740002",

  //   mainMenu: "한식부페",
  //   discountMenu: "전체음식",
  //   discountAmount: "5%",
  // },
  {
    type: PLACE_TYPES.KOREAN,
    name: "싸리골",
    address: "광나루로 287 (송정동)",
    longitude: "127.061676686861",
    latitude: "37.5483530949446",

    mainMenu: "삼겹살, 버섯전골",
    discountMenu: "전체음식",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "밥묵자쫌",
    address: "광나루로 11길 4(송정동)",
    longitude: "127.06562155897",
    latitude: "37.5486379365678",

    mainMenu: "백반, 김치찌개, 된장찌개",
    discountMenu: "전체음식",
    discountAmount: "10%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "청년감자탕순대국",
    address: "마조로5길5(행당동)",
    longitude: "127.040539543815",
    latitude: "37.5599364611905",

    mainMenu: "감자탕,순댓국",
    discountMenu: "맑은샤브샤브",
    discountAmount: "5%",
  },
  // {
  //   type: PLACE_TYPES.CHINESE,
  //   name: "라화쿵푸（한양대점）",
  //   address: "마조로 21（행당동）",
  //   longitude: "127.040824401217",
  //   latitude: "37.5599052786455",

  //   mainMenu: "마라탕",
  //   discountMenu: "꿔바로우",
  //   discountAmount: "5%",
  // },
  {
    type: PLACE_TYPES.KOREAN,
    name: "통통갈비",
    address: "마장로 297(마장동)",
    longitude: "127.042530246895",
    latitude: "37.5662683240503",

    mainMenu: "김치찌개, 갈비",
    discountMenu: "불고기",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "옛집통오리탕",
    address: "왕십리로30길1(도선동)",
    longitude: "127.030757137128",
    latitude: "37.5645668430931",

    mainMenu: "닭한마리, 생오리로스 등",
    discountMenu: "전체음식",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "남도집추어탕",
    address: "왕십리로20길 9-1(도선동)",
    longitude: "127.03499484025",
    latitude: "37.5628223252344",

    mainMenu: "추어탕",
    discountMenu: "전체음식",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "담쟁이",
    address: "왕십리로20길 11-1(도선동)",
    longitude: "127.035155195902",
    latitude: "37.5630061709727",

    mainMenu: "버섯만두전골, 칼국수",
    discountMenu: "전체음식",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.CHINESE,
    name: "동보성",
    address: "한림말1길 15-2（옥수동）",
    longitude: "127.016174357771",
    latitude: "37.5426973864701",

    mainMenu: "짜장면 등",
    discountMenu: "전체 금액의",
    discountAmount: "10%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "윤식당",
    address: "연무장 19길 12 2층",
    longitude: "127.062893359863",
    latitude: "37.5412877189948",

    mainMenu: "한식",
    discountMenu: "전체음식가격의",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "꽃찬찜닭 왕십리점",
    address: "왕십리로 273 1층",
    longitude: "127.037181252884",
    latitude: "37.558777983391",

    mainMenu: "찜닭",
    discountMenu: "찜닭",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "금돼지",
    address: "성수일로12길 25(성수동2가)",
    longitude: "127.053892122109",
    latitude: "37.5482026534779",

    mainMenu: "삼겹살",
    discountMenu: "전체음식가격의",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "일미돼지국밥",
    address: "성수일로12길 27(성수동2가)",
    longitude: "127.054524496294",
    latitude: "37.5483892302842",

    mainMenu: "돼지국밥",
    discountMenu: "전체음식가격의",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "진지방순대국",
    address: "광나루로 290, 1층(성수동2가)",
    longitude: "127.061988034564",
    latitude: "37.5477149347695",

    mainMenu: "순대국밥",
    discountMenu: "전체음식가격의",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "그린한식뷔폐",
    address: "아차산로7길 28(성수동2가)",
    longitude: "127.055376778184",
    latitude: "37.5475441473972",

    mainMenu: "뷔페",
    discountMenu: "전체음식가격의",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "황소미가",
    address: "성덕정17길 4-1 (성수동2가)",

    longitude: "127.055365503281",
    latitude: "37.5376537910567",
    mainMenu: "삼겹살,육개장,제육",
    discountMenu: "삼겹살,육개장,제육",
    discountAmount: "10%",
  },
];

export default function Home() {
  const [filteredPlaces, setFilteredPlaces] = useState(places);

  const handleClickType = (clickedType: any | null) => {
    if (!clickedType) {
      setFilteredPlaces(places);
      return;
    }

    const filtered = places.filter((place) => place.type === clickedType);
    setFilteredPlaces(filtered);
  };

  return (
    <>
      <Head>
        <title>아이와 함께 맛집, 카페 - 성동구청</title>
        <meta name="description" content="아이와 함께 맛집, 카페 - 성동구청" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Notice />
        <Tabs>
          <TabList>
            <Tab onClick={() => handleClickType(null)}>전체</Tab>
            <Tab onClick={() => handleClickType(PLACE_TYPES.KOREAN)}>한식</Tab>
            <Tab onClick={() => handleClickType(PLACE_TYPES.WESTERN)}>양식</Tab>
            <Tab onClick={() => handleClickType(PLACE_TYPES.CHINESE)}>중식</Tab>
            <Tab onClick={() => handleClickType(PLACE_TYPES.JAPANESE)}>
              일식
            </Tab>
            <Tab onClick={() => handleClickType(PLACE_TYPES.CAFE)}>카페</Tab>
          </TabList>
        </Tabs>

        <Box height={40} overflowY="scroll" p={4} mb={4}>
          <Text fontWeight="semibold">총 {filteredPlaces.length} 곳</Text>

          {filteredPlaces.map((p, i) => {
            return (
              <Card my={2}>
                <CardBody>
                  <Link
                    href={`https://map.kakao.com/link/search/성동구 ${p.name}`}
                    target="_blank"
                  >
                    <Text fontWeight="semibold" textDecorationLine="underline">
                      {p.name}
                    </Text>
                  </Link>

                  <Text fontSize="sm" mb={2}>
                    📍 {p.address}
                  </Text>
                  <Text color="gray.600" fontSize="sm">
                    대표메뉴: {p.mainMenu}
                  </Text>
                  <Text color="gray.600" fontSize="sm">
                    {p.discountMenu} {p.discountAmount} 할인
                  </Text>
                </CardBody>
              </Card>
            );
          })}
        </Box>

        <MapContainer places={filteredPlaces} />
      </main>
    </>
  );
}

const Notice = () => {
  return (
    <Box bg="red.100" p={3} borderRadius="lg" my={4}>
      <Text fontWeight="bold">📣 참고해주세요!</Text>
      <OrderedList fontSize="sm">
        <ListItem>
          <Link
            href="https://www.sd.go.kr/health/contents.do?key=2432&"
            textDecorationLine="underline"
            target="_blank"
          >
            성동구청 홈페이지에 올라온 웰컴키즈존 업장들을
          </Link>
          (링크) 조금 더 보기 쉽게 개인이 만든 페이지 입니다.
        </ListItem>
        <ListItem>
          메뉴, 할인 등 식당 정보는 성동구청 홈페이지를 기반으로 만든 것입니다.
        </ListItem>
        <ListItem>
          관련하여 문의가 필요한 경우, 성동구청이나 업장에 직접 문의 부탁
          드립니다.
        </ListItem>
      </OrderedList>
    </Box>
  );
};

const MapMarkerContent = ({ place }: { place: PlaceData }) => {
  return (
    <Box p={2}>
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

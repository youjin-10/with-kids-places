import Head from "next/head";
import { useState } from "react";
import { PLACE_TYPES } from "@/constant";
import { Tab, TabList, Tabs } from "@chakra-ui/react";
import { PlaceData } from "@/types";
import Notice from "@/components/Notice";
import MapContainer from "@/components/map/MapContainer";
import PlaceDataCardList from "@/components/PlaceDataCardList";

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
    address: "성수일로10길 26 하우스디세종타워 상가동 110호",
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
  {
    type: PLACE_TYPES.KOREAN,
    name: "원기옥 성수낙낙점",
    address: "서울 성동구 아차산로17길 48 1층 109호",
    longitude: "127.065889477544",
    latitude: "37.5463938501055",
    mainMenu: "특곰탕, 낙지볶음",
    discountMenu: "전체메뉴",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "란칼국수",
    address: "서울 성동구 성수일로8길 42 삼원빌딩 1층 104호",
    longitude: "127.05504009517554",
    latitude: "37.54535154376167",
    mainMenu: "칼국수, 만두",
    discountMenu: "전체메뉴",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "참진한순대국",
    address: "서울 성동구 사근동길 56 1층",
    longitude: "127.0471366642632",
    latitude: "37.56077644373151",
    mainMenu: "순대, 순댓국",
    discountMenu: "순댓국",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "마마장칼국수",
    address: "서울 성동구 무학로6길 50 상가 1층",
    longitude: "127.034989528074",
    latitude: "37.5645324178734",
    mainMenu: "칼국수, 만두",
    discountMenu: "전체메뉴",
    discountAmount: "10%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "서래왕차돌 뚝섬역점",
    address: "서울 성동구 상원길 36 1층",
    longitude: "127.048817571623",
    latitude: "37.5471472681478",
    mainMenu: "육류, 고기요리",
    discountMenu: "고기메뉴",
    discountAmount: "10%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "밀본 칼국수",
    address: "서울 성동구 아차산로 67-16 예당빌딩 1층",
    longitude: "127.05149902926867",
    latitude: "37.546488399950455",
    mainMenu: "칼국수, 만두",
    discountMenu: "미역국,고기군만두,고기손만두",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.CHINESE,
    name: "천미향",
    address: "서울 성동구 성수일로10길 26 2층",
    longitude: "127.05271128313544",
    latitude: "37.54693205747849",
    mainMenu: "탕수육, 라조기",
    discountMenu: "전체메뉴",
    discountAmount: "10%",
  },
  {
    type: PLACE_TYPES.CAFE,
    name: "어글리디저트&프리티케이크",
    address: "서울 성동구 무학로10길 24 1층",
    longitude: "127.0334926398199",
    latitude: "37.565821276454884",
    mainMenu: "커피, 휘낭시에",
    discountMenu: "전체메뉴",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.CAFE,
    name: "성수시루",
    address: "서울 성동구 성수일로8길 42 삼원빌딩 1층 103호",
    longitude: "127.055085331874",
    latitude: "37.5453154827043",
    mainMenu: "시루케이크, 미숫가루",
    discountMenu: "전체메뉴",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.BAKERY,
    name: "청키드",
    address: "서울 성동구 아차산로7길 24 1층 1-1호",
    longitude: "127.055109336444",
    latitude: "37.5471805393186",
    mainMenu: "미트파이",
    discountMenu: "전체메뉴",
    discountAmount: "10%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "푸른바다 생선구이",
    address: "서울 성동구 무학로2나길 28 1층",
    longitude: "127.03420498094303",
    latitude: "37.56418125924432",
    mainMenu: "생선구이",
    discountMenu: "전체메뉴",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "꽃보다 족발",
    address: "서울 성동구 왕십리로24길 16",
    longitude: "127.034345140339",
    latitude: "37.5637631562716",
    mainMenu: "족발",
    discountMenu: "전체메뉴",
    discountAmount: "10%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "곤지암소머리국밥 용답점",
    address: "서울 성동구 용답29길 10 1층",
    longitude: "127.055102301954",
    latitude: "37.563755293237",
    mainMenu: "소머리 국밥",
    discountMenu: "전체메뉴",
    discountAmount: "10%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "쭈꾸미 한판 성수점",
    address: "서울 성동구 아차산로7길 14-1 1층",
    longitude: "127.05477270562737",
    latitude: "37.546438272885965",
    mainMenu: "주꾸미요리",
    discountMenu: "쭈꾸미 철판",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "맛나곱창",
    address: "서울 성동구 고산자로 281-1 1층",
    longitude: "127.036120469717",
    latitude: "37.5649519415047",
    mainMenu: "곱창",
    discountMenu: "야채곱창",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "햄찌와베찌 성수직영점",
    address: "서울 성동구 아차산로11길 26",
    longitude: "127.06013821572168",
    latitude: "37.5457860419425",
    mainMenu: "부대찌개",
    discountMenu: "부대찌개",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "황기닭한마리",
    address: "서울 성동구 상원6길 8",
    longitude: "127.04903578522254",
    latitude: "37.54858967668084",
    mainMenu: "닭한마리, 김치찌개",
    discountMenu: "잔치국수",
    discountAmount: "5%",
  },
  // { 카카오맵 api 정보가 없음
  //   type: PLACE_TYPES.KOREAN,
  //   name: "오가네 밥상",
  //   address: "서울 성동구 동일로 41",
  //   longitude: "",
  //   latitude: "",
  //   mainMenu: "",
  //   discountMenu: "",
  //   discountAmount: "",
  // },
  {
    type: PLACE_TYPES.KOREAN,
    name: "술이있는 맛있는 밥집",
    address: "서울 성동구 마조로 61",
    longitude: "127.041516376654",
    latitude: "37.5633590079698",
    mainMenu: "제육볶음,김치찌개",
    discountMenu: "요일메뉴",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.CHINESE,
    name: "동강",
    address: "서울 성동구 동일로 143 성수1차 대우아파트 1층 110호",
    longitude: "127.06545062588894",
    latitude: "37.54533722238943",
    mainMenu: "자장면",
    discountMenu: "자장면",
    discountAmount: "5%",
  },
  {
    type: PLACE_TYPES.KOREAN,
    name: "금호산낙지",
    address: "서울 성동구 독서당로 298-8",
    longitude: "127.021935323731",
    latitude: "37.5479409928795",
    mainMenu: "산낙지 요리",
    discountMenu: "산낙지연포탕",
    discountAmount: "5%",
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
            <Tab onClick={() => handleClickType(PLACE_TYPES.BAKERY)}>베이커리</Tab>
          </TabList>
        </Tabs>

        <PlaceDataCardList placeList={filteredPlaces} />

        <MapContainer places={filteredPlaces} />
      </main>
    </>
  );
}

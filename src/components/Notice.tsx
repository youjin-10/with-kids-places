import { Box, Link, ListItem, OrderedList, Text } from "@chakra-ui/react";

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

export default Notice;

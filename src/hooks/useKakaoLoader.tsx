import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    /**
     * @참고 https://apis.map.kakao.com/web/guide/
     */
    appkey: process.env.NEXT_PUBLIC_KAKAO_MAP_KEY!,
    libraries: ["clusterer", "drawing", "services"],
  });
}

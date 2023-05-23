import { MintMap } from "@mint-ui/map"
import { MintMapMeta } from "../../common/const"
import { Meta } from "@storybook/react"

export default {
  ...MintMapMeta(),
  title: 'Mint Map/Samples',
} as Meta<typeof MintMap>

export { Sample as 간단마커예제 } from "./marker/MarkerSample"
export { Sample as 마커컨트롤 } from "./marker/MarkerInteraction"
export { Sample as 지도오버레이선택 } from "./complex/OverlayEvents"

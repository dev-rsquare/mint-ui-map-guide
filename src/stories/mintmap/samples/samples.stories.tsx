import { MintMap } from "@mint-ui/map"
import { MintMapMeta } from "../../common/const"
import { Meta } from "@storybook/react"

export default {
  ...MintMapMeta(),
  title: 'Mint Map/Samples',
} as Meta<typeof MintMap>

export { Marker as 간단마커예제 } from "./marker/MarkerSample"
export { Marker as 마커컨트롤 } from "./marker/MarkerInteraction"

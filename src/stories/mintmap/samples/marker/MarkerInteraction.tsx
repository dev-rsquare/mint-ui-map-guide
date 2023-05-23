import { StoryObj } from "@storybook/react";
import { BaseProps, MintMap, MintMapProps, Position } from "@mint-ui/map";
import { BaseArgs, CENTER, MAP_KEYS } from "../../../common/const"
import Container from "src/app/styled/Container";
import PositionGenerator from "../../util/PositionGenerator";
import { useEffect, useRef, useState } from "react";
import { TitledMarker } from "./components/TitledMarker";

type Story = StoryObj<typeof SampleTemplate>;

export const Marker:Story = {

  render: (props)=>{
    
    return <Container>
      <SampleTemplate {...props} />
    </Container>
  },
  args:Object.assign(BaseArgs, {
    markerCount:10,
    markerGap:0.06
  })
}

export default Marker

//=================================================================

const markerGen = (markerCount:number, markerGap:number)=>{
  const list = PositionGenerator.get(CENTER, markerCount, markerGap)
  return list.map((pos)=>{
    return {
      pos,
      hover:false
    }
  })
}

interface SampleProps extends MintMapProps {
  markerCount:number
  markerGap:number
}

function SampleTemplate({
  mapType,
  markerCount,
  markerGap,
}:SampleProps){

  const mapBase = useRef<BaseProps>({
    center:CENTER,
    zoomLevel:13,
    minZoomLevel:9,
    maxZoomLevel:21
  })

  const [markers, setMarkers] = useState<ReturnType<typeof markerGen>>(markerGen(markerCount, markerGap))
  useEffect(()=>{
    setMarkers(markerGen(markerCount, markerGap))
  }, [markerCount, markerGap])

  return <MintMap mapKey={MAP_KEYS.get(mapType) || ''} mapType={mapType} base={mapBase.current}>
    {markers.map((item)=>{
      return <TitledMarker title={'sssss'} position={item.pos}
      ></TitledMarker>
    })}
  </MintMap>

}

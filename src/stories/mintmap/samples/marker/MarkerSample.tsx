import { StoryObj } from "@storybook/react";
import { BaseProps, MintMap, MintMapProps, Position } from "@mint-ui/map";
import { BaseArgs, CENTER, MAP_KEYS } from "../../../common/const"
import Container from "src/app/styled/Container";
import { SimpleCircle } from "./components/SimpleCircle";
import PositionGenerator from "../../util/PositionGenerator";
import { useEffect, useRef, useState } from "react";

type Story = StoryObj<typeof SampleTemplate>;

export const Sample:Story = {

  render: (props)=>{
    
    return <Container>
      <SampleTemplate {...props} />
    </Container>
  },
  args:Object.assign(BaseArgs, {
    markerCount:10,
    markerGap:0.01
  })
}

export default Sample

//=================================================================

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

  const [markers, setMarkers] = useState<Position[]>(PositionGenerator.get(CENTER, markerCount, markerGap))
  useEffect(()=>{
    setMarkers(PositionGenerator.get(CENTER, markerCount, markerGap))
  }, [markerCount, markerGap])

  return <MintMap mapKey={MAP_KEYS.get(mapType) || ''} mapType={mapType} base={mapBase.current}>
    {markers.map((pos)=>{
      return <SimpleCircle color={`hsl(${(Math.random() * 360).toFixed(0)} 100% 60%)`} position={pos}></SimpleCircle>
    })}
  </MintMap>

}

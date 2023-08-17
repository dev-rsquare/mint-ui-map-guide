import { StoryObj } from "@storybook/react";
import { BaseProps, CircleMarker, EventParam, GeoCalulator, MapControlWrapper, MapMarkerWrapper, MapUIEventParam, MintMap, MintMapProps, Offset, PolygonCalculator, PolygonMarker, Position, useMintMapController } from "@mint-ui/map";
import { BaseArgs, CENTER, MAP_KEYS } from "../../../common/const"
import Container from "src/app/styled/Container";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type Story = StoryObj<typeof SampleTemplate>;

export const Sample:Story = {

  render: (props)=>{
    
    return <Container>
      <SampleTemplate {...props} />
    </Container>
  },
  args:Object.assign(BaseArgs, {
    markerCount:100,
    markerGap:0.06
  })
}

export default Sample

//=================================================================

interface SampleProps {
  markerCount:number
  markerGap:number
}

function SampleTemplate({
  mapType,
  ...props
}:SampleProps & MintMapProps){

  //민트맵 초기 설정
  const mapBase = useRef<BaseProps>({
    center:CENTER,
    zoomLevel:13,
    minZoomLevel:9,
    maxZoomLevel:21
  })

  return <MintMap mapKey={MAP_KEYS.get(mapType) || ''} mapType={mapType} base={mapBase.current}>
    
    <AreaSelection {...props}/>

  </MintMap>

}

interface AreaSelectionProps {

}

function AreaSelection({
  markerCount,
  markerGap
}:AreaSelectionProps & SampleProps){

  //MintMap Controller
  const controller = useMintMapController()

  //Map 이벤트
  useEffect(()=>{

    const handleMouseClick = (e:EventParam<MapUIEventParam>)=>{
      if(drawMode){
        guidePosition && setPositions([...infoRef.current.positions, guidePosition])
      }
    }
    
    const handleMousemove = (e:EventParam<MapUIEventParam>)=>{
      
      const posParam = e.param.position
      setGuidePosition(posParam)

      const {positions} = infoRef.current
      
      //포인터 위치에 따라 폴리곤 면적 구하기
      if(positions.length > 1){
        setPolygonSize(Number(PolygonCalculator.calculatePolygonSize([...positions, posParam]).toFixed(0)))
      }else{
        setPolygonSize(0)
      }

      //포인터 위치에 따라 원 크기 조정
      if(positions.length > 0){
        
        const pos1 = positions[0]
        const km = GeoCalulator.computeDistanceKiloMeter(pos1, posParam)
        setMeter((km * 1000).toFixed(1))

        setGuideCircleRadius(km * 1000)
        setGuideCircleRadiusUnit('METER')

      }else{
        setMeter(undefined)
      }

    }

    controller.addEventListener("MOUSEMOVE", handleMousemove)
    controller.addEventListener("CLICK", handleMouseClick)

    return ()=>{
      controller.removeEventListener('MOUSEMOVE', handleMousemove) 
      controller.removeEventListener("CLICK", handleMouseClick)
    }

  })

  //폴리곤 path
  const [positions, setPositions] = useState<Position[]>([])
  const infoRef = useRef({
    positions:positions
  })

  useEffect(()=>{
    infoRef.current.positions = positions
  }, [positions])

  //거리 가이드
  const [meter, setMeter] = useState<string>()
  const [guidePosition, setGuidePosition] = useState<Position>()
  
  //폴리곤 사이즈
  const [polygonSize, setPolygonSize] = useState(0)

  //그리기 모드
  const [drawMode, setDrawMode] = useState(false)

  const [guideCircleRadius, setGuideCircleRadius] = useState<number>()
  const [guideCircleRadiusUnit, setGuideCircleRadiusUnit] = useState<'METER'|'PIXEL'>('METER')

  return <>

    <MapControlWrapper height={100} positionHorizontal="right">
      <FlexColumn>
        <Button selected={drawMode} onClick={()=>{
          
          setDrawMode(!drawMode)
          
          if(drawMode){
            setPositions([])
            setGuideCircleRadius(undefined)
          }

        }}>그리기모드</Button>
      </FlexColumn>
    </MapControlWrapper>

    {/* 원 그리기 */}
    {positions.length > 0 && guideCircleRadius && <CircleMarker zIndex={1} center={positions[0]} radius={guideCircleRadius} radiusUnit={guideCircleRadiusUnit} 
    shapeProperties={{
      fill:'green',
      fillOpacity:0.2,
      stroke:'green',
      strokeWidth:'2px',
      strokeDasharray:'6 2',
      pointerEvents:'none'
    }} />}

    {/* 영역 가이드 선 */}
    {positions.length > 1 && <PolygonMarker  zIndex={5} position={positions} mode={'POLYLINE'} simplifyPath={false} svgProperties={{pointerEvents:'none'}}></PolygonMarker>}
    
    {positions.length > 0 && guidePosition && <PolygonMarker zIndex={5} position={[positions[0], guidePosition]} mode="POLYLINE"
    shapeProperties={{strokeDasharray:'4 4', pointerEvents:'none'}}
    />}
    
    {guidePosition && positions.length > 0 && <PolygonMarker zIndex={5} position={[positions[positions.length - 1], guidePosition]} mode={'POLYLINE'}  simplifyPath={false}
    shapeProperties={{pointerEvents:'none'}}
    ></PolygonMarker>}

    {positions.map((pos, idx)=>{
      return <CircleMarker key={idx} center={pos} radius={6} background="red" zIndex={6} svgProperties={{pointerEvents:'none'}}></CircleMarker>
    })}

    {/* 영역 폴리곤 */}
    {positions.length > 1 && <PolygonMarker zIndex={5} position={guidePosition?[...positions, guidePosition]:positions} simplifyPath={false} 
    shapeProperties={{
      pointerEvents:'none',
      stroke:'none',
      fill:'coral',
      fillOpacity:0.2
    }}></PolygonMarker>}

    {/* 그리기 정보 */}
    {meter && guidePosition && <MapMarkerWrapper position={guidePosition} anchor={new Offset(-20, -20)} zIndex={999}>
      <TextBox>{`원점으로부터 ${meter} 미터`}</TextBox>
    </MapMarkerWrapper>}

    {polygonSize > 0 && guidePosition && <MapMarkerWrapper position={guidePosition} anchor={new Offset(-20, -50)} zIndex={999}>  
      <TextBox>{`면적 ${polygonSize} m2`}</TextBox>
    </MapMarkerWrapper>}

  </>

}

const Flex = styled.div`
  height:100%;
  display:flex;
  justify-content:flex-start;
  align-items:flex-end;
`

const FlexColumn = styled(Flex)`
  flex-direction:column;
`

const TextBox = styled(Flex)`
  background:gray;
  color:white;
  border-radius:5px;
  white-space:nowrap;
  font-size:12px;
  padding:2px 5px;
`

const Button = styled.button<{selected:boolean}>`
  background:${({selected})=>selected?'lightgreen':'white'}
`

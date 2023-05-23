import { StoryObj } from "@storybook/react";
import { BaseProps, EventParam, MapControlWrapper, MapMarkerWrapper, MapUIEventParam, MintMap, MintMapProps, Offset, PolygonCalculator, PolygonMarker, Position, useMintMapController } from "@mint-ui/map";
import { BaseArgs, CENTER, MAP_KEYS } from "../../../common/const"
import Container from "src/app/styled/Container";
import PositionGenerator from "../../util/PositionGenerator";
import { useEffect, useRef, useState } from "react";
import { GBD } from "./data/area";
import { TitledMarker } from "../marker/components/TitledMarker";
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
    markerGap:0.1
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
    
    const mapClick = ()=>{
      setAreaSelected(false)
      setMarkers([...orgMarkers.current])
    }

    const mapMouseMove = (e:EventParam<MapUIEventParam>)=>{
      areaSelected && setMouseInArea(false)
      areaSelected && setAreaOffGuidePosition(e.param.position)
    }

    controller.addEventListener('CLICK', mapClick)
    controller.addEventListener('MOUSEMOVE', mapMouseMove)
    
    return ()=>{
      controller.removeEventListener('CLICK', mapClick)
      controller.removeEventListener('MOUSEMOVE', mapMouseMove)
    }
  })

  //GBD
  const areaPositions = useRef(GBD as Position[])

  //마커 원본데이터
  const orgMarkers = useRef<Position[]>(PositionGenerator.get(CENTER, markerCount, markerGap))

  //마커 렌더링 대상
  const [markers, setMarkers] = useState<Position[]>(orgMarkers.current)
  useEffect(()=>{
    orgMarkers.current = PositionGenerator.get(CENTER, markerCount, markerGap)
    setMarkers(orgMarkers.current)
  }, [markerCount, markerGap])

  //권역선택
  const [areaSelected, setAreaSelected] = useState(false)

  //권역선택/해제 컨트롤
  const [areaOffGuidePosition, setAreaOffGuidePosition] = useState<Position|null>()
  const [mouseInArea, setMouseInArea] = useState(false)
  
  return <>

    <MapControlWrapper height={100} positionHorizontal="right">
      <FlexColumn>
        <Button selected={areaSelected} onClick={()=>{
          
          //선택/해제
          setAreaSelected(!areaSelected)

          //영역에 있는 폴리곤만 필터링
          if(areaSelected){
            setMarkers([...orgMarkers.current])
          }else{

            //모두 숨기고 지도 이동
            setMarkers([]);

            const map = controller.getMap()
            if(map && map instanceof naver.maps.Map){
              //morph 는 naver 전용
              map.morph(PolygonCalculator.getCenter(areaPositions.current), 13)
            }else{
              controller.panningTo(PolygonCalculator.getCenter(areaPositions.current))  
            }
            
            setTimeout(()=>{

              //마커 필터링
              const filteredMarkers = PolygonCalculator.getIncludedPositions(areaPositions.current, orgMarkers.current)
              setMarkers(filteredMarkers)

            }, 500)

          }

        }}>GBD 선택</Button>
      </FlexColumn>
    </MapControlWrapper>

    {
      areaSelected &&
      <PolygonMarker position={areaPositions.current} lastReapeated={true} zIndex={1}
      shapeProperties={{stroke:'red', strokeWidth:'2px', fillOpacity:0.3,
      onMouseOver:()=>{
        setMouseInArea(true)
      },
      }}
      >
        <FlexCenter><TextBox>GBD 강남이지만 zIndex 가 폴리곤에 속한다</TextBox></FlexCenter>
      </PolygonMarker>
    }

    {markers.map((pos, idx)=>{
      return <TitledMarker key={idx} title={'sssss'} position={pos} hover={false} zIndex={1000 + idx}
      ></TitledMarker>
    })}

    {
      areaSelected && !mouseInArea && areaOffGuidePosition && 
      <MapMarkerWrapper position={areaOffGuidePosition} anchor={new Offset(-10, -10)} zIndex={10000}>
        <TextBox>클릭시 권역선택시 해제됩니다.</TextBox>
      </MapMarkerWrapper>
    }

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

const FlexCenter = styled(Flex)`
  justify-content:center;
  align-items:center;
`

const TextBox = styled(Flex)`
  height:fit-content;
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

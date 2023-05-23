import { MapMarkerWrapper, MapMarkerWrapperProps, SVGCircle } from "@mint-ui/map";
import styled from "styled-components";

interface SimpleCircleProps {
  color?:string
}
export function SimpleCircle({color = '#92B138', ...props}:SimpleCircleProps & MapMarkerWrapperProps){
  return <MapMarkerWrapper {...props}>
    <Circle color={color}/>
  </MapMarkerWrapper>
}

const Circle = styled.div<{ color?: string }>`
  background-color: ${({color})=>color || '#92B138'};
  width: 12px;
  height: 12px;
  border-radius: 100%;
  border: 1px solid white;
`

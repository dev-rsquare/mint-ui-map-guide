import { MapMarkerWrapper, MapMarkerWrapperProps } from "@mint-ui/map"
import { useState } from "react"
import styled from "styled-components"

interface TitledMarkerProps {
  title:string
  hover?:boolean
}
export function TitledMarker({title, hover=false, ...props}:TitledMarkerProps & MapMarkerWrapperProps){

  const [mouseDown, setMouseDown] = useState(false)
  const [hoverState, setHoverState] = useState(hover)
  
  

  return <MapMarkerWrapper {...props}>
    <Marks background={hoverState?'lightgreen':'red'}/>
    <Title background={mouseDown?'lightgreen':'white'} borderColor={hoverState?'lightgreen':'red'}
    onMouseDown={()=>{
      setMouseDown(true)
    }}
    onMouseUp={()=>{
      setMouseDown(false)
    }}
    onMouseOver={()=>{
      setHoverState(true)
    }}
    onMouseOut={()=>{
      setHoverState(false)
    }}
    >{title}</Title>
  </MapMarkerWrapper>
}

const Marks = styled.div<{background:string}>`
  position:absolute;
  transform:skew(25deg, 15deg);
  background:${({background})=>background};
  width:10px;
  height:10px;
  left:-1px;
  top:-1px;
`
const Title = styled.div<{background:string, borderColor:string}>`
 position:absolute;
 fontSize:12px;
 fontWeight:600;
 color:black;
 padding:3px 5px;
 background:white;
 border:2px solid ${({borderColor})=>borderColor};
 borderRadius:6px;
 whiteSpace:nowrap;
 background:${({background})=>background};
`

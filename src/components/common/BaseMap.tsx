import { MapType, MintMap, MintMapProps, Position } from "@mint-ui/map";
import React, { useEffect, useState } from "react";

interface MapProps extends Omit<MintMapProps, 'mapKey'|'mapType'> {
  mapKey?:string;
  mapType?:MapType;
  h?:string;
}

const KEYS = new Map([
  ['google', 'AIzaSyBgPrwr9buZ0EjOxFumRyXyqrkVtEZEtkk'],
  ['naver', 'yc2mrw1mz8']
])

export function BaseMap({
  mapKey,
  mapType = 'google', 
  base = {center:new Position(-25.344, 131.031), zoomLevel:12},
  h = '500px',
  children,
  ...props
}:React.PropsWithChildren<MapProps>){

  const [ type, setType ] = useState(mapType)
  useEffect(()=>{
    setType(mapType);
  }, [mapType]);

  return <div style={{height:h, display:'flex', flexDirection:'column', marginBottom:'25px'}}>
    <div style={{flex:'0 0 50px', display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
      <select 
      value={type}
      onChange={(e)=>{
        setType(e.target.value as MapType);
      }}>
        <option value='google'>Google</option>
        <option value='naver'>Naver</option>
      </select>
    </div>
    <div style={{flex:'1 1 auto'}}>
      <MintMap
      mapKey={mapKey || KEYS.get(type)}
      mapType={type}
      base={base}
      {...props}
      >{children}</MintMap>
    </div>
  </div>
}

export default BaseMap;
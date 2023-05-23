import { StoryObj } from "@storybook/react";
import { MapType, MintMap } from "@mint-ui/map";
import { useEffect, useState } from "react";
import { BaseArgs, MAP_KEYS } from "../../../common/const"
import Container from "src/app/styled/Container";

type Story = StoryObj<typeof MintMap>;

export const Map:Story = {

  render: ({
    mapType
  })=>{
    
    return <Container>
      <MapTemplate mapType={mapType}/>
    </Container>
  },
  args:BaseArgs
}

export default Map

//=================================================================

interface MapTemplateProps {
  mapType:MapType|null
}

function MapTemplate({
  mapType
}:MapTemplateProps){
  return <MintMap mapKey={MAP_KEYS.get(mapType) || ''} mapType={mapType}>

  </MintMap>
}
import { CircleMarker, Position } from '@mint-ui/map';
import React from 'react';

import { MintMap } from './common/BaseMap';

export function CircleMarkerMap() {
  return (
    <MintMap base={{ center: new Position(37.4004906706981, 127.107806987924), zoomLevel: 18 }}>
      <CircleMarker
        center={new Position(37.4004906706981, 127.107806987924)}
        radius={50}
        radiusUnit='METER'
        shapeProperties={{ fill: 'blue', fillOpacity: 0.3, stroke: 'red' }}
      />
    </MintMap>
  );
}
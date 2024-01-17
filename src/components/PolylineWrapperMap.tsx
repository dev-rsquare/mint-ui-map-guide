import { MapPolylineWrapper, Position } from '@mint-ui/map';
import React from 'react';

import { MintMap } from './common/BaseMap';

const paths = [
  new Position(37.4002343929478, 127.108339583181),
  new Position(37.4002330712894, 127.107806511177),
  new Position(37.4004906706981, 127.107806987924),
  new Position(37.4004919924535, 127.108339948814),
  new Position(37.4002343929478, 127.108339583181),
];

export function PolylineWrapperMap() {
  return (
    <MintMap base={{ center: new Position(37.4004906706981, 127.107806987924), zoomLevel: 19 }}>
      <MapPolylineWrapper position={paths} />
    </MintMap>
  );
}
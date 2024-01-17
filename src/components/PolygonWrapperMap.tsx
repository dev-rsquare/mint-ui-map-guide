import { MapPolygonWrapper, Position } from '@mint-ui/map';
import React from 'react';

import { MintMap } from './common/BaseMap';

const paths = [
  new Position(37.4002343929478, 127.108339583181),
  new Position(37.4002330712894, 127.107806511177),
  new Position(37.4004906706981, 127.107806987924),
  new Position(37.4004919924535, 127.108339948814),
];

const innerPaths = [
  new Position(37.4002343929478 + 0.00005, 127.108339583181 - 0.00005),
  new Position(37.4002330712894 + 0.00005, 127.107806511177 + 0.00005),
  new Position(37.4004906706981 - 0.00005, 127.107806987924 + 0.00005),
  new Position(37.4004919924535 - 0.00005, 127.108339948814 - 0.00005),
];

innerPaths.reverse();

export function PolygonWrapperMap() {
  return (
    <MintMap base={{ center: new Position(37.4004906706981, 127.107806987924), zoomLevel: 19 }}>
      <MapPolygonWrapper position={paths} innerPositions={[ innerPaths ]} />
    </MintMap>
  );
}
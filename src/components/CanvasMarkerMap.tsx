import { CanvasMarker, Position } from '@mint-ui/map';
import React, { useState } from 'react';

import { MintMap } from './common/BaseMap';

const CENTER = new Position(37.4004906706981, 127.107806987924);

export function CanvasMarkerMap() {
  const [ markers ] = useState(getRandomData(CENTER, 3000)); // 랜덤하게 Position[] 생성

  return (
    <MintMap
      base={{ center: CENTER, zoomLevel: 14 }}
    >
      <CanvasMarker
        renderer={({ context, offset, payload }) => {
          context.beginPath();

          // 사각형
          context.rect(offset[0].x, offset[0].y, 20, 20);
          context.fillStyle = 'orange';
          context.fill();

          // 사각형 외곽선
          context.strokeStyle = 'red';
          context.strokeRect(offset[0].x, offset[0].y, 20, 20);

          // 폰트
          context.fillStyle = 'white';
          context.font = '10px caption';
          context.fillText(String(payload?.no), offset[0].x + 2, offset[0].y + 14);
          context.closePath();
        }}
        zIndex={2}
        data={markers}
      />
    </MintMap>
  );
}

const getRandom = () => Math.ceil(Math.random() * 50);
const getDirection = () => (Math.random() > 0.5 ? 1 : -1);

export const getRandomPosition = (lat:number, lng:number) => new Position(lat + (0.0015 * getRandom() * getDirection()), lng + (0.0015 * getRandom() * getDirection()));

export const getRandomData = (center:Position, count: number) => {
  const markers:{
    position: Position[];
    no: number;
    key: string;
  }[] = [];
  const { lat, lng } = center;

  const dupSet = new Set<string>();
  const getUniqueRandom = (i:number) => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const marker = {
        position: [ getRandomPosition(lat, lng) ],
        no: i + 1,
        key: String(i + 1),
      };
      const key = `${marker.position[0].lat}${marker.position[0].lng}`;
      if (!dupSet.has(key)) {
        dupSet.add(key);
        marker.key = key;
        return marker;
      }
    }
  };

  for (let i = 0; i < count; i++) {
    markers.push(getUniqueRandom(i));
  }

  return markers;
};
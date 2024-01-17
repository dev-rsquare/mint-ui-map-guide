import { Bounds, CircleMarker, ClusterInfo, MintMapController, Position, getClusterInfo } from '@mint-ui/map';
import React, { useMemo, useRef, useState } from 'react';

import { MintMap } from './common/BaseMap';

const CENTER = new Position(37.4004906706981, 127.107806987924);

export function ClusterSample() {
  const mintController = useRef<MintMapController>();
  const [ currBounds, setCurrBounds ] = useState<Bounds|null>(null);
  const [ markers ] = useState<Position[]>(getRandomData(CENTER, 100)); // 랜덤하게 Position[] 생성
  const memo = useMemo(() => {
    if (!currBounds || !mintController.current) {
      return null;
    }

    // 지도의 컨테이너 element
    const elem = mintController.current.mapDivElement;

    // 기본 크기 ( = 격자의 픽셀 크기)
    const baseSize = 50;

    // 클러스터 정보 구하기
    const clusterList = getClusterInfo(baseSize, currBounds, elem.offsetWidth, elem.offsetHeight, markers) as ClusterInfo[];

    // 사이즈 결정
    const maxItemSize = Math.max(...clusterList.map((c) => c.itemList.length));
    const getSize = (size:number) => baseSize * (size / maxItemSize);

    return (
      <>
        {clusterList.map((item, idx) => {
          // 클러스터 크기 정하기
          const baseSize = getSize(item.itemList.length);

          return (
            <CircleMarker
              key={`circle-${idx}`}
              center={item.centerPosition}
              radius={baseSize}
              background='orange'
              shapeProperties={{ stroke: 'red', fillOpacity: 0.5 }}
            ><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', fontSize: '20px' }}>{item.itemList.length}</div>
            </CircleMarker>
          );
        })}
      </>
    );
  }, [ markers, currBounds ]);

  return (
    <MintMap
      base={{ center: CENTER, zoomLevel: 12 }}
      onLoad={(_v, c) => {
        mintController.current = c;
        c.panningTo(CENTER);
      }}
      onBoundsChanged={(b) => {
        !currBounds && setCurrBounds(b);
      }}
    >{memo}
    </MintMap>
  );
}

const getRandom = () => Math.ceil(Math.random() * 50);
const getDirection = () => (Math.random() > 0.5 ? 1 : -1);

export const getRandomPosition = (lat:number, lng:number) => new Position(lat + (0.0015 * getRandom() * getDirection()), lng + (0.0015 * getRandom() * getDirection()));

export const getRandomData = (center:Position, count: number) => {
  const markers:any[] = [];
  const { lat, lng } = center;

  const dupSet = new Set<string>();
  const getUniqueRandom = (i:number) => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const marker = {
        ...getRandomPosition(lat, lng),
        no: i + 1,
        key: String(i + 1),
      };
      const key = `${marker.lat}${marker.lng}`;
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
import { MapControlWrapper, Position } from '@mint-ui/map';
import React from 'react';

import { MintMap } from './common/BaseMap';

export function MapControl() {
  return (
    <MintMap base={{ center: new Position(37.4004906706981, 127.107806987924), zoomLevel: 18 }}>
      <MapControlWrapper positionVertical='top' positionHorizontal='left'>
        <div style={{ border: '1px solid gray', background: 'white', padding: '15px' }}>
          <button>왼쪽 위 버튼</button>
        </div>
      </MapControlWrapper>
      <MapControlWrapper positionVertical='top' positionHorizontal='center'>
        <div style={{ border: '1px solid gray', background: 'white', padding: '15px' }}>
          <button>중앙 위 버튼</button>
        </div>
      </MapControlWrapper>
      <MapControlWrapper positionVertical='top' positionHorizontal='right'>
        <div style={{ border: '1px solid gray', background: 'white', padding: '15px' }}>
          <button>오른쪽 위 버튼</button>
        </div>
      </MapControlWrapper>
      <MapControlWrapper positionVertical='center' positionHorizontal='left'>
        <div style={{ border: '1px solid gray', background: 'white', padding: '15px' }}>
          <button>왼쪽 중앙 버튼</button>
        </div>
      </MapControlWrapper>
      <MapControlWrapper positionVertical='center' positionHorizontal='center'>
        <div style={{ border: '1px solid gray', background: 'white', padding: '15px' }}>
          <button>중앙 버튼</button>
        </div>
      </MapControlWrapper>
      <MapControlWrapper positionVertical='center' positionHorizontal='right'>
        <div style={{ border: '1px solid gray', background: 'white', padding: '15px' }}>
          <button>오른쪽 중앙 버튼</button>
        </div>
      </MapControlWrapper>
      <MapControlWrapper positionVertical='bottom' positionHorizontal='left'>
        <div style={{ border: '1px solid gray', background: 'white', padding: '15px' }}>
          <button>왼쪽 아래 버튼</button>
        </div>
      </MapControlWrapper>
      <MapControlWrapper positionVertical='bottom' positionHorizontal='center'>
        <div style={{ border: '1px solid gray', background: 'white', padding: '15px' }}>
          <button>중앙 아래 버튼</button>
        </div>
      </MapControlWrapper>
      <MapControlWrapper positionVertical='bottom' positionHorizontal='right'>
        <div style={{ border: '1px solid gray', background: 'white', padding: '15px' }}>
          <button>오른쪽 아래 버튼</button>
        </div>
      </MapControlWrapper>
    </MintMap>
  );
}
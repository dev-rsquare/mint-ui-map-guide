import { MapMarkerWrapper, Position } from '@mint-ui/map';
import React from 'react';

import { MintMap } from './common/BaseMap';

const LoadingComponent = () => (
  <div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
    로딩중입니다...
  </div>
);

export function CustomLoading() {
  return (
    <MintMap
      base={{ center: new Position(37.504497373023206, 127.04896282498558), zoomLevel: 16 }}
      mapLoadingComponent={LoadingComponent}
    >
      {/* Your marker */}
      <MapMarkerWrapper position={new Position(37.504497373023206, 127.04896282498558)}>

        {/* Your marker elements */}
        <div style={{ width: '10px', height: '10px', background: 'red', borderRadius: '10px' }} />

      </MapMarkerWrapper>
    </MintMap>
  );
}
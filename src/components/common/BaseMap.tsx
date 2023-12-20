import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { MapType, MintMap, MintMapProps, Position } from '@mint-ui/map';
import React, { useEffect, useState } from 'react';

interface MapProps extends Omit<MintMapProps, 'mapKey'|'mapType'> {
  mapKey?:string;
  mapType?:MapType;
  h?:string;
}

export function BaseMap({
  mapKey,
  mapType = 'google',
  base = { center: new Position(-25.344, 131.031), zoomLevel: 12 },
  h = '500px',
  children,
  ...props
}:React.PropsWithChildren<MapProps>) {
  const [ type, setType ] = useState(mapType);
  useEffect(() => {
    setType(mapType);
  }, [ mapType ]);

  const { siteConfig: { customFields } } = useDocusaurusContext();

  return (
    <div style={{ height: h, display: 'flex', flexDirection: 'column', marginBottom: '25px' }}>
      <div style={{ flex: '0 0 50px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <select
          value={type}
          onChange={(e) => {
            setType(e.target.value as MapType);
          }}
        >
          <option value='google'>Google</option>
          <option value='naver'>Naver</option>
        </select>
      </div>
      <div style={{ flex: '1 1 auto' }}>
        <MintMap
          mapKey={mapKey || String(customFields[`${type}MapKey`])}
          mapType={type}
          base={base}
          {...props}
        >{children}
        </MintMap>
      </div>
    </div>
  );
}

export default BaseMap;
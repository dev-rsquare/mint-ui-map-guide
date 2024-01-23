import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { MapType, MintMap as MintUIMap, MintMapProps, Position } from '@mint-ui/map';
import React, { useEffect, useState } from 'react';

interface MapProps extends Omit<MintMapProps, 'mapKey'|'mapType'> {
  mapKey?:string;
  mapType?:MapType;
  w?:string;
  h?:string;
}

export function MintMap({
  mapKey,
  mapType = 'google',
  base = { center: new Position(-25.344, 131.031), zoomLevel: 12 },
  w = '100%',
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
    <div style={{ width: w, height: h, display: 'flex', flexDirection: 'column', marginBottom: '25px' }}>
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
        <MintUIMap
          mapKey={mapKey || String(customFields[`${type}MapKey`])}
          mapType={type}
          base={base}
          {...props}
        >{children}
        </MintUIMap>
      </div>
    </div>
  );
}

export default MintMap;
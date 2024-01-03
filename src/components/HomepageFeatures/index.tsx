import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.css';

interface FeatureItem {
  title: string;
  description: JSX.Element;
}

const FeatureList: FeatureItem[] = [
  {
    title: '통일된 인터페이스',
    description: (
      <>
        각기 다른 맵의 API 를 통일하여 하나의 코드로 여러가지 지도 서비스를 구현할 수 있습니다.
      </>
    ),
  },
  {
    title: 'React 라이프사이클',
    description: (
      <>
        React 의 라이프사이클 내에서 지도 API 가 연결되어 있으므로 지도 관련 객체의 생성/해제를 신경쓰지 않아도 됩니다.
      </>
    ),
  },
  {
    title: '편리한 유틸의 제공',
    description: (
      <>
        자주 사용하는 거리나 폴리곤 관련된 계산을 해주는 유틸이 내장되어 있습니다.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center padding-horiz--md'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
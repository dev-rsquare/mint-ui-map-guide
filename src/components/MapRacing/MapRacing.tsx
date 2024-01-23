import React, { useState } from 'react';

import { Flex } from './subs/base/Flex';
import { Frame } from './subs/base/Frame';
import { GameMain } from './subs/game/GameMain';

export function MapRacing() {
  const [ fullScreenMode, setFullScreenMode ] = useState(false);

  const frameStyle:React.CSSProperties = { background: 'white' };
  if (fullScreenMode) {
    frameStyle.position = 'fixed';
    frameStyle.width = '100vw';
    frameStyle.height = '100vh';
    frameStyle.zIndex = 1000;
    frameStyle.left = '0px';
    frameStyle.top = '0px';
  } else {
    frameStyle.position = 'relative';
    frameStyle.width = '100%';
    frameStyle.height = '800px';
    frameStyle.zIndex = 0;
  }

  const [ renderGame, setRenderGame ] = useState(true);

  return (
    <Frame style={frameStyle}>

      {/* 상단버튼 영역 */}
      <Flex row fAlign='right' fSize='30px'>
        <button onClick={() => {
          setFullScreenMode(!fullScreenMode);
          setRenderGame(false);
          setTimeout(() => {
            setRenderGame(true);
          }, 200);
        }}
        >{fullScreenMode ? '돌아가기' : '전체화면'}
        </button>
      </Flex>

      {/* 메인 영역 */}
      <Flex fAlign='center'>
        {renderGame && <GameMain />}
      </Flex>

    </Frame>
  );
}
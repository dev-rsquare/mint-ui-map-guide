import React, { useContext, useRef } from 'react';

import { GAME_STATUS, GameContext } from './GameMain';

import { Flex } from '../base/Flex';

export function GameControl() {
  const context = useContext(GameContext);
  function setUsersInput(users:string[]) {
    context.setContext({ ...context, users });
  }
  const { users: usersInput } = context;

  function setGameStatus(status:GAME_STATUS) {
    context.setContext({ ...context, status });
  }

  const textareaRef = useRef<HTMLTextAreaElement|null>(null);
  return (
    <Flex fAlign='center' style={{ width: '100%', height: '100%' }}>

      <Flex
        fPadding='30px'
        fGap='5px'
        style={{
          pointerEvents: 'auto',
          background: 'white',
          maxWidth: '800px',
          maxHeight: '500px',
          border: '1px solid gray',
          borderRadius: '5px',
        }}
      >
        <Flex row fSize='30px' fAlign='between' style={{ fontSize: '22px', fontWeight: 700 }}>
          게임 셋팅
          <Flex row fAlign='right' fGap='10px'>
            <button
              style={{ height: '35px' }}
              onClick={() => {
                setUsersInput([]);
              }}
            >초기화
            </button>
            <button
              style={{ height: '35px' }}
              onClick={() => {
                if (usersInput.length <= 0) {
                  alert('유저를 추가하세요');
                } else {
                  setGameStatus('playing');
                }
              }}
            >게임 시작
            </button>
          </Flex>
        </Flex>
        <Line />
        <ControlRow
          title='참가자 추가'
          elem={(
            <textarea
              ref={textareaRef}
              placeholder='참가자 붙여넣기 (쉼표로 여러명 가능)'
              style={{ padding: '10px', width: '100%', height: '100px', resize: 'none' }}
            />
          )}
        />
        <Flex fSize='30px' fAlign='right'>
          <button onClick={() => {
            if (textareaRef.current) {
              const split = textareaRef.current.value.split(',');
              const newData = Array.from(new Set([ ...usersInput, ...split.map((s) => s.trim()) ])).sort();
              setUsersInput(newData);
              textareaRef.current.value = '';
            }
          }}
          >추가
          </button>
        </Flex>
        <ControlRow
          title={`참가자 ${usersInput.length}명`}
          fSize={undefined}
          elem={(
            <Flex row fGap='8px' style={{ flexWrap: 'wrap', height: '204px', padding: '10px', width: '100%', overflow: 'auto' }}>
              {usersInput.map((user) => (
                <UserCard
                  key={`user-${user}`}
                  name={user}
                  click={(name) => {
                    usersInput.splice(usersInput.indexOf(name), 1);
                    setUsersInput([ ...usersInput ]);
                  }}
                />
              ))}
            </Flex>
          )}
        />
      </Flex>

    </Flex>
  );
}

function UserCard({ name, click }:{name:string; click:(name:string)=>void;}) {
  return (
    <div>
      {name} <button onClick={() => click(name)}>X</button>
    </div>
  );
}

function Line() {
  return <Flex fSize='1px' style={{ margin: '20px 0px', height: '1px', background: 'gray' }} />;
}

function ControlRow({ title, elem, fSize }:{title:string; elem:JSX.Element; fSize?:string;}) {
  return <Flex row fGap='30px' fSize={fSize === undefined ? undefined : fSize || 'fit-content'}><div>{title}</div>{elem}</Flex>;
}
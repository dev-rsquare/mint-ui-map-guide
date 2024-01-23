import { MapControlWrapper, MapMarkerWrapper, Offset, Position } from '@mint-ui/map';
import React, { createContext, useEffect, useRef, useState } from 'react';

import { GameControl } from './GameControl';
import line2path from './line2path';
import { SubwayTrainIcon } from './SubwayIcons';

import MintMap from '../../../common/BaseMap';
import { Flex } from '../base/Flex';

export type GAME_STATUS = 'ready'|'playing'|'end'
interface TrainInfo{
  name:string;
  color:string;
  currPosition:Position;
  velocity:number;
  ranking:number;
  startTime:number;
  endTime:number;
  timeText:string;
}

export interface GameMainContext {
  status:GAME_STATUS;
  users:string[];
  setContext:(newContext:GameMainContext)=>void;
}

export const GameContext = createContext<GameMainContext>({ status: 'ready', users: [], setContext() {} });

export function GameMain() {
  const [ gameContext, setGameContext ] = useState<GameMainContext>({
    status: 'ready',
    users: [],
    setContext(c) {
      setGameContext(c);
    },
  });

  const { status: gameStatus } = gameContext;
  function setGameStatus(status:GAME_STATUS) {
    setGameContext({ ...gameContext, status });
  }

  const trainCount = gameContext.users.length;

  const interval = useRef<number>(0);
  const [ startNumbering, setStartNumbering ] = useState<string>();

  useEffect(() => {
    if (gameStatus === 'playing') {
      // 3초마다 속도변경
      interval.current = window.setInterval(() => {
        trains.forEach((train) => {
          train.velocity = getVelocity();
        });

        setTrains([ ...trains ]);
      }, 2000);

      let timeCnt = 1;
      setStartNumbering(String(timeCnt));
      const timerInter = window.setInterval(() => {
        timeCnt += 1;
        if (timeCnt === 5) {
          setStartNumbering(undefined);
          window.clearInterval(timerInter);
        } else if (timeCnt === 4) {
          setStartNumbering('START!!!!');
        } else {
          setStartNumbering(String(timeCnt));
        }
      }, 1000);
    } else {
      window.clearInterval(interval.current);
    }

    return () => {
      window.clearInterval(interval.current);
    };
  }, [ gameStatus ]);

  const [ trains, setTrains ] = useState<TrainInfo[]>([]);
  useEffect(() => {
    initTrains(gameContext.users);
  }, [ gameContext.users ]);

  const [ finished, setFinished ] = useState<TrainInfo[]>([]);

  function getVelocity() {
    // 부스트 받을 확률 (10% 미만)
    if (Math.random() < 0.10) {
      return 4000 + Math.ceil(Math.random() * 5000);
    }
    // 패널티 받을 확률 (10% 미만)
    if (Math.random() < 0.10) {
      return 500;
    }

    return 2000 + Math.ceil(Math.random() * 2000);
  }
  function getVMode(velocity:number) {
    if (velocity >= 4000) {
      return ' 부스터!!!!';
    }
    return velocity === 500 ? ' 고장 ㅠㅠ' : '';
  }

  function initTrains(users:string[]) {
    setFinished([]);
    trainFinishList.current = [];
    setTrains(users.map((name) => {
      const color = getSubwayColor();
      return {
        name,
        color,
        currPosition: line2path.paths[0],
        ranking: 1,
        velocity: getVelocity(),
        startTime: 0,
        endTime: 0,
        timeText: '',
      } as TrainInfo;
    }));
  }

  const trainFinishList = useRef<TrainInfo[]>([]);
  const trainFinish = (train:TrainInfo) => {
    train.endTime = new Date().getTime();
    train.timeText = `${Number((train.endTime - train.startTime) / 1000).toFixed(2)} 초`;

    trainFinishList.current.push(train);
    const newFinished = [ ...trainFinishList.current ];
    setFinished(newFinished);

    train.ranking = newFinished.length;

    if (newFinished.length === trainCount) {
      gameEnds();
    }

    console.log(`train ${train.name} finish`, newFinished.length, trainCount);
  };

  const gameEnds = () => {
    setGameStatus('end');
  };

  return (
    <Flex>

      <GameContext.Provider value={gameContext}>
        <MintMap
          mapType='naver'
          h='100%'
          dissolveEffectWhenLoaded={false}
          base={{
            center: {
              lat: 37.504497373023206,
              lng: 127.04896282498558,
            },
            zoomLevel: 13,
          }}
        >

          <MapControlWrapper positionHorizontal='center' positionVertical='center' width='100%' height='100%' disablePointerEvent>
            {gameStatus === 'ready' && <GameControl />}
          </MapControlWrapper>

          {/* 레이싱 기차들 */}
          {gameStatus !== 'ready' && trains.map((train) => (
            <MapMarkerWrapper
              key={`train-${train.name}`}
              position={train.currPosition}
              anchor={new Offset(20, 54)}
              movingAnimation={{
                autoStart: true,
                fps: 30,
                delay: 4000,
                loop: false,
                positionClosed: true,
                positions: line2path.paths as Position[],
                velocity: train.velocity,
                onMovingStart: () => {
                  train.startTime = new Date().getTime();
                },
                onMovingEnd: () => {
                  trainFinish(train);
                },
              }}
            >
              <Flex><div style={{ whiteSpace: 'nowrap', color: train.color, fontWeight: 700 }}>{`${train.name}${getVMode(train.velocity)}`}</div></Flex>
              <SubwayTrainIcon scale={0.6} color={train.color} />
            </MapMarkerWrapper>
          ))}

          {/* 게임 결과판 */}
          {finished && finished.length > 0 && gameStatus !== 'ready' && (
            <MapControlWrapper positionHorizontal='center' width={300} height='100%'>
              <div style={{ padding: '5px', background: 'white', width: 'fit-content', height: '100%', overflow: 'auto' }}>
                {finished.map((item, idx) => (
                  <Flex row fGap='20px' key={`game-result-${idx}`} style={{ height: '30px', padding: '0px 20px' }}>
                    <div style={{ width: '150px' }}>{`${(idx + 1)} 등  (${item.timeText})`}</div><div style={{ minWidth: '100px', color: item.color }}>{item.name}</div>
                  </Flex>
                ))}
              </div>
            </MapControlWrapper>
          )}

          {/* 게임 시작 넘버링 */}
          {startNumbering && (
            <MapControlWrapper positionHorizontal='center' positionVertical='center' width={100} height={100}>
              <Flex fAlign='center' style={{ transform: 'translateY(-100px)' }}><div style={{ color: 'red', fontSize: '90px' }}>{startNumbering}</div></Flex>
            </MapControlWrapper>
          )}

          {gameStatus === 'end' && (
            <MapControlWrapper positionHorizontal='right' positionVertical='bottom'>
              <div>
                <button
                  style={{ width: '100px', height: '50px' }}
                  onClick={(() => {
                    setGameStatus('ready');
                    initTrains(gameContext.users);
                  })}
                >다시 시작
                </button>
              </div>
            </MapControlWrapper>
          )}

        </MintMap>
      </GameContext.Provider>
    </Flex>
  );
}

function getSubwayColor() {
  // Generate random values for H, S, and L
  const hue = Math.floor(Math.random() * 360);

  // Construct the HSL color string
  const hslColor = `hsl(${hue}, 100%, 50%)`;

  return hslColor;
}
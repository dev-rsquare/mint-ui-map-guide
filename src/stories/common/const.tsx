import { Meta } from "@storybook/react"
import { MintMap, MintMapProps } from "@mint-ui/map"

export const MintMapMeta = ()=>{
  return {
    argTypes: {
      mapType: {
        options: ['naver', 'google', 'kakao'],
        control: { type: 'radio' },
      }
    },
  } as Meta<typeof MintMap>
}

const initMap = 'naver'

export const MAP_KEYS = new Map<any, string>()
.set('naver', 'yc2mrw1mz8')
.set('google', 'AIzaSyBgPrwr9buZ0EjOxFumRyXyqrkVtEZEtkk')
.set('kakao', '42837b413c5e41c4489e884a91a40a0b')

export const BaseArgs = {
  mapType:initMap
} as MintMapProps

export const CENTER = {
  lat:37.504497373023206,
  lng:127.04896282498558,
}


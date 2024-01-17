"use strict";(self.webpackChunkmint_ui_map_guide=self.webpackChunkmint_ui_map_guide||[]).push([[434],{4736:(e,t,n)=>{n.d(t,{D:()=>r});var a=n(7462),o=n(2263),l=n(9788),i=n(7294);function r(e){let{mapKey:t,mapType:n="google",base:r={center:new l.Position(-25.344,131.031),zoomLevel:12},h:s="500px",children:c,...d}=e;const[p,u]=(0,i.useState)(n);(0,i.useEffect)((()=>{u(n)}),[n]);const{siteConfig:{customFields:f}}=(0,o.Z)();return i.createElement("div",{style:{height:s,display:"flex",flexDirection:"column",marginBottom:"25px"}},i.createElement("div",{style:{flex:"0 0 50px",display:"flex",justifyContent:"flex-end",alignItems:"center"}},i.createElement("select",{value:p,onChange:e=>{u(e.target.value)}},i.createElement("option",{value:"google"},"Google"),i.createElement("option",{value:"naver"},"Naver"))),i.createElement("div",{style:{flex:"1 1 auto"}},i.createElement(l.MintMap,(0,a.Z)({mapKey:t||String(f[`${p}MapKey`]),mapType:p,base:r},d),c)))}},8057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>k,default:()=>M,frontMatter:()=>m,metadata:()=>x,toc:()=>g});var a=n(7462),o=n(7294),l=n(3905),i=n(9788),r=n(4736);const s=new i.Position(37.4004906706981,127.107806987924);function c(){const[e]=(0,o.useState)(f(s,3e3));return o.createElement(r.D,{base:{center:s,zoomLevel:14}},o.createElement(i.CanvasMarker,{renderer:e=>{let{context:t,offset:n,payload:a}=e;t.beginPath(),t.rect(n[0].x,n[0].y,20,20),t.fillStyle="orange",t.fill(),t.strokeStyle="red",t.strokeRect(n[0].x,n[0].y,20,20),t.fillStyle="white",t.font="10px caption",t.fillText(String(a?.no),n[0].x+2,n[0].y+14),t.closePath()},zIndex:2,data:e}))}const d=()=>Math.ceil(50*Math.random()),p=()=>Math.random()>.5?1:-1,u=(e,t)=>new i.Position(e+.0015*d()*p(),t+.0015*d()*p()),f=(e,t)=>{const n=[],{lat:a,lng:o}=e,l=new Set,i=e=>{for(;;){const t={position:[u(a,o)],no:e+1,key:String(e+1)},n=`${t.position[0].lat}${t.position[0].lng}`;if(!l.has(n))return l.add(n),t.key=n,t}};for(let r=0;r<t;r++)n.push(i(r));return n},m={},k="\uce94\ubc84\uc2a4 \ub9c8\ucee4",x={unversionedId:"guides/marker-canvas",id:"guides/marker-canvas",title:"\uce94\ubc84\uc2a4 \ub9c8\ucee4",description:"\uae30\ubcf8 \uac1c\ub150",source:"@site/docs/guides/marker-canvas.mdx",sourceDirName:"guides",slug:"/guides/marker-canvas",permalink:"/mint-ui-map-guide/docs/guides/marker-canvas",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\uc11c\ud074 \ub9c8\ucee4",permalink:"/mint-ui-map-guide/docs/guides/marker-circle"},next:{title:"\uc624\ubc84\ub808\uc774 - \ucee8\ud2b8\ub864",permalink:"/mint-ui-map-guide/docs/guides/overlay-control"}},v={},g=[{value:"\uae30\ubcf8 \uac1c\ub150",id:"\uae30\ubcf8-\uac1c\ub150",level:2},{value:"\uae30\ubcf8 \uae30\ub2a5",id:"\uae30\ubcf8-\uae30\ub2a5",level:2},{value:"renderer",id:"renderer",level:3},{value:"data",id:"data",level:3},{value:"\uce94\ubc84\uc2a4 \uae30\ub2a5",id:"\uce94\ubc84\uc2a4-\uae30\ub2a5",level:2},{value:"visible",id:"visible",level:3},{value:"zIndex",id:"zindex",level:3},{value:"anchor",id:"anchor",level:3}],y={toc:g},h="wrapper";function M(e){let{components:t,...o}=e;return(0,l.kt)(h,(0,a.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\uce94\ubc84\uc2a4-\ub9c8\ucee4"},"\uce94\ubc84\uc2a4 \ub9c8\ucee4"),(0,l.kt)("h2",{id:"\uae30\ubcf8-\uac1c\ub150"},"\uae30\ubcf8 \uac1c\ub150"),(0,l.kt)("p",null,"CanvasMarker \ucef4\ud3ec\ub10c\ud2b8\ub294 \ub9c8\ucee4\ub97c HTML Canvas \uc5d0 \uadf8\ub9b4 \uc218 \uc788\uac8c \ud574\uc90d\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub2e4\ub978 \ub9c8\ucee4 \ucef4\ud3ec\ub10c\ud2b8\uc640\ub294 \ub2e4\ub974\uac8c \ucef4\ud3ec\ub10c\ud2b8 \uc790\uccb4\uc5d0\ub294 \uc704\uce58\ub97c \uc9c0\uc815\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.\n\ub9c8\ucee4\ub294 \uc790\ub3d9\uc73c\ub85c \uc67c\ucabd \uc0c1\ub2e8\uc5d0 \uace0\uc815\ub418\uba70 \uc774\uac83\uc744 \uae30\uc900\uc73c\ub85c \ubdf0\ud3ec\ud2b8 \ud06c\uae30\ub9cc\ud07c \uce94\ubc84\uc2a4\uac00 \ub36e\ub294 \ud615\ud0dc\ub97c \uac00\uc9d1\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(7861).Z,width:"864",height:"589"})),(0,l.kt)("p",null,"\ub9cc\uc57d \uc9c0\ub3c4\ub97c \uc774\ub3d9\ud558\uac8c \ub418\uba74 \ub9c8\ucee4\uc758 \uc704\uce58\ub3c4 \uac19\uc774 \uc6c0\uc9c1\uc785\ub2c8\ub2e4. \uc989, \ud56d\uc0c1 \ubdf0\ud3ec\ud2b8 \uae30\uc900 \uc67c\ucabd \uc0c1\ub2e8\uc5d0 \uc704\uce58\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { CanvasMarker, Position } from '@mint-ui/map';\nimport React, { useState } from 'react';\n\nimport { MintMap } from './common/BaseMap';\n\nconst CENTER = new Position(37.4004906706981, 127.107806987924);\n\nexport function CanvasMarkerMap() {\n  const [ markers ] = useState(getRandomData(CENTER, 3000)); // \ub79c\ub364\ud558\uac8c Position[] \uc0dd\uc131\n\n  return (\n    <MintMap\n      base={{ center: CENTER, zoomLevel: 14 }}\n    >\n      <CanvasMarker\n        renderer={({ context, offset, payload }) => {\n          context.beginPath();\n\n          // \uc0ac\uac01\ud615\n          context.rect(offset[0].x, offset[0].y, 20, 20);\n          context.fillStyle = 'orange';\n          context.fill();\n\n          // \uc0ac\uac01\ud615 \uc678\uacfd\uc120\n          context.strokeStyle = 'red';\n          context.strokeRect(offset[0].x, offset[0].y, 20, 20);\n\n          // \ud3f0\ud2b8\n          context.fillStyle = 'white';\n          context.font = '10px caption';\n          context.fillText(String(payload?.no), offset[0].x + 2, offset[0].y + 14);\n          context.closePath();\n        }}\n        zIndex={2}\n        data={markers}\n      />\n    </MintMap>\n  );\n}\n")),(0,l.kt)("p",null,"\uc544\ub798\ub294 \ub9c8\ucee4\ub97c 3000\uac1c \uadf8\ub9b0 \uacb0\uacfc\uc785\ub2c8\ub2e4.\n\ub2e4\ub978 \ub9c8\ucee4\uc640 \ub2e4\ub974\uac8c \uc131\ub2a5\uc800\ud558\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,l.kt)(c,{mdxType:"CanvasMarkerMap"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud604\uc7ac\uae4c\uc9c0\ub294 \uadf8\ub824\uc9c4 \ub9c8\ucee4\uc5d0 \ub300\ud55c \uc774\ubca4\ud2b8\ucc98\ub9ac\uac00 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4.\n\uc774 \ubd80\ubd84\uc740 \uc9c1\uc811 \uc774\ubca4\ud2b8 \uad6c\ud604\uc744 \ud574\uc57c\ud569\ub2c8\ub2e4.\n\uc544\ub2c8\uba74 \uc774\ubca4\ud2b8\uac00 \ud544\uc694\uc5c6\ub294 \ub2e8\uc21c \uc624\ubc84\ub808\uc774 \uac1d\uccb4\ub97c \ub2e4\uc218 \uadf8\ub824\uc57c \ud560\ub54c \uc0ac\uc6a9\ud558\ub294\uac8c \uc88b\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h2",{id:"\uae30\ubcf8-\uae30\ub2a5"},"\uae30\ubcf8 \uae30\ub2a5"),(0,l.kt)("h3",{id:"renderer"},"renderer"),(0,l.kt)("p",null,"\uce94\ubc84\uc2a4 \ub9c8\ucee4\uac00 \ub80c\ub354\ub9c1\ub420\ub54c \ud638\ucd9c\ub418\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ud568\uc218\uc758 \ud30c\ub77c\ubbf8\ud130 context \ub294 CanvasRenderingContext2D \uac1d\uccb4\ub85c, \uc774\uac83\uc744 \uc0ac\uc6a9\ud558\uc5ec \uce94\ubc84\uc2a4\uc5d0 \ub4dc\ub85c\uc789\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"renderer={({ context, offset, payload }) => {\n  context.beginPath();\n\n  // \uc0ac\uac01\ud615\n  context.rect(offset[0].x, offset[0].y, 20, 20);\n  context.fillStyle = 'orange';\n  context.fill();\n\n  // \uc0ac\uac01\ud615 \uc678\uacfd\uc120\n  context.strokeStyle = 'red';\n  context.strokeRect(offset[0].x, offset[0].y, 20, 20);\n\n  // \ud3f0\ud2b8\n  context.fillStyle = 'white';\n  context.font = '10px caption';\n  context.fillText(String(payload?.no), offset[0].x + 2, offset[0].y + 14);\n  context.closePath();\n}}\n")),(0,l.kt)("p",null,"offset \uc740 \ud604\uc7ac \ubdf0\ud3ec\ud2b8 \uae30\uc900\uc758 \ud53d\uc140 \uc88c\ud45c\uac12\uc758 \ubc30\uc5f4\uc785\ub2c8\ub2e4.\ndata \ud30c\ub77c\ubbf8\ud130\uc5d0 position:Position[] \uac12\uc744 \uac19\uc774 \ub118\uaca8\uc8fc\uba74 \ub0b4\ubd80\uc801\uc73c\ub85c \ud604\uc7ac \ubdf0\ud3ec\ud2b8 \uae30\uc900\uc758 \uac12\uc73c\ub85c \ubcc0\ud658\ub418\uc5b4 offset \uc73c\ub85c \ub9ac\ud134\ub429\ub2c8\ub2e4.\n\uc774 \uac12\uc744 \uc0ac\uc6a9\ud558\uc5ec \uce94\ubc84\uc2a4\uc5d0 \uadf8\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"data \uc5d0 position \uac12\uc774 \uc5c6\uc73c\uba74 offset \ubc30\uc5f4\uc740 \ube44\uc5b4\uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c, \uc9c1\uc811 \ubdf0\ud3ec\ud2b8 \uae30\uc900\uc73c\ub85c \ud53d\uc140 \uc88c\ud45c\ub97c renderer \ub0b4\ubd80\uc5d0\uc11c \uad6c\ud560\uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.\nMintMapController.positionToOffset(position:Position) \uc744 \uc774\uc6a9\ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,"payload \ub294 data \uc5d0 \ub118\uaca8\uc900 \ubc30\uc5f4\uc758 \ud56d\ubaa9\uc744 \ub9ac\ud134\ubc1b\uc2b5\ub2c8\ub2e4.\n\ub9c8\ucee4\ub97c \uadf8\ub9b4\ub54c \ud544\uc694\ud55c\uc815\ubcf4\ub97c payload \uc5d0 \ub2f4\uc544\uc11c \ub80c\ub354\ub9c1\ud560\ub54c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"data"},"data"),(0,l.kt)("p",null,"\uce94\ubc84\uc2a4\uc5d0 \uadf8\ub9b4\ub54c \uc0ac\uc6a9\ud560 \ub370\uc774\ud130\uc758 \ubc30\uc5f4\uc744 \ub118\uaca8\uc90d\ub2c8\ub2e4.  renderer \ub0b4\ubd80\uc5d0\uc11c payload \ud30c\ub77c\ubbf8\ud130\ub85c \ub3cc\ub824\ubc1b\uc544 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uce94\ubc84\uc2a4-\uae30\ub2a5"},"\uce94\ubc84\uc2a4 \uae30\ub2a5"),(0,l.kt)("h3",{id:"visible"},"visible"),(0,l.kt)("p",null,"\uce94\ubc84\uc2a4\uc758 visible \uc5ec\ubd80\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"zindex"},"zIndex"),(0,l.kt)("p",null,"\uce94\ubc84\uc2a4\uc758 zIndex \ub97c \uc124\uc815\ud569\ub2c8\ub2e4. \ub2e4\ub978 \ub9c8\ucee4 \ucef4\ud3ec\ub10c\ud2b8\uc640 \ub3d9\uc77c\ud55c zIndex \uccb4\uacc4\uc5d0 \uc788\uc73c\ubbc0\ub85c \ub808\uc774\uc5b4 \uad6c\uc131\uc2dc\uc5d0 \uc720\uc6a9\ud558\uac8c \uc4f8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"anchor"},"anchor"),(0,l.kt)("p",null,"\uce94\ubc84\uc2a4\uc758 anchor \ub97c \uc870\uc815\ud569\ub2c8\ub2e4. \uae30\ubcf8\uc740 \ubdf0\ud3ec\ud2b8 \uc67c\ucabd \uc0c1\ub2e8\uc785\ub2c8\ub2e4.  "),(0,l.kt)("p",null,"\uc77c\ubc18\uc801\uc73c\ub85c\ub294 \uc0ac\uc6a9\ud560 \ud544\uc694\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."))}M.isMDXComponent=!0},7861:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/marker_canvas_desc-f9510a9f837838df1645d5732f022785.png"}}]);
"use strict";(self.webpackChunkmint_ui_map_guide=self.webpackChunkmint_ui_map_guide||[]).push([[258],{4736:(e,n,i)=>{i.d(n,{D:()=>r});var o=i(7462),t=i(2263),l=i(9788),a=i(7294);function r(e){let{mapKey:n,mapType:i="google",base:r={center:new l.Position(-25.344,131.031),zoomLevel:12},h:p="500px",children:s,...u}=e;const[d,c]=(0,a.useState)(i);(0,a.useEffect)((()=>{c(i)}),[i]);const{siteConfig:{customFields:g}}=(0,t.Z)();return a.createElement("div",{style:{height:p,display:"flex",flexDirection:"column",marginBottom:"25px"}},a.createElement("div",{style:{flex:"0 0 50px",display:"flex",justifyContent:"flex-end",alignItems:"center"}},a.createElement("select",{value:d,onChange:e=>{c(e.target.value)}},a.createElement("option",{value:"google"},"Google"),a.createElement("option",{value:"naver"},"Naver"))),a.createElement("div",{style:{flex:"1 1 auto"}},a.createElement(l.MintMap,(0,o.Z)({mapKey:n||String(g[`${d}MapKey`]),mapType:d,base:r},u),s)))}},3867:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>v,contentTitle:()=>c,default:()=>P,frontMatter:()=>d,metadata:()=>g,toc:()=>y});var o=i(7462),t=i(7294),l=i(3905),a=i(9788),r=i(4736);const p=[new a.Position(37.4002343929478,127.108339583181),new a.Position(37.4002330712894,127.107806511177),new a.Position(37.4004906706981,127.107806987924),new a.Position(37.4004919924535,127.108339948814)],s=[new a.Position(37.4002843929478,127.108289583181),new a.Position(37.4002830712894,127.107856511177),new a.Position(37.400440670698096,127.107856987924),new a.Position(37.4004419924535,127.108289948814)];function u(){return t.createElement(r.D,{base:{center:new a.Position(37.4004906706981,127.107806987924),zoomLevel:19}},t.createElement(a.MapPolygonWrapper,{position:p,innerPositions:[s]}))}s.reverse();const d={},c="\uc624\ubc84\ub808\uc774 - \ud3f4\ub9ac\uace4",g={unversionedId:"guides/overlay-polygon",id:"guides/overlay-polygon",title:"\uc624\ubc84\ub808\uc774 - \ud3f4\ub9ac\uace4",description:"MapPolygonWrapper \ucef4\ud3ec\ub10c\ud2b8\ub294 \ud3f4\ub9ac\uace4\uc744 \uc9c0\ub3c4\uc758 API \ub97c \uc774\uc6a9\ud574 \uadf8\ub9bd\ub2c8\ub2e4.",source:"@site/docs/guides/overlay-polygon.mdx",sourceDirName:"guides",slug:"/guides/overlay-polygon",permalink:"/mint-ui-map-guide/docs/guides/overlay-polygon",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\uc624\ubc84\ub808\uc774 - \ucee8\ud2b8\ub864",permalink:"/mint-ui-map-guide/docs/guides/overlay-control"},next:{title:"\uc624\ubc84\ub808\uc774 - \ud3f4\ub9ac\ub77c\uc778",permalink:"/mint-ui-map-guide/docs/guides/overlay-polyline"}},v={},y=[{value:"PolygonMarker VS MapPolygonWrapper",id:"polygonmarker-vs-mappolygonwrapper",level:2},{value:"\uae30\ubcf8 \uae30\ub2a5",id:"\uae30\ubcf8-\uae30\ub2a5",level:2},{value:"position",id:"position",level:3},{value:"innerPositions",id:"innerpositions",level:3},{value:"visible",id:"visible",level:3},{value:"editable",id:"editable",level:3},{value:"\ud3f4\ub9ac\uace4 \uc2a4\ud0c0\uc77c",id:"\ud3f4\ub9ac\uace4-\uc2a4\ud0c0\uc77c",level:2},{value:"lineColor",id:"linecolor",level:3},{value:"lineSize",id:"linesize",level:3},{value:"lineOpacity",id:"lineopacity",level:3},{value:"fillColor",id:"fillcolor",level:3},{value:"fillOpacity",id:"fillopacity",level:3}],m={toc:y},k="wrapper";function P(e){let{components:n,...i}=e;return(0,l.kt)(k,(0,o.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\uc624\ubc84\ub808\uc774---\ud3f4\ub9ac\uace4"},"\uc624\ubc84\ub808\uc774 - \ud3f4\ub9ac\uace4"),(0,l.kt)("p",null,"MapPolygonWrapper \ucef4\ud3ec\ub10c\ud2b8\ub294 \ud3f4\ub9ac\uace4\uc744 \uc9c0\ub3c4\uc758 API \ub97c \uc774\uc6a9\ud574 \uadf8\ub9bd\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const paths = [\n  new Position(37.4002343929478, 127.108339583181),\n  new Position(37.4002330712894, 127.107806511177),\n  new Position(37.4004906706981, 127.107806987924),\n  new Position(37.4004919924535, 127.108339948814),\n];\n\nconst innerPaths = [\n  new Position(37.4002343929478 + 0.00005, 127.108339583181 - 0.00005),\n  new Position(37.4002330712894 + 0.00005, 127.107806511177 + 0.00005),\n  new Position(37.4004906706981 - 0.00005, 127.107806987924 + 0.00005),\n  new Position(37.4004919924535 - 0.00005, 127.108339948814 - 0.00005),\n];\n\n// \uc6d0\ub798 path \uc758 \ubc18\ub300\ubc29\ud5a5\uc73c\ub85c reverse\ninnerPaths.reverse();\n\nexport function PolygonWrapperMap() {\n  return (\n    <MintMap base={{ center: new Position(37.4004906706981, 127.107806987924), zoomLevel: 19 }}>\n      <MapPolygonWrapper position={paths} innerPositions={[ innerPaths ]} />\n    </MintMap>\n  );\n}\n")),(0,l.kt)(u,{mdxType:"PolygonWrapperMap"}),(0,l.kt)("h2",{id:"polygonmarker-vs-mappolygonwrapper"},"PolygonMarker VS MapPolygonWrapper"),(0,l.kt)("p",null,"MapPolygonWrapper \ucef4\ud3ec\ub10c\ud2b8\ub294 PolygonMarker \uc640 \uc720\uc0ac\ud55c \uae30\ub2a5\uc744 \ud569\ub2c8\ub2e4.\n\ucc28\uc774\uc810\uc774 \uc788\ub2e4\uba74 PolygonMarker \ub294 \uc9c0\ub3c4 API \uc0c1\uc5d0\uc11c \uac19\uc740 \ub808\uc774\uc5b4\uc5d0 \uc874\uc7ac\ud558\uc5ec z-index \uac00 \ub2e4\ub978 \ub9c8\ucee4\uc640 \ud568\uaed8 \uc801\uc6a9\uc744 \ubc1b\ub294\ub370,\nMapPolygonWrapper \ub294 \uc9c0\ub3c4\uc758 API \ub97c \uc774\uc6a9\ud558\ubbc0\ub85c \ub9c8\ucee4\uc758 \ub808\uc774\uc5b4\uc640\ub294 \ub2e4\ub978 \ub808\uc774\uc5b4\uc5d0 \uadf8\ub824\uc838\uc11c z-index \uac00 \ub9c8\ucee4\uc640 \ub3c5\ub9bd\uc801\uc73c\ub85c \ub3d9\uc791\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uadf8\ub798\uc11c PolygonMarker \ub97c \uc774\uc6a9\ud558\uba74 z-index \uae30\ubc18\uc758 \ubcf5\uc7a1\ud55c \ub808\uc774\uc5b4\uad6c\uc131\uc744 \ud558\uae30\uc5d0 \uc88b\uc2b5\ub2c8\ub2e4.\n\ub2e8, \ud3f4\ub9ac\uace4\uc744 \ub80c\ub354\ub9c1\ud558\ub294 \ubd80\ubd84\uae4c\uc9c0 React \ub85c \ub418\uc5b4\uc788\uae30 \ub54c\ubb38\uc5d0 React \uc758 \ub77c\uc774\ud504\uc0ac\uc774\ud074\uc5d0 \uc601\ud5a5\uc744 \ubc1b\uc2b5\ub2c8\ub2e4.\n(",(0,l.kt)("strong",{parentName:"p"},"\ucef4\ud3ec\ub10c\ud2b8\uac00 \ud574\uc81c\ub418\uace0 \ub2e4\uc2dc \uc0dd\uc131\ub418\ub294 \uacbd\uc6b0 \uae5c\ube61\uc784\uc774 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),")"),(0,l.kt)("h2",{id:"\uae30\ubcf8-\uae30\ub2a5"},"\uae30\ubcf8 \uae30\ub2a5"),(0,l.kt)("h3",{id:"position"},"position"),(0,l.kt)("p",null,"\ud3f4\ub9ac\uace4\uc758 path \uc88c\ud45c\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"innerpositions"},"innerPositions"),(0,l.kt)("p",null,"innerPositions \ub294 \ud3f4\ub9ac\uace4 \ub0b4\ubd80\uc758 punching \ub418\ub294 \uc601\uc5ed\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"path \ub97c \uc5ec\ub7ec\uac1c \uc9c0\uc815\ud558\uc5ec \uc601\uc5ed\uc744 \uc5ec\ub7ec\uac1c \uc9c0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Google \uc5d0\uc11c\ub294 innerPositions \uc88c\ud45c\uc758 \uc21c\uc11c\uac00 \ubc14\uae65\ucabd \uacbd\ub85c\ub97c \uc815\uc758\ud558\ub294 \uc88c\ud45c\uc758 \uc21c\uc11c\uc640 \ubc18\ub300\uc5ec\uc57c \ud569\ub2c8\ub2e4.\n\uc608\ub97c \ub4e4\uc5b4 \ubc14\uae65\ucabd \uacbd\ub85c \uc88c\ud45c\uc758 \uc21c\uc11c\uac00 \uc2dc\uacc4 \ubc29\ud5a5\uc774\uba74 \uc548\ucabd \uacbd\ub85c\ub294 \uc2dc\uacc4 \ubc18\ub300 \ubc29\ud5a5\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 punching \uc774 \ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("h3",{id:"visible"},"visible"),(0,l.kt)("p",null,"\uc774 \uac12\uc744 false \ub85c \uc124\uc815\ud558\uba74 \ud574\ub2f9 \ud3f4\ub9ac\uace4\uc774 \uc228\uaca8\uc9d1\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"editable"},"editable"),(0,l.kt)("p",null,"\uc774 \uac12\uc744 true \ub85c \uc124\uc815\ud558\uba74 \ub3c4\ud615\uc744 \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. (Google only)"),(0,l.kt)("h2",{id:"\ud3f4\ub9ac\uace4-\uc2a4\ud0c0\uc77c"},"\ud3f4\ub9ac\uace4 \uc2a4\ud0c0\uc77c"),(0,l.kt)("h3",{id:"linecolor"},"lineColor"),(0,l.kt)("p",null,"\uc678\uacfd\uc120\uc758 \uc0c9\uc0c1\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"linesize"},"lineSize"),(0,l.kt)("p",null,"\uc678\uacfd\uc120\uc758 \ud3ed\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"lineopacity"},"lineOpacity"),(0,l.kt)("p",null,"\uc678\uacfd\uc120\uc758 \ud22c\uba85\ub3c4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"fillcolor"},"fillColor"),(0,l.kt)("p",null,"\ud3f4\ub9ac\uace4\uc758 \ubc30\uacbd\uc0c9\uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"fillopacity"},"fillOpacity"),(0,l.kt)("p",null,"\ud3f4\ub9ac\uace4\uc758 \ubc30\uacbd \ud22c\uba85\ub3c4\ub97c \uc9c0\uc815\ud569\ub2c8\ub2e4."))}P.isMDXComponent=!0}}]);
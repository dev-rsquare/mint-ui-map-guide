"use strict";(self.webpackChunkmint_ui_map_guide=self.webpackChunkmint_ui_map_guide||[]).push([[9794],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>N});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=a.createContext({}),m=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(u.Provider,{value:e},t.children)},k="mdxType",o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),k=m(n),g=l,N=k["".concat(u,".").concat(g)]||k[g]||o[g]||r;return n?a.createElement(N,i(i({ref:e},d),{},{components:n})):a.createElement(N,i({ref:e},d))}));function N(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=g;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p[k]="string"==typeof t?t:l,i[1]=p;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2324:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=n(7462),l=(n(7294),n(3905));const r={},i="\uae30\ubcf8 \uae30\ub2a5",p={unversionedId:"guides/map-basic",id:"guides/map-basic",title:"\uae30\ubcf8 \uae30\ub2a5",description:"\uc9c0\ub3c4 \ubd88\ub7ec\uc624\uae30",source:"@site/docs/guides/map-basic.mdx",sourceDirName:"guides",slug:"/guides/map-basic",permalink:"/mint-ui-map-guide/docs/guides/map-basic",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\uc9c0\uc6d0\ud558\ub294 \uc9c0\ub3c4 \uc81c\uacf5\uc790",permalink:"/mint-ui-map-guide/docs/guides/map-support"},next:{title:"\ucd08\uae30 \uc124\uc815",permalink:"/mint-ui-map-guide/docs/guides/map-initialize"}},u={},m=[{value:"\uc9c0\ub3c4 \ubd88\ub7ec\uc624\uae30",id:"\uc9c0\ub3c4-\ubd88\ub7ec\uc624\uae30",level:2},{value:"mapType",id:"maptype",level:3},{value:"mapKey",id:"mapkey",level:3},{value:"\uc2a4\ud06c\ub9bd\ud2b8 \ub85c\ub4dc",id:"\uc2a4\ud06c\ub9bd\ud2b8-\ub85c\ub4dc",level:2},{value:"scriptModules",id:"scriptmodules",level:3},{value:"scriptParams",id:"scriptparams",level:3},{value:"\ubc18\uc751\ud615 \uc18d\uc131",id:"\ubc18\uc751\ud615-\uc18d\uc131",level:2},{value:"visible",id:"visible",level:3},{value:"center",id:"center",level:3},{value:"centerMoveWithPanning",id:"centermovewithpanning",level:3},{value:"zoomLevel",id:"zoomlevel",level:3},{value:"draggable",id:"draggable",level:3},{value:"keyboardShortcuts",id:"keyboardshortcuts",level:3},{value:"dissolveEffectWhenLoaded",id:"dissolveeffectwhenloaded",level:3},{value:"\uc90c \ub808\ubca8 \ucc38\uace0",id:"\uc90c-\ub808\ubca8-\ucc38\uace0",level:2},{value:"\uc90c\ub808\ubca8\uacfc \ucd95\ucc99 \uc815\ub9ac\ud45c",id:"\uc90c\ub808\ubca8\uacfc-\ucd95\ucc99-\uc815\ub9ac\ud45c",level:3}],d={toc:m},k="wrapper";function o(t){let{components:e,...r}=t;return(0,l.kt)(k,(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\uae30\ubcf8-\uae30\ub2a5"},"\uae30\ubcf8 \uae30\ub2a5"),(0,l.kt)("h2",{id:"\uc9c0\ub3c4-\ubd88\ub7ec\uc624\uae30"},"\uc9c0\ub3c4 \ubd88\ub7ec\uc624\uae30"),(0,l.kt)("p",null,"MintMap \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc9c0\ub3c4\ub97c \ubd88\ub7ec\uc624\uae30 \uc704\ud574\uc11c\ub294 \ub450\uac1c\uc758 \uac12\uc774 \ud544\uc218\uc785\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"maptype"},"mapType"),(0,l.kt)("p",null,"\uc9c0\ub3c4\uc758 \ud0c0\uc785\uc744 \uacb0\uc815\ud569\ub2c8\ub2e4.  \uc774 \uac12\uc774 \ubc14\ub00c\uba74 \ud574\ub2f9 \uc9c0\ub3c4\uc5d0 \ub300\ud55c \uc2a4\ud06c\ub9bd\ud2b8 \ub85c\ub4dc \ubc0f \uc9c0\ub3c4 \ub80c\ub354\ub9c1\uc774 \uc77c\uc5b4\ub098\uba70, \uc774\uc804\uc5d0 \uc0dd\uc131\ub418\uc5b4 \uc788\ub358 \uc9c0\ub3c4\ub294 \ud574\uc81c\ucc98\ub9ac\ub429\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"mapkey"},"mapKey"),(0,l.kt)("p",null,"\uc9c0\ub3c4\uc758 \ud0c0\uc785\uc5d0 \ub530\ub77c \uc778\uc99d\ud0a4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc774 \uac12\uc740 \uc9c0\ub3c4 API \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ubd88\ub7ec\uc62c\ub54c \uc0ac\uc6a9\ub418\ub294\ub370, \uc774\ubbf8 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ubd88\ub7ec\uc628 \uc801\uc774 \uc788\ub294 \uacbd\uc6b0 \ub2e4\uc2dc \ub85c\ub4dc\ub418\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4.  \uc989, \uc774\ubbf8 \ub85c\ub4dc\ub41c \uacbd\uc6b0\uc5d0\ub294 \ud0a4\ub97c \ubcc0\uacbd\ud574\ub3c4 \ubcc0\uacbd\ub41c \ud0a4\ub85c \uc801\uc6a9\uc774 \ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc2a4\ud06c\ub9bd\ud2b8-\ub85c\ub4dc"},"\uc2a4\ud06c\ub9bd\ud2b8 \ub85c\ub4dc"),(0,l.kt)("p",null,"\uc9c0\ub3c4 API \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ubd88\ub7ec\uc62c\ub54c \ucd94\uac00 \ud30c\ub77c\ubbf8\ud130\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"scriptmodules"},"scriptModules"),(0,l.kt)("p",null,"\uc9c0\ub3c4\ub9c8\ub2e4 \uc9c0\uc6d0\ud558\ub294 \uc11c\ube0c \ubaa8\ub4c8\uc744 \uc9c0\uc815\ud558\uc5ec \ubd88\ub7ec\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc544\ub798\uc758 \uacbd\uc6b0 scriptModules={","['panorama']","} \uac00 \uc801\uc6a9\ub41c \ubaa8\uc2b5\uc785\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(7338).Z,width:"1700",height:"96"})),(0,l.kt)("h3",{id:"scriptparams"},"scriptParams"),(0,l.kt)("p",null,"\uc2a4\ud06c\ub9bd\ud2b8 \ub85c\ub4dc\uc2dc\uc5d0 \uc11c\ube0c \ubaa8\ub4c8\uc744 \uc81c\uc678\ud55c \ucd94\uac00 \ud30c\ub77c\ubbf8\ud130\ub97c \uc9c0\uc815\ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.  \ub0b4\ubd80\uc801\uc73c\ub85c key=value \uc758 \ud615\ud0dc\ub85c \ucc98\ub9ac\ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"scriptParams={{aaa:111, bbb:222}}\n=> aaa=111&bbb=222\n")),(0,l.kt)("h2",{id:"\ubc18\uc751\ud615-\uc18d\uc131"},"\ubc18\uc751\ud615 \uc18d\uc131"),(0,l.kt)("p",null,"\uc77c\ubd80 \uc18d\uc131\ub4e4\uc740 \ubc18\uc751\ud615\uc73c\ub85c \ub370\uc774\ud130\uc758 \ubcc0\uacbd\uc774 \uc9c0\ub3c4\uc758 \ub80c\ub354\ub9c1\uc5d0 \ubc18\uc601\ub429\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"visible"},"visible"),(0,l.kt)("p",null,"\uc9c0\ub3c4\uc758 visible \uc124\uc815\uc73c\ub85c \uc9c0\ub3c4\ub97c \uc228\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("p",null,"\ub0b4\ubd80\uc801\uc73c\ub85c \uc228\uaca8\uc9c0\uae30\ub9cc \ud558\ub294 \uac83\uc73c\ub85c, \ub80c\ub354\ub9c1\ub41c \ub0b4\uc6a9\uc740 \uadf8\ub300\ub85c \uc720\uc9c0\ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"<MintMap visible={false}>\n")),(0,l.kt)("h3",{id:"center"},"center"),(0,l.kt)("p",null,"\uc774 \uac12\uc5d0 \uc9c0\uc815\ub41c \uc88c\ud45c\ub97c \uc911\uc2ec\uc73c\ub85c \ud558\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4.  \uc774 \uc88c\ud45c\ub97c \ubcc0\uacbd\ud558\uba74 \uc9c0\ub3c4 \uc911\uc2ec\uc774 \uc774\ub3d9\ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const [centerPosition, setCenterPosition] = useState(new Position(37.504497373023206, 127.04896282498558));\n\nuseEffect(()=>{\n  // 3\ucd08\ub4a4\uc5d0 \uc0c8\ub85c\uc6b4 \uc88c\ud45c\ub85c \uc911\uc2ec \uc774\ub3d9\n  setTimeout(()=>setCenterPosition(new Position(37.50449731, 127.04896283)), 3000)\n}, [])\n\nreturn <MintMap center={centerPosition}>\n")),(0,l.kt)("h3",{id:"centermovewithpanning"},"centerMoveWithPanning"),(0,l.kt)("p",null,"\uc774 \uac12\uc774 true \uc774\uba74 center \uc758 \ubcc0\uacbd\uc774 \uc77c\uc5b4\ub0ac\uc744\ub54c panning \ud6a8\uacfc\uc640 \ud568\uaed8 \uc774\ub3d9\ud569\ub2c8\ub2e4.  "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"panning \uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \uc9c0\ub3c4\uc758 \uacbd\uc6b0\ub294 \ud6a8\uacfc \uc5c6\uc774 \uc774\ub3d9\ub9cc \ud569\ub2c8\ub2e4. (\ud604\uc7ac naver \ub9cc \uc9c0\uc6d0\ub428)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"<MintMap centerMoveWithPanning={true}>\n")),(0,l.kt)("h3",{id:"zoomlevel"},"zoomLevel"),(0,l.kt)("p",null,"\uc9c0\ub3c4\uc758 \uc90c \ub808\ubca8\uc744 \uc124\uc815\ud569\ub2c8\ub2e4.  \uc774 \uac12\uc744 \ubcc0\uacbd\ud558\uba74 \uc9c0\ub3c4\uc758 \uc90c\ub808\ubca8\uc774 \ubcc0\uacbd\ub429\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const [zoomLevel, setZoomLevel] = useState(15);\n\nuseEffect(()=>{\n  // 3\ucd08\ub4a4\uc5d0 \uc90c\ub808\ubca8 20\uc73c\ub85c \ubcc0\uacbd\n  setTimeout(()=>setZoomLevel(20), 3000)\n}, [])\n\nreturn <MintMap zoomLevel={zoomLevel}>\n")),(0,l.kt)("h3",{id:"draggable"},"draggable"),(0,l.kt)("p",null,"\uc774 \uac12\uc774 true \uc774\uba74 \ub9c8\uc6b0\uc2a4\uc758 \ub4dc\ub798\uadf8\ub85c \uc9c0\ub3c4 \uc704\uce58\ub97c \uc6c0\uc9c1\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"keyboardshortcuts"},"keyboardShortcuts"),(0,l.kt)("p",null,"\uc774 \uac12\uc774 true \uc774\uba74 \ud0a4\ubcf4\ub4dc\uc758 \ubc29\ud5a5\ud0a4\ub85c \uc9c0\ub3c4\uc758 \uc704\uce58\ub97c \uc6c0\uc9c1\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"dissolveeffectwhenloaded"},"dissolveEffectWhenLoaded"),(0,l.kt)("p",null,"\uc9c0\ub3c4\uac00 \ub85c\ub529 \ub41c \ud6c4 \uc7a5\uba74\uc804\ud658 \ud6a8\uacfc\ub97c \uc0ac\uc6a9\ud560\uc9c0 \uc5ec\ubd80\uc785\ub2c8\ub2e4. false \ub85c \ud558\uba74 \ud574\ub2f9 \ud6a8\uacfc\uac00 \uc0ac\ub77c\uc9d1\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"\uc90c-\ub808\ubca8-\ucc38\uace0"},"\uc90c \ub808\ubca8 \ucc38\uace0"),(0,l.kt)("p",null,"MintMap \uc5d0\uc11c\ub294 \uc90c \ub808\ubca8\uc744 1 ~ 22 \uae4c\uc9c0 \uc120\ud0dd \uac00\ub2a5\ud569\ub2c8\ub2e4.\n\ud558\uc9c0\ub9cc \uc9c0\ub3c4\ub9c8\ub2e4 \uc9c0\uc6d0\ud558\ub294 \ub808\ubca8\uc5d0 \ucc28\uc774\uac00 \uc788\uc2b5\ub2c8\ub2e4.  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"google \uc9c0\ub3c4\ub294 1 ~ 22 \uae4c\uc9c0 \ubaa8\ub4e0 \ub808\ubca8\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"naver \uc9c0\ub3c4\ub294 6 ~ 21 \uae4c\uc9c0 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"kakao \uc9c0\ub3c4\ub294 6 ~ 19 \uae4c\uc9c0 \uc9c0\uc6d0\ud569\ub2c8\ub2e4.")),(0,l.kt)("p",null,"\uc90c \ub808\ubca8\uc740 \uc9c0\ub3c4\ub9c8\ub2e4 \uace0\uc720\uc758 \uac12\uc744 \uac00\uc9d1\ub2c8\ub2e4.\n\uc608\ub97c\ub4e4\uc5b4 500m \uc815\ub3c4\uc758 \ucd95\ucc99\uc740 google \uc5d0\uc11c\ub294 13 \uc774\uc9c0\ub9cc kakao \uc5d0\uc11c\ub294 7 \uc785\ub2c8\ub2e4.\n\uc774\uac83\uc744 MintMap \ub0b4\ubd80\uc5d0\uc11c \ud1b5\uc77c\ud558\uc5ec \uc790\ub3d9 \ub9e4\ud551\ud574\uc8fc\uae30\ub54c\ubb38\uc5d0 \uc0ac\uc6a9\uc790\ub294 1 ~ 22 \uc758 \ub3d9\uc77c\ud55c \uac12\uc744 \uc0ac\uc6a9\ud558\uba74 \ub429\ub2c8\ub2e4."),(0,l.kt)("p",null,"\uc544\ub798\ub294 \uc9c0\ub3c4\ubcc4 \uc90c\ub808\ubca8\uacfc \ucd95\ucc99\uc744 \ud45c\ub85c \uc815\ub9ac\ud55c \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("h3",{id:"\uc90c\ub808\ubca8\uacfc-\ucd95\ucc99-\uc815\ub9ac\ud45c"},"\uc90c\ub808\ubca8\uacfc \ucd95\ucc99 \uc815\ub9ac\ud45c"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"MintMap"),(0,l.kt)("th",{parentName:"tr",align:null},"google"),(0,l.kt)("th",{parentName:"tr",align:null},"naver"),(0,l.kt)("th",{parentName:"tr",align:null},"kakao"),(0,l.kt)("th",{parentName:"tr",align:null},"\ucd95\ucc99 (\ucc38\uace0\uce58)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"6000 km")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"2000 km")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"1000 km")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"500 km")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"200 km")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"100 km")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"50 km")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"20 km")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"10 km")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"5 km")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"2 km")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"1 km")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"500 m")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"300 m")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"100 m")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"50 m")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"17"),(0,l.kt)("td",{parentName:"tr",align:null},"17"),(0,l.kt)("td",{parentName:"tr",align:null},"17"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"25 m")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"18"),(0,l.kt)("td",{parentName:"tr",align:null},"18"),(0,l.kt)("td",{parentName:"tr",align:null},"18"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"20 m")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"19"),(0,l.kt)("td",{parentName:"tr",align:null},"19"),(0,l.kt)("td",{parentName:"tr",align:null},"19"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"10 m")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"5 m")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"21"),(0,l.kt)("td",{parentName:"tr",align:null},"21"),(0,l.kt)("td",{parentName:"tr",align:null},"21"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"3 m")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"22"),(0,l.kt)("td",{parentName:"tr",align:null},"22"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"1 m")))))}o.isMDXComponent=!0},7338:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/\ub124\uc774\ubc84_\uc2a4\ud06c\ub9bd\ud2b8_\uc11c\ube0c\ubaa8\ub4c8-56138fd5b15c7f2012d59a5fca7c17fc.png"}}]);
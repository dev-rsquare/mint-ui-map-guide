"use strict";(self.webpackChunkmint_ui_map_guide=self.webpackChunkmint_ui_map_guide||[]).push([[4518],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,k=m["".concat(c,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2435:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const l={},a="\ub9c8\ucee4 \uce90\uc2f1",i={unversionedId:"guides/map-cache",id:"guides/map-cache",title:"\ub9c8\ucee4 \uce90\uc2f1",description:"\uc9c0\ub3c4\uc5d0\uc11c \ub9c8\ucee4\ub294 \uc0c1\ub2f9\ud788 \ubb34\uac70\uc6b4 \uac1d\uccb4\uc785\ub2c8\ub2e4.",source:"@site/docs/guides/map-cache.mdx",sourceDirName:"guides",slug:"/guides/map-cache",permalink:"/mint-ui-map-guide/docs/guides/map-cache",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\uc774\ubca4\ud2b8",permalink:"/mint-ui-map-guide/docs/guides/map-event"},next:{title:"Bounds \ubcc0\uacbd \uc4f0\ub85c\ud2c0\ub9c1",permalink:"/mint-ui-map-guide/docs/guides/map-throttling"}},c={},u=[{value:"\uce90\uc2f1 \uc635\uc158",id:"\uce90\uc2f1-\uc635\uc158",level:2},{value:"markerCache",id:"markercache",level:3},{value:"markerCachePoolSize",id:"markercachepoolsize",level:3},{value:"\uce90\uc2f1 \ucc38\uace0",id:"\uce90\uc2f1-\ucc38\uace0",level:2},{value:"\ub9c8\ucee4 Pool \uc0ac\uc774\uc988 \uacb0\uc815",id:"\ub9c8\ucee4-pool-\uc0ac\uc774\uc988-\uacb0\uc815",level:3},{value:"\ub9c8\ucee4 Pool \uc758 \ud574\uc81c",id:"\ub9c8\ucee4-pool-\uc758-\ud574\uc81c",level:3},{value:"\ub9c8\ucee4 \uce90\uc2f1\uc758 \ub300\uc548",id:"\ub9c8\ucee4-\uce90\uc2f1\uc758-\ub300\uc548",level:3}],p={toc:u},m="wrapper";function s(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ub9c8\ucee4-\uce90\uc2f1"},"\ub9c8\ucee4 \uce90\uc2f1"),(0,o.kt)("p",null,"\uc9c0\ub3c4\uc5d0\uc11c \ub9c8\ucee4\ub294 \uc0c1\ub2f9\ud788 \ubb34\uac70\uc6b4 \uac1d\uccb4\uc785\ub2c8\ub2e4.\nReact \uc758 \ucef4\ud3ec\ub10c\ud2b8\uc640 \uc5f0\uacb0\ub418\uc5b4 \uc788\ub294 \ub9c8\ucee4\uac1d\uccb4\ub294 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc0dd\uc131\ub420\ub54c \ub9cc\ub4e4\uc5b4\uc9c0\uace0 \ud574\uc81c\ub420\ub54c \uac19\uc774 \ud574\uc81c\ub429\ub2c8\ub2e4.\n\uc774\ub294 \uc0c1\ub2f9\ud788 \uc790\uc5f0\uc2a4\ub7ec\uc6b4\uac83 \ucc98\ub7fc \ubcf4\uc774\uc9c0\ub9cc \uc2e4\uc81c\ub85c \ub9c8\ucee4 \uac1d\uccb4 \uc790\uccb4\ub294 \ud2b9\uc815 \ub514\uc790\uc778\uc774\ub098 \uae30\ub2a5\uc744 \uac00\uc9c0\uace0 \uc788\uc9c0 \uc54a\uc73c\ubbc0\ub85c\n\ubc18\ub4dc\uc2dc \ud574\uc81c\ub420 \ud544\uc694\ub294 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub9c8\ucee4 \uac1d\uccb4\uc758 \uc0dd\uc131/\ud574\uc81c\uc5d0\ub294 \uc9c0\ub3c4 \uc885\ub958\uc5d0 \ub530\ub77c\uc11c \ucc28\uc774\uac00 \uc788\uc9c0\ub9cc \uaf64 \ub9ce\uc740 \uc2dc\uac04\uc774 \uac78\ub9bd\ub2c8\ub2e4.\n\ubcf4\ud1b5 \ub9c8\ucee4 \uac1d\uccb4\ub294 \uc5ec\ub7ec \ubaa9\uc801\uc73c\ub85c \uc9c0\ub3c4\uc704\uc5d0 \ub2e4\uc218\uac00 \ubfcc\ub824\uc9c0\uace0, \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc774 \uc774\ub3d9\ub418\uba74 \ub2e4\uc2dc \uc704\uce58\ub97c \uac31\uc2e0\ud558\ub294 \uc2dd\uc758 \uc0ac\uc6a9\uc744 \ub9ce\uc774 \ud558\ub294\ub370,\n\ub9c8\ucee4 \ud55c\uac1c\ub9cc \ub193\uace0 \ubcf4\uba74 \uc791\uc740 \uc2dc\uac04\uc77c\uc9c0\ub77c\ub3c4 \ubaa8\uc544\ub193\uace0 \ubcf4\uba74 \uc720\uc800\uc758 \uacbd\ud5d8\uc744 \ubc29\ud574\ud560 \uc218 \uc788\uc744 \uc815\ub3c4\uc758 \uc9c0\uc5f0\uc744 \uc720\ubc1c\ud560 \uac00\ub2a5\uc131\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ub124\uc774\ubc84 \uc9c0\ub3c4 \uac19\uc740 \uacbd\uc6b0\ub294 \ub9c8\ucee4 \ud55c\uac1c\ub97c \ud574\uc81c\ud560\ub54c \ub300\ub7b5 1ms \uc815\ub3c4\uc758 \uc2dc\uac04\uc774 \uc18c\uc694\ub429\ub2c8\ub2e4. \ub9cc\uc57d \uc9c0\ub3c4\uc5d0 \ub9c8\ucee4\uac00 500\uac1c \uc788\ub294 \uc0c1\ud0dc\uc5d0\uc11c \ub2e4\ub978 \uc704\uce58\ub85c \uc774\ub3d9\ud558\uba74\n\uc774\ub3d9\ud560\ub54c\ub9c8\ub2e4 500ms \uc758 \ub04a\uae40\uc774 \ubc1c\uc0dd \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("h2",{id:"\uce90\uc2f1-\uc635\uc158"},"\uce90\uc2f1 \uc635\uc158"),(0,o.kt)("p",null,"MintMap \uc5d0\uc11c\ub294 \uc704\uc640 \uac19\uc740 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ub9c8\ucee4 \uce90\uc2f1 \uae30\ub2a5\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4.\nReact \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ud574\uc81c\ub418\ub294 \ub9c8\ucee4\uac1d\uccb4\ub97c \uc2e4\uc81c\ub85c \ud574\uc81c \ud558\uc9c0 \uc54a\uace0 Pool \uc5d0 \ubc18\ud658\ud588\ub2e4\uac00 \uc0c8\ub85c\uc6b4 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \ub9c8\ucee4 \uc0dd\uc131 \uc694\uccad\uc2dc\uc5d0 Pool \uc5d0\uc11c \uaebc\ub0b4\uc4f0\ub294 \ubc29\uc2dd\uc785\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ucd08\uae30 \ub9c8\ucee4 Pool \uc0dd\uc131 \uac2f\uc218\uc640 \ud568\uaed8 \uc801\uc808\ud788 \uc0ac\uc6a9\ud558\uba74 \ub9ce\uc740 \uc591\uc758 \ub9c8\ucee4 \uc0dd\uc131/\ud574\uc81c\uc5d0\ub3c4 \uc880 \ub354 \ub098\uc740 \uacbd\ud5d8\uc744 \uac00\uc838\uac08 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ub2e4\uc74c\uc740 \ub9c8\ucee4 \uce90\uc2f1 \uad00\ub828 MintMap \uc758 \uc635\uc158\uc785\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"<MintMap markerCache={true} markerCachePoolSize={500}>\n")),(0,o.kt)("h3",{id:"markercache"},"markerCache"),(0,o.kt)("p",null,"\ub9c8\ucee4 \uce90\uc2dc\ub97c \uc0ac\uc6a9\ud560\uc9c0 \uc5ec\ubd80\uc785\ub2c8\ub2e4.  \uc774 \uac12\uc744 true \ub85c \uc8fc\uba74 \uc9c0\ub3c4 \uc0dd\uc131\uc2dc\uc5d0 \ub9c8\ucee4 \uac1d\uccb4\ub97c Pool \uc5d0 \ubbf8\ub9ac \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"markercachepoolsize"},"markerCachePoolSize"),(0,o.kt)("p",null,"\ub9c8\ucee4 \uce90\uc2dc\uc758 \ucd08\uae30 Pool \uc0ac\uc774\uc988\uc785\ub2c8\ub2e4. \uc9c0\uc815\ud55c \ud06c\uae30\ub9cc\ud07c Pool \uc5d0 \ubbf8\ub9ac \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\uc9c0\uc815\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0 \ucd08\uae30\uac12\uc740 1000 \uc785\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"\uce90\uc2f1-\ucc38\uace0"},"\uce90\uc2f1 \ucc38\uace0"),(0,o.kt)("p",null,"\ucd08\uae30 Pool \uc0ac\uc774\uc988\ub97c \uacb0\uc815\ud560\ub54c\ub294 \uba87\uac00\uc9c0 \uc0ac\ud56d\uc5d0 \uc720\uc758\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"\ub9c8\ucee4-pool-\uc0ac\uc774\uc988-\uacb0\uc815"},"\ub9c8\ucee4 Pool \uc0ac\uc774\uc988 \uacb0\uc815"),(0,o.kt)("p",null,"\ud55c\ubc88\uc5d0 \ub108\ubb34 \ub9ce\uc740 \uc218\uc758 \ub9c8\ucee4 Pool \uc744 \uc0dd\uc131\ud558\uba74 \uc624\ud788\ub824 \uc9c0\ub3c4 \ucd08\uae30\ud654\uc2dc\uc5d0 \ub04a\uae40\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc801\uc808\ud55c \uc218\ub97c \ucc3e\uae30 \uc704\ud574\uc11c\ub294 \uc9c0\ub3c4 \ucd08\uae30\ud654\uc2dc\uc758 \uc131\ub2a5\uacfc \uc9c0\ub3c4\uc5d0 \ud45c\ud604\ub420 \uc218 \uc788\ub294 \ucd5c\ub300 \ub9c8\ucee4 \uac2f\uc218 \ub4f1\uc744 \uace0\ub824\ud574\uc11c \uacb0\uc815\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ud55c\uac00\uc9c0 \uc8fc\uc758\ud560 \uc810\uc740, \ub9cc\uc57d \uc9c0\ub3c4\uc5d0 \ud45c\ud604\ub418\ub294 \ub9c8\ucee4\uc758 \uac2f\uc218\uac00 \ub300\ub7b5 500\uc5ec\uac1c \uc815\ub3c4\ub77c\uba74 Pool \uc0ac\uc774\uc988\ub97c 500\uac1c\ub85c \uc9c0\uc815\ud558\uba74 \ub420 \uac83 \uac19\uc9c0\ub9cc\n\ud14c\uc2a4\ud2b8\ub97c \ud574\ubcf4\uba74 Pool \uc5d0 \ubc18\ud658\ud558\ub294 \ud0c0\uc774\ubc0d\ubcf4\ub2e4 \uc0c8\ub85c\uc6b4 \ub9c8\ucee4\ub97c \uc0dd\uc131\ud558\ub294 \ud0c0\uc774\ubc0d\uc774 \ub354 \ube60\ub974\uac8c \uc77c\uc5b4\ub098\ubbc0\ub85c \ub9c8\ucee4 Pool \uc5d0\ub294 \uac00\uc838\uac08 \ub9c8\ucee4 \uac1d\uccb4\uac00 \ub0a8\uc544\uc788\uc9c0 \uc54a\uc740 \uc0c1\ud0dc\uc785\ub2c8\ub2e4."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ub9c8\ucee4 Pool \uc5d0 \ub354 \uac00\uc838\uac08 \uac1d\uccb4\uac00 \ub0a8\uc544\uc788\uc9c0 \uc54a\uc73c\uba74 \uc0c8\ub85c\uc6b4 \ub9c8\ucee4\uac1d\uccb4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. \uc774\ub85c\uc778\ud574 Pool \uc0ac\uc774\uc988\uac00 \uc810\uc810 \ucee4\uc9c0\uac8c \ub429\ub2c8\ub2e4.")),(0,o.kt)("h3",{id:"\ub9c8\ucee4-pool-\uc758-\ud574\uc81c"},"\ub9c8\ucee4 Pool \uc758 \ud574\uc81c"),(0,o.kt)("p",null,"\uc9c0\ub3c4\uac00 \ucef4\ud3ec\ub10c\ud2b8\ub85c \ubd80\ud130 \ud574\uc81c\ub418\uba74 Pool \ub3c4 \ud574\uc81c \ub429\ub2c8\ub2e4.  \uc774\ub54c \ud55c\uaebc\ubc88\uc5d0 \ubaa8\ub4e0 Pool \ub0b4\uc758 \ub9c8\ucee4\uac00 \ud574\uc81c\ub418\uba74\uc11c \uc9c0\uc5f0\uc2dc\uac04\uc774 \ubc1c\uc0dd \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("h3",{id:"\ub9c8\ucee4-\uce90\uc2f1\uc758-\ub300\uc548"},"\ub9c8\ucee4 \uce90\uc2f1\uc758 \ub300\uc548"),(0,o.kt)("p",null,"\ucd5c\uc801\uc758 \uc131\ub2a5\uc744 \uc704\ud574\uc11c\ub294 \uce94\ubc84\uc2a4 \ub9c8\ucee4\uac00 \ub354 \ub098\uc740 \ub300\uc548\uc774 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,o.kt)("p",null,"\ub9c8\ucee4\ub97c \uc0ac\uc6a9\ud558\ub294 \uc774\uc720\ub294 \uadf8 \ub9c8\ucee4\uc5d0 \ub9c8\uc6b0\uc2a4 \ud074\ub9ad\uc774\ub098 \uc624\ubc84\uc2dc\uc5d0 \uc0ac\uc6a9\uc790\uc640\uc758 \uc0c1\ud638\uc791\uc6a9\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\ub294 \uacbd\uc6b0\uac00 \ub300\ubd80\ubd84\uc785\ub2c8\ub2e4.\n\ub9cc\uc57d \uc774\ub7ec\ud55c \uc0c1\ud638\uc791\uc6a9\uc774 \uc5c6\uac70\ub098 \ubcf5\uc7a1\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0\uc5d0\ub294 \uce94\ubc84\uc2a4 \ub9c8\ucee4\ub97c \uc0ac\uc6a9\ud558\ub294\uac83\uc774 \ub354 \uc88b\uc2b5\ub2c8\ub2e4."))}s.isMDXComponent=!0}}]);
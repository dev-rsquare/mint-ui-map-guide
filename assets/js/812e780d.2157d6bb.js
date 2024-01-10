"use strict";(self.webpackChunkmint_ui_map_guide=self.webpackChunkmint_ui_map_guide||[]).push([[4084],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),o=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=o(r),g=a,m=s["".concat(u,".").concat(g)]||s[g]||d[g]||i;return r?n.createElement(m,p(p({ref:t},c),{},{components:r})):n.createElement(m,p({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:a,p[1]=l;for(var o=2;o<i;o++)p[o]=r[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5795:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=r(7462),a=(r(7294),r(3905));const i={},p="\ub514\ubc84\uadf8 \ubaa8\ub4dc",l={unversionedId:"guides/map-debug",id:"guides/map-debug",title:"\ub514\ubc84\uadf8 \ubaa8\ub4dc",description:"\ub9c8\ucee4\uc758 \uc0dd\uc131/\ud574\uc81c \ub4f1\uc744 \ucd94\uc801\ud560 \uc218 \uc788\uac8c \ud558\ub294 \ubaa8\ub4dc\uc785\ub2c8\ub2e4.",source:"@site/docs/guides/map-debug.mdx",sourceDirName:"guides",slug:"/guides/map-debug",permalink:"/mint-ui-map-guide/docs/guides/map-debug",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ucee4\uc2a4\ud140 \ub85c\ub529 \ucef4\ud3ec\ub10c\ud2b8",permalink:"/mint-ui-map-guide/docs/guides/map-loading-component"},next:{title:"\uae30\ubcf8 \ub9c8\ucee4",permalink:"/mint-ui-map-guide/docs/guides/marker-basic"}},u={},o=[{value:"\ub514\ubc84\uadf8 \ud65c\uc131\ud654",id:"\ub514\ubc84\uadf8-\ud65c\uc131\ud654",level:2},{value:"debug",id:"debug",level:3},{value:"debugLabel",id:"debuglabel",level:3},{value:"MintMapController.printStatus",id:"mintmapcontrollerprintstatus",level:3}],c={toc:o},s="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(s,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ub514\ubc84\uadf8-\ubaa8\ub4dc"},"\ub514\ubc84\uadf8 \ubaa8\ub4dc"),(0,a.kt)("p",null,"\ub9c8\ucee4\uc758 \uc0dd\uc131/\ud574\uc81c \ub4f1\uc744 \ucd94\uc801\ud560 \uc218 \uc788\uac8c \ud558\ub294 \ubaa8\ub4dc\uc785\ub2c8\ub2e4.\n\uc774 \uc635\uc158\uc744 \ud65c\uc131\ud654\uc2dc\ucf1c\uba74 console.log \uc5d0 \ud574\ub2f9 \uc815\ubcf4\uac00 \ucc0d\ud799\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6170).Z,width:"838",height:"430"})),(0,a.kt)("h2",{id:"\ub514\ubc84\uadf8-\ud65c\uc131\ud654"},"\ub514\ubc84\uadf8 \ud65c\uc131\ud654"),(0,a.kt)("p",null,"\uba87\uac00\uc9c0 \uc635\uc158\uc744 \ud1b5\ud574 \ud65c\uc131\ud654\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"debug"},"debug"),(0,a.kt)("p",null,"MintMap \uc5d0 \uc9c0\uc815\ud558\ub294 \uacbd\uc6b0, \ud558\uc704\uc758 \ubaa8\ub4e0 \ub9c8\ucee4\uc758 \ub514\ubc84\uadf8\uac00 \ud65c\uc131\ud654\ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"<MintMap debug={true}>\n")),(0,a.kt)("p",null,"MapMarkerWrapper \uc5d0 \uc9c1\uc811 \uc9c0\uc815\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4. \uc774 \uacbd\uc6b0\uc5d0\ub294 \ud574\ub2f9 \ub9c8\ucee4\ub9cc \ub514\ubc84\uadf8\uac00 \ud65c\uc131\ud654\ub429\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"<MintMap>\n\n  <MapMarkerWrapper debug={true}>\n    <SalesSimpleMarker />\n  </MapMarkerWrapper>\n\n</MintMap>\n")),(0,a.kt)("h3",{id:"debuglabel"},"debugLabel"),(0,a.kt)("p",null,"\ud574\ub2f9 \ub9c8\ucee4\uc758 debug \uc5d0 \uac19\uc774 \ud45c\uae30\ub418\ub294 label \uc744 \uc9c0\uc815\ud569\ub2c8\ub2e4.  \uc774\uac83\uc744 \uc774\uc6a9\ud558\uba74 \ud2b9\uc815 \ub9c8\ucee4\ub9cc \uad6c\ubcc4\ud574\uc11c \ubcf4\uae30 \uc88b\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'<MintMap debug={true}>\n\n  <MapMarkerWrapper debugLabel="\ubbf8\ub2c8\ub9e4\ubb3c\ub9c8\ucee4">\n    <SalesSimpleMarker />\n  </MapMarkerWrapper>\n\n</MintMap>\n')),(0,a.kt)("h3",{id:"mintmapcontrollerprintstatus"},"MintMapController.printStatus"),(0,a.kt)("p",null,"\ud604\uc7ac \uc0dd\uc131\ub418\uc5b4 \uc788\ub294 \ub9c8\ucee4\uc758 \ub514\ubc84\uadf8 \uc815\ubcf4\ub97c console \uc5d0 \ucd9c\ub825\ud569\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"MintMapController.printStatus();\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(2927).Z,width:"1136",height:"196"})))}d.isMDXComponent=!0},6170:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/debug_console-4a1f6612dc1d65573eac628fc07d3451.png"},2927:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/debug_print_status-3ced46d2ea852ca3c758f20272d48072.png"}}]);
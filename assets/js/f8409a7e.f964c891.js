"use strict";(self.webpackChunkmint_ui_map_guide=self.webpackChunkmint_ui_map_guide||[]).push([[3206],{452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>u,metadata:()=>d,toc:()=>k});var a=n(7462),r=n(7294),i=n(3905),o=n(9788);const l=new Map([["google","AIzaSyBgPrwr9buZ0EjOxFumRyXyqrkVtEZEtkk"],["naver","yc2mrw1mz8"]]);const p=function(e){let{mapKey:t,mapType:n="google",base:i={center:new o.Position(-25.344,131.031),zoomLevel:12},h:p="500px",children:m,...u}=e;const[s,d]=(0,r.useState)(n);return(0,r.useEffect)((()=>{d(n)}),[n]),r.createElement("div",{style:{height:p,display:"flex",flexDirection:"column",marginBottom:"25px"}},r.createElement("div",{style:{flex:"0 0 50px",display:"flex",justifyContent:"flex-end",alignItems:"center"}},r.createElement("select",{value:s,onChange:e=>{d(e.target.value)}},r.createElement("option",{value:"google"},"Google"),r.createElement("option",{value:"naver"},"Naver"))),r.createElement("div",{style:{flex:"1 1 auto"}},r.createElement(o.MintMap,(0,a.Z)({mapKey:t||l.get(s),mapType:s,base:i},u),m)))};function m(){return r.createElement(p,{base:{center:new o.Position(37.504497373023206,127.04896282498558),zoomLevel:16}},r.createElement(o.MapMarkerWrapper,{position:new o.Position(37.504497373023206,127.04896282498558)},r.createElement("div",{style:{width:"10px",height:"10px",background:"red",borderRadius:"10px"}})))}const u={sidebar_position:1},s="\uc2dc\uc791\ud558\uae30",d={unversionedId:"intro",id:"intro",title:"\uc2dc\uc791\ud558\uae30",description:"\uc694\uad6c\uc0ac\ud56d",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/mint-ui-map-guide/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\uae30\ubcf8 \ucef4\ud3ec\ub10c\ud2b8 \uad6c\uc870",permalink:"/mint-ui-map-guide/docs/guides/component-basic"}},c={},k=[{value:"\uc694\uad6c\uc0ac\ud56d",id:"\uc694\uad6c\uc0ac\ud56d",level:2},{value:"\ud14c\uc2a4\ud2b8",id:"\ud14c\uc2a4\ud2b8",level:3},{value:"\ud14c\uc2a4\ud2b82222",id:"\ud14c\uc2a4\ud2b82222",level:4},{value:"\ud14c\uc2a4\ud2b83333",id:"\ud14c\uc2a4\ud2b83333",level:5},{value:"\uc124\uce58",id:"\uc124\uce58",level:2},{value:"\uc9c0\ub3c4\uc640 \ub9c8\ucee4 \uc0dd\uc131 \uc608\uc81c",id:"\uc9c0\ub3c4\uc640-\ub9c8\ucee4-\uc0dd\uc131-\uc608\uc81c",level:2}],M={toc:k},g="wrapper";function v(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,a.Z)({},M,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\uc2dc\uc791\ud558\uae30"},"\uc2dc\uc791\ud558\uae30"),(0,i.kt)("h2",{id:"\uc694\uad6c\uc0ac\ud56d"},"\uc694\uad6c\uc0ac\ud56d"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"React 16 \ubc84\uc804 \uc774\uc0c1",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"subItem",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"sub-subItem"))))),(0,i.kt)("li",{parentName:"ul"},"Item 2")),(0,i.kt)("h3",{id:"\ud14c\uc2a4\ud2b8"},"\ud14c\uc2a4\ud2b8"),(0,i.kt)("p",null,"\ud14c\uc2a4\ud2b8"),(0,i.kt)("h4",{id:"\ud14c\uc2a4\ud2b82222"},"\ud14c\uc2a4\ud2b82222"),(0,i.kt)("h5",{id:"\ud14c\uc2a4\ud2b83333"},"\ud14c\uc2a4\ud2b83333"),(0,i.kt)("h2",{id:"\uc124\uce58"},"\uc124\uce58"),(0,i.kt)("p",null,"\ub77c\uc774\ube0c\ub7ec\ub9ac \uc124\uce58"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @mint-ui/map\n")),(0,i.kt)("h2",{id:"\uc9c0\ub3c4\uc640-\ub9c8\ucee4-\uc0dd\uc131-\uc608\uc81c"},"\uc9c0\ub3c4\uc640 \ub9c8\ucee4 \uc0dd\uc131 \uc608\uc81c"),(0,i.kt)("p",null,"MintMap \ucef4\ud3ec\ub10c\ud2b8 \ud558\uc704\uc5d0 \ub9c8\ucee4 \ucef4\ud3ec\ub10c\ud2b8 (MapMarkerWrapper) \ub97c \ubc30\uce58\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\ub9c8\ucee4 \ucef4\ud3ec\ub10c\ud2b8 \ud558\uc704\uc5d0 \uc2e4\uc81c \uc9c0\ub3c4\uc5d0 \ub9c8\ucee4\ub85c \ub098\ud0c0\ub0bc Element \ub97c \ubc30\uce58\ud569\ub2c8\ub2e4."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"...\n...\nimport { MapMarkerWrapper, MintMap, Position } from '@mint-ui/map'\n\nconst root = ReactDOM.createRoot(\n  document.getElementById('root')\n)\n\nexport function MyMapComponent(){\n\n  return <MintMap \n    mapType={'google'} \n    mapKey={'YOUR_GOOGLE_MAP_KEY'}\n    mapId='YOUR_GOOGLE_MAP_ID' //Optional: For advanced marker in Google Maps\n    base={{center:new Position(37.504497373023206, 127.04896282498558), zoomLevel:12}}\n  >\n    {/* Your marker */}\n    <MapMarkerWrapper position={new Position(37.504497373023206, 127.04896282498558)}>\n    \n      {/* Your marker elements */}\n      <div style={{width:'10px', height:'10px', background:'red', borderRadius:'10px'}}></div>\n      \n    </MapMarkerWrapper>\n\n  </MintMap>\n\n}\n\nroot.render((<MyMapComponent/>))\n")),(0,i.kt)(m,{mdxType:"SampleMap"}),(0,i.kt)("p",null,"mapType \uc758 \ubcc0\uacbd\ub9cc\uc73c\ub85c \uc9c0\ub3c4\uc758 \uc885\ub958\ub97c \ubc14\uafc0 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}v.isMDXComponent=!0}}]);
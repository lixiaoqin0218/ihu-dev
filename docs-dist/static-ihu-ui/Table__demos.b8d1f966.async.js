"use strict";(self.webpackChunk_baidu_ihud=self.webpackChunk_baidu_ihud||[]).push([[1561],{86412:function(p,u,n){n.r(u);var c=n(42075),o=n(28459),a=n(17926),s=n(67294),t=n(89183),e=n(85893);u.default=function(){var i=[{title:"Name",dataIndex:"name",key:"name",render:function(_){return(0,e.jsx)("a",{children:_})}},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Action",key:"action",render:function(_,v){return(0,e.jsxs)(c.Z,{size:"middle",children:[(0,e.jsxs)("a",{children:["Invite ",v.name]}),(0,e.jsx)("a",{children:"Delete"})]})}}],r=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sydney No. 1 Lake Park"}];return(0,e.jsx)(o.ZP,{theme:t.commonToken.theme,children:(0,e.jsx)(a.Z,{columns:i,dataSource:r})})}},49867:function(p,u,n){n.d(u,{N:function(){return c}});const c=o=>({color:o.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:`color ${o.motionDurationSlow}`,"&:focus, &:hover":{color:o.colorLinkHover},"&:active":{color:o.colorLinkActive}})},79370:function(p,u,n){n.d(u,{G:function(){return s}});var c=n(98924),o=function(e){if((0,c.Z)()&&window.document.documentElement){var i=Array.isArray(e)?e:[e],r=window.document.documentElement;return i.some(function(d){return d in r.style})}return!1},a=function(e,i){if(!o(e))return!1;var r=document.createElement("div"),d=r.style[e];return r.style[e]=i,r.style[e]!==d};function s(t,e){return!Array.isArray(t)&&e!==void 0?a(t,e):o(t)}},27856:function(p,u,n){n.d(u,{D:function(){return o}});function c(a,s,t){var e=t||{},i=e.noTrailing,r=i===void 0?!1:i,d=e.noLeading,_=d===void 0?!1:d,v=e.debounceMode,m=v===void 0?void 0:v,f,P=!1,h=0;function L(){f&&clearTimeout(f)}function k(E){var D=E||{},l=D.upcomingOnly,M=l===void 0?!1:l;L(),P=!M}function O(){for(var E=arguments.length,D=new Array(E),l=0;l<E;l++)D[l]=arguments[l];var M=this,A=Date.now()-h;if(P)return;function g(){h=Date.now(),s.apply(M,D)}function T(){f=void 0}!_&&m&&!f&&g(),L(),m===void 0&&A>a?_?(h=Date.now(),r||(f=setTimeout(m?T:g,a))):g():r!==!0&&(f=setTimeout(m?T:g,m===void 0?a-A:a))}return O.cancel=k,O}function o(a,s,t){var e=t||{},i=e.atBegin,r=i===void 0?!1:i;return c(a,s,{debounceMode:r!==!1})}}}]);
"use strict";(self.webpackChunk_baidu_ihud=self.webpackChunk_baidu_ihud||[]).push([[6885],{54790:function(V,f,e){e.r(f);var a=e(15009),v=e.n(a),I=e(99289),g=e.n(I),b=e(89847),j=e(84567),R=e(34041),T=e(14726),h=e(67294),L=e(89183),i=e(85893),P=b.Z.TextArea,U=j.Z.Group;f.default=function(){var r=(0,h.useRef)(),A={input:b.Z,select:R.default,textArea:P,checkbox:U,submit:T.ZP},O=function(){var c=g()(v()().mark(function D(){var p,u,M;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return p=r==null?void 0:r.current,u=p.getFieldsValue,M=p.validateFields,n.next=3,M();case 3:console.log(u());case 4:case"end":return n.stop()}},D)}));return function(){return c.apply(this,arguments)}}(),E=[{display:"Username",type:"input",macro:"username",props:{required:!0,requiredMessage:"Please input your username!"}},{display:"Password",type:"input",macro:"password",props:{required:!0,requiredMessage:"Please input your password!"}},{type:"checkbox",macro:"remember",props:{formItemLayout:{wrapperCol:{offset:6,span:18}},options:[{label:"Remember me",value:"1"}]}},{type:"submit",props:{display:"submit",type:"primary",onClick:function(){O()},formItemLayout:{wrapperCol:{offset:6,span:18}}}}],C={username:"",password:"",remember:"1"},m={labelCol:{span:6},wrapperCol:{span:18}};return(0,i.jsx)("div",{children:(0,i.jsx)(L.AutoForm,{formItemLayout:m,schema:E,model:C,customMapper:A,cRef:r})})}},28038:function(V,f,e){e.r(f);var a=e(15009),v=e.n(a),I=e(99289),g=e.n(I),b=e(89847),j=e(84567),R=e(34041),T=e(14726),h=e(67294),L=e(89183),i=e(85893),P=b.Z.TextArea,U=j.Z.Group;f.default=function(){var r=(0,h.useRef)(),A={input:b.Z,select:R.default,textArea:P,checkbox:U,submit:T.ZP},O=function(){var c=g()(v()().mark(function D(){var p,u,M;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return p=r==null?void 0:r.current,u=p.getFieldsValue,M=p.validateFields,n.next=3,M();case 3:console.log(u());case 4:case"end":return n.stop()}},D)}));return function(){return c.apply(this,arguments)}}(),E=[{display:"Note",type:"input",macro:"note",props:{required:!0}},{display:"Gender",type:"select",macro:"gender",props:{required:!0,allowClear:!0,placeholder:"Select a option and change input text above",options:[{label:"male",value:"male"},{label:"female",value:"female"},{label:"other",value:"other"}]}},{display:"Customize Gender",type:"input",macro:"customizeGender",props:{visibleOn:'data.gender === "other"',required:!0}},{type:"submit",props:{display:"submit",type:"primary",onClick:function(){O()},formItemLayout:{wrapperCol:{offset:6,span:18}}}}],C={note:"",gender:void 0,customizeGender:""},m={labelCol:{span:6},wrapperCol:{span:18}};return(0,i.jsx)("div",{children:(0,i.jsx)(L.AutoForm,{formItemLayout:m,schema:E,model:C,customMapper:A,cRef:r})})}},70492:function(V,f,e){e.r(f);var a=e(15009),v=e.n(a),I=e(99289),g=e.n(I),b=e(89847),j=e(14726),R=e(67294),T=e(89183),h=e(85893),L=function(P){return(0,h.jsx)("span",{children:P.value})};f.default=function(){var i=(0,R.useRef)(),P={text:L,input:b.Z,submit:j.ZP},U=function(){var E=g()(v()().mark(function C(){var m,c,D;return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return m=i==null?void 0:i.current,c=m.getFieldsValue,D=m.validateFields,u.next=3,D();case 3:console.log(c());case 4:case"end":return u.stop()}},C)}));return function(){return E.apply(this,arguments)}}(),r=[{type:"text",macro:"firstTitle",props:{}},{display:"Note",type:"input",macro:"firstNote",props:{required:!0}},{type:"text",macro:"secondTitle",props:{}},{display:"Note",type:"input",macro:"secondNote",props:{required:!0}},{type:"submit",props:{display:"submit",type:"primary",onClick:function(){U()},formItemLayout:{wrapperCol:{offset:6,span:18}}}}],A={firstTitle:"firstTitle:",secondTitle:"secondTitle:",firstNote:"",secondNote:""},O={labelCol:{span:6},wrapperCol:{span:18}};return(0,h.jsx)("div",{children:(0,h.jsx)(T.AutoForm,{formItemLayout:O,schema:r,model:A,customMapper:P,cRef:i})})}},19611:function(V,f,e){e.r(f);var a=e(15009),v=e.n(a),I=e(99289),g=e.n(I),b=e(97857),j=e.n(b),R=e(42075),T=e(77429),h=e(85418),L=e(14726),i=e(55742),P=e(67294),U=e(89183),r=e(85893),A=function(E){var C=(0,r.jsx)("div",{children:E.menu.map(function(m){return(0,r.jsx)("div",{children:m},m)})});return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(R.Z,{children:[(0,r.jsx)(T.Z,j()({},E)),(0,r.jsx)(h.Z,{overlay:C,children:(0,r.jsx)("a",{className:"ant-dropdown-link",onClick:function(c){return c.preventDefault()},children:"Hover me"})})]})})};f.default=function(){var O=(0,P.useRef)(),E={inputNumber:A,submit:L.ZP,RadioGroup:i.ZP.Group},C=function(){var p=g()(v()().mark(function u(){var M,s,n;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return M=O==null?void 0:O.current,s=M.getFieldsValue,n=M.validateFields,t.next=3,n();case 3:console.log(s());case 4:case"end":return t.stop()}},u)}));return function(){return p.apply(this,arguments)}}(),m=[{display:"inputNumber",type:"inputNumber",macro:"inputNumber",props:{menu:["data1","data2"]}},{display:"RadioGroup",type:"RadioGroup",macro:"RadioGroup",props:{options:[{label:"\u662F",value:1},{label:"\u5426",value:0}]}},{type:"submit",props:{display:"submit",type:"primary",onClick:function(){C()},formItemLayout:{wrapperCol:{offset:6,span:18}}}}],c={inputNumber:0,RadioGroup:0},D={labelCol:{span:6},wrapperCol:{span:18}};return(0,r.jsx)("div",{children:(0,r.jsx)(U.AutoForm,{formItemLayout:D,schema:m,model:c,customMapper:E,cRef:O})})}},31956:function(V,f,e){e.r(f);var a=e(15009),v=e.n(a),I=e(99289),g=e.n(I),b=e(89847),j=e(84567),R=e(34041),T=e(14726),h=e(67294),L=e(89183),i=e(85893),P=b.Z.TextArea,U=j.Z.Group;f.default=function(){var r=(0,h.useRef)(),A={input:b.Z,select:R.default,textArea:P,checkbox:U,submit:T.ZP},O=function(){var c=g()(v()().mark(function D(){var p,u,M;return v()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return p=r==null?void 0:r.current,u=p.getFieldsValue,M=p.validateFields,n.next=3,M();case 3:console.log(u());case 4:case"end":return n.stop()}},D)}));return function(){return c.apply(this,arguments)}}(),E=[{display:"field1",type:"input",macro:"field1",props:{formItemLayout:{labelCol:{span:4},wrapperCol:{offset:6,span:20}},required:!0,requiredMessage:"Please input your field1!"}},{display:"field2",type:"input",macro:"field2",props:{formItemLayout:{labelCol:{span:4},wrapperCol:{offset:6,span:20}},required:!0,requiredMessage:"Please input your field2!"}},{display:"field3",type:"input",macro:"field3",props:{formItemLayout:{labelCol:{span:4},wrapperCol:{offset:6,span:20}},required:!0,requiredMessage:"Please input your field3!"}},{display:"field4",type:"input",macro:"field4",props:{formItemLayout:{labelCol:{span:4},wrapperCol:{offset:6,span:20}},required:!0,requiredMessage:"Please input your field4!"}},{display:"field5",type:"input",macro:"field5",props:{formItemLayout:{labelCol:{span:4},wrapperCol:{offset:6,span:20}}}},{type:"submit",props:{display:"submit",type:"primary",onClick:function(){O()},formItemLayout:{wrapperCol:{offset:10,span:18}}}}],C={field1:"\u9884\u7F6E\u6570\u636E",field2:"",field3:"",field4:"",field5:""},m={labelCol:{span:6},wrapperCol:{span:18}};return(0,i.jsx)("div",{children:(0,i.jsx)(L.AutoForm,{formItemLayout:m,schema:E,model:C,customMapper:A,cRef:r,useGrid:!0})})}},84567:function(V,f,e){e.d(f,{Z:function(){return M}});var a=e(67294),v=e(93967),I=e.n(v),g=e(50132),b=e(45353),j=e(17415),R=e(53124),T=e(98866),h=e(35792),L=e(65223),P=a.createContext(null),U=e(63185),r=function(s,n){var y={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&n.indexOf(t)<0&&(y[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,t=Object.getOwnPropertySymbols(s);_<t.length;_++)n.indexOf(t[_])<0&&Object.prototype.propertyIsEnumerable.call(s,t[_])&&(y[t[_]]=s[t[_]]);return y};const A=(s,n)=>{var y;const{prefixCls:t,className:_,rootClassName:Q,children:z,indeterminate:H=!1,style:Y,onMouseEnter:F,onMouseLeave:B,skipGroup:w=!1,disabled:k}=s,d=r(s,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:X,direction:q,checkbox:K}=a.useContext(R.E_),l=a.useContext(P),{isFormItemInput:ee}=a.useContext(L.aM),ae=a.useContext(T.Z),$=(y=(l==null?void 0:l.disabled)||k)!==null&&y!==void 0?y:ae,W=a.useRef(d.value);a.useEffect(()=>{l==null||l.registerValue(d.value)},[]),a.useEffect(()=>{if(!w)return d.value!==W.current&&(l==null||l.cancelValue(W.current),l==null||l.registerValue(d.value),W.current=d.value),()=>l==null?void 0:l.cancelValue(d.value)},[d.value]);const x=X("checkbox",t),S=(0,h.Z)(x),[te,J,re]=(0,U.ZP)(x,S),G=Object.assign({},d);l&&!w&&(G.onChange=function(){d.onChange&&d.onChange.apply(d,arguments),l.toggleOption&&l.toggleOption({label:z,value:d.value})},G.name=l.name,G.checked=l.value.includes(d.value));const se=I()(`${x}-wrapper`,{[`${x}-rtl`]:q==="rtl",[`${x}-wrapper-checked`]:G.checked,[`${x}-wrapper-disabled`]:$,[`${x}-wrapper-in-form-item`]:ee},K==null?void 0:K.className,_,Q,re,S,J),ne=I()({[`${x}-indeterminate`]:H},j.A,J),le=H?"mixed":void 0;return te(a.createElement(b.Z,{component:"Checkbox",disabled:$},a.createElement("label",{className:se,style:Object.assign(Object.assign({},K==null?void 0:K.style),Y),onMouseEnter:F,onMouseLeave:B},a.createElement(g.Z,Object.assign({"aria-checked":le},G,{prefixCls:x,className:ne,disabled:$,ref:n})),z!==void 0&&a.createElement("span",null,z))))};var E=a.forwardRef(A),C=e(74902),m=e(98423),c=function(s,n){var y={};for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&n.indexOf(t)<0&&(y[t]=s[t]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var _=0,t=Object.getOwnPropertySymbols(s);_<t.length;_++)n.indexOf(t[_])<0&&Object.prototype.propertyIsEnumerable.call(s,t[_])&&(y[t[_]]=s[t[_]]);return y},p=a.forwardRef((s,n)=>{const{defaultValue:y,children:t,options:_=[],prefixCls:Q,className:z,rootClassName:H,style:Y,onChange:F}=s,B=c(s,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:w,direction:k}=a.useContext(R.E_),[d,X]=a.useState(B.value||y||[]),[q,K]=a.useState([]);a.useEffect(()=>{"value"in B&&X(B.value||[])},[B.value]);const l=a.useMemo(()=>_.map(o=>typeof o=="string"||typeof o=="number"?{label:o,value:o}:o),[_]),ee=o=>{K(N=>N.filter(Z=>Z!==o))},ae=o=>{K(N=>[].concat((0,C.Z)(N),[o]))},$=o=>{const N=d.indexOf(o.value),Z=(0,C.Z)(d);N===-1?Z.push(o.value):Z.splice(N,1),"value"in B||X(Z),F==null||F(Z.filter(oe=>q.includes(oe)).sort((oe,_e)=>{const de=l.findIndex(ue=>ue.value===oe),ie=l.findIndex(ue=>ue.value===_e);return de-ie}))},W=w("checkbox",Q),x=`${W}-group`,S=(0,h.Z)(W),[te,J,re]=(0,U.ZP)(W,S),G=(0,m.Z)(B,["value","disabled"]),se=_.length?l.map(o=>a.createElement(E,{prefixCls:W,key:o.value.toString(),disabled:"disabled"in o?o.disabled:B.disabled,value:o.value,checked:d.includes(o.value),onChange:o.onChange,className:`${x}-item`,style:o.style,title:o.title,id:o.id,required:o.required},o.label)):t,ne={toggleOption:$,value:d,disabled:B.disabled,name:B.name,registerValue:ae,cancelValue:ee},le=I()(x,{[`${x}-rtl`]:k==="rtl"},z,H,re,S,J);return te(a.createElement("div",Object.assign({className:le,style:Y},G,{ref:n}),a.createElement(P.Provider,{value:ne},se)))});const u=E;u.Group=p,u.__ANT_CHECKBOX=!0;var M=u}}]);

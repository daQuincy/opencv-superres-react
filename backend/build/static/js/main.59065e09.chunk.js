(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n(0),i=n.n(c),o=n(13),r=n.n(o),s=(n(60),n(17)),l=n(21),d=n(47),j=(n(61),n(108)),u=n(115),p=n(113),b=n(111),h=n(110),f=n(107),O=n(112),g=n(20),m=n.n(g),x=n(27),v=n(43),y=n.n(v),C=n(18),w=n.n(C),k=function(e){var t=e.setPic,n=e.pic,c=e.setTab,i=e.setUpload,o=function(){var e=Object(x.a)(m.a.mark((function e(t){var a,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("file",n),e.next=5,w()({method:"post",url:"http://localhost:5000/upload",data:a,config:{headers:{"Content-Type":"multipart/form-data"}}});case 5:o=e.sent,console.log(o),c(1),i(!0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{action:"http://localhost:5000/upload",method:"post",encType:"multipart/form-data",children:[Object(a.jsx)(y.a,{withPreview:!0,buttonText:"undefined"===typeof n||0===n.length?"Choose Image":n.name+" chosen, click to change",withIcon:!0,onChange:function(e){t(e[0])},imgExtension:[".jpg",".gif",".png",".gif"],maxFileSize:5242880,singleImage:!0}),Object(a.jsx)(f.a,{disabled:"undefined"===typeof n||0===n.length,onClick:o,color:"secondary",variant:"contained",component:"span",type:"submit",children:"Upload"})]})})},T=n(109),S=(n(88),Object(j.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1),width:e.spacing(16),height:e.spacing(16)}}}})),Object(j.a)((function(e){return{margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}}}))),_=function(e){var t=e.filename,n=S(),i=Object(c.useState)(!1),o=Object(s.a)(i,2),r=o[0],l=o[1],d=Object(c.useState)(!1),j=Object(s.a)(d,2),u=j[0],p=j[1],b=function(){var e=Object(x.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),p(!0),e.next=4,w()({method:"post",url:"http://localhost:5000/upscale",config:{headers:{"Content-Type":"applications/json"}}});case 4:n=e.sent,console.log(n),p(!1),l(n.data.result);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"rowC",children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:"./static/"+t,alt:t})}),Object(a.jsx)("div",{children:Object(a.jsx)(f.a,{color:"secondary",variant:"contained",onClick:b,className:n.margin,children:u?Object(a.jsx)(T.a,{}):"Upscale"})}),Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r||"./static/__EmPtY__.jpg",alt:"empty.jpg"})})]})};function I(e){var t=e.children,n=e.value,c=e.index,i=Object(d.a)(e,["children","value","index"]);return Object(a.jsx)("div",Object(l.a)(Object(l.a)({role:"tabpanel",hidden:n!==c,id:"simple-tabpanel-".concat(c),"aria-labelledby":"simple-tab-".concat(c)},i),{},{children:n===c&&Object(a.jsx)(O.a,{p:3,children:Object(a.jsx)(h.a,{children:t})})}))}var P=Object(j.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function F(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var U=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)(0),r=Object(s.a)(o,2),d=r[0],j=r[1],h=Object(c.useState)(!1),O=Object(s.a)(h,2),g=O[0],m=O[1],x=P();return Object(a.jsxs)("div",{className:x.root,children:[Object(a.jsx)(u.a,{position:"static",children:Object(a.jsxs)(p.a,{value:d,onChange:function(e,t){j(t)},children:[Object(a.jsx)(b.a,Object(l.a)({label:"Upload Image"},F(0))),Object(a.jsx)(b.a,Object(l.a)(Object(l.a)({label:"Upscale"},F(1)),{},{disabled:!g}))]})}),Object(a.jsx)(I,{value:d,index:0,children:Object(a.jsx)(k,{setPic:i,pic:n,setTab:j,setUpload:m})}),Object(a.jsx)(I,{value:d,index:1,children:Object(a.jsx)(_,{filename:n?n.name:"./static/__EmPtY__.jpg"})}),Object(a.jsx)(f.a,{color:"secondary",variant:"contained",onClick:function(e){e.preventDefault(),j(0),m(!1),w()({method:"post",url:"http://localhost:5000/clear",config:{headers:{"Content-Type":"applications/json"}}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},children:"Clear"})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(U,{})}),document.getElementById("root")),D()}},[[89,1,2]]]);
//# sourceMappingURL=main.59065e09.chunk.js.map
(this.webpackJsonpstar_wars_client=this.webpackJsonpstar_wars_client||[]).push([[0],{54:function(e,t,n){e.exports={items:"ItemsList_items__lvYb-"}},67:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(8),o=n.n(a),i=(n(67),n(36)),s=n(30),u=n(125),l=n(135),h=n(133),p=n(6),d=Object(u.a)((function(e){return Object(l.a)({root:{"& > *":{width:"300px",backgroundColor:e.palette.background.default,padding:"5px"}}})})),f=function(e){var t=d(),n=e.value,r=e.changeInputValue,c=e.hideSelectedItem;return Object(p.jsx)(h.a,{className:t.root,value:n,onChange:function(e){r(e.currentTarget.value),c()},placeholder:"input text here"})},j=n(129),b=n(130),m=n(54),w=n.n(m),O=Object(u.a)((function(e){return Object(l.a)({root:{display:"flex",justifyContent:"space-between",width:"300px",maxWidth:360,backgroundColor:e.palette.background.default}})})),g=Object(u.a)((function(e){return Object(l.a)({root:{textAlign:"end"}})})),x=function(e){var t=e.inputValue,n=e.listItemsValue,r=e.selectItem,c=e.hideItemList,a=e.changeInputValue,o=e.getHighlightedText,i=O(),s=g();return Object(p.jsx)("div",{className:w.a.items,children:n.map((function(e,n){return Object(p.jsxs)(j.a,{className:i.root,button:!0,onClick:function(){r(e),a(""),c()},children:[Object(p.jsx)(b.a,{primary:o(e.name||e.title||"",t)}),Object(p.jsx)(b.a,{className:s.root,primary:e.group})]},n)}))})},v=n(55),I=n.n(v).a.create({baseURL:"https://swapi.dev/api"}),_=function(e){return I.get(e).then((function(e){return e.data.results})).catch((function(){return console.error("Could not fetch url ".concat(URL))}))},C=function(e){return _("/films/?search=".concat(e))},N=function(e){return _("/people/?search=".concat(e))},S=function(e){return _("/planets/?search=".concat(e))},y=function(e){return _("/species/?search=".concat(e))},L=function(e){return _("/starships/?search=".concat(e))},k=function(e){return _("/vehicles/?search=".concat(e))},V=n(134),A=n(131),T=n(132),B=n(33),F=Object(u.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),W=function(e){var t=e.row1,n=e.row2,r=e.row3,c=e.row4,a=F();return Object(p.jsx)(A.a,{className:a.root,children:Object(p.jsxs)(T.a,{children:[Object(p.jsx)(B.a,{className:a.title,color:"textSecondary",gutterBottom:!0,children:n}),Object(p.jsx)(B.a,{variant:"h5",component:"h2",children:t}),Object(p.jsx)(B.a,{className:a.pos,color:"textSecondary",children:r}),Object(p.jsx)(B.a,{variant:"body2",component:"p",children:c})]})})},E=function(e,t){return e.split(new RegExp("(".concat(t,")"),"gi")).map((function(e,n){return e.toLowerCase()===t.toLowerCase()?Object(p.jsx)("b",{children:e},n):e}))},P=(n(92),function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),o=Object(s.a)(a,2),u=o[0],l=o[1],h=Object(r.useState)(null),d=Object(s.a)(h,2),j=d[0],b=d[1],m=Object(r.useState)(!1),w=Object(s.a)(m,2),O=w[0],g=w[1],v=function(e){c(e)},I=function(e,t){return t.map((function(t){return Object(i.a)(Object(i.a)({},t),{},{group:e})}))};Object(r.useEffect)((function(){if(n.length>=3){var e=C(n).then((function(e){return I("films",e)})),t=N(n).then((function(e){return I("people",e)})),r=S(n).then((function(e){return I("planets",e)})),c=y(n).then((function(e){return I("species",e)})),a=L(n).then((function(e){return I("starships",e)})),o=k(n).then((function(e){return I("vehicles",e)}));Promise.all([e,t,r,c,a,o]).then((function(e){l(e.flat())})).catch((function(){g(!0)}))}}),[n]);var _=Object(r.useMemo)((function(){return function(e){var t=function(e){if(!e)return{};var t=e.group,n=e.name;switch(t){case"films":return{row1:e.title,row2:e.director,row3:e.producer,row4:e.episode_id};case"people":return{row1:n,row2:e.gender,row3:e.height,row4:e.hair_color};case"planets":return{row1:n,row2:e.diameter,row3:e.rotation_period,row4:e.orbital_period};case"species":return{row1:n,row2:e.classification,row3:e.designation,row4:e.average_height};case"starships":return{row1:n,row2:e.consumables,row3:e.crew,row4:e.manufacturer};case"vehicles":return{row1:n,row2:e.model,row3:e.vehicle_class,row4:e.manufacturer};default:return{}}}(e),n=t.row1,r=t.row2,c=t.row3,a=t.row4;return Object(p.jsx)(W,{row1:n,row2:r,row3:c,row4:a})}}),[]);return Object(p.jsx)("div",{className:"App",children:O?Object(p.jsx)(V.a,{variant:"filled",severity:"error",children:"We have a problem, reload the page please!"}):Object(p.jsxs)("div",{className:"AppWrapper",children:[Object(p.jsx)(f,{value:n,changeInputValue:v,hideSelectedItem:function(){b(null)}}),Object(p.jsx)("div",{className:"AppList",children:Object(p.jsx)(x,{inputValue:n,listItemsValue:u,selectItem:function(e){b(e)},hideItemList:function(){l([])},changeInputValue:v,getHighlightedText:E})}),Object(p.jsx)("div",{className:"AppItem",children:j&&_(j)})]})})}),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,137)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root")),R()}},[[93,1,2]]]);
//# sourceMappingURL=main.74d87d11.chunk.js.map
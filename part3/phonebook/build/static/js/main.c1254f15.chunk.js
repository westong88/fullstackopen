(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n);var c=t(14),r=t.n(c),o=t(3),a=t(1),u=t(4),i=t.n(u),s=t(0),l=function(e){var n=e.people,t=e.confirmDelete;return Object(s.jsxs)("li",{children:[n.name," ",n.number,Object(s.jsx)("button",{onClick:t,children:"delete"})]})},d=function(e){var n=e.value,t=e.onChange;return Object(s.jsxs)("div",{children:["filter shown with",Object(s.jsx)("input",{value:n,onChange:t})]})},b=function(e){var n=e.submitAction,t=e.name,c=e.handleNameChange,r=e.number,o=e.handleNumberChange;return Object(s.jsxs)("form",{onSubmit:n,children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{value:t,onChange:c})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{value:r,onChange:o})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},j="/api/persons",f=function(){return i.a.get(j).then((function(e){return e.data}))},h=function(e){return i.a.post(j,e).then((function(e){return e.data}))},m=function(e,n){return i.a.put("".concat(j,"/").concat(e),n).then((function(e){return e.data}))},O=function(e){return i.a.delete("".concat(j,"/").concat(e)).then((function(e){return e.data}))},p=function(e){var n=e.message,t={background:"lightgrey",borderRadius:5,borderStyle:"solid",color:"success"===e.type?"green":"red",fontSize:20,marginBottom:10,padding:10};return null===n?null:Object(s.jsx)("div",{style:t,children:n})},v=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)(""),u=Object(o.a)(r,2),i=u[0],j=u[1],v=Object(a.useState)(""),g=Object(o.a)(v,2),x=g[0],w=g[1],C=Object(a.useState)(!0),S=Object(o.a)(C,2),y=S[0],k=S[1],N=Object(a.useState)(""),D=Object(o.a)(N,2),A=D[0],B=D[1],E=Object(a.useState)(null),I=Object(o.a)(E,2),J=I[0],L=I[1],T=Object(a.useState)(""),z=Object(o.a)(T,2),P=z[0],R=z[1],q=1;Object(a.useEffect)((function(){f().then((function(e){console.log("promise fulfilled"),c(e)}))}),[]),console.log("render",t.length,"persons");var F=y?t:t.filter((function(e){return e.name.toLowerCase().includes(A.toLowerCase())}));return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(p,{message:J,type:P}),Object(s.jsx)(d,{value:A,onChange:function(e){B(e.target.value),k(!1)}}),Object(s.jsx)("h2",{children:"add a new"}),Object(s.jsx)(b,{submitAction:function(e){e.preventDefault();var n=t.find((function(e){return e.name===i}));if(n){if(window.confirm(i+" is already added to phonebook, replace the old number with a new one?")){var r={name:i,number:x,id:n.id};m(n.id,r).then((function(e){c(t.map((function(e){return e.id==r.id?r:e})))})).catch((function(e){R("error"),L("Information of ".concat(r.name," has already been removed from server")),setTimeout((function(){L(null)}),5e3),c(t.filter((function(e){return e.id!=r.id})))}))}}else{var o={name:i,number:x};h(o).then((function(e){c(t.concat(o)),R("success"),L("Added ".concat(o.name)),setTimeout((function(){L(null)}),5e3)}))}j(""),w("")},name:i,handleNameChange:function(e){console.log(e.target.value),j(e.target.value)},number:x,handleNumberChange:function(e){w(e.target.value)}}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)("ul",{children:F.map((function(e){return Object(s.jsx)(l,{people:e,confirmDelete:function(){return function(e){window.confirm("Delete ".concat(e.name," ?"))&&O(e.id).then((function(n){return c(t.filter((function(n){return n.id!=e.id})))}))}(e)}},q++)}))})]})};r.a.render(Object(s.jsx)(v,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.c1254f15.chunk.js.map
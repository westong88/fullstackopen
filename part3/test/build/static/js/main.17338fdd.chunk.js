(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{39:function(t,n,e){"use strict";e.r(n);var c=e(2),o=e(15),r=e.n(o),a=e(6),i=e(4),u=e(3),s=e.n(u),l=e(0),j=function(t){var n=t.note,e=t.toggleImportance,c=n.important?"make not important":"make important";return Object(l.jsxs)("li",{className:"note",children:[n.content,Object(l.jsx)("button",{onClick:e,children:c})]})},f=function(t){var n=t.message;return null===n?null:Object(l.jsx)("div",{className:"error",children:n})},b="http://localhost:3001/api/notes",d=function(){return s.a.get(b).then((function(t){return t.data}))},h=function(t){return s.a.post(b,t).then((function(t){return t.data}))},m=function(t,n){return s.a.put("".concat(b,"/").concat(t),n).then((function(t){return t.data}))},p=function(){var t=Object(c.useState)([]),n=Object(i.a)(t,2),e=n[0],o=n[1],r=Object(c.useState)(""),u=Object(i.a)(r,2),s=u[0],b=u[1],p=Object(c.useState)(!0),O=Object(i.a)(p,2),v=O[0],g=O[1],x=Object(c.useState)(null),S=Object(i.a)(x,2),k=S[0],w=S[1];Object(c.useEffect)((function(){d().then((function(t){o(t)}))}),[]),console.log("render",e.length,"notes");var I=v?e:e.filter((function(t){return!0===t.important}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Notes"}),Object(l.jsx)(f,{message:k}),Object(l.jsx)("div",{children:Object(l.jsxs)("button",{onClick:function(){return g(!v)},children:["show ",v?"important":"all"]})}),Object(l.jsx)("ul",{children:I.map((function(t){return Object(l.jsx)(j,{note:t,toggleImportance:function(){return function(t){"http://localhost:3001/api/notes/".concat(t);var n=e.find((function(n){return n.id===t})),c=Object(a.a)(Object(a.a)({},n),{},{important:!n.important});m(t,c).then((function(n){o(e.map((function(e){return e.id!==t?e:n})))})).catch((function(c){w("Note '".concat(n.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3),o(e.filter((function(n){return n.id!==t})))}))}(t.id)}},t.id)}))}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:s,date:(new Date).toISOString(),important:Math.random()<.5};h(n).then((function(t){o(e.concat(t)),b("")}))},children:[Object(l.jsx)("input",{value:s,onChange:function(t){console.log(t.target.value),b(t.target.value)}}),Object(l.jsx)("button",{type:"submit",children:"save"})]})]})};r.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.17338fdd.chunk.js.map
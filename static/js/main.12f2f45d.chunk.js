(this["webpackJsonpget-reviewer"]=this["webpackJsonpget-reviewer"]||[]).push([[0],{15:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),n=c(9),s=c.n(n),l=(c(15),c(2)),i=c(4),o=c.n(i),u=c(7),d=c(3),j=c.n(d),b=c(10),m=c(0),v=function(e){var t=e.id,c=e.value,r=e.removeEl;return Object(m.jsx)("a",{href:"/#",className:"list-group-item list-group-item-action",onClick:r(t),children:c})},O=function(e){var t=Object(r.useState)(""),c=Object(l.a)(t,2),a=c[0],n=c[1],s=Object(r.useRef)(null),i=e.blackList,o=e.addElBlackList,u=e.removeEl,d=i.map((function(e){var t=e.id,c=e.value;return Object(m.jsx)(v,{id:t,value:c,removeEl:u},t)}));return Object(m.jsx)("div",{className:"card",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title",children:"BlackList"}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-8 input-group-sm col-md-10",children:Object(m.jsx)("input",{type:"text",className:"form-control",ref:s,value:a,onChange:function(e){n(e.target.value)},name:"addblacklist",id:"addblacklist"})}),Object(m.jsx)("div",{className:"col-4 col-md-2",children:Object(m.jsx)("button",{type:"button",onClick:function(e){var t;e.preventDefault(),t=a,i.map((function(e){return e.value})).includes(t)||""===a||o([{id:(Math.floor(1679616*Math.random())+0).toString(36),value:a}].concat(Object(b.a)(i))),n(""),s.current.focus()},className:"btn btn-sm btn-primary col-12",children:"add"})}),i.length>0&&Object(m.jsx)("div",{className:"list-group col-12 pl-3 mt-3",children:d})]})]})})},h=function(e){var t=e.value,c=e.onChange,r=e.valid,a=j()({"form-control":!0,"is-invalid":r});return Object(m.jsxs)("div",{className:"form-group col-12 col-sm-6",children:[Object(m.jsx)("label",{htmlFor:"repo",className:"col-form-label",children:"Repository"}),Object(m.jsx)("input",{type:"text",className:a,value:t,onChange:c,name:"repo",id:"repo"}),Object(m.jsx)("div",{className:"invalid-feedback",children:"Please fill in the field."})]})},f=function(e){var t=e.value,c=e.onChange,r=e.valid,a=j()({"form-control":!0,"is-invalid":r});return Object(m.jsxs)("div",{className:"form-group col-12 col-sm-6",children:[Object(m.jsx)("label",{htmlFor:"username",className:"col-form-label",children:"Username"}),Object(m.jsx)("input",{type:"text",className:a,value:t,onChange:c,name:"username",id:"username"}),Object(m.jsx)("div",{className:"invalid-feedback",children:"Please fill in the field."})]})},x=function(e){var t=e.disabled,c=e.onClick;return Object(m.jsx)("button",{type:"button",className:"btn btn-primary",onClick:c,disabled:t,children:"find reviewer"})},p=function(e){var t=e.value,c=e.onClick,r=t?"Show":"Hide";return Object(m.jsxs)("button",{type:"button",className:"btn btn-info ml-4",onClick:c,children:[r," ","filter"]})};var N=function(e){var t=e.setAnswer,c=Object(r.useState)(!1),a=Object(l.a)(c,2),n=a[0],s=a[1],i=Object(r.useState)(""),d=Object(l.a)(i,2),b=d[0],v=d[1],N=Object(r.useState)(!0),g=Object(l.a)(N,2),k=g[0],w=g[1],y=Object(r.useState)(""),S=Object(l.a)(y,2),C=S[0],E=S[1],L=Object(r.useState)(!0),V=Object(l.a)(L,2),M=V[0],D=V[1],U=Object(r.useState)([]),A=Object(l.a)(U,2),B=A[0],F=A[1],J=Object(r.useState)(!1),R=Object(l.a)(J,2),I=R[0],_=R[1],P="https://api.github.com/repos/".concat(b,"/").concat(C,"/contributors"),Q=new URL(P),H=j()({"border-0":!0,"mt-2":!0,"col-12":!0,card:!0,collapse:n}),K=k||M||I;return Object(r.useLayoutEffect)((function(){var e=JSON.parse(localStorage.getItem("filterState"));null!==e&&(s(e.hide),v(e.userNameValue),w(e.userNameValid),E(e.repoValue),D(e.repoValid),F(e.blackList))}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:H,children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)(f,{value:b,valid:k,onChange:function(e){var t=e.target.value;v(t),w(""===t)}}),Object(m.jsx)(h,{value:C,valid:M,onChange:function(e){var t=e.target.value;E(t),D(""===t)}})]}),Object(m.jsx)(O,{blackList:B,addElBlackList:F,onKeyDown:function(e){13===e.keyCode&&e.preventDefault()},removeEl:function(e){return function(t){t.preventDefault(),F(B.filter((function(t){return t.id!==e})))}}})]})}),Object(m.jsx)("div",{className:"card col-12 border border-0",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)(x,{disabled:K,onClick:function(e){(e.preventDefault(),_(!0),K)||function(){var e=Object(u.a)(o.a.mark((function e(){var c,r,a,s,i,u,d,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(Q);case 3:if(!(c=e.sent).ok){e.next=23;break}return e.next=7,c.json();case 7:r=e.sent,a=B.map((function(e){return e.value})),s=r.filter((function(e){var t=e.login;return!a.includes(t)})),i=s.length,e.t0=i,e.next=0===e.t0?14:1===e.t0?16:19;break;case 14:return u=null,e.abrupt("break",20);case 16:return d=Object(l.a)(s,1),u=d[0],e.abrupt("break",20);case 19:u=s[(o=i,Math.floor(Math.random()*(o-0+1))+0)];case 20:t({result:"answer",response:{reviewer:u,contributors:r,currentUser:b}}),e.next=24;break;case 23:t({result:"notAnswer",response:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u043a\u043e\u043d\u0442\u0440\u0435\u0431\u044c\u044e\u0442\u043e\u0440\u0430\u043c \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b. \u041a\u043e\u0434 \u043e\u0442\u0432\u0435\u0442\u0430 ".concat(c.status)});case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(0),t({result:"error",response:"Error: ".concat(e.t1.message,".")});case 29:j={hide:n,userNameValue:b,userNameValid:k,repoValue:C,repoValid:M,blackList:B},localStorage.setItem("filterState",JSON.stringify(j)),_(!1);case 32:case"end":return e.stop()}var o}),e,null,[[0,26]])})));return function(){return e.apply(this,arguments)}}()()}}),Object(m.jsx)(p,{value:n,onClick:function(){s(!n)}})]})})]})},g=function(e){var t=e.user,c=Object(r.useState)(null),a=Object(l.a)(c,2),n=a[0],s=a[1],i="https://api.github.com/users/".concat(t),d=new URL(i);return Object(r.useEffect)((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(d);case 3:if(!(t=e.sent).ok){e.next=11;break}return e.next=7,t.json();case 7:c=e.sent,s(c.avatar_url),e.next=12;break;case 11:s(null);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),s(null);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(m.jsx)("div",{className:"card col-12 border-0",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h4",{className:"card-title mt-3",children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"}),Object(m.jsx)("h5",{className:"card-subtitle mb-2",children:t}),null!==n&&Object(m.jsx)("img",{className:"card-img-top",src:n,alt:"Not found foto"})]})})},k=function(e){var t=e.user,c=t.login,r=t.avatar_url;return Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("div",{className:"card h-100 border-0",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("div",{className:"card-title mt-3",children:Object(m.jsx)("h5",{children:c})}),Object(m.jsx)("img",{className:"card-img-top",src:r,alt:"Not found foto"})]})})})},w=function(e){var t=e.contributors.map((function(e){var t=(Math.floor(1679616*Math.random())+0).toString(36);return Object(m.jsx)(k,{user:e},t)}));return Object(m.jsx)("div",{className:"card col-12",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h4",{className:"card-title mt-3",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u043e\u0430\u0432\u0442\u043e\u0440\u043e\u0432"}),Object(m.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4",children:t})]})})},y=function(e){var t=e.user,c=t.login,r=t.avatar_url;return Object(m.jsx)("div",{className:"card col-12 border-0",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h4",{className:"card-title mt-3",children:"\u0420\u0435\u0432\u044c\u044e\u0432\u0435\u0440"}),Object(m.jsx)("h5",{className:"card-subtitle mb-2",children:c}),Object(m.jsx)("img",{className:"card-img-top",src:r,alt:"Not found foto"})]})})},S=function(e){var t=e.text;return Object(m.jsx)("div",{className:"card col-12 border-0",children:Object(m.jsx)("div",{className:"card-body",children:Object(m.jsx)("div",{className:"card-title",children:Object(m.jsx)("h3",{children:t})})})})},C=function(e){var t=e.data,c=t.result,r=t.response;return{notQuery:function(){return null},error:function(e){return Object(m.jsx)(S,{text:e})},notAnswer:function(e){return Object(m.jsx)(S,{text:e})},answer:function(e){var t=e.reviewer,c=e.contributors,r=e.currentUser;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{user:r}),null===t&&Object(m.jsx)(S,{text:"\u041d\u0435\u0442 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0435\u0433\u043e \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u0430 \u0432 \u0440\u0435\u0432\u044c\u044e\u0432\u0435\u0440\u044b"}),null!==t&&Object(m.jsx)(y,{user:t}),Object(m.jsx)(w,{contributors:c})]})}}[c](r)};var E=function(){var e=Object(r.useState)({result:"notQuery"}),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsx)(N,{setAnswer:a})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)(C,{data:c})})]})};c(18);s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(E,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.12f2f45d.chunk.js.map
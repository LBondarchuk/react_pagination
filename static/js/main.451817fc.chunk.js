(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){"use strict";c.r(t);var a=c(4),n=c.n(a),i=c(3),r=c(1),l=c(0),s=function(e){var t=e.pageList,c=e.itemList,a=e.active,n=e.setActive;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("ul",{className:"pagination",children:[Object(l.jsx)("li",{className:"page-item ".concat(1===a?"disabled":""),children:Object(l.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===a,onClick:function(){return 1!==a&&n(a-1)},children:"\xab"})}),t,Object(l.jsx)("li",{className:"page-item ".concat(a===t.length?"disabled":""),children:Object(l.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":a===t.length,onClick:function(){return a!==t.length&&n(a+1)},children:"\xbb"})})]}),Object(l.jsx)("ul",{children:c})]})};c(10);var o=function(e,t){for(var c=[],a=e;a<=t;a+=1)c.push(a);return c}(1,42).map((function(e){return"Item ".concat(e)})),j=function(){var e=Object(r.useState)("5"),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)(1),j=Object(i.a)(n,2),d=j[0],u=j[1],h=o.length/+c,m=o.slice(+c*d-+c,+c*d),p=m.map((function(e){return Object(l.jsx)("li",{"data-cy":"item",children:e},e)})),b=function(){for(var e=[],t=function(t){e.push(Object(l.jsx)("li",{className:"page-item ".concat(t+1===d?"active":""),children:Object(l.jsx)("a",{"data-cy":"pageLink",onClick:function(){return u(t+1)},className:"page-link",href:"#".concat(t+1),children:t+1})},"#".concat(t+1)))},c=0;c<h;c+=1)t(c);return e}();return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"Items with Pagination"}),Object(l.jsxs)("p",{className:"lead","data-cy":"info",children:["Page ".concat(d," "),"(".concat(m[0].replace("m","ms").replace("I","i")," - ").concat(m[m.length-1].split(" ")[1]," of ").concat(o.length,")")]}),Object(l.jsxs)("div",{className:"form-group row",children:[Object(l.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(l.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",defaultValue:c,onChange:function(e){a(e.currentTarget.value),u(1)},children:["3","5","10","20"].map((function(e){return Object(l.jsx)("option",{defaultValue:e,children:+e},e)}))})}),Object(l.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(l.jsx)(s,{pageList:b,itemList:p,active:d,setActive:u})]})};n.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.451817fc.chunk.js.map
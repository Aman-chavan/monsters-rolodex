(this.webpackJsonplanding_page=this.webpackJsonplanding_page||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),c=n(4),a=n.n(c),o=(n(13),n(5)),i=n(6),u=n(8),h=n(7),l=(n(14),n(3),n(0)),d=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set3&size=150x150"),alt:""}),Object(l.jsx)("h1",{children:e.monster.name}),Object(l.jsx)("h3",{children:e.monster.email})]})},j=function(e){return Object(l.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(l.jsx)(d,{monster:e},e.id)}))})},m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,s=t.searchField,r=n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("input",{type:"search",placeholder:"search here",onChange:function(t){return e.setState({searchField:t.target.value})}}),Object(l.jsx)(j,{monsters:r})]})}}]),n}(r.a.Component);a.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))},3:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.cfecadf5.chunk.js.map
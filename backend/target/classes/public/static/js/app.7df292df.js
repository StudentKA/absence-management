(function(e){function t(t){for(var r,u,i=t[0],s=t[1],l=t[2],p=0,f=[];p<i.length;p++)u=i[p],o[u]&&f.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login-form"}},[n("b-form",{on:{submit:e.check}},[n("b-form-group",{attrs:{id:"exampleInputGroup1",label:"Username:","label-for":"exampleInput1",description:"Enter your username"}},[n("b-form-input",{attrs:{id:"exampleInput1",type:"text",required:"",placeholder:"Enter email"},model:{value:e.login,callback:function(t){e.login=t},expression:"login"}})],1),n("b-form-group",{attrs:{id:"exampleInputGroup2",label:"Your password:","label-for":"exampleInput2"}},[n("b-form-input",{attrs:{id:"exampleInput2",type:"password",required:"",placeholder:"Enter password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Log in")])],1)],1)},u=[],i=n("bc3a"),s=n.n(i),l="http://localhost:8088",c=s.a.create({baseURL:l,timeout:1e3}),p={login:function(e){return c.post("/login",e).then(function(e){return e.data})}},f={name:"Login",data:function(){return{login:"",password:"",success:!1}},methods:{check:function(){var e=this,t={login:this.login,password:this.password};p.post("/login",t).then(function(t){console.log(t.data),e.success=t.data}).catch(function(t){e.errors.push(t)}),this.login="",this.password="",this.success?this.$router.push("/calendar"):this.console.log("user doesn't exist")}}},d=f,b=(n("82e8"),n("2877")),h=Object(b["a"])(d,a,u,!1,null,"be576ce0",null),m=h.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-calendar",{attrs:{"is-double-paned":"",attributes:e.attributes}})},v=[],w={data:function(){return{attributes:[{highlight:{backgroundColor:"#ff8080",borderColor:"#ff6666",borderWidth:"2px",borderStyle:"solid"},contentStyle:{color:"white"},dates:[{start:new Date(2019,2,19),end:new Date(2019,2,25)}]}]}}},y=w,x=Object(b["a"])(y,g,v,!1,null,"78fe7ae6",null),O=x.exports,_={name:"app",components:{Login:m,Calendar:O}},j=_,k=(n("034f"),Object(b["a"])(j,r,o,!1,null,null,null)),S=k.exports,E=n("2b0e"),I=n("da28"),P=n.n(I),L=(n("4418"),n("9f7b")),$=n.n(L),M=(n("f9e3"),n("2dd8"),n("8c4f"));E["a"].use(P.a,{firstDayOfWeek:2}),E["a"].use($.a),E["a"].use(M["a"]);var q=new M["a"]({routes:[{path:"/",name:"Login",component:m},{path:"/calendar",name:"calendar",component:O,meta:{requiresAuth:!0}}]});E["a"].config.productionTip=!1,new E["a"]({render:function(e){return e(S)},router:q}).$mount("#app")},"61f0":function(e,t,n){},"64a9":function(e,t,n){},"82e8":function(e,t,n){"use strict";var r=n("61f0"),o=n.n(r);o.a}});
//# sourceMappingURL=app.7df292df.js.map
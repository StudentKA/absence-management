(function(e){function t(t){for(var o,s,u=t[0],i=t[1],c=t[2],p=0,d=[];p<u.length;p++)s=u[p],r[s]&&d.push(r[s][0]),r[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],a={name:"app"},s=a,u=(n("034f"),n("2877")),i=Object(u["a"])(s,o,r,!1,null,null,null),c=i.exports,l=n("2b0e"),p=n("795b"),d=n.n(p),f=n("2f62"),m=n("bc3a"),h=n.n(m),b="http://localhost:8088",g=h.a.create({baseURL:b,timeout:1e3,headers:{"Content-Type":"application/json"}});l["default"].use(f["a"]);var v=new f["a"].Store({state:{token:localStorage.getItem("token")||"",isAuth:!1},mutations:{authSuccess:function(e,t){e.token=t,e.status=!0},authLogout:function(e){e.token="",e.status=!1}},actions:{login:function(e,t){return new d.a(function(n,o){g.post("/login",t).then(function(t){var o=t.headers["authorization"];console.log(o),e.commit("authSuccess",o),localStorage.setItem("token",o),g.defaults.headers.common["Authorization"]=o,n(t)}).catch(function(e){localStorage.removeItem("token"),o(e)})})},userLogOut:function(e){var t=e.commit;t("authLogout")}},getters:{isAuthenticated:function(e){return e.isAuth}}}),x=v,_=(n("7f7f"),n("6762"),n("8c4f")),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login-form"}},[n("b-form",[n("b-form-group",{attrs:{id:"exampleInputGroup1",label:"Username:","label-for":"exampleInput1",description:"Enter your username"}},[n("b-form-input",{attrs:{id:"exampleInput1",type:"text",required:"",placeholder:"Enter email"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),n("b-form-group",{attrs:{id:"exampleInputGroup2",label:"Your password:","label-for":"exampleInput2"}},[n("b-form-input",{attrs:{id:"exampleInput2",type:"password",required:"",placeholder:"Enter password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),n("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:e.check}},[e._v("Log in")]),n("transition",[e.success?e._e():n("b-modal",{attrs:{id:"modal1",title:"BootstrapVue"}},[n("p",{staticClass:"my-4"},[e._v("Wrong login or password!")])])],1)],1)},O=[],y={name:"Login",data:function(){return{username:"",password:""}},methods:{check:function(){var e=this;this.$store.dispatch("login",{username:this.username,password:this.password}).then(function(){e.$router.push("/home")}),this.username="",this.password=""}}},j=y,k=(n("f2b3"),Object(u["a"])(j,w,O,!1,null,"c8c926f4",null)),S=k.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-calendar",{attrs:{"is-double-paned":"",attributes:e.attributes}})},I=[],L={data:function(){return{attributes:[{highlight:{backgroundColor:"#ff8080",borderColor:"#ff6666",borderWidth:"2px",borderStyle:"solid"},contentStyle:{color:"white"},dates:[{start:new Date(2019,2,19),end:new Date(2019,2,25)}]}]}}},R=L,E=Object(u["a"])(R,C,I,!1,null,"78fe7ae6",null),$=E.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:"","m-5":""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[n("h1",[e._v("Check area")]),n("v-btn",{attrs:{dark:"",color:"teal lighten-1"},on:{click:e.getSecuredUserInformation}},[e._v("Call secured user service")]),n("v-btn",{attrs:{dark:"",color:"teal lighten-1"},on:{click:e.getSecuredAdminInformation}},[e._v("Call secured admin service")]),n("v-btn",{attrs:{dark:"",color:"teal lighten-1"},on:{click:e.getSecuredManagerInformation}},[e._v("Call secured manager service")])],1),n("v-flex",{staticClass:"text-xs-left",attrs:{xs8:"","offset-xs3":"","mt-5":""}},[n("h2",[e._v("Request URL: "+e._s(e.responseObj.url))]),n("h2",[e._v("Request method: "+e._s(e.responseObj.method))]),n("h2",[e._v("Status code: "+e._s(e.responseObj.statusCode))]),n("h2",[e._v("Response: "+e._s(e.responseObj.msg))])]),n("Logout")],1)},M=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"modal-sm",expression:"'modal-sm'"}],attrs:{variant:"primary"}},[e._v("Logout")]),n("b-modal",{attrs:{id:"modal-sm",size:"sm"},on:{ok:e.exit}},[e._v("Are you sure?")])],1)},G=[],U={name:"Logout",methods:{exit:function(e){var t=this;e.preventDefault(),this.$store.dispatch("userLogOut").then(function(){t.$router.push("/")})}}},q=U,D=Object(u["a"])(q,P,G,!1,null,"d61ae170",null),T=D.exports,z={components:{Logout:T},data:function(){return{responseObj:{url:"",statusCode:"",method:"",msg:""}}},created:function(){},methods:{getSecuredUserInformation:function(){var e=this;this.responseObj={},g.get("http://localhost:8088/user/home").then(function(t){console.log("Get response: ",t.data),e.responseObj=e.parseResponse(t)}).catch(function(t){e.responseObj=e.parseResponse(t)})},getSecuredAdminInformation:function(){var e=this;this.responseObj={},g.get("http://localhost:8088/admin/home").then(function(t){console.log("Get response: ",t.data),e.responseObj=e.parseResponse(t)}).catch(function(t){e.responseObj=e.parseResponse(t)})},getSecuredManagerInformation:function(){var e=this;g.get("http://localhost:8088/manager/home").then(function(t){console.log("Get response: ",t.data),e.responseObj=e.parseResponse(t)}).catch(function(t){e.responseObj=e.parseResponse(t)})},parseResponse:function(e){var t={};return t.url=e.config.url,t.statusCode=e.status,t.method=e.config.method,t.msg=e.data.message?e.data.message:e.data,t}}},N=z,W=Object(u["a"])(N,A,M,!1,null,null,null),J=W.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[n("h1",{staticClass:"lead"},[e._v("Error 404")]),n("h2",{staticClass:"lead"},[e._v("No such page")])])],1)},F=[],V={name:"NotFound"},Y=V,H=Object(u["a"])(Y,B,F,!1,null,"6602e2ee",null),K=H.exports;l["default"].use(_["a"]);var Q=new _["a"]({mode:"history",routes:[{path:"/",name:"Login",component:S},{path:"/calendar",name:"Calendar",component:$},{path:"/home",name:"home",component:J},{path:"*",component:K}]}),X=["Login","Calendar"];Q.beforeEach(function(e,t,n){console.log("isAuth "+x.getters.isAuthenticated),X.includes(e.name)?n():x.getters.isAuthenticated?n():n("/")});var Z=Q,ee=n("da28"),te=n.n(ee),ne=(n("4418"),n("ce5b")),oe=n.n(ne),re=(n("bf40"),n("9f7b")),ae=n.n(re);n("f9e3"),n("2dd8");window.token=localStorage.getItem("token"),window.user=localStorage.getItem("user"),l["default"].use(te.a,{firstDayOfWeek:2}),l["default"].use(oe.a),l["default"].use(ae.a),l["default"].config.productionTip=!1,new l["default"]({render:function(e){return e(c)},router:Z,store:x,instance:g}).$mount("#app")},"64a9":function(e,t,n){},cb63:function(e,t,n){},f2b3:function(e,t,n){"use strict";var o=n("cb63"),r=n.n(o);r.a}});
//# sourceMappingURL=app.53804aaf.js.map
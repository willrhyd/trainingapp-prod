(function(e){function t(t){for(var a,i,o=t[0],c=t[1],u=t[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(f.length)f.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,o=1;o<r.length;o++){var c=r[o];0!==s[c]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},s={app:0},n=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/subfolder/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},1734:function(e,t,r){},"3c11":function(e,t,r){"use strict";r("1734")},"3c8a":function(e,t,r){},4678:function(e,t,r){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=n(e);return r(t)}function n(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=n,e.exports=s,s.id="4678"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("navbar"),r("router-view")],1)},n=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"nav"},[r("ul",[e.isLoggedIn?r("li",[r("a",{attrs:{href:"/user",rel:"noopener"}},[e._v(e._s(e.user))])]):e._e(),e.isLoggedIn?r("li",[r("a",{attrs:{href:"/calendar",rel:"noopener"}},[e._v("Calendar")])]):e._e(),e.isLoggedIn?r("li",[r("a",{attrs:{href:"/dashboard",rel:"noopener"}},[e._v("Dashboard")])]):e._e(),0==e.isLoggedIn?r("li",[r("a",{attrs:{href:"/register",rel:"noopener"}},[e._v("Sign Up")])]):e._e(),e.isLoggedIn?r("li",[r("a",{attrs:{href:"/",rel:"noopener"},on:{click:e.logout}},[e._v("Logout")])]):e._e()])])},o=[],c=r("1da1"),u=(r("96cf"),{name:"navbar",computed:{isLoggedIn:function(){return this.$store.getters.isAuthenticated},user:function(){return this.$store.getters.StateUser}},methods:{logout:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("LogOut");case 2:e.$router.push("/");case 3:case"end":return t.stop()}}),t)})))()}}}),l=u,d=(r("9ab7"),r("2877")),f=Object(d["a"])(l,i,o,!1,null,"7d9ed928",null),m=f.exports,p={name:"App",components:{navbar:m}},b=p,v=(r("034f"),Object(d["a"])(b,s,n,!1,null,null,null)),g=v.exports,h=r("8c4f"),w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("fileUpload",{on:{submittingRides:function(t){return e.ridesSubmitting(!0)},ridesSubmitted:function(t){return e.ridesSubmitting(!1)}}}),r("button",{on:{click:e.moveWeekBack}},[e._v("Back 1 Week")]),r("button",{on:{click:e.moveWeekForward}},[e._v("Forward 1 Week")]),e.submittingRides?r("div",{staticClass:"submitting",on:{submittingRides:function(t){return e.ridesSubmitting(!0)}}},[e._v("Submitting")]):e._e(),e._m(0),r("div",{staticClass:"calendar"},[e._l(e.days,(function(t){return r("div",{key:t.date,staticClass:"day"},[1==t.date.getDate()?r("div",[e._v(" "+e._s(t.date.getDate())+" "+e._s(t.date.toLocaleString("default",{month:"short"}))+" ")]):r("div",[e._v(" "+e._s(t.date.getDate())+" ")]),e._l(t.activities,(function(t){return r("div",{key:t.distance},[r("button",{staticClass:"rideButton",on:{click:function(r){e.fetchSingleRide(t.id),e.singleRideViewToggle(!0)}}}),r("p",[e._v("Dist: "+e._s(Math.round(t.distance))+"km")]),r("p",[e._v("NP: "+e._s(Math.round(t.np))+"w")]),r("p",[e._v("TSS: "+e._s(Math.round(t.tss)))])])}))],2)})),r("transition",{attrs:{name:"flip"}},[e.singleRideVisible?r("singleRideView",{attrs:{singleRideViewToggle:e.singleRideVisible,"selected-ride":e.selectedRide},on:{singleRideViewEvent:e.singleRideViewToggle,closeSingleView:function(t){return e.singleRideViewToggle(!1)}}}):e._e()],1)],2),e._m(1)],1)},j=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"weekdays"},[r("div",{staticClass:"weekday"},[e._v("Monday")]),r("div",{staticClass:"weekday"},[e._v("Tuesday")]),r("div",{staticClass:"weekday"},[e._v("Wednesday")]),r("div",{staticClass:"weekday"},[e._v("Thursday")]),r("div",{staticClass:"weekday"},[e._v("Friday")]),r("div",{staticClass:"weekday"},[e._v("Saturday")]),r("div",{staticClass:"weekday"},[e._v("Sunday")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._v("Icons made by "),r("a",{attrs:{href:"https://www.freepik.com",title:"Freepik"}},[e._v(" Freepik")]),e._v(" from "),r("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[e._v("www.flaticon.com")])])}],_=(r("159b"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"single-view"},[r("button",{on:{click:function(t){return e.singleRideViewClose()}}},[e._v("Close")]),r("h1",[e._v(e._s(e.selectedRide.data.date))]),r("button",{on:{click:function(t){return e.deleteRide(e.selectedRide.data.id)}}},[e._v("Delete")])])}),k=[],y={name:"singleRideView",props:{selectedRide:{type:Object}},data:function(){return{}},mounted:function(){},methods:{singleRideViewClose:function(){this.$emit("closeSingleView")},logData:function(){},deleteRide:function(){console.log("Send put request")}}},x=y,R=(r("b887"),Object(d["a"])(x,_,k,!1,null,null,null)),D=R.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"file"},[r("form",{ref:"uploadForm",attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[r("div",{staticClass:"fields"},[r("label",[e._v("Upload File")]),r("br"),r("input",{ref:"file",attrs:{type:"file",multiple:"multiple"},on:{change:e.onSelect}})]),e._m(0),r("div",{staticClass:"message"},[r("h5",[e._v(e._s(e.message))])])])])},O=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"fields"},[r("button",[e._v("Submit")])])}],S=r("bc3a"),$=r.n(S),E={name:"fileUpload",data:function(){return{file:"",message:""}},methods:{onSelect:function(){var e=this.$refs.file.files[0];this.file=e,console.log(e.type)},onSubmit:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,a,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(0!=e.$refs.file.files.length&&e.$emit("submittingRides"),r=new FormData,a=0;a<e.$refs.file.files.length;a++)s=e.$refs.file.files[a],r.append("files["+a+"]",s);return t.prev=3,t.next=6,$.a.post("/fileUpload",r,{headers:{"Content-Type":"multipart/form-data"}});case 6:n=t.sent,200==n.status&&(e.$emit("ridesSubmitted"),e.$refs.uploadForm.reset()),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](3),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})))()}}},L=E,N=Object(d["a"])(L,C,O,!1,null,null,null),P=N.exports,z={name:"calendar",components:{singleRideView:D,fileUpload:P},props:["selectedRide"],data:function(){return{days:[],view:null,singleRideVisible:!1,submittingRides:!1}},methods:{ridesSubmitting:function(e){console.log("Submitting event triggered: "+e),this.submittingRides=e},singleRideViewToggle:function(e){this.singleRideVisible=e},fetchSingleRide:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return console.log(e),r.next=3,$.a.get("/showRide/"+e).catch((function(e){console.log(e)}));case 3:t.selectedRide=r.sent;case 4:case"end":return r.stop()}}),r)})))()},fetchRides:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.abrupt("return",$.a.get("/showRides/"+e+"."+t).catch((function(e){console.log(e)})));case 1:case"end":return r.stop()}}),r)})))()},setInitialView:function(){this.view=new Date},moveWeekBack:function(){this.view.setDate(this.view.getDate()-7),this.assignDatesAndRides()},moveWeekForward:function(){this.view.setDate(this.view.getDate()+7),this.assignDatesAndRides()},assignDatesAndRides:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,a,s,n,i,o,c,u,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.days=[],null==e.view&&e.setInitialView(),t.t0=e.view.getDay(),t.next=1===t.t0?5:2===t.t0?7:3===t.t0?9:4===t.t0?11:5===t.t0?13:6===t.t0?15:0===t.t0?17:19;break;case 5:for(r=0;r<28;r++)a={date:new Date(e.view),activities:[]},a.date.setDate(e.view.getDate()+r-14),e.days.push(a);return t.abrupt("break",19);case 7:for(r=0;r<28;r++)s={date:new Date(e.view),activities:[]},s.date.setDate(e.view.getDate()+r-15),e.days.push(s);return t.abrupt("break",19);case 9:for(r=0;r<28;r++)n={date:new Date(e.view),activities:[]},n.date.setDate(e.view.getDate()+r-16),e.days.push(n);return t.abrupt("break",19);case 11:for(r=0;r<28;r++)i={date:new Date(e.view),activities:[]},i.date.setDate(e.view.getDate()+r-17),e.days.push(i);return t.abrupt("break",19);case 13:for(r=0;r<28;r++)o={date:new Date(e.view),activities:[]},o.date.setDate(e.view.getDate()+r-18),e.days.push(o);return t.abrupt("break",19);case 15:for(r=0;r<28;r++)c={date:new Date(e.view),activities:[]},c.date.setDate(e.view.getDate()+r-19),e.days.push(c);return t.abrupt("break",19);case 17:for(r=0;r<28;r++)u={date:new Date(e.view),activities:[]},u.date.setDate(e.view.getDate()+r-20),e.days.push(u);return t.abrupt("break",19);case 19:return t.prev=19,t.next=22,e.fetchRides(e.days[0].date.setHours(0,0),e.days[27].date+1);case 22:l=t.sent,null!=l.data&&(console.log(l),l.data.forEach((function(t){for(console.log(t),r=0;r<28;r++){var a=new Date(Date.parse(t.date));a.getDate()==e.days[r].date.getDate()&&e.days[r].activities.push(t)}}))),t.next=29;break;case 26:t.prev=26,t.t1=t["catch"](19),console.log(t.t1);case 29:case"end":return t.stop()}}),t,null,[[19,26]])})))()}},mounted:function(){this.assignDatesAndRides()}},U=z,V=(r("3c11"),Object(d["a"])(U,w,j,!1,null,null,null)),F=V.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.showError?r("p",{attrs:{id:"error"}},[e._v("Username or Password is incorrect")]):e._e(),r("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("label",[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("button",[e._v("Log in")])]),e._m(0)])},I=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Not registered?"),r("a",{attrs:{href:"/register"}},[e._v(" Sign Up")])])}],A=r("5530"),M=r("2f62"),W={name:"login",data:function(){return{username:"",password:"",showError:!1}},methods:Object(A["a"])(Object(A["a"])({},Object(M["b"])(["LogIn"])),{},{submit:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={username:e.username,password:e.password},t.prev=1,t.next=4,e.LogIn(r);case 4:if(a=t.sent,200!=a){t.next=10;break}e.$router.push("/calendar"),e.showError=!1,t.next=11;break;case 10:throw new Error("Login failed");case 11:t.next=18;break;case 13:t.prev=13,t.t0=t["catch"](1),console.log(t.t0),e.showError=!0,e.$router.push("/");case 18:case"end":return t.stop()}}),t,null,[[1,13]])})))()}})},B=W,q=Object(d["a"])(B,T,I,!1,null,null,null),G=q.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[r("h3",[e._v("Sign up")]),r("div",{staticClass:"form-group"},[r("label",[e._v("First Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.firstName,expression:"form.firstName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"First Name"},domProps:{value:e.form.firstName},on:{input:function(t){t.target.composing||e.$set(e.form,"firstName",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Last Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.lastName,expression:"form.lastName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Last Name"},domProps:{value:e.form.lastName},on:{input:function(t){t.target.composing||e.$set(e.form,"lastName",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("User Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.username,expression:"form.username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username"},domProps:{value:e.form.username},on:{input:function(t){t.target.composing||e.$set(e.form,"username",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.passwordConfirm,expression:"form.passwordConfirm"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm Password"},domProps:{value:e.form.passwordConfirm},on:{input:function(t){t.target.composing||e.$set(e.form,"passwordConfirm",t.target.value)}}})]),r("button",{attrs:{type:"submit"}},[e._v("Submit")])])},H=[],Z={name:"register",data:function(){return{form:{firstName:"",lastName:"",username:"",email:"",password:"",passwordConfirm:""},showError:!1}},methods:Object(A["a"])(Object(A["a"])({},Object(M["b"])(["Register"])),{},{submit:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.Register(e.form);case 3:if(r=t.sent,console.log(r),200!=r){t.next=10;break}e.$router.push("/calendar"),e.showError=!1,t.next=11;break;case 10:throw new Error;case 11:t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),e.showError=!0;case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()}})},K=Z,Q=Object(d["a"])(K,J,H,!1,null,null,null),X=Q.exports,Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("pmc")],1)},ee=[],te=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},re=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("canvas",{attrs:{id:"pmc"}})])}],ae=r("30ef"),se=r.n(ae),ne={name:"pmc",data:function(){return{pmcData:{type:"line",data:{labels:null,datasets:[{label:"CTL",data:null,backgroundColor:"rgba(54,73,93,.5)",borderColor:"#36495d",borderWidth:3}]},options:{responsive:!0,lineTension:1,scales:{yAxes:[{ticks:{beginAtZero:!0,padding:25}}]}}}}},computed:{user:function(){return this.$store.getters.StateUser}},methods:{fetchPmc:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,a,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=[],s=[],t.prev=2,t.next=5,$.a.get("/pmc/"+e.user);case 5:n=t.sent,n.data.forEach((function(e){r=new Date(e.date),console.log(r.toLocaleDateString("en-GB")),a.push(r.toLocaleDateString("en-GB")),s.push(e.ctl)})),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](2),console.log(t.t0);case 12:e.pmcData.data.labels=a,e.pmcData.data.datasets[0].data=s;case 14:case"end":return t.stop()}}),t,null,[[2,9]])})))()}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchPmc();case 2:r=document.getElementById("pmc"),new se.a(r,e.pmcData);case 4:case"end":return t.stop()}}),t)})))()}},ie=ne,oe=Object(d["a"])(ie,te,re,!1,null,null,null),ce=oe.exports,ue={name:"dashboard",components:{pmc:ce}},le=ue,de=Object(d["a"])(le,Y,ee,!1,null,null,null),fe=de.exports;a["a"].use(h["a"]);var me=new h["a"]({mode:"history",base:"/trainingapp-prod/",routes:[{path:"/",component:G},{path:"/calendar",component:F},{path:"/register",component:X},{path:"/dashboard",component:fe}]}),pe=r("2106"),be=r.n(pe);a["a"].use(be.a,$.a),$.a.defaults.baseURL="https://axios.trainingappserver.uk",$.a.defaults.withCredentials=!0;var ve=r("0e44"),ge=r("852e"),he=r.n(ge),we={user:null},je={isAuthenticated:function(e){return!!e.user},StateUser:function(e){return e.user}},_e={Register:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function r(){var a,s,n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.dispatch,s={username:t.username,password:t.password},r.prev=2,r.next=5,$.a.post("/register",t);case 5:if(n=r.sent,200!=n.status){r.next=14;break}return r.next=9,a("LogIn",s);case 9:if(i=r.sent,200!=i){r.next=12;break}return r.abrupt("return",200);case 12:r.next=15;break;case 14:throw new Error("Failed to register user");case 15:r.next=21;break;case 17:return r.prev=17,r.t0=r["catch"](2),console.log(r.t0),r.abrupt("return",401);case 21:case"end":return r.stop()}}),r,null,[[2,17]])})))()},LogIn:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function r(){var a,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e.commit,r.prev=1,r.next=4,$.a.post("/login",t);case 4:if(s=r.sent,console.log(s.status),200!=s.status){r.next=12;break}return console.log("Logged in, response status"+s.status),a("setUser",t.username),r.abrupt("return",200);case 12:throw new Error("Login failed");case 13:r.next=19;break;case 15:return r.prev=15,r.t0=r["catch"](1),console.log(r.t0),r.abrupt("return",401);case 19:case"end":return r.stop()}}),r,null,[[1,15]])})))()},LogOut:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,a=null,t.next=5,$.a.get("/logout");case 5:return t.next=7,r("LogOut",a);case 7:t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()}},ke={setUser:function(e,t){console.log(t),e.user=t},LogOut:function(e){e.user=null,he.a.remove("trainingApp")}},ye={state:we,getters:je,actions:_e,mutations:ke};a["a"].use(M["a"]);var xe=new M["a"].Store({modules:{auth:ye},plugins:[Object(ve["a"])()]});a["a"].config.productionTip=!1,new a["a"]({store:xe,router:me,render:function(e){return e(g)}}).$mount("#app")},"85ec":function(e,t,r){},"9ab7":function(e,t,r){"use strict";r("3c8a")},b887:function(e,t,r){"use strict";r("c789")},c789:function(e,t,r){}});
//# sourceMappingURL=app.4eeb03b7.js.map
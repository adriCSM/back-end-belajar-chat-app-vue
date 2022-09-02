(function(){"use strict";var t={6117:function(t,e,a){var s=a(144),r=function(){var t=this,e=t._self._c;return e("router-view")},o=[],n={name:"app",setup(){}},i=n,l=a(1001),c=(0,l.Z)(i,r,o,!1,null,null,null),u=c.exports,d=a(8864);s.ZP.use(d.Z);var p=new d.Z({}),m=a(8345),h=a(6190),f=a(9582),v=a(4886),g=a(266),Z=a(2118),w=a(9223),b=a(5125),_=a(1338),k=a(1713),y=a(8088),x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box",staticStyle:{"max-width":"300px"}},[e(f.Z,{staticClass:"mx-auto rounded-xl mt-6",attrs:{elevation:"23"}},[e(v.ZB,{staticClass:"text-center",attrs:{elevation:"12"}},[e(v.EB,{staticClass:"text-h4"},[t._v("Log In")])],1),e(w.Z,{attrs:{color:"black"}}),e(b.Z,{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e(Z.Z,[e(k.Z,[e(g.Z,{attrs:{cols:"12",sm:"12"}},[e(y.Z,{attrs:{type:"email",elevation:"12",label:"Email",solo:"",require:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),e(g.Z,{attrs:{cols:"12",sm:"12"}},[e(y.Z,{attrs:{"append-icon":t.show?"mdi-eye":"mdi-eye-off",type:t.show?"text":"password",label:"Password",solo:"",required:""},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),e(k.Z,[e(g.Z,[e(_.Z,{scopedSlots:t._u([{key:"default",fn:function({isHovering:a,props:s}){return[e(h.Z,t._b({attrs:{type:"submit",rounded:"",color:"primary",dark:"",elevation:a?12:2}},"v-btn",s,!1),[t._v(" Log In ")])]}}])})],1),e(g.Z,[e(_.Z,{scopedSlots:t._u([{key:"default",fn:function({isHovering:a,props:s}){return[e("router-link",t._b({staticStyle:{"text-decoration":"none"},attrs:{to:"/registrasi",elevation:a?12:2}},"router-link",s,!1),[t._v("Registrasi ")])]}}])})],1)],1)],1)],1)],1)],1)},C=[],S=a(9669),H=a.n(S),P={setup(){const t=(0,s.iH)(!1),e=(0,s.iH)(""),a=(0,s.iH)(""),r=async()=>{await H().post("/api/login",{email:e.value,password:a.value}).then((t=>{localStorage.setItem("token",t.data.token),localStorage.setItem("email",t.data.email),ht.push({name:"chat"})})).catch((t=>{console.log(t.message)}))};return{email:e,password:a,show:t,submit:r}}},I=P,O=(0,l.Z)(I,x,C,!1,null,"6e2ef6ab",null),B=O.exports,j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box",staticStyle:{"max-width":"350px"}},[e(f.Z,{staticClass:"mx-auto",attrs:{elevation:"23"}},[e(v.ZB,{staticClass:"text-center",attrs:{elevation:"12"}},[e(v.EB,{staticClass:"text-h4"},[t._v("Registrasi")])],1),e(w.Z,{attrs:{color:"black"}}),e(b.Z,{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e(Z.Z,[e(k.Z,[e(g.Z,{attrs:{cols:"12",sm:"12"}},[e(y.Z,{attrs:{elevation:"12",label:"Username",solo:"",require:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),e(g.Z,{attrs:{cols:"12",sm:"12"}},[e(y.Z,{attrs:{elevation:"12",label:"Email",solo:"",require:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),e(g.Z,{attrs:{cols:"12",sm:"12"}},[e(y.Z,{attrs:{"append-icon":t.show1?"mdi-eye":"mdi-eye-off",type:t.show1?"text":"password",label:"Password",solo:"",required:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),e(g.Z,{attrs:{cols:"12",sm:"12"}},[e(y.Z,{attrs:{"append-icon":t.show?"mdi-eye":"mdi-eye-off",type:t.show?"text":"password",rules:[t.rules.match],label:"Confirm Password",solo:"",required:""},on:{"click:append":function(e){t.show=!t.show}}})],1)],1),e(k.Z,{staticClass:"pb-4 mt-0"},[e(g.Z,[e(_.Z,{scopedSlots:t._u([{key:"default",fn:function({isHovering:a,props:s}){return[e(h.Z,t._b({attrs:{elevation:a?12:2,type:"submit",color:"primary",dark:""}},"v-btn",s,!1),[t._v(" Registrasi ")])]}}])})],1),e(g.Z,[e(_.Z,{scopedSlots:t._u([{key:"default",fn:function({isHovering:a,props:s}){return[e("router-link",t._b({staticClass:"pt-3",staticStyle:{"text-decoration":"none"},attrs:{to:"/",elevation:a?12:2}},"router-link",s,!1),[e("i",{staticClass:"bi bi-chevron-double-left"}),t._v(" Back to Log In ")])]}}])})],1)],1)],1)],1)],1)],1)},E=[],z={setup(){const t=(0,s.iH)(!1),e=(0,s.iH)(!1),a=(0,s.iH)(""),r=(0,s.iH)(""),o=(0,s.iH)(""),n=(0,s.iH)({match:t=>t==o.value||"Password dan Confirm password tidak cocok"}),i=async()=>{await H().post("/api/registrasi",{name:a.value,email:r.value,password:o.value}).then((()=>{ht.push({name:"login"})}))};return{password:o,username:a,email:r,show:t,show1:e,rules:n,submit:i}}},q=z,A=(0,l.Z)(q,j,E,!1,null,"189c7726",null),M=A.exports,V=a(998),L=a(6843),R=a(5550),T=a(1625),U=a(5808),D=a(4525),F=a(5187),$=a(6900),N=a(347),G=a(3059),J=a(6975),K=a(9422),Q=a(7423),W=a(3687),X=function(){var t=this,e=t._self._c;return e(V.Z,{attrs:{id:"inspire"}},[e(L.Z,{attrs:{app:"","clipped-right":"",flat:"",height:"72",color:"blue darken-4"}},[e(R.Z,{attrs:{color:"white"},on:{click:function(e){t.drawer=!t.drawer}}}),e(W.Z),e(K.Z,{attrs:{"max-width":"156"}},[e(y.Z,{staticClass:"bg-white",attrs:{dense:"",flat:"","hide-details":"",rounded:"","solo-inverted":""}})],1),e("div",{staticClass:"me-5"},[e(h.Z,{attrs:{color:"error",dark:"",small:""},on:{click:t.logout}},[t._v(" Log Out ")])],1)],1),e(J.Z,{attrs:{app:"",width:"300"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(Q.Z,{staticClass:"mb-6",attrs:{color:"grey lighten-5",height:"128",width:"100%"}},[e(U.Z,[e(D.Z,[e($.Z,[e(T.Z,{attrs:{src:t.user.pic}})],1)],1),e(D.Z,{attrs:{link:""}},[e(N.km,[e(N.V9,{staticClass:"text-h6"},[t._v(" "+t._s(t.user.name)+" ")]),e(N.oZ,[t._v(t._s(t.user.email))])],1),e(F.Z)],1)],1)],1),t._l(t.allUser,(function(a,s){return e(U.Z,{key:s,staticClass:"pl-0 pt-0",on:{click:function(e){return t.klik(a._id)}}},[e("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"chat"}}},[a.email!==t.user.email?e(D.Z,{attrs:{link:""},on:{click:function(e){return t.klik(a._id)}}},[e($.Z,[e(T.Z,{attrs:{src:a.pic}})],1),e(N.km,[e(N.V9,{attrs:{color:"white"}},[t._v(" "+t._s(a.name)+" ")]),e(N.oZ,[t._v(" "+t._s(a.email)+" ")])],1)],1):t._e()],1)],1)}))],2),e(J.Z,{staticClass:"a",attrs:{app:"",clipped:"",right:"",color:"white"}},[e(U.Z,{attrs:{color:"traansparant"}},t._l(5,(function(a){return e(D.Z,{key:a,attrs:{link:""}},[e(N.km,[e(N.V9,[t._v("Item "+t._s(a)+" ")])],1)],1)})),1)],1),e(G.Z,[e("router-view",[t._v(" Pesan")])],1)],1)},Y=[],tt=a(3423),et=a(8271),at=function(){var t=this,e=t._self._c;return e("div",[e(f.Z,{directives:[{name:"chat-scroll",rawName:"v-chat-scroll"}],staticClass:"overflow-y-auto pb-7 card1 messages"},t._l(t.allPesan,(function(a,s){return e(U.Z,{key:s},[a.pengirim.email!=t.Email&&a.chat._id==t.idChat?e(D.Z,[e(k.Z,{staticClass:"me-1 mt-3"},[e(g.Z,{staticClass:"kiri",attrs:{cols:"1"}},[e(tt.Z,[e(T.Z,{attrs:{src:a.pengirim.pic}})],1)],1),e(g.Z,{staticClass:"pt-3 bable-Chat"},[e(k.Z,{staticClass:"mt-3",attrs:{elavation:"19"}},[e("span",{staticClass:"_1kh65 pt-4",attrs:{"data-testid":"tail-in","data-icon":"tail-in"}},[e("svg",{attrs:{viewBox:"0 0 7 50",width:"7",height:"40"}},[e("path",{attrs:{fill:"#ffffff",d:"M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"}})])]),a.content.length>37?e(g.Z,{staticStyle:{"background-color":"white"},attrs:{cols:"11 bg-white mt-4 rounded-xl rounded-tl-0 pt-1 "}},[e("h5",{staticClass:"pt-3 pb-2",staticStyle:{color:"orange"}},[t._v(" "+t._s(a.pengirim.name)+" ")]),e("div",[t._v(" "+t._s(a.content)+" "),e("span",{staticClass:"d-flex flex-row-reverse text-caption text-grey",attrs:{dir:"auto"}},[t._v(t._s(a.waktu))])])]):t._e(),a.content.length<=37?e(g.Z,{staticStyle:{"background-color":"white"},attrs:{cols:"auto bg-white mt-4 rounded-xl rounded-tl-0 pt-1 "}},[e("h5",{staticClass:"pt-3 pb-2",staticStyle:{color:"orange"}},[t._v(" "+t._s(a.pengirim.name)+" ")]),e("div",[t._v(" "+t._s(a.content)+" "),e("span",{staticClass:"d-flex flex-row-reverse text-caption text-grey ps-10",attrs:{dir:"auto"}},[t._v(t._s(a.waktu))])])]):t._e()],1)],1)],1)],1):t._e(),a.pengirim.email==t.Email&&a.chat._id==t.idChat?e(D.Z,{staticStyle:{"padding-right":"0"}},[e(k.Z,{staticClass:"me-10 mt-3 d-flex flex-row-reverse"},[e(g.Z,{attrs:{cols:"1"}},[e(tt.Z,[e(T.Z,{attrs:{src:a.pengirim.pic}})],1)],1),e(g.Z,{staticClass:"pt-3 bable-Chat2"},[e(k.Z,{staticClass:"m-1 mt-3 d-flex flex-row-reverse pe-2"},[e("span",{staticClass:"_1kh65 pt-4 icon",attrs:{"data-testid":"tail-in","data-icon":"tail-in"}},[e("svg",{attrs:{viewBox:"0 0 7 50",width:"7",height:"40"}},[e("path",{attrs:{fill:"#90CAF9",d:"M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"}})])]),a.content.length>37?e(g.Z,{staticStyle:{"background-color":"#90caf9"},attrs:{cols:"11 bg-white mt-4 rounded-xl rounded-tr-0 pt-1 "}},[e("h5",{staticClass:"d-flex flex-row-reverse"},[t._v(" "+t._s(a.pengirim.name)+" ")]),e("div",[t._v(" "+t._s(a.content)+" "),e("span",{staticClass:"d-flex flex-row-reverse text-caption text-grey ps-10",attrs:{dir:"auto"}},[t._v(t._s(a.waktu))])])]):t._e(),a.content.length<=37?e(g.Z,{staticStyle:{"background-color":"#90caf9"},attrs:{cols:"auto bg-white mt-4 rounded-xl rounded-tr-0 pt-1",elavation:"19"}},[e("h5",{staticClass:"d-flex flex-row-reverse"},[t._v(" "+t._s(a.pengirim.name)+" ")]),e("div",[t._v(" "+t._s(a.content)+" "),e("span",{staticClass:"d-flex flex-row-reverse text-caption text-grey ps-10",attrs:{dir:"auto"}},[t._v(t._s(a.waktu)+" ")])])]):t._e()],1)],1)],1)],1):t._e()],1)})),1),e(b.Z,{on:{submit:function(e){return e.preventDefault(),t.submitHandler.apply(null,arguments)}}},[e(et.Z,{staticStyle:{position:"fixed"},attrs:{app:"",color:"#90CAF9",height:"72",inset:""}},[e(k.Z,[e(g.Z,{staticClass:"adri",staticStyle:{"padding-right":"0 0 0 0 0"},attrs:{cols:"1"}},[e("button",[e("span",{staticClass:"material-symbols-rounded mt-2"},[t._v(" attach_file ")])])]),e(g.Z,{attrs:{cols:"9"}},[e(y.Z,{attrs:{"background-color":"white",dense:"",flat:"","hide-details":"",rounded:"",solo:"",color:"deep-orange lighten-5"},model:{value:t.pesan,callback:function(e){t.pesan=e},expression:"pesan"}})],1),e(g.Z,{attrs:{cols:"1 pl-0 ml-0"}},[e("button",{attrs:{size:"small",type:"submit","background-color":"white"}},[e("span",{staticClass:"material-symbols-rounded kirim"},[t._v(" send ")])])])],1)],1)],1)],1)},st=[],rt=a(9367),ot={setup(){const t=(0,rt.ZP)("/"),e=(0,s.iH)(localStorage.getItem("email")),a=(0,s.iH)(),r=(0,s.iH)([]),o=(0,s.iH)(ht.currentRoute.params.idChat);(0,s.bv)((async()=>{await H().get(`/api/allPesan/?chatId=${o.value}`,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((t=>{t.data.allMessage.map((t=>{r.value.push(t)}))})).catch((t=>{console.log(t.message)}))}));const n=async()=>{await H().post("/api/sendPesan",{content:a.value,chatId:o.value},{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((e=>{r.value.push(e.data),t.emit("kirim-pesan",e.data)})).catch((t=>{console.log(t.message)})),a.value=""};return t.on("pesan",(t=>{r.value.push(t)})),{idChat:o,pesan:a,allPesan:r,submitHandler:n,Email:e}}},nt=ot,it=(0,l.Z)(nt,at,st,!1,null,"5fea1d08",null),lt=it.exports,ct={component:lt,setup(){const t=(0,s.iH)(null),e=localStorage.getItem("token"),a=(0,s.iH)(""),r=(0,s.iH)("");null==e&&ht.push({name:"login"}),(0,s.bv)((async()=>{await H().get("/api/allUser",{headers:{Authorization:"Bearer "+e}}).then((async t=>{a.value=t.data.user,r.value=t.data.users})).catch((t=>{console.log(t.message)}))}));const o=async t=>{await H().post("/api/chat",{userId:t},{headers:{Authorization:"Bearer "+e}}).then((t=>{ht.push({name:"pesan",params:{idChat:t.data.chat._id}})})).catch((t=>{console.log(t.message)}))},n=()=>{localStorage.removeItem("token"),localStorage.removeItem("email"),ht.push({name:"login"})};return{logout:n,drawer:t,user:a,allUser:r,klik:o,token:e}}},ut=ct,dt=(0,l.Z)(ut,X,Y,!1,null,"427483a5",null),pt=dt.exports;s.ZP.use(m.ZP);const mt=new m.ZP({mode:"history",routes:[{path:"/chat",name:"chat",component:pt,children:[{path:"/chat/:idChat",name:"pesan",component:lt}]},{path:"/registrasi",name:"registrasi",component:M},{path:"/",name:"login",component:B}]});var ht=mt,ft=a(1908),vt=a.n(ft);s.ZP.use(vt()),new s.ZP({router:ht,vuetify:p,render:t=>t(u)}).$mount("#app")}},e={};function a(s){var r=e[s];if(void 0!==r)return r.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,s,r,o){if(!s){var n=1/0;for(u=0;u<t.length;u++){s=t[u][0],r=t[u][1],o=t[u][2];for(var i=!0,l=0;l<s.length;l++)(!1&o||n>=o)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(i=!1,o<n&&(n=o));if(i){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[s,r,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,o,n=s[0],i=s[1],l=s[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(l)var u=l(a)}for(e&&e(s);c<n.length;c++)o=n[c],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(u)},s=self["webpackChunkclients"]=self["webpackChunkclients"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(6117)}));s=a.O(s)})();
//# sourceMappingURL=app.c8e0dbca.js.map
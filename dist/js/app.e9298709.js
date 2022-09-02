(function(){"use strict";var t={117:function(t,e,a){var s=a(144),o=function(){var t=this,e=t._self._c;return e("router-view")},r=[],n={name:"app",setup(){}},i=n,l=a(1001),c=(0,l.Z)(i,o,r,!1,null,null,null),u=c.exports,d=a(8864);s.ZP.use(d.Z);var p=new d.Z({}),m=a(8345),h=a(6190),f=a(9582),v=a(4886),g=a(266),Z=a(2118),w=a(9223),b=a(5125),_=a(1338),k=a(1713),x=a(8088),y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box",staticStyle:{"max-width":"300px"}},[e(f.Z,{staticClass:"mx-auto rounded-xl mt-6",attrs:{elevation:"23"}},[e(v.ZB,{staticClass:"text-center",attrs:{elevation:"12"}},[e(v.EB,{staticClass:"text-h4"},[t._v("Log In")])],1),e(w.Z,{attrs:{color:"black"}}),e(b.Z,{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e(Z.Z,[e(k.Z,[e(g.Z,{attrs:{cols:"12",sm:"12"}},[e(x.Z,{attrs:{type:"email",elevation:"12",label:"Email",solo:"",require:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),e(g.Z,{attrs:{cols:"12",sm:"12"}},[e(x.Z,{attrs:{"append-icon":t.show?"mdi-eye":"mdi-eye-off",type:t.show?"text":"password",label:"Password",solo:"",required:""},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),e(k.Z,[e(g.Z,[e(_.Z,{scopedSlots:t._u([{key:"default",fn:function({isHovering:a,props:s}){return[e(h.Z,t._b({attrs:{type:"submit",rounded:"",color:"primary",dark:"",elevation:a?12:2}},"v-btn",s,!1),[t._v(" Log In ")])]}}])})],1),e(g.Z,[e(_.Z,{scopedSlots:t._u([{key:"default",fn:function({isHovering:a,props:s}){return[e("router-link",t._b({staticStyle:{"text-decoration":"none"},attrs:{to:"/registrasi",elevation:a?12:2}},"router-link",s,!1),[t._v("Registrasi ")])]}}])})],1)],1)],1)],1)],1)],1)},C=[],S=a(9669),H=a.n(S),P={setup(){const t=(0,s.iH)(!1),e=(0,s.iH)(""),a=(0,s.iH)(""),o=async()=>{await H().post("/api/login",{email:e.value,password:a.value}).then((t=>{localStorage.setItem("token",t.data.token),localStorage.setItem("email",t.data.email),ht.push({name:"chat"})})).catch((t=>{console.log(t.message)}))};return{email:e,password:a,show:t,submit:o}}},I=P,O=(0,l.Z)(I,y,C,!1,null,"f13e3ca6",null),B=O.exports,j=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box",staticStyle:{"max-width":"350px"}},[e(f.Z,{staticClass:"mx-auto",attrs:{elevation:"23"}},[e(v.ZB,{staticClass:"text-center",attrs:{elevation:"12"}},[e(v.EB,{staticClass:"text-h4"},[t._v("Registrasi")])],1),e(w.Z,{attrs:{color:"black"}}),e(b.Z,{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e(Z.Z,[e(k.Z,[e(g.Z,{attrs:{cols:"12",sm:"12"}},[e(x.Z,{attrs:{elevation:"12",label:"Username",solo:"",require:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),e(g.Z,{attrs:{cols:"12",sm:"12"}},[e(x.Z,{attrs:{elevation:"12",label:"Email",solo:"",require:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),e(g.Z,{attrs:{cols:"12",sm:"12"}},[e(x.Z,{attrs:{"append-icon":t.show1?"mdi-eye":"mdi-eye-off",type:t.show1?"text":"password",label:"Password",solo:"",required:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),e(g.Z,{attrs:{cols:"12",sm:"12"}},[e(x.Z,{attrs:{"append-icon":t.show?"mdi-eye":"mdi-eye-off",type:t.show?"text":"password",rules:[t.rules.match],label:"Confirm Password",solo:"",required:""},on:{"click:append":function(e){t.show=!t.show}}})],1)],1),e(k.Z,{staticClass:"pb-4 mt-0"},[e(g.Z,[e(_.Z,{scopedSlots:t._u([{key:"default",fn:function({isHovering:a,props:s}){return[e(h.Z,t._b({attrs:{elevation:a?12:2,type:"submit",color:"primary",dark:""}},"v-btn",s,!1),[t._v(" Registrasi ")])]}}])})],1),e(g.Z,[e(_.Z,{scopedSlots:t._u([{key:"default",fn:function({isHovering:a,props:s}){return[e("router-link",t._b({staticClass:"pt-3",staticStyle:{"text-decoration":"none"},attrs:{to:"/",elevation:a?12:2}},"router-link",s,!1),[e("i",{staticClass:"bi bi-chevron-double-left"}),t._v(" Back to Log In ")])]}}])})],1)],1)],1)],1)],1)],1)},z=[],M={setup(){const t=(0,s.iH)(!1),e=(0,s.iH)(!1),a=(0,s.iH)(""),o=(0,s.iH)(""),r=(0,s.iH)(""),n=(0,s.iH)({match:t=>t==r.value||"Password dan Confirm password tidak cocok"}),i=async()=>{await H().post("/api/registrasi",{name:a.value,email:o.value,password:r.value}).then((()=>{ht.push({name:"login"})}))};return{password:r,username:a,email:o,show:t,show1:e,rules:n,submit:i}}},q=M,A=(0,l.Z)(q,j,z,!1,null,"189c7726",null),D=A.exports,E=a(998),V=a(6843),L=a(5550),R=a(1625),T=a(5808),U=a(4525),$=a(5187),F=a(6900),N=a(347),G=a(3059),J=a(6975),K=a(9422),Q=a(7423),W=a(3687),X=function(){var t=this,e=t._self._c;return e(E.Z,{attrs:{id:"inspire"}},[e(V.Z,{attrs:{app:"","clipped-right":"",flat:"",height:"72",color:"blue darken-4"}},[e(L.Z,{attrs:{color:"white"},on:{click:function(e){t.drawer=!t.drawer}}}),e(W.Z),e(K.Z,{attrs:{"max-width":"156"}},[e(x.Z,{staticClass:"bg-white",attrs:{dense:"",flat:"","hide-details":"",rounded:"","solo-inverted":""}})],1),e("div",{staticClass:"my-2 mx-5 pe-5"},[e(h.Z,{attrs:{color:"error",dark:"",small:""},on:{click:t.logout}},[t._v(" Log Out ")])],1)],1),e(J.Z,{attrs:{app:"",width:"300"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(Q.Z,{staticClass:"mb-6",attrs:{color:"grey lighten-5",height:"128",width:"100%"}},[e(T.Z,[e(U.Z,[e(F.Z,[e(R.Z,{attrs:{src:a(9306)}})],1)],1),e(U.Z,{attrs:{link:""}},[e(N.km,[e(N.V9,{staticClass:"text-h6"},[t._v(" "+t._s(t.user.name)+" ")]),e(N.oZ,[t._v(t._s(t.user.email))])],1),e($.Z)],1)],1)],1),t._l(t.allUser,(function(s,o){return e(T.Z,{key:o,staticClass:"pl-0 pt-0",on:{click:function(e){return t.klik(s._id)}}},[e("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:{name:"chat"}}},[s.email!==t.user.email?e(U.Z,{attrs:{link:""},on:{click:function(e){return t.klik(s._id)}}},[e(F.Z,[e(R.Z,{attrs:{src:a(9306)}})],1),e(N.km,[e(N.V9,{attrs:{color:"white"}},[t._v(" "+t._s(s.name)+" ")]),e(N.oZ,[t._v(" "+t._s(s.email)+" ")])],1)],1):t._e()],1)],1)}))],2),e(J.Z,{staticClass:"a",attrs:{app:"",clipped:"",right:"",color:"white"}},[e(T.Z,{attrs:{color:"traansparant"}},t._l(5,(function(a){return e(U.Z,{key:a,attrs:{link:""}},[e(N.km,[e(N.V9,[t._v("Item "+t._s(a)+" ")])],1)],1)})),1)],1),e(G.Z,[e("router-view",[t._v(" Pesan")])],1)],1)},Y=[],tt=a(3423),et=a(8271),at=function(){var t=this,e=t._self._c;return e("div",[e(f.Z,{directives:[{name:"chat-scroll",rawName:"v-chat-scroll"}],staticClass:"overflow-y-auto pb-7 card1 messages"},t._l(t.allPesan,(function(s,o){return e(T.Z,{key:o},[s.pengirim.email!=t.email&&s.chat._id==t.idChat?e(U.Z,{staticClass:"kiri"},[e(k.Z,{staticClass:"me-1 mt-3"},[e(g.Z,{attrs:{cols:"1"}},[e(tt.Z,[e(R.Z,{attrs:{src:s.pengirim.pic}})],1)],1),e(g.Z,{staticClass:"pt-3 bable-Chat"},[e(k.Z,{staticClass:"mt-3",attrs:{elavation:"19"}},[e("span",{staticClass:"_1kh65 pt-4",attrs:{"data-testid":"tail-in","data-icon":"tail-in"}},[e("svg",{attrs:{viewBox:"0 0 7 50",width:"7",height:"40"}},[e("path",{attrs:{fill:"#ffffff",d:"M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"}})])]),s.content.length>37?e(g.Z,{staticStyle:{"background-color":"white"},attrs:{cols:"11 bg-white mt-4 rounded-xl rounded-tl-0 pt-1 "}},[e("h5",{staticClass:"pt-3 pb-2",staticStyle:{color:"orange"}},[t._v(" "+t._s(s.pengirim.name)+" ")]),e("div",[t._v(" "+t._s(s.content)+" "),e("span",{staticClass:"d-flex flex-row-reverse text-caption text-grey",attrs:{dir:"auto"}},[t._v(t._s(s.waktu))])])]):t._e(),s.content.length<=37?e(g.Z,{staticStyle:{"background-color":"white"},attrs:{cols:"auto bg-white mt-4 rounded-xl rounded-tl-0 pt-1 "}},[e("h5",{staticClass:"pt-3 pb-2",staticStyle:{color:"orange"}},[t._v(" "+t._s(s.pengirim.name)+" ")]),e("div",[t._v(" "+t._s(s.content)+" "),e("span",{staticClass:"d-flex flex-row-reverse text-caption text-grey ps-10",attrs:{dir:"auto"}},[t._v(t._s(s.waktu))])])]):t._e()],1)],1)],1)],1):t._e(),s.pengirim.email==t.email&&s.chat._id==t.idChat?e(U.Z,{staticStyle:{"padding-right":"0"}},[e(k.Z,{staticClass:"me-10 mt-3 d-flex flex-row-reverse"},[e(g.Z,{attrs:{cols:"1"}},[e(tt.Z,[e(R.Z,{attrs:{src:a(9306)}})],1)],1),e(g.Z,{staticClass:"pt-3 bable-Chat2"},[e(k.Z,{staticClass:"m-1 mt-3 d-flex flex-row-reverse pe-2"},[e("span",{staticClass:"_1kh65 pt-4 icon",attrs:{"data-testid":"tail-in","data-icon":"tail-in"}},[e("svg",{attrs:{viewBox:"0 0 7 50",width:"7",height:"40"}},[e("path",{attrs:{fill:"#90CAF9",d:"M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"}})])]),s.content.length>37?e(g.Z,{staticStyle:{"background-color":"#90caf9"},attrs:{cols:"11 bg-white mt-4 rounded-xl rounded-tr-0 pt-1 "}},[e("h5",{staticClass:"d-flex flex-row-reverse"},[t._v(" "+t._s(s.pengirim.name)+" ")]),e("div",[t._v(" "+t._s(s.content)+" "),e("span",{staticClass:"d-flex flex-row-reverse text-caption text-grey ps-10",attrs:{dir:"auto"}},[t._v(t._s(s.waktu))])])]):t._e(),s.content.length<=37?e(g.Z,{staticStyle:{"background-color":"#90caf9"},attrs:{cols:"auto bg-white mt-4 rounded-xl rounded-tr-0 pt-1",elavation:"19"}},[e("h5",{staticClass:"d-flex flex-row-reverse"},[t._v(" "+t._s(s.pengirim.name)+" ")]),e("div",[t._v(" "+t._s(s.content)+" "),e("span",{staticClass:"d-flex flex-row-reverse text-caption text-grey ps-10",attrs:{dir:"auto"}},[t._v(t._s(s.waktu)+" ")])])]):t._e()],1)],1)],1)],1):t._e()],1)})),1),e(b.Z,{on:{submit:function(e){return e.preventDefault(),t.submitHandler.apply(null,arguments)}}},[e(et.Z,{staticStyle:{position:"fixed"},attrs:{app:"",color:"#90CAF9",height:"72",inset:""}},[e("button",[e("span",{staticClass:"material-symbols-rounded mt-2 pl-1"},[t._v(" attach_file ")])]),e(x.Z,{attrs:{"background-color":"white",dense:"",flat:"","hide-details":"",rounded:"",solo:"",color:"deep-orange lighten-5"},model:{value:t.pesan,callback:function(e){t.pesan=e},expression:"pesan"}}),e("button",{staticClass:"ms-2",attrs:{size:"small",type:"submit","background-color":"white"}},[e("span",{staticClass:"material-symbols-rounded kirim mt-2"},[t._v(" send ")])])],1)],1)],1)},st=[],ot=a(9367),rt={setup(){const t=(0,ot.ZP)("http://localhost:3000"),e=localStorage.getItem("email"),a=(0,s.iH)(),o=(0,s.iH)([]),r=(0,s.iH)(ht.currentRoute.params.idChat);(0,s.bv)((async()=>{console.log(),await H().get(`/api/allPesan/?chatId=${r.value}`,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((t=>{t.data.allMessage.map((t=>{o.value.push(t)}))})).catch((t=>{console.log(t.message)}))}));const n=(0,s.iH)((new Date).getHours()+1),i=(0,s.iH)((new Date).getMinutes()),l=async()=>{25==n.value&&(n.value=1),await H().post("/api/sendPesan",{content:a.value,chatId:r.value,waktu:`${n.value}:${i.value}`},{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((e=>{o.value.push(e.data),t.emit("kirim-pesan",e.data)})).catch((t=>{console.log(t.message)})),a.value=""};return t.on("pesan",(t=>{console.log("adri"),o.value.push(t)})),{idChat:r,pesan:a,allPesan:o,submitHandler:l,email:e}}},nt=rt,it=(0,l.Z)(nt,at,st,!1,null,"0ff890f3",null),lt=it.exports,ct={component:lt,setup(){const t=(0,s.iH)(null),e=localStorage.getItem("token"),a=(0,s.iH)(""),o=(0,s.iH)("");null==e&&ht.push({name:"login"}),(0,s.bv)((async()=>{await H().get("/api/allUser",{headers:{Authorization:"Bearer "+e}}).then((t=>{a.value=t.data.user,o.value=t.data.users})).catch((t=>{console.log(t.message)}))}));const r=async t=>{await H().post("/api/chat",{userId:t},{headers:{Authorization:"Bearer "+e}}).then((t=>{ht.push({name:"pesan",params:{idChat:t.data.chat._id}})})).catch((t=>{console.log(t.message)}))},n=()=>{localStorage.removeItem("token"),localStorage.removeItem("email"),ht.push({name:"login"})};return{logout:n,drawer:t,user:a,allUser:o,klik:r,token:e}}},ut=ct,dt=(0,l.Z)(ut,X,Y,!1,null,"0b42d06f",null),pt=dt.exports;s.ZP.use(m.ZP);const mt=new m.ZP({mode:"history",routes:[{path:"/chat",name:"chat",component:pt,children:[{path:"/chat/:idChat",name:"pesan",component:lt}]},{path:"/registrasi",name:"registrasi",component:D},{path:"/",name:"login",component:B}]});var ht=mt,ft=a(1908),vt=a.n(ft);s.ZP.use(vt()),new s.ZP({router:ht,vuetify:p,render:t=>t(u)}).$mount("#app")},9306:function(t,e,a){t.exports=a.p+"img/109715820.1a3255df.jpg"}},e={};function a(s){var o=e[s];if(void 0!==o)return o.exports;var r=e[s]={exports:{}};return t[s].call(r.exports,r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,s,o,r){if(!s){var n=1/0;for(u=0;u<t.length;u++){s=t[u][0],o=t[u][1],r=t[u][2];for(var i=!0,l=0;l<s.length;l++)(!1&r||n>=r)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(i=!1,r<n&&(n=r));if(i){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[s,o,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,r,n=s[0],i=s[1],l=s[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(l)var u=l(a)}for(e&&e(s);c<n.length;c++)r=n[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},s=self["webpackChunkclients"]=self["webpackChunkclients"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(117)}));s=a.O(s)})();
//# sourceMappingURL=app.e9298709.js.map
(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{129:function(e,t,n){},316:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(28),i=n.n(r),s=(n(129),n(49)),o=n(6),u=n(30),h=n(29),p=(n(130),h.a.initializeApp({apiKey:"AIzaSyCOxPnVevku-ReNkqcivhbjwd-y6uHkKNQ",authDomain:"complichat-e119f.firebaseapp.com",projectId:"complichat-e119f",storageBucket:"complichat-e119f.appspot.com",messagingSenderId:"421367043436",appId:"1:421367043436:web:7f04a2130446f3905d4f49"}).auth()),j=n(3),d=a.a.createContext(),b=function(e){var t=e.children,n=Object(c.useState)(!0),a=Object(u.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(null),h=Object(u.a)(s,2),b=h[0],l=h[1],f=Object(o.f)();Object(c.useEffect)((function(){p.onAuthStateChanged((function(e){l(e),i(!1),e&&f.push("./chats")}))}),[b,f]);var O={user:b};return Object(j.jsx)(d.Provider,{value:O,children:!r&&t})},l=n(31),f=n.n(l),O=n(72),m=n(123),x=n(5),g=n.n(x),v=function(){var e=Object(o.f)(),t=Object(c.useContext)(d).user,n=Object(c.useState)(!0),a=Object(u.a)(n,2),r=a[0],i=a[1],s=function(){var t=Object(O.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.signOut();case 2:e.push("/");case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var e=Object(O.a)(f.a.mark((function e(t){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.blob();case 5:return c=e.sent,e.abrupt("return",new File([c],"userPhoto.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){t?g.a.get("https://api.chatengine.io/users/me/",{headers:{"project-id":"3ae70b0f-27b1-4d20-8777-476ecc2100ae","user-name":t.email,"user-secret":t.uid}}).then((function(){return i(!1)})).catch((function(){var e=new FormData;e.append("email",t.email),e.append("username",t.email),e.append("secret",t.uid),h(t.photoURL).then((function(t){e.append("avatar",t,t.name),g.a.post("https://api.chatengine.io/users/",e,{headers:{"private-key":"0a29230d-6d88-4924-951b-c6101ca5f4bc"}}).then((function(){return i(!1)})).catch((function(e){return console.log(e)}))}))})):e.push("/")}),[t,e]),!t||r?"Loading...":Object(j.jsxs)("div",{className:"chats-page",children:[Object(j.jsxs)("div",{className:"nav-bar",children:[Object(j.jsx)("div",{className:"logo-tab",children:"CompliChat"}),Object(j.jsx)("div",{className:"logout-tab",onClick:s,children:"Logout"})]}),Object(j.jsx)(m.d,{height:"calc(100vh - 66px)",projectID:"3ae70b0f-27b1-4d20-8777-476ecc2100ae",userName:t.email,userSecret:t.uid})]})},k=n(318),w=n(319),y=function(){return Object(j.jsx)("div",{id:"login-page",children:Object(j.jsxs)("div",{id:"login-card",children:[Object(j.jsx)("h2",{children:"Welcome to Complichat !"}),Object(j.jsxs)("div",{className:"login-button google",onClick:function(){return p.signInWithRedirect(new h.a.auth.GoogleAuthProvider)},children:[Object(j.jsx)(k.a,{})," Sign In with Google"]}),Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"login-button facebook",onClick:function(){return p.signInWithRedirect(new h.a.auth.FacebookAuthProvider)},children:[Object(j.jsx)(w.a,{})," Sign In with Facebook"]})]})})};var C=function(){return Object(j.jsx)("div",{style:{fontFamily:"Avenir"},children:Object(j.jsx)(s.a,{children:Object(j.jsx)(b,{children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/chats",component:v}),Object(j.jsx)(o.a,{path:"/",exact:!0,component:y})]})})})})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}},[[316,1,2]]]);
//# sourceMappingURL=main.14895046.chunk.js.map
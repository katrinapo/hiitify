(this.webpackJsonphiitify=this.webpackJsonphiitify||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),s=n.n(i),a=n(18),r=n.n(a),o=(n(49),n(4)),l=(n(50),n(51),"".concat("http://accounts.spotify.com/authorize","?client_id=").concat("0c309b1569d1447f87fe551ef6e2629e","&redirect_uri=").concat("http://katrinapo.github.io/hiitify","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true")),j=n.p+"static/media/logov1.d09767cd.png";var u=function(){return Object(c.jsxs)("div",{className:"login",children:[Object(c.jsx)("img",{src:j}),Object(c.jsxs)("div",{className:"login__text",children:[" ",Object(c.jsx)("p",{children:"NOTE: You must launch spotify before starting this application and it must be running in the background!"}),Object(c.jsx)("p",{children:"* Must be a premium spotify member to toggle between songs. Free members can only pause and play their currently playing track."})]}),Object(c.jsx)("a",{href:l,children:"LOGIN WITH SPOTIFY"}),Object(c.jsx)("br",{}),Object(c.jsx)("hr",{})]})},b=n(26),d=n.n(b);n(52),n(53),n(54);var O=Object(i.createContext)(),p=function(e){var t=e.initialState,n=e.reducer,s=e.children;return Object(c.jsx)(O.Provider,{value:Object(i.useReducer)(n,t),children:s})},f=function(){return Object(i.useContext)(O)},m=n.p+"static/media/logov2.04fcdb65.png";var h=function(){var e=f(),t=Object(o.a)(e,2);return t[0].playlists,t[1],Object(c.jsx)("div",{className:"sidebar",children:Object(c.jsx)("div",{className:"sidebar__heading",children:Object(c.jsx)("img",{className:"sidebar__logo",src:m,alt:""})})})},x=n(15),g=(n(55),n(56),n(90));var y=function(){var e,t=f(),n=Object(o.a)(t,2),i=n[0].user;return n[1],Object(c.jsxs)("div",{className:"header",children:[Object(c.jsx)("div",{className:"header__left",children:Object(c.jsx)("h1",{children:"Welcome back!"})}),Object(c.jsxs)("div",{className:"header__right",children:[Object(c.jsx)(g.a,{src:null===i||void 0===i||null===(e=i.images[0])||void 0===e?void 0:e.url,alt:i}),Object(c.jsx)("h4",{children:null===i||void 0===i?void 0:i.display_name})]})]})},v=n(34),_=n.n(v),T=n(35),N=n.n(T),S=n(87),k=n(89),E=n(88),I=n(32),P=n.n(I),C=n(31),w=n.n(C),L=n(33),A=n.n(L),M=n.p+"static/media/beep.40e5c7db.mp3",Y=Object(S.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),G=M;function F(e){var t=e.title,n=e.updateTime,i=e.type,s=e.time,a=e.formatTime;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:t}),Object(c.jsxs)("div",{className:"time-sets",children:[Object(c.jsx)("button",{className:"down",onClick:function(){return n(-10,i)},children:Object(c.jsx)(_.a,{color:"black"})}),Object(c.jsx)("h3",{children:a(s)}),Object(c.jsx)("button",{className:"up",onClick:function(){return n(10,i)},children:Object(c.jsx)(N.a,{})})]})]})}var R=function(e){e.spotify;var t=Y(),n=Object(i.useState)(60),s=Object(o.a)(n,2),a=s[0],r=s[1],l=Object(i.useState)(30),j=Object(o.a)(l,2),u=j[0],b=j[1],d=Object(i.useState)(60),O=Object(o.a)(d,2),p=O[0],f=O[1],m=Object(i.useState)(!1),h=Object(o.a)(m,2),g=h[0],v=h[1],_=Object(i.useState)(!1),T=Object(o.a)(_,2),N=T[0],S=T[1],I=Object(i.useRef)(null);Object(i.useEffect)((function(){a<=0?(S(!0),C()):g||a!==u||S(!1),console.log("test")}),[a,N,g,u,p]);var C=function(){I.currentTime=0,I.play()},L=function(e){var t=Math.floor(e/60),n=e%60;return(t<10?"0"+t:t)+":"+(n<10?"0"+n:n)},M=function(e,t){if("rest"===t){if(u<=10&&e<0||u>=3600)return;b((function(t){return t+e}))}else{if(p<=10&&e<0||p>=3600)return;f((function(t){return t+e})),g||r(p+e)}};return Object(c.jsxs)("div",{className:"body",children:[Object(c.jsx)(y,{}),Object(c.jsx)("div",{className:"grid-container",children:Object(c.jsxs)(E.a,{container:!0,spacing:1,children:[Object(c.jsx)(E.a,{item:!0,xs:12,children:Object(c.jsxs)(k.a,{className:t.paper,children:[Object(c.jsx)("button",{onClick:function(){(new Date).getTime();var e=(new Date).getTime()+1e3,t=N;if(!g){var n=setInterval((function(){(new Date).getTime()>e&&(r((function(e){return e<=0&&!t?(t=!0,u):e<=0&&t?(t=!1,S(!1),p):e-1})),e+=1e3)}),30);sessionStorage.clear(),sessionStorage.setItem("interval-id",n)}g&&clearInterval(sessionStorage.getItem("interval-id")),v(!g)},children:g?Object(c.jsx)(w.a,{}):Object(c.jsx)(P.a,{})}),Object(c.jsx)("button",{onClick:function(){clearInterval(sessionStorage.getItem("interval-id")),r(60),b(30),f(60),I.pause(),I.currentTime=0,v(!1),S(!1)},children:Object(c.jsx)(A.a,{})})]})}),Object(c.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(k.a,{className:t.paper,children:Object(c.jsx)(F,Object(x.a)({title:"Rest Length",updateTime:M,time:u,formatTime:L,type:"rest"},"formatTime",L))})}),Object(c.jsx)(E.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(k.a,{className:t.paper,children:Object(c.jsx)(F,Object(x.a)({title:"Work Length",updateTime:M,time:p,formatTime:L,type:"work"},"formatTime",L))})}),Object(c.jsx)(E.a,{item:!0,xs:12,children:Object(c.jsxs)(k.a,{className:t.paper,children:[Object(c.jsx)("h3",{children:N?"Rest":"Work"}),Object(c.jsx)("h1",{children:L(a)})]})})]})}),Object(c.jsx)("div",{}),Object(c.jsx)("audio",{ref:function(e){return I=e},src:G,id:"beep"})]})},D=(n(62),n(38)),U=n.n(D),W=n(36),z=n.n(W),B=n(39),J=n.n(B),K=n(37),H=n.n(K);var q=function(e){var t=e.spotify,n=f(),s=Object(o.a)(n,2),a=s[0],r=(a.token,a.item),l=a.playing,j=s[1];Object(i.useEffect)((function(){t.getMyCurrentPlaybackState().then((function(e){console.log(e),j({type:"SET_PLAYING",playing:e.is_playing}),j({type:"SET_ITEM",item:e.item})}))}),[t]);var u=function(){l?(t.pause(),j({type:"SET_PLAYING",playing:!1})):(t.play(),j({type:"SET_PLAYING",playing:!0}))};return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsxs)("div",{className:"footer__left",children:[Object(c.jsx)("img",{src:null===r||void 0===r?void 0:r.album.images[0].url,className:"footer__albumLogo",alt:null===r||void 0===r?void 0:r.name}),r?Object(c.jsxs)("div",{className:"footer__songInfo",children:[Object(c.jsx)("h4",{children:r.name}),Object(c.jsx)("p",{children:r.artists.map((function(e){return e.name})).join(", ")})]}):Object(c.jsxs)("div",{className:"footer__songInfo",children:[Object(c.jsx)("h4",{children:"No song is playing"}),Object(c.jsx)("p",{children:"..."})]})]}),Object(c.jsxs)("div",{className:"footer__center",children:[Object(c.jsx)(z.a,{onClick:function(){t.skipToPrevious(),t.getMyCurrentPlayingTrack().then((function(e){j({type:"SET_ITEM",item:e.item}),j({type:"SET_PLAYING",playing:!0})}))},className:"footer__icon"}),l?Object(c.jsx)(H.a,{onClick:u,fontSize:"large",className:"footer__icon"}):Object(c.jsx)(U.a,{onClick:u,fontSize:"large",className:"footer__icon"}),Object(c.jsx)(J.a,{onClick:function(){t.skipToNext(),t.getMyCurrentPlayingTrack().then((function(e){j({type:"SET_ITEM",item:e.item}),j({type:"SET_PLAYING",playing:!0})}))},className:"footer__icon"})]}),Object(c.jsx)("div",{className:"footer__right"})]})},Q=function(e){var t=e.spotify;return Object(c.jsxs)("div",{className:"player",children:[Object(c.jsxs)("div",{className:"player__body",children:[Object(c.jsx)(h,{}),Object(c.jsx)(R,{spotify:t})]}),Object(c.jsx)(q,{spotify:t})]})},V=new d.a;var X=function(){var e=f(),t=Object(o.a)(e,2),n=t[0],s=(n.user,n.token),a=t[1];return Object(i.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(a({type:"SET_TOKEN",token:t}),V.setAccessToken(t),V.getMe().then((function(e){a({type:"SET_USER",user:e})})),V.getUserPlaylists().then((function(e){a({type:"SET_PLAYLISTS",playlists:e})})))}),[s,a]),Object(c.jsx)("div",{className:"App",children:s?Object(c.jsx)(Q,{spotify:V}):Object(c.jsx)(u,{})})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,92)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))},$=n(5),ee=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object($.a)(Object($.a)({},e),{},{user:t.user});case"SET_PLAYING":return Object($.a)(Object($.a)({},e),{},{playing:t.playing});case"SET_ITEM":return Object($.a)(Object($.a)({},e),{},{item:t.item});case"SET_TOKEN":return Object($.a)(Object($.a)({},e),{},{token:t.token});case"SET_SPOTIFY":return Object($.a)(Object($.a)({},e),{},{spotify:t.spotify});case"SET_PLAYLISTS":return Object($.a)(Object($.a)({},e),{},{playlists:t.playlists});default:return e}};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(p,{initialState:{user:null,playlists:[],spotify:null,playing:!1,item:null},reducer:ee,children:Object(c.jsx)(X,{})})}),document.getElementById("root")),Z()}},[[63,1,2]]]);
//# sourceMappingURL=main.83897962.chunk.js.map
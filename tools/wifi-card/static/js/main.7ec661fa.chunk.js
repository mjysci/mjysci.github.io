(this["webpackJsonpwifi-details"]=this["webpackJsonpwifi-details"]||[]).push([[0],{14:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),i=a.n(r),c=(a(14),a(1)),o=a(8),s=a.n(o),u=(a(23),function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),o=Object(c.a)(i,2),u=o[0],m=o[1],d=Object(n.useState)(""),p=Object(c.a)(d,2),E=p[0],h=p[1],f=function(e){for(var t=['"',";",",",":","\\"],a="",n=0;n<e.length;n++){var l=e[n];t.includes(l)&&(l="\\"+l),a+=l}return a};return Object(n.useEffect)((function(){var e=f(a),t=f(u);h("WIFI:T:WPA;S:".concat(e,";P:").concat(t,";;"))}),[a,u]),l.a.createElement("div",null,l.a.createElement("fieldset",{id:"print-area"},l.a.createElement("legend",null),l.a.createElement("h1",null,"WiFi Login"),l.a.createElement("hr",null),l.a.createElement("div",{className:"details"},l.a.createElement(s.a,{className:"qrcode",value:E,size:175}),l.a.createElement("div",{className:"text"},l.a.createElement("label",null,"Network name"),l.a.createElement("input",{id:"ssid",type:"text",maxLength:"32",placeholder:"WiFi Network name",value:a,onChange:function(e){return r(e.target.value)}}),l.a.createElement("label",null,"Password"),l.a.createElement("input",{id:"password",type:"text",maxLength:"64",placeholder:"Password",value:u,onChange:function(e){return m(e.target.value)}}))),l.a.createElement("p",null,l.a.createElement("span",{role:"img","aria-label":"mobile-phone"},"\ud83d\udcf8\ud83d\udcf1"),"Point your phone's camera at the QR Code to connect automatically")),l.a.createElement("div",{className:"print-btn"},l.a.createElement("button",{onClick:window.print},"Print")))});a(24);var m=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"antenna-bars"},"\ud83d\udcf6"),"\xa0 WiFi Login Card"),l.a.createElement("p",{className:"tag"},"Print a simple card with your WiFi login details. Tape it to the fridge, keep it in your wallet, etc."),l.a.createElement("p",{className:"tag"},"Your WiFi information is never sent to the server. No tracking, analytics, or fingerprinting are used on this website. View the ",l.a.createElement("a",{href:"https://github.com/bndw/wifi-card"},"source code"),"."),l.a.createElement(u,null))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(25)}},[[9,1,2]]]);
//# sourceMappingURL=main.7ec661fa.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{72:function(e,t,n){}}]),function(e){function t(t){for(var a,s,l=t[0],o=t[1],i=t[2],b=0,m=[];b<l.length;b++)s=l[b],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&m.push(c[s][0]),c[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(u&&u(t);m.length;)m.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,l=1;l<n.length;l++){var o=n[l];0!==c[o]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},c={0:0},r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/wp-content/plugins/texty/dist/";var l=window.webpackJsonp=window.webpackJsonp||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=o;r.push([73,2,1]),n()}({22:function(e,t){e.exports=window.wp.apiFetch},73:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(19),r=n.n(c),s=n(45),l=n(8),o=n(20),i=(n(57),n(3)),u=function(){return Object(a.createElement)("div",{className:"textly-admin-header"},Object(a.createElement)("div",{className:"textly-admin-header__menu"},Object(a.createElement)("a",{href:"#/tools",className:"header-link",title:Object(i.a)("Tools","texty")},Object(a.createElement)("span",{className:"dashicons dashicons-admin-tools"}),Object(a.createElement)("span",{className:"title"},Object(i.a)("Tools","texty"))),Object(a.createElement)("a",{href:"#/settings",className:"header-link",title:Object(i.a)("Settings","texty")},Object(a.createElement)("span",{className:"dashicons dashicons-admin-settings"}),Object(a.createElement)("span",{className:"title"},Object(i.a)("Settings","texty")))))},b=n(15),m=n.n(b),O=n(22),j=n.n(O),p=n(85),d=n(87),f=n(35),y=function(){var e=Object(a.useState)(!1),t=m()(e,2),n=t[0],c=t[1],r=Object(a.useState)(!0),s=m()(r,2),l=s[0],o=s[1];return Object(a.useEffect)((function(){o(!0),j()({path:"/texty/v1/status"}).then((function(e){o(!1),c(e.success)}))}),[]),l?Object(a.createElement)(p.a,null,Object(a.createElement)(d.a,null)):Object(a.createElement)(p.a,{status:n?"success":"error",isDismissible:!1},Object(a.createElement)(f.a,{icon:n?"yes-alt":"dismiss"}),Object(a.createElement)("span",null,n?Object(i.a)("Connected","texty"):Object(i.a)("Not connected","texty")))},g=n(23),h=n.n(g),w=n(86),v=n(84),E=n(7),x=n.n(E),S=function(){return Object(a.createElement)("svg",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",stroke:"currentColor",viewBox:"0 0 24 24",className:"active-icon"},Object(a.createElement)("path",{d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}))},N=function(e){var t=e.settings,n=e.setOption;return Object(a.createElement)("div",{className:"settings-twilio settings-row"},Object(a.createElement)("h3",null,Object(i.a)("Twilio","texty")),Object(a.createElement)("p",null,Object(a.createElement)("span",{className:"help",dangerouslySetInnerHTML:{__html:Object(i.c)(Object(i.a)('Send SMS with Twilio. Follow <a href="%s" target="_blank">this link</a> to get the Account SID and Token from Twilio.',"texty"),"https://www.twilio.com/console/project/settings")}})),Object(a.createElement)(w.a,{label:Object(i.a)("Account SID","texty"),value:t.sid,onChange:function(e){return n("twilio","sid",e)},required:!0}),Object(a.createElement)(w.a,{label:Object(i.a)("Auth Token","texty"),value:t.token,type:"password",required:!0,onChange:function(e){return n("twilio","token",e)}}))},_=function(e){var t=e.settings,n=e.setOption;return Object(a.createElement)("div",{className:"settings-vonage settings-row"},Object(a.createElement)("h3",null,Object(i.a)("Vonage","texty")),Object(a.createElement)("p",null,Object(a.createElement)("span",{className:"help",dangerouslySetInnerHTML:{__html:Object(i.c)(Object(i.a)('Send SMS with Vonage (formerly Nexmo). Follow <a href="%s" target="_blank">this link</a> to get the API Key and Secret from Vonage.',"texty"),"https://dashboard.nexmo.com/settings")}})),Object(a.createElement)(w.a,{label:Object(i.a)("API Key","texty"),value:t.key,onChange:function(e){return n("vonage","key",e)},required:!0}),Object(a.createElement)(w.a,{label:Object(i.a)("API Secret","texty"),value:t.secret,type:"password",required:!0,onChange:function(e){return n("vonage","secret",e)}}))};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){h()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T,C,M,D,I=function(){var e=Object(a.useState)(!1),t=m()(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=m()(r,2),l=s[0],u=s[1],b=Object(a.useState)({gateway:"twilio",from:"",twilio:{sid:"",token:""},vonage:{key:"",secret:""}}),O=m()(b,2),p=O[0],f=O[1];Object(a.useEffect)((function(){return c(!0),j()({path:"/texty/v1/settings"}).then((function(e){f(e),c(!1)})),function(){}}),[]);var y=function(e,t){f(P(P({},p),{},h()({},e,t)))},g=function(e,t,n){f(P(P({},p),{},h()({},e,P(P({},p[e]),{},h()({},t,n)))))};return n?Object(a.createElement)(d.a,null):Object(a.createElement)("div",{className:"textly-settings"},Object(a.createElement)("h1",null,Object(i.a)("Settings","texty")),Object(a.createElement)("form",{onSubmit:function(e){e.preventDefault(),u(!0),j()({path:"/texty/v1/settings",method:"POST",data:p}).then((function(e){u(!1),o.b.success(Object(i.a)("Changes have been saved","texty"))})).catch((function(e){u(!1),console.log(e),o.b.error(e.message)}))},className:"textly-settings__form"},Object(a.createElement)("fieldset",{disabled:l},Object(a.createElement)("div",{className:"settings-row"},Object(a.createElement)(w.a,{label:Object(i.a)("From Number","texty"),value:p.from,type:"tel",onChange:function(e){return y("from",e)},help:Object(i.a)("The phone number all messages will go from. Make sure your gateway accepts the format.","texty"),required:!0})),Object(a.createElement)("div",{className:"settings-row"},Object(a.createElement)("div",{className:"settings-row__label"},Object(a.createElement)("label",null,Object(i.a)("Gateways","texty"))),Object(a.createElement)("div",{className:"settings-row__field"},Object(a.createElement)("div",{className:"settings-row__gateways"},Object.keys(texty.gateways).map((function(e){var t=texty.gateways[e],n=t.name,c=t.logo;return Object(a.createElement)("div",{className:x()("gateway-card",{active:e===p.gateway}),key:e,onClick:function(){return y("gateway",e)}},Object(a.createElement)(S,null),Object(a.createElement)("div",{className:"gateway-card__logo"},Object(a.createElement)("img",{src:c,alt:n})),Object(a.createElement)("div",{className:"gateway-card__heading"},n))}))))),"twilio"===p.gateway&&Object(a.createElement)(N,{settings:p.twilio,setOption:g}),"vonage"===p.gateway&&Object(a.createElement)(_,{settings:p.vonage,setOption:g}),Object(a.createElement)("div",{className:"submit-area"},Object(a.createElement)(v.a,{type:"submit",isPrimary:!0,isBusy:l},l?Object(i.a)("Saving...","texty"):Object(i.a)("Save Changes","texty"))))))},q=n(81),A=n(82),B=n(83),F=function(){var e=Object(a.useState)(!1),t=m()(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=m()(r,2),l=s[0],u=s[1];return Object(a.createElement)("div",{className:"textly-tools"},Object(a.createElement)("h1",null,Object(i.a)("Tools","texty")),Object(a.createElement)(y,null),Object(a.createElement)(q.a,{className:"mt-4"},Object(a.createElement)(A.a,null,Object(i.a)("Test Message","texty")),Object(a.createElement)(B.a,null,Object(a.createElement)("form",{onSubmit:function(e){e.preventDefault(),c(!0),j()({path:"/texty/v1/tools/test",method:"POST",data:{to:l}}).then((function(e){c(!1),e.success?o.b.success(Object(i.a)("Message has been sent.","texty")):o.b.error(Object(i.a)("Error, message could not be sent.","texty")+" "+e.message)})).catch((function(e){c(!1),console.log(e)}))},className:"textly-settings__form"},Object(a.createElement)("fieldset",{disabled:n},Object(a.createElement)(w.a,{label:Object(i.a)("Test Number","texty"),type:"tel",value:l,onChange:function(e){return u(e)},help:Object(i.a)("Enter a phone number to test the SMS sending.","texty"),required:!0})),Object(a.createElement)(v.a,{type:"submit",isPrimary:!0,isBusy:n},n?Object(i.a)("Sending...","texty"):Object(i.a)("Send Test","texty"))))))},L=(n(72),document.getElementById("texty-app"));r.a.render(Object(a.createElement)((function(){return Object(a.createElement)(s.a,null,Object(a.createElement)(o.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!0}),Object(a.createElement)(u,null),Object(a.createElement)("div",{className:"wrap textly"},Object(a.createElement)(l.c,null,Object(a.createElement)(l.a,{path:"/settings",component:I}),Object(a.createElement)(l.a,{path:"/tools",component:F}),Object(a.createElement)(l.a,{path:"/",exact:!0,component:I}))))}),null),L),T=jQuery,C=T("#toplevel_page_"+"texty"),M=window.location.href,D=M.substr(M.indexOf("admin.php")),C.on("click","a",(function(){var e=T(this);T("ul.wp-submenu li",C).removeClass("current"),e.hasClass("wp-has-submenu")?T("li.wp-first-item",C).addClass("current"):e.parents("li").addClass("current")})),T("ul.wp-submenu a",C).each((function(e,t){T(t).attr("href")!==D||T(t).parent().addClass("current")}))}});
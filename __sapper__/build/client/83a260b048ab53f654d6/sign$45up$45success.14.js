(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{387:function(e,t,n){"use strict";n.r(t);var o=n(0),a=(n(45),n(4),n(42),n(43)),r=n(32);function i(e){let t;return{c(){t=Object(o.cb)("Log in")},l(e){t=Object(o.p)(e,"Log in")},m(e,n){Object(o.J)(e,t,n)},d(e){e&&Object(o.y)(t)}}}function c(e){let t,n,c,s,l,f,d,u,p,b,h,y;return t=new a.a({props:{dark:!0}}),h=new r.a({props:{href:"/login",$$slots:{default:[i]},$$scope:{ctx:e}}}),{c(){Object(o.s)(t.$$.fragment),n=Object(o.ab)(),c=Object(o.z)("section"),s=Object(o.z)("div"),l=Object(o.z)("h2"),f=Object(o.cb)("Registration successsful!"),d=Object(o.ab)(),u=Object(o.z)("p"),p=Object(o.cb)("You can now log in."),b=Object(o.ab)(),Object(o.s)(h.$$.fragment),this.h()},l(e){Object(o.m)(t.$$.fragment,e),n=Object(o.o)(e),c=Object(o.n)(e,"SECTION",{class:!0});var a=Object(o.l)(c);s=Object(o.n)(a,"DIV",{class:!0});var r=Object(o.l)(s);l=Object(o.n)(r,"H2",{class:!0});var i=Object(o.l)(l);f=Object(o.p)(i,"Registration successsful!"),i.forEach(o.y),d=Object(o.o)(r),u=Object(o.n)(r,"P",{});var y=Object(o.l)(u);p=Object(o.p)(y,"You can now log in."),y.forEach(o.y),b=Object(o.o)(r),Object(o.m)(h.$$.fragment,r),r.forEach(o.y),a.forEach(o.y),this.h()},h(){Object(o.h)(l,"class","is-size-2"),Object(o.h)(s,"class","container"),Object(o.h)(c,"class","section")},m(e,a){Object(o.N)(t,e,a),Object(o.J)(e,n,a),Object(o.J)(e,c,a),Object(o.f)(c,s),Object(o.f)(s,l),Object(o.f)(l,f),Object(o.f)(s,d),Object(o.f)(s,u),Object(o.f)(u,p),Object(o.f)(s,b),Object(o.N)(h,s,null),y=!0},p(e,[t]){const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),h.$set(n)},i(e){y||(Object(o.eb)(t.$$.fragment,e),Object(o.eb)(h.$$.fragment,e),y=!0)},o(e){Object(o.fb)(t.$$.fragment,e),Object(o.fb)(h.$$.fragment,e),y=!1},d(e){Object(o.w)(t,e),e&&Object(o.y)(n),e&&Object(o.y)(c),Object(o.w)(h)}}}class s extends o.a{constructor(e){super(),Object(o.I)(this,e,null,c,o.V,{})}}t.default=s},42:function(e,t,n){"use strict";
/*!
 * hotkeys-js v3.8.1
 * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
 * 
 * Copyright (c) 2020 kenny wong <wowohoo@qq.com>
 * http://jaywcjlove.github.io/hotkeys
 * 
 * Licensed under the MIT license.
 */var o="undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function a(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on".concat(t),(function(){n(window.event)}))}function r(e,t){for(var n=t.slice(0,t.length-1),o=0;o<n.length;o++)n[o]=e[n[o].toLowerCase()];return n}function i(e){"string"!=typeof e&&(e="");for(var t=(e=e.replace(/\s/g,"")).split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}for(var c={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,"⇪":20,",":188,".":190,"/":191,"`":192,"-":o?173:189,"=":o?61:187,";":o?59:186,"'":222,"[":219,"]":221,"\\":220},s={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},l={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},f={16:!1,18:!1,17:!1,91:!1},d={},u=1;u<20;u++)c["f".concat(u)]=111+u;var p=[],b="all",h=[],y=function(e){return c[e.toLowerCase()]||s[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function w(e){b=e||"all"}function O(){return b||"all"}var g=function(e){var t=e.key,n=e.scope,o=e.method,a=e.splitKey,c=void 0===a?"+":a;i(t).forEach((function(e){var t=e.split(c),a=t.length,i=t[a-1],l="*"===i?"*":y(i);if(d[l]){n||(n=O());var f=a>1?r(s,t):[];d[l]=d[l].map((function(e){return(!o||e.method===o)&&e.scope===n&&function(e,t){for(var n=e.length>=t.length?e:t,o=e.length>=t.length?t:e,a=!0,r=0;r<n.length;r++)-1===o.indexOf(n[r])&&(a=!1);return a}(e.mods,f)?{}:e}))}}))};function j(e,t,n){var o;if(t.scope===n||"all"===t.scope){for(var a in o=t.mods.length>0,f)Object.prototype.hasOwnProperty.call(f,a)&&(!f[a]&&t.mods.indexOf(+a)>-1||f[a]&&-1===t.mods.indexOf(+a))&&(o=!1);(0!==t.mods.length||f[16]||f[18]||f[17]||f[91])&&!o&&"*"!==t.shortcut||!1===t.method(e,t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function v(e){var t=d["*"],n=e.keyCode||e.which||e.charCode;if(m.filter.call(this,e)){if(93!==n&&224!==n||(n=91),-1===p.indexOf(n)&&229!==n&&p.push(n),["ctrlKey","altKey","shiftKey","metaKey"].forEach((function(t){var n=l[t];e[t]&&-1===p.indexOf(n)?p.push(n):!e[t]&&p.indexOf(n)>-1?p.splice(p.indexOf(n),1):"metaKey"===t&&e[t]&&3===p.length&&(e.ctrlKey||e.shiftKey||e.altKey||(p=p.slice(p.indexOf(n))))})),n in f){for(var o in f[n]=!0,s)s[o]===n&&(m[o]=!0);if(!t)return}for(var a in f)Object.prototype.hasOwnProperty.call(f,a)&&(f[a]=e[l[a]]);e.getModifierState&&(!e.altKey||e.ctrlKey)&&e.getModifierState("AltGraph")&&(-1===p.indexOf(17)&&p.push(17),-1===p.indexOf(18)&&p.push(18),f[17]=!0,f[18]=!0);var r=O();if(t)for(var i=0;i<t.length;i++)t[i].scope===r&&("keydown"===e.type&&t[i].keydown||"keyup"===e.type&&t[i].keyup)&&j(e,t[i],r);if(n in d)for(var c=0;c<d[n].length;c++)if(("keydown"===e.type&&d[n][c].keydown||"keyup"===e.type&&d[n][c].keyup)&&d[n][c].key){for(var u=d[n][c],b=u.splitKey,h=u.key.split(b),w=[],g=0;g<h.length;g++)w.push(y(h[g]));w.sort().join("")===p.sort().join("")&&j(e,u,r)}}}function m(e,t,n){p=[];var o=i(e),c=[],l="all",u=document,b=0,w=!1,O=!0,g="+";for(void 0===n&&"function"==typeof t&&(n=t),"[object Object]"===Object.prototype.toString.call(t)&&(t.scope&&(l=t.scope),t.element&&(u=t.element),t.keyup&&(w=t.keyup),void 0!==t.keydown&&(O=t.keydown),"string"==typeof t.splitKey&&(g=t.splitKey)),"string"==typeof t&&(l=t);b<o.length;b++)c=[],(e=o[b].split(g)).length>1&&(c=r(s,e)),(e="*"===(e=e[e.length-1])?"*":y(e))in d||(d[e]=[]),d[e].push({keyup:w,keydown:O,scope:l,mods:c,shortcut:o[b],method:n,key:o[b],splitKey:g});void 0!==u&&!function(e){return h.indexOf(e)>-1}(u)&&window&&(h.push(u),a(u,"keydown",(function(e){v(e)})),a(window,"focus",(function(){p=[]})),a(u,"keyup",(function(e){v(e),function(e){var t=e.keyCode||e.which||e.charCode,n=p.indexOf(t);if(n>=0&&p.splice(n,1),e.key&&"meta"===e.key.toLowerCase()&&p.splice(0,p.length),93!==t&&224!==t||(t=91),t in f)for(var o in f[t]=!1,s)s[o]===t&&(m[o]=!1)}(e)})))}var k={setScope:w,getScope:O,deleteScope:function(e,t){var n,o;for(var a in e||(e=O()),d)if(Object.prototype.hasOwnProperty.call(d,a))for(n=d[a],o=0;o<n.length;)n[o].scope===e?n.splice(o,1):o++;O()===e&&w(t||"all")},getPressedKeyCodes:function(){return p.slice(0)},isPressed:function(e){return"string"==typeof e&&(e=y(e)),-1!==p.indexOf(e)},filter:function(e){var t=e.target||e.srcElement,n=t.tagName,o=!0;return!t.isContentEditable&&("INPUT"!==n&&"TEXTAREA"!==n&&"SELECT"!==n||t.readOnly)||(o=!1),o},unbind:function(e){if(e){if(Array.isArray(e))e.forEach((function(e){e.key&&g(e)}));else if("object"==typeof e)e.key&&g(e);else if("string"==typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var a=n[0],r=n[1];"function"==typeof a&&(r=a,a=""),g({key:e,scope:a,method:r,splitKey:"+"})}}else Object.keys(d).forEach((function(e){return delete d[e]}))}};for(var E in k)Object.prototype.hasOwnProperty.call(k,E)&&(m[E]=k[E]);if("undefined"!=typeof window){var $=window.hotkeys;m.noConflict=function(e){return e&&window.hotkeys===m&&(window.hotkeys=$),m},window.hotkeys=m}t.a=m},45:function(e,t,n){"use strict";(function(e){var o=n(21),a=n(46),r=n(8),i=n.n(r);let c,s,l;const f=t=>{const a=new(void 0!==e.env.JEST_WORKER_ID?n(34):n(34).default)(t).setMaxListeners(o.a.database.maxNumberOfListeners);return a.changes({since:"now",live:!0,include_docs:!0}).on("change",()=>{if(void 0!==e.env.JEST_WORKER_ID)return;n(19).default.update(e=>({...e,dbUpdatedAt:Date.now()}))}),a};{const e=n(19).default,t=n(34).default;s=new t(`${o.a.database.remote}/${i.a.get("loginDb")}`,{skip_setup:!0,live:!0}),c=f(o.a.database.local),window._DB=c,i.a.get("loginDb")===Object(a.a)("---fakeUser")&&e.update(e=>({...e,user:{name:"---fakeUser"},online:!0})),i.a.get("loginDb")&&o.a.features.authEnabled?fetch(`${o.a.database.remote}/_session`,{credentials:"include"}).then(e=>e.json()).then(t=>{null!==t.userCtx.name&&(e.update(e=>({...e,user:{name:t.userCtx.name}})),r())}):e.update(e=>({...e,online:!1})),window._fakeLogin=()=>{i.a.set("loginDb",Object(a.a)("---fakeUser"),{expires:o.a.database.auth.expireDays}),window.location.href="/course/spanish-from-english/"},window._Login=async(t,n)=>{if(!1===window._test_credentials_correct)throw new Error("Incorrect username or password");if(!0===window._test_credentials_correct)return window._fakeLogin();const r=await(await fetch(`${o.a.database.remote}/_session`,{method:"post",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})})).json();if(r.error){if("unauthorized"===r.error)throw new Error("Username or password is incorrect");throw new Error("Couldn't log in. Please try again later")}e.update(e=>({...e,online:null})),i.a.set("loginDb",Object(a.a)(t),{expires:o.a.database.auth.expireDays}),window.location.reload(!1),window.location.href="/course/spanish-from-english/"},window._Logout=async()=>{try{l&&(await l.cancel(),await fetch(`${o.a.database.remote}/_session`,{method:"delete"}))}finally{i.a.remove("loginDb"),e.update(e=>({...e,user:null,online:null})),await c.destroy(),window.location.reload(!1)}};const r=()=>{l=c.sync(s).on("complete",(function(){e.update(e=>({...e,online:!0}))})).on("error",(function(){e.update(e=>({...e,online:!1}))}))}}void 0!==e.env.JEST_WORKER_ID&&(c=f(o.a.database.local),c.__reset=async()=>{const e=await c.allDocs();await Promise.all(e.rows.map((function(e){return c.remove(e.id,e.value.rev)})))}),t.a=c}).call(this,n(20))},46:function(e,t,n){"use strict";t.a=e=>`userdb-${(e=>e.split("").map(e=>e.charCodeAt(0).toString(16)).join(""))(e)}`},58:function(e,t){}}]);
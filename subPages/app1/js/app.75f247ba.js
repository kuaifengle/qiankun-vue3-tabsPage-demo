(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["app1-app"]=t():e["app1-app"]=t()})(window,(function(){return function(e){function t(t){for(var r,u,c=t[0],i=t[1],p=t[2],s=0,f=[];s<c.length;s++)u=c[s],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&f.push(a[u][0]),a[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function u(e){return c.p+"js/"+({about:"about",empty:"empty",user:"user"}[e]||e)+"."+{about:"e3e61f31",empty:"9c1f81a4",user:"1381ed7c"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(e);var p=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/qiankun-vue3-tabsPage-demo/subPages/app1/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp_app1"]=window["webpackJsonp_app1"]||[],p=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=p;return o.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return A})),n.d(t,"mount",(function(){return x})),n.d(t,"update",(function(){return T})),n.d(t,"unmount",(function(){return K}));var r=n("1da1"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("96cf"),n("b0c0"),n("d3b7"),n("7db0"),n("ac1f"),n("5319"),n("83f4"),n("7a23")),o=n("6c02"),u=n("0654"),c=n("fc8f"),i=(n("3ca3"),n("ddb0"),"/app1"),p=[{path:i+"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"754b"))}},{path:i+"/user",name:"User",component:function(){return n.e("user").then(n.bind(null,"a547"))}},{path:"/empty",name:"Empty",component:function(){return n.e("empty").then(n.bind(null,"c814"))}}],s=p,l={style:{color:"red"}},f=Object(a["createTextVNode"])("微应用App1的已缓存的页面有: =====> "),m={style:{color:"green"}};function b(e,t,n,r,o,u){var c=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createBlock"])(c,null,{default:Object(a["withCtx"])((function(t){var n=t.Component;return[Object(a["createElementVNode"])("div",l,[f,Object(a["createElementVNode"])("span",m,Object(a["toDisplayString"])(e.keepAliveList||"[暂无]"),1)]),(Object(a["openBlock"])(),Object(a["createBlock"])(a["KeepAlive"],{include:e.keepAliveList},[(Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["resolveDynamicComponent"])(n)))],1032,["include"]))]})),_:1})}var d=n("5530"),h=n("5502"),v={computed:Object(d["a"])({},Object(h["b"])(["keepAliveList"]))},y=n("6b0d"),_=n.n(y);const g=_()(v,[["render",b]]);var O,E=g,j=n("ade3"),w=(n("4de4"),Object(h["a"])({state:{keepAliveList:[]},mutations:(O={},Object(j["a"])(O,"PUSH_KEEPALIVE_LIST",(function(e,t){e.keepAliveList.some((function(e){return e===t}))||e.keepAliveList.push(t)})),Object(j["a"])(O,"CLOSE_KEEPALIVE_LIST",(function(e,t){e.keepAliveList=e.keepAliveList.filter((function(e){return e!==t.name}))})),O),actions:{},modules:{},getters:{keepAliveList:function(e){return e.keepAliveList}}})),P=n("f0cd"),k=null,L=null;function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.container,n=e.$parentRouter,r=e.routerEvent;if(L=Object(o["b"])({history:Object(o["a"])(window.__POWERED_BY_QIANKUN__?"":"/subPages/app1/"),routes:s}),L.beforeEach((function(e,t,n){if("/"!==t.path){if("/empty"===e.path)return void n();var r=e.meta,a=r.parentName,o=r.childrenName;(a&&a===t.name||o&&o.some((function(e){return e===t.name}))||a&&t.meta.parentName&&a===t.meta.parentName)&&(w.commit("CLOSE_KEEPALIVE_LIST",t),w.commit("PUSH_KEEPALIVE_LIST",e["name"]),P["a"].setGlobalState({changeMicoTabsPath:{to:e,appName:"app1",type:"change"}}))}n()})),k=Object(a["createApp"])({render:function(){return Object(a["h"])(E)},methods:{}}),k.config.globalProperties.$parentRouter=n,k.use(u["a"],{size:"default",zIndex:3e3,locale:c["a"]}),k.use(w),k.use(L),k.mount(t?t.querySelector("#app1"):"#app1"),r){var i=s.find((function(e){return e.path===r.path}));if(i&&i.mate&&i.meta.parentName&&!(r&&r.query&&r.query.mustJump)){var p=s.find((function(e){return e.name===i["meta"]["parentName"]}));return n.push(p.path),w.commit("PUSH_KEEPALIVE_LIST",p.name),void P["a"].setGlobalState({changeMicoTabsPath:{to:{path:p.path,fullPath:p.path,query:{}},appName:"app1",type:"change"}})}L.push({path:r.fullPath,query:r.query});var l=s.find((function(e){return e.path===r.path}));l&&w.commit("PUSH_KEEPALIVE_LIST",l.name),requestAnimationFrame((function(){P["a"].setGlobalState({changeMicoTabsPath:{type:"changeLoading",loading:!1}})}))}}function A(){return I.apply(this,arguments)}function I(){return I=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function x(e){return N.apply(this,arguments)}function N(){return N=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:P["a"].setActions(t),console.log("app1 渲染"),S(t);case 3:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}function T(e){return C.apply(this,arguments)}function C(){return C=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.routerEvent,!n){e.next=14;break}e.t0=n.type,e.next="push"===e.t0?5:"replace"===e.t0?8:"close"===e.t0?10:"visible"===e.t0?12:14;break;case 5:return L.push(n.fullPath),w.commit("PUSH_KEEPALIVE_LIST",s.find((function(e){return e.path===n.path}))["name"]),e.abrupt("break",14);case 8:return L.replace(n.fullPath),e.abrupt("break",14);case 10:return w.commit("CLOSE_KEEPALIVE_LIST",s.find((function(e){return e.path===n.path}))),e.abrupt("break",14);case 12:return L.push("/empty"),e.abrupt("break",14);case 14:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function K(){return R.apply(this,arguments)}function R(){return R=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:k.unmount(),k._container.innerHTML="",k=null,L=null;case 4:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}window.__POWERED_BY_QIANKUN__||S()},"83f4":function(e,t,n){window.__POWERED_BY_QIANKUN__&&(n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},f0cd:function(e,t,n){"use strict";var r=n("d4ec"),a=n("bee2"),o=n("ade3");function u(){console.warn("Current execute action is empty!")}var c=function(){function e(){Object(r["a"])(this,e),Object(o["a"])(this,"actions",{onGlobalStateChange:u,setGlobalState:u})}return Object(a["a"])(e,[{key:"setActions",value:function(e){this.actions=e}},{key:"onGlobalStateChange",value:function(){var e;return(e=this.actions).onGlobalStateChange.apply(e,arguments)}},{key:"setGlobalState",value:function(){var e;return(e=this.actions).setGlobalState.apply(e,arguments)}}]),e}(),i=new c;t["a"]=i}})}));
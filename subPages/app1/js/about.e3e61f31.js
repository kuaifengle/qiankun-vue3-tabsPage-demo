(window["webpackJsonp_app1"]=window["webpackJsonp_app1"]||[]).push([["about"],{"754b":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c={class:"about"},p=Object(o["createElementVNode"])("h1",null,"This is an App1 about page",-1),a=Object(o["createElementVNode"])("div",null,"如果App2未加载就会先加载App2微应用再新建tab标签跳转",-1),r=Object(o["createElementVNode"])("div",null,"如果App2已加载就会切换tab标签再跳转",-1),u=Object(o["createTextVNode"])("点我跳转App2的User页面");function b(e,t,n,b,l,i){var s=Object(o["resolveComponent"])("el-button");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,[p,a,r,Object(o["createVNode"])(s,{onClick:b.jump},{default:Object(o["withCtx"])((function(){return[u]})),_:1},8,["onClick"])])}var l={name:"About",setup:function(){var e=Object(o["getCurrentInstance"])(),t=function(){e.appContext.config.globalProperties.$parentRouter.push("/app2/user")};return{jump:t}}},i=n("6b0d"),s=n.n(i);const d=s()(l,[["render",b]]);t["default"]=d}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{1765:function(e,t,n){"use strict";function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return c}))},1766:function(e,t,n){"use strict";function c(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return c}))},1767:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var c=n(0),r=n.n(c);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=u(n),d=c,j=p["".concat(o,".").concat(d)]||p[d]||O[d]||a;return n?r.a.createElement(j,l(l({ref:t},i),{},{components:n})):r.a.createElement(j,l({ref:t},i))}));function j(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:c,o[1]=l;for(var i=2;i<a;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},189:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var c=n(1765),r=n(1766),a=(n(0),n(1767)),o={title:"Taro.getAccountInfoSync()",sidebar_label:"getAccountInfoSync"},l={unversionedId:"apis/open-api/account/getAccountInfoSync",id:"version-3.x/apis/open-api/account/getAccountInfoSync",isDocsHomePage:!1,title:"Taro.getAccountInfoSync()",description:"\u83b7\u53d6\u5f53\u524d\u5e10\u53f7\u4fe1\u606f",source:"@site/versioned_docs/version-3.x/apis/open-api/account/getAccountInfoSync.md",slug:"/apis/open-api/account/getAccountInfoSync",permalink:"/taro/docs/apis/open-api/account/getAccountInfoSync",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/open-api/account/getAccountInfoSync.md",version:"3.x",sidebar_label:"getAccountInfoSync",sidebar:"version-3.x/API",previous:{title:"Taro.navigateBackMiniProgram(option)",permalink:"/taro/docs/apis/open-api/navigate/navigateBackMiniProgram"},next:{title:"Taro.getUserProfile(option)",permalink:"/taro/docs/apis/open-api/user-info/getUserProfile"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"AccountInfo",id:"accountinfo",children:[]},{value:"MiniProgram",id:"miniprogram",children:[]},{value:"Plugin",id:"plugin",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(c.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u83b7\u53d6\u5f53\u524d\u5e10\u53f7\u4fe1\u606f"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/account-info/wx.getAccountInfoSync.html"}),"\u53c2\u8003\u6587\u6863"))),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"() => AccountInfo\n")),Object(a.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(a.b)("h3",{id:"accountinfo"},"AccountInfo"),Object(a.b)("p",null,"\u5e10\u53f7\u4fe1\u606f"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"miniProgram"),Object(a.b)("td",null,Object(a.b)("code",null,"MiniProgram")),Object(a.b)("td",null,"\u5c0f\u7a0b\u5e8f\u5e10\u53f7\u4fe1\u606f")),Object(a.b)("tr",null,Object(a.b)("td",null,"plugin"),Object(a.b)("td",null,Object(a.b)("code",null,"Plugin")),Object(a.b)("td",null,"\u63d2\u4ef6\u5e10\u53f7\u4fe1\u606f\uff08\u4ec5\u5728\u63d2\u4ef6\u4e2d\u8c03\u7528\u65f6\u5305\u542b\u8fd9\u4e00\u9879\uff09")))),Object(a.b)("h3",{id:"miniprogram"},"MiniProgram"),Object(a.b)("p",null,"\u5c0f\u7a0b\u5e8f\u5e10\u53f7\u4fe1\u606f"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"appId"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",null,"\u5c0f\u7a0b\u5e8f appId")))),Object(a.b)("h3",{id:"plugin"},"Plugin"),Object(a.b)("p",null,"\u63d2\u4ef6\u5e10\u53f7\u4fe1\u606f\uff08\u4ec5\u5728\u63d2\u4ef6\u4e2d\u8c03\u7528\u65f6\u5305\u542b\u8fd9\u4e00\u9879\uff09"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"appId"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",null,"\u63d2\u4ef6 appId")),Object(a.b)("tr",null,Object(a.b)("td",null,"version"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",null,"\u63d2\u4ef6\u7248\u672c\u53f7")))),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"const accountInfo = Taro.getAccountInfoSync();\n\nconsole.log(accountInfo.miniProgram.appId) // \u5c0f\u7a0b\u5e8f appId\nconsole.log(accountInfo.plugin.appId) // \u63d2\u4ef6 appId\nconsole.log(accountInfo.plugin.version) // \u63d2\u4ef6\u7248\u672c\u53f7\uff0c 'a.b.c' \u8fd9\u6837\u7684\u5f62\u5f0f\n")),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"Taro.getAccountInfoSync"),Object(a.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{1765:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},1766:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},1767:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),O=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=O(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=O(n),s=r,u=p["".concat(b,".").concat(s)]||p[s]||j[s]||c;return n?a.a.createElement(u,i(i({ref:t},o),{},{components:n})):a.a.createElement(u,i({ref:t},o))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var o=2;o<c;o++)b[o]=n[o];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return O}));var r=n(1765),a=n(1766),c=(n(0),n(1767)),b={title:"Stats",sidebar_label:"Stats"},i={unversionedId:"apis/files/Stats",id:"version-3.x/apis/files/Stats",isDocsHomePage:!1,title:"Stats",description:"\u63cf\u8ff0\u6587\u4ef6\u72b6\u6001\u7684\u5bf9\u8c61",source:"@site/versioned_docs/version-3.x/apis/files/Stats.md",slug:"/apis/files/Stats",permalink:"/taro/docs/apis/files/Stats",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/files/Stats.md",version:"3.x",sidebar_label:"Stats",sidebar:"version-3.x/API",previous:{title:"FileSystemManager",permalink:"/taro/docs/apis/files/FileSystemManager"},next:{title:"Taro.login(option)",permalink:"/taro/docs/apis/open-api/login/login"}},l=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"isDirectory",id:"isdirectory",children:[]},{value:"isFile",id:"isfile",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-2",children:[]}],o={rightToc:l};function O(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u63cf\u8ff0\u6587\u4ef6\u72b6\u6001\u7684\u5bf9\u8c61"),Object(c.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"lastAccessedTime"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u6587\u4ef6\u6700\u8fd1\u4e00\u6b21\u88ab\u5b58\u53d6\u6216\u88ab\u6267\u884c\u7684\u65f6\u95f4\uff0cUNIX \u65f6\u95f4\u6233\uff0c\u5bf9\u5e94 POSIX stat.st_atime")),Object(c.b)("tr",null,Object(c.b)("td",null,"lastModifiedTime"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u6587\u4ef6\u6700\u540e\u4e00\u6b21\u88ab\u4fee\u6539\u7684\u65f6\u95f4\uff0cUNIX \u65f6\u95f4\u6233\uff0c\u5bf9\u5e94 POSIX stat.st_mtime")),Object(c.b)("tr",null,Object(c.b)("td",null,"mode"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u6587\u4ef6\u7684\u7c7b\u578b\u548c\u5b58\u53d6\u7684\u6743\u9650\uff0c\u5bf9\u5e94 POSIX stat.st_mode")),Object(c.b)("tr",null,Object(c.b)("td",null,"size"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u6587\u4ef6\u5927\u5c0f\uff0c\u5355\u4f4d\uff1aB\uff0c\u5bf9\u5e94 POSIX stat.st_size")))),Object(c.b)("h3",{id:"isdirectory"},"isDirectory"),Object(c.b)("p",null,"\u5224\u65ad\u5f53\u524d\u6587\u4ef6\u662f\u5426\u4e00\u4e2a\u76ee\u5f55"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.isDirectory.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"() => boolean\n")),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Stats.isDirectory"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h3",{id:"isfile"},"isFile"),Object(c.b)("p",null,"\u5224\u65ad\u5f53\u524d\u6587\u4ef6\u662f\u5426\u4e00\u4e2a\u666e\u901a\u6587\u4ef6"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/file/Stats.isFile.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"() => boolean\n")),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Stats.isFile"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6-2"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Stats.isDirectory"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Stats.isFile"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}O.isMDXComponent=!0}}]);
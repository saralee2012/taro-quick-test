(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1765:function(e,t,a){"use strict";function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var b in a)Object.prototype.hasOwnProperty.call(a,b)&&(e[b]=a[b])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return b}))},1766:function(e,t,a){"use strict";function b(e,t){if(null==e)return{};var a,b,n={},l=Object.keys(e);for(b=0;b<l.length;b++)a=l[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,"a",(function(){return b}))},1767:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return u}));var b=a(0),n=a.n(b);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},l=Object.keys(e);for(b=0;b<l.length;b++)a=l[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(b=0;b<l.length;b++)a=l[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var O=n.a.createContext({}),o=function(e){var t=n.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},j=function(e){var t=o(e.components);return n.a.createElement(O.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,l=e.originalType,c=e.parentName,O=d(e,["components","mdxType","originalType","parentName"]),j=o(a),p=b,u=j["".concat(c,".").concat(p)]||j[p]||i[p]||l;return a?n.a.createElement(u,r(r({ref:t},O),{},{components:a})):n.a.createElement(u,r({ref:t},O))}));function u(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var l=a.length,c=new Array(l);c[0]=p;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:b,c[1]=r;for(var O=2;O<l;O++)c[O]=a[O];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return o}));var b=a(1765),n=a(1766),l=(a(0),a(1767)),c={title:"DownloadTask",sidebar_label:"DownloadTask"},r={unversionedId:"apis/network/download/DownloadTask",id:"version-2.x/apis/network/download/DownloadTask",isDocsHomePage:!1,title:"DownloadTask",description:"\u65b9\u6cd5",source:"@site/versioned_docs/version-2.x/apis/network/download/DownloadTask.md",slug:"/apis/network/download/DownloadTask",permalink:"/taro/docs/2.x/apis/network/download/DownloadTask",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/network/download/DownloadTask.md",version:"2.x",sidebar_label:"DownloadTask",sidebar:"version-2.x/API",previous:{title:"Taro.downloadFile(option)",permalink:"/taro/docs/2.x/apis/network/download/downloadFile"},next:{title:"Taro.uploadFile(option)",permalink:"/taro/docs/2.x/apis/network/upload/uploadFile"}},d=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"abort",id:"abort",children:[]},{value:"offHeadersReceived",id:"offheadersreceived",children:[]},{value:"offProgressUpdate",id:"offprogressupdate",children:[]},{value:"onHeadersReceived",id:"onheadersreceived",children:[]},{value:"onProgressUpdate",id:"onprogressupdate",children:[]}]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"OffHeadersReceivedCallback",id:"offheadersreceivedcallback",children:[]},{value:"OffProgressUpdateCallback",id:"offprogressupdatecallback",children:[]},{value:"OnHeadersReceivedCallback",id:"onheadersreceivedcallback",children:[]},{value:"OnProgressUpdateCallback",id:"onprogressupdatecallback",children:[]},{value:"OnHeadersReceivedCallbackResult",id:"onheadersreceivedcallbackresult",children:[]},{value:"OnProgressUpdateCallbackResult",id:"onprogressupdatecallbackresult",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-5",children:[]}],O={rightToc:d};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(b.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(l.b)("h3",{id:"abort"},"abort"),Object(l.b)("p",null,"\u4e2d\u65ad\u4e0b\u8f7d\u4efb\u52a1"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.abort.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),Object(l.b)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"DownloadTask.abort"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(l.b)("h3",{id:"offheadersreceived"},"offHeadersReceived"),Object(l.b)("p",null,"\u53d6\u6d88\u76d1\u542c HTTP Response Header \u4e8b\u4ef6"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.offHeadersReceived.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: OffHeadersReceivedCallback) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"callback"),Object(l.b)("td",null,Object(l.b)("code",null,"OffHeadersReceivedCallback")),Object(l.b)("td",null,"HTTP Response Header \u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.b)("h4",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"DownloadTask.offHeadersReceived"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(l.b)("h3",{id:"offprogressupdate"},"offProgressUpdate"),Object(l.b)("p",null,"\u53d6\u6d88\u76d1\u542c\u4e0b\u8f7d\u8fdb\u5ea6\u53d8\u5316\u4e8b\u4ef6"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.offProgressUpdate.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: OffProgressUpdateCallback) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"callback"),Object(l.b)("td",null,Object(l.b)("code",null,"OffProgressUpdateCallback")),Object(l.b)("td",null,"\u4e0b\u8f7d\u8fdb\u5ea6\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.b)("h4",{id:"api-\u652f\u6301\u5ea6-2"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"DownloadTask.offProgressUpdate"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(l.b)("h3",{id:"onheadersreceived"},"onHeadersReceived"),Object(l.b)("p",null,"\u76d1\u542c HTTP Response Header \u4e8b\u4ef6\u3002\u4f1a\u6bd4\u8bf7\u6c42\u5b8c\u6210\u4e8b\u4ef6\u66f4\u65e9"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.onHeadersReceived.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: OnHeadersReceivedCallback) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"callback"),Object(l.b)("td",null,Object(l.b)("code",null,"OnHeadersReceivedCallback")),Object(l.b)("td",null,"HTTP Response Header \u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.b)("h4",{id:"api-\u652f\u6301\u5ea6-3"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"DownloadTask.onHeadersReceived"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(l.b)("h3",{id:"onprogressupdate"},"onProgressUpdate"),Object(l.b)("p",null,"\u76d1\u542c\u4e0b\u8f7d\u8fdb\u5ea6\u53d8\u5316\u4e8b\u4ef6"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/download/DownloadTask.onProgressUpdate.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: OnProgressUpdateCallback) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"callback"),Object(l.b)("td",null,Object(l.b)("code",null,"OnProgressUpdateCallback")),Object(l.b)("td",null,"\u4e0b\u8f7d\u8fdb\u5ea6\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.b)("h4",{id:"api-\u652f\u6301\u5ea6-4"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"DownloadTask.onProgressUpdate"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"offheadersreceivedcallback"},"OffHeadersReceivedCallback"),Object(l.b)("p",null,"HTTP Response Header \u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(res: CallbackResult) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"res"),Object(l.b)("td",null,Object(l.b)("code",null,"CallbackResult"))))),Object(l.b)("h3",{id:"offprogressupdatecallback"},"OffProgressUpdateCallback"),Object(l.b)("p",null,"\u4e0b\u8f7d\u8fdb\u5ea6\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(res: CallbackResult) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"res"),Object(l.b)("td",null,Object(l.b)("code",null,"CallbackResult"))))),Object(l.b)("h3",{id:"onheadersreceivedcallback"},"OnHeadersReceivedCallback"),Object(l.b)("p",null,"HTTP Response Header \u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(result: OnHeadersReceivedCallbackResult) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"result"),Object(l.b)("td",null,Object(l.b)("code",null,"OnHeadersReceivedCallbackResult"))))),Object(l.b)("h3",{id:"onprogressupdatecallback"},"OnProgressUpdateCallback"),Object(l.b)("p",null,"\u4e0b\u8f7d\u8fdb\u5ea6\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(result: OnProgressUpdateCallbackResult) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"result"),Object(l.b)("td",null,Object(l.b)("code",null,"OnProgressUpdateCallbackResult"))))),Object(l.b)("h3",{id:"onheadersreceivedcallbackresult"},"OnHeadersReceivedCallbackResult"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"header"),Object(l.b)("td",null,Object(l.b)("code",null,"Record<string, any>")),Object(l.b)("td",null,"\u5f00\u53d1\u8005\u670d\u52a1\u5668\u8fd4\u56de\u7684 HTTP Response Header")))),Object(l.b)("h3",{id:"onprogressupdatecallbackresult"},"OnProgressUpdateCallbackResult"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"progress"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"\u4e0b\u8f7d\u8fdb\u5ea6\u767e\u5206\u6bd4")),Object(l.b)("tr",null,Object(l.b)("td",null,"totalBytesExpectedToWrite"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"\u9884\u671f\u9700\u8981\u4e0b\u8f7d\u7684\u6570\u636e\u603b\u957f\u5ea6\uff0c\u5355\u4f4d Bytes")),Object(l.b)("tr",null,Object(l.b)("td",null,"totalBytesWritten"),Object(l.b)("td",null,Object(l.b)("code",null,"number")),Object(l.b)("td",null,"\u5df2\u7ecf\u4e0b\u8f7d\u7684\u6570\u636e\u957f\u5ea6\uff0c\u5355\u4f4d Bytes")))),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6-5"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"DownloadTask.abort"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"DownloadTask.offHeadersReceived"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"DownloadTask.offProgressUpdate"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"DownloadTask.onHeadersReceived"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"DownloadTask.onProgressUpdate"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))))}o.isMDXComponent=!0}}]);
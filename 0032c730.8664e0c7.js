(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1765:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},1766:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},1767:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),d=u(n),O=r,s=d["".concat(l,".").concat(O)]||d[O]||p[O]||c;return n?a.a.createElement(s,o(o({ref:t},i),{},{components:n})):a.a.createElement(s,o({ref:t},i))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=O;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var i=2;i<c;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(1765),a=n(1766),c=(n(0),n(1767)),l={title:"Taro.playBackgroundAudio(option)",sidebar_label:"playBackgroundAudio"},o={unversionedId:"apis/media/background-audio/playBackgroundAudio",id:"version-2.x/apis/media/background-audio/playBackgroundAudio",isDocsHomePage:!1,title:"Taro.playBackgroundAudio(option)",description:"\u4f7f\u7528\u540e\u53f0\u64ad\u653e\u5668\u64ad\u653e\u97f3\u4e50\uff0c\u5bf9\u4e8e\u5fae\u4fe1\u5ba2\u6237\u7aef\u6765\u8bf4\uff0c\u53ea\u80fd\u540c\u65f6\u6709\u4e00\u4e2a\u540e\u53f0\u97f3\u4e50\u5728\u64ad\u653e\u3002\u5f53\u7528\u6237\u79bb\u5f00\u5c0f\u7a0b\u5e8f\u540e\uff0c\u97f3\u4e50\u5c06\u6682\u505c\u64ad\u653e\uff1b\u5f53\u7528\u6237\u70b9\u51fb\u201c\u663e\u793a\u5728\u804a\u5929\u9876\u90e8\u201d\u65f6\uff0c\u97f3\u4e50\u4e0d\u4f1a\u6682\u505c\u64ad\u653e\uff1b\u5f53\u7528\u6237\u5728\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u5360\u7528\u4e86\u97f3\u4e50\u64ad\u653e\u5668\uff0c\u539f\u6709\u5c0f\u7a0b\u5e8f\u5185\u7684\u97f3\u4e50\u5c06\u505c\u6b62\u64ad\u653e\u3002",source:"@site/versioned_docs/version-2.x/apis/media/background-audio/playBackgroundAudio.md",slug:"/apis/media/background-audio/playBackgroundAudio",permalink:"/taro/docs/2.x/apis/media/background-audio/playBackgroundAudio",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/media/background-audio/playBackgroundAudio.md",version:"2.x",sidebar_label:"playBackgroundAudio",sidebar:"version-2.x/API",previous:{title:"Taro.seekBackgroundAudio(option)",permalink:"/taro/docs/2.x/apis/media/background-audio/seekBackgroundAudio"},next:{title:"Taro.pauseBackgroundAudio(option)",permalink:"/taro/docs/2.x/apis/media/background-audio/pauseBackgroundAudio"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u4f7f\u7528\u540e\u53f0\u64ad\u653e\u5668\u64ad\u653e\u97f3\u4e50\uff0c\u5bf9\u4e8e\u5fae\u4fe1\u5ba2\u6237\u7aef\u6765\u8bf4\uff0c\u53ea\u80fd\u540c\u65f6\u6709\u4e00\u4e2a\u540e\u53f0\u97f3\u4e50\u5728\u64ad\u653e\u3002\u5f53\u7528\u6237\u79bb\u5f00\u5c0f\u7a0b\u5e8f\u540e\uff0c\u97f3\u4e50\u5c06\u6682\u505c\u64ad\u653e\uff1b\u5f53\u7528\u6237\u70b9\u51fb\u201c\u663e\u793a\u5728\u804a\u5929\u9876\u90e8\u201d\u65f6\uff0c\u97f3\u4e50\u4e0d\u4f1a\u6682\u505c\u64ad\u653e\uff1b\u5f53\u7528\u6237\u5728\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u5360\u7528\u4e86\u97f3\u4e50\u64ad\u653e\u5668\uff0c\u539f\u6709\u5c0f\u7a0b\u5e8f\u5185\u7684\u97f3\u4e50\u5c06\u505c\u6b62\u64ad\u653e\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.playBackgroundAudio.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<CallbackResult>\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"dataUrl"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u97f3\u4e50\u94fe\u63a5\uff0c\u76ee\u524d\u652f\u6301\u7684\u683c\u5f0f\u6709 m4a, aac, mp3, wav")),Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"coverImgUrl"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5c01\u9762URL")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"title"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u97f3\u4e50\u6807\u9898")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.playBackgroundAudio({\n  dataUrl: '',\n  title: '',\n  coverImgUrl: ''\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.playBackgroundAudio"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);
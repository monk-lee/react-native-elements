(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{175:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(238)),c={id:"divider",title:"Divider"},o={unversionedId:"divider",id:"version-3.1.0/divider",isDocsHomePage:!1,title:"Divider",description:"Dividers are visual separators of content. Use Divider when you want to make a",source:"@site/versioned_docs/version-3.1.0/divider.md",slug:"/divider",permalink:"/docs/divider",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.1.0/divider.md",version:"3.1.0",sidebar:"version-3.1.0/docs",previous:{title:"CheckBox",permalink:"/docs/checkbox"},next:{title:"Header",permalink:"/docs/header"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>style</code>",id:"style",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Dividers are visual separators of content. Use Divider when you want to make a\ndistinction between sections of content."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { Divider } from 'react-native-elements';\n\n<Divider style={{ backgroundColor: 'blue' }} />;\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Also receives all\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/view#props"}),"View")," props")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#style"}),Object(i.b)("inlineCode",{parentName:"a"},"style")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"reference"},"Reference"),Object(i.b)("h3",{id:"style"},Object(i.b)("inlineCode",{parentName:"h3"},"style")),Object(i.b)("p",null,"Style of the divider"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"style object"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"{height: 1, backgroundColor: #e1e8ee}")))))}p.isMDXComponent=!0},238:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(r),u=n,O=s["".concat(c,".").concat(u)]||s[u]||d[u]||i;return r?a.a.createElement(O,o(o({ref:t},b),{},{components:r})):a.a.createElement(O,o({ref:t},b))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<i;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);
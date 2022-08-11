"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42270],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,v=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(v,l(l({ref:t},c),{},{components:a})):n.createElement(v,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},72360:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const i="tabItem_OmH5";function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:a},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),i=a(72389),l=a(67392),o=a(7094),s=a(12466),p=a(86010);const c="tabList_uSqn",u="tabItem_LplD";function d(e){var t,a,i,d=e.lazy,m=e.block,v=e.defaultValue,h=e.values,f=e.groupId,g=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===v?v:null!=(t=null!=v?v:null==(a=b.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=b[0])?void 0:i.props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.U)(),x=w.tabGroupChoices,T=w.setTabGroupChoices,I=(0,r.useState)(N),E=I[0],j=I[1],O=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=x[f];null!=P&&P!==E&&k.some((function(e){return e.value===P}))&&j(P)}var Z=function(e){var t=e.currentTarget,a=O.indexOf(t),n=k[a].value;n!==E&&(C(t),j(n),null!=f&&T(f,n))},_=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;a=O[n]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;a=O[r]||O[O.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,p.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":m},g)},k.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return O.push(e)},onKeyDown:_,onFocus:Z,onClick:Z},i,{className:(0,p.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),d?(0,r.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},68205:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>v});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=a(9877),o=a(72360),s=a(44996),p=["components"],c={id:"installation",title:"",sidebar_label:"Installation"},u=void 0,d={unversionedId:"installation",id:"version-4.0.0-rc.6/installation",title:"",description:"Installation",source:"@site/versioned_docs/version-4.0.0-rc.6/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.6/installation.mdx",tags:[],version:"4.0.0-rc.6",frontMatter:{id:"installation",title:"",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},m={},v=[{value:"Installation",id:"installation",level:2},{value:"Stable",id:"stable",level:3},{value:"Bleeding Edge",id:"bleeding-edge",level:3},{value:"Peer dependencies",id:"peer-dependencies",level:2},{value:"Install react-native-vector-icons",id:"install-react-native-vector-icons",level:3},{value:"Install react-native-safe-area-context",id:"install-react-native-safe-area-context",level:3},{value:"Using Expo",id:"using-expo",level:2},{value:"New Expo project",id:"new-expo-project",level:3},{value:"Existing Expo project",id:"existing-expo-project",level:3},{value:"Using on Web",id:"using-on-web",level:2},{value:"Why do I have to set this up?",id:"why-do-i-have-to-set-this-up",level:3},{value:"Create React App",id:"create-react-app",level:3}],h={toc:v};function f(e){var t=e.components,a=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"stable"},"Stable"),(0,i.kt)("p",null,"Stable version of React Native Elements available on npm"),(0,i.kt)(l.Z,{groupId:"pkg",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @rneui/themed @rneui/base\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @rneui/themed @rneui/base\n")))),(0,i.kt)("h3",{id:"bleeding-edge"},"Bleeding Edge"),(0,i.kt)(l.Z,{groupId:"pkg",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @rneui/base@edge @rneui/themed@edge\n")),(0,i.kt)("p",null,"If you are facing issue while installing from ",(0,i.kt)("inlineCode",{parentName:"p"},"edge")," dist-tag, you can install directly from Github"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# @rneui/base\nnpm install react-native-elements/react-native-elements#base\n\n# @rneui/themed\nnpm install react-native-elements/react-native-elements#themed\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @rneui/base@edge @rneui/themed@edge\n")),(0,i.kt)("p",null,"If you are facing issue while installing from ",(0,i.kt)("inlineCode",{parentName:"p"},"edge")," dist-tag, you can install directly from Github"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# @rneui/base\nyarn add @rneui/base@github:react-native-elements/react-native-elements#base\n\n# @rneui/themed\nyarn add @rneui/themed@github:react-native-elements/react-native-elements#themed\n")))),(0,i.kt)("h2",{id:"peer-dependencies"},"Peer dependencies"),(0,i.kt)("h3",{id:"install-react-native-vector-icons"},"Install react-native-vector-icons"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://expo.io"},"Expo")," or\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-community/create-react-native-app"},"create-react-native-app"),"\nprojects include ",(0,i.kt)("strong",{parentName:"p"},"react-native-vector-icons")," out of the box, hence this step can be skipped."),(0,i.kt)("p",null,"If your project is a standard React Native project created using\n",(0,i.kt)("inlineCode",{parentName:"p"},"react-native init")," (it should have an ios/android directory), then you need to install ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-vector-icons"),"."),(0,i.kt)("p",null,"Or if you encounter the following error."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you see the ",(0,i.kt)("inlineCode",{parentName:"p"},"UNMET PEER DEPENDENCY")," warning for ",(0,i.kt)("strong",{parentName:"p"},"react-native-vector-icons")," like below, you can ignore it as ",(0,i.kt)("em",{parentName:"p"},"react-native-vector-icons")," is already installed by ",(0,i.kt)("em",{parentName:"p"},"expo")," or ",(0,i.kt)("em",{parentName:"p"},"crna"),"."),(0,i.kt)("img",{alt:"React Native Vector Icons Unmet Peer Dependency",src:(0,s.Z)("img/peer-dep-error.png")}))),(0,i.kt)("p",null,"Otherwise run the following command:"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Manual linking of react-native-vector-icons is not necessary if you're using ",(0,i.kt)("a",{parentName:"p",href:"mailto:react-native@0.60.0"},"react-native@0.60.0")," or above since it is done automatically. This will throw an error though it won't prevent the application from running. To fix this you'll simply have to run ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native unlink react-native-vector-icons")," and the process will run as expected."))),(0,i.kt)(l.Z,{defaultValue:"npm",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-vector-icons\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-vector-icons\n")))),(0,i.kt)("p",null,"Link the dependency"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx react-native link react-native-vector-icons\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"If you have any issues installing react-native-vector-icons, check out their\ninstallation guide\n",(0,i.kt)("a",{parentName:"em",href:"https://github.com/oblador/react-native-vector-icons#installation"},"here")," or\ndebug it using\n",(0,i.kt)("a",{parentName:"em",href:"https://github.com/react-native-elements/react-native-elements/issues/503"},"this issue"),".")),(0,i.kt)("h3",{id:"install-react-native-safe-area-context"},"Install react-native-safe-area-context"),(0,i.kt)("p",null,"If you have already installed ",(0,i.kt)("strong",{parentName:"p"},"react-native-safe-area-context")," as a dependency for\nyour project you can skip this step. Otherwise run the following command:"),(0,i.kt)(l.Z,{defaultValue:"npm",groupId:"pkg",values:[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-safe-area-context\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-safe-area-context\n")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Useful information.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Manual linking of react-native-safe-area-context is not necessary if you're using ",(0,i.kt)("a",{parentName:"p",href:"mailto:react-native@0.60.0"},"react-native@0.60.0")," or above since it is done automatically. This will throw an error though it won't prevent the application from running. To fix this you'll simply have to run ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native unlink react-native-safe-area-context")," and the process will run as expected."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx react-native link react-native-safe-area-context\n")),(0,i.kt)("p",null,"It is required to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"SafeAreaProvider")," to the outside of the app. The suggested way to do this is\nthe following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { SafeAreaProvider } from 'react-native-safe-area-context';\n\nfunction App() {\n  return <SafeAreaProvider>...</SafeAreaProvider>;\n}\n")),(0,i.kt)("h2",{id:"using-expo"},"Using Expo"),(0,i.kt)("h3",{id:"new-expo-project"},"New Expo project"),(0,i.kt)("p",null,"Create a new project with Expo CLI and React Native Elements template"),(0,i.kt)(l.Z,{defaultValue:"stable",values:[{label:"Stable",value:"stable"},{label:"Bleeding Edge",value:"edge"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"stable",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"expo init app --template @rneui/template\n"))),(0,i.kt)(o.Z,{value:"edge",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"expo init app --template @rneui/template@edge\n")))),(0,i.kt)("h3",{id:"existing-expo-project"},"Existing Expo project"),(0,i.kt)("p",null,"Just install the package and its peer dependencies"),(0,i.kt)("h2",{id:"using-on-web"},"Using on Web"),(0,i.kt)("p",null,"React Native Elements just like on mobile can be used in your web projects. This is possible using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/necolas/react-native-web"},"react-native-web"),". We'll highlight how to set this up using create-react-app."),(0,i.kt)("h3",{id:"why-do-i-have-to-set-this-up"},"Why do I have to set this up?"),(0,i.kt)("p",null,"On the web, you can usually use UI libraries directly from npm without any additional setup. However in react-native, it's a bit different."),(0,i.kt)("p",null,"The major difference is that React Native can support JSX and advanced javascript out the box. This means that we don't need to transpile our code before we ship it to npm. ",(0,i.kt)("strong",{parentName:"p"},"We ship JSX and advanced javascript directly to npm")," in React Native Elements, so we need to account for this in our web projects."),(0,i.kt)("h3",{id:"create-react-app"},"Create React App"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App")," is a very popular framework for building react applications. Unfortunately it doesn't allow much customization of the build setup. To accomplish this we'll be making use of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/timarney/react-app-rewired"},"react-app-rewired")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/arackaf/customize-cra"},"customize-cra"),"."),(0,i.kt)("p",null,"After creating a new create-react-app project, run the following commands."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add  @rneui/base @rneui/themed react-native-web react-native-vector-icons\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @babel/plugin-proposal-class-properties customize-cra react-app-rewired\n")),(0,i.kt)("p",null,"Secondly, create a ",(0,i.kt)("inlineCode",{parentName:"p"},"config-overrides.js")," file in the root of your project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const path = require('path');\nconst { override, addBabelPlugins, babelInclude } = require('customize-cra');\n\nmodule.exports = override(\n  ...addBabelPlugins('@babel/plugin-proposal-class-properties'),\n  babelInclude([\n    path.resolve(__dirname, 'node_modules/@rneui/base'),\n    path.resolve(__dirname, 'node_modules/@rneui/themed'),\n    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),\n    path.resolve(__dirname, 'node_modules/react-native-ratings'),\n    path.resolve(__dirname, 'src'),\n  ])\n);\n")),(0,i.kt)("p",null,"Also you should keep in mind that not all of React Native components are implemented for web-platform out-of-box.\nFor example, ",(0,i.kt)("inlineCode",{parentName:"p"},"Modal")," component is not yet implemented in ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-web"),". Therefore, to use some of our components\nyou may need to install additional third-party libraries that implement the missing functionality.\nFor ",(0,i.kt)("a",{parentName:"p",href:"/docs/components/overlay"},(0,i.kt)("inlineCode",{parentName:"a"},"Overlay"))," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/components/tooltip"},(0,i.kt)("inlineCode",{parentName:"a"},"Tooltip"))," components ",(0,i.kt)("inlineCode",{parentName:"p"},"Modal")," implementation is required."),(0,i.kt)("p",null,"Lastly, change your scripts in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," to use react-app-rewired:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'"scripts": {\n-   "start": "react-scripts start",\n+   "start": "react-app-rewired start",\n-   "build": "react-scripts build",\n+   "build": "react-app-rewired build",\n-   "test": "react-scripts test",\n+   "test": "react-app-rewired test"\n}\n')),(0,i.kt)("p",null,"At this point your app can start. However trying to use any components that use icons, will not show them. In your App.js, load these fonts as you would on the web with a style tag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<style type=\"text/css\">{`\n  @font-face {\n    font-family: 'MaterialIcons';\n    src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');\n  }\n\n  @font-face {\n    font-family: 'FontAwesome';\n    src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');\n  }\n`}</style>\n")),(0,i.kt)("p",null,"The full setup of the guide can be found at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-elements/create-react-app-example"},"https://github.com/react-native-elements/create-react-app-example"),"."))}f.isMDXComponent=!0}}]);
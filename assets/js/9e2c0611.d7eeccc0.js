"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73123:(e,t,n)=>{n(67294)},47669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=(n(73123),["components"]),l={id:"troubleshooting",title:"Troubleshooting"},p=void 0,c={unversionedId:"troubleshooting",id:"version-4.0.0-rc.6/troubleshooting",title:"Troubleshooting",description:"Although we try to make the experience of using React Native Elements",source:"@site/versioned_docs/version-4.0.0-rc.6/troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.6/troubleshooting.mdx",tags:[],version:"4.0.0-rc.6",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Overview",permalink:"/docs/customizing"}},s={},m=[{value:"You incorrectly spelt a component",id:"you-incorrectly-spelt-a-component",level:3},{value:"Importing a component from the wrong version",id:"importing-a-component-from-the-wrong-version",level:3},{value:"Using <code>react-native-init</code>",id:"using-react-native-init",level:3},{value:"Using an Expo app (create-react-native-app or Expo XDE)",id:"using-an-expo-app-create-react-native-app-or-expo-xde",level:3},{value:"Using a detached <code>create-react-native-app</code> app",id:"using-a-detached-create-react-native-app-app",level:3}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Although we try to make the experience of using React Native Elements\nhassle-free, time to time you may encounter some problems along the way."),(0,o.kt)("p",null,"On this page you can find solutions to commonly encountered issues."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{className:"admonition-content"},"Invariant Violation: Element type is invalid")),(0,o.kt)("p",null,"This error occurs when trying to import a component that doesn't exist. This\nusually happens for a few reasons:"),(0,o.kt)("h3",{id:"you-incorrectly-spelt-a-component"},"You incorrectly spelt a component"),(0,o.kt)("p",null,"Spelling a component incorrectly though very simple, happens occasionally."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// Incorrect\nimport { Listitem } from '@rneui/themed';\n\n// Correct\nimport { ListItem } from '@rneui/themed';\n")),(0,o.kt)("h3",{id:"importing-a-component-from-the-wrong-version"},"Importing a component from the wrong version"),(0,o.kt)("p",null,"This error occurs when you're trying to use a component from the wrong version.\nAt RNE they're some components that are only available in some versions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"Example:\n\n`<FormInput />` is only available in v0.19.1 and below. `<Input />` is only\navailable in `v1.0.0-beta1` and higher.\n")),(0,o.kt)("p",null,"To fix this, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Check your ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," for the version of ",(0,o.kt)("inlineCode",{parentName:"li"},"@rneui/themed")," you are\nusing."),(0,o.kt)("li",{parentName:"ol"},"View the documentation for your particular version on the website. See\navailable versions\n",(0,o.kt)("a",{parentName:"li",href:"/versions"},"here"),"\nor click the version number next to the logo in the header."),(0,o.kt)("li",{parentName:"ol"},"Checking the list of components on the left side bar, make sure you're using\nthe right component.")),(0,o.kt)("hr",null),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{className:"admonition-content"},"fontFamily (font-name) is not a system font")),(0,o.kt)("p",null,"This is a general error in react native, where you in your code, or a package\nyou are using, is trying to use a font that is not bundled with the platform or\nis not added to the project."),(0,o.kt)("p",null,"If you aren't using a custom font in your application, then it's likely that\nthe error comes from React Native Elements looking for\n",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-vector-icons"),"."),(0,o.kt)("p",null,"They're a couple ways to solve this depending on your setup."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#using-react-native-init"},"Using ",(0,o.kt)("inlineCode",{parentName:"a"},"react-native-init"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#using-an-expo-app-create-react-native-app-or-expo-xde"},"Using an Expo app (create-react-native-app or Expo XDE)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#using-a-detached-create-react-native-app-app"},"Using a detached ",(0,o.kt)("inlineCode",{parentName:"a"},"create-react-native-app")," app"))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"using-react-native-init"},"Using ",(0,o.kt)("inlineCode",{parentName:"h3"},"react-native-init")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Delete everything to be sure"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf node_modules yarn.lock\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install React Native Elements"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# yarn\nyarn && yarn add @rneui/base @rneui/themed\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install react-native-vector-icons"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# yarn\nyarn add react-native-vector-icons\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Link react-native-vector-icons. Learn more about\n",(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/linking.html"},"linking"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"react-native link react-native-vector-icons\n")))),(0,o.kt)("p",null,"If you encounter any red error screens during the process, try running these\ncommands:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"Unrecognized font x"'),(0,o.kt)("p",{parentName:"blockquote"},"iOS - ",(0,o.kt)("inlineCode",{parentName:"p"},"rm -rf ios/build")),(0,o.kt)("p",{parentName:"blockquote"},"Android - ",(0,o.kt)("inlineCode",{parentName:"p"},"rm -rf android/build && rm -rf android/app/build"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"Unable to resolve module x"'),(0,o.kt)("p",{parentName:"blockquote"},"npm -",(0,o.kt)("inlineCode",{parentName:"p"},"rm -rf node_modules && npm i")),(0,o.kt)("p",{parentName:"blockquote"},"yarn - ",(0,o.kt)("inlineCode",{parentName:"p"},"rm -rf node_modules && yarn"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"Unable to resolve module x"'),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"npm start -- --reset-cache"))),(0,o.kt)("h3",{id:"using-an-expo-app-create-react-native-app-or-expo-xde"},"Using an Expo app (create-react-native-app or Expo XDE)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Delete everything to be sure"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf node_modules yarn.lock package-lock.json\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install React Native Elements"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# yarn\nyarn && yarn add @rneui/base @rneui/themed\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install ",(0,o.kt)("inlineCode",{parentName:"p"},"@expo/vector-icons")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# yarn\nyarn add @expo/vector-icons --save\n")))),(0,o.kt)("h3",{id:"using-a-detached-create-react-native-app-app"},"Using a detached ",(0,o.kt)("inlineCode",{parentName:"h3"},"create-react-native-app")," app"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you choose a regular React Native project, use\n",(0,o.kt)("a",{parentName:"li",href:"#using-react-native-init"},"Solution 1")),(0,o.kt)("li",{parentName:"ul"},"If you choose to use Expo SDK (ExpoKit), use\n",(0,o.kt)("a",{parentName:"li",href:"#using-an-expo-app-create-react-native-app-or-expo-xde"},"Solution 2"))))}d.isMDXComponent=!0}}]);
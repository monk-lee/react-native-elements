"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21787,86025,52510],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>D});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),d=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(a),D=n,c=u["".concat(s,".").concat(D)]||u[D]||g[D]||i;return a?l.createElement(c,o(o({ref:t},p),{},{components:a})):l.createElement(c,o({ref:t},p))}));function D(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var d=2;d<i;d++)o[d]=a[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85987:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var l=a(87462),n=a(63366),i=(a(67294),a(3905)),o=a(16612),r=["components"],s={id:"dialog",title:"Dialog",slug:"/dialog"},d=void 0,p={unversionedId:"main/dialog",id:"version-4.0.0-beta.0/main/dialog",title:"Dialog",description:"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.",source:"@site/versioned_docs/version-4.0.0-beta.0/main/Dialog.md",sourceDirName:"main",slug:"/dialog",permalink:"/docs/4.0.0-beta.0/dialog",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/Dialog.md",tags:[],version:"4.0.0-beta.0",frontMatter:{id:"dialog",title:"Dialog",slug:"/dialog"}},g={},u=[{value:"Components",id:"components",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Dialog",id:"dialog",level:3},{value:"Dialog.Actions",id:"dialogactions",level:3},{value:"Dialog.Button",id:"dialogbutton",level:3},{value:"Dialog.Loading",id:"dialogloading",level:3},{value:"Dialog.Title",id:"dialogtitle",level:3},{value:"Reference",id:"reference",level:2},{value:"Dialog",id:"dialog-1",level:3},{value:"children",id:"children",level:4},{value:"isVisible",id:"isvisible",level:4},{value:"overlayStyle",id:"overlaystyle",level:4},{value:"pressableProps",id:"pressableprops",level:4},{value:"Dialog.Actions",id:"dialogactions-1",level:3},{value:"children",id:"children-1",level:4},{value:"Dialog.Button",id:"dialogbutton-1",level:3},{value:"Dialog.Loading",id:"dialogloading-1",level:3},{value:"loadingProps",id:"loadingprops",level:4},{value:"loadingStyle",id:"loadingstyle",level:4},{value:"Dialog.Title",id:"dialogtitle-1",level:3},{value:"title",id:"title",level:4},{value:"titleProps",id:"titleprops",level:4},{value:"titleStyle",id:"titlestyle",level:4}],D={toc:u};function c(e){var t=e.components,a=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},D,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks."),(0,i.kt)("p",null,"You can wrap any component with a simple Dialog component to display quick information to the user."),(0,i.kt)("p",null,"Also receives all ",(0,i.kt)("a",{parentName:"p",href:"https://reactnativeelements.com/docs/overlay#props"},"Overlay")," props except ",(0,i.kt)("inlineCode",{parentName:"p"},"fullscreen"),"."),(0,i.kt)("h2",{id:"components"},"Components"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dialogactions"},"Dialog.Actions"),"\nDefine Dialog Actions using this component."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dialogbutton"},"Dialog.Button"),"\nThis is used to add a button to the Dialog.\nReceives all ",(0,i.kt)("a",{parentName:"li",href:"button#props"},"Button")," props."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dialogloading"},"Dialog.Loading"),(0,i.kt)("inlineCode",{parentName:"li"},"DialogLoader")," allows adding loader to the Dialog. Loader is simply ActivityIndicator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dialogtitle"},"Dialog.Title"),(0,i.kt)("inlineCode",{parentName:"li"},"DialogTitle")," allows you to add title to the Dialog.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(o.default,{mdxType:"Usage"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("h3",{id:"dialog"},"Dialog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#children"},"children")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#isvisible"},"isVisible")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#overlaystyle"},"overlayStyle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#pressableprops"},"pressableProps"))),(0,i.kt)("h3",{id:"dialogactions"},"Dialog.Actions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#children"},"children"))),(0,i.kt)("h3",{id:"dialogbutton"},"Dialog.Button"),(0,i.kt)("p",null,"None"),(0,i.kt)("h3",{id:"dialogloading"},"Dialog.Loading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#loadingprops"},"loadingProps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#loadingstyle"},"loadingStyle"))),(0,i.kt)("h3",{id:"dialogtitle"},"Dialog.Title"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#title"},"title")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#titleprops"},"titleProps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#titlestyle"},"titleStyle"))),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("h3",{id:"dialog-1"},"Dialog"),(0,i.kt)("h4",{id:"children"},"children"),(0,i.kt)("p",null,"Add Enclosed components."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"isvisible"},"isVisible"),(0,i.kt)("p",null,"If true, the overlay is visible."),(0,i.kt)("p",null,"If true, the dialog is visible."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"overlaystyle"},"overlayStyle"),(0,i.kt)("p",null,"Style of the actual overlay."),(0,i.kt)("p",null,"Add additional styling to the internal Overlay component."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"pressableprops"},"pressableProps"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},'Omit<PressableProps, "onPress" or "onLongPress" or "onPressIn" or "onPressOut">'),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dialogactions-1"},"Dialog.Actions"),(0,i.kt)("h4",{id:"children-1"},"children"),(0,i.kt)("p",null,"Add Enclosed components as an action to the dialog."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dialogbutton-1"},"Dialog.Button"),(0,i.kt)("p",null,"None"),(0,i.kt)("h3",{id:"dialogloading-1"},"Dialog.Loading"),(0,i.kt)("h4",{id:"loadingprops"},"loadingProps"),(0,i.kt)("p",null,"Add additional props for ActivityIndicator component"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ActivityIndicatorProps"),(0,i.kt)("td",{parentName:"tr",align:null},"{ size: 'large' }")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"loadingstyle"},"loadingStyle"),(0,i.kt)("p",null,"Add additional styling for loading component."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dialogtitle-1"},"Dialog.Title"),(0,i.kt)("h4",{id:"title"},"title"),(0,i.kt)("p",null,"Add Dialog title."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"titleprops"},"titleProps"),(0,i.kt)("p",null,"Add additional props for Text component."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TextProps"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"titlestyle"},"titleStyle"),(0,i.kt)("p",null,"Add additional styling for title component."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Text Style(Object)"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("hr",null))}c.isMDXComponent=!0},16612:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var l=a(87462),n=a(63366),i=(a(67294),a(3905)),o=a(25562),r=["components"],s={},d=void 0,p={unversionedId:"main/usage/Dialog/Dialog",id:"version-4.0.0-beta.0/main/usage/Dialog/Dialog",title:"Dialog",description:"\x3c!-- To show the guide to configure the Dialog Component to a project.",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Dialog/Dialog.md",sourceDirName:"main/usage/Dialog",slug:"/main/usage/Dialog/",permalink:"/docs/4.0.0-beta.0/main/usage/Dialog/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Dialog/Dialog.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},g={},u=[],D={toc:u};function c(e){var t=e.components,a=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,l.Z)({},D,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.default,{mdxType:"Snack"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Web-platform specific note"),":"),(0,i.kt)("p",{parentName:"blockquote"},"You ",(0,i.kt)("strong",{parentName:"p"},"must")," pass a valid React Native ",(0,i.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/modal"},(0,i.kt)("inlineCode",{parentName:"a"},"Modal"))," component implementation\ninto ",(0,i.kt)("a",{parentName:"p",href:"#modalcomponent"},(0,i.kt)("inlineCode",{parentName:"a"},"ModalComponent"))," prop because ",(0,i.kt)("inlineCode",{parentName:"p"},"Modal")," component is not implemented yet in ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-web"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"...\nimport Modal from 'modal-react-native-web';\n\n...\n\n<Dialog ModalComponent={Modal} ... />\n...\n")))}c.isMDXComponent=!0},25562:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>D,frontMatter:()=>r,metadata:()=>d,toc:()=>g});var l=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],r={},s=void 0,d={unversionedId:"main/usage/Dialog/snack/index",id:"version-4.0.0-beta.0/main/usage/Dialog/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/Dialog/snack/index.md",sourceDirName:"main/usage/Dialog/snack",slug:"/main/usage/Dialog/snack/",permalink:"/docs/4.0.0-beta.0/main/usage/Dialog/snack/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/Dialog/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},p={},g=[],u={toc:g};function D(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"snack-player","data-snack-name":"RNE Dialog","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Button%2C%0A%20%20Dialog%2C%0A%20%20CheckBox%2C%0A%20%20ListItem%2C%0A%20%20Avatar%2C%0A%7D%20from%20'react-native-elements'%3B%0Aimport%20%7B%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Atype%20DialogComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Dialogs%3A%20React.FunctionComponent%3CDialogComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bvisible1%2C%20setVisible1%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5Bvisible2%2C%20setVisible2%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5Bvisible3%2C%20setVisible3%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5Bvisible4%2C%20setVisible4%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5Bvisible5%2C%20setVisible5%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5Bvisible6%2C%20setVisible6%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5Bchecked%2C%20setChecked%5D%20%3D%20useState(1)%3B%0A%0A%20%20const%20toggleDialog1%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20setVisible1(!visible1)%3B%0A%20%20%7D%3B%0A%20%20const%20toggleDialog2%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20setVisible2(!visible2)%3B%0A%20%20%7D%3B%0A%20%20const%20toggleDialog3%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20setVisible3(!visible3)%3B%0A%20%20%7D%3B%0A%20%20const%20toggleDialog4%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20setVisible4(!visible4)%3B%0A%20%20%7D%3B%0A%20%20const%20toggleDialog5%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20setVisible5(!visible5)%3B%0A%20%20%7D%3B%0A%20%20const%20toggleDialog6%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20setVisible6(!visible6)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20userlist%20%3D%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20name%3A%20'Amy%20Farha'%2C%0A%20%20%20%20%20%20avatar_url%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2FXdLjsJX_.jpg'%2C%0A%20%20%20%20%20%20subtitle%3A%20'amy.farha%40gmail.com'%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20name%3A%20'Chris%20Jackson'%2C%0A%20%20%20%20%20%20avatar_url%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2FKtCFjlD4.jpg'%2C%0A%20%20%20%20%20%20subtitle%3A%20'cjackson%40gmail.com'%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20name%3A%20'Amanda%20Martin'%2C%0A%20%20%20%20%20%20avatar_url%3A%0A%20%20%20%20%20%20%20%20'https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498529605908-f357a9af7bf5%3Fixlib%3Drb-0.3.5%26q%3D80%26fm%3Djpg%26crop%3Dfaces%26fit%3Dcrop%26h%3D200%26w%3D200%26s%3D047fade70e80ebb22ac8f09c04872c40'%2C%0A%20%20%20%20%20%20subtitle%3A%20'amandam%40gmail.com'%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Open%20Simple%20Dialog%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog1%7D%0A%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Open%20Mutli%20Action%20Dialog%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog2%7D%0A%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Open%20Loading%20Dialog%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog3%7D%0A%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Open%20Buttonless%20Dialog%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog4%7D%0A%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Open%20Custom%20Dialog%201%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog5%7D%0A%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Open%20Custom%20Dialog%202%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog6%7D%0A%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CDialog%0A%20%20%20%20%20%20%20%20isVisible%3D%7Bvisible1%7D%0A%20%20%20%20%20%20%20%20onBackdropPress%3D%7BtoggleDialog1%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CDialog.Title%20title%3D%22Dialog%20Title%22%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%3EDialog%20body%20text.%20Add%20relevant%20information%20here.%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%20%20%3CDialog%0A%20%20%20%20%20%20%20%20isVisible%3D%7Bvisible2%7D%0A%20%20%20%20%20%20%20%20onBackdropPress%3D%7BtoggleDialog2%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CDialog.Title%20title%3D%22Dialog%20Title%22%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%3EDialog%20body%20text.%20Add%20relevant%20information%20here.%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDialog.Actions%3E%0A%20%20%20%20%20%20%20%20%20%20%3CDialog.Button%20title%3D%22ACTION%201%22%20onPress%3D%7B()%20%3D%3E%20console.log('Primary%20Action%20Clicked!')%7D%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CDialog.Button%20title%3D%22ACTION%202%22%20onPress%3D%7B()%20%3D%3E%20console.log('Secondary%20Action%20Clicked!')%7D%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FDialog.Actions%3E%0A%20%20%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%20%20%3CDialog%20isVisible%3D%7Bvisible3%7D%20onBackdropPress%3D%7BtoggleDialog3%7D%3E%0A%20%20%20%20%20%20%20%20%3CDialog.Loading%20%2F%3E%0A%20%20%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%20%20%3CDialog%0A%20%20%20%20%20%20%20%20isVisible%3D%7Bvisible4%7D%0A%20%20%20%20%20%20%20%20onBackdropPress%3D%7BtoggleDialog4%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CDialog.Title%20title%3D%22Dialog%20Title%22%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%3EDialog%20body%20text.%20Add%20relevant%20information%20here.%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%20%20%3CDialog%0A%20%20%20%20%20%20%20%20isVisible%3D%7Bvisible5%7D%0A%20%20%20%20%20%20%20%20onBackdropPress%3D%7BtoggleDialog5%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CDialog.Title%20title%3D%22Select%20Preference%22%2F%3E%0A%20%20%20%20%20%20%20%20%7B%5B'Option%201'%2C%20'Option%202'%2C%20'Option%203'%5D.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CCheckBox%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7Bi%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%7Bl%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20backgroundColor%3A%20'white'%2C%20borderWidth%3A%200%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20checkedIcon%3D%22dot-circle-o%22%0A%20%20%20%20%20%20%20%20%20%20%20%20uncheckedIcon%3D%22circle-o%22%0A%20%20%20%20%20%20%20%20%20%20%20%20checked%3D%7Bchecked%20%3D%3D%3D%20i%20%2B%201%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setChecked(i%20%2B%201)%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20))%7D%0A%0A%20%20%20%20%20%20%20%20%3CDialog.Actions%3E%0A%20%20%20%20%20%20%20%20%20%20%3CDialog.Button%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22CONFIRM%22%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(%60Option%20%24%7Bchecked%7D%20was%20selected!%60)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20toggleDialog5()%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CDialog.Button%20title%3D%22CANCEL%22%20onPress%3D%7BtoggleDialog5%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FDialog.Actions%3E%0A%20%20%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%20%20%3CDialog%0A%20%20%20%20%20%20%20%20isVisible%3D%7Bvisible6%7D%0A%20%20%20%20%20%20%20%20onBackdropPress%3D%7BtoggleDialog6%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CDialog.Title%20title%3D%22Choose%20Account%22%2F%3E%0A%20%20%20%20%20%20%20%20%7Buserlist.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CListItem%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7Bi%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%20-10%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%208%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7BtoggleDialog6%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CAvatar%20rounded%20source%3D%7B%7B%20uri%3A%20l.avatar_url%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%20style%3D%7B%7B%20fontWeight%3A%20'700'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bl.name%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Subtitle%3E%7Bl.subtitle%7D%3C%2FListItem.Subtitle%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%3C%2FDialog%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20button%3A%20%7B%0A%20%20%20%20borderRadius%3A%206%2C%0A%20%20%20%20width%3A%20220%2C%0A%20%20%20%20margin%3A%2020%2C%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%20%7B%0A%20%20%20%20margin%3A%2020%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Dialogs%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}D.isMDXComponent=!0}}]);
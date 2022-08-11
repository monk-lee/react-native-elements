(self.webpackChunk=self.webpackChunk||[]).push([[87258],{45102:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(67294),l=n(13925),o=n(54236),r=n(40318),i=n(62290);const d=function(){var e=(0,r.Z)({componentName:"SpeedDial",props:{children:{value:"\n        <SpeedDial.Action\n          icon={{ name: 'add', color: '#fff' }}\n          title=\"Add\"\n          onPress={() => console.log('Add Something')}\n        />\n        <SpeedDial.Action\n          icon={{ name: 'delete', color: '#fff' }}\n          title=\"Delete\"\n          onPress={() => console.log('Delete Something')}\n        />"},isOpen:{type:i.n.Boolean,value:!0},openIcon:{type:i.n.Object,value:"{ name: 'close', color: '#fff' }"},onOpen:{type:i.n.Function,value:'() => console.log("onOpen()")'},onClose:{type:i.n.Function,value:'() => console.log("onClose()")'},transitionDuration:{type:i.n.Number,value:150},icon:{type:i.n.Object,value:"{ name: 'edit', color: '#fff' }"}},scope:{SpeedDial:l.SpeedDial},imports:{"@rneui/base":{named:["SpeedDial"]}}});return a.createElement(a.Fragment,null,a.createElement(o.Z,{params:e,containerStyle:{height:"200px"}}))}},55550:(e,t,n)=>{"use strict";n.d(t,{w:()=>d});var a=n(67294),l=n(35742);const o=n.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf",r=n.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf",i=n.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf";var d=function(){return a.createElement(l.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+r+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+i+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+o+") format('truetype');\n          }\n        "))}},54236:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(87462),l=n(67294),o=n(91262),r=n(18421),i=n(77356),d=n(41652),s=n(24309),p=n(16042),c=n(20346),m=n(30650);const u=function(e){var t=e.params,n=e.containerStyle,u=void 0===n?{}:n;return l.createElement(o.Z,{fallback:l.createElement(l.Fragment,null,"Loading...")},(function(){return l.createElement(c.X9.Provider,null,l.createElement(c.PK,{initialMetrics:m.o},l.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},u)},l.createElement(r.Z,(0,a.Z)({},t.compilerProps,{minHeight:62,placeholder:i.Z}))),l.createElement(d.Z,{msg:t.errorProps.msg,isPopup:!0}),l.createElement(s.Z,t.knobProps),l.createElement(d.Z,t.errorProps),l.createElement(p.E,t.actions)))}))}},65455:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>h,frontMatter:()=>m,metadata:()=>k,toc:()=>N});var a=n(87462),l=n(63366),o=(n(67294),n(3905)),r=n(55550),i=(n(9877),n(72360),["components"]),d={toc:[]};function s(e){var t=e.components,n=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"snack-player","data-snack-name":"RNE SpeedDial","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20SpeedDial%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0Aconst%20%5Bopen%2C%20setOpen%5D%20%3D%20React.useState(false)%3B%0Areturn%20(%0A%20%20%3CSpeedDial%0A%20%20%20%20isOpen%3D%7Bopen%7D%0A%20%20%20%20icon%3D%7B%7B%20name%3A%20'edit'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20openIcon%3D%7B%7B%20name%3A%20'close'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20onOpen%3D%7B()%20%3D%3E%20setOpen(!open)%7D%0A%20%20%20%20onClose%3D%7B()%20%3D%3E%20setOpen(!open)%7D%0A%20%20%3E%0A%20%20%20%20%3CSpeedDial.Action%0A%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'add'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20%20%20title%3D%22Add%22%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('Add%20Something')%7D%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3CSpeedDial.Action%0A%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'delete'%2C%20color%3A%20'%23fff'%20%7D%7D%0A%20%20%20%20%20%20title%3D%22Delete%22%0A%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('Delete%20Something')%7D%0A%20%20%20%20%2F%3E%0A%20%20%3C%2FSpeedDial%3E%0A)%3B%0A%7D%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}s.isMDXComponent=!0;var p=n(45102),c=["components"],m={id:"speeddial",title:"SpeedDial"},u=void 0,k={unversionedId:"components/speeddial",id:"components/speeddial",title:"SpeedDial",description:"When pressed, a floating action button can display three to six related actions in the form of a speed dial.",source:"@site/docs/components/SpeedDial.mdx",sourceDirName:"components",slug:"/components/speeddial",permalink:"/docs/next/components/speeddial",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/SpeedDial.mdx",tags:[],version:"current",frontMatter:{id:"speeddial",title:"SpeedDial"},sidebar:"docs",previous:{title:"SocialIcon",permalink:"/docs/next/components/socialicon"},next:{title:"SpeedDial.Action",permalink:"/docs/next/components/speeddial_action"}},f={},N=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],g={toc:N};function h(e){var t=e.components,n=(0,l.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.w,{mdxType:"IconsStyle"}),(0,o.kt)("p",null,"When pressed, a floating action button can display three to six related actions in the form of a speed dial.\nIf more than six actions are needed, something other than a FAB should be used to present them.\nUpon press, the FAB remains visible and emits a stack of related actions.\nIf the FAB is tapped in this state, it should either initiate its default action or close the speed dial actions."),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { SpeedDial } from "@rneui/themed";\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(s,{mdxType:"Usage"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Includes all ",(0,o.kt)("a",{parentName:"p",href:"button#props"},"Button"),", ",(0,o.kt)("a",{parentName:"p",href:"fab#props"},"FAB")," props."))),(0,o.kt)("div",{class:"table-responsive"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"backdropPressableProps")),(0,o.kt)("td",{parentName:"tr",align:null},"PressableProps"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Props for Backdrop Pressable")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"children")),(0,o.kt)("td",{parentName:"tr",align:null},"SpeedDial.Action"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"SpeedDial Action as children.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"isOpen")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"Opens the action stack.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"labelPressable")),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"onPress on Label Press for all Actions")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onClose")),(0,o.kt)("td",{parentName:"tr",align:null},"Function"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Function")),(0,o.kt)("td",{parentName:"tr",align:null},"Callback fired when the component requests to be closed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"onOpen")),(0,o.kt)("td",{parentName:"tr",align:null},"Function"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Function")),(0,o.kt)("td",{parentName:"tr",align:null},"Callback fired when the component requests to be open.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"openIcon")),(0,o.kt)("td",{parentName:"tr",align:null},"IconNode"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Icon shown on FAB when action stack is open.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"overlayColor")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Add overlay color to the speed dial.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"transitionDuration")),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"150")),(0,o.kt)("td",{parentName:"tr",align:null},"The duration for the transition, in milliseconds."))))),(0,o.kt)("h2",{id:"playground"},"Playground"),(0,o.kt)(p.Z,{mdxType:"Play"}))}h.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);
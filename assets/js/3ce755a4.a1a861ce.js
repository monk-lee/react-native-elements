(self.webpackChunk=self.webpackChunk||[]).push([[71600],{16962:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(67294),r=a(13925),l=a(54236),i=a(40318),o=a(62290);const s=function(){var e=(0,i.Z)({componentName:"FAB",props:{style:{type:o.n.Object,value:'{width:"80%",margin:20}'},placement:{type:o.n.Enum,options:{left:"left",right:"right"},value:"left"},color:{type:o.n.String,value:""},size:{type:o.n.Enum,options:{small:"small",large:"large"},value:"small"},visible:{type:o.n.Boolean,value:!1},upperCase:{type:o.n.Boolean,value:!1},overlayColor:{type:o.n.String,value:"#454545"},title:{type:o.n.String,value:"Create"},icon:{type:o.n.Object,value:"{ name: 'edit', color: '#fff' }"}},scope:{FAB:r.FAB},imports:{"@rneui/base":{named:["FAB"]}}});return n.createElement(n.Fragment,null,n.createElement(l.Z,{params:e}))}},54236:(e,t,a)=>{"use strict";a.d(t,{Z:()=>A});var n=a(87462),r=a(67294),l=a(91262),i=a(18421),o=a(77356),s=a(41652),p=a(24309),m=a(16042),d=a(20346),c=a(30650);const A=function(e){var t=e.params,a=e.containerStyle,A=void 0===a?{}:a;return r.createElement(l.Z,{fallback:r.createElement(r.Fragment,null,"Loading...")},(function(){return r.createElement(d.X9.Provider,null,r.createElement(d.PK,{initialMetrics:c.o},r.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},A)},r.createElement(i.Z,(0,n.Z)({},t.compilerProps,{minHeight:62,placeholder:o.Z}))),r.createElement(s.Z,{msg:t.errorProps.msg,isPopup:!0}),r.createElement(p.Z,t.knobProps),r.createElement(s.Z,t.errorProps),r.createElement(m.E,t.actions)))}))}},45182:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>d,metadata:()=>A,toc:()=>k});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=(a(9877),a(72360),["components"]),o={toc:[]};function s(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE FAB","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20Text%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20FAB%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Aexport%20default%20()%20%3D%3E%20%7B%0Aconst%20%5Bvisible%2C%20setVisible%5D%20%3D%20React.useState(true)%3B%0A%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CView%0A%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20paddingVertical%3A%205%2C%0A%20%20%20%20%20%20%20%20flexGrow%3A%201%2C%0A%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Small%20Size%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20loading%0A%20%20%20%20%20%20%20%20visible%3D%7Bvisible%7D%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'add'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20size%3D%22small%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Large%20Size%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20visible%3D%7Bvisible%7D%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'add'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20color%3D%22green%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20Primary%20Color%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20visible%3D%7Bvisible%7D%0A%20%20%20%20%20%20%20%20title%3D%22Navigate%22%0A%20%20%20%20%20%20%20%20upperCase%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'place'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7B%20color%3A%20'%23397af8'%2C%20paddingVertical%3A%2010%20%7D%7D%3EDisabled%3C%2FText%3E%0A%0A%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20visible%3D%7Bvisible%7D%0A%20%20%20%20%20%20%20%20disabled%0A%20%20%20%20%20%20%20%20title%3D%22Extended%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20name%3A%20'place'%2C%0A%20%20%20%20%20%20%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20visible%3D%7Bvisible%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setVisible(!visible)%7D%0A%20%20%20%20%20%20%20%20placement%3D%22right%22%0A%20%20%20%20%20%20%20%20title%3D%22Hide%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'delete'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20color%3D%22red%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CFAB%0A%20%20%20%20%20%20%20%20visible%3D%7B!visible%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setVisible(!visible)%7D%0A%20%20%20%20%20%20%20%20placement%3D%22left%22%0A%20%20%20%20%20%20%20%20title%3D%22Show%22%0A%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'edit'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20color%3D%22green%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}s.isMDXComponent=!0;var p=a(16962),m=["components"],d={id:"fab",title:"FAB"},c=void 0,A={unversionedId:"components/fab",id:"version-4.0.0-rc.3/components/fab",title:"FAB",description:"A floating action button (FAB) performs the primary, or most common, action on a screen.",source:"@site/versioned_docs/version-4.0.0-rc.3/components/FAB.mdx",sourceDirName:"components",slug:"/components/fab",permalink:"/docs/4.0.0-rc.3/components/fab",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.3/components/FAB.mdx",tags:[],version:"4.0.0-rc.3",frontMatter:{id:"fab",title:"FAB"},sidebar:"docs",previous:{title:"Divider",permalink:"/docs/4.0.0-rc.3/components/divider"},next:{title:"Header",permalink:"/docs/4.0.0-rc.3/components/header"}},u={},k=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],g={toc:k};function v(e){var t=e.components,a=(0,r.Z)(e,m);return(0,l.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A floating action button (FAB) performs the primary, or most common, action on a screen.\nIt appears in front of all screen content, typically as a circular shape with an icon in its center.\nAlso receives all ",(0,l.kt)("a",{parentName:"p",href:"https://reactnativeelements.com/docs/button#props"},"Button")," props."),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { FAB } from "@rneui/themed";\n')),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(s,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Includes all ",(0,l.kt)("a",{parentName:"p",href:"button#props"},"Button")," props."))),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"color")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Change the color of the FAB.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"placement")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"left")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"right")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"FAB placement at bottom, (optional) use ",(0,l.kt)("a",{parentName:"td",href:"#style"},(0,l.kt)("inlineCode",{parentName:"a"},"style"))," in case of custom placement.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"size")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"small")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"large")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"large")),(0,l.kt)("td",{parentName:"tr",align:null},"Change Size of FAB.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"style")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style for FAB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"upperCase")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Transform Extended Label text to uppercase.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"visible")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Decide the visibility of the FAB."))))),(0,l.kt)("h2",{id:"playground"},"Playground"),(0,l.kt)(p.Z,{mdxType:"Play"}))}v.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);
(self.webpackChunk=self.webpackChunk||[]).push([[99671],{30705:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var i=n(67294),a=n(13925),r=n(54236),l=n(40318),o=n(62290);const d=function(){var e=(0,l.Z)({componentName:"Divider",props:{style:{type:o.n.Object,value:'{width:"80%",margin:20}',description:"Apply style to the divider."},color:{type:o.n.String,value:a.defaultTheme.colors.primary,description:"Apply color to the divider."},inset:{type:o.n.Boolean,value:!1,description:"Applies inset to the divider if true. Default is left."},insetType:{type:o.n.String,value:"left",description:"Add inset to the divider in left, right, or in both direction. Choose among left, right, or middle."},subHeader:{type:o.n.String,value:"React native elements",description:"Adds a sub-header next to divider."},subHeaderStyle:{type:o.n.Object,value:"{}",description:"Adds styles to the sub header of divider."},width:{type:o.n.Number,value:1,description:"Add width to the divider."},orientation:{type:o.n.String,value:"horizontal",description:"Adds orientation to the divider."}},scope:{Divider:a.Divider},imports:{"@rneui/base":{named:["Divider"]}}});return i.createElement(i.Fragment,null,i.createElement(r.Z,{params:e}))}},55550:(e,t,n)=>{"use strict";n.d(t,{w:()=>d});var i=n(67294),a=n(35742);const r=n.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf",l=n.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf",o=n.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf";var d=function(){return i.createElement(a.Z,null,i.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+l+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+o+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+r+") format('truetype');\n          }\n        "))}},54236:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var i=n(87462),a=n(67294),r=n(91262),l=n(18421),o=n(77356),d=n(41652),s=n(24309),p=n(16042),m=n(20346),c=n(30650);const u=function(e){var t=e.params,n=e.containerStyle,u=void 0===n?{}:n;return a.createElement(r.Z,{fallback:a.createElement(a.Fragment,null,"Loading...")},(function(){return a.createElement(m.X9.Provider,null,a.createElement(m.PK,{initialMetrics:c.o},a.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},u)},a.createElement(l.Z,(0,i.Z)({},t.compilerProps,{minHeight:62,placeholder:o.Z}))),a.createElement(d.Z,{msg:t.errorProps.msg,isPopup:!0}),a.createElement(s.Z,t.knobProps),a.createElement(d.Z,t.errorProps),a.createElement(p.E,t.actions)))}))}},88427:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>v,toc:()=>D});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),l=n(55550),o=(n(9877),n(72360),["components"]),d={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE Divider","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useContext%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20Divider%2C%20useTheme%20%7D%20from%20'%40rneui%2Fthemed'%3B%0Aimport%20%7B%20ScrollView%2C%20StyleSheet%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Atype%20DividerViewTypes%20%3D%20%7B%7D%3B%0A%0Aconst%20DividerView%3A%20React.FunctionComponent%3CDividerViewTypes%3E%20%3D%20(props)%20%3D%3E%20%7B%0Aconst%20%7B%20theme%20%7D%20%3D%20useTheme()%3B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EHorizontal%20Dividers%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.horizontal%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3EHorizontal%20Divider%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20width%20and%20color%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20width%3D%7B5%7D%20color%3D%7Btheme%3F.colors%3F.primary%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EHorizontal%20Divider%20with%20Inset%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.horizontal%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20left%20inset%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20inset%3D%7Btrue%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20right%20inset%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20inset%3D%7Btrue%7D%20insetType%3D%22right%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3E%0A%20%20%20%20%20%20%20%20%20%20Horizontal%20Divider%20with%20middle%20inset%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20inset%3D%7Btrue%7D%20insetType%3D%22middle%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3EWelcome%20to%20RNE%20App%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EVertical%20Dividers%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.vertical%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3ELeft%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20orientation%3D%22vertical%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%3ERight%20text%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.vertical%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3ELeft%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%20orientation%3D%22vertical%22%20width%3D%7B5%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%3ERight%20text%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.subHeader%7D%3EDividers%20with%20SubHeader%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.horizontal%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3ELeft%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CDivider%0A%20%20%20%20%20%20%20%20%20%20subHeader%3D%22Divider%22%0A%20%20%20%20%20%20%20%20%20%20inset%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20%20%20subHeaderStyle%3D%7B%7B%20color%3A%20theme%3F.colors%3F.primary%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.horizontalText%7D%3ERight%20text%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AsubHeader%3A%20%7B%0A%20%20backgroundColor%20%3A%20%22%232089dc%22%2C%0A%20%20color%20%3A%20%22white%22%2C%0A%20%20textAlign%20%3A%20%22center%22%2C%0A%20%20paddingVertical%20%3A%205%2C%0A%20%20marginBottom%20%3A%2010%0A%7D%2C%0Ahorizontal%3A%20%7B%0A%20%20marginBottom%3A%2010%2C%0A%7D%2C%0AhorizontalText%3A%20%7B%0A%20%20textAlign%3A%20'center'%2C%0A%20%20fontSize%3A%2016%2C%0A%20%20marginVertical%3A%2010%2C%0A%7D%2C%0Avertical%3A%20%7B%0A%20%20marginBottom%3A%2010%2C%0A%20%20display%3A%20'flex'%2C%0A%20%20flexDirection%3A%20'row'%2C%0A%20%20justifyContent%3A%20'space-evenly'%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20DividerView%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}s.isMDXComponent=!0;var p=n(30705),m=["components"],c={id:"divider",title:"Divider"},u=void 0,v={unversionedId:"components/divider",id:"components/divider",title:"Divider",description:"Dividers are visual separators of content.",source:"@site/docs/components/Divider.mdx",sourceDirName:"components",slug:"/components/divider",permalink:"/docs/next/components/divider",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Divider.mdx",tags:[],version:"current",frontMatter:{id:"divider",title:"Divider"},sidebar:"docs",previous:{title:"Dialog.Title",permalink:"/docs/next/components/dialog_title"},next:{title:"FAB",permalink:"/docs/next/components/fab"}},A={},D=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],y={toc:D};function k(e){var t=e.components,n=(0,a.Z)(e,m);return(0,r.kt)("wrapper",(0,i.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.w,{mdxType:"IconsStyle"}),(0,r.kt)("p",null,"Dividers are visual separators of content.\nUse Divider when you want to make a distinction between sections of content.\nOur divider offers adding inset, color, orientation and subHeader to the component using props.\nAlso receives all ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props."),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Divider } from "@rneui/themed";\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(s,{mdxType:"Usage"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Includes all ",(0,r.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/view#props"},"View")," props."))),(0,r.kt)("div",{class:"table-responsive"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"color")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The color of the component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"inset")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Applies inset to the divider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"insetType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"middle")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"left")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"right")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"left")),(0,r.kt)("td",{parentName:"tr",align:null},"Applies inset to a specific direction to the divider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"orientation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vertical")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"horizontal")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"horizontal")),(0,r.kt)("td",{parentName:"tr",align:null},"Apply orientation to the divider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"style")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Applies style to the divider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subHeader")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Adds subHeader text to the divider.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subHeaderStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Adds style to the subHeader text of the divider")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"width")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Apply width to the divider."))))),(0,r.kt)("h2",{id:"playground"},"Playground"),(0,r.kt)(p.Z,{mdxType:"Play"}))}k.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);
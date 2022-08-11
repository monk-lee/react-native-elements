(self.webpackChunk=self.webpackChunk||[]).push([[73560],{74335:(t,e,n)=>{"use strict";n.d(e,{Z:()=>p});var a=n(67294),l=n(13925),r=n(54236),i=n(40318),o=n(62290);const p=function(){var t=(0,i.Z)({componentName:"SocialIcon",props:{activityIndicatorStyle:{type:o.n.Object,value:"",description:"Style to render when in loading state"},button:{type:o.n.Boolean,value:!1},Component:{type:o.n.ReactNode,description:"React Native Component. Default =>\tTouchableHighlight",value:null},disabled:{type:o.n.Boolean,value:!1},fontFamily:{type:o.n.String,description:"System font bold (iOS), Sans Serif Black (android)"},fontStyle:{type:o.n.Object,value:"{}"},fontWeight:{type:o.n.String,description:"specify font weight of title if set as a button with a title"},iconColor:{type:o.n.String,value:""},iconSize:{type:o.n.Number,value:25},iconStyle:{type:o.n.Object,value:"{}"},iconType:{type:o.n.String,value:"font-awesome"},light:{type:o.n.Boolean,value:!1},loading:{type:o.n.Boolean,value:!1},onLongPress:{type:o.n.Function,value:'() => console.log("onLongPress()")'},onPress:{type:o.n.Function,value:'() => console.log("onPress()")'},raised:{type:o.n.Boolean,value:!1},style:{type:o.n.Object,value:"{paddingHorizontal:10}"},title:{type:o.n.String,value:"GitHub",description:"title if made into a button."},type:{type:o.n.String,value:"github"},underlayColor:{type:o.n.String,value:""}},scope:{SocialIcon:l.SocialIcon},imports:{"@rneui/base":{named:["SocialIcon"]}}});return a.createElement(a.Fragment,null,a.createElement(r.Z,{params:t}))}},55550:(t,e,n)=>{"use strict";n.d(e,{w:()=>p});var a=n(67294),l=n(35742);const r=n.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf",i=n.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf",o=n.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf";var p=function(){return a.createElement(l.Z,null,a.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+i+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+o+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+r+") format('truetype');\n          }\n        "))}},54236:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var a=n(87462),l=n(67294),r=n(91262),i=n(18421),o=n(77356),p=n(41652),d=n(24309),s=n(16042),m=n(20346),c=n(30650);const u=function(t){var e=t.params,n=t.containerStyle,u=void 0===n?{}:n;return l.createElement(r.Z,{fallback:l.createElement(l.Fragment,null,"Loading...")},(function(){return l.createElement(m.X9.Provider,null,l.createElement(m.PK,{initialMetrics:c.o},l.createElement("div",{style:Object.assign({border:"1px solid var(--ifm-color-emphasis-200)",borderRadius:"var(--ifm-global-radius)",position:"relative"},u)},l.createElement(i.Z,(0,a.Z)({},e.compilerProps,{minHeight:62,placeholder:o.Z}))),l.createElement(p.Z,{msg:e.errorProps.msg,isPopup:!0}),l.createElement(d.Z,e.knobProps),l.createElement(p.Z,e.errorProps),l.createElement(s.E,e.actions)))}))}},11945:(t,e,n)=>{"use strict";n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>k,toc:()=>A});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=n(55550),o=(n(9877),n(72360),["components"]),p={toc:[]};function d(t){var e=t.components,n=(0,l.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"snack-player","data-snack-name":"RNE Social Icon","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20SocialIcon%2C%20SocialIconProps%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20IconData%20%3D%20%7B%0Atype%3A%20SocialMediaType%3B%0AiconType%3A%20string%3B%0A%7D%3B%0A%0Aconst%20dataList%3A%20Partial%3CIconData%3E%5B%5D%20%3D%20%5B%0A%7B%0A%20%20type%3A%20'facebook'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'twitter'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'google-plus-official'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'google'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'pinterest'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'linkedin'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'youtube'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'vimeo'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'tumblr'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'instagram'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'quora'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'flickr'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'foursquare'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'wordpress'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'stumbleupon'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'github'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'github-alt'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'twitch'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'medium'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'soundcloud'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'stack-overflow'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'gitlab'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'angellist'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'codepen'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'weibo'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'vk'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'facebook-messenger'%2C%0A%20%20iconType%3A%20'material-community'%2C%0A%7D%2C%0A%7B%0A%20%20type%3A%20'whatsapp'%2C%0A%7D%2C%0A%5D%3B%0A%0Atype%20SocialIconsComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20SocialIcons%3A%20React.FunctionComponent%3CSocialIconsComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20socialProps%20%3D%20%7B%7D%3B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%7B_.chunk(dataList%2C%203).map(%0A%20%20%20%20%20%20%20%20(chunk%3A%20Partial%3CIconData%3E%5B%5D%2C%20chunkIndex%3A%20React.Key)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginTop%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'%234c4c4c'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7BchunkIndex%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Bchunk.map((l%3A%20Partial%3CIconData%3E%2C%20i%3A%20React.Key)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CSocialIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%7Bl.type%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconType%3D%7Bl.iconType%20%3F%20l.iconType%20%3A%20'font-awesome'%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7B%60%24%7BchunkIndex%7D-%24%7Bi%7D%60%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20)%7D%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aexport%20default%20SocialIcons%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0;var s=n(74335),m=["components"],c={id:"socialicon",title:"SocialIcon"},u=void 0,k={unversionedId:"components/socialicon",id:"components/socialicon",title:"SocialIcon",description:"SocialIcons are visual cues to online and social media networks. We offer a varied range of social icons.",source:"@site/docs/components/SocialIcon.mdx",sourceDirName:"components",slug:"/components/socialicon",permalink:"/docs/next/components/socialicon",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/SocialIcon.mdx",tags:[],version:"current",frontMatter:{id:"socialicon",title:"SocialIcon"},sidebar:"docs",previous:{title:"Skeleton",permalink:"/docs/next/components/skeleton"},next:{title:"SpeedDial",permalink:"/docs/next/components/speeddial"}},g={},A=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"Playground",id:"playground",level:2}],N={toc:A};function y(t){var e=t.components,n=(0,l.Z)(t,m);return(0,r.kt)("wrapper",(0,a.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(i.w,{mdxType:"IconsStyle"}),(0,r.kt)("p",null,"SocialIcons are visual cues to online and social media networks. We offer a varied range of social icons."),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { SocialIcon } from "@rneui/themed";\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(d,{mdxType:"Usage"}),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("div",{class:"table-responsive"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Component")),(0,r.kt)("td",{parentName:"tr",align:null},"React Component"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Press handlers present then Pressable else View")),(0,r.kt)("td",{parentName:"tr",align:null},"Type of button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"activityIndicatorStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Style to render when in loading state.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"button")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Creates button with a social icon.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disabled")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Disables the button, if true.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fontFamily")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify different font family.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fontStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify text styling.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fontWeight")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify font weight of title if set as a button with a title.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iconColor")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"white")),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the color of the icon.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iconSize")),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"24")),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the size of the icon.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iconStyle")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Extra styling for icon component.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"iconType")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"font-awesome")),(0,r.kt)("td",{parentName:"tr",align:null},"Type of icon set. ",(0,r.kt)("a",{parentName:"td",href:"icon#available-icon-sets"},"Supported sets here"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"light")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Reverses icon color scheme, setting background to white and icon to primary color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"loading")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Shows loading indicator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onLongPress")),(0,r.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a long-tap gesture is detected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onPress")),(0,r.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a single tap gesture is detected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onPressIn")),(0,r.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a touch is engaged before ",(0,r.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onPressOut")),(0,r.kt)("td",{parentName:"tr",align:null},"GestureResponderEventHandler"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a touch is released before ",(0,r.kt)("inlineCode",{parentName:"td"},"onPress"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pressableProps")),(0,r.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"raised")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Raised adds a drop shadow, set to false to remove.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"small")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Decides the size of the activity indicator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"style")),(0,r.kt)("td",{parentName:"tr",align:null},"View Style"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Adds styling to the button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Title if made into a button.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"SocialMediaType"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Social media type.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"underlayColor")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Add Underlay color."))))),(0,r.kt)("h2",{id:"playground"},"Playground"),(0,r.kt)(s.Z,{mdxType:"Play"}))}y.isMDXComponent=!0},33770:()=>{},72950:()=>{},54882:()=>{}}]);
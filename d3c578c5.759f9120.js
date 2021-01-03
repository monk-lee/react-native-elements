(window.webpackJsonp=window.webpackJsonp||[]).push([[131,159],{205:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return O}));var n=a(3),b=a(7),r=(a(0),a(238)),c=a(74),l={id:"tile",title:"Tile"},i={unversionedId:"tile",id:"tile",isDocsHomePage:!1,title:"Tile",description:"Tiles like Cards, are a convenient way to display related content about a single",source:"@site/docs/tile.md",slug:"/tile",permalink:"/docs/next/tile",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/tile.md",version:"current",sidebar:"docs",previous:{title:"Text",permalink:"/docs/next/text"},next:{title:"Tooltip",permalink:"/docs/next/tooltip"}},o=[{value:"Usage",id:"usage",children:[{value:"Featured Tile",id:"featured-tile",children:[]},{value:"Featured Tile with Icon",id:"featured-tile-with-icon",children:[]},{value:"Tile with Icon",id:"tile-with-icon",children:[]}]}],p={rightToc:o};function O(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Tiles like Cards, are a convenient way to display related content about a single\nsubject."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This component was inspired from ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/shoutem/ui"}),"Shoutem UI"),"\nby ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/shoutem"}),"Shoutem"),". Check out\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://shoutem.github.io/"}),"Shoutem")," if you haven't already!")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("h3",{id:"featured-tile"},"Featured Tile"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://cloud.githubusercontent.com/assets/6476108/21969491/beea4630-db6c-11e6-8913-7cc8813e35d6.png",alt:"screen shot 2017-01-15 at 9 50 15 pm"}))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { Tile } from 'react-native-elements';\n\n<Tile\n  imageSrc={require('./img/path')}\n  title=\"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem\"\n  featured\n  caption=\"Some Caption Text\"\n/>;\n")),Object(r.b)("h3",{id:"featured-tile-with-icon"},"Featured Tile with Icon"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://cloud.githubusercontent.com/assets/6476108/21969581/6004e408-db6d-11e6-9379-556a0c5e967a.png",alt:"screen shot 2017-01-15 at 9 50 22 pm"}))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { Tile } from 'react-native-elements';\n\n<Tile\n  imageSrc={require('./img/path')}\n  icon={{ name: 'play-circle', type: 'font-awesome' }}\n  featured\n/>;\n")),Object(r.b)("h3",{id:"tile-with-icon"},"Tile with Icon"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://cloud.githubusercontent.com/assets/6476108/21969683/fce073f0-db6d-11e6-8d03-6e42c15627a9.png",alt:"screen shot 2017-01-15 at 9 50 34 pm"}))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { Tile } from 'react-native-elements';\n\n<Tile\n  imageSrc={require('./img/path')}\n  title=\"Lorem ipsum dolor sit amet, consectetur\"\n  icon={{ name: 'play-circle', type: 'font-awesome' }} // optional\n  contentContainerStyle={{ height: 70 }}\n>\n  <View\n    style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}\n  >\n    <Text>Caption</Text>\n    <Text>Caption</Text>\n  </View>\n</Tile>;\n")),Object(r.b)("hr",null),Object(r.b)(c.default,{mdxType:"Props"}),Object(r.b)("hr",null))}O.isMDXComponent=!0},238:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return d}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),p=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},O=function(e){var t=p(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},m=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=p(a),m=n,d=O["".concat(c,".").concat(m)]||O[m]||j[m]||r;return a?b.a.createElement(d,l(l({ref:t},o),{},{components:a})):b.a.createElement(d,l({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<r;o++)c[o]=a[o];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),b=a(7),r=(a(0),a(238)),c={},l={unversionedId:"props/tile",id:"props/tile",isDocsHomePage:!1,title:"tile",description:"Props",source:"@site/docs/props/tile.md",slug:"/props/tile",permalink:"/docs/next/props/tile",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/props/tile.md",version:"current"},i=[{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>activeOpacity</code>",id:"activeopacity",children:[]},{value:"<code>caption</code>",id:"caption",children:[]},{value:"<code>captionStyle</code>",id:"captionstyle",children:[]},{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>contentContainerStyle</code>",id:"contentcontainerstyle",children:[]},{value:"<code>featured</code>",id:"featured",children:[]},{value:"<code>height</code>",id:"height",children:[]},{value:"<code>icon</code>",id:"icon",children:[]},{value:"<code>iconContainerStyle</code>",id:"iconcontainerstyle",children:[]},{value:"<code>ImageComponent</code>",id:"imagecomponent",children:[]},{value:"<code>imageContainerStyle</code>",id:"imagecontainerstyle",children:[]},{value:"<code>imageProps</code>",id:"imageprops",children:[]},{value:"<code>imageSrc</code>",id:"imagesrc",children:[]},{value:"<code>onPress</code>",id:"onpress",children:[]},{value:"<code>overlayContainerStyle</code>",id:"overlaycontainerstyle",children:[]},{value:"<code>title</code>",id:"title",children:[]},{value:"<code>titleNumberOfLines</code>",id:"titlenumberoflines",children:[]},{value:"<code>titleStyle</code>",id:"titlestyle",children:[]},{value:"<code>width</code>",id:"width",children:[]}]}],o={rightToc:i};function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Also receives all\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://reactnative.dev/docs/touchablenativefeedback.html#props"}),"TouchableNativeFeedback"),"\n(Android) or\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://reactnative.dev/docs/touchableopacity.html#props"}),"TouchableOpacity"),"\n(iOS) props")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#activeopacity"}),Object(r.b)("inlineCode",{parentName:"a"},"activeOpacity"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#caption"}),Object(r.b)("inlineCode",{parentName:"a"},"caption"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#captionstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"captionStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#containerstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"containerStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#contentcontainerstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"contentContainerStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#featured"}),Object(r.b)("inlineCode",{parentName:"a"},"featured"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#height"}),Object(r.b)("inlineCode",{parentName:"a"},"height"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#icon"}),Object(r.b)("inlineCode",{parentName:"a"},"icon"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#iconcontainerstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"iconContainerStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#imagecomponent"}),Object(r.b)("inlineCode",{parentName:"a"},"ImageComponent"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#imagecontainerstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"imageContainerStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#imageprops"}),Object(r.b)("inlineCode",{parentName:"a"},"imageProps"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#imagesrc"}),Object(r.b)("inlineCode",{parentName:"a"},"imageSrc"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#onpress"}),Object(r.b)("inlineCode",{parentName:"a"},"onPress"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#overlaycontainerstyle"}),Object(r.b)("inlineCode",{parentName:"a"},"overlayContainerStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#title"}),Object(r.b)("inlineCode",{parentName:"a"},"title"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#titlenumberoflines"}),Object(r.b)("inlineCode",{parentName:"a"},"titleNumberOfLines"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#titlestyle"}),Object(r.b)("inlineCode",{parentName:"a"},"titleStyle"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#width"}),Object(r.b)("inlineCode",{parentName:"a"},"width")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"reference"},"Reference"),Object(r.b)("h3",{id:"activeopacity"},Object(r.b)("inlineCode",{parentName:"h3"},"activeOpacity")),Object(r.b)("p",null,"Number passed to control opacity on press (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0.2")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"caption"},Object(r.b)("inlineCode",{parentName:"h3"},"caption")),Object(r.b)("p",null,"Text inside the tilt when tile is featured"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string ",Object(r.b)("strong",{parentName:"td"},"OR")," React element or component"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"captionstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"captionStyle")),Object(r.b)("p",null,"Styling for the caption (optional); You only use this if ",Object(r.b)("inlineCode",{parentName:"p"},"caption")," is a string"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"containerstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(r.b)("p",null,"Styling for the outer tile container (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"contentcontainerstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"contentContainerStyle")),Object(r.b)("p",null,"Styling for bottom container when not featured tile (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"featured"},Object(r.b)("inlineCode",{parentName:"h3"},"featured")),Object(r.b)("p",null,"Changes the look of the tile (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"height"},Object(r.b)("inlineCode",{parentName:"h3"},"height")),Object(r.b)("p",null,"Height for the tile"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Device Width ","*"," 0.8")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"icon"},Object(r.b)("inlineCode",{parentName:"h3"},"icon")),Object(r.b)("p",null,"Icon Component Props (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object {name: string, color: string, size: number, type: string (default is material, or choose from ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/props/icon#available-icon-sets"}),"supported icon sets"),"), iconStyle: object(style)}"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"iconcontainerstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"iconContainerStyle")),Object(r.b)("p",null,"Styling for the outer icon container (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"imagecomponent"},Object(r.b)("inlineCode",{parentName:"h3"},"ImageComponent")),Object(r.b)("p",null,"Custom ImageComponent for Tile"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"React component or element"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"BackgroundImage")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"imagecontainerstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"imageContainerStyle")),Object(r.b)("p",null,"Styling for the image (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"imageprops"},Object(r.b)("inlineCode",{parentName:"h3"},"imageProps")),Object(r.b)("p",null,'Optional properties to pass to the image if provided e.g "resizeMode" (options)'),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"{",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/props/image#props"}),"...Image props"),"}"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"imagesrc"},Object(r.b)("inlineCode",{parentName:"h3"},"imageSrc")),Object(r.b)("p",null,"Source for the image (required)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (image)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"onpress"},Object(r.b)("inlineCode",{parentName:"h3"},"onPress")),Object(r.b)("p",null,"Function to call when tile is pressed (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function (event)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"overlaycontainerstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"overlayContainerStyle")),Object(r.b)("p",null,"Styling for the overlay container when using featured tile (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"title"},Object(r.b)("inlineCode",{parentName:"h3"},"title")),Object(r.b)("p",null,"Text inside the tile (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"titlenumberoflines"},Object(r.b)("inlineCode",{parentName:"h3"},"titleNumberOfLines")),Object(r.b)("p",null,"Number of lines for Title"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"titlestyle"},Object(r.b)("inlineCode",{parentName:"h3"},"titleStyle")),Object(r.b)("p",null,"Styling for the title (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"width"},Object(r.b)("inlineCode",{parentName:"h3"},"width")),Object(r.b)("p",null,"Width for the tile (optional)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Device Width")))))}p.isMDXComponent=!0}}]);
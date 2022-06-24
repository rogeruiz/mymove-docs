"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[1710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13627:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={sidebar_position:7},a="Icons",s={unversionedId:"frontend/guides/icons",id:"frontend/guides/icons",title:"Icons",description:"MilMove takes the majority of its icons from Font Awesome, and uses react-fontawesome in order to be able to easily render FontAwesome icons in React. We are using the library implementation described here, so there is a src/icons.js file that initializes all of the icons, and is included in the app entry point (as well as Storybook and Jest config files).",source:"@site/docs/frontend/guides/icons.md",sourceDirName:"frontend/guides",slug:"/frontend/guides/icons",permalink:"/mymove-docs/docs/frontend/guides/icons",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/frontend/guides/icons.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"frontendSidebar",previous:{title:"How To Store UI State in Redux",permalink:"/mymove-docs/docs/frontend/guides/store-ui-state-in-redux"},next:{title:"React forms using Formik",permalink:"/mymove-docs/docs/frontend/guides/react-forms-using-formik"}},c={},l=[{value:"Using Existing Icons",id:"using-existing-icons",level:2},{value:"Adding New Icons",id:"adding-new-icons",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"icons"},"Icons"),(0,r.kt)("p",null,"MilMove takes the majority of its icons from ",(0,r.kt)("a",{parentName:"p",href:"https://fontawesome.com/"},"Font Awesome"),", and uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FortAwesome/react-fontawesome"},"react-fontawesome")," in order to be able to easily render FontAwesome icons in React. We are using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FortAwesome/react-fontawesome#build-a-library-to-reference-icons-throughout-your-app-more-conveniently"},"library implementation described here"),", so there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"src/icons.js")," file that initializes all of the icons, and is included in the app entry point (as well as Storybook and Jest config files)."),(0,r.kt)("h2",{id:"using-existing-icons"},"Using Existing Icons"),(0,r.kt)("p",null,"To view icons we have already added, you can view the ",(0,r.kt)("a",{parentName:"p",href:"https://storybook.dp3.us/?path=/story/global-icons--all"},"Global > Icons page in Storybook"),". Each icon is annotated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"icon")," prop value needed to use that icon."),(0,r.kt)("p",null,"Since we have set up the react-fontawesome icon library, you don't need to import individual icons into a component in order to use them. All you need to do is import the ",(0,r.kt)("inlineCode",{parentName:"p"},"FontAwesomeIcon")," component (if it's not already imported), and use it with the correct ",(0,r.kt)("inlineCode",{parentName:"p"},"icon")," prop (usually the icon name as a string, in snake-case and without the ",(0,r.kt)("inlineCode",{parentName:"p"},"fa")," prefix):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'\n\n<FontAwesomeIcon icon=\"file\" />\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You may notice some icons have an ",(0,r.kt)("inlineCode",{parentName:"p"},"icon")," prop that is an array, where the first item is a FontAwesome icon set prefix, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"far"),". That's to indicate the icon belongs to the ",(0,r.kt)("inlineCode",{parentName:"p"},"free-regular-svg-icons")," bundle, instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"free-solid-svg-icons")," (which is the default). More about the ",(0,r.kt)("inlineCode",{parentName:"p"},"icon")," prop can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FortAwesome/react-fontawesome#build-a-library-to-reference-icons-throughout-your-app-more-conveniently"},"here"),".")),(0,r.kt)("p",null,"react-fontawesome lets you do some basic customization using props, like change the size and orientation. See full documentation ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FortAwesome/react-fontawesome#features"},"here"),". Color is set using the ",(0,r.kt)("inlineCode",{parentName:"p"},"color")," CSS property (since the icons are rendered as SVG, they can be styled using CSS as well)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You do ",(0,r.kt)("em",{parentName:"p"},"not")," need to add additional FontAwesome CSS classes (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"fa"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"far"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fa-sort"),") to the component.")),(0,r.kt)("h2",{id:"adding-new-icons"},"Adding New Icons"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Find the icon you want to add by searching at ",(0,r.kt)("a",{parentName:"li",href:"https://fontawesome.com/icons?d=gallery"},"https://fontawesome.com/icons?d=gallery"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Only the ",(0,r.kt)("inlineCode",{parentName:"p"},"free-solid-svg-icons")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"free-regular-svg-icons"),' sets are included in this project. When you search, make sure to filter by "Free", "Solid" and "Regular".')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Add the icon using its name to ",(0,r.kt)("inlineCode",{parentName:"li"},"src/icons.js"),". The icon should be imported from the corresponding @fortawesome package (either ",(0,r.kt)("inlineCode",{parentName:"li"},"free-solid-svg-icons")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"free-regular-svg-icons"),"), and then added to the list of icons passed into ",(0,r.kt)("inlineCode",{parentName:"li"},"library.add()"),". It should be prefixed with ",(0,r.kt)("inlineCode",{parentName:"li"},"fa")," and camelCased. For example, to add ",(0,r.kt)("a",{parentName:"li",href:"https://fontawesome.com/icons/air-freshener?style=solid"},"air-freshener"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// src/icons.js\n\n  import {\n    // other existing icons...\n+   faAirFreshener,\n  } from '@fortawesome/free-solid-svg-icons'\n\n  library.add(\n    // other existing icons...\n+   faAirFreshener\n  )\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Also see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FortAwesome/react-fontawesome#how-do-i-import-the-same-icon-from-two-different-styles"},'"How do I import the same icon from two different styles"'))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Add an example of the icon to the Icons Storybook page (",(0,r.kt)("inlineCode",{parentName:"li"},"src/stories/icons.stories.jsx"),").")))}p.isMDXComponent=!0}}]);
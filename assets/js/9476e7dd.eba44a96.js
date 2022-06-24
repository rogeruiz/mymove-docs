"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5263],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(a),u=s,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},79075:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),s=(a(67294),a(3905));const r={title:"0044 Use camelCase for API params"},i="Use camelCase for API params",o={unversionedId:"adrs/params-styling",id:"adrs/params-styling",title:"0044 Use camelCase for API params",description:"All API params should use the same style of casing (camel, snake, kebab, etc.)to maintain consistency across the code base.",source:"@site/docs/adrs/0044-params-styling.md",sourceDirName:"adrs",slug:"/adrs/params-styling",permalink:"/mymove-docs/docs/adrs/params-styling",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0044-params-styling.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{title:"0044 Use camelCase for API params"},sidebar:"adrsSidebar",previous:{title:"0043 Handling time in the Prime API",permalink:"/mymove-docs/docs/adrs/prime-time"},next:{title:"0045 Nesting Swagger paths in the Prime API with multiple IDs",permalink:"/mymove-docs/docs/adrs/nesting-swagger-paths"}},l={},c=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Leave everything as-is. Allow mixed cases in yaml files",id:"leave-everything-as-is-allow-mixed-cases-in-yaml-files",level:3},{value:"Choose one case style and implement across the code base",id:"choose-one-case-style-and-implement-across-the-code-base",level:3}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"use-camelcase-for-api-params"},"Use camelCase for API params"),(0,s.kt)("p",null,"All API params should use the same style of casing (camel, snake, kebab, etc.)to maintain consistency across the code base."),(0,s.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Leave everything as-is. Allow mixed cases in yaml files."),(0,s.kt)("li",{parentName:"ul"},"Choose one case style and implement across the code base.")),(0,s.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Chosen Alternative: ",(0,s.kt)("strong",{parentName:"li"},"Use camelCase for all API params."))),(0,s.kt)("p",null,"Consistency is important and using mixed cases is confusing. We selected camelCase because it's predominant in the code base and required the least amount of effort to implement."),(0,s.kt)("p",null,"It's also used in ",(0,s.kt)("inlineCode",{parentName:"p"},"orders.yaml"),", which we cannot change because of different services that download and use it. By sticking with camelCase, all of our yaml files will use the same standard and prevent further confusion."),(0,s.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,s.kt)("h3",{id:"leave-everything-as-is-allow-mixed-cases-in-yaml-files"},"Leave everything as-is. Allow mixed cases in yaml files"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"+")," No changes needed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-")," Confusing for developers"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-")," No documented standard sets us up to repeat the same conversation in the future"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-")," Code base is inconsistent")),(0,s.kt)("h3",{id:"choose-one-case-style-and-implement-across-the-code-base"},"Choose one case style and implement across the code base"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"+")," Clear standard for developers to use"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"+")," Saves time and energy discussing preferred styles in the future"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"+")," Code base is consistent"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-")," Requires manual changes in yaml files and across front-end components")))}d.isMDXComponent=!0}}]);
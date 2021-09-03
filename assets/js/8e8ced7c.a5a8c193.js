"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[7521],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,g=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2100:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={},l="How to revert a change",u={unversionedId:"old-wiki/revert-a-change",id:"old-wiki/revert-a-change",isDocsHomePage:!1,title:"How to revert a change",description:"On Staging app",source:"@site/docs/old-wiki/revert-a-change.md",sourceDirName:"old-wiki",slug:"/old-wiki/revert-a-change",permalink:"/docs/old-wiki/revert-a-change",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/old-wiki/revert-a-change.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pairing Sessions",permalink:"/docs/old-wiki/pairing"},next:{title:"Route Planner Guide",permalink:"/docs/old-wiki/route-planner"}},p=[{value:"On Staging app",id:"on-staging-app",children:[]},{value:"On Production app",id:"on-production-app",children:[]}],s={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-revert-a-change"},"How to revert a change"),(0,i.kt)("h2",{id:"on-staging-app"},"On Staging app"),(0,i.kt)("p",null,"Go to Github and find the pr with the change you'd like to revert. Click the revert button. This will generate a pr for you that reverts the change. You'll still need a reviewer to approve the pr."),(0,i.kt)("p",null,"Note that this will only revert code changes (and not migration changes), so you'll need to consider if reverting the code, but not the db migrations will cause any problems."),(0,i.kt)("p",null,"Once CI passes, it should automatically deploy to staging."),(0,i.kt)("h2",{id:"on-production-app"},"On Production app"),(0,i.kt)("p",null,"Still to be discovered..."))}d.isMDXComponent=!0}}]);
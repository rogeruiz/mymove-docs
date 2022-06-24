"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2776],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),g=o,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},56289:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:8},i="How to revert a change",c={unversionedId:"backend/guides/how-to/revert-a-change",id:"backend/guides/how-to/revert-a-change",title:"How to revert a change",description:"On Staging app",source:"@site/docs/backend/guides/how-to/revert-a-change.md",sourceDirName:"backend/guides/how-to",slug:"/backend/guides/how-to/revert-a-change",permalink:"/mymove-docs/docs/backend/guides/how-to/revert-a-change",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/how-to/revert-a-change.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"backendSidebar",previous:{title:"How to upgrade Node",permalink:"/mymove-docs/docs/backend/guides/how-to/upgrade-node"},next:{title:"How to Soft Delete",permalink:"/mymove-docs/docs/backend/guides/how-to/soft-delete"}},l={},p=[{value:"On Staging app",id:"on-staging-app",level:2},{value:"On Production app",id:"on-production-app",level:2}],s={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-revert-a-change"},"How to revert a change"),(0,o.kt)("h2",{id:"on-staging-app"},"On Staging app"),(0,o.kt)("p",null,"Go to Github and find the pr with the change you'd like to revert. Click the revert button. This will generate a pr for you that reverts the change. You'll still need a reviewer to approve the pr."),(0,o.kt)("p",null,"Note that this will only revert code changes (and not migration changes), so you'll need to consider if reverting the code, but not the db migrations will cause any problems."),(0,o.kt)("p",null,"Once CI passes, it should automatically deploy to staging."),(0,o.kt)("h2",{id:"on-production-app"},"On Production app"),(0,o.kt)("p",null,"Still to be discovered..."))}d.isMDXComponent=!0}}]);
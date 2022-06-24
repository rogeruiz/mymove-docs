"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[7919],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(d,".").concat(u)]||m[u]||p[u]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"0024 Model Authorization and Handler Design",description:"Multiple decision outcomes"},o="Model Authorization and Handler Design",l={unversionedId:"adrs/model-authorization-and-handler-design",id:"adrs/model-authorization-and-handler-design",title:"0024 Model Authorization and Handler Design",description:"Multiple decision outcomes",source:"@site/docs/adrs/0024-model-authorization-and-handler-design.md",sourceDirName:"adrs",slug:"/adrs/model-authorization-and-handler-design",permalink:"/mymove-docs/docs/adrs/model-authorization-and-handler-design",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0024-model-authorization-and-handler-design.md",tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"0024 Model Authorization and Handler Design",description:"Multiple decision outcomes"},sidebar:"adrsSidebar",previous:{title:"0023 Representing Dollar Values in Go and the Database",permalink:"/mymove-docs/docs/adrs/representing-dollar-values"},next:{title:"0025 Client Side Feature Flags using Custom JavaScript",permalink:"/mymove-docs/docs/adrs/client-side-feature-flags"}},d={},s=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons",id:"pros-and-cons",level:2},{value:"Validation happens in the models",id:"validation-happens-in-the-models",level:3},{value:"Validation happens in per-base-model middleware",id:"validation-happens-in-per-base-model-middleware",level:3},{value:"Validation happens in a generalized middleware",id:"validation-happens-in-a-generalized-middleware",level:3}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"model-authorization-and-handler-design"},"Model Authorization and Handler Design"),(0,r.kt)("p",null,"Users should only have access to records that they are authorized to see. Its important that our system for implementing that constraint is robust and easy to use. In fact, it's important that the system be difficult to misuse and to encourage handlers that correctly protect our data."),(0,r.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,r.kt)("p",null,"We conducted a white-boarding session to demonstrate three different options:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"All validation happens in the models. Handlers call model functions to fetch and create models that are scoped to the current user.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Validation happens in per-base-model middleware (e.g. everything that is hung off a move would share one piece of middleware) passing the validated model into the handler and rejecting unauthorized requests.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A generalized middleware that uses reflection to reject unauthorized requests before the handler gets run."))),(0,r.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Handlers get models through fetchers that accept an authenticated user, fetchers handle authorization"),(0,r.kt)("li",{parentName:"ul"},"Fetchers return generic errors, handlers have helper function to convert generic errors into responses"),(0,r.kt)("li",{parentName:"ul"},"Creator functions are hung from parent models, if available, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"serviceMember.CreateBackupContact()"))),(0,r.kt)("h2",{id:"pros-and-cons"},"Pros and Cons"),(0,r.kt)("h3",{id:"validation-happens-in-the-models"},"Validation happens in the models"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," No additional middleware is needed, we are on rails with go-swagger"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," These patterns can be used no matter where in the stack models are needed. (e.g. the rate engine, or any other entry point besides handlers)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," A handler could ignore those patterns and access data incorrectly")),(0,r.kt)("h3",{id:"validation-happens-in-per-base-model-middleware"},"Validation happens in per-base-model middleware"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," Handlers are only run when access is allowed, it's much more difficult for a handler to access data it is not supposed to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," Handlers are slimmer and their requirements are encoded in their arguments"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," It's difficult to know how to implement this with go-swagger"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," data accessors other than handlers have to re-implement this.")),(0,r.kt)("h3",{id:"validation-happens-in-a-generalized-middleware"},"Validation happens in a generalized middleware"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," We could write this once and never have to update it"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," Putting the fetched models into the context is a common go pattern"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," It might be complex to implement, and reflection is always worrisome"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," data accessors other than handlers have to re-implement this.")))}p.isMDXComponent=!0}}]);
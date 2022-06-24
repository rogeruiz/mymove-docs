"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[7806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},10:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:3,title:"Using eTags and the If-Match header in Postman"},i="Background",s={unversionedId:"tools/postman/using-etags-and-the-if-match-header-in-postman",id:"tools/postman/using-etags-and-the-if-match-header-in-postman",title:"Using eTags and the If-Match header in Postman",description:"We use optimistic locking in MilMove to update records, which means PATCH/PUT requests generally include an If-Match header with the E-Tag value for a given record. Basically, if the record that we are attempting to update has been changed before we were able to update it, we don't want our request to succeed.",source:"@site/docs/tools/postman/using-etags-and-the-if-match-header-in-postman.md",sourceDirName:"tools/postman",slug:"/tools/postman/using-etags-and-the-if-match-header-in-postman",permalink:"/mymove-docs/docs/tools/postman/using-etags-and-the-if-match-header-in-postman",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/tools/postman/using-etags-and-the-if-match-header-in-postman.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Using eTags and the If-Match header in Postman"},sidebar:"toolsSidebar",previous:{title:"Intercepting Cookies for Postman",permalink:"/mymove-docs/docs/tools/postman/intercepting-cookies-for-postman"},next:{title:"How to Setup Postman to make Mutual TLS API Calls",permalink:"/mymove-docs/docs/tools/postman/setup-postman-to-make-mutual-tls-api-calls"}},c={},u=[],l={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"background"},"Background"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"/mymove-docs/docs/backend/guides/use-optimistic-locking"},"optimistic locking")," in MilMove to update records, which means PATCH/PUT requests generally include an If-Match header with the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HTTP_ETag"},"E-Tag")," value for a given record. Basically, if the record that we are attempting to update has been changed before we were able to update it, we don't want our request to succeed."),(0,o.kt)("h1",{id:"usage-with-postman"},"Usage With Postman"),(0,o.kt)("p",null,"This means that when testing locally in Postman, we need to include a correct E-Tag value via the If-Match header. If you are getting 412 Precondition Failed responses to your requests, that means your request isn't including a proper E-Tag value."),(0,o.kt)("p",null,"First, get the correct E-Tag value for whatever record you are trying to update. You generally do a GET request to the resource you are trying to update, and the response should include an E-Tag value."),(0,o.kt)("p",null,'Second, add the If-Match header to your request in Postman. If it isn\'t included already, check the box on an empty line in the Headers section of the request you are building and type "If-Match" and it should show up as an option in the autocomplete dropdown. Add the E-Tag value as the value in this header. This should allow you to successfully update the resource via Postman!'))}d.isMDXComponent=!0}}]);
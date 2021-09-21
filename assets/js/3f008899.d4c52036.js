"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5883],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88765:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={},c="How to display dates and times",d={unversionedId:"dev/contributing/frontend/display-dates-and-times",id:"dev/contributing/frontend/display-dates-and-times",isDocsHomePage:!1,title:"How to display dates and times",description:"Timezones are hard to do correctly, especially factoring in daylight savings time and users in multiple locations using our app.",source:"@site/docs/dev/contributing/frontend/display-dates-and-times.md",sourceDirName:"dev/contributing/frontend",slug:"/dev/contributing/frontend/display-dates-and-times",permalink:"/mymove-docs/docs/dev/contributing/frontend/display-dates-and-times",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/contributing/frontend/display-dates-and-times.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"How To Call Swagger Endpoints from React",permalink:"/mymove-docs/docs/dev/contributing/frontend/access-swagger-endpoints-from-react"},next:{title:"Front-end / React Guide",permalink:"/mymove-docs/docs/dev/contributing/frontend/frontend"}},l=[{value:"Displaying dates in forms",id:"displaying-dates-in-forms",children:[]}],u={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-display-dates-and-times"},"How to display dates and times"),(0,i.kt)("p",null,"Timezones are hard to do correctly, especially factoring in daylight savings time and users in multiple locations using our app."),(0,i.kt)("h2",{id:"displaying-dates-in-forms"},"Displaying dates in forms"),(0,i.kt)("p",null,"Other government projects use the date that the person filling the form would have used (their date in their local timezone). This is what we'll continue doing. The official format in the office and TSP app so far has been DD-Mon-YYYY (29-Mar-2018, as an example). In the service member interfaces, we use the date format MM/DD/YYYY (03/29/2018). This should be what we default to unless otherwise stated. We don't currently store a user's local timezone, so unless we make changes to do that, we should send the timezone for the user back to the server from the client. Note that this will get more complicated when we add OCONUS moves, but in the meantime it should suffice."))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[564],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=d(n),f=o,m=l["".concat(u,".").concat(f)]||l[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},35684:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return s},default:function(){return l}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={},u="How To Store Data in Redux",d={unversionedId:"dev/contributing/frontend/store-data-in-redux",id:"dev/contributing/frontend/store-data-in-redux",isDocsHomePage:!1,title:"How To Store Data in Redux",description:"The specific layout of data within the Redux store should generally be considered an implementation detail and we should strive to avoid coupling any Components to this structure directly. Selectors provide the best way to decouple component data access from store layout.",source:"@site/docs/dev/contributing/frontend/store-data-in-redux.md",sourceDirName:"dev/contributing/frontend",slug:"/dev/contributing/frontend/store-data-in-redux",permalink:"/mymove-docs/docs/dev/contributing/frontend/store-data-in-redux",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/contributing/frontend/store-data-in-redux.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"Front-end / React Guide",permalink:"/mymove-docs/docs/dev/contributing/frontend/frontend"},next:{title:"How To Store UI State in Redux",permalink:"/mymove-docs/docs/dev/contributing/frontend/store-ui-state-in-redux"}},s=[],p={toc:s};function l(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-store-data-in-redux"},"How To Store Data in Redux"),(0,i.kt)("p",null,"The specific layout of data within the Redux store should generally be considered an implementation detail and we should strive to avoid coupling any Components to this structure directly. Selectors provide the best way to decouple component data access from store layout."),(0,i.kt)("p",null,"The current layout of data in Redux, however, is the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    entities: {\n        shipments: {\n            '123e4567-e89b-12d3-a456-426655440000': { /* shipment properties */ },\n        },\n        addresses: {\n            '123e4567-e89b-12d3-a456-426655440000': { /* address properties */ },\n        }\n    },\n    requests: {\n       byID: {\n           'req_0': { /* request properties */},\n           'req_1': { /* request properties */},\n       },\n       errored: {\n           'req_1': { /* request properties */},\n       },\n       lastErrorByLabel: {\n           'ShipmentForm.loadShipments': { /* error properties */ },\n       }\n    },\n    ui: {\n        'currentShipmentID': '123e4567-e89b-12d3-a456-426655440000',\n    },\n}\n")))}l.isMDXComponent=!0}}]);
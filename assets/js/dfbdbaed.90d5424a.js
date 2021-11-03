"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9210],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95414:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={sidebar_position:5},c="Feature flags in the app",u={unversionedId:"backend/guides/feature-flags-in-the-app",id:"backend/guides/feature-flags-in-the-app",isDocsHomePage:!1,title:"Feature flags in the app",description:"To add a new feature flag, see [[How to Set Up a Feature Flag]].",source:"@site/docs/backend/guides/feature-flags-in-the-app.md",sourceDirName:"backend/guides",slug:"/backend/guides/feature-flags-in-the-app",permalink:"/mymove-docs/docs/backend/guides/feature-flags-in-the-app",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/feature-flags-in-the-app.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"backendSidebar",previous:{title:"Database Guides",permalink:"/mymove-docs/docs/backend/guides/database"},next:{title:"GHC Invoicing Packages",permalink:"/mymove-docs/docs/backend/guides/ghc/ghc-invoicing-packages"}},l=[{value:"<code>FEATURE_FLAG_SERVICE_COUNSELING</code>",id:"feature_flag_service_counseling",children:[]},{value:"<code>FEATURE_FLAG_ACCESS_CODE</code>",id:"feature_flag_access_code",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"feature-flags-in-the-app"},"Feature flags in the app"),(0,o.kt)("p",null,"To add a new feature flag, see [","[How to Set Up a Feature Flag]","]."),(0,o.kt)("p",null,"Here are the feature flags being used in the app:"),(0,o.kt)("h1",{id:"backend-feature-flags"},"Backend Feature Flags:"),(0,o.kt)("p",null,"Feature flags for the backend are defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/pkg/cli/featureflag.go"},"https://github.com/transcom/mymove/blob/master/pkg/cli/featureflag.go")),(0,o.kt)("h2",{id:"feature_flag_service_counseling"},(0,o.kt)("inlineCode",{parentName:"h2"},"FEATURE_FLAG_SERVICE_COUNSELING")),(0,o.kt)("p",null,"A temporary feature flag as service counseling work goes on to gate the service counseling flow. This was added in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/6354"},"https://github.com/transcom/mymove/pull/6354")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", all moves are routed to service counseling. This means their status gets set to ",(0,o.kt)("inlineCode",{parentName:"p"},"MoveStatusNeedsServiceCounseling"),"."),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", no moves are routed to service counseling. Their status gets set to ",(0,o.kt)("inlineCode",{parentName:"p"},"MoveStatusSUBMITTED"),". (See: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/pkg/models/move.go#L26"},"https://github.com/transcom/mymove/blob/master/pkg/models/move.go#L26")," for the move status types.)"),(0,o.kt)("h2",{id:"feature_flag_access_code"},(0,o.kt)("inlineCode",{parentName:"h2"},"FEATURE_FLAG_ACCESS_CODE")),(0,o.kt)("p",null,"This flag determines whether or not service members are prompted for an access code before they start onboarding."))}d.isMDXComponent=!0}}]);
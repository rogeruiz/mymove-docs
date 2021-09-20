"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[747],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},594:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},u=void 0,s={unversionedId:"dev/contributing/backend/Feature-Flags-in-the-App",id:"dev/contributing/backend/Feature-Flags-in-the-App",isDocsHomePage:!1,title:"Feature-Flags-in-the-App",description:"To add a new feature flag, see [[How to Set Up a Feature Flag]].",source:"@site/docs/dev/contributing/backend/Feature-Flags-in-the-App.md",sourceDirName:"dev/contributing/backend",slug:"/dev/contributing/backend/Feature-Flags-in-the-App",permalink:"/mymove-docs/docs/dev/contributing/backend/Feature-Flags-in-the-App",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/contributing/backend/Feature-Flags-in-the-App.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"Dockerfile-use,-purpose,-and-documentation",permalink:"/mymove-docs/docs/dev/contributing/backend/Dockerfile-use,-purpose,-and-documentation"},next:{title:"Guide-to-Creating-an-Endpoint",permalink:"/mymove-docs/docs/dev/contributing/backend/Guide-to-Creating-an-Endpoint"}},l=[{value:"<code>FEATURE_FLAG_SERVICE_COUNSELING</code>",id:"feature_flag_service_counseling",children:[]},{value:"<code>FEATURE_FLAG_ACCESS_CODE</code>",id:"feature_flag_access_code",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To add a new feature flag, see [","[How to Set Up a Feature Flag]","]."),(0,a.kt)("p",null,"Here are the feature flags being used in the app:"),(0,a.kt)("h1",{id:"backend-feature-flags"},"Backend Feature Flags:"),(0,a.kt)("p",null,"Feature flags for the backend are defined in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/pkg/cli/featureflag.go"},"https://github.com/transcom/mymove/blob/master/pkg/cli/featureflag.go")),(0,a.kt)("h2",{id:"feature_flag_service_counseling"},(0,a.kt)("inlineCode",{parentName:"h2"},"FEATURE_FLAG_SERVICE_COUNSELING")),(0,a.kt)("p",null,"A temporary feature flag as service counseling work goes on to gate the service counseling flow. This was added in: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/6354"},"https://github.com/transcom/mymove/pull/6354")),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", all moves are routed to service counseling. This means their status gets set to ",(0,a.kt)("inlineCode",{parentName:"p"},"MoveStatusNeedsServiceCounseling"),"."),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", no moves are routed to service counseling. Their status gets set to ",(0,a.kt)("inlineCode",{parentName:"p"},"MoveStatusSUBMITTED"),". (See: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/pkg/models/move.go#L26"},"https://github.com/transcom/mymove/blob/master/pkg/models/move.go#L26")," for the move status types.)"),(0,a.kt)("h2",{id:"feature_flag_access_code"},(0,a.kt)("inlineCode",{parentName:"h2"},"FEATURE_FLAG_ACCESS_CODE")),(0,a.kt)("p",null,"This flag determines whether or not service members are prompted for an access code before they start onboarding."))}d.isMDXComponent=!0}}]);
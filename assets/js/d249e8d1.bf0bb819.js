"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9971],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(d,".").concat(m)]||u[m]||p[m]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},24733:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={},d=void 0,s={unversionedId:"dev/contributing/backend/Dockerfile-use,-purpose,-and-documentation",id:"dev/contributing/backend/Dockerfile-use,-purpose,-and-documentation",isDocsHomePage:!1,title:"Dockerfile-use,-purpose,-and-documentation",description:"This document lists all the current Dockerfiles we use, their base images, and what user that image uses. It also notes why that image uses the user account it uses.",source:"@site/docs/dev/contributing/backend/Dockerfile-use,-purpose,-and-documentation.md",sourceDirName:"dev/contributing/backend",slug:"/dev/contributing/backend/Dockerfile-use,-purpose,-and-documentation",permalink:"/mymove-docs/docs/dev/contributing/backend/Dockerfile-use,-purpose,-and-documentation",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/contributing/backend/Dockerfile-use,-purpose,-and-documentation.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"Backend Structure",permalink:"/mymove-docs/docs/dev/contributing/backend/Backend-Structure"},next:{title:"Feature-Flags-in-the-App",permalink:"/mymove-docs/docs/dev/contributing/backend/Feature-Flags-in-the-App"}},c=[],p={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This document lists all the current Dockerfiles we use, their base images, and what user that image uses. It also notes why that image uses the user account it uses."),(0,l.kt)("p",null,"NOTE for ",(0,l.kt)("inlineCode",{parentName:"p"},"gcr.io/distroless/base:latest")," based images these by default run with ",(0,l.kt)("inlineCode",{parentName:"p"},"root")," locally. However, we have updated our ECS task definition (See code ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/cmd/ecs-deploy/task_def.go#L581"},"here"),") to override that to run with a UID of ",(0,l.kt)("inlineCode",{parentName:"p"},"1042")," and not ",(0,l.kt)("inlineCode",{parentName:"p"},"root"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"UID:0"),"."),(0,l.kt)("p",null,"All docker images that are deployed must not use ",(0,l.kt)("inlineCode",{parentName:"p"},"root")," as their user inside the container to meet Docker STIG requirements. We've updated all Dockerfiles for deployed containers to not use root. We chose not to do this as well on Dockerfiles for images that are not deployed but only used on local laptops or in our CircleCI pipeline for development and testing."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Dockerfile"),(0,l.kt)("th",{parentName:"tr",align:null},"base image"),(0,l.kt)("th",{parentName:"tr",align:null},"user"),(0,l.kt)("th",{parentName:"tr",align:null},"Where it's used"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile*"),(0,l.kt)("td",{parentName:"tr",align:null},"gcr.io/distroless/base:latest"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"root")," (locally) and ",(0,l.kt)("inlineCode",{parentName:"td"},"UID:1042")," (Deployed)"),(0,l.kt)("td",{parentName:"tr",align:null},"When running the application when deployed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile.local"),(0,l.kt)("td",{parentName:"tr",align:null},"gcr.io/distroless/base:latest"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"root")," (locally)"),(0,l.kt)("td",{parentName:"tr",align:null},"When running the application locally only")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile.migrations*"),(0,l.kt)("td",{parentName:"tr",align:null},"alpine:\\<version",">"),(0,l.kt)("td",{parentName:"tr",align:null},"root"),(0,l.kt)("td",{parentName:"tr",align:null},"Running migrations when deploying the app, staging, experimental, and production")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile.migrations_local"),(0,l.kt)("td",{parentName:"tr",align:null},"alpine:\\<version",">"),(0,l.kt)("td",{parentName:"tr",align:null},"root"),(0,l.kt)("td",{parentName:"tr",align:null},"Running migrations locally only")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cypress/Dockerfile.cypress"),(0,l.kt)("td",{parentName:"tr",align:null},"cypress/base:\\<version",">"),(0,l.kt)("td",{parentName:"tr",align:null},"root"),(0,l.kt)("td",{parentName:"tr",align:null},"Running cypress tests locally and in CircleCI only")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile.storybook"),(0,l.kt)("td",{parentName:"tr",align:null},"milmove/circleci-docker:milmove-app-browsers-",(0,l.kt)("inlineCode",{parentName:"td"},"<SHA>")),(0,l.kt)("td",{parentName:"tr",align:null},"circleci"),(0,l.kt)("td",{parentName:"tr",align:null},"Used when running storybook tests in CircleCI only")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile.storybook_local"),(0,l.kt)("td",{parentName:"tr",align:null},"milmove/circleci-docker:milmove-app-browsers-",(0,l.kt)("inlineCode",{parentName:"td"},"<SHA>")),(0,l.kt)("td",{parentName:"tr",align:null},"circleci"),(0,l.kt)("td",{parentName:"tr",align:null},"Used when running ",(0,l.kt)("inlineCode",{parentName:"td"},"make storybook_tests")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"make storybook_docker")," locally only")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile.tasks*"),(0,l.kt)("td",{parentName:"tr",align:null},"gcr.io/distroless/base:latest"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"root")," (locally) and ",(0,l.kt)("inlineCode",{parentName:"td"},"UID:1042")," (CircleCI / Deployed)"),(0,l.kt)("td",{parentName:"tr",align:null},"ECS Scheduled Tasks")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile.tasks_local"),(0,l.kt)("td",{parentName:"tr",align:null},"gcr.io/distroless/base:latest"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"root")," (locally) and ",(0,l.kt)("inlineCode",{parentName:"td"},"UID:1042")," (CircleCI / Deployed)"),(0,l.kt)("td",{parentName:"tr",align:null},"ECS Scheduled Tasks local only")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile.tools"),(0,l.kt)("td",{parentName:"tr",align:null},"alpine:\\<version",">"),(0,l.kt)("td",{parentName:"tr",align:null},"root"),(0,l.kt)("td",{parentName:"tr",align:null},"Container for tools used in e2e testing on CircleCI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dockerfile.tools_local"),(0,l.kt)("td",{parentName:"tr",align:null},"alpine:\\<version",">"),(0,l.kt)("td",{parentName:"tr",align:null},"root"),(0,l.kt)("td",{parentName:"tr",align:null},"Container for tools used in e2e testing on CircleCI local only")))),(0,l.kt)("p",null,"*"," Images that are used in deployed environments outside of local laptops or build/test pipeline in CircleCI"))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[6622],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return v}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),v=o,f=m["".concat(c,".").concat(v)]||m[v]||p[v]||a;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2183:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],i={},c="How to View ECS Service Logs",l={unversionedId:"vault/infra/view-ecs-service-logs",id:"vault/infra/view-ecs-service-logs",isDocsHomePage:!1,title:"How to View ECS Service Logs",description:"To view service logs you'll want to use the ecs-service-logs binary. You can install it with brew",source:"@site/docs/vault/infra/view-ecs-service-logs.md",sourceDirName:"vault/infra",slug:"/vault/infra/view-ecs-service-logs",permalink:"/mymove-docs/docs/vault/infra/view-ecs-service-logs",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/vault/infra/view-ecs-service-logs.md",tags:[],version:"current",frontMatter:{},sidebar:"vaultSidebar",previous:{title:"How to Search for Application Errors",permalink:"/mymove-docs/docs/vault/infra/search-for-application-errors"}},u=[],p={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-view-ecs-service-logs"},"How to View ECS Service Logs"),(0,a.kt)("p",null,"To view service logs you'll want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ecs-service-logs")," binary. You can install it with brew"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"brew tap trussworks/tap\nbrew install ecs-service-logs\n")),(0,a.kt)("p",null,"Here are some examples of usage:"),(0,a.kt)("p",null,"For running containers in stg:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'aws-vault exec transcom-gov-milmove-stg -- ecs-service-logs show --cluster app-stg --service app --git-branch "placeholder_branch_name" --status "RUNNING" --verbose\n')),(0,a.kt)("p",null,"You can even narrow it down to the specific commit:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'aws-vault exec transcom-gov-milmove-stg -- ecs-service-logs show --cluster app-stg --service app --git-branch "placeholder_branch_name" --git-commit "git_commit_hash" --status "RUNNING" --verbose\n')),(0,a.kt)("p",null,"If you want to see logs from something that is stopped you can change to ",(0,a.kt)("inlineCode",{parentName:"p"},'--status "STOPPED"')," in the above commands. "),(0,a.kt)("p",null,"If you're troubleshooting Circle CI deployment failures, we recommend not using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--status"),' flag at all, or set it to "ALL".'),(0,a.kt)("p",null,"You can do a lot more with this command. Check out the rest of the information in the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/trussworks/ecs-service-logs/blob/master/README.md"},"ecs-service-logs README.md")))}m.isMDXComponent=!0}}]);
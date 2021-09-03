"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2795],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},426:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={},c="MilMove Application Metrics",l={unversionedId:"old-wiki/metrics",id:"old-wiki/metrics",isDocsHomePage:!1,title:"MilMove Application Metrics",description:"This document provides an overview of the metrics collected by the MilMove application.",source:"@site/docs/old-wiki/metrics.md",sourceDirName:"old-wiki",slug:"/old-wiki/metrics",permalink:"/docs/old-wiki/metrics",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/old-wiki/metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How To Manage Docker Locally",permalink:"/docs/old-wiki/manage-docker-locally"},next:{title:"Pairing Sessions",permalink:"/docs/old-wiki/pairing"}},d=[{value:"Dashboards",id:"dashboards",children:[{value:"Updating Dashboards",id:"updating-dashboards",children:[]},{value:"Dashboard Video Overview",id:"dashboard-video-overview",children:[]}]}],u={toc:d};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"milmove-application-metrics"},"MilMove Application Metrics"),(0,a.kt)("p",null,"This document provides an overview of the metrics collected by the MilMove application."),(0,a.kt)("h2",{id:"dashboards"},"Dashboards"),(0,a.kt)("p",null,"Various AWS metrics have been aggregated in CloudWatch dashboards.\nThese include data about network requests, container resources, and errors."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://us-west-2.console.aws.amazon.com/cloudwatch/home?region=us-west-2#dashboards:name=mil-prod"},"Prod Dashboard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://us-west-2.console.aws.amazon.com/cloudwatch/home?region=us-west-2#dashboards:name=mil-staging"},"Staging Dashboard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://us-west-2.console.aws.amazon.com/cloudwatch/home?region=us-west-2#dashboards:name=mil-experimental"},"Experimental Dashboard"))),(0,a.kt)("h3",{id:"updating-dashboards"},"Updating Dashboards"),(0,a.kt)("p",null,"Dashboards are maintained by Terraform in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transcom/transcom-infrasec-com/blob/master/modules/aws-app-environment/main.tf#L840"},"MilMove infra repo"),'.\nWhen changes are made in the AWS CloudWatch UI,\nthey can be exported by clicking "Actions" > "View/edit source".\nThe Terraform file can be updated with this source,\nreplacing environment variables as shown in the existing file.\nFeel free to ask the Infrastructure team for help,\nas they\'ll have access to deploy changes across environments.'),(0,a.kt)("h3",{id:"dashboard-video-overview"},"Dashboard Video Overview"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1wCNvShVKKqXO95fnK7Ure7DOJ1QFDjNc/view"},"Here"),"\nis a recording going over the CloudWatch dashboards,\nhow to add more,\nand how to use the AWS Insights log query tool."))}p.isMDXComponent=!0}}]);
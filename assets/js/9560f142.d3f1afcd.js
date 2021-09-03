"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[4902],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=o,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9030:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],l={},s=void 0,c={unversionedId:"old-wiki/Home",id:"old-wiki/Home",isDocsHomePage:!1,title:"Home",description:"Welcome to the mymove wiki!",source:"@site/docs/old-wiki/Home.md",sourceDirName:"old-wiki",slug:"/old-wiki/Home",permalink:"/docs/old-wiki/Home",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/old-wiki/Home.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Guide to Static Analysis Security Workflow",permalink:"/docs/old-wiki/Guide-to-Static-Analysis-Security-Workflow"},next:{title:"How-database-cleanup-works-in-Go-server-tests",permalink:"/docs/old-wiki/How-database-cleanup-works-in-Go-server-tests"}},u=[{value:"License Information (Must remain at top of this page)",id:"license-information-must-remain-at-top-of-this-page",children:[]},{value:"Product Overview",id:"product-overview",children:[]},{value:"Backend Development and Test",id:"backend-development-and-test",children:[{value:"Guides",id:"guides",children:[]},{value:"Development How Tos",id:"development-how-tos",children:[]},{value:"Testing How Tos",id:"testing-how-tos",children:[]},{value:"CAC How Tos",id:"cac-how-tos",children:[]}]},{value:"Frontend Development and Test",id:"frontend-development-and-test",children:[{value:"Development How Tos",id:"development-how-tos-1",children:[]},{value:"Test How Tos",id:"test-how-tos",children:[]}]},{value:"Database",id:"database",children:[]},{value:"Deployment and Developer Tooling",id:"deployment-and-developer-tooling",children:[{value:"Developer Tooling",id:"developer-tooling",children:[]},{value:"Deployment Tooling (AWS and GovCloud Infrastructure)",id:"deployment-tooling-aws-and-govcloud-infrastructure",children:[]}]},{value:"Miscellaneous How Tos",id:"miscellaneous-how-tos",children:[]}],p={toc:u};function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the mymove wiki!"),(0,r.kt)("p",null,"The intention for this wiki is to share our collective knowledge on best practices and allow everyone working on the DoD MilMove project to write code in compatible styles."),(0,r.kt)("p",null,"If you are looking to understand choices made in this project, see the list of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/tree/master/docs/adr"},"ADRs"),"."),(0,r.kt)("p",null,"If you are looking to edit or add to this wiki, checkout github's ",(0,r.kt)("a",{parentName:"p",href:"https://help.github.com/en/github/building-a-strong-community/editing-wiki-content"},"Editing wiki content"),"."),(0,r.kt)("h2",{id:"license-information-must-remain-at-top-of-this-page"},"License Information (Must remain at top of this page)"),(0,r.kt)("p",null,"Works created by U.S. Federal employees as part of their jobs typically are not eligible for copyright in the United\nStates. In places where the contributions of U.S. Federal employees are not eligible for copyright, this work is in\nthe public domain. In places where it is eligible for copyright, such as some foreign jurisdictions, the remainder of\nthis work is licensed under ",(0,r.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/MIT"},"the MIT License"),", the full text of which is included\nin the LICENSE.md file in this repository."),(0,r.kt)("h2",{id:"product-overview"},"Product Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Overview of Milmove - START HERE")),(0,r.kt)("li",{parentName:"ul"},"User Management")),(0,r.kt)("h2",{id:"backend-development-and-test"},"Backend Development and Test"),(0,r.kt)("h3",{id:"guides"},"Guides"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Backend / Go Developer Guide|Backend-Programming-Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Prime / External-facing API Guide|api-programming-guide"))),(0,r.kt)("h3",{id:"development-how-tos"},"Development How Tos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"access-global-variables#how-to-access-a-global-application-variable"},"Access a Global Application Variable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"add-application-logging#how-to-add-application-logging"},"Add Application Logging")),(0,r.kt)("li",{parentName:"ul"},"When to use Service Objects|service-objects"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"generate-mocks-with-mockery#how-to-generate-mocks-with-mockery"},"Generate Mocks with Mockery")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"handle-backend-errors#how-to-handle-back-end-errors"},"handle back-end errors")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"how-to-set-up-a-feature-flag"},"Set Up a Feature Flag")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"use-optimistic-locking#how-to-use-optimistic-locking"},"Use Optimistic Locking"))),(0,r.kt)("h3",{id:"testing-how-tos"},"Testing How Tos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Testing Best Practices"),(0,r.kt)("li",{parentName:"ul"},"Testing Handlers"),(0,r.kt)("li",{parentName:"ul"},"Running server tests inside a transaction"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"run-go-tests#how-to-run-go-tests"},"Run Go Tests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"run-server-test-circle-ci#run-server-test-job-in-circleci-container-locally"},"Run server_test job in CircleCI container locally")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"setup-postman-to-make-mutual-tls-api-calls#how-to-setup-postman-to-make-mutual-tls-api-calls"},"Setup Postman to make Mutual TLS API Calls")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"How-to-Test-the-Prime-API-(Local,-Staging,-and-Experimental)"},"Test the Prime API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/wiki/Test-Admin-and-Office-APIs-with-Postman"},"Test the Admin and Office APIs")),(0,r.kt)("li",{parentName:"ul"},"Test Data Generation"),(0,r.kt)("li",{parentName:"ul"},"Understanding Testdatagen Functions"),(0,r.kt)("li",{parentName:"ul"},"How to write fast tests"),(0,r.kt)("li",{parentName:"ul"},"Interacting with the DB in Go server tests"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"Test-Sending-Email-in-Devlocal"},"Testing Sending Email in Devlocal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"Test-Storing-Data-in-S3-in-Devlocal"},"Test Storing Data in S3 in Devlocal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"troubleshoot-gex-connection#how-to-troubleshoot-gex-connection"},"Troubleshoot GEX Connection"))),(0,r.kt)("h3",{id:"cac-how-tos"},"CAC How Tos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"upload-electronic-orders#how-to-upload-electronic-orders-using-your-cac"},"Upload Electronic Orders Using your CAC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"use-mtls-with-cac#how-to-create-cac-access-for-using-prime-api-and-uploading-electronic-orders"},"Create CAC Access (for using Prime API and uploading Electronic Orders)")),(0,r.kt)("li",{parentName:"ul"},"Troubleshoot CAC Reader Issues")),(0,r.kt)("h2",{id:"frontend-development-and-test"},"Frontend Development and Test"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Front-end / React Developer Guide|frontend"))),(0,r.kt)("h3",{id:"development-how-tos-1"},"Development How Tos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"access-swagger-endpoints-from-react#how-to-call-swagger-endpoints-from-react"},"Call Swagger Endpoints from React")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"store-data-in-redux#how-to-store-data-in-redux"},"Store Data in Redux")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"store-ui-state-in-redux#how-to-store-ui-state-in-redux"},"Store UI State in Redux"))),(0,r.kt)("h3",{id:"test-how-tos"},"Test How Tos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"unit-test-react-components#how-to-unit-test-react-components"},"Unit Test React Components")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"run-js-tests#how-to-run-javascript-jest-tests"},"Run JavaScript (Jest) Tests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"run-e2e-tests#how-to-run-end-to-end-cypress-tests"},"Run End to End (Cypress) Tests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"run-storybook#how-to-use-and-run-storybook"},"Use and Run Storybook")),(0,r.kt)("li",{parentName:"ul"},"How to view a move or payment request in the office app as a TOO or TIO")),(0,r.kt)("h2",{id:"database"},"Database"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Database"),(0,r.kt)("li",{parentName:"ul"},"SchemaSpy Database Schema Visualizer"),(0,r.kt)("li",{parentName:"ul"},"Using EagerPreload in Pop"),(0,r.kt)("li",{parentName:"ul"},"Backup an restore dev database|backup-and-restore-dev-database"),(0,r.kt)("li",{parentName:"ul"},"Migrate the database|Database Migrations"),(0,r.kt)("li",{parentName:"ul"},"Soft Delete|soft-delete"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/wiki/Configure-Postico-to-connect-to-mymove-DB"},"Configure Postico to connect to the mymove DB"))),(0,r.kt)("h2",{id:"deployment-and-developer-tooling"},"Deployment and Developer Tooling"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/wiki/Change-Considerations"},"Change considerations"))),(0,r.kt)("h3",{id:"developer-tooling"},"Developer Tooling"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"revert-a-change#how-to-revert-a-change"},"Revert a change")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"upgrade-go-version#how-to-upgrade-go-version"},"Upgrade Go Version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"run-pre-commit-hooks#run-and-troubleshoot-pre-commit-hooks"},"Run and troubleshoot pre-commit hooks")),(0,r.kt)("li",{parentName:"ul"},"Troubleshoot Precommit Hook Failures"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"create-an-ecs-scheduled-task#how-to-create-an-ecs-scheduled-task"},"Create An ECS Scheduled Task")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"manage-dependencies-with-go-mod#how-to-manage-dependencies-with-go-mod"},"Manage Dependencies With go mod")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"manage-docker-locally#how-to-manage-docker-locally"},"Manage Docker Locally"))),(0,r.kt)("h3",{id:"deployment-tooling-aws-and-govcloud-infrastructure"},"Deployment Tooling (AWS and GovCloud Infrastructure)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"Deployment-Process"},"Deployment Process")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"deploy-to-experimental#how-to-deploy-to-experimental"},"Deploy to Experimental")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"manage-dependabot#how-to-manage-dependabot"},"Manage Dependabot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"view-ecs-service-logs#how-to-view-ecs-service-logs"},"View ECS Service Logs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"How-to-Search-Cloudwatch-Logs-using-Instance-ID"},"Search Cloudwatch Logs for Instance ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"search-for-application-errors#how-to-searching-for-application-errors"},"Searching for Application Errors")),(0,r.kt)("li",{parentName:"ul"},"Metrics. Documentation for application metrics."),(0,r.kt)("li",{parentName:"ul"},"Anti-Virus|anti_virus. Documentation for the anti-virus solutions employed.")),(0,r.kt)("h2",{id:"miscellaneous-how-tos"},"Miscellaneous How Tos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"automatically-add-jira-id-to-commit-message#how-to-automatically-add-jira-id-to-commit-message"},"Automatically add JIRA ID to Commit Message")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"display-dates-and-times#how-to-display-dates-and-times"},"display dates and times")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"run-acceptance-tests#how-to-run-acceptance-tests"},"Run Acceptance Tests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"run-against-s3-locally#how-to-run-against-s3-cdn-locally"},"Run Against S3 & CDN Locally")),(0,r.kt)("li",{parentName:"ul"},"Pairing. A list of past pairing recordings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"create-or-deactivate-users#how-to-create-or-deactivate-users"},"Create or Deactivate Users")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"guide-to-static-analysis-security-workflow#guide-to-static-analysis-security-workflow"},"Guide to Static Analysis Security Workflow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"guide-to-static-analysis-annotations-for-disabled-Linters#guide-to-static-analysis-annotations-for-disabled-linters"},"Guide to Static Analysis Annotations for Disabled Linters"))))}m.isMDXComponent=!0}}]);
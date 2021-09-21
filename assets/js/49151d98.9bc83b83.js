"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[1562],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),g=o,f=d["".concat(u,".").concat(g)]||d[g]||p[g]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84610:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={},u="[WIP] How to run Frontend test coverage reports",l={unversionedId:"dev/testing/running-tests/How-to-run-Frontend-test-coverage-reports",id:"dev/testing/running-tests/How-to-run-Frontend-test-coverage-reports",isDocsHomePage:!1,title:"[WIP] How to run Frontend test coverage reports",description:"By using Create React App, we have built-in coverage report testing for Jest (either Enzyme or React Testing Library). It's generated with tools called Istanbul and lcov, which we also leverage for our Cypress integration tests coverage reports.",source:"@site/docs/dev/testing/running-tests/How-to-run-Frontend-test-coverage-reports.md",sourceDirName:"dev/testing/running-tests",slug:"/dev/testing/running-tests/How-to-run-Frontend-test-coverage-reports",permalink:"/mymove-docs/docs/dev/testing/running-tests/How-to-run-Frontend-test-coverage-reports",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/testing/running-tests/How-to-run-Frontend-test-coverage-reports.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"End-to-End-Testing-Playing-the-Prime",permalink:"/mymove-docs/docs/dev/testing/running-tests/End-to-End-Testing-Playing-the-Prime"},next:{title:"Manually-run-Prime-API-for-Slice-demo",permalink:"/mymove-docs/docs/dev/testing/running-tests/Manually-run-Prime-API-for-Slice-demo"}},c=[{value:"Getting started",id:"getting-started",children:[]},{value:"Running a coverage report for unit tests",id:"running-a-coverage-report-for-unit-tests",children:[]},{value:"Running a coverage report for integration tests",id:"running-a-coverage-report-for-integration-tests",children:[]},{value:"WIP Running a combined report of both unit and integration tests",id:"wip-running-a-combined-report-of-both-unit-and-integration-tests",children:[]}],p={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"wip-how-to-run-frontend-test-coverage-reports"},"[WIP]"," How to run Frontend test coverage reports"),(0,i.kt)("p",null,"By using Create React App, we have built-in coverage report testing for Jest (either Enzyme or React Testing Library). It's generated with tools called ",(0,i.kt)("a",{parentName:"p",href:"https://istanbul.js.org/"},"Istanbul")," and ",(0,i.kt)("a",{parentName:"p",href:"http://ltp.sourceforge.net/coverage/lcov.php"},"lcov"),", which we also leverage for our Cypress integration tests coverage reports."),(0,i.kt)("p",null,"Currently, CircleCI is configured to run a Jest coverage report automatically as part of our build process."),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"To run either Jest or Cypress tests locally, the first step is to get your local server up and running. It doesn't matter which client is running."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"make server_run\nmake office_client_run\nmake db_e2e_up\n")),(0,i.kt)("h2",{id:"running-a-coverage-report-for-unit-tests"},"Running a coverage report for unit tests"),(0,i.kt)("p",null,"To create a report for the unit tests, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn test:coverage\n")),(0,i.kt)("p",null,"Once the tests are completed, you have two options for viewing the reports, with different benefits."),(0,i.kt)("p",null,"The first is in your terminal. You'll see the report in a plain text table with a basic summary of information. "),(0,i.kt)("p",null,"The second option is a navigable GUI report with line by line coverage details. To view this, navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"coverage/lcov-report")," folder of your local MilMove project folder and open the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.html")," file in your browser."),(0,i.kt)("p",null,"This option allows you to view more detailed information and see inline context for uncovered or undercovered lines of code. "),(0,i.kt)("p",null,"The GUI option does need to be manually refreshed after each report run."),(0,i.kt)("h2",{id:"running-a-coverage-report-for-integration-tests"},"Running a coverage report for integration tests"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: This functionality is dependent on our Cypress tests successfully running locally.")),(0,i.kt)("p",null,"To create a report for the integration tests in headless mode run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn cypress:run-headless\n")),(0,i.kt)("p",null,"To create a report for the integration tests in browser mode run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn cypress:run\n")),(0,i.kt)("p",null,"Then run all tests. You will see some coverage information in the browser mode test interface."),(0,i.kt)("h2",{id:"wip-running-a-combined-report-of-both-unit-and-integration-tests"},"[WIP]"," Running a combined report of both unit and integration tests"),(0,i.kt)("p",null,"To create a report that covers all tests run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn report:combined\n")))}d.isMDXComponent=!0}}]);
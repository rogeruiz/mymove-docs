"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2648],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=s,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),s=(n(67294),n(3905));const r={title:"0062 Run tests within transactions"},i="Run tests within transactions",o={unversionedId:"adrs/run-tests-in-transactions",id:"adrs/run-tests-in-transactions",title:"0062 Run tests within transactions",description:"NOTE: This ADR updates and supersedes ADR0010 Isolate Test Access to Database.",source:"@site/docs/adrs/0062-run-tests-in-transactions.md",sourceDirName:"adrs",slug:"/adrs/run-tests-in-transactions",permalink:"/mymove-docs/docs/adrs/run-tests-in-transactions",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0062-run-tests-in-transactions.md",tags:[],version:"current",sidebarPosition:62,frontMatter:{title:"0062 Run tests within transactions"},sidebar:"adrsSidebar",previous:{title:"0061 Use OpenTelemetry to instrument code for distributed tracing",permalink:"/mymove-docs/docs/adrs/use-opentelemetry-for-distributed-tracing"},next:{title:"0063 Using openapi CLI to compile API specs",permalink:"/mymove-docs/docs/adrs/use-openapi-to-compile-api-specs"}},l={},c=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Wrap test execution in a database transaction",id:"wrap-test-execution-in-a-database-transaction",level:3},{value:"Keeping the status quo: truncating the DB in between tests",id:"keeping-the-status-quo-truncating-the-db-in-between-tests",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"run-tests-within-transactions"},"Run tests within transactions"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"NOTE:")," This ADR updates and supersedes ",(0,s.kt)("a",{parentName:"p",href:"/mymove-docs/docs/adrs/isolate-test-access-to-database"},"ADR0010 Isolate Test Access to Database"),"."),(0,s.kt)("p",null,"Ever since ADR 0010, we've been truncating the DB in between tests as a way to\nstart each test with a clean state, and to allow tests to run in parallel. Now\nthat our test suite and number of packages are much larger, the time lost to\ncloning and truncating the DB outweighs the initial benefit of simplicity."),(0,s.kt)("p",null,"Instead, we propose using the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/DATA-DOG/go-txdb"},"go-txdb"),"\ntool to run tests within a transaction, that gets rolled back at the end of the\ntest. This is much faster than truncating the DB, and the work to implement this\nis already done in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/6650"},"PR #6650"),"."),(0,s.kt)("p",null,"As part of configuring go-txdb in PR #6650, we also converted a few packages to\nstart running tests in transaction, which serve as examples of how to convert\nthe remaining packages. We also have a ",(0,s.kt)("a",{parentName:"p",href:"https://transcom.github.io/mymove-docs/docs/dev/testing/writing-tests/Running-server-tests-inside-a-transaction"},"Docs with instructions"),"."),(0,s.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Wrap test execution in a database transaction"),": Use go-txdb to run tests\ninside a transaction, and roll it back at the end of the test.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Truncate tables between tests"),": Keep truncating the DB as we've been doing\nall along."))),(0,s.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Chosen Alternative: ",(0,s.kt)("strong",{parentName:"p"},"Wrap test execution in a database transaction"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The reason for this choice is to stop losing time. So far, with only a few\npackages using transactions, we are saving 33 seconds when running\n",(0,s.kt)("inlineCode",{parentName:"p"},"make server_test_standalone")," locally. When running individual packages or test,\nthe cumulative savings are even greater. If we stick with the status quo, every\n36 seconds we could be saving but don't by not doing anything translates to\n",(0,s.kt)("strong",{parentName:"p"},"3 person-weeks lost per year!")))),(0,s.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,s.kt)("h3",{id:"wrap-test-execution-in-a-database-transaction"},"Wrap test execution in a database transaction"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"+")," Allows multiple tests to interact with the database at once without\ninterfering with each other."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"+")," Saves us at least 3 person-weeks per year."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"+")," Allows us to discover and fix bugs due to false-positive tests"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"+")," Does not break existing tests. Using transactions is an opt-in feature per\npackage, and we can speed up each package incrementally."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-")," Requires updating existing tests, although in most cases, this is minimal\nwork.")),(0,s.kt)("h3",{id:"keeping-the-status-quo-truncating-the-db-in-between-tests"},"Keeping the status quo: truncating the DB in between tests"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-")," We lose at least 3 person-weeks per year waiting for tests to run."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"-")," Makes it easy to abuse DB setup in tests, resulting in false-positive\ntests, and tests that cannot be run in isolation."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"+")," Does not require any additional work")))}p.isMDXComponent=!0}}]);
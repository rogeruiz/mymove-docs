"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9526],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=c(n),m=r,d=g["".concat(l,".").concat(m)]||g[m]||p[m]||s;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},14902:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return g}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),o=["components"],i={},l="How To Run Go Tests",c={unversionedId:"dev/testing/running-tests/run-go-tests",id:"dev/testing/running-tests/run-go-tests",isDocsHomePage:!1,title:"How To Run Go Tests",description:"Run All Go Tests",source:"@site/docs/dev/testing/running-tests/run-go-tests.md",sourceDirName:"dev/testing/running-tests",slug:"/dev/testing/running-tests/run-go-tests",permalink:"/mymove-docs/docs/dev/testing/running-tests/run-go-tests",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/testing/running-tests/run-go-tests.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"How To Run End to End (Cypress) Tests",permalink:"/mymove-docs/docs/dev/testing/running-tests/run-e2e-tests"},next:{title:"How-to-write-fast-tests",permalink:"/mymove-docs/docs/dev/testing/writing-tests/How-to-write-fast-tests"}},u=[{value:"Run All Go Tests",id:"run-all-go-tests",children:[]},{value:"Run Specific Tests",id:"run-specific-tests",children:[{value:"Run Acceptance Tests",id:"run-acceptance-tests",children:[]},{value:"Run All Tests in a Single Package",id:"run-all-tests-in-a-single-package",children:[]},{value:"Run Tests with Names Matching a String",id:"run-tests-with-names-matching-a-string",children:[]},{value:"Run Subtest with Names Matching a String",id:"run-subtest-with-names-matching-a-string",children:[]}]},{value:"Run Tests when a File Changes",id:"run-tests-when-a-file-changes",children:[]},{value:"Run Tests with Coverage Report",id:"run-tests-with-coverage-report",children:[{value:"Simple Coverage Report",id:"simple-coverage-report",children:[]},{value:"Detailed Coverage Report",id:"detailed-coverage-report",children:[]}]}],p={toc:u};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"how-to-run-go-tests"},"How To Run Go Tests"),(0,s.kt)("h2",{id:"run-all-go-tests"},"Run All Go Tests"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"$ make server_test\n")),(0,s.kt)("h2",{id:"run-specific-tests"},"Run Specific Tests"),(0,s.kt)("p",null,"All of the commands in this section assume that ",(0,s.kt)("inlineCode",{parentName:"p"},"test_db")," is setup properly. This can be done using:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"$ make db_test_reset && make db_test_migrate\n")),(0,s.kt)("h3",{id:"run-acceptance-tests"},"Run Acceptance Tests"),(0,s.kt)("p",null,"If you're adding a feature that requires new or modified configuration, it's a good idea to run acceptance tests against our environments before you merge into master.  You can run acceptance tests against an environment with:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"$ TEST_ACC_ENV=experimental make acceptance_test\n")),(0,s.kt)("p",null,"This command will first load the variables from the ",(0,s.kt)("inlineCode",{parentName:"p"},"config/env/*.env")," file and then run ",(0,s.kt)("inlineCode",{parentName:"p"},"chamber exec")," to pull the environments from AWS.  You can run acceptance tests for the database connection, DOD certificates, and Honeycomb through environment variables with ",(0,s.kt)("inlineCode",{parentName:"p"},"TEST_ACC_INIT_DATABASE=1")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"TEST_ACC_DOD_CERTIFICATES=1"),", respectively."),(0,s.kt)("p",null,"For example to run acceptance tests against staging, including DOD certificate parsing, use:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"$ TEST_ACC_ENV=staging TEST_ACC_DOD_CERTIFICATES=1 make acceptance_test\n")),(0,s.kt)("h3",{id:"run-all-tests-in-a-single-package"},"Run All Tests in a Single Package"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"$ go test ./pkg/handlers/internalapi/\n")),(0,s.kt)("h3",{id:"run-tests-with-names-matching-a-string"},"Run Tests with Names Matching a String"),(0,s.kt)("p",null,"The following will run any Testify tests that have a name matching ",(0,s.kt)("inlineCode",{parentName:"p"},"Test_Name")," in the ",(0,s.kt)("inlineCode",{parentName:"p"},"handlers/internalapi")," package:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"$ go test ./pkg/handlers/internalapi/ -testify.m Test_Name\n")),(0,s.kt)("h3",{id:"run-subtest-with-names-matching-a-string"},"Run Subtest with Names Matching a String"),(0,s.kt)("p",null,"Subtests often have non alpha numeric characters in the name, which testify translates to underscore. You can see the name of the test by running all of the tests like above, but with the verbose flag."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"$ go test -v ./pkg/handlers/internalapi/ -testify.m Test_name\n")),(0,s.kt)("p",null,"Then you can run the single subtest with:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"$ go test -count=1 -v -run 'Test_suite_name/Test_name/sub_test_name' ./pkg/handlers/ghcapi \n")),(0,s.kt)("h2",{id:"run-tests-when-a-file-changes"},"Run Tests when a File Changes"),(0,s.kt)("p",null,"You'll need to install ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/BurntSushi/ripgrep"},"ripgrep")," and ",(0,s.kt)("a",{parentName:"p",href:"http://www.entrproject.org/"},"entr")," (",(0,s.kt)("inlineCode",{parentName:"p"},"brew install ripgrep entr"),"):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"$ rg -t go --files | entr -c $YOUR_TEST_COMMAND\n")),(0,s.kt)("p",null,"Here is an example that will run all model tests when any Go file in the project is changed:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"$ rg -t go --files | entr -c go test ./pkg/models\n")),(0,s.kt)("p",null,"There is generally no need to be any more specific than ",(0,s.kt)("inlineCode",{parentName:"p"},"rg -t go"),", as watching all ",(0,s.kt)("inlineCode",{parentName:"p"},".go")," files is plenty fast enough."),(0,s.kt)("h2",{id:"run-tests-with-coverage-report"},"Run Tests with Coverage Report"),(0,s.kt)("p",null,"Go has a built-in test coverage tool. You can generate test coverage reports at any level outlined above."),(0,s.kt)("h3",{id:"simple-coverage-report"},"Simple Coverage Report"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"$ go test ./pkg/handlers/internalapi -cover\n")),(0,s.kt)("p",null,"You will see a result similar to the following, showing the amount of code coverage your tests produce:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"ok      github.com/transcom/mymove/pkg/handlers/internalapi 72.020s coverage: 73.5% of statements\n")),(0,s.kt)("h3",{id:"detailed-coverage-report"},"Detailed Coverage Report"),(0,s.kt)("p",null,"You can view line-by-line coverage in the browser using the following commands:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"$ go test ./pkg/handlers/internalapi -coverprofile=coverage.out\n$ go tool cover -html=coverage.out\n\n")),(0,s.kt)("p",null,"A browser window will automatically open. You can navigate files via dropdown in the top left corner."))}g.isMDXComponent=!0}}]);
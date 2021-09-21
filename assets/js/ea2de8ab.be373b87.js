"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5025],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=s,f=p["".concat(u,".").concat(m)]||p[m]||l[m]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},12278:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=n(87462),s=n(63366),a=(n(67294),n(3905)),o=["components"],i={},u=void 0,c={unversionedId:"dev/testing/writing-tests/How-to-write-fast-tests",id:"dev/testing/writing-tests/How-to-write-fast-tests",isDocsHomePage:!1,title:"How-to-write-fast-tests",description:"Use stubbed models",source:"@site/docs/dev/testing/writing-tests/How-to-write-fast-tests.md",sourceDirName:"dev/testing/writing-tests",slug:"/dev/testing/writing-tests/How-to-write-fast-tests",permalink:"/mymove-docs/docs/dev/testing/writing-tests/How-to-write-fast-tests",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/testing/writing-tests/How-to-write-fast-tests.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"How To Run Go Tests",permalink:"/mymove-docs/docs/dev/testing/running-tests/run-go-tests"},next:{title:"Running-server-tests-inside-a-transaction",permalink:"/mymove-docs/docs/dev/testing/writing-tests/Running-server-tests-inside-a-transaction"}},d=[{value:"Use stubbed models",id:"use-stubbed-models",children:[]},{value:"Use mocks when testing response types in handler tests",id:"use-mocks-when-testing-response-types-in-handler-tests",children:[{value:"Authorization Test Example",id:"authorization-test-example",children:[]},{value:"Example of testing an error scenario",id:"example-of-testing-an-error-scenario",children:[]}]}],l={toc:d};function p(e){var t=e.components,n=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"use-stubbed-models"},"Use stubbed models"),(0,a.kt)("p",null,"In many cases, we don't need to save models in the database. The less we use the DB, the faster our tests. For example, there are many tests that create a user only to pass it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"suite.AuthenticateUserRequest")," function. That function doesn't care whether or not the user exists in the DB. It uses the user to set Session variables so we can simulate an authenticated user. In these cases, you should use the ",(0,a.kt)("inlineCode",{parentName:"p"},"MakeStubbedUser")," function in testdatagen."),(0,a.kt)("p",null,"For tests that use other models but don't need them in the DB, you can stub them by passing in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Stub: true")," assertion, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"officeUser := testdatagen.MakeTOOOfficeUser(suite.DB(), testdatagen.Assertions{\n    Stub: true,\n})\n")),(0,a.kt)("p",null,"If you find that you are passing in ",(0,a.kt)("inlineCode",{parentName:"p"},"Stub: true")," to the same model in many places, you might consider making a named helper function, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"MakeStubbedOfficeUser")," and placing it in the appropriate file in ",(0,a.kt)("inlineCode",{parentName:"p"},"pkg/testdatagen"),"."),(0,a.kt)("h2",{id:"use-mocks-when-testing-response-types-in-handler-tests"},"Use mocks when testing response types in handler tests"),(0,a.kt)("p",null,"If the purpose of a handler test is to verify that the appropriate response is returned, the DB is not needed. All models can be stubbed, and functions that call the DB can be mocked to return the desired data or errors. We use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/stretchr/testify#mock-package"},"stretchr/testify")," mocking library."),(0,a.kt)("h3",{id:"authorization-test-example"},"Authorization Test Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},'suite.T().Run("When office user is not TOO, response should be 403", func(t *testing.T) {\n    moveOrderFetcher := &mocks.MoveOrderFetcher{}\n    officeUser := testdatagen.MakeOfficeUser(suite.DB(), testdatagen.Assertions{\n      Stub: true,\n    })\n    \n    req := httptest.NewRequest("GET", fmt.Sprintf("/move_orders"), nil)\n    req = suite.AuthenticateOfficeRequest(req, officeUser)\n\n    params := moveorderop.ListMoveOrdersParams{\n      HTTPRequest: req,\n    }\n\n    handler := ListMoveOrdersHandler{\n      handlers.NewHandlerContext(suite.DB(), suite.TestLogger()),\n      moveOrderFetcher,\n    }\n    response := handler.Handle(params)\n\n    suite.IsType(&moveorderop.ListMoveOrdersForbidden{}, response)\n})\n')),(0,a.kt)("h3",{id:"example-of-testing-an-error-scenario"},"Example of testing an error scenario"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},'suite.T().Run("failed fetch of payment requests", func(t *testing.T) {\n    paymentRequestListFetcher := &mocks.PaymentRequestListFetcher{}\n    officeUser := testdatagen.MakeTIOOfficeUser(suite.DB(), testdatagen.Assertions{\n      Stub: true,\n    })\n    paymentRequestListFetcher.On("FetchPaymentRequestList", officeUser.ID).Return(nil, errors.New("test failed to create with err returned")).Once()\n\n    req := httptest.NewRequest("GET", fmt.Sprintf("/payment_requests"), nil)\n    req = suite.AuthenticateOfficeRequest(req, officeUser)\n    params := paymentrequestop.ListPaymentRequestsParams{\n      HTTPRequest: req,\n    }\n\n    handler := ListPaymentRequestsHandler{\n      handlers.NewHandlerContext(suite.DB(), suite.TestLogger()),\n      paymentRequestListFetcher,\n    }\n    response := handler.Handle(params)\n\n    suite.IsType(&paymentrequestop.ListPaymentRequestsInternalServerError{}, response)\n})\n')))}p.isMDXComponent=!0}}]);
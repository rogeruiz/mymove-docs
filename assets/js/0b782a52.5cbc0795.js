"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[4928],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var s=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),h=i,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return n?s.createElement(m,a(a({ref:t},u),{},{components:n})):s.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<r;l++)a[l]=n[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},33691:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var s=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],o={sidebar_position:8},c="Interacting with the database in Go server tests",l={unversionedId:"backend/testing/interacting-with-the-db-in-go-server-tests",id:"backend/testing/interacting-with-the-db-in-go-server-tests",isDocsHomePage:!1,title:"Interacting with the database in Go server tests",description:"Background",source:"@site/docs/backend/testing/interacting-with-the-db-in-go-server-tests.md",sourceDirName:"backend/testing",slug:"/backend/testing/interacting-with-the-db-in-go-server-tests",permalink:"/mymove-docs/docs/backend/testing/interacting-with-the-db-in-go-server-tests",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/testing/interacting-with-the-db-in-go-server-tests.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"backendSidebar",previous:{title:"How to write fast tests",permalink:"/mymove-docs/docs/backend/testing/how-to-write-fast-tests"},next:{title:"Running server tests inside a transaction",permalink:"/mymove-docs/docs/backend/testing/running-server-tests-inside-a-transaction"}},u=[{value:"Background",id:"background",children:[{value:"Cleaning the DB in between tests",id:"cleaning-the-db-in-between-tests",children:[]},{value:"Testing associations on models",id:"testing-associations-on-models",children:[]}]}],d={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interacting-with-the-database-in-go-server-tests"},"Interacting with the database in Go server tests"),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"mymove")," repo uses the DB in some particular ways that might be surprising to folks who are new to Golang. Here are some things to be aware of that might trip you up if you have a background in Rails, RSpec, and ActiveRecord."),(0,r.kt)("h3",{id:"cleaning-the-db-in-between-tests"},"Cleaning the DB in between tests"),(0,r.kt)("p",null,"When writing tests that interact with the database, we want to start with a clean slate at the beginning of each test so that data from one test doesn't affect data in another test. Ideally, every test would be run inside a transaction, and the DB would automatically roll back to a clean state. This is how RSpec and Rails system tests work, as an example of industry best practices. The way MilMove is currently configured, we have to truncate the DB manually, which is one of the reasons our server tests are slow."),(0,r.kt)("p",null,"In order to allow tests from multiple packages to run in parallel (which is one way to speed up the tests), we have to create a separate copy of the DB for each package. This happens in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/pkg/testingsuite/pop_suite.go"},"pop_suite.go")," and was introduced in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/pull/1776"},"this PR"),". In order to take advantage of this, a package must define test setup functions in a separate file that defines the test suite ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),", and that other tests in the same package can use. For example, the test setup for the ",(0,r.kt)("inlineCode",{parentName:"p"},"move")," service in ",(0,r.kt)("inlineCode",{parentName:"p"},"pkg/services/move")," is in ",(0,r.kt)("inlineCode",{parentName:"p"},"pkg/services/move/move_services_test.go"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},'package move\n\nimport (\n    "testing"\n\n    "github.com/stretchr/testify/suite"\n    "go.uber.org/zap"\n\n    "github.com/transcom/mymove/pkg/testingsuite"\n)\n\ntype MoveServiceSuite struct {\n    testingsuite.PopTestSuite\n    logger Logger\n}\n\nfunc TestMoveServiceSuite(t *testing.T) {\n    ts := &MoveServiceSuite{\n        PopTestSuite: testingsuite.NewPopTestSuite(testingsuite.CurrentPackage()),\n    logger:       zap.NewNop(), // Use a no-op logger during testing\n    }\n    suite.Run(t, ts)\n    ts.PopTestSuite.TearDown()\n}\n')),(0,r.kt)("p",null,"Other tests within this package will then use the ",(0,r.kt)("inlineCode",{parentName:"p"},"MoveServiceSuite")," type, such as in ",(0,r.kt)("inlineCode",{parentName:"p"},"pkg/services/move/move_list_fetcher_test.go"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},"func (suite *MoveServiceSuite) TestFetchMoveList() {\n  ...\n}\n")),(0,r.kt)("p",null,"Note that with this config, the DB will ",(0,r.kt)("strong",{parentName:"p"},"not")," get truncated in between tests, which can lead to confusion, and wasted time debugging. In this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"move_list_fetcher_test.go")," is the only test in this package, and it only has one function, so the lack of truncation isn't a problem. For now. Save yourself the trouble, and add a ",(0,r.kt)("inlineCode",{parentName:"p"},"SetupTest")," function to truncate the DB in between tests. Most tests already have this function, but if you're adding a new service, you'll need to add it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},"func (suite *MoveServiceSuite) SetupTest() {\n    err := suite.TruncateAll()\n    suite.FatalNoError(err)\n}\n")),(0,r.kt)("p",null,"Another very important note is that the DB will only be truncated in between functions in tests. It will ",(0,r.kt)("strong",{parentName:"p"},"not")," be truncated in between subtests within the same function. Coming from RSpec, this was surprising to me and has tripped me up several times. Here is an example of subtests that begin with ",(0,r.kt)("inlineCode",{parentName:"p"},"suite.T().Run"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},'func (suite *MoveOrderServiceSuite) TestListMoves() {\n    // Create a Move without a shipment to test that only Orders with shipments\n    // are displayed to the TOO\n    testdatagen.MakeDefaultMove(suite.DB())\n\n    expectedMove := testdatagen.MakeHHGMoveWithShipment(suite.DB(), testdatagen.Assertions{})\n\n    officeUser := testdatagen.MakeDefaultOfficeUser(suite.DB())\n\n    moveOrderFetcher := NewMoveOrderFetcher(suite.DB())\n\n    suite.T().Run("returns moves", func(t *testing.T) {\n      moves, _, err := moveOrderFetcher.ListMoveOrders(officeUser.ID, &services.ListMoveOrderParams{PerPage: swag.Int64(1), Page: swag.Int64(1)})\n\n      suite.FatalNoError(err)\n      suite.Len(moves, 1)\n    })\n\n    suite.T().Run("returns moves filtered by GBLOC", func(t *testing.T) {\n      // This move is outside of the office user\'s GBLOC, and should not be returned\n      testdatagen.MakeHHGMoveWithShipment(suite.DB(), testdatagen.Assertions{\n        TransportationOffice: models.TransportationOffice{\n          Gbloc: "AGFM",\n        },\n      })\n\n      moves, _, err := moveOrderFetcher.ListMoveOrders(officeUser.ID, &services.ListMoveOrderParams{PerPage: swag.Int64(1), Page: swag.Int64(1)})\n\n      suite.FatalNoError(err)\n      suite.Equal(1, len(moves))\n    })\n}\n')),(0,r.kt)("p",null,"In the test above, the second subtest keeps in mind that the data from the previous subtest still exists in the DB, and adjusts the expected payload length accordingly. Subtests allow for more expressive test descriptions, so their use is encouraged, but if there are more than 2 subtests that depend on the DB, it's best to avoid confusion and clear the DB manually by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"suite.TruncateAll()")," at the beginning of each subtest after the first one."),(0,r.kt)("h3",{id:"testing-associations-on-models"},"Testing associations on models"),(0,r.kt)("p",null,"If you're writing an integration test that verifies that a model was created, and you also want to check attributes on associations, you have to load the associations manually. Pop, unlike ActiveRecord, does not automatically load associations."),(0,r.kt)("p",null,"For example, let's say we want to verify that service items were created in the DB, and then iterate through them to make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"Code")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReService")," association was properly created. If we do it like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},'var expectedReServiceCodes []models.ReServiceCode\nexpectedReServiceCodes = append(expectedReServiceCodes,\n  models.ReServiceCodeDLH,\n  models.ReServiceCodeFSC,\n  models.ReServiceCodeDOP,\n  models.ReServiceCodeDDP,\n  models.ReServiceCodeDPK,\n  models.ReServiceCodeDUPK,\n)\n\nerr = suite.DB().Where("mto_shipment_id = ?", shipmentForAutoApprove.ID).All(&serviceItems)\n\nfor i := range serviceItems {\n   suite.Equal(expectedReServiceCodes[i], serviceItems[i].ReService.Code)\n}\n')),(0,r.kt)("p",null,"the test will fail by saying that the actual Code is an empty string, which is misleading because it makes it sound like it was able to fetch the associated ReService."),(0,r.kt)("p",null,"The solution is to load the association first. There are two ways to do this:"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"Eager")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"EagerPreload"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},'err = suite.DB().EagerPreload("ReService").Where("mto_shipment_id = ?", shipmentForAutoApprove.ID).All(&serviceItems)\n')),(0,r.kt)("p",null,"Or by using Pop's ",(0,r.kt)("inlineCode",{parentName:"p"},"Load")," function. You can either Load them all:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},'err = suite.DB().Where("mto_shipment_id = ?", shipmentForAutoApprove.ID).All(&serviceItems)\nsuite.DB().Load(&serviceItems)\n')),(0,r.kt)("p",null,"Or just the one(s) you want:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},'err = suite.DB().Where("mto_shipment_id = ?", shipmentForAutoApprove.ID).All(&serviceItems)\nsuite.DB().Load(&serviceItems, "ReService")\n')))}p.isMDXComponent=!0}}]);
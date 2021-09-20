"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[904],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return r?n.createElement(h,o(o({ref:t},m),{},{components:r})):n.createElement(h,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6897:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={},c="Backend Service Objects Development Guide",l={unversionedId:"dev/contributing/backend/service-objects",id:"dev/contributing/backend/service-objects",isDocsHomePage:!1,title:"Backend Service Objects Development Guide",description:"Table of Contents",source:"@site/docs/dev/contributing/backend/service-objects.md",sourceDirName:"dev/contributing/backend",slug:"/dev/contributing/backend/service-objects",permalink:"/mymove-docs/docs/dev/contributing/backend/service-objects",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/contributing/backend/service-objects.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"Route Planner Guide",permalink:"/mymove-docs/docs/dev/contributing/backend/route-planner"},next:{title:"How to Soft Delete",permalink:"/mymove-docs/docs/dev/contributing/backend/soft-delete"}},m=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"When a Service Object Makes Sense",id:"when-a-service-object-makes-sense",children:[]},{value:"Creating Service Objects",id:"creating-service-objects",children:[{value:"Folder Structure And Naming",id:"folder-structure-and-naming",children:[]},{value:"Parameters and Return Values",id:"parameters-and-return-values",children:[]},{value:"Naming And Defining Service Object Structs and Interfaces",id:"naming-and-defining-service-object-structs-and-interfaces",children:[]},{value:"Naming and Defining Service Object Execution Method",id:"naming-and-defining-service-object-execution-method",children:[]},{value:"Instantiating Service Objects",id:"instantiating-service-objects",children:[]}]},{value:"Testing Service Objects with Mocks",id:"testing-service-objects-with-mocks",children:[]},{value:"Resources",id:"resources",children:[]}],p={toc:m};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"backend-service-objects-development-guide"},"Backend Service Objects Development Guide"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#when-a-service-object-makes-sense"},"When a Service Object Makes Sense")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#creating-service-objects"},"Creating Service Objects"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#folder-structure-and-naming"},"Folder Structure And Naming")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#parameters-and-return-values"},"Parameters and Return Values")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#naming-and-defining-service-object-structs-and-interfaces"},"Naming And Defining Service Object Structs and Interfaces")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#naming-and-defining-service-object-execution-method"},"Naming and Defining Service Object Execution Method")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#instantiating-service-objects"},"Instantiating Service Objects")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#testing-service-objects-with-mocks"},"Testing Service Objects with Mocks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#resources"},"Resources"))),(0,i.kt)("p",null,'Regenerate with "pre-commit run -a markdown-toc"'),(0,i.kt)("h2",{id:"when-a-service-object-makes-sense"},"When a Service Object Makes Sense"),(0,i.kt)("p",null,"When writing or refactoring a piece of business logic to adhere to the service object pattern, it is important that this business function truly is the responsibility of a service object. Overusing this pattern and not applying it when appropriate can lead to several problems. It is necessary that developers make sure they are using the service object layer pattern when appropriate."),(0,i.kt)("p",null,"When to use a service object?"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","dedicated encapsulation of a single piece business logic"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","could possibly be re-purposed"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","does this focus beyond parsing a request and rendering data"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","does this singular piece of business logic use many different dependencies and/or different models")),(0,i.kt)("p",null,"If you answered no to more than two of these questions, then a service object may not be the appropriate design pattern to use in your use case."),(0,i.kt)("h2",{id:"creating-service-objects"},"Creating Service Objects"),(0,i.kt)("p",null,"Once you have analyzed and determined that a service object is appropriate the next step is to actually create it."),(0,i.kt)("h3",{id:"folder-structure-and-naming"},"Folder Structure And Naming"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Find or create appropriate directory.")),(0,i.kt)("p",null,"Find or create the appropriate directory, in ",(0,i.kt)("inlineCode",{parentName:"p"},"/services")," where the service object will live. Oftentimes, this directory\nwill be related to the actual model entity that it is dealing with. If this is something that involves multiple models, or\ndoes not necessarily easily map to a model entity name, then it might be best to create a new folder that has a relevant name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/mymove\n  /pkg\n    /services\n      /paperwork\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create the appropriate file(s) for the service object file, service object test file, and service object directory file.")),(0,i.kt)("p",null,"Create a file with a name that captures what the service object is responsible for. Choose this name carefully as it will also be\nthe name of the service object struct."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/mymove\n  /pkg\n    /services\n      /paperwork\n        form_creator.go\n        form_creator_test.go\n      paperwork.go\n")),(0,i.kt)("h3",{id:"parameters-and-return-values"},"Parameters and Return Values"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),"\nRemember that service objects should be reusable. Try to abstract as much out of the logic specific parameters to achieve this.\nPass as many parameters as make sense. Use your best judgment. In the following example from the codebase, we are only passing in one parameter to the ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateForm")," execution method, a\n",(0,i.kt)("inlineCode",{parentName:"p"},"template")," variable with the type ",(0,i.kt)("inlineCode",{parentName:"p"},"FormTemplate"),". This is because the ",(0,i.kt)("inlineCode",{parentName:"p"},"FormTemplate")," is more complex than most service objects and this use case works for use here.\nSome service objects will only require one or two parameters and a struct is not appropriate.",(0,i.kt)("inlineCode",{parentName:"p"},"FormTemplate")," only holds relatively abstract parameters such that the service\nobject can be reused if needed. Regarding ",(0,i.kt)("inlineCode",{parentName:"p"},"FormCreator"),", this service object can be reused to generate another PDF by passing\ndifferent valid parameters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// paperwork.go\npackage services\n\n// FormTemplate are the struct fields defined to call CreateForm service object\ntype FormTemplate struct {\n  Buffer       *bytes.Reader\n  FieldsLayout map[string]paperworkforms.FieldPos\n  FormType\n  FileName string\n  Data     interface{}\n}\n\n// FormCreator is the service object interface for CreateForm\ntype FormCreator interface {\n  CreateForm(template FormTemplate) (afero.File, error)\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Return Values"),"\nService objects should return as many return values as appropriate. In the case of a service object like the CreateForm, the first parameter is whatever the service object is responsible for creating. If the first parameter returns a created entity, the second parameter should be an error.\nIn the case of a simple entity fetch by ID, the first parameter could be model validation errors. There are some situations that require more complex returns. For those, use your best judgment."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Remember all ",(0,i.kt)("inlineCode",{parentName:"em"},"errors")," should be Wrapped by using ",(0,i.kt)("inlineCode",{parentName:"em"},"fmt.Errorf")," using the ",(0,i.kt)("inlineCode",{parentName:"em"},"%w")," verb so that the underlying error is propagated properly")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// form_creator.go\npackage paperwork\n\nfunc (c formCreator) CreateForm(template services.FormTemplate) (afero.File, error) {\n  // Populate form fields with data\n  err := c.FormFiller.AppendPage(template.Buffer, template.FieldsLayout, template.Data)\n  if err != nil {\n    return nil, fmt.Errorf("Failure writing %s data to form: %w", template.FormType.String(), err))\n  }\n  ...\n}\n')),(0,i.kt)("h3",{id:"naming-and-defining-service-object-structs-and-interfaces"},"Naming And Defining Service Object Structs and Interfaces"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Define a private struct with the same name as the service object file, making sure that it is a noun camel-cased.")),(0,i.kt)("p",null,"The struct fields are the dependencies needed for the service. To implement an interface in Go, all we need to do is to implement all the methods in the interface. By using an interface here\nwe are able to easily do mock testing on this service object. Adding these struct fields as interfaces will allow you to do testing with mocks; they are not required."),(0,i.kt)("p",null,"21 Add an interface for the service, that captures the behavior of the service object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// paperwork.go\npackage services\n\nimport (\n  "bytes"\n  "github.com/spf13/afero"\n  paperworkforms "github.com/transcom/mymove/pkg/paperwork"\n)\n\n// FormTemplate are the struct fields defined to call CreateForm service object\ntype FormTemplate struct {\n  Buffer       *bytes.Reader\n  FieldsLayout map[string]paperworkforms.FieldPos\n  FormType\n  FileName string\n  Data     interface{}\n}\n\n// FormCreator is the service object interface for CreateForm\ntype FormCreator interface {\n  CreateForm(template FormTemplate) (afero.File, error)\n}\n\n')),(0,i.kt)("h3",{id:"naming-and-defining-service-object-execution-method"},"Naming and Defining Service Object Execution Method"),(0,i.kt)("p",null,"The service object execution method is responsible for kicking off the service object call. Ideally, the service object\nshould expose only one public function, with helper private functions, as needed and when it makes sense. Oftentimes,\nsmaller private functions are good to unit test smaller units of functionality. The service object execution method should be the same as the file name\nand struct. The service object execution method should be a method of the service object struct,\na struct of parameters that the service object requires, and returning values, as appropriate."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// form_creator.go\npackage paperwork\n\nimport (\n    "github.com/spf13/afero"\n    "github.com/transcom/mymove/pkg/services"\n)\n\ntype createForm struct {\n  fileStorer FileStorer\n  formFiller FormFiller\n}\n\nfunc (c formCreator) CreateForm(template services.FormTemplate) (afero.File, error) {\n  ...\n}\n')),(0,i.kt)("h3",{id:"instantiating-service-objects"},"Instantiating Service Objects"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"NewServiceObjectStruct")," method that is responsible for creating a new service object. This method should be used whenever a new service object struct is needed. One of the main benefits of using service objects is abstracting implementation and returning an interface, then only using the interface in our codebase elsewhere. This allows us to separate interface from implementation.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// form_creator.go\npackage paperwork\n\nimport (\n  "github.com/spf13/afero"\n  "github.com/transcom/mymove/pkg/services"\n)\n\ntype formCreator struct {\n  fileStorer Storer\n  formFiller Filler\n}\n\nfunc NewFormCreator(FileStorer Storer, FormFiller Filler) services.FormCreator {\n  return &formCreator{FileStorer: FileStorer, FormFiller: FormFiller}\n}\n\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add the service object as a field for the Handler struct of the handler that the service object will be executed in.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// shipments.go\npackage publicapi\n// CreateGovBillOfLadingHandler creates a GBL PDF & uploads it as a document associated to a move doc, shipment and move\ntype CreateGovBillOfLadingHandler struct {\n  handlers.HandlerContext\n  formCreator services.FormCreator\n}\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Instantiate the service object while passing it in as a field for the Handler struct in ",(0,i.kt)("inlineCode",{parentName:"li"},"NewAPIHandler")," function call.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// publicapi/api.go\npackage publicapi\n\nfunc NewPublicAPIHandler(context handlers.HandlerContext) http.Handler {\n  ...\n  publicAPI.ShipmentsCreateGovBillOfLadingHandler = CreateGovBillOfLadingHandler{\n    context,\n    paperworkservice.NewCreateForm(context.FileStorer().TempFileSystem(),\n    paperwork.NewFormFiller(),\n  )}\n  ...\n  return publicAPI.Serve(nil)\n}\n")),(0,i.kt)("h2",{id:"testing-service-objects-with-mocks"},"Testing Service Objects with Mocks"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make sure the mock generation tool is installed by running ",(0,i.kt)("inlineCode",{parentName:"li"},"make server_deps"),"."),(0,i.kt)("li",{parentName:"ol"},"Generate the mock for the interface you'd like to test. See the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/wiki/generate-mocks-with-mockery"},"document on generating mocks with mockery"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Code generated by mockery v1.0.0. DO NOT EDIT.\n\npackage mocks\n\nimport io "io"\nimport mock "github.com/stretchr/testify/mock"\nimport paperwork "github.com/transcom/mymove/pkg/paperwork"\n\n\n// FormFiller is an autogenerated mock type for the FormFiller type\ntype FormFiller struct {\n  mock.Mock\n}\n\n// AppendPage provides a mock function with given fields: _a0, _a1, _a2\nfunc (_m *FormFiller) AppendPage(_a0 io.ReadSeeker, _a1 map[string]paperwork.FieldPos, _a2 interface{}) error {\n  ret := _m.Called(_a0, _a1, _a2)\n\n  var r0 error\n  if rf, ok := ret.Get(0).(func(io.ReadSeeker, map[string]paperwork.FieldPos, interface{}) error); ok {\n    r0 = rf(_a0, _a1, _a2)\n  } else {\n    r0 = ret.Error(0)\n  }\n\n  return r0\n}\n\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Properly mock all methods for interface, denoting the parameter types, along with the return value."),(0,i.kt)("li",{parentName:"ol"},"Check the proper assertions")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// create_form_test.go\npackage paperwork\n\nimport (\n  "github.com/pkg/errors"\n  "github.com/spf13/afero"\n  "github.com/stretchr/testify/assert"\n  "github.com/stretchr/testify/mock"\n  "github.com/stretchr/testify/suite"\n  "github.com/transcom/mymove/pkg/services/paperwork/mocks"\n  paperworkforms "github.com/transcom/mymove/pkg/paperwork"\n  "github.com/transcom/mymove/pkg/services"\n)\n\nfunc (suite *CreateFormSuite) TestCreateFormServiceFormFillerAppendPageFailure() {\n  FileStorer := &mocks.FileStorer{}\n  FormFiller := &mocks.FormFiller{}\n\n  gbl := suite.GenerateGBLFormValues()\n\n  FormFiller.On("AppendPage",\n    mock.AnythingOfType("*bytes.Reader"),\n    mock.AnythingOfType("map[string]paperwork.FieldPos"),\n    mock.AnythingOfType("models.GovBillOfLadingFormValues"),\n  ).Return(errors.New("Error for FormFiller.AppendPage()")).Times(1)\n\n  formCreator := NewFormCreator(FileStorer, FormFiller)\n  template, _ := MakeFormTemplate(gbl, "some-file-name", paperworkforms.Form1203Layout, services.GBL)\n  file, err := formCreator.CreateForm(template)\n\n  suite.NotNil(suite.T(), err)\n  suite.Nil(suite.T(), file)\n  serviceErrMsg := errors.Cause(err)\n  suite.Equal(suite.T(), "Error for FormFiller.AppendPage()", serviceErrMsg.Error(), "should be equal")\n  suite.Equal(suite.T(), "Failure writing GBL data to form.: Error for FormFiller.AppendPage()", err.Error(), "should be equal")\n  FormFiller.AssertExpectations(suite.T())\n}\n')),(0,i.kt)("p",null,"It is important to note that when using a mocked interface, the mock function call will be called, not the original. This helps\nto minimize side affects and allows us as developers to focus on what we are truly testing."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Use ",(0,i.kt)("inlineCode",{parentName:"em"},"MockedInterface.On()")," to mock a method. See their ",(0,i.kt)("a",{parentName:"em",href:"https://godoc.org/github.com/stretchr/testify/mock#Call.On"},"docs")," for more information."),"\n",(0,i.kt)("em",{parentName:"p"},"Use ",(0,i.kt)("inlineCode",{parentName:"em"},"MockedInterface.AssertExpectations")," to validate expectations, such as parameter type and number of times the method was called.")),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pairing session on creating the storage in transit GET handler with a service layer:\n",(0,i.kt)("a",{parentName:"li",href:"https://drive.google.com/file/d/19cCDLt1hDJSbZDhHdwQ8u63lBhupTK_s/view"},"video"),"\nfrom the ",(0,i.kt)("a",{parentName:"li",href:"https://drive.google.com/drive/folders/1WMZ5FzzWMU-HzEr36QFfVRr8TRyuK8I-"},"folder"),"\nand ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/2017"},"pull request"))))}u.isMDXComponent=!0}}]);
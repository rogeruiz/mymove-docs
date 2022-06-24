"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1},o="Backend Service Objects Development Guide",s={unversionedId:"backend/guides/service-objects",id:"backend/guides/service-objects",title:"Backend Service Objects Development Guide",description:"What is a Service Object?",source:"@site/docs/backend/guides/service-objects.md",sourceDirName:"backend/guides",slug:"/backend/guides/service-objects",permalink:"/mymove-docs/docs/backend/guides/service-objects",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/service-objects.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"backendSidebar",previous:{title:"testing-handlers",permalink:"/mymove-docs/docs/backend/testing/testing-handlers"},next:{title:"Backend Structure",permalink:"/mymove-docs/docs/backend/guides/backend-structure"}},l={},c=[{value:"What is a Service Object?",id:"what-is-a-service-object",level:2},{value:"Key features",id:"key-features",level:3},{value:"Creating Service Objects",id:"creating-service-objects",level:2},{value:"Where does it go?",id:"where-does-it-go",level:3},{value:"Adding a new file",id:"adding-a-new-file",level:3},{value:"Creating the struct",id:"creating-the-struct",level:3},{value:"Creating the function",id:"creating-the-function",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Return values",id:"return-values",level:4},{value:"Implementation",id:"implementation",level:4},{value:"Creating the interface",id:"creating-the-interface",level:3},{value:"Example file",id:"example-file",level:3},{value:"Using Service Objects",id:"using-service-objects",level:2},{value:"Examples",id:"examples",level:3},{value:"Testing Service Objects",id:"testing-service-objects",level:2},{value:"Resources",id:"resources",level:2}],p={toc:c};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"backend-service-objects-development-guide"},"Backend Service Objects Development Guide"),(0,r.kt)("h2",{id:"what-is-a-service-object"},"What is a Service Object?"),(0,r.kt)("p",null,"The MilMove backend is ",(0,r.kt)("em",{parentName:"p"},"loosely")," designed with this ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1kVQzrYWY0AnYyPbiqfuFv8Fh_7IwwIFv3XKRxZI44Hs/edit#slide=id.p"},"3-layer structure"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Presentation layer.")," Our endpoint handlers that perform type conversions and connect user requests to business logic functions."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Business logic layer.")," Code that implements MilMove's business logic."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Data access layer.")," Code that directly interacts with and manipulates the database.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"services")," package is a combination of the bottom two layers, ",(0,r.kt)("strong",{parentName:"p"},"business logic")," and ",(0,r.kt)("strong",{parentName:"p"},"data access"),". It is located within the ",(0,r.kt)("inlineCode",{parentName:"p"},"./pkg/services")," directory."),(0,r.kt)("p",null,'Our "service objects," as we call them (this is MilMove-specific terminology), are the structs/functions within this package that implement our business logic. We organize them by data type, or ',(0,r.kt)("strong",{parentName:"p"},"model"),". For example, all service objects that implement the business logic for shipments will be grouped together in the same sub-package."),(0,r.kt)("p",null,"This design pattern was decided in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/docs/adr/0033-service-object-layer.md"},"Service Object Layer ADR"),". Service objects allow for better unit testing, re-usability, and organization of code in the MilMove project. We have also developed clear patterns for ",(0,r.kt)("a",{parentName:"p",href:"#creating-service-objects"},"creating")," and ",(0,r.kt)("a",{parentName:"p",href:"#using-service-objects"},"using")," this structure."),(0,r.kt)("h3",{id:"key-features"},"Key features"),(0,r.kt)("p",null,"A well-defined service object is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Concerned primarily with one data object (although it may use other service objects to modify additional data objects),"),(0,r.kt)("li",{parentName:"ul"},"Reusable and modular,"),(0,r.kt)("li",{parentName:"ul"},"Not related to or affected by our API design.")),(0,r.kt)("p",null,"Service objects should expose clear and self-explanatory public functions. Niche utilities and business logic should be in private functions within the service object's package."),(0,r.kt)("h2",{id:"creating-service-objects"},"Creating Service Objects"),(0,r.kt)("h3",{id:"where-does-it-go"},"Where does it go?"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"mymove")," codebase, navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"./pkg/services")," directory. You should see a bunch of sub-directories (these are all Go packages themselves) and then singular Go files at the end. The names of these solo Go files should match that of a directory above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"mymove/\n\u251c\u2500\u2500 pkg/\n\u2502   \u251c\u2500\u2500 services/\n\u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u251c\u2500\u2500 mto_agent/\n\u2502   \u2502   \u251c\u2500\u2500 mto_service_item/   <- a sub-package\n\u2502   \u2502   \u251c\u2500\u2500 mto_shipment/\n\u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u251c\u2500\u2500 mto_agent.go\n\u2502   \u2502   \u251c\u2500\u2500 mto_service_item.go <- the interface in the services package\n\u2502   \u2502   \u251c\u2500\u2500 mto_shipment.go\n\u2502   \u2502   \u251c\u2500\u2500 ...\n")),(0,r.kt)("p",null,"Note that the names here ",(0,r.kt)("strong",{parentName:"p"},"match our database tables"),", but in the singular form."),(0,r.kt)("p",null,"Each of these sub-packages handles the operations for one particular data model. This helps us keep track of our database interactions and allows for differently-focused teams to speak with the database and APIs using the same validation and functionality."),(0,r.kt)("p",null,"Now you must either find the sub-package that corresponds to the data model for your new function, or create a new one. Make sure to add the directory ",(0,r.kt)("em",{parentName:"p"},"and")," the top-level Go file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:"{6,9}","{6,9}":!0},"mymove/\n\u251c\u2500\u2500 pkg/\n\u2502   \u251c\u2500\u2500 services/\n\u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u251c\u2500\u2500 mto_shipment/\n\u2502   \u2502   \u251c\u2500\u2500 reweigh/\n\u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u251c\u2500\u2500 mto_shipment.go\n\u2502   \u2502   \u251c\u2500\u2500 reweigh.go\n\u2502   \u2502   \u251c\u2500\u2500 ...\n")),(0,r.kt)("p",null,"Leave this Go file blank for the time being."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If your service involves multiple models or does not easily map to a model entity name, then it might be best to create a new folder that has a relevant name."),(0,r.kt)("p",{parentName:"div"},"However, first consider whether or not the additional models are being updated as a ",(0,r.kt)("em",{parentName:"p"},"side-effect")," of another model's update and which model is being exposed as an input or return value. In either of those cases, you can determine which model is the true subject of your service."),(0,r.kt)("p",{parentName:"div"},"Ultimately, you must use your best judgment."))),(0,r.kt)("h3",{id:"adding-a-new-file"},"Adding a new file"),(0,r.kt)("p",null,"Once you have identified or creating the sub-package for your new service object, navigate into that folder."),(0,r.kt)("p",null,"We name our files for the main ",(0,r.kt)("strong",{parentName:"p"},"action")," of that particular service object. For example, the file that contains the service to update a shipment is called ",(0,r.kt)("inlineCode",{parentName:"p"},"mto_shipment_updater.go"),". If you are modifying an existing action, open that particular file. Otherwise, you should create a new one."),(0,r.kt)("p",null,"If you are working from scratch, you will also need to add a service test file so that your tests will run properly. This file is boilerplate and can be copy/pasted from any other ",(0,r.kt)("inlineCode",{parentName:"p"},"services")," sub-package."),(0,r.kt)("p",null,"Your new sub-package should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"mymove/\n\u251c\u2500\u2500 pkg/\n\u2502   \u251c\u2500\u2500 services/\n\u2502   \u2502   \u251c\u2500\u2500 reweigh/\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 reweigh_creator.go  <------ this name can be any action\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 reweigh_creator_test.go\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 reweigh_service_test.go  <- boilerplate\n\u2502   \u2502   \u251c\u2500\u2500 ...\n\u2502   \u2502   \u251c\u2500\u2500 reweigh.go\n\u2502   \u2502   \u251c\u2500\u2500 ...\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Stuttering")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You might notice that there's a lot of redundancy in this naming scheme. This is commonly referred to as ",(0,r.kt)("strong",{parentName:"p"},'"stuttering"')," and is considered an anti-pattern in most languages and frameworks."),(0,r.kt)("p",{parentName:"div"},"We may at some point try to move away from this convention, but it is preferrable to be consistent with our less-than-ideal naming scheme for now."))),(0,r.kt)("h3",{id:"creating-the-struct"},"Creating the struct"),(0,r.kt)("p",null,"Now that you have your directory and files set up, you can start to add the code within. Open up the Go file corresponding to your action."),(0,r.kt)("p",null,"Every service object has a base struct type, and all of its actions will be methods on that struct. This struct should be private to the sub-package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="./pkg/services/reweigh/reweigh_creator.go"',title:'"./pkg/services/reweigh/reweigh_creator.go"'},"package reweigh\n\ntype reweighCreator struct {\n    // does not have any defined fields yet\n}\n")),(0,r.kt)("p",null,"This struct should contain all the required fields for your new service. You may not know what these are yet, which is okay. Commonly, you'll see validator functions or other services that facilitate the business logic:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type reweighUpdater struct {\n    checks       []reweighValidator // validator functions\n    recalculator services.PaymentRequestShipmentRecalculator // another service object\n}\n")),(0,r.kt)("p",null,"You should think of these fields as ",(0,r.kt)("em",{parentName:"p"},"dependencies")," for your new service object. The more you have, the more work the caller will have to do to set up this service. This can get inconvenient very quickly."),(0,r.kt)("p",null,"Typically, these dependencies will be interfaces, which makes it easier to mock them in tests."),(0,r.kt)("h3",{id:"creating-the-function"},"Creating the function"),(0,r.kt)("p",null,"Once you have a struct defined, you can start working on the main function for your service. This will be a method on the previously defined struct."),(0,r.kt)("p",null,"We follow a similar naming convention where the function is the active form of your action verb + the name of the object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="./pkg/services/reweigh/reweigh_creator.go"',title:'"./pkg/services/reweigh/reweigh_creator.go"'},"// CreateReweigh creates a new reweigh for a shipment. It is a method on the reweighCreator struct.\nfunc (f *reweighCreator) CreateReweigh() {\n    // no code yet\n}\n")),(0,r.kt)("p",null,"Once you have your bare function signature, you can start to fill in the parameters and return values."),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,"Service objects should be reusable and modular, so keep this in mind while defining your parameters. To start with, they should be the bare minimum needed for someone to call this function. Use your best judgment."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You will always need to pass in the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppContext")," as the first argument. This is standard in our codebase. Read more about ",(0,r.kt)("a",{parentName:"p",href:"/mymove-docs/docs/backend/guides/use-stateless-services-with-app-context"},"AppContext and how to use it"),"."))),(0,r.kt)("p",null,"Often, the particular model type you are dealing with is passed in as input as well. This is not a hard rule, but it is a common convention. For our example, we are creating a reweigh and therefore will need information from a ",(0,r.kt)("inlineCode",{parentName:"p"},"models.Reweigh")," type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="./pkg/services/reweigh/reweigh_creator.go"',title:'"./pkg/services/reweigh/reweigh_creator.go"'},"// CreateReweigh creates a new reweigh for a shipment. It is a method on the reweighCreator struct.\nfunc (f *reweighCreator) CreateReweigh(appCtx appcontext.AppContext, reweigh *models.Reweigh) {\n    // no code yet\n}\n")),(0,r.kt)("h4",{id:"return-values"},"Return values"),(0,r.kt)("p",null,"Service objects should return as many return values as appropriate, and this will always include possible errors. A common convention is to return the pointer of the subject model type and a possible error."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="./pkg/services/reweigh/reweigh_creator.go"',title:'"./pkg/services/reweigh/reweigh_creator.go"'},"// CreateReweigh creates a new reweigh for a shipment. It is a method on the reweighCreator struct.\nfunc (f *reweighCreator) CreateReweigh(appCtx appcontext.AppContext, reweigh *models.Reweigh) (*models.Reweigh, error) {\n    return nil, nil // so the compiler stays happy\n}\n")),(0,r.kt)("h4",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"Once you have defined the signature for your function, you can start to fill out the logic of your action. ",(0,r.kt)("strong",{parentName:"p"},"This is going to be highly context-dependent.")," Keep in mind that the following guidance may not be directly useful for your particular situation."),(0,r.kt)("p",null,"For creating a new model record, we generally need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Find any related objects in the database. For a reweigh, we'll need to verify that the shipment exists."),(0,r.kt)("li",{parentName:"ol"},"Validate the input data against our business rules."),(0,r.kt)("li",{parentName:"ol"},"Make the change to the database."),(0,r.kt)("li",{parentName:"ol"},"Return the successfully created object.")),(0,r.kt)("p",null,"We're going to skip Step #2 for now, since that goes into our ",(0,r.kt)("a",{parentName:"p",href:"service-validation"},"validator pattern"),". We also might not know our business rules just yet. We will be implementing #1, 3, and 4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step #1")," involves a query on the database using our ORM, ",(0,r.kt)("a",{parentName:"p",href:"https://gobuffalo.io/en/docs/db/getting-started"},"Pop"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Set up an empty model to receive any data found by Pop\nmtoShipment := &models.MTOShipment{}\n// Find the shipment using the ShipmentID provided in our reweigh input\nerr := appCtx.DB().Find(mtoShipment, reweigh.ShipmentID)\nif err != nil {\n    // Return our standard NotFoundError type if there\'s an error\n    return nil, services.NewNotFoundError(reweigh.ShipmentID, "while looking for MTOShipment")\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step #3")," (remember: we're skipping Step #2) also leverages ",(0,r.kt)("a",{parentName:"p",href:"https://gobuffalo.io/en/docs/db/mutations/"},"Pop")," to create the new reweigh record on the database. First, we want to create a ",(0,r.kt)("strong",{parentName:"p"},"transaction")," so that we can rollback this operation (or any calling operations) if something goes wrong."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"txErr := appCtx.NewTransaction(func(txnCtx appcontext.AppContext) error {\n    // Our database modification will go in here\n    // We also only need to return an error because our reweigh is a pointer and will be updated by the Pop method\n    return nil\n})\nif txErr != nil {\n    return nil, txErr\n}\n")),(0,r.kt)("p",null,"Now lets fill in the creation code, making sure to use the transaction context:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'verrs, err := txnCtx.DB().ValidateAndCreate(reweigh)\n// Check for validation errors encountered before Pop created the reweigh\nif verrs != nil && verrs.HasAny() {\n    // Return our standard InvalidInputError type\n    return services.NewInvalidInputError(uuid.Nil, err, verrs, "Invalid input found while creating the reweigh.")\n} else if err != nil {\n    // If the error is something else (this is unexpected), we create a QueryError\n    return services.NewQueryError("Reweigh", err, "")\n}\n')),(0,r.kt)("p",null,"For ",(0,r.kt)("strong",{parentName:"p"},"Step #4"),", we simply return our new reweigh! Putting all of the above code together, we'll get:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="./pkg/services/reweigh/reweigh_creator.go"',title:'"./pkg/services/reweigh/reweigh_creator.go"'},'// CreateReweigh creates a new reweigh for a shipment. It is a method on the reweighCreator struct.\nfunc (f *reweighCreator) CreateReweigh(appCtx appcontext.AppContext, reweigh *models.Reweigh) (*models.Reweigh, error) {\n    // Set up an empty model to receive any data found by Pop\n    mtoShipment := &models.MTOShipment{}\n    // Find the shipment using the ShipmentID provided in our reweigh input\n    err := appCtx.DB().Find(mtoShipment, reweigh.ShipmentID)\n    if err != nil {\n        // Return our standard NotFoundError type if there\'s an error\n        return nil, services.NewNotFoundError(reweigh.ShipmentID, "while looking for MTOShipment")\n    }\n\n    txErr := appCtx.NewTransaction(func(txnCtx appcontext.AppContext) error {\n        verrs, err := txnCtx.DB().ValidateAndCreate(reweigh)\n        // Check for validation errors encountered before Pop created the reweigh\n        if verrs != nil && verrs.HasAny() {\n            // Return our standard InvalidInputError type\n            return services.NewInvalidInputError(uuid.Nil, err, verrs, "Invalid input found while creating the reweigh.")\n        } else if err != nil {\n            // If the error is something else (this is unexpected), we create a QueryError\n            return services.NewQueryError("Reweigh", err, "")\n        }\n        return nil\n    })\n    if txErr != nil {\n        return nil, txErr\n    }\n\n    // highlight-next-line\n    return reweigh, nil\n}\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Now that the function is filled out, you'll want to refactor it by extracting each logical step into a separate, smaller, and well-named private function. We should strive to keep all functions as small as possible for readability."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/pkg/services/mto_service_item/mto_service_item_updater.go#L44-L123"},"ApproveOrRejectServiceItem")," is a good example of a function that performs a lot of actions, and each one is encapsulated in a separate function."))),(0,r.kt)("h3",{id:"creating-the-interface"},"Creating the interface"),(0,r.kt)("p",null,"Now we get to go back to our top-level Go file (",(0,r.kt)("inlineCode",{parentName:"p"},"reweigh.go"),", in this example)."),(0,r.kt)("p",null,"Our pattern for service objects involves creating an interface type in the ",(0,r.kt)("inlineCode",{parentName:"p"},"services")," package proper that is implemented by your new service object. One reason for this is import cycles. Another is to keep this functionality grouped together in ",(0,r.kt)("inlineCode",{parentName:"p"},"services")," without having to put all our code in one huge pile. Finally, interfaces are the only objects in Go that can be effectively mocked, so this is advantageous for our testing."),(0,r.kt)("p",null,"The main thing to remember for an interface is that ",(0,r.kt)("strong",{parentName:"p"},"it must match your function signature ",(0,r.kt)("em",{parentName:"strong"},"exactly")),". Any deviation will break the relationship between these two types (the struct and the interface)."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Interfaces vs Structs")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'If you are new to Go and are still a little wobbly on the concept of "interfaces" vs "structs" remember:'),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Interface")," types define ",(0,r.kt)("em",{parentName:"li"},"functions"),". They are concerned with ",(0,r.kt)("em",{parentName:"li"},"verbs"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Struct")," types define ",(0,r.kt)("em",{parentName:"li"},"objects"),". They are concerned with ",(0,r.kt)("em",{parentName:"li"},"nouns"),".")))),(0,r.kt)("p",null,"Using the function signature we defined above, we can complete our interface right away."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="./pkg/services/reweigh.go"',title:'"./pkg/services/reweigh.go"'},'package services\n\nimport (\n    "github.com/transcom/mymove/pkg/appcontext"\n    "github.com/transcom/mymove/pkg/models"\n)\n\n// ReweighCreator creates a reweigh\ntype ReweighCreator interface {\n    CreateReweigh(appCtx appcontext.AppContext, reweigh *models.Reweigh) (*models.Reweigh, error)\n}\n')),(0,r.kt)("p",null,"Once you have defined this interface, we can go back to our service object's file and add a function that returns an instance of the interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="./pkg/services/reweigh/reweigh_creator.go"',title:'"./pkg/services/reweigh/reweigh_creator.go"'},"// NewReweighCreator creates a new struct with the service dependencies and returns the interface type\nfunc NewReweighCreator() services.ReweighCreator {\n    return &reweighCreator{}\n}\n")),(0,r.kt)("p",null,"This function lets us keep our struct and dependencies private to this sub-package and helps us standardize the way folks use our service. By abstracting implementation and returning an interface, we are creating boundaries between functionality and implementation that allow our codebase to be more flexible."),(0,r.kt)("h3",{id:"example-file"},"Example file"),(0,r.kt)("p",null,"Putting together everything we did above, this is what our new service object file would look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="./pkg/services/reweigh/reweigh_creator.go"',title:'"./pkg/services/reweigh/reweigh_creator.go"'},'package reweigh\n\nimport (\n    "github.com/gofrs/uuid"\n\n    "github.com/transcom/mymove/pkg/appcontext"\n\n    "github.com/transcom/mymove/pkg/services"\n\n    "github.com/transcom/mymove/pkg/models"\n)\n\n\ntype reweighCreator struct {\n    // does not have any defined fields yet\n}\n\n// NewReweighCreator creates a new struct with the service dependencies and returns the interface type\nfunc NewReweighCreator() services.ReweighCreator {\n    return &reweighCreator{}\n}\n\n// CreateReweigh creates a new reweigh for a shipment. It is a method on the reweighCreator struct.\nfunc (f *reweighCreator) CreateReweigh(appCtx appcontext.AppContext, reweigh *models.Reweigh) (*models.Reweigh, error) {\n    // Set up an empty model to receive any data found by Pop\n    mtoShipment := &models.MTOShipment{}\n    // Find the shipment using the ShipmentID provided in our reweigh input\n    err := appCtx.DB().Find(mtoShipment, reweigh.ShipmentID)\n    if err != nil {\n        // Return our standard NotFoundError type if there\'s an error\n        return nil, services.NewNotFoundError(reweigh.ShipmentID, "while looking for MTOShipment")\n    }\n\n    txErr := appCtx.NewTransaction(func(txnCtx appcontext.AppContext) error {\n        verrs, err := txnCtx.DB().ValidateAndCreate(reweigh)\n        // Check for validation errors encountered before Pop created the reweigh\n        if verrs != nil && verrs.HasAny() {\n            // Return our standard InvalidInputError type\n            return services.NewInvalidInputError(uuid.Nil, err, verrs, "Invalid input found while creating the reweigh.")\n        } else if err != nil {\n            // If the error is something else (this is unexpected), we create a QueryError\n            return services.NewQueryError("Reweigh", err, "")\n        }\n        return nil\n    })\n    if txErr != nil {\n        return nil, txErr\n    }\n\n    return reweigh, nil\n}\n')),(0,r.kt)("h2",{id:"using-service-objects"},"Using Service Objects"),(0,r.kt)("p",null,"Service objects are often used in other services, but they're most commonly used by our handler functions. Handlers are the ",(0,r.kt)("strong",{parentName:"p"},"presentation layer")," of our backend, and they correspond to API endpoints."),(0,r.kt)("p",null,"In either case, they will be used in much the same way. Service objects are often (although not necessarily) defined as a dependency in a struct:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"{4}","{4}":!0},"// CreateReweighHandler is the handler for the API endpoint to create a reweigh\ntype CreateReweighHandler struct {\n    handlers.HandlerConfig\n    creator services.ReweighCreator // our service object\n}\n")),(0,r.kt)("p",null,"When that struct is being instantiated, they are created using their ",(0,r.kt)("inlineCode",{parentName:"p"},"New<MyServiceObject>")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:"{4}","{4}":!0},"// Create an instance of CreateReweighHandler and assign it to our generated Swagger Go code\nsampleAPI.MtoShipmentCreateReweighHandler = CreateReweighHandler{\n    ctx,\n    reweigh.NewReweighCreator(), // instantiating our service object\n}\n")),(0,r.kt)("p",null,"And finally, once the service object is instantiated, it will be used by calling the function defined in the interface type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// Call the service object using the creator set in our handler struct (h, defined above)\ncreatedReweigh, err := h.creator.CreateReweigh(appCtx, newReweigh)\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/blob/master/pkg/services/upload/upload_creator.go"},"CreateUpload")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/blob/master/pkg/services/move/excess_weight_uploader.go"},"CreateExcessWeightUpload")," - calls ",(0,r.kt)("inlineCode",{parentName:"li"},"CreateUpload"))),(0,r.kt)("h2",{id:"testing-service-objects"},"Testing Service Objects"),(0,r.kt)("p",null,"Testing the service object you wrote will be a typical exercise in writing unit tests in Go. Look at examples for guidance here."),(0,r.kt)("p",null,"When service objects are dependencies, we want to be able to mock those out in our unit tests. To generate the mock types, add this line to your top-level Go file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"services")," package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="./pkg/services/reweigh.go" {9}',title:'"./pkg/services/reweigh.go"',"{9}":!0},'package services\n\nimport (\n    "github.com/transcom/mymove/pkg/appcontext"\n    "github.com/transcom/mymove/pkg/models"\n)\n\n// ReweighCreator creates a reweigh\n//go:generate mockery --name ReweighCreator --disable-version-string\ntype ReweighCreator interface {\n    CreateReweighCheck(appCtx appcontext.AppContext, reweigh *models.Reweigh) (*models.Reweigh, error)\n}\n')),(0,r.kt)("p",null,"This enables the the Go ",(0,r.kt)("inlineCode",{parentName:"p"},"mockery")," tool to generate the mock type automatically. To trigger the generation, run ",(0,r.kt)("inlineCode",{parentName:"p"},"make mocks_generate"),"."),(0,r.kt)("p",null,"When you use the mock type, you need to know two things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"What you expect to receive as input."),(0,r.kt)("li",{parentName:"ol"},"What you expect to receive as output.")),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Pointers in Mocks")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"These should be defined as exactly as possible to preserve the integrity of your test. If you have to include pointer input, you must ",(0,r.kt)("em",{parentName:"p"},"always")," use copies of the pointer and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"never, ever use that specific pointer again")),". Otherwise, you could unknowingly change the input you expect and your test would be compromised."),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"If you are unsure about the inputs/returns for a mock, you should not use a mock.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example test mock"',title:'"Example',test:!0,'mock"':!0},'reweigh := testdatagen.MakeDefaultReweigh(suite.DB())\nreweighCopy := *reweigh // make sure the copy is a value, not a pointer\n\nupdater := &mocks.ReweighUpdater{}\nupdater.On("UpdateReweigh",\n    mock.AnythingOfType("appcontext.AppContext"), // you can include as many input parameters\n    mock.AnythingOfType("*models.Reweigh")        // as you need\n).Return(reweighCopy, nil)\n')),(0,r.kt)("p",null,"Note that this calls the generated mock function, ",(0,r.kt)("em",{parentName:"p"},"not")," the original."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"More mocking")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"MockedInterface.On()")," to mock a method. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"MockedInterface.AssertExpectations()")," to validate expectations, such as parameter type and number of times the method was called."),(0,r.kt)("p",{parentName:"div"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/stretchr/testify/mock#Call.On"},"testify's docs")," for more information."))),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/presentation/d/1kVQzrYWY0AnYyPbiqfuFv8Fh_7IwwIFv3XKRxZI44Hs/edit#slide=id.p"},"3 Layer Application Structure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gobyexample.com/interfaces"},"Go by Example: Interfaces"))))}h.isMDXComponent=!0}}]);
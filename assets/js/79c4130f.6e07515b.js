"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[3733],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2439:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={},l=void 0,c={unversionedId:"dev/contributing/backend/WIP-Server-side-validation",id:"dev/contributing/backend/WIP-Server-side-validation",isDocsHomePage:!1,title:"WIP-Server-side-validation",description:"The (grossly over-simplified) layers of the MilMove server",source:"@site/docs/dev/contributing/backend/WIP-Server-side-validation.md",sourceDirName:"dev/contributing/backend",slug:"/dev/contributing/backend/WIP-Server-side-validation",permalink:"/mymove-docs/docs/dev/contributing/backend/WIP-Server-side-validation",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/contributing/backend/WIP-Server-side-validation.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"Using-loop-iterator-variables-in-go",permalink:"/mymove-docs/docs/dev/contributing/backend/Using-loop-iterator-variables-in-go"},next:{title:"How to Access a Global Application Variable",permalink:"/mymove-docs/docs/dev/contributing/backend/access-global-variables"}},d=[{value:"The (grossly over-simplified) layers of the MilMove server",id:"the-grossly-over-simplified-layers-of-the-milmove-server",children:[{value:"Authentication",id:"authentication",children:[]},{value:"Swagger (OpenAPI)",id:"swagger-openapi",children:[]},{value:"Handlers",id:"handlers",children:[]},{value:"Service Objects",id:"service-objects",children:[]},{value:"Models",id:"models",children:[]}]}],u={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-grossly-over-simplified-layers-of-the-milmove-server"},"The (grossly over-simplified) layers of the MilMove server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#authentication"},"Authentication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#swagger-openapi"},"Swagger (OpenAPI)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#handlers"},"Handlers"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Payload-to-Model conversions (and the reverse)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#service-objects"},"Service Objects")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#models"},"Models"))),(0,a.kt)("p",null,"In an ideal world, each of these layers would have a distinct purpose. Because we've never explicitly defined these purposes, learning where to find code while debugging an error, or where to write code when working on a new part of the app, is one of the steepest challenges on MilMove. We can immediately improve the accessibility of the project for new and junior engineers by establishing basic guidelines about what logic belongs in each of the server-side app layers. "),(0,a.kt)("p",null,"I propose that we begin to write these guidelines starting with validation. Once we agree on where we validate each part of the user request, we can use that as a foundation to structure the rest of our codebase. Below is the validation structure I suggest for MilMove."),(0,a.kt)("p",null,"(Note that this is NOT an in-depth guide for how to interact with each layer in our system. It is only intended to be a high-level overview.)"),(0,a.kt)("h3",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"This is where we authenticate the user. Any code related to permissions, sessions, certificates, etc, belongs here. No validation related to user input or the request body should be in this layer. "),(0,a.kt)("h3",{id:"swagger-openapi"},"Swagger (OpenAPI)"),(0,a.kt)("p",null,"This is the first place where we'll see any input validation. After the server authenticates the user, it tries to convert our request to the Go types defined by the packages located in ",(0,a.kt)("inlineCode",{parentName:"p"},"./pkg/gen"),". These files are generated using Swagger Codegen, a tool that analyzes our API specification and converts it into Go code. ",(0,a.kt)("strong",{parentName:"p"},"We do not write any code in ",(0,a.kt)("inlineCode",{parentName:"strong"},"./pkg/gen")," - all of these files are autogenerated.")," "),(0,a.kt)("p",null,"We can modify the generated Go code by updating our API specifications and then regenerating the files in ",(0,a.kt)("inlineCode",{parentName:"p"},"./pkg/gen"),". Our API specifications are YAML files that have been written in the Swagger (OpenAPI v2.0) format and are kept in the top-level ",(0,a.kt)("inlineCode",{parentName:"p"},"./swagger")," directory. Each one of these files corresponds to a distinct API being served up by MilMove."),(0,a.kt)("p",null,'(Is all this talk of "Swagger" and "OpenAPI" confusing to you? I recommend going through the official Swagger documentation as a first step. Start here: ',(0,a.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/about/"},"What is OpenAPI?"),")"),(0,a.kt)("p",null,"The OpenAPI format gives us a lot of options when we're writing our API. When we define the fields that belong in the request body of an endpoint, we can use this format to tell Swagger how these fields should be validated. For example, we can add rules like ",(0,a.kt)("inlineCode",{parentName:"p"},"readOnly: True"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"format: date-time"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"pattern: '^(\\[2-9\\]\\\\d{2}-\\\\d{3}-\\\\d{4})?$'")," (the pattern for a phone number). Swagger will use this information when it generates the Go code for our server, and this code will then be able to validate the input data as expected. "),(0,a.kt)("p",null,"It's important to note that by adding these rules to the API specification, we're not just telling Swagger how to validate the input - we're telling the user what kind of input is acceptable. Just like how we use these YAML files to generate Go code, we also use them to generate user-facing documentation. This will be our clients' primary resource for learning how to use our API. "),(0,a.kt)("p",null,"When we rely on validation in the Swagger-generated Go code, we don't have much control over what those responses look like, and we don't have any control over possible exceptions or complex business rules. The true benefit of placing input validation in this layer is communicating with the client about what they need to know in order to use our API successfully. This layer is all about improving clarity and usability. "),(0,a.kt)("p",null,"Any validation that can be reasonably defined using the OpenAPI format, without sacrificing readability, ease-of-use, or maintainability, should be included in the API specification. "),(0,a.kt)("h3",{id:"handlers"},"Handlers"),(0,a.kt)("p",null,"The Handlers layer, located in ",(0,a.kt)("inlineCode",{parentName:"p"},"./pkg/handlers"),", is the most organized. Every API on our server has its own package (",(0,a.kt)("inlineCode",{parentName:"p"},"adminapi"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"primeapi"),", etc), and every endpoint within that API has its own ",(0,a.kt)("inlineCode",{parentName:"p"},"Handle()")," function. These functions are where we execute all of the required logic for a given endpoint. "),(0,a.kt)("p",null,"When we work in this part of the codebase, we already know who our user is (or who they can be) and which API they came from by virtue of where we're writing our code. This structure makes it seem like the ",(0,a.kt)("inlineCode",{parentName:"p"},"Handle()")," functions are a natural place to check API-level or user-specific business rules. However, this layer should ",(0,a.kt)("strong",{parentName:"p"},"not")," access the database - we reserve that functionality for the Service Objects (for reasons outlined in that section). "),(0,a.kt)("p",null,'With business rules like "The Prime contractor cannot update a service item that already has an active payment request" or "The TOO can only see moves in the same GBLOC as their own transportation office," it becomes apparent that we will need to query the database in order to verify that these conditions have been met. '),(0,a.kt)("h4",{id:"payload-to-model--model-to-payload-functions"},"Payload-to-Model / Model-to-Payload functions"),(0,a.kt)("p",null,"Due to Go's strict typing, we TODO EXPLAIN THAT SOME TYPE VALIDATION GOTTA HAPPEN HERE BUT THAT'S IT"),(0,a.kt)("h3",{id:"service-objects"},"Service Objects"),(0,a.kt)("p",null,"The service objects are how we access the database on MilMove. IMPORTANT"),(0,a.kt)("h3",{id:"models"},"Models"),(0,a.kt)("p",null,"Models represent DATABASE TABLES"))}p.isMDXComponent=!0}}]);
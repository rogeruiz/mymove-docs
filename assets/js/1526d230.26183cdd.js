"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2528],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return h}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),h=a,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return t?n.createElement(m,i(i({ref:r},d),{},{components:t})):n.createElement(m,i({ref:r},d))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},17901:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={},l=void 0,p={unversionedId:"dev/contributing/backend/API-Errors",id:"dev/contributing/backend/API-Errors",isDocsHomePage:!1,title:"API-Errors",description:"API Errors",source:"@site/docs/dev/contributing/backend/API-Errors.md",sourceDirName:"dev/contributing/backend",slug:"/dev/contributing/backend/API-Errors",permalink:"/mymove-docs/docs/dev/contributing/backend/API-Errors",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/contributing/backend/API-Errors.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"Backend",permalink:"/mymove-docs/docs/dev/contributing/backend/"},next:{title:"API-Programming-Guide",permalink:"/mymove-docs/docs/dev/contributing/backend/API-Programming-Guide"}},d=[{value:"API Errors",id:"api-errors",children:[{value:"Default Error",id:"default-error",children:[]},{value:"Custom Error",id:"custom-error",children:[]},{value:"HTTP status codes",id:"http-status-codes",children:[]}]},{value:"Handling Errors in the Code",id:"handling-errors-in-the-code",children:[{value:"Error types and Error responses",id:"error-types-and-error-responses",children:[]},{value:"Security Guidelines",id:"security-guidelines",children:[]},{value:"Constructing Errors and Responses",id:"constructing-errors-and-responses",children:[]}]}],c={toc:d};function u(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"api-errors"},"API Errors"),(0,o.kt)("p",null,"Well formatted errors are an important component of education to the user of the API and should be given as much care as the API design. "),(0,o.kt)("p",null,"Just like an HTML error page shows a useful error message to a visitor, an API should provide a ",(0,o.kt)("strong",{parentName:"p"},"useful error message")," in a known consumable format. "),(0,o.kt)("p",null,"The API should always return sensible HTTP status codes.  API errors typically break down into 2 types: ",(0,o.kt)("inlineCode",{parentName:"p"},"4xx")," series status codes for client issues & ",(0,o.kt)("inlineCode",{parentName:"p"},"5xx")," series status codes for server issues. All ",(0,o.kt)("inlineCode",{parentName:"p"},"4xx")," series errors generated by Milmove handlers should provide a consumable JSON error representation. ",(0,o.kt)("inlineCode",{parentName:"p"},"5xx")," errors served by the Milmove code should also abide by this requirement. However some ",(0,o.kt)("inlineCode",{parentName:"p"},"5xx")," errors are generated by the router and upstream mechanisms and those may not abide by this requirement. "),(0,o.kt)("p",null,"The JSON error body should provide a few things for the developer - a useful error ",(0,o.kt)("strong",{parentName:"p"},"title"),", possibly a further detailed ",(0,o.kt)("strong",{parentName:"p"},"description"),", and an ",(0,o.kt)("strong",{parentName:"p"},"instance")," identifier that makes it possible to refer to this particular occurrence of the problem. "),(0,o.kt)("p",null,"The instance identifier enables the Milmove team to ",(0,o.kt)("a",{parentName:"p",href:"How-to-Search-AWS-Cloudwatch-Logs-using-Instance-ID.md"},"look up Cloudwatch logs")," that were written when the problem occurred. "),(0,o.kt)("h3",{id:"default-error"},"Default Error"),(0,o.kt)("p",null,"The default JSON output representation for the error messages looks like: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{   \n   "title": "Conflict Error",\n   "detail": "Estimated weight must be set before this item can be approved.",\n   "instance": "7673868d-231e-490d-9c4f-19288e7e668d"\n}\n')),(0,o.kt)("h3",{id:"custom-error"},"Custom Error"),(0,o.kt)("p",null,"In addition to this default format, specific errors can choose to provide a custom representation that builds on this. A swagger example of how to define these errors is provided in this article on ",(0,o.kt)("a",{parentName:"p",href:"/mymove-docs/docs/dev/contributing/backend/handle-backend-errors#defining-error-models-in-swagger"},"backend errors"),"."),(0,o.kt)("p",null,"Validation errors for PUT, PATCH and POST requests need a field breakdown, and will return an ",(0,o.kt)("inlineCode",{parentName:"p"},"UnprocessableEntity")," response. The top level detail can summarize or generalize the validation failures and provide the detailed errors in an additional ",(0,o.kt)("inlineCode",{parentName:"p"},"invalidFields")," object, like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},' {\n     "title": "Validation Error",\n     "detail": "MoveTaskOrderID can not be blank.",\n     "instance": "1fd81778-4c47-4998-ba03-ea94bc0ac21c",\n     "invalidFields": {\n         "move_task_order_id": [\n             "MoveTaskOrderID can not be blank."\n         ]\n     }\n }\n')),(0,o.kt)("h3",{id:"http-status-codes"},"HTTP status codes"),(0,o.kt)("p",null,"HTTP defines a bunch of ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes"},"meaningful status codes")," that can be returned from an API. Milmove will leverage these to help the API consumers route their responses accordingly. "),(0,o.kt)("p",null,"The types of responses are grouped into the following top level categories which we would generate within Milmove handler and service code:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2xx")," ",(0,o.kt)("strong",{parentName:"li"},"Success")," - This category indicates the action requested by the client was received, understood, and accepted."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"4xx")," ",(0,o.kt)("strong",{parentName:"li"},"Client Error")," - This category indicate that the error seems to have been caused by the client. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"5xx")," ",(0,o.kt)("strong",{parentName:"li"},"Server Error")," - This category indicates the server failed to fulfill a request.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Importance of the Client vs. Server Error Distinction")," - When we have multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"500")," server errors, this results in a PagerDuty alarm that on-call folks have to resolve. It signals that something went wrong on our side ",(0,o.kt)("em",{parentName:"p"},"that shouldn't have"),". Keep this in mind as you select which type of error response your situation calls for.  "),(0,o.kt)("p",null,"Below are the subset of HTTP responses we generate in the Prime API handlers and service code. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"200")," ",(0,o.kt)("strong",{parentName:"li"},"OK")," - Response to a successful GET, PUT, PATCH or DELETE. Can also be used for a POST that doesn't result in a creation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"201")," ",(0,o.kt)("strong",{parentName:"li"},"Created")," - Response to a POST that results in a creation. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"404")," ",(0,o.kt)("strong",{parentName:"li"},"Not Found")," - When a non-existent resource is requested."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"422")," ",(0,o.kt)("strong",{parentName:"li"},"Unprocessable Entity")," - Used for validation errors."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"409")," ",(0,o.kt)("strong",{parentName:"li"},"Conflict")," - When we cannot process the request due to the current state of the server."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"412")," ",(0,o.kt)("strong",{parentName:"li"},"Precondition Failed")," - When the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/blob/master/docs/adr/0042-optimistic-locking.md"},"optimistic locking")," precondition is violated because the provided eTag does not match the record. ")),(0,o.kt)("p",null,"One special note for Bad Request errors, which is not listed above. ",(0,o.kt)("inlineCode",{parentName:"p"},"400")," ",(0,o.kt)("strong",{parentName:"p"},"Bad Request")," implies that the request is malformed, such as if the body does not parse. Since the request is first parsed by swagger, swagger will return a Bad Request error if it is unable to parse. The handler never gets called unless the request was able to be correctly parsed. Therefore, we should never need to return Bad Request."),(0,o.kt)("p",null,"Adapted from ",(0,o.kt)("a",{parentName:"p",href:"https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api#errors"},"Best Practices for a Pragmatic Restful API")),(0,o.kt)("h2",{id:"handling-errors-in-the-code"},"Handling Errors in the Code"),(0,o.kt)("p",null,"In the handler functions and service objects, we create an ",(0,o.kt)("em",{parentName:"p"},"error type")," based on events in the system. These events are handed back up to the top level handler where they are then converted into an appropriate ",(0,o.kt)("em",{parentName:"p"},"error response"),". "),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"error type")," is one that we define, create and pass in the service level code such as ",(0,o.kt)("inlineCode",{parentName:"p"},"InvalidInputError"),". It has no dependence on swagger generated code or a specific endpoint."),(0,o.kt)("p",null,"An ",(0,o.kt)("strong",{parentName:"p"},"error response")," is a swagger generated type that we use to send errors back to the user, with a payload we construct. It is specific to the endpoint."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mtoshipmentops.NewCreateMTOShipmentNotFound().WithPayload(payload)\n")),(0,o.kt)("h3",{id:"error-types-and-error-responses"},"Error types and Error responses"),(0,o.kt)("p",null,"Error types in the code are defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"pkg/services/errors.go"),"."),(0,o.kt)("p",null,"Error responses are defined in the yamls, ",(0,o.kt)("inlineCode",{parentName:"p"},"swagger/prime.yaml")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"swagger/support.yaml")),(0,o.kt)("p",null,"Here are the main error types and the responses we send in that case:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"NotFoundError")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"p"},"404")," ",(0,o.kt)("strong",{parentName:"p"},"Not Found")),(0,o.kt)("p",{parentName:"li"},"  This error is generated when we can't find a resource or record. It is returned to the user as ",(0,o.kt)("inlineCode",{parentName:"p"},"404")," ",(0,o.kt)("strong",{parentName:"p"},"Not Found")," with a message indicating the type of object and preferably the ID of the missing record, if known.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"InvalidInputError")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"p"},"422")," ",(0,o.kt)("strong",{parentName:"p"},"Unprocessable Entity")),(0,o.kt)("p",{parentName:"li"},"  This error is generated when there are validation errors in the input. Swagger may also return this error as it performs pre-parsing of the request before calling the handler."),(0,o.kt)("p",{parentName:"li"},"  When we generate this error, we should populate the ",(0,o.kt)("inlineCode",{parentName:"p"},"ValidationErrors")," field in the struct with the error field and detail so that it can be return in the ",(0,o.kt)("inlineCode",{parentName:"p"},"invalidFields")," of the JSON response. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"ConflictError")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"p"},"409")," ",(0,o.kt)("strong",{parentName:"p"},"Conflict")),(0,o.kt)("p",{parentName:"li"},"  This error is generated when we cannot process the request due to the current state of the server. For e.g. if the PrimeEstimatedWeight is not set on a shipment, we cannot create certain service items on that shipment. If we get a request to create such a service item, we have a conflict error.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"PreconditionFailedError")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"p"},"412")," ",(0,o.kt)("strong",{parentName:"p"},"Precondition Failed")),(0,o.kt)("p",{parentName:"li"}," This error is generated on a PUT or PATCH when the eTag does not match the record. It is returned to the user with a message indicating that the eTag is a mismatch.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"QueryError")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"p"},"500")," ",(0,o.kt)("strong",{parentName:"p"},"Internal Server Error")),(0,o.kt)("p",{parentName:"li"}," If there is nothing wrong with the request the client sent us, and we ",(0,o.kt)("em",{parentName:"p"},"still")," get an error in the query to the DB, we may then generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryError"),". At the top level, we  send a ",(0,o.kt)("inlineCode",{parentName:"p"},"500")," ",(0,o.kt)("strong",{parentName:"p"},"Internal Server Error"),"."),(0,o.kt)("p",{parentName:"li"}," The error generated at the query level may contain more detail than we want to expose to the user of the API such as database table and column names. It's a good idea to log these errors but we don't want to return them to the user."))),(0,o.kt)("p",null,"Note: There might be new errors that we generate as the code evolves, but it's a good idea to understand these definitions and see if your error fits one of them before defining a new one. This improves consistency and makes the errors easier to understand and process by the user. If you do define a new error, please update this guide."),(0,o.kt)("h3",{id:"security-guidelines"},"Security Guidelines"),(0,o.kt)("p",null,"In the next section we will cover converting the errors into responses. For each of the error responses, do not provide any information in the error message to help ",(0,o.kt)("em",{parentName:"p"},"debug")," the issue. The target audience for the error responses is ",(0,o.kt)("strong",{parentName:"p"},"the client, not the developer"),". So we can let them know what they did wrong, but not reveal information about our own systems."),(0,o.kt)("p",null,"Secure logging of errors into Cloudwatch is what we use for developer information. This is accomplished in using ",(0,o.kt)("inlineCode",{parentName:"p"},"logger.Error()")," function calls."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Internal Server Error:")," Always use an Internal Server Error response if something broke on our side. You can set the message to ",(0,o.kt)("inlineCode",{parentName:"p"},"nil")," and it will have a boilerplate message. The client does not need to know anything further if an Internal Server Error occurred. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Trace ID:")," Make sure each error has a trace ID. We use the trace ID to identify the set of events that resulted in an error message. The client can report the trace ID to us, and a developer can then debug the issue that occurred using the trace id. The trace ID is meaningless to them."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"DB data:")," Sometimes an error is triggered in the DB. The message often starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"pq"),". Do not pass on this error string in the response. You may log it securely into Cloudwatch but there is no reason to pass on the contents of a DB error to the client."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Filepaths:")," Equally there is no reason to reveal a file path to the client. Never provide this information in the error message."),(0,o.kt)("h3",{id:"constructing-errors-and-responses"},"Constructing Errors and Responses"),(0,o.kt)("p",null,"To create an instance of an error type, you'll call the ",(0,o.kt)("inlineCode",{parentName:"p"},"New")," function for that error, and pass in parameters pertaining to that error."),(0,o.kt)("p",null,"For a validation error, details of the validation issue should be in verrs, but there is an additional message field as well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'invalidInputError := services.NewInvalidInputError(\n    shipment.ID, nil, verrs, \n    "DestinationID was not valid"\n    )\n')),(0,o.kt)("p",null,"At the topmost handler function, usually called ",(0,o.kt)("inlineCode",{parentName:"p"},"Handle"),", you'll check the type of the error and construct the appropriate response. "),(0,o.kt)("p",null,"Note that the message in the call to ",(0,o.kt)("inlineCode",{parentName:"p"},"payloads.InternalServerError")," is often ",(0,o.kt)("inlineCode",{parentName:"p"},"nil"),". This is because we have a default message and title that will be populated. "),(0,o.kt)("p",null,"You can override the default message in the call if you have a more useful message, but if not, the default message is sufficient. "),(0,o.kt)("p",null,"Here is some example code of how we take the error type and create the appropriate response, according to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/wiki/API-Errors/#error-types-and-error-responses"},"mapping described above"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'if err != nil {\n    logger.Error("primeapi.CreateMTOShipmentHandler", zap.Error(err))\n\n    switch e := err.(type) {\n\n    // NotFoundError -> Not Found response\n    case services.NotFoundError:\n        return mtoshipmentops.NewCreateMTOShipmentNotFound().\n            WithPayload(payloads.ClientError(handlers.NotFoundMessage, err.Error(), h.GetTraceID()))\n\n    // InvalidInputError -> Unprocessable Entity reponse\n    case services.InvalidInputError:\n        return mtoshipmentops.NewCreateMTOShipmentUnprocessableEntity().\n            WithPayload(payloads.ValidationError(handlers.ValidationErrMessage, h.GetTraceID(), e.ValidationErrors))\n\n    // QueryError -> Internal Server error\n    case services.QueryError:\n        if e.Unwrap() != nil {\n            // If you can unwrap, log the internal error (usually a pq error) for better debugging\n            // Note we do not expose this detail in the payload\n            logger.Error("primeapi.CreateMTOServiceItemHandler error", zap.Error(e.Unwrap()))\n        }\n        return mtoshipmentops.NewCreateMTOShipmentInternalServerError().\n                            WithPayload(payloads.InternalServerError(nil, h.GetTraceID()))\n    // Unknown -> Internal Server Error\n    default:\n        return mtoshipmentops.NewCreateMTOShipmentInternalServerError().\n            WithPayload(payloads.InternalServerError(nil, h.GetTraceID()))\n    }\n}\n')))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2549],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=i(a),m=n,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return a?r.createElement(g,s(s({ref:t},d),{},{components:a})):r.createElement(g,s({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},42723:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const o={},s=void 0,l={unversionedId:"backend/testing/testing-handlers",id:"backend/testing/testing-handlers",title:"testing-handlers",description:"Test Setup",source:"@site/docs/backend/testing/testing-handlers.md",sourceDirName:"backend/testing",slug:"/backend/testing/testing-handlers",permalink:"/mymove-docs/docs/backend/testing/testing-handlers",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/testing/testing-handlers.md",tags:[],version:"current",frontMatter:{},sidebar:"backendSidebar",previous:{title:"Manually run Prime API for Slice demo",permalink:"/mymove-docs/docs/backend/testing/manually-run-prime-api-for-slice-demo"},next:{title:"Backend Service Objects Development Guide",permalink:"/mymove-docs/docs/backend/guides/service-objects"}},p={},i=[{value:"Test Setup",id:"test-setup",level:2},{value:"Inspecting the response",id:"inspecting-the-response",level:2}],d={toc:i};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"test-setup"},"Test Setup"),(0,n.kt)("p",null,"Most handler tests require the same boilerplate code and setup steps."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create the necessary models in the DB. For example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-golang"},"move := testdatagen.MakeDefaultMove(suite.DB())\norder := move.Orders\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Set up the Body of the HTTP request if creating or updating a model:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-golang"},'body := &ghcmessages.UpdateOrderPayload{\n    Sac: handlers.FmtString("987654321"),\n}\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Define the request:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-golang"},'request := httptest.NewRequest("PATCH", "/orders/{orderID}", nil)\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Set up the params:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-golang"},"params := orderop.UpdateOrderParams{\n    HTTPRequest: request,\n    OrderID:     strfmt.UUID(order.ID.String()),\n    IfMatch:     etag.GenerateEtag(order.UpdatedAt),\n    Body:        body,\n}\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Set up the context:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-golang"},"context := handlers.NewHandlerConfig(suite.DB(), suite.TestLogger())\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Set up the handler:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-golang"},"handler := UpdateOrderHandler{\n    context,\n    orderservice.NewOrderUpdater(suite.DB()),\n}\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Validate the Body. This runs the Swagger validation against the generated params before passing to the handler, which is what happens when the real endpoint is hit."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-golang"},"suite.NoError(params.Body.Validate(strfmt.Default))\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Finally make the request:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-golang"},"response := handler.Handle(params)\n")))),(0,n.kt)("p",null,"To test the response, make sure to test all the fields that you expect to be present. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-golang"},"response := handler.Handle(params)\nsuite.IsNotErrResponse(response)\norderOK := response.(*orderop.GetOrderOK)\nordersPayload := orderOK.Payload\n\nsuite.Assertions.IsType(&orderop.GetOrderOK{}, response)\nsuite.Equal(order.ID.String(), ordersPayload.ID.String())\nsuite.Equal(move.Locator, ordersPayload.MoveCode)\nsuite.NotNil(order.NewDutyStation)\nsuite.NotZero(order.OriginDutyStation)\nsuite.NotZero(ordersPayload.DateIssued)\n")),(0,n.kt)("p",null,"Note that the expected order of arguments to ",(0,n.kt)("inlineCode",{parentName:"p"},"suite.Equal")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"(expected, actual)"),". The payload attributes should always be on the right. This makes it easier to troubleshoot.\nWhenever a value is known, we want to prefer checking explicitly for the value using ",(0,n.kt)("inlineCode",{parentName:"p"},"suite.Equal"),"\nor ",(0,n.kt)("inlineCode",{parentName:"p"},"suite.EqualValues"),".\nRead the ",(0,n.kt)("a",{parentName:"p",href:"/mymove-docs/docs/backend/testing/testing-best-practices"},"Testing Best Practices")," for more guidance."),(0,n.kt)("h2",{id:"inspecting-the-response"},"Inspecting the response"),(0,n.kt)("p",null,"Because we use Swagger to generate API code, each handler has its own response ",(0,n.kt)("inlineCode",{parentName:"p"},"type"),"\nfor each defined HTTP status. For example, when the status is 200, the ",(0,n.kt)("inlineCode",{parentName:"p"},"UpdateOrder"),"\nhandler has a response ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," of ",(0,n.kt)("inlineCode",{parentName:"p"},"orderop.UpdateOrderOK{}"),".\nTo get the payload of the response, you have to do something like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-golang"},"payload := response.(*orderop.UpdateOrderOK).Payload\n")),(0,n.kt)("p",null,"Then you can fetch the various attributes, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"payload.MoveCode"),"."),(0,n.kt)("p",null,"If you're used to web frameworks like Rails, you might prefer to inspect the payload as\nJSON for debugging. Here's how to parse the response as JSON:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-golang"},'payload := response.(*orderop.UpdateOrderOK).Payload\njsonPayload, errJSONMarshall := json.Marshal(payload)\nif errJSONMarshall != nil {\n  fmt.Println("failed to parse payload as JSON")\n}\nfmt.Println(string(jsonPayload))\n')))}u.isMDXComponent=!0}}]);
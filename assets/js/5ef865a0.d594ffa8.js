"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[7734],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return n?r.createElement(k,o(o({ref:t},m),{},{components:n})):r.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6731:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={},s=void 0,p={unversionedId:"old-wiki/End-to-End-Testing:-Playing-the-Prime",id:"old-wiki/End-to-End-Testing:-Playing-the-Prime",isDocsHomePage:!1,title:"End-to-End-Testing:-Playing-the-Prime",description:"This page includes instructions on how to complete basic functions as the Prime when testing the application e2e (e.g. MilMob) with other user roles (Services Counselor, TOO, TIO).",source:"@site/docs/old-wiki/End-to-End-Testing:-Playing-the-Prime.md",sourceDirName:"old-wiki",slug:"/old-wiki/End-to-End-Testing:-Playing-the-Prime",permalink:"/docs/old-wiki/End-to-End-Testing:-Playing-the-Prime",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/old-wiki/End-to-End-Testing:-Playing-the-Prime.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dockerfile-use,-purpose,-and-documentation",permalink:"/docs/old-wiki/Dockerfile-use,-purpose,-and-documentation"},next:{title:"Feature-Flags-in-the-App",permalink:"/docs/old-wiki/Feature-Flags-in-the-App"}},m=[{value:"Setup",id:"setup",children:[]},{value:"E2E Testing Sequence for 1 HHG Move",id:"e2e-testing-sequence-for-1-hhg-move",children:[]},{value:"Prime: Part I",id:"prime-part-i",children:[]},{value:"Prime: Part II",id:"prime-part-ii",children:[]}],u={toc:m};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page includes instructions on how to complete basic functions as the Prime when testing the application e2e (e.g. MilMob) with other user roles (Services Counselor, TOO, TIO)."),(0,a.kt)("h3",{id:"setup"},"Setup"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/transcom/transcom-infrasec-com/blob/master/docs/mtls-certs.md"},"Install mTLS integrations certificate")," on your local machine")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/wiki/setup-postman-to-make-mutual-tls-api-calls"},"Configure Postman for mTLS API calls")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use your mTLS integrations certificate in place of the dev certs"),(0,a.kt)("li",{parentName:"ul"},"Add an entry for each environment, STG and EXP")))),(0,a.kt)("img",{src:"https://github.com/transcom/mymove/wiki/images/postman/postman-exp-stg-mtls.png",width:"600",alt:"sample certificate setup in postman for exp and stg"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Import Prime E2E Testing collection into Postman"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/wiki/files/postman/Prime%20E2E%20Testing.postman_collection.json"},"Postman Collection here")),(0,a.kt)("li",{parentName:"ul"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/wiki/files/postman/Prime%20EXP.postman_environment.json"},"Postman EXP environment config here")),(0,a.kt)("li",{parentName:"ul"},"In Postman, go to File > Import > Select your downloaded files"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Hit an endpoint to test your setup"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Select "Prime EXP" as your environment'),(0,a.kt)("li",{parentName:"ul"},"Open the new Prime Testing collection"),(0,a.kt)("li",{parentName:"ul"},"Send the ",(0,a.kt)("inlineCode",{parentName:"li"},"fetchMTOUpdates")," request."),(0,a.kt)("li",{parentName:"ul"},"If you don't get a 200, check out the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/wiki/setup-postman-to-make-mutual-tls-api-calls#troubleshooting-postman"},"Postman troubleshooting doc"),".")))),(0,a.kt)("h3",{id:"e2e-testing-sequence-for-1-hhg-move"},"E2E Testing Sequence for 1 HHG Move"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Customer creates move"),(0,a.kt)("li",{parentName:"ul"},"Services Counselor reviews"),(0,a.kt)("li",{parentName:"ul"},"TOO approves shipment"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Prime Part I - Update shipment, add service items")),(0,a.kt)("li",{parentName:"ul"},"TOO approves service items"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Prime Part II - Request payment, upload proof of service docs")),(0,a.kt)("li",{parentName:"ul"},"TIO handles invoicing")),(0,a.kt)("p",null,"This page covers the bolded sections for Prime."),(0,a.kt)("h3",{id:"prime-part-i"},"Prime: Part I"),(0,a.kt)("p",null,"A move must go through all previous steps before these actions can be taken, ending with TOO approval."),(0,a.kt)("p",null,"Each request in the collection should be ran in sequence. You can edit the body as you see fit. There is code in the Tests section of some of the requests that will set variables to reuse, e.g. eTag, mtoShipmentID, etc."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send request ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchMTOUpdates")," and search for your move code. Once you find it, copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"moveTaskOrderID"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Edit the collection > Variables > Paste in your value for ",(0,a.kt)("inlineCode",{parentName:"p"},"moveTaskOrderID"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send request ",(0,a.kt)("inlineCode",{parentName:"p"},"getMoveTaskOrder")," "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This will grab the mtoShipmentID and eTag and store them"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Check response for ",(0,a.kt)("inlineCode",{parentName:"p"},"destinationAddress"),". If none is present, include one in the next request.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send request ",(0,a.kt)("inlineCode",{parentName:"p"},"updateMTOShipment")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Include ",(0,a.kt)("inlineCode",{parentName:"li"},"primeEstimatedWeight"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"primeActualWeight"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"scheduledPickupDate"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"actualPickupDate")),(0,a.kt)("li",{parentName:"ul"},"If no ",(0,a.kt)("inlineCode",{parentName:"li"},"deliveryAddress")," is present on the shipment, include an address in the following format:")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'   "destinationAddress": {\n        "streetAddress1": "148 S East St",\n        "city": "Princeton",\n        "state": "NC",\n        "postalCode": "27569",\n        "country": "US"\n    }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send requests for ",(0,a.kt)("inlineCode",{parentName:"p"},"createMTOServiceItem"),", once for each type/request listed in the collection.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Wait for TOO approval"))),(0,a.kt)("h3",{id:"prime-part-ii"},"Prime: Part II"),(0,a.kt)("p",null,"Once the service items have been approved, you can create a payment request. The current setup includes two separate payment requests: One with DOSHUT service item, and one with DOFSIT service items."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send request ",(0,a.kt)("inlineCode",{parentName:"p"},"createPaymentRequest1")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This includes the ",(0,a.kt)("inlineCode",{parentName:"li"},"DOSHUT")," service item and should succeed"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send request ",(0,a.kt)("inlineCode",{parentName:"p"},"createUpload")," to include proof of service docs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send request ",(0,a.kt)("inlineCode",{parentName:"p"},"createPaymentRequest2")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This includes the remaining service items created"),(0,a.kt)("li",{parentName:"ul"},"This may fail and send back errors. Record these for further investigation."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If payment request succeeds, send request ",(0,a.kt)("inlineCode",{parentName:"p"},"createUpload")," to include proof of service docs."))))}c.isMDXComponent=!0}}]);
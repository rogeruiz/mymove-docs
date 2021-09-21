"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[6826],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,N=c["".concat(l,".").concat(m)]||c[m]||u[m]||s;return t?a.createElement(N,o(o({ref:n},d),{},{components:t})):a.createElement(N,o({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85066:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=t(87462),r=t(63366),s=(t(67294),t(3905)),o=["components"],i={},l=void 0,p={unversionedId:"dev/testing/running-tests/Acceptance-Testing-Syncada-EDI-Invoicing",id:"dev/testing/running-tests/Acceptance-Testing-Syncada-EDI-Invoicing",isDocsHomePage:!1,title:"Acceptance-Testing-Syncada-EDI-Invoicing",description:"TOC",source:"@site/docs/dev/testing/running-tests/Acceptance-Testing-Syncada-EDI-Invoicing.md",sourceDirName:"dev/testing/running-tests",slug:"/dev/testing/running-tests/Acceptance-Testing-Syncada-EDI-Invoicing",permalink:"/mymove-docs/docs/dev/testing/running-tests/Acceptance-Testing-Syncada-EDI-Invoicing",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/testing/running-tests/Acceptance-Testing-Syncada-EDI-Invoicing.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"Table of Contents",permalink:"/mymove-docs/docs/dev/testing/running-tests/Acceptance-Testing-Prime-API-Endpoints"},next:{title:"End-to-End-Testing-Playing-the-Prime",permalink:"/mymove-docs/docs/dev/testing/running-tests/End-to-End-Testing-Playing-the-Prime"}},d=[{value:"TOC",id:"toc",children:[]},{value:"Prerequisites",id:"prerequisites",children:[{value:"Move",id:"move",children:[]},{value:"Orders",id:"orders",children:[]},{value:"Shipment",id:"shipment",children:[]},{value:"Payment Request",id:"payment-request",children:[]}]},{value:"Invoicing Operations",id:"invoicing-operations",children:[{value:"Generate EDI locally",id:"generate-edi-locally",children:[]},{value:"Generate EDI via support API",id:"generate-edi-via-support-api",children:[]},{value:"Update status of Payment Request",id:"update-status-of-payment-request",children:[]},{value:"Generate and send EDI to Syncada",id:"generate-and-send-edi-to-syncada",children:[]}]},{value:"References",id:"references",children:[]}],u={toc:d};function c(e){var n=e.components,t=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"toc"},"TOC"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#move"},"Move")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#orders"},"Orders")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#shipment"},"Shipment")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#payment-request"},"Payment Request")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#invoicing-operations"},"Invoicing Operations"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#generate-edi-locally"},"Generate EDI locally")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#generate-edi-via-support-api"},"Generate EDI via support API")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#update-status-of-payment-request"},"Update status of Payment Request"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#json-to-update-status-of-all-reviewed-paymentrequests-to-sent_to_gex"},"JSON to update status of all reviewed paymentrequests to SENT_TO_GEX")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#json-to-update-status-of-all-reviewed-paymentrequests-to-another-one"},"JSON to update status of all reviewed paymentrequests to another one")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#json-to-update-status-of-one-reviewed-paymentrequest-to-sent_to_gex"},"JSON to update status of one reviewed paymentrequest to SENT_TO_GEX")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#json-to-update-status-of-one-reviewed-paymentrequest-to-something-else"},"JSON to update status of one reviewed paymentrequest to something else")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#generate-and-send-edi-to-syncada"},"Generate and send EDI to Syncada")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#references"},"References"))),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"NOTE"))," ",(0,s.kt)("em",{parentName:"p"},"The following examples use a Move from the devseed data if needed for local use.")),(0,s.kt)("p",null,"This section will describe the prerequisites for invoicing, that are beyond the scope of documenting here. See the ",(0,s.kt)("a",{parentName:"p",href:"#references"},"References")," section for links that may help in setting these up."),(0,s.kt)("h3",{id:"move"},"Move"),(0,s.kt)("p",null,"A move with at least one shipment approved. Also helpful to have Management or Counsiling fees approved."),(0,s.kt)("h3",{id:"orders"},"Orders"),(0,s.kt)("p",null,"The orders associated with the move must have all the required fields, particularly ",(0,s.kt)("inlineCode",{parentName:"p"},"Department indicator"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"TAC"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"SAC")," as all 3 are required for EDI Generation. "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"NOTE:"))," ",(0,s.kt)("em",{parentName:"p"},"TAC and SAC are large, 255 varchar and text in the database respectively; however, the EDI can only handle a max of 80 characters for those two fields.")),(0,s.kt)("h3",{id:"shipment"},"Shipment"),(0,s.kt)("p",null,"A shipment that is approved, with service items that can be priced."),(0,s.kt)("h3",{id:"payment-request"},"Payment Request"),(0,s.kt)("p",null,"A payment request is created for price-able service items. That payment request then needs to be reviewed via the TIO interface and contain at least 1 approved payment service item."),(0,s.kt)("p",null,"save the following to ",(0,s.kt)("inlineCode",{parentName:"p"},"payload.json")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": {\n    "isFinal": false,\n    "moveTaskOrderID": "9c7b255c-2981-4bf8-839f-61c7458e2b4d",\n    "serviceItems": [\n      {\n        "id": "ca9aeb58-e5a9-44b0-abe8-81d233dbdebf"\n      },\n      {\n        "id": "eee4b555-2475-4e67-a5b8-102f28d950f8"\n      },\n      {\n        "id": "6431e3e2-4ee4-41b5-b226-393f9133eb6c"\n      },\n      {\n        "id": "fd6741a5-a92c-44d5-8303-1d7f5e60afbf"\n      }\n    ]\n  }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'\u276f prime-api-client --insecure create-payment-request --filename payload.json | jq \'.id,.paymentRequestNumber\'\n"ce261508-1bd3-4876-b5ca-fb761de43d4d"\n"5405-6058-1"\n')),(0,s.kt)("h2",{id:"invoicing-operations"},"Invoicing Operations"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"NOTE"))," ",(0,s.kt)("em",{parentName:"p"},"The following examples use a Move from the devseed data if needed for local use.")),(0,s.kt)("h3",{id:"generate-edi-locally"},"Generate EDI locally"),(0,s.kt)("p",null,"You will need the payment request number that you can find in the fetch-mto-updates call"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f bin/generate-payment-request-edi --payment-request-number 5405-6058-1\n\nISA*00*0084182369*00*0000000000*ZZ*MILMOVE        *12*8004171844     *210116*0827*U*00401*533069921*0*T*|\nGS*SI*MILMOVE*8004171844*20210116*0827*100001251*X*004010\nST*858*0001\nBX*00*J*PP*5405-6058*TRUS**4\nN9*CN*5405-6058-1**\nN9*CT*TRUSS_TEST**\nN9*1W*Leo, Spacemen**\nN9*ML*E_1**\nN9*3L*ARMY**\nG62*10*20210115**\nG62*76*20210114**\nG62*86*20200316**\nN1*BY*JPPSO Testy McTest*92*LKNQ\nN1*SE*Prime*2*PRME\nN1*ST*Fort Gordon*10*CNNQ\nN3*Fort Gordon*\nN4*Augusta*GA*30813*USA**\nPER*CN**TE*706-791-4184\nN1*SF*umRSlGJ7mP*10*LKNQ\nN3*987 Other Avenue*P.O. Box 1234\nN4*Des Moines*IA*50309*USA**\nPER*CN**TE*(510) 555-5555\nHL*1**I\nN9*PO*5405-6058-a492e26c**\nL5*1*FSC*TBD*D**\nL0*1*354.000*DM*1349.000*B******L\nL1*1*1349*LB*34400\nFA1*DY\nFA2*TA*F8E1\nHL*2**I\nN9*PO*5405-6058-740cb8c2**\nL5*2*CS*TBD*D**\nL0*2**********\nL1*2*0**2235300\nFA1*DY\nFA2*TA*F8E1\nHL*3**I\nN9*PO*5405-6058-1044cdb9**\nL5*3*DSH*TBD*D**\nL0*3*388.000*DM*1349.000*B******L\nL1*3*1349*LB*47543300\nFA1*DY\nFA2*TA*F8E1\nHL*4**I\nN9*PO*5405-6058-6233632d**\nL5*4*DLH*TBD*D**\nL0*4*354.000*DM*1349.000*B******L\nL1*4*1349*LB*115948500\nFA1*DY\nFA2*TA*F8E1\nL3*****1657615\nSE*50*0001\nGE*1*100001251\nIEA*1*533069921\n")),(0,s.kt)("h3",{id:"generate-edi-via-support-api"},"Generate EDI via support API"),(0,s.kt)("p",null,"Save the following to ",(0,s.kt)("inlineCode",{parentName:"p"},"payload.json")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "paymentRequestID": "ce261508-1bd3-4876-b5ca-fb761de43d4d"\n}\n')),(0,s.kt)("p",null,"Use the support api endpoint to generate the edi"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f bin/prime-api-client --insecure support-get-payment-request-edi --filename payload.json | jq -r .edi\n\nISA*00*0084182369*00*0000000000*ZZ*MILMOVE        *12*8004171844     *210116*0834*U*00401*000000002*0*T*|\nGS*SI*MILMOVE*8004171844*20210116*0834*100001251*X*004010\nST*858*0001\nBX*00*J*PP*5405-6058*TRUS**4\nN9*CN*5405-6058-1**\nN9*CT*TRUSS_TEST**\nN9*1W*Leo, Spacemen**\nN9*ML*E_1**\nN9*3L*ARMY**\nG62*10*20210115**\nG62*76*20210114**\nG62*86*20200316**\nN1*BY*JPPSO Testy McTest*92*LKNQ\nN1*SE*Prime*2*PRME\nN1*ST*Fort Gordon*10*CNNQ\nN3*Fort Gordon*\nN4*Augusta*GA*30813*USA**\nPER*CN**TE*706-791-4184\nN1*SF*umRSlGJ7mP*10*LKNQ\nN3*987 Other Avenue*P.O. Box 1234\nN4*Des Moines*IA*50309*USA**\nPER*CN**TE*(510) 555-5555\nHL*1**I\nN9*PO*5405-6058-a492e26c**\nL5*1*FSC*TBD*D**\nL0*1*354.000*DM*1349.000*B******L\nL1*1*1349*LB*34400\nFA1*DY\nFA2*TA*F8E1\nHL*2**I\nN9*PO*5405-6058-740cb8c2**\nL5*2*CS*TBD*D**\nL0*2**********\nL1*2*0**2235300\nFA1*DY\nFA2*TA*F8E1\nHL*3**I\nN9*PO*5405-6058-1044cdb9**\nL5*3*DSH*TBD*D**\nL0*3*388.000*DM*1349.000*B******L\nL1*3*1349*LB*47543300\nFA1*DY\nFA2*TA*F8E1\nHL*4**I\nN9*PO*5405-6058-6233632d**\nL5*4*DLH*TBD*D**\nL0*4*354.000*DM*1349.000*B******L\nL1*4*1349*LB*115948500\nFA1*DY\nFA2*TA*F8E1\nL3*****1657615\nSE*50*0001\nGE*1*100001251\nIEA*1*000000002\n")),(0,s.kt)("h3",{id:"update-status-of-payment-request"},"Update status of Payment Request"),(0,s.kt)("p",null,"To update the status of one payment request you can trigger the reviewed payment request processor."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"NOTE:"))," ",(0,s.kt)("em",{parentName:"p"},"The payment request processor will only apply changes to payment requests in the Reviewed status")),(0,s.kt)("p",null,"Save one of the below json snippets to ",(0,s.kt)("inlineCode",{parentName:"p"},"payload.json")," and run the following command to change the status"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f prime-api-client --insecure support-reviewed-payment-requests --filename tmp/payloads/process_payment.json|jq .\n")),(0,s.kt)("p",null,"Example Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "eTag": "MjAyMS0wMS0xNlQwODo0Nzo1Ni41NDczMjRa",\n    "id": "cfd110d4-1f62-401c-a92c-39987a0b4228",\n    "isFinal": false,\n    "moveTaskOrderID": "7cbe57ba-fd3a-45a7-aa9a-1970f1908ae7",\n    "paymentRequestNumber": "2387-4783-1",\n    "status": "SENT_TO_GEX"\n  },\n  {\n    "eTag": "MjAyMS0wMS0xNlQwODo0Nzo1Ni41NTI4Nlo=",\n    "id": "cfd110d4-1f62-401c-a92c-39987a0b4229",\n    "isFinal": false,\n    "moveTaskOrderID": "7cbe57ba-fd3a-45a7-aa9a-1970f1908ae8",\n    "paymentRequestNumber": "9644-7573-1",\n    "status": "SENT_TO_GEX"\n  },\n  {\n    "eTag": "MjAyMS0wMS0xNlQwODo0Nzo1Ni41NTU5NjZa",\n    "id": "ce261508-1bd3-4876-b5ca-fb761de43d4d",\n    "sFinal": false,\n    "moveTaskOrderID": "9c7b255c-2981-4bf8-839f-61c7458e2b4d",\n    "paymentRequestNumber": "5405-6058-1",\n    "status": "SENT_TO_GEX"\n  }\n]\n')),(0,s.kt)("p",null,"Below are 3 examples of the status update JSON"),(0,s.kt)("h4",{id:"json-to-update-status-of-all-reviewed-paymentrequests-to-sent_to_gex"},"JSON to update status of all reviewed paymentrequests to SENT_TO_GEX"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": {\n    "sendToSyncada": false\n  }\n}\n')),(0,s.kt)("h4",{id:"json-to-update-status-of-all-reviewed-paymentrequests-to-another-one"},"JSON to update status of all reviewed paymentrequests to another one"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": {\n    "status": "PAID",\n    "sendToSyncada": false\n  }\n}\n')),(0,s.kt)("h4",{id:"json-to-update-status-of-one-reviewed-paymentrequest-to-sent_to_gex"},"JSON to update status of one reviewed paymentrequest to SENT_TO_GEX"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": {\n    "paymentRequestID": "ce261508-1bd3-4876-b5ca-fb761de43d4d",\n    "sendToSyncada": false\n  }\n}\n')),(0,s.kt)("h4",{id:"json-to-update-status-of-one-reviewed-paymentrequest-to-something-else"},"JSON to update status of one reviewed paymentrequest to something else"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": {\n    "paymentRequestID": "ce261508-1bd3-4876-b5ca-fb761de43d4d",\n    "status": "PAID",\n    "sendToSyncada": false\n  }\n}\n')),(0,s.kt)("h3",{id:"generate-and-send-edi-to-syncada"},"Generate and send EDI to Syncada"),(0,s.kt)("p",null,"To send to syncada you will need to make use of the reviewed payment request processor"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"NOTE:"))," ",(0,s.kt)("em",{parentName:"p"},"The payment request processor will only apply changes to payment requests in the Reviewed status")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"NOTE:"))," ",(0,s.kt)("em",{parentName:"p"},"This can be run locally if you have the SYNCADA credentials from chamber")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"NOTE:"))," ",(0,s.kt)("em",{parentName:"p"},"The paymentRequestID parameter is ignored if sendToSyncada is set to true")),(0,s.kt)("p",null,"Save the following json to ",(0,s.kt)("inlineCode",{parentName:"p"},"payload.json")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": {\n    "sendToSyncada": true\n  }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f prime-api-client --insecure support-reviewed-payment-requests --filename payload.json | jq .\n")),(0,s.kt)("p",null,"Example Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "eTag": "MjAyMS0wMS0xNlQwODo0Nzo1Ni41NDczMjRa",\n    "id": "cfd110d4-1f62-401c-a92c-39987a0b4228",\n    "isFinal": false,\n    "moveTaskOrderID": "7cbe57ba-fd3a-45a7-aa9a-1970f1908ae7",\n    "paymentRequestNumber": "2387-4783-1",\n    "status": "SENT_TO_GEX"\n  },\n  {\n    "eTag": "MjAyMS0wMS0xNlQwODo0Nzo1Ni41NTI4Nlo=",\n    "id": "cfd110d4-1f62-401c-a92c-39987a0b4229",\n    "isFinal": false,\n    "moveTaskOrderID": "7cbe57ba-fd3a-45a7-aa9a-1970f1908ae8",\n    "paymentRequestNumber": "9644-7573-1",\n    "status": "SENT_TO_GEX"\n  },\n  {\n    "eTag": "MjAyMS0wMS0xNlQwODo0Nzo1Ni41NTU5NjZa",\n    "id": "ce261508-1bd3-4876-b5ca-fb761de43d4d",\n    "sFinal": false,\n    "moveTaskOrderID": "9c7b255c-2981-4bf8-839f-61c7458e2b4d",\n    "paymentRequestNumber": "5405-6058-1",\n    "status": "SENT_TO_GEX"\n  }\n]\n')),(0,s.kt)("h2",{id:"references"},"References"),(0,s.kt)("p",null,"Some helpful resources for getting this setup"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/mymove-docs/docs/dev/testing/running-tests/Acceptance-Testing-Payment-Requests"},"Acceptance Testing Payment Requests")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/mymove-docs/docs/dev/testing/running-tests/Manually-run-Prime-API-for-Slice-demo"},"Manually run Prime API for Slice demo"))))}c.isMDXComponent=!0}}]);
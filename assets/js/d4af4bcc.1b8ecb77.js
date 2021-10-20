"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[282],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,g=d["".concat(c,".").concat(u)]||d[u]||p[u]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73303:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={title:"GHC Rate Engine & Invoicing",sidebar_position:1},c="GHC Rate Engine & Invoicing",s={unversionedId:"dev/contributing/backend/ghc-invoicing/ghc-invoicing",id:"dev/contributing/backend/ghc-invoicing/ghc-invoicing",isDocsHomePage:!1,title:"GHC Rate Engine & Invoicing",description:"The MilMove Rate Engine and Invoicing components are responsible for processing requests from the",source:"@site/docs/dev/contributing/backend/ghc-invoicing/ghc-invoicing.md",sourceDirName:"dev/contributing/backend/ghc-invoicing",slug:"/dev/contributing/backend/ghc-invoicing/ghc-invoicing",permalink:"/mymove-docs/docs/dev/contributing/backend/ghc-invoicing/ghc-invoicing",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/contributing/backend/ghc-invoicing/ghc-invoicing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"GHC Rate Engine & Invoicing",sidebar_position:1},sidebar:"devSidebar",previous:{title:"How to Access a Global Application Variable",permalink:"/mymove-docs/docs/dev/contributing/backend/access-global-variables"},next:{title:"GHC Invoicing Packages",permalink:"/mymove-docs/docs/dev/contributing/backend/ghc-invoicing/ghc-invoicing-packages"}},m=[{value:"GHC Invoicing Diagram",id:"ghc-invoicing-diagram",children:[]},{value:"GHC Invoicing Flow",id:"ghc-invoicing-flow",children:[]},{value:"GHC Invoicing Mini Design Docs",id:"ghc-invoicing-mini-design-docs",children:[]},{value:"Miro boards",id:"miro-boards",children:[]},{value:"TXO UI",id:"txo-ui",children:[]},{value:"EDI/Syncada",id:"edisyncada",children:[]},{value:"References",id:"references",children:[]}],p={toc:m};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ghc-rate-engine--invoicing"},"GHC Rate Engine & Invoicing"),(0,r.kt)("p",null,"The MilMove Rate Engine and Invoicing components are responsible for processing requests from the\nGHC Prime to receive payment for services rendered by creating a Payment Request, pricing the Payment Request,\nand storing the pricing information and details about the inputs used for pricing to the database. Once this information\nis stored in the database, the TIO UI is able to query the database for Payment Request(s) details for display on the UI."),(0,r.kt)("p",null,"Once the TIO user has reviewed and approved a Payment Request for payment. The GHC Invoicing component will take the\nPayment Request and generate an EDI order to send to the Third Party Payment System (TPPS) to process the payment (pay the GHC Prime)."),(0,r.kt)("h2",{id:"ghc-invoicing-diagram"},"GHC Invoicing Diagram"),(0,r.kt)("p",null,"High level overview diagrams"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://miro.com/app/board/o9J_ls9Gt7E=/?moveToWidget=3074457365163319192&cot=14"},"Sequence diagram")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://miro.com/app/board/o9J_kwqdujc=/?moveToWidget=3074457346823225551&cot=14"},"Invoicing Flow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://miro.com/app/board/o9J_kwpI-uM=/?moveToWidget=3074457346865834870&cot=14"},"GHC Process Diagram")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/transcom/prime_api_deliverable/wiki/Sequence-Diagram"},"Prime API Sequence Diagram"))),(0,r.kt)("h2",{id:"ghc-invoicing-flow"},"GHC Invoicing Flow"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GHC Prime",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Creates Payment Request (optionally marked \u201cfinal\u201d to indicate no more payments due on this Task Order)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Payment Request contains a subset of MTO Service Items from a Move or MoveTaskOrder (MTO)"))),(0,r.kt)("li",{parentName:"ul"},"Sends \u201cProof of Service Document Package\u201d to MilMove"))),(0,r.kt)("li",{parentName:"ul"},"MilMove",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Receive Payment Request along with Proof of Service Doc Package"),(0,r.kt)("li",{parentName:"ul"},"Validates Payment Request",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ensures that no previous \u201cfinal\u201d Payment Request has been sent"),(0,r.kt)("li",{parentName:"ul"},"Ensures that TOO has approved items on Task Order for which payment is requested. (Unapproved service items will not appear on the MTO.)"),(0,r.kt)("li",{parentName:"ul"},"Ensure that requested Service Item balances have not been covered in other Payment Requests"),(0,r.kt)("li",{parentName:"ul"},"Ensure that Service Item parameters obey validation logic"),(0,r.kt)("li",{parentName:"ul"},"Ensure that no other Payment Requests are open for these service items"),(0,r.kt)("li",{parentName:"ul"},"If valid, continue."),(0,r.kt)("li",{parentName:"ul"},"If not valid",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Send rejection to GHC Prime"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"End")))))))),(0,r.kt)("li",{parentName:"ul"},"Transportation Invoicing Officer",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Validates Payment Request (manual, web UI)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Ensure Proof of Service Document Package exists and properly backs up requested Service Items",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TBD: if Prime submits unfinished payment request, what to do (this story needs to be cleaned up)"))),(0,r.kt)("li",{parentName:"ul"},"If valid",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Approves Payment Request"),(0,r.kt)("li",{parentName:"ul"},"Continue"))),(0,r.kt)("li",{parentName:"ul"},"If not valid",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Provides rejection reason"),(0,r.kt)("li",{parentName:"ul"},"Present rejection to GHC via MilMove"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"End")))))),(0,r.kt)("li",{parentName:"ul"},"If last / \u201cfinal\u201d Payment Request, mark the Task Order \u201ccomplete\u201d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"No future Task Orders may be sent on this."))))),(0,r.kt)("li",{parentName:"ul"},"MilMove",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sends EDI 858 order to TPPS (GEX) for payment "))),(0,r.kt)("li",{parentName:"ul"},"TPPS processes payment\u2026 "),(0,r.kt)("li",{parentName:"ul"},"MilMove",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Receives EDI 997 to acknowledge receipt of the EDI"),(0,r.kt)("li",{parentName:"ul"},"If there are issues/errors with EDI 858, MilMove receives EDI 824 with a description of the issue")))),(0,r.kt)("h2",{id:"ghc-invoicing-mini-design-docs"},"GHC Invoicing Mini Design Docs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1CTexWoGYPQnmBZuO6LTphp9zS1KKcWJjFunStK0pPbw/edit?usp=sharing"},"Discovery JobRunner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1otdYJzRnkaVfZrPC1Oi8dv1WaByXPiow/edit#heading=h.gjdgxs"},"JobRunner Async Handling for EDI Generation and Send to GEX-Syncada Proposal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/13gO40_O0FoEIQcu3G4lzHAtehfgUNe1rUFdTXHfOc_0/edit?usp=sharing"},"Discovery Auto-Validate Payment Request Implementation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1Yd71KxjwcbF06wiJ_ZSTvttbwRnRzQxk4M8itogT4hs/edit?usp=sharing"},"Discovery: TIO Pricing Details")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1D8wp4d62ip2lQG1dKBIAWQy1Bian-ezWwoRqaZ6xti4/edit"},"Invoice Processing Design")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1e8Zq2dkqZ1nWxJNTI5V-w1iZo0ccVTunmWEAr61F4MA/edit#heading=h.pydiodiv30kf"},"Job Runner: EDI Responses Design")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1f_FV8SeUAbmOb0zTvIidXhuHx00NzU4xpX0MiF2Ke-c/edit"},"Payment Request proposed model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/11W0HTPYy9fAjPVAgh5M1cunLaFT0QZhLHRhFpnQoEes/edit#heading=h.sz7x3sm32lts"},"Recording Errors from 997 or 824")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/19vlZsZDPqrWnk6GWv7xfZ_GLLGvRfMllWw7ihHTWTnQ/edit#heading=h.v28rizfh9b9b"},"GHC Fuel Surcharge Pricer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1jRl91aslMnOMt2zS1tt_XT0lD1I-xvsiKOfprAaFrAs/edit#heading=h.od9n7nbhtjs5"},"SIT Pricing Notes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1KBQWC1bSUC6S69w-1fcdDpPId4tEiTZDQZfTTBNieVU/edit#heading=h.f6ntcg9hwkij"},"Pricing Service Items Design")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://miro.com/app/board/o9J_l3lkp8s=/"},"[noodling] Reweighs: Invoicing engineer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://miro.com/app/board/o9J_kuh516s=/?moveToWidget=3074457347367317910&cot=14"},"Payment Request Uploader Design")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/3775"},"GH pull request")," for the refactor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://miro.com/app/board/o9J_lZAfvO0=/?moveToWidget=3074457353115567897&cot=14"},"SIT Pricing Distance Flow Design")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1QVwY5uobUpz87WEeAXSnIXG0NE1o4YnFW0Lf7PnMqO0/edit#heading=h.8wmuqkn9o6rd"},"Design how data will be imported into production")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/3401"},"Initial PR to setup service item param lookup framework")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/2836"},"Service-object-based implementation of domestic linehaul pricer #2836"))),(0,r.kt)("h2",{id:"miro-boards"},"Miro boards"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://miro.com/app/board/o9J_krR2Tt8=/?moveToWidget=3074457349208255435&cot=13"},"Payment Request state diagram"))),(0,r.kt)("h2",{id:"txo-ui"},"TXO UI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://app.abstract.com/projects/1f6c1fd0-88a2-11e9-aaf7-a7ce5896598b/branches/master/collections/a720952c-9c81-4b3f-bb03-6ce3fde71987"},"TIO Abstract Workflow"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://app.abstract.com/projects/1f6c1fd0-88a2-11e9-aaf7-a7ce5896598b/branches/master/collections/e2f84e6a-c87c-4ca1-9a00-3608bd74d35a"},"TOO Abstract Workflow")))),(0,r.kt)("h2",{id:"edisyncada"},"EDI/Syncada"),(0,r.kt)("p",null,"TODO I think there are more docs than this, need to pull the relevant ones"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1o9nMDg6AxGe7aypI5jR9Emjix3eRkZHNcnsJfAVj_vQ/edit#gid=566972450"},"Mapping of EDI field names with MilMove names")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1OYYgAp6GD0wG6SKx61De2VRZFkAPHBHZV2BpyvD0nMc/edit#gid=2073567060"},"Mapping of EDI Responses e.g. 997 & 824, field names"))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1U6a8-zc67eo1g888wM9LzFebQ8SBjGY7hTYYzbMyPPg/edit#heading=h.9a9z2xj8xsoq"},"GHC Rate Engine & Invoicing (Google Doc with notes)"))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5773],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=o,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||n;return a?r.createElement(u,i(i({ref:t},c),{},{components:a})):r.createElement(u,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8029:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=a(7462),o=a(3366),n=(a(7294),a(3905)),i=["components"],s={sidebar_position:2},l="Overview",p={unversionedId:"about/Overview-of-Milmove",id:"about/Overview-of-Milmove",isDocsHomePage:!1,title:"Overview",description:"MilMove is a system to help service members (and other authorized personnel) move their gear and possessions from one place to another.",source:"@site/docs/about/Overview-of-Milmove.md",sourceDirName:"about",slug:"/about/Overview-of-Milmove",permalink:"/mymove-docs/docs/about/Overview-of-Milmove",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/about/Overview-of-Milmove.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"aboutSidebar",previous:{title:"Welcome to the mymove wiki!",permalink:"/mymove-docs/docs/about/"},next:{title:"Users in MilMove",permalink:"/mymove-docs/docs/about/security/User-Management"}},c=[{value:"The Apps",id:"the-apps",children:[]},{value:"The APIs",id:"the-apis",children:[]},{value:"Architecture",id:"architecture",children:[{value:"Pop",id:"pop",children:[]},{value:"Swagger",id:"swagger",children:[]},{value:"Historical apps need update",id:"historical-apps-need-update",children:[]},{value:"Historical note",id:"historical-note",children:[]}]}],m={toc:c};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,'MilMove is a system to help service members (and other authorized personnel) move their gear and possessions from one place to another.\nIt also allows the GHC "Prime" Contractor to request payment for services.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"overview of milmove apis",src:a(4685).Z})),(0,n.kt)("h3",{id:"the-apps"},"The Apps"),(0,n.kt)("p",null,"There are three websites (React apps) that compose the front end of the system:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Milmove app"),", located at my.move.mil."),(0,n.kt)("p",{parentName:"li"},"This app is used by the people moving, namely the service members and their family.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Office app"),", located at office.move.mil."),(0,n.kt)("p",{parentName:"li"},"This app is used by the ",(0,n.kt)("a",{parentName:"p",href:"User-Management.md"},"office users")," to review/approve/reject moves and payments.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Admin app"),", located at admin.move.mil"),(0,n.kt)("p",{parentName:"li"},"This app is used by ",(0,n.kt)("a",{parentName:"p",href:"User-Management.md"},"administrators")," to create new office.move.mil users and grant permissions for various office roles."))),(0,n.kt)("p",null,"The links above (my.move.mil) are for the production versions of the site. We have multiple deployed environments, for staging and testing."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/wiki/Deployment-Process"},"Read more about those here"),". "),(0,n.kt)("h3",{id:"the-apis"},"The APIs"),(0,n.kt)("p",null,"The websites listed above are served by our APIs. However there are 2 APIs for which we don't develop a front-end website. Instead they are external facing APIs for the Prime contractor and armed services to interact with."),(0,n.kt)("p",null,"The two external facing APIs are served over mTLS, which is a higher security protocol than the apps use."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Prime API"),", which is used by the GHC contractor, referred to in our system as the ",(0,n.kt)("em",{parentName:"p"},"Prime"),"."),(0,n.kt)("p",{parentName:"li"},"The Prime is the contractor who will handle all moves for USTC. Once a customer (service member or related) has entered their information in Milmove and the office user has released the move, the Prime will then perform the move. They will use the API to inform milmove of the details of the move, dates, weights, addresses. They will also use these APIs to send invoices for the move."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"Note: Prime is just an internal name for the GHC contractor."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Orders API"),", which is used by the services to send us ",(0,n.kt)("em",{parentName:"p"},"orders"),"."),(0,n.kt)("p",{parentName:"li"},"Service members receive ",(0,n.kt)("em",{parentName:"p"},"orders"),' to move, which include information about the destination as well as authorizations for various kinds of storage, conveyance, per diem allowances, and many more details. Currently Orders information is entered into the system manually by office personnel from a PDF. However, the Orders API is receiving that data directly from the services and eventually that data will be used as the source of truth. That process is called "Orders Ingestion". The process of getting that data into the system for use with moves is called "Orders Integration".'))),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"The architecture for milmove uses a Postgres database, which is accessed by a Go backend, with an ORM called Pop. We then use Swagger to define the APIs which are accessed by the React apps, as well as the external APIs."),(0,n.kt)("p",null,"The code for milmove, including all these apps and APIs, resides in the ",(0,n.kt)("strong",{parentName:"p"},"transcom/mymove")," repo."),(0,n.kt)("p",null,"Here's a simplified picture of the technologies used."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"tech stack of milmove",src:a(5373).Z})),(0,n.kt)("h3",{id:"pop"},"Pop"),(0,n.kt)("p",null,"Pop is an an ORM, which allows us to translate database tables into Go structs. Using pop, we can manipulate Go structs instead of writing SQL statements. The Go structs are called models."),(0,n.kt)("p",null,"We use Pop to"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Read, validate and write models to the database.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Run migrations on the database")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Handle and execute queries to the database"))),(0,n.kt)("p",null,"Read more about Pop here: ",(0,n.kt)("a",{parentName:"p",href:"https://gobuffalo.io/en/docs/db/getting-started"},"https://gobuffalo.io/en/docs/db/getting-started")),(0,n.kt)("h3",{id:"swagger"},"Swagger"),(0,n.kt)("p",null,"Swagger is a way to specify the APIs. We use Swagger to tie the front and back ends together. The Swagger code is found in ",(0,n.kt)("inlineCode",{parentName:"p"},"*.yaml")," files and describes the endpoints and payloads of the API."),(0,n.kt)("p",null,"It's useful in several ways"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Go boilerplate code is generated from the Swagger files."),(0,n.kt)("p",{parentName:"li"},"This is done using a library called ",(0,n.kt)("inlineCode",{parentName:"p"},"go-swagger"),". That code is automatically updated when a Swagger file is changed. These generated files are in ",(0,n.kt)("inlineCode",{parentName:"p"},"/pkg/gen"),". The developer must then add the business logic.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Swagger UI or Redoc generates documentation for users of the API directly from the yaml."),(0,n.kt)("p",{parentName:"li"},"For TLS APIs, we can test endpoints from within ",(0,n.kt)("a",{parentName:"p",href:"#setup-milmovelocal-client"},"the doc itself"),".\nFor mTLS APIs, you can view non-interactive documentation ",(0,n.kt)("a",{parentName:"p",href:"https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/transcom/mymove/master/swagger/prime.yaml"},"here"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Swagger also has a JS client that generates a set of API functions that are hooked into the React apps giving them easier access to the data."))),(0,n.kt)("p",null,"Read more about Swagger here: ",(0,n.kt)("a",{parentName:"p",href:"https://swagger.io/docs/specification/2-0/what-is-swagger/"},"https://swagger.io/docs/specification/2-0/what-is-swagger/")),(0,n.kt)("h3",{id:"historical-apps-need-update"},"Historical apps ","[need update]"),(0,n.kt)("p",null,"In addition to the front end interfaces, MilMove comprises a set of APIs that work over Mutual TLS:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GEX"),": Global Exchange. GEX enables the exchange of transaction data between the DoD and private entities. We use it during the invoicing phase of the move."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"DPS"),": This is also the name of the system MilMove is replacing, but in terms of APIs, DPS acts as an authenticator that will route a user to DPS or MilMove, as appropriate."),(0,n.kt)("h3",{id:"historical-note"},"Historical note"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The history of the project is detailed in the MilMove onboarding document, but one thing for application engineers to keep in mind is that as of this writing, in early 2020, there are two different supported approaches to moves, with one being phased out, but still present in parts of the code. The old model of moves included PPM (Personally Procured Moves--do it yourself and get reimbursed) and HHG (HouseHold Goods moves--the government hires a moving company for you). In that rubric, there was no explicit role system for office app users. We are now phasing out HHG moves in favor of GHC (Global Household goods Contract) moves, in which a single company will handle all subcontracting for moves and explicit roles, like Transportation Ordering Officer (TOO) and Transportation Invoicing Officer (TIO), are defined and assigned.")))}d.isMDXComponent=!0},4685:function(e,t,a){t.Z=a.p+"assets/images/milmove_api-f8d41f94cebaf6764ca634506b2c4767.png"},5373:function(e,t,a){t.Z=a.p+"assets/images/milmove_arch_simple-2892269190f220b83b12d437a5d93f05.png"}}]);
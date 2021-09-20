"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[9213],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,v=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(v,s(s({ref:t},l),{},{components:n})):r.createElement(v,s({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2833:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],a={},c=void 0,d={unversionedId:"dev/testing/writing-tests/Writing-Frontend-Tests-for-MilMove",id:"dev/testing/writing-tests/Writing-Frontend-Tests-for-MilMove",isDocsHomePage:!1,title:"Writing-Frontend-Tests-for-MilMove",description:"This guide covers how MilMove writes tests using RTL.",source:"@site/docs/dev/testing/writing-tests/Writing-Frontend-Tests-for-MilMove.md",sourceDirName:"dev/testing/writing-tests",slug:"/dev/testing/writing-tests/Writing-Frontend-Tests-for-MilMove",permalink:"/mymove-docs/docs/dev/testing/writing-tests/Writing-Frontend-Tests-for-MilMove",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/testing/writing-tests/Writing-Frontend-Tests-for-MilMove.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"Writing Frontend Tests: Enzyme and React Testing Library",permalink:"/mymove-docs/docs/dev/testing/writing-tests/Writing-Frontend-Tests-Enzyme-and-React-Testing-Library"},next:{title:"Writing-Tests-Using-React-Testing-Library-and-Jest",permalink:"/mymove-docs/docs/dev/testing/writing-tests/Writing-Tests-Using-React-Testing-Library-and-Jest"}},l=[{value:"Common Mocks",id:"common-mocks",children:[{value:"React Router Dom",id:"react-router-dom",children:[]},{value:"Internal API",id:"internal-api",children:[]}]},{value:"Common Props",id:"common-props",children:[{value:"Service Member",id:"service-member",children:[]},{value:"Current Orders",id:"current-orders",children:[]},{value:"MTO Shipments",id:"mto-shipments",children:[]},{value:"MTO Shipment",id:"mto-shipment",children:[]},{value:"Current Move",id:"current-move",children:[]},{value:"Address",id:"address",children:[]},{value:"Backup Contact",id:"backup-contact",children:[]},{value:"Releasing / Receiving Agent",id:"releasing--receiving-agent",children:[]},{value:"Entitlement",id:"entitlement",children:[]}]}],u={toc:l};function p(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide covers how MilMove writes tests using RTL.\nPerhaps you have stumbled across this guide, but are looking for generic strategies. That is covered in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/wiki/Writing-Tests-Using-React-Testing-Library-and-Jest"},"this wiki"),"."),(0,o.kt)("h2",{id:"common-mocks"},"Common Mocks"),(0,o.kt)("h3",{id:"react-router-dom"},"React Router Dom"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const mockPush = jest.fn();\nconst mockGoBack = jest.fn();\n\njest.mock('react-router-dom', () => ({\n  ...jest.requireActual('react-router-dom'),\n  useLocation: () => ({\n    pathname: 'localhost:3000/',\n  }),\n  useHistory: () => ({\n    push: mockPush,\n    goBack: mockGoBack,\n  }),\n}));\n")),(0,o.kt)("p",null,"What is this used for?\nA lot of pages have buttons that take the user to different places. We want to verify that users get redirected properly"),(0,o.kt)("h3",{id:"internal-api"},"Internal API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"jest.mock('services/internalApi', () => ({\n  ...jest.requireActual('services/internalApi'),\n  someApiCall: someFunction\n}));\n")),(0,o.kt)("p",null,"What is this used for?\nA lot of components make service calls to the API. Being component tests, we don't actually want those to make calls to the service because that will make our tests brittle. Instead, we mock out the service calls that we need."),(0,o.kt)("h2",{id:"common-props"},"Common Props"),(0,o.kt)("p",null,"Please feel free to change the data itself. These are mainly meant to cover common props that components tend to use. "),(0,o.kt)("h3",{id:"service-member"},"Service Member"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"serviceMember: {\n  id: '666',\n  current_station: {\n    name: 'Test Duty Station',\n  },\n  residential_address: {\n    city: 'New York',\n    postal_code: '10001',\n    state: 'NY',\n    street_address_1: '123 Main St',\n  },\n  affiliation: 'Navy',\n  edipi: '123567890',\n  personal_email: 'test@email.com',\n  first_name: 'Tester',\n  last_name: 'Testing',\n  rank: 'RANK',\n  telephone: '123-555-7890',\n}\n")),(0,o.kt)("h3",{id:"current-orders"},"Current Orders"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"currentOrders: {\n  orders_type: 'PERMANENT_CHANGE_OF_STATION',\n  has_dependents: false,\n  issue_date: '2020-08-11',\n  grade: 'RANK',\n  moves: ['123'],\n  origin_duty_station: {\n    name: 'Test Duty Station',\n    address: {\n      postal_code: '123456',\n    },\n  },\n  new_duty_station: {\n    name: 'New Test Duty Station',\n    address: {\n      postal_code: '123456',\n    },\n  },\n  report_by_date: '2020-08-31',\n  service_member_id: '666',\n  spouse_has_pro_gear: false,\n  status: MOVE_STATUSES.DRAFT,\n  uploaded_orders: {\n    uploads: [],\n  },\n},\n")),(0,o.kt)("h3",{id:"mto-shipments"},"MTO Shipments"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mtoShipments: [\n  {\n    id: 'testMtoShipment789',\n    agents: [],\n    customerRemarks: 'please be carefule',\n    moveTaskOrderID: '123',\n    pickupAddress: {\n      city: 'Beverly Hills',\n    },\n    requestedDeliveryDate: '2020-08-31',\n    requestedPickupDate: '2020-08-31',\n    shipmentType: 'HHG',\n    status: MOVE_STATUSES.SUBMITTED,\n    updatedAt: '2020-09-02T21:08:38.392Z',\n  },\n],\n")),(0,o.kt)("h3",{id:"mto-shipment"},"MTO Shipment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mtoShipment: {\n  id: 'testMtoShipment789',\n  agents: [],\n  customerRemarks: 'please be careful',\n  moveTaskOrderID: '123',\n  pickupAddress: {\n    city: 'Beverly Hills',\n  },\n  requestedDeliveryDate: '2020-08-31',\n  requestedPickupDate: '2020-08-31',\n  shipmentType: 'HHG',\n  status: MOVE_STATUSES.SUBMITTED,\n  updatedAt: '2020-09-02T21:08:38.392Z',\n},\n")),(0,o.kt)("h3",{id:"current-move"},"Current Move"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"currentMove: {\n  id: '123',\n  locator: 'CXVV3F',\n  selected_move_type: 'HHG',\n  service_member_id: '666',\n  status: MOVE_STATUSES.DRAFT,\n},\n")),(0,o.kt)("h3",{id:"address"},"Address"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n  street_address_1: '235 Prospect Valley Road SE',\n  street_address_2: '#125',\n  city: 'El Paso',\n  state: 'TX',\n  postal_code: '79912',\n};\n")),(0,o.kt)("h3",{id:"backup-contact"},"Backup Contact"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"backup_contact: {\n  name: 'Peyton Wing',\n  email: 'pw@example.com',\n  telephone: '915-555-8761',\n}\n")),(0,o.kt)("h3",{id:"releasing--receiving-agent"},"Releasing / Receiving Agent"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"agent: {\n  firstName: 'Jo',\n  lastName: 'Xi',\n  phone: '(555) 555-5555',\n  email: 'jo.xi@email.com',\n},\n")),(0,o.kt)("h3",{id:"entitlement"},"Entitlement"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"entitlement: {\n  authorizedWeight: 5000,\n  dependentsAuthorized: true,\n  eTag: 'MjAyMC0wOS0xNFQxNzo0MTozOC42ODAwOVo=',\n  id: '0dbc9029-dfc5-4368-bc6b-dfc95f5fe317',\n  nonTemporaryStorage: true,\n  privatelyOwnedVehicle: true,\n  proGearWeight: 2000,\n  proGearWeightSpouse: 500,\n  storageInTransit: 2,\n  totalDependents: 1,\n  totalWeight: 5000,\n},\n")))}p.isMDXComponent=!0}}]);
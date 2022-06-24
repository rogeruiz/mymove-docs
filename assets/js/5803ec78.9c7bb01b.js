"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,v=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(v,l(l({ref:t},u),{},{components:n})):a.createElement(v,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},60729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"0023 Representing Dollar Values in Go and the Database",description:"Represent dollar values as cents (integers)"},l="Representing Dollar Values in Go and the Database",o={unversionedId:"adrs/representing-dollar-values",id:"adrs/representing-dollar-values",title:"0023 Representing Dollar Values in Go and the Database",description:"Represent dollar values as cents (integers)",source:"@site/docs/adrs/0023-representing-dollar-values.md",sourceDirName:"adrs",slug:"/adrs/representing-dollar-values",permalink:"/mymove-docs/docs/adrs/representing-dollar-values",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0023-representing-dollar-values.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{title:"0023 Representing Dollar Values in Go and the Database",description:"Represent dollar values as cents (integers)"},sidebar:"adrsSidebar",previous:{title:"0022 Chose Excelize package to parse XLSX files",permalink:"/mymove-docs/docs/adrs/xlsx-lib"},next:{title:"0024 Model Authorization and Handler Design",permalink:"/mymove-docs/docs/adrs/model-authorization-and-handler-design"}},s={},d=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Represent USD values as cents (integers)",id:"represent-usd-values-as-cents-integers",level:3},{value:"Use a some kind of <code>decimal</code> type",id:"use-a-some-kind-of-decimal-type",level:3}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"representing-dollar-values-in-go-and-the-database"},"Representing Dollar Values in Go and the Database"),(0,r.kt)("p",null,"Care must be taken when representing dollars in code. Using floating point values can lead to unexpected rounding errors as floats don't usually equal the exact value you're trying to represent; they are often a tiny bit off from the value you think they are. After a few additions and multiplications on these numbers, these can add up and become visible errors."),(0,r.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Represent USD values as cents (integers)"),(0,r.kt)("li",{parentName:"ul"},"Use a some kind of ",(0,r.kt)("inlineCode",{parentName:"li"},"decimal")," type")),(0,r.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chosen Alternative: ",(0,r.kt)("em",{parentName:"li"},"Represent dollar values as cents (integers)")),(0,r.kt)("li",{parentName:"ul"},"This is a commonly used pattern and should thus be familiar to developers."),(0,r.kt)("li",{parentName:"ul"},"We avoid the overhead of evaluating 3rd party libraries and learning how to integrate them with Pop, our ORM."),(0,r.kt)("li",{parentName:"ul"},"We will create a ",(0,r.kt)("inlineCode",{parentName:"li"},"cent")," type (just an alias of an int) in order to help the compiler remind us of what our variables represent.")),(0,r.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,r.kt)("h3",{id:"represent-usd-values-as-cents-integers"},"Represent USD values as cents (integers)"),(0,r.kt)("p",null,'What this means is that in the code base we will be representing "$1.00" as an integer: ',(0,r.kt)("inlineCode",{parentName:"p"},"100"),". Additionally, we will create a type in Go such that it's clearer that we're working with cents. Doing so doesn't add much burden; it is possible to use integer arithmetic on these values."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type cents int\n\n// Dollars returns the dollar value of c in whole numbers.\nfunc (c cents) Dollars() int {\n    return int(c / 100)\n}\n\nfunc main() {\n    var x cents\n    var y cents\n    x = 100\n    y = 200\n\n    fmt.Printf("%d + %d = %d\\n", x, y, x+y)\n    fmt.Printf("%d cents in dollars is $%d\\n", x, x.Dollars())\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," This is a commonly used pattern and should be familiar to developers, and easy to maintain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," No 3rd party libraries required."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," We might end up recreating the functionality of a decimal type.")),(0,r.kt)("h3",{id:"use-a-some-kind-of-decimal-type"},"Use a some kind of ",(0,r.kt)("inlineCode",{parentName:"h3"},"decimal")," type"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," Adds a layer of type safety when using money values."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," Postgres has this type built in: ",(0,r.kt)("inlineCode",{parentName:"li"},"Numeric(x,y)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," Go has no decimal type. We would have to find one."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," Adds overhead in determining how to integrate the library with our ORM (how does Pop cast a decimal value from Postgres into whatever decimal class we adopt?)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," Prevents us from using standard arithmetic operators as there is no overloading in Go.")))}p.isMDXComponent=!0}}]);
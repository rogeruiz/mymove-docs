"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[4573],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),k=a,d=u["".concat(l,".").concat(k)]||u[k]||m[k]||r;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4963:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],c={},l="Time in Golang",s={unversionedId:"old-wiki/time",id:"old-wiki/time",isDocsHomePage:!1,title:"Time in Golang",description:"Table of Contents",source:"@site/docs/old-wiki/time.md",sourceDirName:"old-wiki",slug:"/old-wiki/time",permalink:"/docs/old-wiki/time",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/old-wiki/time.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Adding `ShipmentLineItem` records to the 400ng table (`tariff400ng_items`)",permalink:"/docs/old-wiki/tariff400ng_items-update-data"},next:{title:"How To Troubleshoot GEX Connection",permalink:"/docs/old-wiki/troubleshoot-gex-connection"}},p=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Clock Dependency",id:"clock-dependency",children:[{value:"Setting the Mock Clock",id:"setting-the-mock-clock",children:[]}]},{value:"MilMove Calendar Utils",id:"milmove-calendar-utils",children:[]}],m={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"time-in-golang"},"Time in Golang"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#clock-dependency"},"Clock Dependency"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setting-the-mock-clock"},"Setting the Mock Clock")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#milmove-calendar-utils"},"MilMove Calendar Utils"))),(0,r.kt)("p",null,'Regenerate with "pre-commit run -a markdown-toc"'),(0,r.kt)("h2",{id:"clock-dependency"},"Clock Dependency"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"time.Now()"),' can cause a lot of side effects in a codebase.\nOne example is\nthat you can\'t test the "current" time\nthat happened in a function you called in the past'),(0,r.kt)("p",null,"For example, let's say we have the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package mypackage\n\nimport "time"\n\nfunc MyTimeFunc() time.Time {\n    return time.Now()\n}\n\nfunc TestMyTimeFunc(t *testing.T) {\n    if MyTimeFunc() != time.Now() {\n        // This will error!\n        // The time in the function and the test happen at different times\n        t.Errorf("time was not now")\n  }\n}\n')),(0,r.kt)("p",null,"How do we test the contents of the return here?\nIf we want to assert the time\nwe need a way to know what ",(0,r.kt)("inlineCode",{parentName:"p"},"time.Now()")," was when the function was called."),(0,r.kt)("p",null,"Instead of directly using the ",(0,r.kt)("inlineCode",{parentName:"p"},"time")," package,\nwe can pass a clock as a dependency and call ",(0,r.kt)("inlineCode",{parentName:"p"},".Now()")," on that.\nThen in our tests, we can assert against that clock!\nThe clock can be anything as long as it adheres to the ",(0,r.kt)("inlineCode",{parentName:"p"},"clock.Clock")," interface\nas defined in the\n",(0,r.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/facebookgo/clock#Clock"},"facebookgo clock package"),".\nWe could, for example,\nmake the clock always return the year 0,\nor the 2019 New Year,\nor maybe your birthday!\nIn this clock package,\nthere are two clocks."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The real clock where ",(0,r.kt)("inlineCode",{parentName:"li"},"clock.Now()")," will call ",(0,r.kt)("inlineCode",{parentName:"li"},"time.Now()"),"."),(0,r.kt)("li",{parentName:"ul"},"A mock clock where ",(0,r.kt)("inlineCode",{parentName:"li"},"clock.Now()")," always returns epoch time.\nWe'll show later how to change that!")),(0,r.kt)("p",null,"Let's look at the example above with the ",(0,r.kt)("inlineCode",{parentName:"p"},"clock")," package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package mypackage\n\nimport "fmt"\nimport "time"\n\nimport "github.com/facebookgo/clock"\n\nfunc MyTimeFunc(clock clock.Clock) time.Time {\n    return clock.Now()\n}\n\n// Then our caller\nfunc main() {\n    // clock.New() creates a clock that uses the time package\n    // it will output current time when .Now() is called\n    fmt.Print(MyTimeFunc(clock.New()))\n}\n')),(0,r.kt)("p",null,"Then in our tests we can use a mock clock that freezes ",(0,r.kt)("inlineCode",{parentName:"p"},".Now()")," at epoch time:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func TestMyTimeFunc(t *testing.T) {\n    testClock := clock.NewMock()\n    if MyTimeFunc(testClock) != testClock.Now() {\n        // both should equal epoch time, we won\'t hit this error\n        t.Errorf("time was not now")\n  }\n}\n')),(0,r.kt)("p",null,"Cool, but what if I want to use a different date?\nSay my test relies on our ",(0,r.kt)("inlineCode",{parentName:"p"},"TestYear")," constant.\nThe ",(0,r.kt)("a",{parentName:"p",href:"https://godoc.org/github.com/facebookgo/clock#Mock"},"clock.Mock clock"),"\nallows us to add durations to the clock and set the current time.\nNote that the ",(0,r.kt)("inlineCode",{parentName:"p"},"clock.Clock")," interface does not allow this,\nit needs to happen before passing the mock clock through the interface parameter."),(0,r.kt)("h3",{id:"setting-the-mock-clock"},"Setting the Mock Clock"),(0,r.kt)("p",null,"Here's an example using the test above and setting the time to September 30 of TestYear:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func TestMyTimeFunc(t *testing.T) {\n    testClock := clock.NewMock()\n    dateToTest := time.Date(TestYear, time.September, 30, 0, 0, 0, 0, time.UTC)\n    timeDiff := dateToTest.Sub(c.Now())\n    testClock.Add(timeDiff)\n    if MyTimeFunc(testClock) != testClock.Now() {\n        // both will now be September 30 of TestYear\n        // we\'ll pass the test again\n        t.Errorf("time was not now")\n  }\n}\n')),(0,r.kt)("h2",{id:"milmove-calendar-utils"},"MilMove Calendar Utils"),(0,r.kt)("p",null,"The MilMove project has a set of date/calendar util\nto help develop and test.\nYou can find them in the ",(0,r.kt)("a",{parentName:"p",href:"../../pkg/dates"},"dates package")),(0,r.kt)("p",null,"For testing, we also have ",(0,r.kt)("inlineCode",{parentName:"p"},"TestYear"),"\nin the ",(0,r.kt)("a",{parentName:"p",href:"../../pkg/testdatagen/constants.go"},"constants package"),"\nwhich should be used instead of the current year."))}u.isMDXComponent=!0}}]);
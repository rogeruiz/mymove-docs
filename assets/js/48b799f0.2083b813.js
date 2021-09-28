"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[6734],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return h}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(r),h=i,d=c["".concat(s,".").concat(h)]||c[h]||u[h]||a;return r?n.createElement(d,o(o({ref:t},m),{},{components:r})):n.createElement(d,o({ref:t},m))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},48290:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],l={},s="Description",p={unversionedId:"vault/infra/How-to-use-the-benchmarking-script-with-Puppeteer-and-Lighthouse",id:"vault/infra/How-to-use-the-benchmarking-script-with-Puppeteer-and-Lighthouse",isDocsHomePage:!1,title:"Description",description:"The benchmarking script was created to capture performance metrics for our application, Milmove, in order to create a baseline on how the application performs currently and what we can improve on. This feature story captures the initial work on what kind of metrics we want with the intent of capturing metrics for the document viewer that the TOO/TIO pages uses.",source:"@site/docs/vault/infra/How-to-use-the-benchmarking-script-with-Puppeteer-and-Lighthouse.md",sourceDirName:"vault/infra",slug:"/vault/infra/How-to-use-the-benchmarking-script-with-Puppeteer-and-Lighthouse",permalink:"/mymove-docs/docs/vault/infra/How-to-use-the-benchmarking-script-with-Puppeteer-and-Lighthouse",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/vault/infra/How-to-use-the-benchmarking-script-with-Puppeteer-and-Lighthouse.md",tags:[],version:"current",frontMatter:{},sidebar:"vaultSidebar",previous:{title:"Pairing Sessions",permalink:"/mymove-docs/docs/vault/confluence/pairing"},next:{title:"Test-Sending-Email-in-Devlocal",permalink:"/mymove-docs/docs/vault/infra/Test-Sending-Email-in-Devlocal"}},m=[{value:"Motivation",id:"motivation",children:[]},{value:"\ud83d\udea8 Pre-requisites \ud83d\udea8",id:"-pre-requisites-",children:[{value:"Optional",id:"optional",children:[]}]},{value:"Using the <code>benchmarking.js</code> script",id:"using-the-benchmarkingjs-script",children:[{value:"TL;DR;",id:"tldr",children:[]},{value:"Directory structure",id:"directory-structure",children:[]},{value:"Script options",id:"script-options",children:[]},{value:"Scenarios",id:"scenarios",children:[]},{value:"Measurement types",id:"measurement-types",children:[]},{value:"Network profiles",id:"network-profiles",children:[]},{value:"File sizes",id:"file-sizes",children:[]},{value:"Viewing the performance trace and lighthouse report saved",id:"viewing-the-performance-trace-and-lighthouse-report-saved",children:[]}]},{value:"Metrics gathered",id:"metrics-gathered",children:[]},{value:"Additional resources",id:"additional-resources",children:[]}],u={toc:m};function c(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"description"},"Description"),(0,a.kt)("p",null,"The benchmarking script was created to capture performance metrics for our application, Milmove, in order to create a baseline on how the application performs currently and what we can improve on. This ",(0,a.kt)("a",{parentName:"p",href:"https://dp3.atlassian.net/browse/MB-3776"},"feature story")," captures the initial work on what kind of metrics we want with the intent of capturing metrics for the document viewer that the TOO/TIO pages uses."),(0,a.kt)("p",null,"The benchmarking code now lives in a seperate repository from mymove at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transcom/milmove-browser-benchmarking"},"trancom/milmove-browser-benchmarking"),"."),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1qCYlnZHcMmqQkc4-3XDECW55VU0pBMrwYYU-S87_O0s/edit"},"visit on base to a transportation office")," by Truss's engineers and designers revealed that office users have slow internet connections. The motivation is to make sure the document viewer is performant enough for our office users, therefore, an automated benchmarking script was created to capture performance of the document viewer. The script can be expanded to audit the entire application as well."),(0,a.kt)("h1",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"Libraries that the benchmark script uses:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tj/commander.js"},"Commander"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"node.js command-line interfaces made easy"))),(0,a.kt)("li",{parentName:"ul"},"Used to create a command line interface to interact in the terminal."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer"},"Puppeteer"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium."))),(0,a.kt)("li",{parentName:"ul"},"Used to authenticate users for the application, simulate throttling of network and gather performance metrics through the devtools."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/GoogleChrome/lighthouse"},"Lighthouse"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Lighthouse analyzes web apps and web pages, collecting modern performance metrics and insights on developer best practices."))),(0,a.kt)("li",{parentName:"ul"},"Used to gather browser metrics, simulate throttling of network and suggestions to improve the application.")))),(0,a.kt)("h2",{id:"-pre-requisites-"},"\ud83d\udea8 Pre-requisites \ud83d\udea8"),(0,a.kt)("p",null,"The script only works if the server and client are running. The database will also need to be migrated. Run the following commands before running the benchmark script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make db_bandwidth_up\nmake server_run client_run\n")),(0,a.kt)("h3",{id:"optional"},"Optional"),(0,a.kt)("p",null,"The script is able to capture the AWS S3 network when fetching the document. To enable the AWS S3 connection, do the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Uncomment ",(0,a.kt)("inlineCode",{parentName:"li"},"export STORAGE_BACKEND=s3")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},".envrc")," file.")),(0,a.kt)("p",null,"In the terminal:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"direnv allow")," to reload configs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"aws-vault exec transcom-gov-dev -- make db_bandwidth_up")," to upload documents to S3. An AWS account is required."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"aws-vault exec transcom-gov-dev -- make server_run")," to run the server."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"make client_run")," to run the client.")),(0,a.kt)("h2",{id:"using-the-benchmarkingjs-script"},"Using the ",(0,a.kt)("inlineCode",{parentName:"h2"},"benchmarking.js")," script"),(0,a.kt)("h3",{id:"tldr"},"TL;DR;"),(0,a.kt)("p",null,"Run in the terminal in the ",(0,a.kt)("inlineCode",{parentName:"p"},"milmove-browser-benchmarking")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node benchmarking.js run -v\n")),(0,a.kt)("p",null,"This will run the script testing the TOO document viewer page using the defaults defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," file."),(0,a.kt)("p",null,"The script will return some metrics after it finishes:\n",(0,a.kt)("img",{alt:"benchmark result example",src:r(70795).Z})),(0,a.kt)("h3",{id:"directory-structure"},"Directory structure"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"milmove-browser-benchmarking")," directory contains:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"config.json")," a json configuration file to define settings to use in the script. Add/Edit properties here."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"constants.js")," a js file that contains constant definitions and schema definitions to be used in the script. Add/Edit properties here. If modifying the ",(0,a.kt)("inlineCode",{parentName:"li"},"config.json")," file, make sure to keep the ",(0,a.kt)("inlineCode",{parentName:"li"},"schema")," constant updated as well."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scenarios.js")," a js file that contains functions to gather metrics. Add/Edit how we gather metrics here."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"benchmarking.js")," a js file that is the main command line interface. Add/Edit options and commands here.")),(0,a.kt)("h3",{id:"script-options"},"Script options"),(0,a.kt)("p",null,"All options running ",(0,a.kt)("inlineCode",{parentName:"p"},"node benchmarking.js run")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-s, --scenario <scenario>"),' scenario is the page or workflow being tested (choices: "too-orders-document-viewer", "tio-payment-requests-document-viewer", default: "too-orders-document-viewer").'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-m --measurement-type <type>"),' specifies the kind of performance output metrics to measure (choices: "total-duration", "network-comparison", "file-duration", default: "total-duration").'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-h --host <host>"),' base host url to use including port (default: "http://officelocal:3000").'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-v --verbose")," shows verbose debugging info (default: false)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-r --save-reports")," save the reports from lighthouse and performance trace json files (default: false)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--help")," display help for command.")),(0,a.kt)("h3",{id:"scenarios"},"Scenarios"),(0,a.kt)("p",null,"There are currently two scenarios the script supports by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"-s --scenario <scenario>")," option:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"too-orders-document-viewer")," is the default. Runs Puppeteer and Lighthouse to gather metrics from the TOO orders document viewer page."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tio-payment-requests-document-viewer")," is similar to the TOO document viewer. The difference is the TIO document viewer shows the payment request service items.")),(0,a.kt)("h3",{id:"measurement-types"},"Measurement types"),(0,a.kt)("p",null,"There are currently three measurement types the script supports by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"-m --measurement-type <type>")," option. Properties ",(0,a.kt)("inlineCode",{parentName:"p"},"network")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"fileSize")," are specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," will be used:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"total-duration")," gather metrics from the specified scenario page , ",(0,a.kt)("inlineCode",{parentName:"li"},"network")," profile type (default: fast), and  ",(0,a.kt)("inlineCode",{parentName:"li"},"fileSize")," type (default: large)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"network-comparison")," gather metrics by running though each ",(0,a.kt)("inlineCode",{parentName:"li"},"network")," type defined (fast, medium, slow) and uses the defined scenario page, and ",(0,a.kt)("inlineCode",{parentName:"li"},"fileSize")," type (default: large)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"file-duration")," gather metrics by running through each ",(0,a.kt)("inlineCode",{parentName:"li"},"fileSize")," type defined (large, medium, small) and uses the defined scenario page, and ",(0,a.kt)("inlineCode",{parentName:"li"},"network")," profile type (default: fast).")),(0,a.kt)("h3",{id:"network-profiles"},"Network profiles"),(0,a.kt)("p",null,"There are three network profiles defined to gather metrics from the document viewer:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fast")," is about 10 MB/s."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"medium")," is about 5 MB/s."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"slow")," is about 1 MB/s.")),(0,a.kt)("h3",{id:"file-sizes"},"File sizes"),(0,a.kt)("p",null,"There are three file sizes defined to gather metrics from the document viewer located ",(0,a.kt)("inlineCode",{parentName:"p"},"pkg/testdatagen/testdata/bandwidth_test_docs"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"large")," is about 25MB image."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"medium")," is about 2MB image."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"small")," is about 150KB image.")),(0,a.kt)("h3",{id:"viewing-the-performance-trace-and-lighthouse-report-saved"},"Viewing the performance trace and lighthouse report saved"),(0,a.kt)("p",null,"Two reports can be generated using the ",(0,a.kt)("inlineCode",{parentName:"p"},"-r --save-reports")," option saved in the ",(0,a.kt)("inlineCode",{parentName:"p"},"reports")," directory:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"performance-trace.json")," is the chrome devtools performance trace. This file can be viewed in the chrome devtools ",(0,a.kt)("inlineCode",{parentName:"li"},"Performance")," tab or ",(0,a.kt)("a",{parentName:"li",href:"https://chromedevtools.github.io/timeline-viewer/"},"the web performance trace viewer"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image on how to load performance trace",src:r(44148).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lighthouse-report.json")," is the chrome devtools lighthouse report. This file can be viewed in the chrome devtools ",(0,a.kt)("inlineCode",{parentName:"li"},"Lighthouse")," tab or the ",(0,a.kt)("a",{parentName:"li",href:"https://googlechrome.github.io/lighthouse/viewer/"},"web lighthouse report viewer"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image on how to load lighthouse report",src:r(24901).Z})),(0,a.kt)("h2",{id:"metrics-gathered"},"Metrics gathered"),(0,a.kt)("p",null,"The following are the metrics gathered:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\ud83c\udfc1 Peformance timing (seconds)")," captures the total page navigation + all resources downloaded on page load. This is gathered from the ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Performance"},"browser performance api"),".")),(0,a.kt)("p",null,"The rest are gathered from ",(0,a.kt)("a",{parentName:"p",href:"https://web.dev/lighthouse-performance/#metrics"},"Lighthouse"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\ud83c\udfa8 Largest Contentful Paint (seconds)"),' "LCP measures when the largest content element in the viewport is rendered to the screen. This approximates when the main content of the page is visible to users". ',(0,a.kt)("a",{parentName:"li",href:"https://web.dev/lighthouse-largest-contentful-paint/"},"More here"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\ud83d\udc46 Time To Interactive (seconds)"),' "TTI measures how long it takes a page to become fully interactive." ',(0,a.kt)("a",{parentName:"li",href:"https://web.dev/interactive/"},"More here"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u231b\ufe0f Total Blocking Time (milliseconds)"),' "TBT measures the total amount of time that a page is blocked from responding to user input, such as mouse clicks, screen taps, or keyboard presses." ',(0,a.kt)("a",{parentName:"li",href:"https://web.dev/lighthouse-total-blocking-time/"},"More here"),".")),(0,a.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Performance API: ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Performance"},"https://developer.mozilla.org/en-US/docs/Web/API/Performance")),(0,a.kt)("li",{parentName:"ul"},"Research on tooling: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.google.com/document/d/1qF8fLZOKUAbDXGiMwWF4J2OjRzaQG9wm54CivZjpqv8/edit#heading=h.3emrnnq244df"},"https://docs.google.com/document/d/1qF8fLZOKUAbDXGiMwWF4J2OjRzaQG9wm54CivZjpqv8/edit#heading=h.3emrnnq244df")),(0,a.kt)("li",{parentName:"ul"},"Puppeteer: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/puppeteer/puppeteer#puppeteer"},"https://github.com/puppeteer/puppeteer#puppeteer")),(0,a.kt)("li",{parentName:"ul"},"Puppeteer API: ",(0,a.kt)("a",{parentName:"li",href:"https://pptr.dev/"},"https://pptr.dev/")),(0,a.kt)("li",{parentName:"ul"},"Recipes for Puppeteer and Lighthouse: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/addyosmani/puppeteer-webperf"},"https://github.com/addyosmani/puppeteer-webperf")),(0,a.kt)("li",{parentName:"ul"},"Lighthouse: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/GoogleChrome/lighthouse#lighthouse-----"},"https://github.com/GoogleChrome/lighthouse#lighthouse-----")),(0,a.kt)("li",{parentName:"ul"},"Lighthouse throttling guide: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/GoogleChrome/lighthouse/blob/master/docs/throttling.md"},"https://github.com/GoogleChrome/lighthouse/blob/master/docs/throttling.md")),(0,a.kt)("li",{parentName:"ul"},"Analyzing performance trace: ",(0,a.kt)("a",{parentName:"li",href:"https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference"},"https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference")),(0,a.kt)("li",{parentName:"ul"},"Lighthouse performance audit: ",(0,a.kt)("a",{parentName:"li",href:"https://web.dev/lighthouse-performance/"},"https://web.dev/lighthouse-performance/")),(0,a.kt)("li",{parentName:"ul"},"Lighthouse report viewer: ",(0,a.kt)("a",{parentName:"li",href:"https://googlechrome.github.io/lighthouse/viewer/"},"https://googlechrome.github.io/lighthouse/viewer/")),(0,a.kt)("li",{parentName:"ul"},"Performance trace viewer: ",(0,a.kt)("a",{parentName:"li",href:"https://chromedevtools.github.io/timeline-viewer/"},"https://chromedevtools.github.io/timeline-viewer/"))))}c.isMDXComponent=!0},70795:function(e,t,r){t.Z=r.p+"assets/images/benchmark_result_1-35491d2d57986b7eb0a4b7232c372139.png"},24901:function(e,t,r){t.Z=r.p+"assets/images/how_to_load_lighthouse_report-50aac019d6d7f31935cb26c6ec39f40b.gif"},44148:function(e,t,r){t.Z=r.p+"assets/images/how_to_load_performance_trace-6228eacffa0bd533362809136ec3bcaa.gif"}}]);
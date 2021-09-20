"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8419],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=o.createContext({}),l=function(e){var n=o.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(g.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},s=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,g=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(t),u=r,m=s["".concat(g,".").concat(u)]||s[u]||d[u]||a;return t?o.createElement(m,i(i({ref:n},p),{},{components:t})):o.createElement(m,i({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=s;var c={};for(var g in n)hasOwnProperty.call(n,g)&&(c[g]=n[g]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}s.displayName="MDXCreateElement"},8687:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return g},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],c={},g="How to Add Application Logging",l={unversionedId:"dev/contributing/backend/add-application-logging",id:"dev/contributing/backend/add-application-logging",isDocsHomePage:!1,title:"How to Add Application Logging",description:"Application logging in MyMove is built on top of the Zap logger.  However, each package defines its own logging interface to self-document and enable us to extend Zap method definitions with custom implementations.  To learn how to extend Zap, see the Embedded Structs section below.",source:"@site/docs/dev/contributing/backend/add-application-logging.md",sourceDirName:"dev/contributing/backend",slug:"/dev/contributing/backend/add-application-logging",permalink:"/mymove-docs/docs/dev/contributing/backend/add-application-logging",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/contributing/backend/add-application-logging.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"How to Access a Global Application Variable",permalink:"/mymove-docs/docs/dev/contributing/backend/access-global-variables"},next:{title:"How to handle back-end errors",permalink:"/mymove-docs/docs/dev/contributing/backend/handle-backend-errors"}},p=[{value:"New Logging",id:"new-logging",children:[]},{value:"Expand Logging",id:"expand-logging",children:[]},{value:"Embedded Structs",id:"embedded-structs",children:[]}],d={toc:p};function s(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-add-application-logging"},"How to Add Application Logging"),(0,a.kt)("p",null,"Application logging in MyMove is built on top of the ",(0,a.kt)("a",{parentName:"p",href:"https://godoc.org/go.uber.org/zap"},"Zap")," logger.  However, each package defines its own logging interface to self-document and enable us to extend Zap method definitions with custom implementations.  To learn how to extend Zap, see the ",(0,a.kt)("inlineCode",{parentName:"p"},"Embedded Structs")," section below."),(0,a.kt)("h2",{id:"new-logging"},"New Logging"),(0,a.kt)("p",null,"To add basic logging to a package, you create a ",(0,a.kt)("inlineCode",{parentName:"p"},"logger.go")," file in the package that includes an interface that defines the logging methods required."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package mypackage\n...\nimport (\n  "go.uber.org/zap"\n)\n...\n// Logger is an interface that describes the logging requirements of this package.\ntype Logger interface {\n  Error(msg string, fields ...zap.Field)\n}\n...\n')),(0,a.kt)("p",null,"You can then pass the logger object through an interface to underlying function calls."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'\nfunc (h *MyService) Call(ctx context.Context, r *http.Request, logger Logger) {\n  ...\n  logger.Error("hit an error!")\n  ...\n}\n')),(0,a.kt)("h2",{id:"expand-logging"},"Expand Logging"),(0,a.kt)("p",null,"If your logging requirements expand for a given package, you can simply add the functions to the package's interface.  If the require methods are not implemented yet, you have the flexibility to implement the method at the project level or create an embedded struct at the package level."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Logger interface {\n  Info(msg string, fields ...zap.Field)\n  Error(msg string, fields ...zap.Field)\n  WithOptions(opts ...zap.Option) *zap.Logger\n}\n")),(0,a.kt)("h2",{id:"embedded-structs"},"Embedded Structs"),(0,a.kt)("p",null,"Since we use an ",(0,a.kt)("a",{parentName:"p",href:"https://gobyexample.com/interfaces"},"interface")," instead of a single ",(0,a.kt)("a",{parentName:"p",href:"https://tour.golang.org/moretypes/2"},"struct type"),", we can enhance loggers at the project or package level while maintaining interface compatibility.  The logger ",(0,a.kt)("inlineCode",{parentName:"p"},"CustomLogger")," as defined below logs the number running go routines on ",(0,a.kt)("inlineCode",{parentName:"p"},"Fatal")," messages."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'\nimport (\n  "go.uber.org/zap"\n)\n...\ntype CustomLogger struct {\n  *zap.Logger\n}\n\nfunc (e *CustomLogger) Fatal(msg string, fields ...zap.Field) {\n  fields = append(fields, zap.Int("goroutines", runtime.NumGoroutine()))\n  e.Logger.Fatal(msg, fields...)\n}\n...\n')))}s.isMDXComponent=!0}}]);
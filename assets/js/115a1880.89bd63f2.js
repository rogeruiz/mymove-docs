"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:9},o="How to Access a Global Application Variable",l={unversionedId:"backend/guides/access-global-variables",id:"backend/guides/access-global-variables",title:"How to Access a Global Application Variable",description:"Overview",source:"@site/docs/backend/guides/access-global-variables.md",sourceDirName:"backend/guides",slug:"/backend/guides/access-global-variables",permalink:"/mymove-docs/docs/backend/guides/access-global-variables",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/backend/guides/access-global-variables.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"backendSidebar",previous:{title:"Guide to Static Analysis Security Workflow",permalink:"/mymove-docs/docs/backend/guides/guide-to-static-analysis-security-workflow"},next:{title:"How to add an event trigger",permalink:"/mymove-docs/docs/backend/guides/how-to/add-an-event-trigger"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Why we do it this way",id:"why-we-do-it-this-way",level:2},{value:"Getting Environment Variables",id:"getting-environment-variables",level:2},{value:"Setting up global variables in the Handler Config",id:"setting-up-global-variables-in-the-handler-config",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-access-a-global-application-variable"},"How to Access a Global Application Variable"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In this project, we access application variables (environment variables or other variables we set for the application) by adding them to the handler config.  Through the context we pass the variables to the functions that require them."),(0,r.kt)("h2",{id:"why-we-do-it-this-way"},"Why we do it this way"),(0,r.kt)("p",null,"Environment variables should only be accessed in the main ",(0,r.kt)("inlineCode",{parentName:"p"},"serve.go")," file and turned into real variables for passing around at that point. Accessing environment vars in other parts of the code increases the scope of our problems if there is something wrong with the environment vars. Also it increases problems with security if people are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"os")," package directly to get them instead of using the ",(0,r.kt)("inlineCode",{parentName:"p"},"spf13/viper")," package which reads both environment vars and command line flags."),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spf13/viper"},(0,r.kt)("inlineCode",{parentName:"a"},"spf13/viper"))," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spf13/pflag"},(0,r.kt)("inlineCode",{parentName:"a"},"spf13/pflags"))," to access environment variables\ntoday. It replaces using the ",(0,r.kt)("inlineCode",{parentName:"p"},"os")," package and the ",(0,r.kt)("inlineCode",{parentName:"p"},"flag")," package because it does\nboth. The pattern is the 12-factor-app pattern."),(0,r.kt)("h2",{id:"getting-environment-variables"},"Getting Environment Variables"),(0,r.kt)("p",null,"We use command line flags to get the environment variables. The flags are set in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cli")," package.  Viper can take the flag and gets the value associated with that flag.  For example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dbEnv := v.GetString(cli.DbEnvFlag)")," returns the database environment name"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"loginGovSecretKey := v.GetString(cli.LoginGovSecretKeyFlag))")," grabs the ",(0,r.kt)("inlineCode",{parentName:"p"},"LOGIN_GOV_SECRET_KEY")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},".envrc")),(0,r.kt)("h2",{id:"setting-up-global-variables-in-the-handler-config"},"Setting up global variables in the Handler Config"),(0,r.kt)("p",null,"To add an application variable to the handler config, we create essentially a getter and setter in the handler config.\n(Ex. ",(0,r.kt)("inlineCode",{parentName:"p"},"SetUseSecureCookie")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"UseSecureCookie"),")\nFollow the pattern in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/pkg/handlers/contexts.go"},"pkg/handlers/contexts.go")),(0,r.kt)("p",null,"Then, in the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/cmd/milmove/serve.go"},(0,r.kt)("inlineCode",{parentName:"a"},"cmd/milmove/serve.go")),"\nfile, in the function ",(0,r.kt)("inlineCode",{parentName:"p"},"serveFunction")," set the value using the setter."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'dbEnv := v.GetString(cli.DbEnvFlag)\nisDevOrTest := dbEnv == "development" || dbEnv == "test"\nuseSecureCookie := !isDevOrTest\nhandlerConfig.SetUseSecureCookie(useSecureCookie)\n')),(0,r.kt)("p",null,"In your handler, you should now be able to access the value through the handler config by calling the getter (ex. ",(0,r.kt)("inlineCode",{parentName:"p"},"h.HandlerConfig.UseSecureCookie()"),")"))}d.isMDXComponent=!0}}]);
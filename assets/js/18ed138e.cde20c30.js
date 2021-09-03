"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5813],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(v,i(i({ref:t},u),{},{components:n})):o.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6885:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={},c=void 0,s={unversionedId:"old-wiki/Test-Storing-Data-in-S3-in-Devlocal",id:"old-wiki/Test-Storing-Data-in-S3-in-Devlocal",isDocsHomePage:!1,title:"Test-Storing-Data-in-S3-in-Devlocal",description:"If you would like to test uploading docs to S3 in AWS in your devlocal environment to be able to test the same codepaths as prod, follow the steps listed below.",source:"@site/docs/old-wiki/Test-Storing-Data-in-S3-in-Devlocal.md",sourceDirName:"old-wiki",slug:"/old-wiki/Test-Storing-Data-in-S3-in-Devlocal",permalink:"/docs/old-wiki/Test-Storing-Data-in-S3-in-Devlocal",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/old-wiki/Test-Storing-Data-in-S3-in-Devlocal.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Test-Sending-Email-in-Devlocal",permalink:"/docs/old-wiki/Test-Sending-Email-in-Devlocal"},next:{title:"Testing-Best-Practices",permalink:"/docs/old-wiki/Testing-Best-Practices"}},u=[{value:"Caveats",id:"caveats",children:[]},{value:"Steps",id:"steps",children:[]}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you would like to test uploading docs to S3 in AWS in your devlocal environment to be able to test the same codepaths as prod, follow the steps listed below. "),(0,a.kt)("h2",{id:"caveats"},"Caveats"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"devlocal uses the ",(0,a.kt)("inlineCode",{parentName:"li"},"transcom-gov-dev")," account. Staging and production environments use the ",(0,a.kt)("inlineCode",{parentName:"li"},"transcom-gov-milmove-stg")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"transcom-gov-milmove-prd")," respectively."),(0,a.kt)("li",{parentName:"ul"},"This method describes uploading orders as a simple workflow to test S3 upload. Additional methods would be a welcome addition to this doc.")),(0,a.kt)("h2",{id:"steps"},"Steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Setting the storage environment variable to use S3 instead of local")),(0,a.kt)("p",null,"In your ",(0,a.kt)("inlineCode",{parentName:"p"},".envrc")," file uncomment the following line:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export STORAGE_BACKEND=s3\n")),(0,a.kt)("p",null,"Reload your environment to pickup the new value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"direnv allow\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Run the server against the ",(0,a.kt)("inlineCode",{parentName:"li"},"transcom-gov-dev")," AWS account")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"aws-vault exec transcom-gov-dev -- make server_run\n")),(0,a.kt)("p",null,"You should see a log line specifying that S3 is enabled as the storage backend"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'2020-12-10T14:58:32.769Z    INFO    storage/storage.go:92   Using s3 storage backend    {"git_branch": "rek-mb-5464-add-instructions", "git_commit": "a874a9fff05c80ff88972487b47cb4b05df4a605", "bucket": "transcom-gov-dev-app-devlocal-us-gov-west-1", "region": "us-gov-west-1", "key": "rebecca.kilberg.truss"}\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Run the client server")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"make client_run\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},'Navigate to the Orders page.\nGo to http://milmovelocal:3000/devlocal-auth/login and click "Create a new milmove User". From there fill out all the forms with fake data. When you get to the "Orders" page, upload a doc in the Uploads section. You should get an "Upload complete" message overlaying your document.')))}p.isMDXComponent=!0}}]);
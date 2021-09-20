"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[4059],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1614:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],a={},s="Precommit Hooks",u={unversionedId:"help/Troubleshoot-Precommit-Hook-Failures",id:"help/Troubleshoot-Precommit-Hook-Failures",isDocsHomePage:!1,title:"Precommit Hooks",description:"The precommit hooks run automatically when you try to make a commit. They are a set of scripts that validate the commit.",source:"@site/docs/help/Troubleshoot-Precommit-Hook-Failures.md",sourceDirName:"help",slug:"/help/Troubleshoot-Precommit-Hook-Failures",permalink:"/mymove-docs/docs/help/Troubleshoot-Precommit-Hook-Failures",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/help/Troubleshoot-Precommit-Hook-Failures.md",tags:[],version:"current",frontMatter:{},sidebar:"helpSidebar",previous:{title:"Troubleshoot-CAC-Reader-Issues",permalink:"/mymove-docs/docs/help/Troubleshoot-CAC-Reader-Issues"},next:{title:"How to Manage Dependencies With go mod",permalink:"/mymove-docs/docs/help/manage-dependencies-with-go-mod"}},c=[{value:"Cheatsheet",id:"cheatsheet",children:[]},{value:"Errors and Solutions",id:"errors-and-solutions",children:[{value:"1. Error: Installing environment",id:"1-error-installing-environment",children:[]},{value:"2. Golang-ci Error: \u201cno go files to analyze\u201d",id:"2-golang-ci-error-no-go-files-to-analyze",children:[]},{value:"3. Golang-ci Error: &quot;failed prerequisites&quot;",id:"3-golang-ci-error-failed-prerequisites",children:[]},{value:"4. ESLint Error: &quot;couldn&#39;t find the config react-app&quot;",id:"4-eslint-error-couldnt-find-the-config-react-app",children:[]},{value:"5. Executable ... not found.",id:"5-executable--not-found",children:[]},{value:"6. Module not found in <code>gen</code>",id:"6-module-not-found-in-gen",children:[]},{value:"7. Module not found in <code>mocks</code>",id:"7-module-not-found-in-mocks",children:[]},{value:"8. Failed prerequisites without an indication of an error",id:"8-failed-prerequisites-without-an-indication-of-an-error",children:[]}]}],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"precommit-hooks"},"Precommit Hooks"),(0,i.kt)("p",null,"The precommit hooks run automatically when you try to make a commit. They are a set of scripts that validate the commit.\nIf the validation fails, the commit isn't committed. "),(0,i.kt)("h2",{id:"cheatsheet"},"Cheatsheet"),(0,i.kt)("p",null,"Here are some useful ways to debug."),(0,i.kt)("p",null,"To run them yourself before you commit:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ pre-commit run --all-files\n")),(0,i.kt)("p",null,"To run a specific hook:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ pre-commit run markdownlint --all-files\n")),(0,i.kt)("p",null,"If they are not installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ pre-commit install-hooks\n")),(0,i.kt)("h2",{id:"errors-and-solutions"},"Errors and Solutions"),(0,i.kt)("h3",{id:"1-error-installing-environment"},"1. Error: Installing environment"),(0,i.kt)("p",null,"For an error about installing the environment, try ensuring your nodenv is set correctly.\nThis is what the error looks like, it stalls here for a while\u2026."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ pre-commit install-hooks\n[INFO] Installing environment for git://github.com/igorshubovych/markdownlint-cli.\n[INFO] Once installed this environment will be reused.\n[INFO] This may take a few minutes...\n")),(0,i.kt)("h4",{id:"solution"},"Solution"),(0,i.kt)("p",null,"For this error you may need to set your global nodenv version"),(0,i.kt)("p",null,"Check the current versions,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"~/$ cat .node-version\n12.21.0\n")),(0,i.kt)("p",null,"Outside mymove folder, set the global version,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"~/mymove$ cd ..\n~/$ nodenv global 12.21.0\n")),(0,i.kt)("p",null,"Then inside mymove, "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"~/$ cd mymove\n~/mymove$ pre-commit install-hooks\n")),(0,i.kt)("h3",{id:"2-golang-ci-error-no-go-files-to-analyze"},"2. Golang-ci Error: \u201cno go files to analyze\u201d"),(0,i.kt)("p",null,"For an error about context loading failing, clean your precommit cache."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'level=error msg="Running error: context loading failed: no go files to analyze\n')),(0,i.kt)("h4",{id:"solution-1"},"Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rm -rf ~/.cache/pre-commit && pre-commit run -a\n")),(0,i.kt)("h3",{id:"3-golang-ci-error-failed-prerequisites"},'3. Golang-ci Error: "failed prerequisites"'),(0,i.kt)("p",null,"This error about failed prerequisites is misleading. if you see a failure in ",(0,i.kt)("inlineCode",{parentName:"p"},"\u2026/[pkgname].test")," it means there\u2019s a test in there that likely isn\u2019t building. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'level=warning msg="[runner] Can\'t run linter goanalysis_metalinter: assign: failed prerequisites: inspect@github.com/transcom/mymove/pkg/handlers/ghcapi [github.com/transcom/mymove/pkg/handlers/ghcapi.test]"\nlevel=error msg="Running error: assign: failed prerequisites: inspect@github.com/transcom/mymove/pkg/handlers/ghcapi [github.com/transcom/mymove/pkg/handlers/ghcapi.test]"\n')),(0,i.kt)("h4",{id:"solution-2"},"Solution"),(0,i.kt)("p",null,"Probably an error in server tests.\nRun the tests and look for errors."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"make server_test\n")),(0,i.kt)("p",null,"One weird trick - you can compile but not run the tests using"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"go test -run=nope ./...\n")),(0,i.kt)("p",null,"This is helpful to find the package with the compile error."),(0,i.kt)("h3",{id:"4-eslint-error-couldnt-find-the-config-react-app"},'4. ESLint Error: "couldn\'t find the config react-app"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Oops! Something went wrong! :(\n\nESLint: 7.5.0\n\nESLint couldn\'t find the config "react-app" to extend from. Please check that the name of the config is correct.\n')),(0,i.kt)("h4",{id:"solution-3"},"Solution"),(0,i.kt)("p",null,"For this error, run ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn install"),". This will install the dependencies listed in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". "),(0,i.kt)("h3",{id:"5-executable--not-found"},"5. Executable ... not found."),(0,i.kt)("p",null,"This error says you don't have some tool installed. You might see this with ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"prettier")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"spectral"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"prettier.................................................................Failed\n- hook id: prettier\n- exit code: 1\nExecutable `node_modules/.bin/prettier` not found\n")),(0,i.kt)("h4",{id:"solution-4"},"Solution"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn install"),". This will install the dependencies listed in ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". "),(0,i.kt)("h3",{id:"6-module-not-found-in-gen"},"6. Module not found in ",(0,i.kt)("inlineCode",{parentName:"h3"},"gen")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cannot find module providing package github.com/transcom/mymove/pkg/gen/*\n")),(0,i.kt)("h4",{id:"solution-5"},"Solution"),(0,i.kt)("p",null,"Try running ",(0,i.kt)("inlineCode",{parentName:"p"},"make server_generate")," which should generate files for the ",(0,i.kt)("inlineCode",{parentName:"p"},"gen")," folder automatically."),(0,i.kt)("h3",{id:"7-module-not-found-in-mocks"},"7. Module not found in ",(0,i.kt)("inlineCode",{parentName:"h3"},"mocks")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cannot find module providing package github.com/transcom/mymove/pkg/.../mocks\n")),(0,i.kt)("h4",{id:"solution-6"},"Solution"),(0,i.kt)("p",null,"Try running ",(0,i.kt)("inlineCode",{parentName:"p"},"make mocks_generate")," which should auto generate mocks."),(0,i.kt)("h3",{id:"8-failed-prerequisites-without-an-indication-of-an-error"},"8. Failed prerequisites without an indication of an error"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Can't run linter goanalysis_metalinter: assign: failed prerequisites: inspect@github.com/transcom/mymove/cmd/milmove\n")),(0,i.kt)("h4",{id:"solution-7"},"Solution"),(0,i.kt)("p",null,"This could be due to the build failing. Try ",(0,i.kt)("inlineCode",{parentName:"p"},"make server_build")," to check."))}m.isMDXComponent=!0}}]);
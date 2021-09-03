"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[616],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,k=c["".concat(m,".").concat(u)]||c[u]||s[u]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3312:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},m="Run pre-commit hooks",p={unversionedId:"old-wiki/run-pre-commit-hooks",id:"old-wiki/run-pre-commit-hooks",isDocsHomePage:!1,title:"Run pre-commit hooks",description:"Pre-commit is a powerful tool that automates validations, lint checks and adds to developer quality of life. The config file that determines the actions of pre-commit hooks can be found here.",source:"@site/docs/old-wiki/run-pre-commit-hooks.md",sourceDirName:"old-wiki",slug:"/old-wiki/run-pre-commit-hooks",permalink:"/docs/old-wiki/run-pre-commit-hooks",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/old-wiki/run-pre-commit-hooks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How To Run Go Tests",permalink:"/docs/old-wiki/run-go-tests"},next:{title:"How to Use and Run Storybook",permalink:"/docs/old-wiki/run-storybook"}},d=[{value:"Testing",id:"testing",children:[]},{value:"Specifying and updating the Node version in the config",id:"specifying-and-updating-the-node-version-in-the-config",children:[]},{value:"Editor Integration",id:"editor-integration",children:[]},{value:"Current pre-commit hooks",id:"current-pre-commit-hooks",children:[]}],s={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"run-pre-commit-hooks"},"Run pre-commit hooks"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pre-commit.com/"},"Pre-commit")," is a powerful tool that automates validations, lint checks and adds to developer quality of life. The config file that determines the actions of pre-commit hooks can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/.pre-commit-config.yaml"},"here"),"."),(0,o.kt)("p",null,"Pre-commit can be run by running the following command in terminal:\n",(0,o.kt)("inlineCode",{parentName:"p"},"pre-commit")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"make pre_commit_tests")," which is similar to how CircleCI runs it."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"If the ",(0,o.kt)("inlineCode",{parentName:"em"},"pre-commit")," command is not found or errors out, please make sure you have the ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/transcom/mymove/blob/master/README.md#setup-prerequisites"},"pre-requisites")," installed.")),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"If you would like to run an individual hook, for example if you want to only run ",(0,o.kt)("em",{parentName:"p"},"prettier"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"pre-commit run prettier -a")),(0,o.kt)("h2",{id:"specifying-and-updating-the-node-version-in-the-config"},"Specifying and updating the Node version in the config"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"pre-commit")," uses the system-installed versions of languages. We prefer to manage versions with language managers such as ",(0,o.kt)("inlineCode",{parentName:"p"},"nodenv")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"asdf"),". By default ",(0,o.kt)("inlineCode",{parentName:"p"},"nodenv")," doesn't install Node system-wide, which can cause ",(0,o.kt)("inlineCode",{parentName:"p"},"pre-commit install-hooks")," to hang without explanation. The solution is to either install the language globally (not ideal), or tell ",(0,o.kt)("inlineCode",{parentName:"p"},"pre-commit")," to use a specific version of a language. We can either use the ",(0,o.kt)("inlineCode",{parentName:"p"},"language_version")," key within a specific hook, or if we expect all Node hooks to use the same version, we can define a top-level ",(0,o.kt)("inlineCode",{parentName:"p"},"default_language_version")," attribute where you can specify multiple languages and their versions, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"default_language_version:\n  # this should match the version in .node-version at the root of this project\n  node: 12.21.0\n\nrepos:\n  - repo: local\n    hooks:\n      - id: go-version\n        name: go version\n        entry: scripts/check-go-version\n        language: script\n        types: [go]\n")),(0,o.kt)("p",null,"This specific language version should match the one we use on the project. For Node, this is defined in ",(0,o.kt)("inlineCode",{parentName:"p"},".node-version"),". When we upgrade Node, we should remember to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"pre-commit")," config file as well."),(0,o.kt)("p",null,"Currently, it looks like ",(0,o.kt)("inlineCode",{parentName:"p"},"pre-commit")," only supports Python, Node, and Ruby for specific language versions. See the ",(0,o.kt)("a",{parentName:"p",href:"https://pre-commit.com/#overriding-language-version"},"pre-commit documentation")," for more details."),(0,o.kt)("h2",{id:"editor-integration"},"Editor Integration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"golangci-lint")," supports various ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/golangci/golangci-lint/#editor-integration"},"editors"))),(0,o.kt)("h2",{id:"current-pre-commit-hooks"},"Current pre-commit hooks"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Hook"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"go-version")),(0,o.kt)("td",{parentName:"tr",align:null},"Attempts to load go version and verify it.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"check-json")),(0,o.kt)("td",{parentName:"tr",align:null},"Attempts to load all json files to verify syntax. For more see ",(0,o.kt)("a",{parentName:"td",href:"http://github.com/pre-commit/pre-commit-hooks"},"here"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"check-merge-conflict")),(0,o.kt)("td",{parentName:"tr",align:null},"Check for files that contain merge conflict strings. For more see ",(0,o.kt)("a",{parentName:"td",href:"http://github.com/pre-commit/pre-commit-hooks"},"here"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"check-yaml")),(0,o.kt)("td",{parentName:"tr",align:null},"Attempts to load all yaml files to verify syntax. For more see ",(0,o.kt)("a",{parentName:"td",href:"http://github.com/pre-commit/pre-commit-hooks"},"here"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"detect-private-key")),(0,o.kt)("td",{parentName:"tr",align:null},"Checks for the existence of private keys. For more see ",(0,o.kt)("a",{parentName:"td",href:"http://github.com/pre-commit/pre-commit-hooks"},"here"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"trailing-whitespace")),(0,o.kt)("td",{parentName:"tr",align:null},"Trims trailing whitespace. For more see ",(0,o.kt)("a",{parentName:"td",href:"http://github.com/pre-commit/pre-commit-hooks"},"here"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"markdownlint")),(0,o.kt)("td",{parentName:"tr",align:null},"Linting rules for markdown files. For more see ",(0,o.kt)("a",{parentName:"td",href:"http://github.com/igorshubovych/markdownlint-cli"},"here"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"shell-lint")),(0,o.kt)("td",{parentName:"tr",align:null},"Linter for shell files including spell check. For more see ",(0,o.kt)("a",{parentName:"td",href:"http://github.com/detailyang/pre-commit-shell"},"here"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"prettier")),(0,o.kt)("td",{parentName:"tr",align:null},"Attempts to run ",(0,o.kt)("a",{parentName:"td",href:"https://prettier.io/"},"prettier")," hook against the code.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"eslint")),(0,o.kt)("td",{parentName:"tr",align:null},"Attempts to run linting rules against the code base.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"swagger")),(0,o.kt)("td",{parentName:"tr",align:null},"Attempts to run swagger validator for api, internal, order and dps endpoints.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mdspell")),(0,o.kt)("td",{parentName:"tr",align:null},"Spellchecks Markdown files. For more see ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/lukeapage/node-markdown-spellcheck"},"here"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"markdown-toc")),(0,o.kt)("td",{parentName:"tr",align:null},"Wrapper script to generate table of contents on Markdown files.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"go-imports")),(0,o.kt)("td",{parentName:"tr",align:null},"Attempts to run command ",(0,o.kt)("inlineCode",{parentName:"td"},"goimports")," which updates your Go import lines, adding missing ones and removing unreferenced ones. For more see ",(0,o.kt)("a",{parentName:"td",href:"https://godoc.org/golang.org/x/tools/cmd/goimports"},"here"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"go-lint")),(0,o.kt)("td",{parentName:"tr",align:null},"Attempts to run a linter against the go source code.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"go-vet")),(0,o.kt)("td",{parentName:"tr",align:null},"Attempts to examines Go source code and reports suspicious constructs, such as ",(0,o.kt)("inlineCode",{parentName:"td"},"Printf")," calls whose arguments do not align with the format string.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"gosec")),(0,o.kt)("td",{parentName:"tr",align:null},"Inspects source code for security problems by scanning the Go AST. For more see ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/securego/gosec"},"here"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"gen-docs")),(0,o.kt)("td",{parentName:"tr",align:null},"Attempts to generate table of contents for the ",(0,o.kt)("a",{parentName:"td",href:"docs/README.md"},"docs/README")," file in doc folder.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"gofmt")),(0,o.kt)("td",{parentName:"tr",align:null},"Part of ",(0,o.kt)("inlineCode",{parentName:"td"},"golangci-lint")," linter and attempts to format go code")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"varcheck")),(0,o.kt)("td",{parentName:"tr",align:null},"Part of ",(0,o.kt)("inlineCode",{parentName:"td"},"golangci-lint")," linter and used to find unused global variables and constants")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"typecheck")),(0,o.kt)("td",{parentName:"tr",align:null},"Part of ",(0,o.kt)("inlineCode",{parentName:"td"},"golangci-lint")," linter and works like the front-end of a Go compiler, parses and type-checks Go code")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"structcheck")),(0,o.kt)("td",{parentName:"tr",align:null},"Part of ",(0,o.kt)("inlineCode",{parentName:"td"},"golangci-lint")," linter and finds an unused struct fields")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"deadcode")),(0,o.kt)("td",{parentName:"tr",align:null},"Part of ",(0,o.kt)("inlineCode",{parentName:"td"},"golangci-lint")," linter and used to find unused code")))),(0,o.kt)("h1",{id:"troubleshooting-pre-commit-issues"},"Troubleshooting pre-commit issues"),(0,o.kt)("p",null,"[","[Troubleshoot Precommit Hook Failures]","]"))}c.isMDXComponent=!0}}]);
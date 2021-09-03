"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[8805],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7063:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},p="How to Upgrade Go Version",s={unversionedId:"old-wiki/upgrade-go-version",id:"old-wiki/upgrade-go-version",isDocsHomePage:!1,title:"How to Upgrade Go Version",description:"Upgrading the Go version that we use happens in roughly these steps:",source:"@site/docs/old-wiki/upgrade-go-version.md",sourceDirName:"old-wiki",slug:"/old-wiki/upgrade-go-version",permalink:"/docs/old-wiki/upgrade-go-version",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/old-wiki/upgrade-go-version.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How To Unit Test React Components",permalink:"/docs/old-wiki/unit-test-react-components"},next:{title:"How to Upload Electronic Orders Using your CAC",permalink:"/docs/old-wiki/upload-electronic-orders"}},m=[{value:"1. Updating Our Docker Image",id:"1-updating-our-docker-image",children:[]},{value:"2. Upgrade Local Go Version",id:"2-upgrade-local-go-version",children:[]},{value:"3. Update <code>transcom/mymove</code> Repo",id:"3-update-transcommymove-repo",children:[]},{value:"4. Notify Folks",id:"4-notify-folks",children:[]}],c={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-upgrade-go-version"},"How to Upgrade Go Version"),(0,i.kt)("p",null,"Upgrading the Go version that we use happens in roughly these steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#1-updating-our-docker-image"},"Updating our Docker Image:")," Update ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/transcom/circleci-docker"},"transcom/circleci-docker")," to point at an updated Go binary"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#2-upgrade-local-go-version"},"Upgrade Local Go Version:")," Upgrade local Go version with asdf config ",(0,i.kt)("inlineCode",{parentName:"li"},".tool-version")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#3-update-transcommymove-repo"},"Update ",(0,i.kt)("inlineCode",{parentName:"a"},"transcom/mymove")," Repo:")," Create a PR for the ",(0,i.kt)("inlineCode",{parentName:"li"},"transcom/mymove")," repo with the updated docker image hash created in step 1"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#notify-folks"},"Notify Folks:")," Notify everyone that we're updating Go around the time your PR lands")),(0,i.kt)("h2",{id:"1-updating-our-docker-image"},"1. Updating Our Docker Image"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Grab the download URL and SHA256 checksum for the latest 64-bit Linux Go release from ",(0,i.kt)("inlineCode",{parentName:"li"},"https://golang.org/dl/"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The file name should be something like ",(0,i.kt)("inlineCode",{parentName:"li"},"gox.xx.x.linux-amd64.tar.gz")))),(0,i.kt)("li",{parentName:"ul"},"Update any Dockerfile that installs go with the new go version and checksum.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/transcom/circleci-docker/pull/82"},"this PR")," as an example."))),(0,i.kt)("li",{parentName:"ul"},"Open a PR and ask someone from the Truss Infra Team (not necessarily the MilMove Infra Team) to approve it.")),(0,i.kt)("h2",{id:"2-upgrade-local-go-version"},"2. Upgrade Local Go Version"),(0,i.kt)("p",null,"For more details see [","[Manage golang with asdf]","]"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Update ",(0,i.kt)("inlineCode",{parentName:"li"},".tool-versions")," to point to new version of golang",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If you've done some PATH sorcery to point to a specific Go version (as detailed ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove#setup-prerequisites"},"here"),"), you'll have to update that as well"))),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"asdf install")," to install the new version (if you do not yet have it installed, see ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/wiki/Manage-golang-with-asdf#how-to-get-up-and-running"},"How to get up and running"),")"),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"asdf global golang <version>")," to update global version as well"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"go version")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"asdf which go")," to check it worked"),(0,i.kt)("li",{parentName:"ul"},"Add this change to the PR created in the next step")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"\u276f go version\ngo version go1.16.4 darwin/amd64\n\n\u276f asdf which go\n/Users/john/.asdf/installs/golang/1.16.4/go/bin/go\n")),(0,i.kt)("h2",{id:"3-update-transcommymove-repo"},"3. Update ",(0,i.kt)("inlineCode",{parentName:"h2"},"transcom/mymove")," Repo"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After your Docker image PR lands, grab the git hash from ",(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/milmove/circleci-docker"},"Docker")," that corresponds with your merged code."),(0,i.kt)("li",{parentName:"ul"},"Update files with the updated Docker image tag hash and/or Go version:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/6180"},"Example PR")),(0,i.kt)("li",{parentName:"ul"},"Files to update:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".circleci/config.yml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Dockerfile.local")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Dockerfile.migrations_local")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Dockerfile.reviewapp")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Dockerfile.tasks_local")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Dockerfile.tools_local")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Dockerfile.webhook_client")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Dockerfile.webhook_client_local")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cypress/Dockerfile.cypress")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scripts/gen-assets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scripts/gen-server")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scripts/pre-commit-swagger-validate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GOVERSION")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"scripts/prereqs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Makefile")," the ",(0,i.kt)("inlineCode",{parentName:"li"},"docker_circleci")," task"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nix/default.nix")," (you will also need to ",(0,i.kt)("a",{parentName:"li",href:"https://ahobson.github.io/nix-package-search"},"update the hash"),")"))))),(0,i.kt)("li",{parentName:"ul"},"If the major/minor version changed (the first or second number, e.g. 1.x.y to 2.x.y or 1.15.x to 1.16.x):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/transcom/mymove/pull/4990"},"Example PR")),(0,i.kt)("li",{parentName:"ul"},"Update the following files with the new go version:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"go-version")," in ",(0,i.kt)("inlineCode",{parentName:"li"},".github/workflows/be-linter.yml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"go-version")," in ",(0,i.kt)("inlineCode",{parentName:"li"},".github/workflows/go-auto-approve.yml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"VERSION_NUMBER")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"scripts/check-go-version")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"go.mod")))))),(0,i.kt)("li",{parentName:"ul"},"Rerun the Go formatter on the codebase with ",(0,i.kt)("inlineCode",{parentName:"li"},"pre-commit run --all-files golangci-lint")),(0,i.kt)("li",{parentName:"ul"},"Regenerate mocks (in case the signatures have changed that we're mocking): ",(0,i.kt)("inlineCode",{parentName:"li"},"make mocks_generate")),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"make e2e_test_docker")," to test that the ",(0,i.kt)("inlineCode",{parentName:"li"},"Dockerfile.*local")," files work  with the new image."),(0,i.kt)("li",{parentName:"ul"},"Commit the above changes and any reformatted code and make sure everything builds correctly on CircleCI")),(0,i.kt)("h2",{id:"4-notify-folks"},"4. Notify Folks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It can be jarring when everything suddenly breaks after pulling from master, so it's a nice courtesy to notify folks in #prac-engineering in slack that the official Go version will be updated shortly and their local Go version should be upgraded as well"),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"circleci-lint")," has changed as well, then in-flight PRs will need to be formatted before they are merged, lest they break master")))}d.isMDXComponent=!0}}]);
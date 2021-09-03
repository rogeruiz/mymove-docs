"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2215],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2329:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={},s="How to Run Acceptance Tests",c={unversionedId:"old-wiki/run-acceptance-tests",id:"old-wiki/run-acceptance-tests",isDocsHomePage:!1,title:"How to Run Acceptance Tests",description:"Before accepting work to merge into master different feature branches need to go through manual acceptance testing.",source:"@site/docs/old-wiki/run-acceptance-tests.md",sourceDirName:"old-wiki",slug:"/old-wiki/run-acceptance-tests",permalink:"/docs/old-wiki/run-acceptance-tests",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/old-wiki/run-acceptance-tests.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Route Planner Guide",permalink:"/docs/old-wiki/route-planner"},next:{title:"How To Run Against S3 & CDN Locally",permalink:"/docs/old-wiki/run-against-s3-locally"}},p=[{value:"Setup",id:"setup",children:[]},{value:"Running Acceptance Tests",id:"running-acceptance-tests",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-run-acceptance-tests"},"How to Run Acceptance Tests"),(0,r.kt)("p",null,"Before accepting work to merge into master different feature branches need to go through manual acceptance testing.\nThis document will get you set up for that testing and also show you how to run tests against feature branches."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://drive.google.com/drive/folders/1VzFlHuJKnQ4V1TWL5taRi0QkjP6yVzNT"},"Video Walk Through")),(0,r.kt)("p",null,"This setup doc assumes you're new to development environments and that you also haven't set anything up on your\ncomputer to use the terminal. You'll have to do a modified version of what developers typically do to set up their\nmachines. However, if you are a developer you likely have all this set up already."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," Many of these instructions should only be run once. If you run it and have an error then a few of these\ncommands will not work as intended the second time. Please reach out to engineering or infra for help."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Work with the Infrastructure team to ensure you have Github access and an AWS user provisioned")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use the following command ",(0,r.kt)("inlineCode",{parentName:"li"},'/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"')),(0,r.kt)("li",{parentName:"ul"},"Update your ",(0,r.kt)("inlineCode",{parentName:"li"},"$PATH")," in your ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.bash_profile")," with ",(0,r.kt)("inlineCode",{parentName:"li"},'echo "export PATH=$HOME/bin:/usr/local/bin:/usr/local/sbin:/usr/local/opt/openssl/bin:/sbin:$PATH" >> ~/.bash_profile')),(0,r.kt)("li",{parentName:"ul"},"Then update our terminal with the new changes ",(0,r.kt)("inlineCode",{parentName:"li"},"source ~/.bash_profile")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"brew install git"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Get the Project Code"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If you do not have a directory for code then make one and move into it with ",(0,r.kt)("inlineCode",{parentName:"li"},"mkdir -p ~/Projects && cd ~/Projects")),(0,r.kt)("li",{parentName:"ul"},"Visit the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/settings/tokens"},"Github Personal Access Tokens"),' page to generate a new token. Name the token "MY_NAME Truss Repo Token" and select the ',(0,r.kt)("inlineCode",{parentName:"li"},"repo")," permissions and generate. Then copy this token and put it into your 1Password (You will not be able to see it again). You will use this token instead of a password when cloning the repositories. For more on 2FA and Github you can visit ",(0,r.kt)("a",{parentName:"li",href:"https://github.blog/2013-09-03-two-factor-authentication/#how-does-it-work-for-command-line-git"},"Two-factor Authentication with Github"),"."),(0,r.kt)("li",{parentName:"ul"},"Clone the ",(0,r.kt)("inlineCode",{parentName:"li"},"transcom/mymove")," repository to your laptop with ",(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/transcom/mymove.git"),". No username/password should be required."),(0,r.kt)("li",{parentName:"ul"},"Clone the ",(0,r.kt)("inlineCode",{parentName:"li"},"transcom/transcom-infrasec-com")," repository to your laptop with ",(0,r.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/transcom/transcom-infrasec-com.git"),". Your username and password will be needed. The password is the generated personal access token you made previously."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You will need to modify your ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," file to include the hosts required for this project."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"make check_hosts")," and follow any of the instructions that it presents. Those instructions will likely look like:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'echo "127.0.0.1 milmovelocal" | sudo tee -a /etc/hosts\necho "127.0.0.1 officelocal" | sudo tee -a /etc/hosts\necho "127.0.0.1 orderslocal" | sudo tee -a /etc/hosts\necho "127.0.0.1 adminlocal" | sudo tee -a /etc/hosts\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Change directories into the ",(0,r.kt)("inlineCode",{parentName:"p"},"transcom/mymove")," directory and install other dependencies with ",(0,r.kt)("inlineCode",{parentName:"p"},"cd mymove && make docker_compose_setup"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Update your ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.bash_profile")," to install ",(0,r.kt)("inlineCode",{parentName:"p"},"direnv")," correctly."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"With this command: ",(0,r.kt)("inlineCode",{parentName:"li"},'echo "if command -v direnv >/dev/null; then eval \\"\\$(direnv hook bash)\\"; fi" >> ~/.bash_profile')),(0,r.kt)("li",{parentName:"ul"},"Then update our terminal with the new changes ",(0,r.kt)("inlineCode",{parentName:"li"},"source ~/.bash_profile")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Edit your ",(0,r.kt)("inlineCode",{parentName:"p"},".envrc.local")," file and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"PPP_INFRA_PATH")," to point at the directory for ",(0,r.kt)("inlineCode",{parentName:"p"},"transcom/transcom-infrasec-com")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"With this command: ",(0,r.kt)("inlineCode",{parentName:"li"},'echo "export PPP_INFRA_PATH=$HOME/Projects/transcom/transcom-infrasec-com" >> ~/Projects/mymove/.envrc.local')),(0,r.kt)("li",{parentName:"ul"},"Now set up everything by running ",(0,r.kt)("inlineCode",{parentName:"li"},"direnv allow")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Confirm with the Infrastructure team that you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"aws")," command. Try ",(0,r.kt)("inlineCode",{parentName:"p"},"aws s3 ls"),"."))),(0,r.kt)("p",null,"At this point you should be ready to start running Acceptance Tests."),(0,r.kt)("h2",{id:"running-acceptance-tests"},"Running Acceptance Tests"),(0,r.kt)("p",null,"The first step in running acceptance tests is getting the branch name for the feature you wish to test.\nA developer should be able to link you to the branch name in Pivotal or you can ask them directly. For this\nset of instructions we'll use ",(0,r.kt)("inlineCode",{parentName:"p"},"branch_name"),". From the terminal run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~/Projects/mymove\ngit pull\ngit checkout branch_name\ndirenv allow\nmake docker_compose_up\n")),(0,r.kt)("p",null,"At this point the server should be running and a lot of text will be scrolling by the screen. This is expected."),(0,r.kt)("p",null,"To log into the server you must browse to one of these websites:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://milmovelocal:4000/devlocal-auth/login"},"Service Member login")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://officelocal:4000/devlocal-auth/login"},"Office login")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://adminlocal:4000/devlocal-auth/login"},"Admin login"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," Unlike in development there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"Local Sign In")," button. This is because the production builds are\nspecifically disallowed from compiling that button into what we would deliver to production as a safety measure."),(0,r.kt)("p",null,"At this point you can run through any user flows that allow you test the feature and accept that it meets the\nrequirements needed for acceptance."),(0,r.kt)("p",null,"Finally, remember to shut down the working server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"make docker_compose_down\n")),(0,r.kt)("p",null,"This should clean up the docker images downloaded to your computer and stop any running processes."))}m.isMDXComponent=!0}}]);
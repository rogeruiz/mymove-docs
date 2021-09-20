"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[6188],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),m=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(n),h=r,d=u["".concat(p,".").concat(h)]||u[h]||s[h]||a;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2030:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return c},default:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={},p="How to Deploy to Experimental or Demo",m={unversionedId:"vault/confluence/deploy-to-experimental",id:"vault/confluence/deploy-to-experimental",isDocsHomePage:!1,title:"How to Deploy to Experimental or Demo",description:"Experimental is the MilMove environment that can be used to test out a code change in a branch in a safe way. This is especially good if you'd like Product, Design, or the client to test out the change before you merge the code in. It's also a good decision to use experimental to test out particularly risky changes like changes to containers, app startup, connection to data stores, secure migrations and data loads.",source:"@site/docs/vault/confluence/deploy-to-experimental.md",sourceDirName:"vault/confluence",slug:"/vault/confluence/deploy-to-experimental",permalink:"/mymove-docs/docs/vault/confluence/deploy-to-experimental",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/vault/confluence/deploy-to-experimental.md",tags:[],version:"current",frontMatter:{},sidebar:"vaultSidebar",previous:{title:"How To Create or Deactivate Users",permalink:"/mymove-docs/docs/vault/confluence/create-or-deactivate-users"},next:{title:"MilMove Application Metrics",permalink:"/mymove-docs/docs/vault/confluence/metrics"}},c=[{value:"How to do it",id:"how-to-do-it",children:[]},{value:"I&#39;ve got a server-side feature flag",id:"ive-got-a-server-side-feature-flag",children:[]},{value:"I have a PR that must be reviewed in experimental before it can be approved",id:"i-have-a-pr-that-must-be-reviewed-in-experimental-before-it-can-be-approved",children:[]},{value:"Don&#39;t forget to clean up your branch before a merge",id:"dont-forget-to-clean-up-your-branch-before-a-merge",children:[]},{value:"Deploy a Secure Migration to Experimental or Demo",id:"deploy-a-secure-migration-to-experimental-or-demo",children:[]}],s={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-deploy-to-experimental-or-demo"},"How to Deploy to Experimental or Demo"),(0,a.kt)("p",null,"Experimental is the MilMove environment that can be used to test out a code change in a branch in a safe way. This is especially good if you'd like Product, Design, or the client to test out the change before you merge the code in. It's also a good decision to use experimental to test out particularly risky changes like changes to containers, app startup, connection to data stores, secure migrations and data loads."),(0,a.kt)("p",null,"Demo is the MilMove environment that can be used for things like MilMobbing, user testing, acceptance testing or other activities that are expected to keep the environment in a particular state for some length of time. "),(0,a.kt)("p",null,"Read more about our ",(0,a.kt)("a",{parentName:"p",href:"Deployment-Process"},"deployed environments here"),"."),(0,a.kt)("h2",{id:"how-to-do-it"},"How to do it"),(0,a.kt)("p",null,"To deploy to experimental or demo, you'll need to trigger the CircleCI workflow to include the deploy to steps specific to the environment."),(0,a.kt)("p",null,"Edit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/.circleci/config.yml"},"the config file")," by replacing all instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"placeholder_branch_name")," with your branch name. Pay particular attention to the job name for the environment you are deploying to, ",(0,a.kt)("inlineCode",{parentName:"p"},"exp")," vs ",(0,a.kt)("inlineCode",{parentName:"p"},"demo"),". "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"deploy_demo_tasks:\n  requires:\n    - deploy_demo_migrations\n  filters:\n    branches:\n      only: placeholder_branch_name\n")),(0,a.kt)("p",null,"vs"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"deploy_demo_tasks:\n  requires:\n    - deploy_exp_migrations\n  filters:\n    branches:\n      only: placeholder_branch_name\n")),(0,a.kt)("p",null,"You'll also want to update any of the lines which refer to tests, which have comments like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# if testing on experimental or demo, you can disable these tests by using your branch name here\n  filters:\n    branches:\n      ignore: placeholder_branch_name\n")),(0,a.kt)("p",null,"The workflow for experimental and demo is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Announce deploys to experimental in the ",(0,a.kt)("inlineCode",{parentName:"p"},"#experimental-env")," slack channel or demo  in the ",(0,a.kt)("inlineCode",{parentName:"p"},"#demo-env")," channel at least 20 minutes before you intend to deploy. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Try to get a \ud83d\udc4d from someone who is commonly using the environment. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If no one comments in that time-frame, feel free to deploy. Only one person can use the given environment at the same time. Any new deploys will overwrite what is currently in that environment.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When you push up to GitHub and open a PR, it'll trigger the CircleCI workflow to start immediately. You can view its progress on ",(0,a.kt)("a",{parentName:"p",href:"https://circleci.com/gh/transcom/workflows/mymove"},"CircleCI's UI")," and clicking on your branch."),(0,a.kt)("p",{parentName:"li"},"If it has succeeded, then it should be available immediately on the appropriate environment link:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://my.exp.move.mil/"},"Customer (Service Member) experimental")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://office.exp.move.mil/"},"Office experimental")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://my.demo.dp3.us/"},"Customer demo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://office.demo.dp3.us/"},"Office demo"))),(0,a.kt)("p",{parentName:"li"},"You should also be able to check the health to verify that your branch/commit is properly deployed:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://my.exp.move.mil/health"},"Experimental health")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://my.demo.dp3.us/health"},"Demo health")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Once you are done, announce that you are releasing the environment in the ",(0,a.kt)("inlineCode",{parentName:"p"},"#experimental-env")," slack channel. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Don't forget to ",(0,a.kt)("a",{parentName:"p",href:"#dont-forget-to-clean-up-your-branch-before-a-merge"},"clean up")," before you merge your branch."))),(0,a.kt)("h2",{id:"ive-got-a-server-side-feature-flag"},"I've got a server-side feature flag"),(0,a.kt)("p",null,"You'll need to add it to the environment config file ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/config/env/exp.app.env"},"experimental config file")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/config/env/demo.app.env"},"demo config file"),". In ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/config/app.container-definition.json"},"the container config file")," you'll need to add it by using mustache syntax."),(0,a.kt)("h2",{id:"i-have-a-pr-that-must-be-reviewed-in-experimental-before-it-can-be-approved"},"I have a PR that must be reviewed in experimental before it can be approved"),(0,a.kt)("p",null,'If you have a PR that must be tested in experimental to confirm that it is functioning as intended, you may leave the commit that enables the experimental deployment for the reviewers. This will allow reviewers to click "Re-Run" on the CircleCI flow to redeploy experimental whenever they are ready to test your PR.'),(0,a.kt)("p",null,"However, each reviewer ",(0,a.kt)("strong",{parentName:"p"},"MUST")," follow the same conventions before re-running the workflow:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check in the #experimental-env channel that no one else is currently using the experimental environment."),(0,a.kt)("li",{parentName:"ul"},"Post in #experimental-env declaring your intent to claim the environment, giving folks time to speak up if they are still using it."),(0,a.kt)("li",{parentName:"ul"},"Post an update in this channel once you are done testing that the environment is once again available for others to use.")),(0,a.kt)("p",null,"Once the reviewers are done testing, make sure to revert the environment commit as mentioned in ",(0,a.kt)("a",{parentName:"p",href:"#Dont-forget-to-clean-up-your-branch-before-a-merge"},"Don't forget to clean up your branch"),"."),(0,a.kt)("h2",{id:"dont-forget-to-clean-up-your-branch-before-a-merge"},"Don't forget to clean up your branch before a merge"),(0,a.kt)("p",null,"All of the ",(0,a.kt)("a",{parentName:"p",href:"#How-to-do-it"},"how to do it instructions")," need to be reverted so all future branches don't get deployed to experimental or demo. Also, be sure to announce in ",(0,a.kt)("inlineCode",{parentName:"p"},"#experimental-env")," that the environment is available for someone else to use!"),(0,a.kt)("h2",{id:"deploy-a-secure-migration-to-experimental-or-demo"},"Deploy a Secure Migration to Experimental or Demo"),(0,a.kt)("p",null,"Follow the instructions ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/wiki/migrate-the-database#secure-migrations-for-one-environment"},"here")," to deploy a secure migration to a single environment (either demo, experimental, prod, staging)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WARNING:")," If you run a migration in experimental/demo and either change it before merging or decide not to merge it at all, the Infrasec team will need to restore the environment's database from the snapshot taken before the migration was applied. Otherwise, there could be DB changes in the environment that don\u2019t match what\u2019s in master or dev/stg/prd. Keep this in mind when testing migrations, and make sure to communicate with the folks in #g-database and #prac-infrasec in order to avoid unexpected complications/errors with future experimental/demo deployments."))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[7106],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9378:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={},l="Database Guides",p={unversionedId:"old-wiki/database",id:"old-wiki/database",isDocsHomePage:!1,title:"Database Guides",description:"* [[How To Backup and Restore the Development Database|backup-and-restore-dev-database]]",source:"@site/docs/old-wiki/database.md",sourceDirName:"old-wiki",slug:"/old-wiki/database",permalink:"/docs/old-wiki/database",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/old-wiki/database.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How To Create or Deactivate Users",permalink:"/docs/old-wiki/create-or-deactivate-users"},next:{title:"How to Deploy to Experimental or Demo",permalink:"/docs/old-wiki/deploy-to-experimental"}},c=[{value:"Pop SQL logging on by default in development",id:"pop-sql-logging-on-by-default-in-development",children:[{value:"Some problems to look out for with SQL logging on",id:"some-problems-to-look-out-for-with-sql-logging-on",children:[]}]},{value:"Using RDS IAM for database authentication",id:"using-rds-iam-for-database-authentication",children:[{value:"Locally connecting to RDS using IAM authentication",id:"locally-connecting-to-rds-using-iam-authentication",children:[]},{value:"ECS Task connecting to RDS using IAM authentication",id:"ecs-task-connecting-to-rds-using-iam-authentication",children:[]},{value:"Reverting Task to use password authentication",id:"reverting-task-to-use-password-authentication",children:[]}]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"database-guides"},"Database Guides"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"[","[How To Backup and Restore the Development Database|backup-and-restore-dev-database]","]"),(0,i.kt)("li",{parentName:"ul"},"[","[How To Migrate the Database|database-migrations]","]"),(0,i.kt)("li",{parentName:"ul"},"[","[How To Soft Delete|soft-delete]","]"),(0,i.kt)("li",{parentName:"ul"},"[","[Using EagerPreload in Pop]","]"),(0,i.kt)("li",{parentName:"ul"},"[","[How database cleanup works in Go server tests]","]"),(0,i.kt)("li",{parentName:"ul"},"[","[Understanding Testdatagen Functions]","]")),(0,i.kt)("h2",{id:"pop-sql-logging-on-by-default-in-development"},"Pop SQL logging on by default in development"),(0,i.kt)("p",null,"Pop is an ORM which helps ease communication with the database by providing database API abstraction code. However, this can obscure the actual SQL that is being executed without a in-depth knowledge of the ORM. By enabling SQL logging in development a developer can see the queries being executed by Pop as they happen to hopefully help developers to catch issues in the setup of database calls with Pop."),(0,i.kt)("p",null,"If you want to turn this off ",(0,i.kt)("em",{parentName:"p"},"temporarily"),", just prefix your command with ",(0,i.kt)("inlineCode",{parentName:"p"},"DB_DEBUG=0")," for example:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"DB_DEBUG=0 make server_run")),(0,i.kt)("p",null,"If you need to turn this off ",(0,i.kt)("em",{parentName:"p"},"permanently")," on your local instance add the following to the ",(0,i.kt)("inlineCode",{parentName:"p"},".envrc.local")," file"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"export DB_DEBUG=0")),(0,i.kt)("h3",{id:"some-problems-to-look-out-for-with-sql-logging-on"},"Some problems to look out for with SQL logging on"),(0,i.kt)("h4",{id:"excessive-queries-eg-n1-problem"},"Excessive Queries (e.g. n+1 Problem)"),(0,i.kt)("p",null,"When looking up objects that have a one-to-many relationship, ORMs such as Pop can fire off n+1 queries to the database to do the look up for n number of child objects + 1 for the original parent object. Depending on the size of n this will cause performance issues loading such lists of objects that have many children. To help prevent this in Pop, developers should avoid using unbounded ",(0,i.kt)("inlineCode",{parentName:"p"},"Eager()")," calls and try and only fetch children when that data is needed. For more through description of the issue please read the following references."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/97197/what-is-the-n1-selects-problem-in-orm-object-relational-mapping"},'What is the "N+1 selects problem" in Object-Relational Mapping?')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@bretdoucette/n-1-queries-and-how-to-avoid-them-a12f02345be5"},"N+1 Queries and How to Avoid Them!")," -- This uses examples from Ruby on Rails but the concept is the same")),(0,i.kt)("p",null,"With our new version of Pop, there is a feature called EagerPreload that helps us mitigate the N+1 problem. "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"Using-EagerPreload-in-Pop"},"Read this article")," to know how to use it properly. "),(0,i.kt)("h4",{id:"excessive-joins-eg-open-ended-eager-call"},"Excessive Joins (e.g. open-ended ",(0,i.kt)("em",{parentName:"h4"},"Eager")," call)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.xaprb.com/blog/2009/04/08/the-dangerous-subtleties-of-left-join-and-count-in-sql/"},"The Dangerous Subtleties of LEFT JOIN and COUNT() in SQL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://alexpetralia.com/posts/2017/7/19/more-dangerous-subtleties-of-joins-in-sql"},"More Dangerous Subtleties of JOINs in SQL"))),(0,i.kt)("h2",{id:"using-rds-iam-for-database-authentication"},"Using RDS IAM for database authentication"),(0,i.kt)("p",null,"RDS IAM authentication is the method of connecting to the database using IAM as the authentication mechanism as opposed to a conventional username and password. More information can be found ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html"},"here"),"."),(0,i.kt)("h3",{id:"locally-connecting-to-rds-using-iam-authentication"},"Locally connecting to RDS using IAM authentication"),(0,i.kt)("p",null,"An RDS instance must be configured with IAM authentication before connecting. All RDS in the MilMove environment has this enabled. If wishing to connect to a RDS instance first prepare the infrastructure to allow this with this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/transcom-infrasec-com/blob/master/docs/runbook/0009-accessing-the-db-with-iam.md"},"guide"),". Once complete locally milmove server can be ran with the following"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/path/to/milmove serve --db-iam --db-iam-role arn:aws:iam::AWSACCOUNT:role/CONNECTROLE  --db-region us-east-2 --db-host RDSURL  --db-ssl-mode verify-full --db-ssl-root-cert bin/rds-ca-2019-root.pem  --db-user db_user\n")),(0,i.kt)("h3",{id:"ecs-task-connecting-to-rds-using-iam-authentication"},"ECS Task connecting to RDS using IAM authentication"),(0,i.kt)("p",null,"ECS tasks such use RDS IAM authentication to securely connect without a username or passwords to rotate. This is accomplished by ECS assigning a role to the container that is allowed to connect to a specific database via IAM."),(0,i.kt)("p",null,"The MilMove server through the use of environment variables will use reach out to IAM to generate a temporary connection token, almost similar to a password. This token/password is valid for only 15 minutes. To enable IAM authentication ensure these environment variables are present for ",(0,i.kt)("inlineCode",{parentName:"p"},"app"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"app-client-tls"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"migration")," containers. Here is a snippet of the required environment ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/6426a37eaf0219323aef997deed5a43e0e1a824b/config/app.container-definition.json#L32-L39"},"variables")," for the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/config/app.container-definition.json"},"app.container-definition.json")," that is deployed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "DB_IAM",\n  "value": "{{ .DB_IAM }}"\n},\n{\n  "name": "DB_IAM_ROLE",\n  "value": "{{ .DB_IAM_ROLE }}"\n},\n{\n  "name": "DB_REGION",\n  "value": "us-west-2"\n},\n{\n  "name": "DB_USER",\n  "value": "{{ .DB_USER }}"\n},\n')),(0,i.kt)("p",null,"Update the related environment configuration to match. Note that the database user is normally different than ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," as additional configuration is needed to allow a database user to login via IAM. MilMove convention for IAM enabled user is ",(0,i.kt)("inlineCode",{parentName:"p"},"ecs_user"),". Below is a snippet of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/config/env/experimental.env"},"experimental environment config"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"DB_USER=ecs_user\nDB_IAM=true\nDB_IAM_ROLE=YOUR_CONTAINER_ROLE_ARN_HERE\n")),(0,i.kt)("h3",{id:"reverting-task-to-use-password-authentication"},"Reverting Task to use password authentication"),(0,i.kt)("p",null,"In the event of a IAM failure it may be desired to revert back to conventional username and password authentication."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Get password from Infra from the admin vault in DP3 1Password.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update the Parameter store with the new password")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chamber write app-YOURENV db_password NEW_PASSWORD\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update the environment configuration files to disable IAM authentication. Keep in mind the database ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," will need to be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"master"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"DB_USER=master\nDB_IAM=false\n")))))}d.isMDXComponent=!0}}]);
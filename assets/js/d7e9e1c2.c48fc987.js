"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[2214],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),u=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return a?i.createElement(f,o(o({ref:t},c),{},{components:a})):i.createElement(f,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},24913:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=a(87462),n=(a(67294),a(3905));const r={sidebar_position:1},o="Users in MilMove",s={unversionedId:"about/security/user-management",id:"about/security/user-management",title:"Users in MilMove",description:"All users in MilMove are associated with a single login.gov account. These users can be one of three types within MilMove.",source:"@site/docs/about/security/user-management.md",sourceDirName:"about/security",slug:"/about/security/user-management",permalink:"/mymove-docs/docs/about/security/user-management",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/about/security/user-management.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"aboutSidebar",previous:{title:"Overview",permalink:"/mymove-docs/docs/about/overview-of-milmove"},next:{title:"DoD Certificates",permalink:"/mymove-docs/docs/about/security/dod-certs"}},l={},u=[{value:"MilMove User",id:"milmove-user",level:2},{value:"Available Roles for MilMove Users",id:"available-roles-for-milmove-users",level:3},{value:"Customer",id:"customer",level:4},{value:"Creating a MilMove User",id:"creating-a-milmove-user",level:3},{value:"Deactivating a MilMove User",id:"deactivating-a-milmove-user",level:3},{value:"Office User",id:"office-user",level:2},{value:"Available Roles for Office Users",id:"available-roles-for-office-users",level:3},{value:"Service Counselor",id:"service-counselor",level:4},{value:"Transportation Ordering Officer (TOO)",id:"transportation-ordering-officer-too",level:4},{value:"Transportation Invoicing Officer (TIO)",id:"transportation-invoicing-officer-tio",level:4},{value:"Creating an Office User",id:"creating-an-office-user",level:3},{value:"Deactivating an Office User",id:"deactivating-an-office-user",level:3},{value:"Bulk Uploading Office Users",id:"bulk-uploading-office-users",level:3},{value:"Admin User",id:"admin-user",level:2},{value:"Available Roles for Admin Users",id:"available-roles-for-admin-users",level:3},{value:"Admin",id:"admin",level:4},{value:"Creating an Admin User",id:"creating-an-admin-user",level:3},{value:"Deactivating an Admin User",id:"deactivating-an-admin-user",level:3},{value:"Deactivating Users",id:"deactivating-users",level:2},{value:"Deactivate the User",id:"deactivate-the-user",level:3},{value:"Revoke a Session",id:"revoke-a-session",level:3},{value:"Login.gov",id:"logingov",level:2},{value:"Session IDs",id:"session-ids",level:3},{value:"Local Sign In",id:"local-sign-in",level:2},{value:"DB tables",id:"db-tables",level:2}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"users-in-milmove"},"Users in MilMove"),(0,n.kt)("p",null,"All users in MilMove are associated with a single login.gov account. These users can be one of three types within MilMove."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MilMove User"),(0,n.kt)("li",{parentName:"ul"},"Office User"),(0,n.kt)("li",{parentName:"ul"},"Admin User")),(0,n.kt)("h2",{id:"milmove-user"},"MilMove User"),(0,n.kt)("p",null,"A person who\u2019s been issued PCS orders who is logged in through the customer-facing MilMove app. They can be an active duty service members, a civilian who works for the military, the relative of a service member who\u2019s setting up a move on their behalf (typically a spouse, sometimes a parent), or even a services counselor working on the actual customer\u2019s behalf."),(0,n.kt)("h3",{id:"available-roles-for-milmove-users"},"Available Roles for MilMove Users"),(0,n.kt)("h4",{id:"customer"},"Customer"),(0,n.kt)("p",null,"A customer is someone using MilMove to book (or set up) a PCS move from one military installation to another.\nMost customers are service members on active duty, but a customer can also be a civilian who works for the military, or the relative of a service member who\u2019s setting up a move on their behalf. (Typically a spouse, sometimes a parent.)"),(0,n.kt)("p",null,"A customer can submit a move request on MilMove for an HHG shipment to or from a CONUS destination."),(0,n.kt)("p",null,"The user role of customer is automatically assigned to a MilMove user."),(0,n.kt)("h3",{id:"creating-a-milmove-user"},"Creating a MilMove User"),(0,n.kt)("p",null,"Users of MilMove create their own accounts through the MilMove app, through login.gov as mentioned above."),(0,n.kt)("h3",{id:"deactivating-a-milmove-user"},"Deactivating a MilMove User"),(0,n.kt)("p",null,"Only admins can deactivate users. The instructions are the same for all types of users. ",(0,n.kt)("a",{parentName:"p",href:"#deactivating-users"},"See below"),"."),(0,n.kt)("h2",{id:"office-user"},"Office User"),(0,n.kt)("p",null,"The users of the office app are USTC employees who administer the moves by approving various parts of the process as it moves forward. They focus on making sure the customer\u2019s move goes well, and that the government pays for everything it\u2019s supposed to but is not overcharged or paying for things it\u2019s not supposed to."),(0,n.kt)("h3",{id:"available-roles-for-office-users"},"Available Roles for Office Users"),(0,n.kt)("h4",{id:"service-counselor"},"Service Counselor"),(0,n.kt)("p",null,"A counselor is someone who is an expert at moving in the military. A session with a counselor is provided to customers to ensure that they\u2019re getting all of their entitlements and they\u2019re making realistic choices about their move."),(0,n.kt)("p",null,"A \u201cservice counselor\u201d is a counselor paid for by one or more of the services (Navy, Army, etc.). There\u2019s a counselor role on the Prime side, as well. If the Prime performs counseling, they are paid a move-level service fee. A customer will be offered counseling from one of those two roles, but not both."),(0,n.kt)("p",null,"A counselor\u2019s goal is to speak with each customer about their move planning and make any necessary updates to their move record in MilMove."),(0,n.kt)("p",null,"Service counselors can add information to MilMove, and it can be shared with the Prime Contractor and other people involved in the process to make decisions about the move."),(0,n.kt)("p",null,"In addition:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Counselors rely on search in order to find a specific move (i.e. if the customer has a scheduled counseling appointment, or if the customer contacts the counselor to make a change)."),(0,n.kt)("li",{parentName:"ul"},"Moves are assigned to counselors based on origin duty station. The exception is Marines, who are assigned to a USMC counselor based on branch of service."),(0,n.kt)("li",{parentName:"ul"},"All moves must receive either services or Prime counseling.")),(0,n.kt)("h4",{id:"transportation-ordering-officer-too"},"Transportation Ordering Officer (TOO)"),(0,n.kt)("p",null,"A Transportation Ordering Officer (TOO), who sits in a JPPSO office, performs the following jobs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reviews customer info and orders"),(0,n.kt)("li",{parentName:"ul"},"Creates Move Task Orders"),(0,n.kt)("li",{parentName:"ul"},"Review requested service items from GHC Prime (and eventually NTS Prime), and approve or reject them."),(0,n.kt)("li",{parentName:"ul"},"Review additional shipments from Prime"),(0,n.kt)("li",{parentName:"ul"},"Authorizes the Prime to move weight in excess of their allowance"),(0,n.kt)("li",{parentName:"ul"},"Reviews/approves orders amendments")),(0,n.kt)("p",null,"The TOO uses the web interface in Office App to perform these tasks."),(0,n.kt)("h4",{id:"transportation-invoicing-officer-tio"},"Transportation Invoicing Officer (TIO)"),(0,n.kt)("p",null,"A Transportation Invoicing Officer (TIO), who sits in a JPPSO office, conducts the following tasks:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Reviews payment requests and accompanying proof of service documentation from the Prime"),(0,n.kt)("li",{parentName:"ul"},"Approves or rejects payment for service items"),(0,n.kt)("li",{parentName:"ul"},"Authorizes payment to the Prime")),(0,n.kt)("p",null,"The TIO uses the web interface in Office App to perform these tasks."),(0,n.kt)("h3",{id:"creating-an-office-user"},"Creating an Office User"),(0,n.kt)("p",null,"Only admins can create an Office User."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Admin App > Office Users > Create")),(0,n.kt)("li",{parentName:"ul"},"Fill out the form for the user."),(0,n.kt)("li",{parentName:"ul"},"You must use the email they will use to create their login.gov account."),(0,n.kt)("li",{parentName:"ul"},"Give them the appropriate role. Note in test environments, you can assign more than one role so that the user can test as either role.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create office user dialog",src:a(56048).Z,width:"689",height:"796"})),(0,n.kt)("h3",{id:"deactivating-an-office-user"},"Deactivating an Office User"),(0,n.kt)("p",null,"Only admins can deactivate users. The instructions are the same for all types of users. ",(0,n.kt)("a",{parentName:"p",href:"#deactivating-users"},"See below"),"."),(0,n.kt)("h3",{id:"bulk-uploading-office-users"},"Bulk Uploading Office Users"),(0,n.kt)("p",null,"If there are multiple Office Users that need to be added to Milmove, this can be done in the Admin Console."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Admin App > Office Users > Import")),(0,n.kt)("li",{parentName:"ul"},"You will see a table view of Office Users, and above that table an ",(0,n.kt)("strong",{parentName:"li"},"Import")," button."),(0,n.kt)("li",{parentName:"ul"},"When ",(0,n.kt)("strong",{parentName:"li"},"Import")," is selected, a pop up screen will show up for the Admin User to import a CSV.\n",(0,n.kt)("img",{alt:"Office User Import Button",src:a(72528).Z,width:"1906",height:"442"}))),(0,n.kt)("p",null,"The CSV updated must have the following ",(0,n.kt)("strong",{parentName:"p"},"required")," column titles:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"email")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"firstName")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"middleInitials")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"lastName")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"telephone")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"transportationOfficeId")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"roles"))),(0,n.kt)("p",null,"The following content must be filled out for each Office User:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"email")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"first name")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"last name")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"telephone")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"transportation office ID")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"office user role"),(0,n.kt)("img",{alt:"CSV Example",src:a(18654).Z,width:"1004",height:"158"}))),(0,n.kt)("p",null,"Validation checks:\nValidators have been added to the Admin console in order to check for errors. If a validator check fails, an error will be thrown and an error message will appear to guide the user in making the appropriate corrections. The following validations are checked:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"All required fields are present"),(0,n.kt)("li",{parentName:"ul"},"Phone numbers are formatted ",(0,n.kt)("inlineCode",{parentName:"li"},"xxx-xxx-xxxx")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Roles provided are valid office user roles (i.e. transportation_ordering_officer, transportation_invoicing_officer, contracting_officer, ppm_office_users, services_counselor).")))),(0,n.kt)("p",null,"NOTE: In order for new Office users to log in to the office app, make sure that each Office User has first created an account with login.gov."),(0,n.kt)("h2",{id:"admin-user"},"Admin User"),(0,n.kt)("p",null,"The admin app is used to administrate ",(0,n.kt)("em",{parentName:"p"},"the software")," (not to be confused by admins such as the TOO and TIO that administrate ",(0,n.kt)("em",{parentName:"p"},"the move"),"). The users of the office app are select USTC employees and some Truss developers."),(0,n.kt)("h3",{id:"available-roles-for-admin-users"},"Available Roles for Admin Users"),(0,n.kt)("h4",{id:"admin"},"Admin"),(0,n.kt)("p",null,"An admin user utilizes the admin app to preform users management and other tasks associated with administering the software."),(0,n.kt)("p",null,"When an admin user is created, the role of admin is automatically assigned."),(0,n.kt)("h3",{id:"creating-an-admin-user"},"Creating an Admin User"),(0,n.kt)("p",null,"Only admins can create an Admin User."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Admin App > Admin Users > Create")),(0,n.kt)("li",{parentName:"ul"},"Fill out the form for the user."),(0,n.kt)("li",{parentName:"ul"},"You must use the email they will use to create their login.gov account.")),(0,n.kt)("h3",{id:"deactivating-an-admin-user"},"Deactivating an Admin User"),(0,n.kt)("p",null,"Only admins can deactivate admin users. The instructions are the same for all types of users. ",(0,n.kt)("a",{parentName:"p",href:"#deactivating-users"},"See below"),"."),(0,n.kt)("h2",{id:"deactivating-users"},"Deactivating Users"),(0,n.kt)("p",null,"Admins can deactivate all types of users. It's easiest to know their login.gov email to do this."),(0,n.kt)("p",null,"Go to ",(0,n.kt)("strong",{parentName:"p"},"Admin App > Users > Click on the User > Edit")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"User Deactivation Dialog",src:a(37181).Z,width:"607",height:"584"})),(0,n.kt)("h3",{id:"deactivate-the-user"},"Deactivate the User"),(0,n.kt)("p",null,"When you deactivate a user, it revokes all their sessions (logging them out immediately) and stops them from logging back in.\nSet Active to No to deactivate the user and revoke all sessions.\nThe user won't be able to login or continue their session."),(0,n.kt)("p",null,"If they were an office or admin user, it will also deactivate them as office or admin. If you reactivate them, you will have to go back into those sections and make them admin or office again."),(0,n.kt)("h3",{id:"revoke-a-session"},"Revoke a Session"),(0,n.kt)("p",null,"If you only want to log them out of a session, there are three dropdowns to revoke sessions. Select Yes for the session you would like to revoke."),(0,n.kt)("p",null,"This will disrupt the user's current session but they can always log back in."),(0,n.kt)("h1",{id:"technical-things"},"Technical Things"),(0,n.kt)("h2",{id:"logingov"},"Login.gov"),(0,n.kt)("p",null,"This project uses login.gov for identity management. Login.gov provides a lot of nice options for user management and is a FedRamp approved service."),(0,n.kt)("p",null,"Login.gov requires 2FA for which it provides a multitude of options:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Security key"),(0,n.kt)("li",{parentName:"ul"},"Authentication application"),(0,n.kt)("li",{parentName:"ul"},"Government ID"),(0,n.kt)("li",{parentName:"ul"},"Phone"),(0,n.kt)("li",{parentName:"ul"},"Backup codes")),(0,n.kt)("h3",{id:"session-ids"},"Session IDs"),(0,n.kt)("p",null,"Once we confirm the login, we check that the user is ",(0,n.kt)("inlineCode",{parentName:"p"},"active")," in the users table. If so, we create and store session IDs for the user in the ",(0,n.kt)("inlineCode",{parentName:"p"},"users")," table."),(0,n.kt)("p",null,"Since we have multiple apps, we have multiple types of session IDs."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Office Session ID"),(0,n.kt)("li",{parentName:"ul"},"Admin Session ID"),(0,n.kt)("li",{parentName:"ul"},"MilMove Session ID")),(0,n.kt)("p",null,"These can be ",(0,n.kt)("a",{parentName:"p",href:"#deactivating-users"},"revoked separately"),"."),(0,n.kt)("h2",{id:"local-sign-in"},"Local Sign In"),(0,n.kt)("p",null,"When you run any of the apps locally, there is also an option to select ",(0,n.kt)("strong",{parentName:"p"},"Local Sign In"),"."),(0,n.kt)("p",null,"Since login.gov requires setup of a 2FA, this is just a more convenient login to use for testing. We usually have a few pre-created users for various scenarios as well."),(0,n.kt)("p",null,"Note, ",(0,n.kt)("strong",{parentName:"p"},"using local sign-in does not create session IDs")," and store them in the ",(0,n.kt)("inlineCode",{parentName:"p"},"users")," table. So, you can't deactivate these users or revoke the sessions using the Admin app."),(0,n.kt)("h2",{id:"db-tables"},"DB tables"),(0,n.kt)("p",null,"Also good to know, we have ",(0,n.kt)("strong",{parentName:"p"},"more than one table for user information"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"users")," - This table should contain all users and their login.gov email. Every user that creates an account associated with login.gov ends up with an entry here. There are also columns for each of the session ids in this table.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"service_members")," If a user is a MilMove user, they have an entry here with a foreign key link to their entry in the ",(0,n.kt)("inlineCode",{parentName:"p"},"user")," table.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"admin_users")," If a user is an admin user, they have an entry here with a foreign key link to their entry in the ",(0,n.kt)("inlineCode",{parentName:"p"},"user")," table. There is a role column but it appears to not be used.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"office_users")," If a user is an office user, they have an entry here with a foreign key link to their entry in the ",(0,n.kt)("inlineCode",{parentName:"p"},"users")," table."))),(0,n.kt)("p",null,"Note, the ",(0,n.kt)("inlineCode",{parentName:"p"},"users")," table is also linked to a ",(0,n.kt)("inlineCode",{parentName:"p"},"user_roles")," table that seems to link users to their Office-related roles but is not really used for MilMove app or Admin Roles."))}m.isMDXComponent=!0},56048:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/create-office-user-84ffd355a2fa87436a3b943a1857ed30.png"},37181:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/deactivate-user-08fe243ecf47a670b3dc3e1507bd98ef.png"},72528:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/office-users-import-button-105805fab1cde8b0693526705ed04af2.png"},18654:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/sample-office-user-csv-bulk-upload-bfc0cd71abf5a5a5c2a3565837797d17.png"}}]);
"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[7532],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,f=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(f,r(r({ref:t},p),{},{components:n})):o.createElement(f,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7300:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],s={},c=void 0,l={unversionedId:"dev/testing/running-tests/Acceptance-Testing-Notifications",id:"dev/testing/running-tests/Acceptance-Testing-Notifications",isDocsHomePage:!1,title:"Acceptance-Testing-Notifications",description:"Acceptance Testing Notifications",source:"@site/docs/dev/testing/running-tests/Acceptance-Testing-Notifications.md",sourceDirName:"dev/testing/running-tests",slug:"/dev/testing/running-tests/Acceptance-Testing-Notifications",permalink:"/mymove-docs/docs/dev/testing/running-tests/Acceptance-Testing-Notifications",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/testing/running-tests/Acceptance-Testing-Notifications.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"Testing",permalink:"/mymove-docs/docs/dev/testing/"},next:{title:"Acceptance-Testing-Payment-Requests",permalink:"/mymove-docs/docs/dev/testing/running-tests/Acceptance-Testing-Payment-Requests"}},p=[{value:"Acceptance Testing Notifications",id:"acceptance-testing-notifications",children:[{value:"1. Creating a subscription for an event",id:"1-creating-a-subscription-for-an-event",children:[]},{value:"2. Start the server and webhook-client",id:"2-start-the-server-and-webhook-client",children:[]},{value:"3. Creating a notification for that event",id:"3-creating-a-notification-for-that-event",children:[]},{value:"4. Checking that the notification was sent to the Prime",id:"4-checking-that-the-notification-was-sent-to-the-prime",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"acceptance-testing-notifications"},"Acceptance Testing Notifications"),(0,a.kt)("p",null,"Acceptance testing notifications involves four steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Creating a subscription for an event"),(0,a.kt)("li",{parentName:"ol"},"Start the server and webhook-client"),(0,a.kt)("li",{parentName:"ol"},"Creating a notification for that event"),(0,a.kt)("li",{parentName:"ol"},"Checking that the notification was sent to the Prime")),(0,a.kt)("p",null,"This needs to be done in devlocal and not on staging as we are unable to get the webhook-client on staging until we have infra support."),(0,a.kt)("h3",{id:"1-creating-a-subscription-for-an-event"},"1. Creating a subscription for an event"),(0,a.kt)("p",null,"Subscriptions are store in the ",(0,a.kt)("inlineCode",{parentName:"p"},"webhook_subscriptions")," table."),(0,a.kt)("p",null,"Currently we have no endpoint to access these. Instead, we just add them into the database."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: We do not have any subscriptions live on staging")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inserting a subscription using SQL")),(0,a.kt)("p",null,"Here's the sql to insert a subscription for a ",(0,a.kt)("inlineCode",{parentName:"p"},"PaymentRequest.Update")," event."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO public.webhook_subscriptions\n(id,subscriber_id,status,event_key,callback_url,created_at,updated_at)\nVALUES\n('5cd33db4-9441-4d2d-bd7c-f9efd9ce310c','5db13bb4-6d29-4bdb-bc81-262f4513ecf6',\n'ACTIVE','PaymentRequest.Update','https://primelocal:9443/support/v1/webhook-notify',\n'2020-08-24 18:31:29.171','2020-08-24 18:31:29.171');\n")),(0,a.kt)("p",null,"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"psql-dev")," to do the insertion. On the command prompt in the milmove repo, call ",(0,a.kt)("inlineCode",{parentName:"p"},"psql-dev")," to start a prompt on the postgres database."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'>  psql-dev\npsql (12.1, server 12.2 (Debian 12.2-2.pgdg100+1))\nType "help" for help.\n')),(0,a.kt)("p",null,"Then paste the sql command from above, you should see the following response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dev_db=<paste command here>\nINSERT 0 1\n")),(0,a.kt)("p",null,'If you do not, you may need to get the right subscriber ID from your db, with the name "Prime McPrime Contractor"'),(0,a.kt)("p",null,"Once you are successful in adding the subscription, use ",(0,a.kt)("inlineCode",{parentName:"p"},"\\q")," to exit the psql prompt."),(0,a.kt)("h3",{id:"2-start-the-server-and-webhook-client"},"2. Start the server and webhook-client"),(0,a.kt)("p",null,"Start the milmove server with ",(0,a.kt)("inlineCode",{parentName:"p"},"make server_run")),(0,a.kt)("p",null,"Start the webhook client in a separate terminal with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"webhook-client webhook-notify --period 20 --insecure\n")),(0,a.kt)("blockquote",null,(0,a.kt)("h5",{parentName:"blockquote",id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",{parentName:"blockquote"},"If you do not have ",(0,a.kt)("inlineCode",{parentName:"p"},"webhook-client")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH"),", you will need to run the\nfollowing make commands to create the needed binary."),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rvf bin/webhook-client && make bin/webhook-client\n"))),(0,a.kt)("p",null,"The client will run and check every 20 seconds for new notifications to send.\nWhen it finds a pending notification, and an active subscription, it will send\nit to the server."),(0,a.kt)("p",null,"At first, it may not find any notifications, and you should see the following\nevery 20s:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'2020-08-25T21:43:17.175Z    DEBUG   webhook/webhook.go:146  Notification Check: {"Num notifications found": 0}\n')),(0,a.kt)("h3",{id:"3-creating-a-notification-for-that-event"},"3. Creating a notification for that event"),(0,a.kt)("p",null,'To create a notification, you will use an endpoint that has the trigger added. For example, the above subscription was for "PaymentRequest.Update". That can be triggered by the ',(0,a.kt)("inlineCode",{parentName:"p"},"updatePaymentRequestStatus")," endpoint."),(0,a.kt)("p",null,"Using postman, send an update to that endpoint. Set the status to 'SENT_TO_GEX'.\nSample request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'PATCH /support/v1/payment-requests/a2c34dba-015f-4f96-a38b-0c0b9272e208/status HTTP/1.1\nHost: https://primelocal:9443\nContent-Type: application/json\nIf-Match: MjAyMC0wOC0yNVQxODo1MToxMi42ODgwODha\n\n{\n    "status": "SENT_TO_GEX",\n    "rejectionReason": ""\n}\n')),(0,a.kt)("p",null,"Be sure to use the proper etag which you can get from the ",(0,a.kt)("inlineCode",{parentName:"p"},"ListMTOPaymentRequests")," endpoint."),(0,a.kt)("p",null,"If your notification was successful, you should see an entry in the server log:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2020-08-25T18:51:12.742Z    INFO    event/notification.go:145   event.NotificationEventHandler: Notification created and stored.\n")),(0,a.kt)("h3",{id:"4-checking-that-the-notification-was-sent-to-the-prime"},"4. Checking that the notification was sent to the Prime"),(0,a.kt)("p",null,"Once the notification is created, check the client to see that it sends it successfully!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'2020-08-25T21:44:57.173Z    DEBUG   webhook/webhook.go:146  Notification Check: {"Num notifications found": 1}\n2020-08-25T21:44:57.177Z    DEBUG   webhook/webhook.go:161  Subscription Check! {"Num subscriptions found": 1}\n2020-08-25T21:44:57.192Z    INFO    webhook/webhook.go:125  Notification successfully sent: {"Status": "200 OK", "Body": "{\\"id\\":\\"0586dde3-df69-4b1e-8cc5-49bc83764600\\",\\"triggeredAt\\":\\"0001-01-01T00:00:00.000Z\\"}\\n"}\n')))}d.isMDXComponent=!0}}]);
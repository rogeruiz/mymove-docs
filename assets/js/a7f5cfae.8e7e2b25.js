"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[686],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,k=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49531:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={},l="How to Setup Postman to make Mutual TLS API Calls",p={unversionedId:"dev/tools/Postman/setup-postman-to-make-mutual-tls-api-calls",id:"dev/tools/Postman/setup-postman-to-make-mutual-tls-api-calls",isDocsHomePage:!1,title:"How to Setup Postman to make Mutual TLS API Calls",description:"If you are planning to use Postman for testing the api you will need to make the following changes to support Mutual TLS.",source:"@site/docs/dev/tools/Postman/setup-postman-to-make-mutual-tls-api-calls.md",sourceDirName:"dev/tools/Postman",slug:"/dev/tools/Postman/setup-postman-to-make-mutual-tls-api-calls",permalink:"/mymove-docs/docs/dev/tools/Postman/setup-postman-to-make-mutual-tls-api-calls",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/tools/Postman/setup-postman-to-make-mutual-tls-api-calls.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"Background",permalink:"/mymove-docs/docs/dev/tools/Postman/Using-Etags-and-the-If-Match-Header-in-Postman"},next:{title:"Using-your-CAC-in-Browsers-on-MacOS",permalink:"/mymove-docs/docs/dev/tools/CAC/Using-your-CAC-in-Browsers-on-MacOS"}},m=[{value:"General Postman Settings",id:"general-postman-settings",children:[]},{value:"Postman Environment settings",id:"postman-environment-settings",children:[]},{value:"Troubleshooting Postman",id:"troubleshooting-postman",children:[]}],c={toc:m};function u(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-setup-postman-to-make-mutual-tls-api-calls"},"How to Setup Postman to make Mutual TLS API Calls"),(0,r.kt)("p",null,"If you are planning to use ",(0,r.kt)("a",{parentName:"p",href:"https://www.getpostman.com/"},"Postman")," for testing the api you will need to make the following changes to support Mutual TLS."),(0,r.kt)("h2",{id:"general-postman-settings"},"General Postman Settings"),(0,r.kt)("p",null,"Open the general settings panel by clicking the wrench icon in the upper left corner"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Postman Settings Menu Upper Right Corner",src:n(3347).Z})),(0,r.kt)("p",null,"Under the ",(0,r.kt)("em",{parentName:"p"},"General")," tab turn off ",(0,r.kt)("strong",{parentName:"p"},"SSL certificate verification")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Postman SSL certification verification switch",src:n(81456).Z})),(0,r.kt)("p",null,"Switch to the ",(0,r.kt)("strong",{parentName:"p"},"Certificates")," tab and add the development certificate with the following settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Host")," ",(0,r.kt)("inlineCode",{parentName:"li"},"primelocal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Port")," ",(0,r.kt)("inlineCode",{parentName:"li"},"9443")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CRT File")," ",(0,r.kt)("inlineCode",{parentName:"li"},"config/tls/devlocal-mtls.cer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"KEY File")," ",(0,r.kt)("inlineCode",{parentName:"li"},"config/tls/devlocal-mtls.key"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Postman client cert settings",src:n(98649).Z})),(0,r.kt)("h2",{id:"postman-environment-settings"},"Postman Environment settings"),(0,r.kt)("p",null,"You will need to configure the base url for development or other environment you plan to connect to. Click on the gear icon near the environment pull down in the upper right of the application."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Postman open environment dialog",src:n(5856).Z})),(0,r.kt)("p",null,"This will open the ",(0,r.kt)("em",{parentName:"p"},"Manage Environments")," dialog. Select ",(0,r.kt)("strong",{parentName:"p"},"Add")," in the lower right corner"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Postman environment dialog",src:n(15471).Z})),(0,r.kt)("p",null,"Fill in the following details in the add new dialog and click ",(0,r.kt)("strong",{parentName:"p"},"Add")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Variable")," ",(0,r.kt)("inlineCode",{parentName:"li"},"baseUrl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Initial Value")," ",(0,r.kt)("inlineCode",{parentName:"li"},"https://primelocal:9443/prime/v1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Current Value")," ",(0,r.kt)("inlineCode",{parentName:"li"},"https://primelocal:9443/prime/v1"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Postman environment add dialog",src:n(58195).Z})),(0,r.kt)("p",null,"Once you have added this environment and closed the dialog select the new environment from the pull down."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Postman select environment",src:n(53758).Z})),(0,r.kt)("h2",{id:"troubleshooting-postman"},"Troubleshooting Postman"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ECONNREFUSED error in Postman")),(0,r.kt)("p",{parentName:"li"},"If you see an error that looks like the following, Postman cannot connect to your server."),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{alt:"Postman ECONNREFUSED error",src:n(44716).Z})),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Solution:")," Make sure your server is running with ",(0,r.kt)("inlineCode",{parentName:"p"},"make server_run"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Unauthorized")),(0,r.kt)("p",{parentName:"li"},"If the endpoint returns Unauthorized, this could mean that your DB was unpopulated and the server was unable to find your authorization."),(0,r.kt)("p",{parentName:"li"},"The authorization for the devlocal certifications is stored in the milmove database. Perhaps your database does not contain the authorization? One common reason is that you have an old or empty database."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Solution:")," Make sure you have a up-to-date and populated DB by running ",(0,r.kt)("inlineCode",{parentName:"p"},"make db_dev_e2e_populate"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Socket hang up / TLS handshake error")),(0,r.kt)("p",{parentName:"li"},"If you see an error that say socket hangup, the server hung up on Postman, likely due to authentication."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Postman ECONNREFUSED error",src:n(34710).Z})),(0,r.kt)("p",{parentName:"li"},"This could be a certs related issue. Check your server log in the terminal, do you see a TLS handshake error?"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"2021-01-29T02:20:25.902Z ERROR http/server.go:3093 http: TLS handshake error from 127.0.0.1:61467: tls: client didn't provide a certificate\n")),(0,r.kt)("p",{parentName:"li"},"If so, this means Postman did not send your certificates successfully to the server when making the request, OR the server did not send the correct cert back."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Solution:")," Make sure you have your ",(0,r.kt)("inlineCode",{parentName:"p"},"devlocal-mtls.cer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"devlocal-mtls.key")," set up as described above in ",(0,r.kt)("a",{parentName:"p",href:"#general-postman-settings"},"General Postman Settings"),". This ensures you are sending the correct cert. "),(0,r.kt)("p",{parentName:"li"},"If you are using ",(0,r.kt)("inlineCode",{parentName:"p"},"devlocal"),", the server does not send a correct certificate back. Check that you have SSL certificate verification set to ",(0,r.kt)("strong",{parentName:"p"},"off")," in the Settings, this ensures you are not trying to verify that certificate."))))}u.isMDXComponent=!0},44716:function(e,t,n){t.Z=n.p+"assets/images/econnrefused-e4f35f78fc4f98878122dc9df2355322.png"},98649:function(e,t,n){t.Z=n.p+"assets/images/postman_client_cert-9c98597a7381161eb2ab3706ad43e9f9.png"},5856:function(e,t,n){t.Z=n.p+"assets/images/postman_environment-b5c8e007b56b7e47337f13d210416849.png"},58195:function(e,t,n){t.Z=n.p+"assets/images/postman_manage_environment_add-616680cf28aae10a441dea7b0c2b2d54.png"},15471:function(e,t,n){t.Z=n.p+"assets/images/postman_manage_environment_dialog-c3537742a993d95eebec6812a53d68c2.png"},53758:function(e,t,n){t.Z=n.p+"assets/images/postman_set_environment-c956c928bb31c27264040f2fff0b8da4.png"},3347:function(e,t,n){t.Z=n.p+"assets/images/postman_settings_menu-bf2a885839f45d7a0dea3d8e496abac0.png"},81456:function(e,t,n){t.Z=n.p+"assets/images/postman_ssl_verification-ecd10042821a30421ff782068e2f7b59.png"},34710:function(e,t,n){t.Z=n.p+"assets/images/socket-hangup-1ee9f0a23f87a91356f0f9c7f42d9dd5.png"}}]);
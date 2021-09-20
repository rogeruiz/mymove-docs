"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[1930],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4547:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="How to Create CAC Access (for using Prime API and uploading Electronic Orders)",p={unversionedId:"dev/tools/CAC/use-mtls-with-cac",id:"dev/tools/CAC/use-mtls-with-cac",isDocsHomePage:!1,title:"How to Create CAC Access (for using Prime API and uploading Electronic Orders)",description:"Overview",source:"@site/docs/dev/tools/CAC/use-mtls-with-cac.md",sourceDirName:"dev/tools/CAC",slug:"/dev/tools/CAC/use-mtls-with-cac",permalink:"/mymove-docs/docs/dev/tools/CAC/use-mtls-with-cac",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/tools/CAC/use-mtls-with-cac.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"How to Upload Electronic Orders Using your CAC",permalink:"/mymove-docs/docs/dev/tools/CAC/upload-electronic-orders"},next:{title:"Configure-Postico-or-TablePlus-to-connect-to-mymove-DB",permalink:"/mymove-docs/docs/dev/tools/Configure-Postico-or-TablePlus-to-connect-to-mymove-DB"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Generating a Secure Migration",id:"generating-a-secure-migration",children:[{value:"Troubleshooting",id:"troubleshooting",children:[]}]},{value:"Preparing for Upload",id:"preparing-for-upload",children:[{value:"Testing Certificate Locally",id:"testing-certificate-locally",children:[]}]},{value:"Uploading CAC Secure Migration",id:"uploading-cac-secure-migration",children:[]},{value:"Manually Generating a Secure Migration",id:"manually-generating-a-secure-migration",children:[]}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-create-cac-access-for-using-prime-api-and-uploading-electronic-orders"},"How to Create CAC Access (for using Prime API and uploading Electronic Orders)"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Mutual TLS is used in the app to authenticate traffic. Users are authorized by comparing a SHA 256 hash of the\npublic certificate in the presented certificate, which is stored on the user's CAC.\nTo get that information into the system we must create a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/docs/database/migrate-the-database.md#secure-migrations"},"secure migration")," that contains both the\nSHA 256 fingerprint and the Subject on the CAC certificate."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"The requirements are that you have a CAC and a CAC Reader. The recommended reader is the ",(0,i.kt)("a",{parentName:"p",href:"https://www.amazon.com/Reader-Saicoo-Military-Compatible-Windows/dp/B071NT53M7/ref=sr_1_4"},"Type C Smart Card Reader\nSaicoo DOD Military USB-C Common Access Card Reader"),"."),(0,i.kt)("p",null,"To get going, install software on your machine with this command:"),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"brew install opensc")),(0,i.kt)("p",null," It gives you tools like ",(0,i.kt)("inlineCode",{parentName:"p"},"pkcs11-tool")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pkcs15-tool"),".\nYou need the library which gets placed in ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/lib/pkcs11/opensc-pkcs11.so")," and is installed with ",(0,i.kt)("inlineCode",{parentName:"p"},"opensc")),(0,i.kt)("p",null," Note: You will not need to install a driver for the card reader."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To see if you are in a place to use your CAC to extract certs you need to run these commands:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"  cac-prereqs\n  prereqs\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Plug in your card reader to your computer")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Insert your CAC into the reader"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Your laptop may prompt you to "pair" with your CAC. You can cancel out of this, it is not necessary for these purposes and can cause other issues.')),(0,i.kt)("h2",{id:"generating-a-secure-migration"},"Generating a Secure Migration"),(0,i.kt)("p",null,"To generate the secure migration run this step:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'milmove gen certs-migration --name "${USER}_cac" --cac\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"NOTE: If you want to update your cac run instead"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'milmove gen certs-migration --name "${USER}_cac" --cac --update --certid <uuid from original cert migration>\n')),(0,i.kt)("p",null,"You will see output like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'2019/08/22 17:32:38 new migration file created at: "tmp/20190822173238_cgilmer_cac.up.sql"\n2019/08/22 17:32:38 new migration file created at:  "migrations/app/secure/20190822173238_cgilmer_cac.up.sql"\n2019/08/22 17:32:38 new migration appended to manifest at: "/dir/transcom/mymove/migrations/app/migrations_manifest.txt"\n')),(0,i.kt)("p",null,"The generation script will do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a stub local secure migration in the ",(0,i.kt)("inlineCode",{parentName:"li"},"migrations/app/secure/")," folder"),(0,i.kt)("li",{parentName:"ul"},"Create a migration to upload to AWS S3 in the ",(0,i.kt)("inlineCode",{parentName:"li"},"tmp/")," folder"),(0,i.kt)("li",{parentName:"ul"},"Update the ",(0,i.kt)("inlineCode",{parentName:"li"},"migrations_manifest.txt"))),(0,i.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you have a Yubikey plugged in, you may get an error message (",(0,i.kt)("inlineCode",{parentName:"li"},"pkcs11: the token has no such object"),") because it is trying to read the Yubikey instead of your CAC. Try removing the Yubikey."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"opensc-tool -l")," to make sure the CAC reader is detected"),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"pkcs11-tool --list-token-slots")," to make sure your CAC is detected by the reader"),(0,i.kt)("li",{parentName:"ul"},"[","[Troubleshoot-CAC-Reader-Issues]","]")),(0,i.kt)("h2",{id:"preparing-for-upload"},"Preparing for Upload"),(0,i.kt)("p",null,"You will be uploading the migration from the ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp/")," directory, ONLY to the Staging and Experimental environments."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"DO NOT UPLOAD THIS MIGRATION TO PRODUCTION AS THERE SHOULD BE NO USE CASE FOR USING A PERSONAL CAC TO UPLOAD ORDERS IN PROD"),"."),(0,i.kt)("p",null,"Before uploading we'll remove some sensitive information and verify the migration script runs locally."),(0,i.kt)("h3",{id:"testing-certificate-locally"},"Testing Certificate Locally"),(0,i.kt)("p",null,"For testing locally:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"copy the ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp")," migration file contents to the corresponding file in ",(0,i.kt)("inlineCode",{parentName:"p"},"migrations/app/secure/")," (your file name will be different):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cp tmp/20190822181328_cgilmer_cac.up.sql migrations/app/secure/\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change the migration sql file in ",(0,i.kt)("inlineCode",{parentName:"p"},"migrations/app/secure/")," (which is for Devlocal only) by updating the ",(0,i.kt)("inlineCode",{parentName:"p"},"CN")," field with your GitHub username.\nThis will prevent your name and EDIPI from getting checked into git."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"Example:\n\n```tex\nCN=LAST.FIRST.MI.EDIPI,OU=DoD+OU=PKI+OU=CONTRACTOR,O=U.S. Government,C=US\n# should be\nCN=GITHUB_USERNAME,OU=DoD+OU=PKI+OU=CONTRACTOR,O=U.S. Government,C=US\n```\n\nNote: After your secure migration of `tmp` file, staging and experimental migration files will continue to have your name and EDIPI in the format `CN=LAST.FIRST.MIDDLE.EDIPI,...`).\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Test this by running:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make db_dev_migrate\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make a branch with only the secure migration sql file located in ",(0,i.kt)("inlineCode",{parentName:"p"},"migrations/app/secure")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"migrations_manifest.txt")," file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Validate your client certificate was updated (use your username):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"psql-dev\n> select * from client_certs where subject ILIKE '%GITHUB_USERNAME%';\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To test, run the server and test the secure migration (with your CAC inserted into your reader):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"make db_dev_e2e_populate server_run\ngo run ./cmd/prime-api-client  fetch-mto-updates --cac --insecure\n")),(0,i.kt)("p",{parentName:"li"},"If the secure migration worked you should receive a response similar to"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "createdAt": "2020-01-22",\n    "id": "5d4b25bb-eb04-4c03-9a81-ee0398cb7791",\n    "isAvailableToPrime": true,\n    "isCanceled": false,\n    "moveOrderID": "6fca843a-a87e-4752-b454-0fac67aa4981",\n    "mto_service_items": [],\n    "payment_requests": [],\n    "mto_shipments": [\n      {\n        ...\n      }\n    ],\n    "updatedAt": "2020-01-22"\n  }\n]\n')))),(0,i.kt)("h2",{id:"uploading-cac-secure-migration"},"Uploading CAC Secure Migration"),(0,i.kt)("p",null,"Once the files have been generated by previous section next step is to upload them to the environments."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Upload to ",(0,i.kt)("inlineCode",{parentName:"p"},"exp")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"stg")," using the file in ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp/"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'ENVIRONMENTS="exp stg" ./scripts/upload-secure-migration tmp/20200211150405_mr337_cac.up.sql\n')),(0,i.kt)("p",{parentName:"li"},"You should use your AWS Govcloud MFA here. The script will prompt you to confirm upload"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"}," Are you ready to upload your new migration? This will upload to the following GovCloud environments: exp stg. (y/N) y\n Uploading to: exp\n ...\n Uploading to: stg\n ...\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For ",(0,i.kt)("inlineCode",{parentName:"p"},"prd")," ",(0,i.kt)("strong",{parentName:"p"},"do not")," upload the ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp")," file. Instead we'll upload a stub file as a place holder since the migration process will be looking for such a file in ",(0,i.kt)("inlineCode",{parentName:"p"},"prd")," environment."),(0,i.kt)("p",{parentName:"li"},"Remove the contents of your ",(0,i.kt)("inlineCode",{parentName:"p"},"tmp")," file and then paste ",(0,i.kt)("inlineCode",{parentName:"p"},"-- This is a stub file for user [YOUR USERNAME]")),(0,i.kt)("p",{parentName:"li"},"OR"),(0,i.kt)("p",{parentName:"li"},"Use this command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'echo "-- This is a stub file for user ${USER}" > tmp/20200211150405_mr337_cac.up.sql\nENVIRONMENTS=prd ./scripts/upload-secure-migration tmp/20200211150405_mr337_cac.up.sql\n')),(0,i.kt)("p",{parentName:"li"},"The file should be empty except for the comment ",(0,i.kt)("inlineCode",{parentName:"p"},"-- This is a stub file for user [YOUR USERNAME]"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once completed confirm the upload with the command ",(0,i.kt)("inlineCode",{parentName:"p"},"download-secure-migration")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ensure the secure migration files for ",(0,i.kt)("inlineCode",{parentName:"li"},"exp")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"stg")," inserts a new record into the database with sensitive information."),(0,i.kt)("li",{parentName:"ul"},"Ensure the secure migration file for ",(0,i.kt)("inlineCode",{parentName:"li"},"prd")," is just a stub and does not insert a record")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"download-secure-migration 20200211150405_mr337_cac.up.sql\nDownloading from: exp\ndownload: s3://transcom-gov-milmove-exp-app-us-gov-west-1/secure-migrations/20200211150405_mr337_cac.up.sql to ./tmp/secure_migrations/exp/20200211150405_mr337_cac.up.sql\nDownloading from: stg\ndownload: s3://transcom-gov-milmove-stg-app-us-gov-west-1/secure-migrations/20200211150405_mr337_cac.up.sql to ./tmp/secure_migrations/stg/20200211150405_mr337_cac.up.sql\nDownloading from: prd\n.download: s3://transcom-gov-milmove-prd-app-us-gov-west-1/secure-migrations/20200211150405_mr337_cac.up.sql to ./tmp/secure_migrations/prd/20200211150405_mr337_cac.up.sql\n\nFiles have been downloaded to these locations:\n\n./tmp/secure_migrations/prd/20200211150405_mr337_cac.up.sql\n./tmp/secure_migrations/exp/20200211150405_mr337_cac.up.sql\n./tmp/secure_migrations/stg/20200211150405_mr337_cac.up.sql\n\nPlease remember to 'rm -rf ./tmp/secure_migrations' when you are finished working\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a PR with the branch created earlier, with only the secure migration sql file located in ",(0,i.kt)("inlineCode",{parentName:"p"},"migrations/app/secure")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"migrations_manifest.txt")," file. Once merged, you can test on staging.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/wiki/How-to-Test-the-Prime-API-(Local,-Staging,-and-Experimental)"},"Test Prime API on staging and experimental")))),(0,i.kt)("h2",{id:"manually-generating-a-secure-migration"},"Manually Generating a Secure Migration"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:"),"  Only follow these steps if you need to manually extract values from a CAC that you don't have physical access to."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To get the Fingerprint and Subject the user can run these commands:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cac-extract-fingerprint\ncac-extract-subject\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now you need to generate the secure migration with these scripts:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'FINGERPRINT=`cac-extract-fingerprint`\nSUBJECT=`cac-extract-subject`\nmilmove gen certs-migration --name "${USER}_cac" -f "${FINGERPRINT}" -s "${SUBJECT}"\n')),(0,i.kt)("p",{parentName:"li"},"The output is the same as in the above steps."))))}u.isMDXComponent=!0}}]);
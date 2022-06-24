"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[5807],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},12467:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"0049 Do not update child records using parent's E-tag"},o="Do not update child records using parent's E-tag",d={unversionedId:"adrs/etag-for-child-updates",id:"adrs/etag-for-child-updates",title:"0049 Do not update child records using parent's E-tag",description:"User Story: Jira Story",source:"@site/docs/adrs/0049-etag-for-child-updates.md",sourceDirName:"adrs",slug:"/adrs/etag-for-child-updates",permalink:"/mymove-docs/docs/adrs/etag-for-child-updates",draft:!1,editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/adrs/0049-etag-for-child-updates.md",tags:[],version:"current",sidebarPosition:49,frontMatter:{title:"0049 Do not update child records using parent's E-tag"},sidebar:"adrsSidebar",previous:{title:"0048 Use a consistent file structure for front-end code",permalink:"/mymove-docs/docs/adrs/frontend-file-org"},next:{title:"0050 Fork & maintain react-file-viewer under @trussworks",permalink:"/mymove-docs/docs/adrs/doc-viewer-fork"}},l={},s=[{value:"Considered Alternatives",id:"considered-alternatives",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Alternatives",id:"pros-and-cons-of-the-alternatives",level:2},{value:"Make a new endpoint for child updates",id:"make-a-new-endpoint-for-child-updates",level:3},{value:"Pass a second E-tag in the body if the child is to be updated",id:"pass-a-second-e-tag-in-the-body-if-the-child-is-to-be-updated",level:3},{value:"Bubble up a child&#39;s updated_at value to the parent",id:"bubble-up-a-childs-updated_at-value-to-the-parent",level:3}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"do-not-update-child-records-using-parents-e-tag"},"Do not update child records using parent's E-tag"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"User Story:")," ",(0,r.kt)("a",{parentName:"p",href:"https://dp3.atlassian.net/browse/MB-2566"},"Jira Story")),(0,r.kt)("p",null,"When we have an endpoint that updates a record in the db, it's sometimes desirable to update a child record as well."),(0,r.kt)("p",null,"Generally, to update a record, the caller must provide an E-tag, passed in the header ",(0,r.kt)("inlineCode",{parentName:"p"},"If-Match")," that matches that of the record in the db."),(0,r.kt)("p",null,"However the parent and child have two different E-tags, and only the parent's E-tag is passed in a sole parameter in the header."),(0,r.kt)("p",null,"Therefore, it's not possible to pass in the child and parent E-tag cleanly."),(0,r.kt)("h2",{id:"considered-alternatives"},"Considered Alternatives"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make a new endpoint for child updates so they can be updated separately with the correct E-tag."),(0,r.kt)("li",{parentName:"ul"},"Pass a second E-tag in the body if the child is to be updated."),(0,r.kt)("li",{parentName:"ul"},"Bubble up a child's updated_at value to the parent, so that the child and parent will have one E-tag.")),(0,r.kt)("h2",{id:"decision-outcome"},"Decision Outcome"),(0,r.kt)("p",null,"We will make a new endpoint for child updates so they can be updated separately with the correct E-tag."),(0,r.kt)("p",null,"Currently this is just true for address and agent updates."),(0,r.kt)("h2",{id:"pros-and-cons-of-the-alternatives"},"Pros and Cons of the Alternatives"),(0,r.kt)("h3",{id:"make-a-new-endpoint-for-child-updates"},"Make a new endpoint for child updates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," The mechanism for optimistic locking stays the same across all endpoints, so it's understandable for the Prime."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," The ",(0,r.kt)("inlineCode",{parentName:"li"},"updated_at")," value for parent and child record will correctly state the last time that record was updated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," More endpoints to create and maintain.")),(0,r.kt)("h3",{id:"pass-a-second-e-tag-in-the-body-if-the-child-is-to-be-updated"},"Pass a second E-tag in the body if the child is to be updated"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," The mechanism differs when you want to update a child, as the E-tag is passed in body instead of header. Makes the mechanism inconsistent, harder to reason about and harder to explain to Prime."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," Fewer endpoints to maintain")),(0,r.kt)("h3",{id:"bubble-up-a-childs-updated_at-value-to-the-parent"},"Bubble up a child's updated_at value to the parent"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," Adds complexity because the child may have multiple parents and Prime would not realize that they have unwittingly updated unrelated records."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-")," The mechanism differs from the norm and making exceptions for certain updates, will make it hard to be consistent across the codebase."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"+")," Fewer endpoints to maintain")))}c.isMDXComponent=!0}}]);
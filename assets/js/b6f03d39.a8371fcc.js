"use strict";(self.webpackChunkmymove_docs=self.webpackChunkmymove_docs||[]).push([[4287],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},15940:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],r={},s=void 0,p={unversionedId:"dev/contributing/frontend/Guide-to-Implementing-UI",id:"dev/contributing/frontend/Guide-to-Implementing-UI",isDocsHomePage:!1,title:"Guide-to-Implementing-UI",description:"This is an attempt to document the process of implementing a web UI based on visual assets, functional requirements, and content specifications. Hopefully the steps below provide a framework for accomplishing work with a high fidelity to the original designs, but they are not a substitute for attention to detail and thorough understanding of HTML and CSS.",source:"@site/docs/dev/contributing/frontend/Guide-to-Implementing-UI.md",sourceDirName:"dev/contributing/frontend",slug:"/dev/contributing/frontend/Guide-to-Implementing-UI",permalink:"/mymove-docs/docs/dev/contributing/frontend/Guide-to-Implementing-UI",editUrl:"https://github.com/transcom/mymove-docs/edit/main/docs/dev/contributing/frontend/Guide-to-Implementing-UI.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"How to Create a Form using Formik",permalink:"/mymove-docs/docs/dev/contributing/frontend/Create-a-Form-Using-Formik"},next:{title:"Icons",permalink:"/mymove-docs/docs/dev/contributing/frontend/Icons"}},d=[{value:"Contents",id:"contents",children:[]},{value:"Start with the markup",id:"start-with-the-markup",children:[{value:"Resources",id:"resources",children:[]}]},{value:"Style with CSS (modules)",id:"style-with-css-modules",children:[{value:"References:",id:"references",children:[]}]},{value:"CSS: less is more",id:"css-less-is-more",children:[{value:"References:",id:"references-1",children:[]}]},{value:"Cheatsheet",id:"cheatsheet",children:[{value:"References",id:"references-2",children:[]}]}],m={toc:d};function c(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is an attempt to document the process of implementing a web UI based on visual assets, functional requirements, and content specifications. Hopefully the steps below provide a framework for accomplishing work with a high fidelity to the original designs, but they are not a substitute for attention to detail and thorough understanding of HTML and CSS."),(0,o.kt)("h2",{id:"contents"},"Contents"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#start-with-the-markup"},"Start with the markup")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#style-with-css-modules"},"Style with CSS (modules)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#css-less-is-more"},"CSS: less is more")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#cheatsheet"},"Cheatsheet"))),(0,o.kt)("h2",{id:"start-with-the-markup"},"Start with the markup"),(0,o.kt)("p",null,"When implementing a new UI or doing a design pass on existing code, it's usually a good idea to refer to the HTML output before looking at any CSS. HTML syntax may be simple, but it is also meaningful and can make the difference between a web app that is accessible and secure and one that is not. The HTML also defines the structure of the content and design elements on a page, and while CSS can be used to manipulate the visual output to a high degree, it can only go so far."),(0,o.kt)("p",null,"You can use browser dev tools to inspect elements and view the executed markup for a page. The markup should be structured, organized, and readable, even by someone who is not familiar with HTML. Elements that are related to each other should often be contained within a parent element, and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/semantics#Semantics_in_HTML"},"semantic HTML")," should be used wherever possible. Take into consideration the organization of the content in the component or the page, and verify that the appropriate tags are being used. For example, if some content is a list, use a ",(0,o.kt)("inlineCode",{parentName:"p"},"<ul>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<ol>"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"<dl>"),", and if some content is tabular data, use ",(0,o.kt)("inlineCode",{parentName:"p"},"<table>"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"<div>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<span>")," are both generic elements that can be used to divide content into groups or apply decorative styling, but on their own they have no inherent meaning, so ",(0,o.kt)("em",{parentName:"p"},"usually")," they should be viewed as extraneous. It is fine to use ",(0,o.kt)("inlineCode",{parentName:"p"},"<div>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<span>"),", but there should be a clear reason when doing so."),(0,o.kt)("p",null,"Some HTML elements have quirks around how the browser renders them (such as ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend"},(0,o.kt)("inlineCode",{parentName:"a"},"<legend>")),") or strict rules around what child elements are allowed and how they must be structured (such as ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"},(0,o.kt)("inlineCode",{parentName:"a"},"<table>")),"). It's important to familiarize yourself with elements like these in order to use them effectively. Fortunately, React will usually print out a console error when it detects invalid HTML, and it's important to notice and correct these errors since they can be an indicator of potential browser compatibility issues."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of console error reading &quot;Warning: validateDOMNesting(...): &lt;td&gt; cannot appear as a child of &lt;table&gt;.&quot;",src:n(39972).Z})),(0,o.kt)("p",null,"Ultimately, structuring the markup in a way that corresponds to the content of the page will make implementing a design easier, because it will define patterns and objects that ",(0,o.kt)("em",{parentName:"p"},"also")," exist in the language of the design. For instance, if the design indicates a certain margin in between groups of text content, it might make sense to group that content using a ",(0,o.kt)("inlineCode",{parentName:"p"},"<section>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<div>")," or other element, even if there's no other visual indication of separation such as a border or background color. Identifying the repeating components and subcomponents of a design will help establish the foundation upon which you can start styling with CSS."),(0,o.kt)("h3",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element"},"HTML elements reference"))),(0,o.kt)("h2",{id:"style-with-css-modules"},"Style with CSS (modules)"),(0,o.kt)("p",null,"Before writing any CSS, it's important to understand the CSS that already exists within the application, and determine how your changes will build on top of that. By default, CSS is ",(0,o.kt)("strong",{parentName:"p"},"globally scoped"),", meaning any CSS that is imported ",(0,o.kt)("em",{parentName:"p"},"anywhere")," has the potential to apply to markup in your application ",(0,o.kt)("em",{parentName:"p"},"everywhere"),". For example, if you have the following component..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// component.css\n.myComponent {\n  background-color: yellow;\n}\n\np {\n  font-size: 16px;\n  color: blue;\n}\n\n\n// MyComponent.jsx\nimport styles from './component.css'\n\nconst MyComponent = () => <div className=\"myComponent\"><p>This is a component!</p></div>\n")),(0,o.kt)("p",null,"... it doesn\u2019t matter whether or not that component is currently visible in the application -- that ",(0,o.kt)("inlineCode",{parentName:"p"},"p")," style will apply to every ",(0,o.kt)("inlineCode",{parentName:"p"},"<p>")," tag in your app on every page."),(0,o.kt)("p",null,"That isn't to say you should ",(0,o.kt)("em",{parentName:"p"},"never")," write global CSS -- it is extremely useful when defining the default styles for the app, and the more CSS that can be shared and applied globally, the smaller your bundle size might be. However, if you are trying to write styles for a specific component or page, it is usually safest to use ",(0,o.kt)("strong",{parentName:"p"},"CSS modules"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// component.module.css\n.myComponent {\n  background-color: yellow;\n}\n\np {\n  font-size: 16px;\n  color: blue;\n}\n\n// MyComponent.jsx\nimport styles from './component.module.css'\n\nconst MyComponent = () => <div className={styles.myComponent}><p>This is a component!</p></div>\n")),(0,o.kt)("p",null,"The above code snippet looks very similar, but with one key difference: the file name ends in ",(0,o.kt)("inlineCode",{parentName:"p"},".module.css"),". That tells the F/E compiler to ",(0,o.kt)("em",{parentName:"p"},"hash")," any class names contained in that file. That means in the effective code, ",(0,o.kt)("inlineCode",{parentName:"p"},"myComponent")," will end up looking something like ",(0,o.kt)("inlineCode",{parentName:"p"},"component_myComponent_1a2b3c"),". Additionally, the ",(0,o.kt)("inlineCode",{parentName:"p"},".module.css")," file exports the hashed values as a JS object, so they can be referenced in JSX component code (see how ",(0,o.kt)("inlineCode",{parentName:"p"},"styles.myComponent")," is used in the above snippet):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n  myComponent: 'component_myComponent_1a2b3c'\n}\n")),(0,o.kt)("p",null,"The compiled CSS & HTML will end up looking like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// CSS\n.component_myComponent_1a2b3c {\n  background-color: yellow;\n}\n\n// HTML\n<div class="component_myComponent_1a2b3c"><p>This is a component!</p></div>\n')),(0,o.kt)("p",null,"However, you might notice the ",(0,o.kt)("inlineCode",{parentName:"p"},"p")," style block in that file will still apply globally, since it is not nested under any CSS class. So the CSS module file should finally be updated to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// component.module.css\n.myComponent {\n  background-color: yellow;\n}\n\n.myComponent p {\n  font-size: 16px;\n  color: blue;\n}\n")),(0,o.kt)("p",null,"All of the above also applies to SASS/SCSS files (",(0,o.kt)("inlineCode",{parentName:"p"},".scss, .module.scss"),")."),(0,o.kt)("h3",{id:"references"},"References:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/css-modules/css-modules"},"CSS modules")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://css-tricks.com/css-modules-part-1-need/"},"What are CSS modules and why do we need them?"))),(0,o.kt)("h2",{id:"css-less-is-more"},"CSS: less is more"),(0,o.kt)("p",null,"Another reason I prefer to start with defining the HTML is because you will immediately get to see how far that gets you without writing any CSS at all. Most of the time, base styles such as typography and layout should be inherited by global CSS or top-level components. If additional styling on a page or component is needed, it's usually a good idea to verify with the designer whether it is a change that should occur globally or not, and if not then that's usually a signal that a new UI component is needed."),(0,o.kt)("p",null,"When adding a new UI component, it's easiest to first build it in Storybook, outside of the context of the application. That will ensure there is no tight coupling to API data or other contexts, and the UI can be viewed and tested in isolation. Build the component with stories for each test case in mind, and expose props that might be needed when using the component in the application (such as for passing in API data and event handlers). Add a CSS module file for the component, make sure to scope all styles under a class, and add style declarations only as needed."),(0,o.kt)("p",null,"When it comes to adding CSS declarations, here are some guidelines:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use existing variables/mixins for colors, spacing units, etc."),(0,o.kt)("li",{parentName:"ul"},"Avoid setting global margins on components. Setting margins on elements inside of components is fine, but use the sibling selectors (",(0,o.kt)("inlineCode",{parentName:"li"},"+")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"~"),") where appropriate.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For example, you can control the margin between specific elements. In this snippet, the space between an ",(0,o.kt)("inlineCode",{parentName:"li"},"h2")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"p")," will be 15px, but the space between an ",(0,o.kt)("inlineCode",{parentName:"li"},"h2")," and a ",(0,o.kt)("inlineCode",{parentName:"li"},"ul")," will be 20px:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"h2 + p { margin-top: 15px; }\nh2 + ul { margin-top: 20px; }\n")))))),(0,o.kt)("p",null,"Ultimately, it's important to understand what each line of CSS is doing. Adding lines until something looks right is usually a recipe for unknown consequences, and can have effects on accessibility or add unnecessary kb to the bundle. When in doubt, ask for assistance in #prac-frontend!"),(0,o.kt)("p",null,"Finally, the USWDS ",(0,o.kt)("em",{parentName:"p"},"does")," expose some ",(0,o.kt)("a",{parentName:"p",href:"https://designsystem.digital.gov/utilities/"},"utility classes")," that can be used directly in the markup (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"margin-x-auto"),"). I want to caution against using these unless something is ",(0,o.kt)("em",{parentName:"p"},"truly")," an exception. The reason is that it adds additional points of dependencies between the styling and the markup (components will only have the expected visual result if they also have the correct classes) and adds more variables to where applied CSS may come from. For example, if a component is pulling CSS in from global styles, ",(0,o.kt)("em",{parentName:"p"},"and")," a CSS modules file, ",(0,o.kt)("em",{parentName:"p"},"and")," inline utility class names, it adds to the complexity of what styles will be effectively applied, and makes it harder to change or debug in the future."),(0,o.kt)("h3",{id:"references-1"},"References:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Reference"},"CSS reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"},"A Complete Guide to Flexbox")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://css-tricks.com/guides/"},"CSS-tricks.com Guides")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://designsystem.digital.gov/"},"USWDS"))),(0,o.kt)("h2",{id:"cheatsheet"},"Cheatsheet"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Review the effective HTML in component code and dev tools"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Look for structure that aligns with the content, and no invalid DOM errors"),(0,o.kt)("li",{parentName:"ul"},"Avoid adding extraneous elements (such as ",(0,o.kt)("inlineCode",{parentName:"li"},"<div>"),"s that have no purpose)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ensure all type elements have the correct sizing and type styles"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Applies to ",(0,o.kt)("inlineCode",{parentName:"li"},"<p>, <h1>, <h2>"),", etc. as well as text inputs and any other elements with text content"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Why?")," This will affect the resulting spacing, and inform any tweaks to padding & margin that may be needed"),(0,o.kt)("li",{parentName:"ul"},"Always define both ",(0,o.kt)("inlineCode",{parentName:"li"},"font-size")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"line-height")," (unitless, as a factor of ",(0,o.kt)("inlineCode",{parentName:"li"},"font-size"),")"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Know the differences between ",(0,o.kt)("strong",{parentName:"p"},"padding")," and ",(0,o.kt)("strong",{parentName:"p"},"margin")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Padding is used to add ",(0,o.kt)("em",{parentName:"li"},"internal")," spacing between an element\u2019s content and its border"),(0,o.kt)("li",{parentName:"ul"},"Padding does not collapse - it will always effectively be what you declare in the CSS"),(0,o.kt)("li",{parentName:"ul"},"Margin is used to add ",(0,o.kt)("em",{parentName:"li"},"external")," spacing between two elements"),(0,o.kt)("li",{parentName:"ul"},"Margins collapse: if two sibling elements declare margins that overlap, the larger margin will be the effective space between them"),(0,o.kt)("li",{parentName:"ul"},"For example, there will be a 35px margin between these two ",(0,o.kt)("inlineCode",{parentName:"li"},"div"),"s:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'.divA { margin: 20px; }\n.divB { margin: 35px; }\n\n<div class="divA"></div>\n<div class="divB"></div>\n')),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"TODO: Add a diagram that illustrates collapsing margins"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Compare the implementation side-by-side with the design at mobile size (< 600px wide)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Spacing inside of elements (padding inside of a box, margins between child elements)"),(0,o.kt)("li",{parentName:"ul"},"Vertical spacing between elements"),(0,o.kt)("li",{parentName:"ul"},"Background colors and borders of elements"),(0,o.kt)("li",{parentName:"ul"},"Any touch targets (inputs, buttons, etc.) should have a minimum size of 42x42px (this does not apply to inline text links)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Resize the window up to tablet and desktop sizes (> 800px wide) and compare the implementation side-by-side with the design"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Spacing inside of elements (padding inside of a box, margins between child elements)"),(0,o.kt)("li",{parentName:"ul"},"Vertical spacing between elements"),(0,o.kt)("li",{parentName:"ul"},"Any layout changes as a result of the window size increasing"),(0,o.kt)("li",{parentName:"ul"},"Background colors and borders of elements"),(0,o.kt)("li",{parentName:"ul"},"Responsive type scales up as indicated"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Double-check implementations in different browsers and devices as needed"))),(0,o.kt)("h3",{id:"references-2"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://caniuse.com/"},"Can I Use?")," - use to check browser support for new CSS/JS features")))}c.isMDXComponent=!0},39972:function(e,t,n){t.Z=n.p+"assets/images/validateDOMNesting_error-7d182ea8914f74a34fbca7afa41d2a69.png"}}]);
"use strict";(self.webpackChunkteaching_toolbox_website_generator=self.webpackChunkteaching_toolbox_website_generator||[]).push([[198],{4137:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,u=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7672:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.title,n=e.demo_link,i=e.code_link,r=e.code_link_name,o=a.createElement("div",null,a.createElement("div",{style:{"text-indent":"25px"}},a.createElement("a",{href:n},"Example result"),a.createElement("br",null)),a.createElement("div",{style:{"text-indent":"25px"}},a.createElement("a",{href:i},r||"Example solution"),a.createElement("br",null)));return t?a.createElement("p",null,a.createElement("b",null,a.createElement("i",null,t)),a.createElement("br",null),o):o}},8405:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return p},default:function(){return h}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),o=n(7672),s=["components"],l={title:"Exercises: Loops"},c=void 0,m={unversionedId:"lessons/The Basics/exercises-loops",id:"lessons/The Basics/exercises-loops",title:"Exercises: Loops",description:"Many rectangles",source:"@site/../../content/lessons/01-The Basics/06-exercises-loops.md",sourceDirName:"lessons/01-The Basics",slug:"/lessons/The Basics/exercises-loops",permalink:"/Learn--Generative-Art/lessons/The Basics/exercises-loops",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Exercises: Loops"},sidebar:"lessons",previous:{title:"Useful Functions",permalink:"/Learn--Generative-Art/lessons/The Basics/useful-functions"},next:{title:"parametric-coordinates",permalink:"/Learn--Generative-Art/lessons/Generative Techniques/parametric-coordinates"}},p=[{value:"Many rectangles",id:"many-rectangles",children:[],level:2},{value:"Random positions",id:"random-positions",children:[],level:2},{value:"Rosace",id:"rosace",children:[],level:2},{value:"Chessboard",id:"chessboard",children:[],level:2},{value:"Custom circle",id:"custom-circle",children:[],level:2}],d={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"many-rectangles"},"Many rectangles"),(0,r.kt)(o.Z,{title:"Draw 100 rectangles. Lay them out as you want.",demo_link:"https://p5-class-jf.github.io/100-rectangles-v1/",code_link:"https://github.com/p5-class-jf/100-rectangles-v1/blob/main/src/sketch.ts",mdxType:"Exercise"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Bonus constraints")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"Play with the alpha value (transparency) or with the ",(0,r.kt)("a",{parentName:"em",href:"https://p5js.org/reference/#/p5/blendMode"},"Blend Mode")," to make it more interesting when rectangles overlap.")),(0,r.kt)(o.Z,{title:"",demo_link:"https://p5-class-jf.github.io/100-rectangles-v2/",code_link:"https://github.com/p5-class-jf/100-rectangles-v2/blob/main/src/sketch.ts",mdxType:"Exercise"}))),(0,r.kt)("h2",{id:"random-positions"},"Random positions"),(0,r.kt)(o.Z,{title:"Draw 100 ellipses. Try to have more of them near the center of the canvas.",demo_link:"https://p5-class-jf.github.io/100-ellipses/",code_link:"https://github.com/p5-class-jf/100-ellipses/blob/main/src/sketch.ts",mdxType:"Exercise"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Bonus constraints")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"Find several ways of having them concentrated near the center. I can think of at least 3 different ways of achieving this result.")))),(0,r.kt)("h2",{id:"rosace"},"Rosace"),(0,r.kt)(o.Z,{title:"Draw a rosace.",demo_link:"https://p5-class-jf.github.io/rosace/",code_link:"https://github.com/p5-class-jf/rosace/blob/main/src/sketch.ts",mdxType:"Exercise"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Bonus constraints")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"How to colorize the rosace?")),(0,r.kt)(o.Z,{title:"",demo_link:"https://julesfouchy.github.io/p5_Rosace_Generator/",code_link:"https://github.com/JulesFouchy/p5_Rosace_Generator/blob/main/sketch/sketch.ts",mdxType:"Exercise"}),(0,r.kt)("p",{parentName:"div"},"and its ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JulesFouchy/p5_Rosace_Generator/blob/main/shader/myShader.frag"},"fragment shader")))),(0,r.kt)("h2",{id:"chessboard"},"Chessboard"),(0,r.kt)(o.Z,{title:"Make a chessboard pattern.",demo_link:"https://p5-class-jf.github.io/chessboard/",code_link:"https://www.openprocessing.org/sketch/1107037",code_link_name:"Step-by-step help and solution",mdxType:"Exercise"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Bonus constraints")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Can you generalize to any number of grid cells?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Can you think of another tiling pattern? Using three colors instead of two for example.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Can you do it in less than 10 lines of code? Less than 5?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Avoid accumulative variables (compute everything based on the current loop indices instead of having global variables that change from one loop iteration to the next)"),(0,r.kt)("li",{parentName:"ul"},"Use one loop instead of two",(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"li",href:"https://github.com/p5-class-jf/chessboard-10-lines/blob/main/src/sketch.ts"},"Solution in 10 lines"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"li",href:"https://github.com/p5-class-jf/chessboard-5-lines/blob/main/src/sketch.ts"},"Solution in 5 lines"))))))),(0,r.kt)("h2",{id:"custom-circle"},"Custom circle"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},'Draw a circle, but do it by placing each vertex "by hand" using a ',(0,r.kt)("a",{parentName:"strong",href:"https://p5js.org/reference/#/p5/beginShape"},"shape")))),(0,r.kt)(o.Z,{title:"",demo_link:"https://p5-class-jf.github.io/distorted-circle/",code_link:"https://github.com/p5-class-jf/distorted-circle/blob/main/src/sketch.ts",mdxType:"Exercise"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Bonus constraints")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("em",{parentName:"p"},"Now that you drew the circle yourself, you have more control and you can alter it!")),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Add a small random offset to each vertex to create a distorted circle (See Method 0 of the example)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Add an offset based on the angle of the current vertex to make continuous effects (See Methods 1 and 2 of the example)"),(0,r.kt)(o.Z,{title:"",demo_link:"https://p5-class-jf.github.io/distorted-circle-v2/",code_link:"https://github.com/p5-class-jf/distorted-circle-v2/blob/main/src/sketch.ts",mdxType:"Exercise"}))))))}h.isMDXComponent=!0}}]);
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Ztkr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=s(require("@babel/runtime/helpers/defineProperty")),t=require("react"),a=require("react/jsx-runtime");function s(e){return e&&e.__esModule?e:{default:e}}class r extends t.Component{constructor(...t){super(...t),(0,e.default)(this,"state",{active:0}),(0,e.default)(this,"handleIndexClick",e=>{this.setState({active:+e.target.dataset.index})})}render(){const{active:e}=this.state,{images:t}=this.props;return(0,a.jsxs)("div",{className:"carousel",children:[(0,a.jsx)("img",{src:t[e],alt:"animal"}),(0,a.jsx)("div",{className:"carousel-smaller",children:t.map((t,s)=>(0,a.jsx)("img",{src:t,"data-index":s,onClick:this.handleIndexClick,alt:"animal thumbnail",className:s===e?"":"active"},t))})]})}}(0,e.default)(r,"defaultProps",{images:["http://pets-images.dev-apis.com/pets/none.jpg"]});var i=r;exports.default=i;
},{}],"mD05":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=o(require("@babel/runtime/helpers/defineProperty")),r=require("react"),t=require("react-router-dom"),s=require("react/jsx-runtime");function o(e){return e&&e.__esModule?e:{default:e}}class i extends r.Component{constructor(...r){super(...r),(0,e.default)(this,"state",{hasError:!1,redirect:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,r){console.error("ErrorBoundary caught an error",e,r)}componentDidUpdate(){this.state.hasError&&setTimeout(()=>this.setState({redirect:!0}),5e3)}render(){return this.state.redirect?(0,s.jsx)(t.Redirect,{to:"/"}):this.state.hasError?(0,s.jsxs)("h2",{children:["There was an error with this listing. ",(0,s.jsx)(t.Link,{to:"/",children:"Click here"})," ","to back to the home page or wait five seconds."]}):this.props.children}}var a=i;exports.default=a;
},{}],"C/Dc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=p;var e=a(require("@babel/runtime/helpers/defineProperty")),t=require("react"),r=require("react-router-dom"),s=a(require("./ThemeContext")),o=a(require("./Carousel")),n=a(require("./ErrorBoundary")),i=require("react/jsx-runtime");function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function d(t){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?l(Object(s),!0).forEach(function(r){(0,e.default)(t,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}const c=(0,t.lazy)(()=>require("_bundle_loader")(require.resolve("./modal")));class u extends t.Component{constructor(...t){super(...t),(0,e.default)(this,"state",{loading:!0,showModal:!1}),(0,e.default)(this,"toggleModal",()=>this.setState({showModal:!this.state.showModal})),(0,e.default)(this,"adopt",()=>window.location="http://bit.ly/pet-adopt")}async componentDidMount(){const e=await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`),t=await e.json();this.setState(Object.assign({loading:!1},t.pets[0]))}render(){const{animal:e,breed:t,city:r,description:n,name:a,state:l,loading:d,images:u,showModal:h}=this.state;return d?(0,i.jsx)("h2",{children:"loading ...!"}):(0,i.jsxs)("div",{className:"details",children:[(0,i.jsx)(o.default,{images:u}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:a}),(0,i.jsxs)("h2",{children:[e," - ",t," - ",r,", ",l]}),(0,i.jsx)(s.default.Consumer,{children:([e])=>(0,i.jsxs)("button",{style:{backgroundColor:e},onClick:this.toggleModal,children:["Adopt ",a,"!"]})}),(0,i.jsx)("p",{children:n}),h?(0,i.jsx)(c,{children:(0,i.jsxs)("div",{children:[(0,i.jsxs)("h2",{children:["would you like to adopt ",a," ?"]}),(0,i.jsxs)("div",{className:"buttons",children:[(0,i.jsx)("button",{onClick:this.adopt,children:"Yes"}),(0,i.jsx)("button",{onClick:this.toggleModal,children:"Nah!"})]})]})}):null]})]})}}const h=(0,r.withRouter)(u);function p(e){return(0,i.jsx)(n.default,{children:(0,i.jsx)(h,d({},e))})}
},{"./ThemeContext":"2tnM","./Carousel":"Ztkr","./ErrorBoundary":"mD05","_bundle_loader":"Cm3W","./modal":[["modal.ff2feb43.js","WuqA"],"modal.ff2feb43.js.map","WuqA"]}],"CSru":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"Cm3W":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"CSru"}],"6FAI":[function(require,module,exports) {
var n=require("fs");module.exports=function(e){return new Promise(function(t,i){n.readFile(__dirname+e,"utf8",function(n,e){n?i(n):setImmediate(function(){t(e)})})}).then(function(n){new Function("",n)()})};
},{}],0:[function(require,module,exports) {
var b=require("Cm3W");b.register("js",require("6FAI"));b.load([]).then(function(){require("C/Dc");});
},{}]},{},[0], null)
//# sourceMappingURL=/Details.e8ba7c00.js.map
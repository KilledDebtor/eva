(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f048ffec"],{7134:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"slide slide-1 column-2",class:{validate:e.validate}},[r("div",{staticClass:"column"},[e._m(0),r("div",{staticClass:"step"},[e._v("ШАГ 1 из 4")]),r("strong",{staticClass:"description"},[e._v("В первую очередь нужно проверить наличие лекал под Ваш автомобиль")]),r("image-svg",{staticClass:"mobile",class:{loading:e.loading,found:e.found}}),e.isMobile?r("div",{staticClass:"my-select-wrapper",class:{active:e.selectedBrand,error:!e.selectedBrand},on:{change:e.findModel}},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedBrand,expression:"selectedBrand"}],staticClass:"my-select",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedBrand=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Марка автомобиля")]),e._l(e.brands,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2)]):r("v-select",{staticClass:"select",class:{active:e.selectedBrand,error:!e.selectedBrand},attrs:{options:e.brands,placeholder:"Марка автомобиля"},on:{input:e.findModel},model:{value:e.selectedBrand,callback:function(t){e.selectedBrand=t},expression:"selectedBrand"}},[r("span",{attrs:{slot:"no-options"},slot:"no-options"},[e._v("Не найдено")])]),e.isMobile?r("div",{staticClass:"my-select-wrapper",class:{active:e.selectedModel,error:!e.selectedModel}},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedModel,expression:"selectedModel"}],staticClass:"my-select",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedModel=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Модель автомобиля")]),e._l(e.models,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2)]):r("v-select",{staticClass:"select",class:{active:e.selectedModel,error:!e.selectedModel},attrs:{options:e.models,placeholder:"Модель автомобиля",disabled:!e.selectedBrand},model:{value:e.selectedModel,callback:function(t){e.selectedModel=t},expression:"selectedModel"}},[r("span",{attrs:{slot:"no-options"},slot:"no-options"},[e._v("Не найдено")])]),e.isMobile?r("div",{staticClass:"my-select-wrapper",class:{active:e.selectedYear,error:!e.selectedYear}},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedYear,expression:"selectedYear"}],staticClass:"my-select",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedYear=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Год выпуска")]),e._l(e.years,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])}))],2)]):r("v-select",{staticClass:"select",class:{active:e.selectedYear,error:!e.selectedYear},attrs:{options:e.years,placeholder:"Год выпуска",disabled:!e.selectedBrand||!e.selectedModel},model:{value:e.selectedYear,callback:function(t){e.selectedYear=t},expression:"selectedYear"}},[r("span",{attrs:{slot:"no-options"},slot:"no-options"},[e._v("Не найдено")])]),r("button",{staticClass:"button",class:{disabled:e.disabled},on:{click:function(t){return t.preventDefault(),e.sendData(t)}}},[e._v("Проверить")])],1),r("div",{staticClass:"column"},[r("image-svg",{class:{loading:e.loading,found:e.found}})],1)])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",{staticClass:"title"},[e._v("Виртуальный"),r("br"),e._v("конструктор ковриков")])}],a=(r("a4d3"),r("4de4"),r("4160"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("159b"),r("96cf"),r("2fa7")),i=r("2f62");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={name:"slide-1",data:function(){return{json:[],brands:[],models:[],years:[],selectedBrand:"",selectedModel:"",selectedYear:"",loading:!1,validate:!1,found:!1}},methods:c({},Object(i["c"])(["next","setCar"]),{createBrands:function(){var e,t=this;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,regeneratorRuntime.awrap(fetch("https://api.auto.ria.com/categories/1/marks"));case 2:return e=r.sent,r.next=5,regeneratorRuntime.awrap(e.json());case 5:this.json=r.sent,this.json.forEach((function(e){t.brands.push(e.name)}));case 7:case"end":return r.stop()}}),null,this)},findModel:function(){var e=this,t=this.selectedBrand;this.json.forEach((function(r){r.name===t&&e.fetchModel(r.value)}))},fetchModel:function(e){var t,r,n=this;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,regeneratorRuntime.awrap(fetch("https://api.auto.ria.com/categories/1/marks/".concat(e,"/models")));case 2:return t=o.sent,o.next=5,regeneratorRuntime.awrap(t.json());case 5:r=o.sent,this.models=[],r.forEach((function(e){n.models.push(e.name)}));case 8:case"end":return o.stop()}}),null,this)},createYears:function(){for(var e=2020;e>=1980;e--)this.years.push(e)},sendData:function(){var e=this;this.selectedBrand&&this.selectedModel&&this.selectedYear?(this.validate=!1,this.loading=!0,setTimeout((function(){e.found=!0,e.loading=!1}),1e3),setTimeout((function(){e.setCar([e.selectedBrand,e.selectedModel,e.selectedYear]),e.next(),e.found=!1,document.getElementById("rec140931884")&&document.getElementById("rec140931884").scrollIntoView({block:"start",behavior:"smooth"})}),2e3)):this.validate=!0}}),mounted:function(){this.createBrands(),this.createYears()},computed:{disabled:{get:function(){return!(this.selectedBrand&&this.selectedModel&&this.selectedYear)}},isMobile:{get:function(){return window.innerWidth<1024}}}},u=l,d=(r("a68b"),r("2877")),f=Object(d["a"])(u,n,o,!1,null,"23afe737",null);t["default"]=f.exports},"96cf":function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),i=new k(n||[]);return a._invoke=O(e,r,i),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=c;var u="suspendedStart",d="suspendedYield",f="executing",h="completed",p={};function v(){}function m(){}function y(){}var g={};g[a]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(B([])));b&&b!==r&&n.call(b,a)&&(g=b);var _=y.prototype=v.prototype=Object.create(g);function x(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function E(e){function t(r,o,a,i){var s=l(e[r],e,o);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&n.call(u,"__await")?Promise.resolve(u.__await).then((function(e){t("next",e,a,i)}),(function(e){t("throw",e,a,i)})):Promise.resolve(u).then((function(e){c.value=e,a(c)}),(function(e){return t("throw",e,a,i)}))}i(s.arg)}var r;function o(e,n){function o(){return new Promise((function(r,o){t(e,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=o}function O(e,t,r){var n=u;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return C()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var s=j(i,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=l(e,t,r);if("normal"===c.type){if(n=r.done?h:d,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}function j(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator["return"]&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function B(e){if(e){var r=e[a];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){while(++o<e.length)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:C}}function C(){return{value:t,done:!0}}return m.prototype=_.constructor=y,y.constructor=m,y[s]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},x(E.prototype),E.prototype[i]=function(){return this},e.AsyncIterator=E,e.async=function(t,r,n,o){var a=new E(c(t,r,n,o));return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(_),_[s]="Generator",_[a]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=B,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),M(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;M(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:B(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},a68b:function(e,t,r){"use strict";var n=r("c7d0"),o=r.n(n);o.a},b0c0:function(e,t,r){var n=r("83ab"),o=r("9bf2").f,a=Function.prototype,i=a.toString,s=/^\s*function ([^ (]*)/,c="name";!n||c in a||o(a,c,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(e){return""}}})},c7d0:function(e,t,r){}}]);
//# sourceMappingURL=chunk-f048ffec.61c5b55f.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ffaea76"],{"182e":function(t,e,s){},"381f":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slide"},[t._m(0),i("div",{staticClass:"step"},[t._v("ШАГ 3 из 4")]),t._m(1),i("button",{staticClass:"button-prev bottom-space",on:{click:function(e){return e.preventDefault(),t.prev(e)}}},[t._v("Вернуться назад ")]),i("div",{staticClass:"choose"},t._l(t.getKits,(function(e,a){return i("div",{key:a,staticClass:"item"},[i("h3",{staticClass:"title"},[t._v(t._s(e.title)+" "),i("i",{staticClass:"icon-info",on:{click:function(e){return e.stopPropagation(),t.modalInfo(a)}}})]),i("div",{staticClass:"acc-title"},[t._v("Аксессуары")]),i("div",{staticClass:"acc-desc"},[t._v("скидка не распространяется")]),i("img",{staticClass:"pic",attrs:{src:s("6f08"),alt:""}}),e.pyatnik||e.shildi?i("div",{staticClass:"options"},[i("div",{staticClass:"option"},[i("input",{staticClass:"input",attrs:{type:"checkbox",id:"pyatnik-"+a},on:{change:function(s){return t.calc(a,e,"pyatnik")}}}),i("label",{staticClass:"label",attrs:{for:"pyatnik-"+a,"data-text":"Подпятник"}})]),i("div",{staticClass:"option"},[i("input",{staticClass:"input",attrs:{type:"checkbox",id:"shilda-"+a},on:{change:function(s){return t.calc(a,e,"shilda")}}}),i("label",{staticClass:"label",attrs:{for:"shilda-"+a,"data-text":"Шильды"}}),i("v-select",{attrs:{options:["1","2","3","4","5"],disabled:t.isSelectDisabled(a),placeholder:"1"},on:{input:function(e){return t.setShildaCount([e,a])}}})],1)]):t._e(),i("div",{staticClass:"price-wrapper"},[i("div",{staticClass:"price"},[t._v(t._s(t.getPrice(a))+" грн")]),"econom"!==a?i("div",{staticClass:"privat"},[t._v("Оплата частями")]):t._e()]),i("button",{staticClass:"button",on:{click:function(s){return s.preventDefault(),t.sendData(e,a)}}},[t._v("Выбрать комплект")])])})),0)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"title"},[t._v("Виртуальный"),s("br"),t._v("конструктор ковриков")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("strong",{staticClass:"description"},[t._v("Следующий шаг - выбор комплекта и подбор"),s("br"),t._v("дополнительных аксессуаров")])}],n=(s("a4d3"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("2fa7")),c=s("2f62");function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(s,!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var l={name:"slide-3",methods:o({},Object(c["c"])(["setOption","next","setKit","setShildaCount","setPrice","modalInfo"]),{calc:function(t,e,s,i){"pyatnik"===s&&this.setOption([t,"pyatnik"]),"shilda"===s&&this.setOption([t,"shilda"])},sendData:function(t,e){var s=this.getPrice(e);this.setKit(t),this.setPrice(s),this.next()}}),computed:o({},Object(c["b"])(["getKits","getPrice","isSelectDisabled"]))},p=l,u=(s("9bcc"),s("2877")),d=Object(u["a"])(p,i,a,!1,null,null,null);e["default"]=d.exports},"6f08":function(t,e,s){t.exports=s.p+"img/kit.560e6824.png"},"9bcc":function(t,e,s){"use strict";var i=s("182e"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-0ffaea76.aecb954b.js.map
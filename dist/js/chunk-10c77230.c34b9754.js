(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10c77230"],{"66ad":function(t,e,a){},"7cb9":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"slide slide-4 column-2",class:{submitted:t.submitted,validate:t.validate}},[t.submitted?a("div",{staticClass:"final"},[a("button",{staticClass:"button button-final"},[t._v("Спасибо за заявку, "+t._s(this.$store.state.personal[0])+"!")]),a("div",{staticClass:"description"},[t._v("Мы свяжемся с вами в ближайшее время, чтобы обсудить коврики, которые уже ждет ваш автомобиль "+t._s(this.$store.state.carModel[0])+" "+t._s(this.$store.state.carModel[1])+".")])]):t._e(),t.submitted?t._e():[a("div",{staticClass:"column"},[t._m(0),a("div",{staticClass:"step"},[t._v("ШАГ 4 из 4")]),t.submitted?t._e():[a("strong",{staticClass:"description"},[t._v("Последний шаг – определение сроков пошива и одного из 4 способов оплаты. Заполните форму для связи с консультантом")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",class:{active:t.name,error:!t.name},attrs:{type:"text",placeholder:"Имя"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"input m-b-0",class:{active:t.phone,error:!t.phone},attrs:{type:"number",placeholder:"Телефон"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),a("input",{staticClass:"input",attrs:{type:"checkbox",id:"agree"},on:{change:function(e){t.agree=!t.agree}}}),a("label",{staticClass:"label",class:{error:!t.agree},attrs:{for:"agree","data-text":"Даю согласие на обработку персональных данных"}}),a("div",{staticClass:"flex"},[a("button",{staticClass:"button-prev",on:{click:function(e){return e.preventDefault(),t.prev(e)}}},[t._v("Вернуться назад ")]),t.submitted?t._e():a("button",{staticClass:"button",class:{disabled:t.disabled},on:{click:function(e){return e.preventDefault(),t.sendData(e)}}},[t._v("Жду звонка")])])]],2)],a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("div",{staticClass:"column"},[a("div",{staticClass:"features"},[a("div",{staticClass:"feature"},[a("div",{staticClass:"icon-1"}),a("div",[t._v("Гарантия эксплуатации"),a("br"),t._v("12 месяцев")])]),a("div",{staticClass:"feature"},[a("div",{staticClass:"icon-2"}),a("div",[t._v("Доставка по Украине"),a("br"),t._v("в течение 2 дней")])]),a("div",{staticClass:"feature"},[a("div",{staticClass:"icon-3"}),a("div",[t._v("Мгновенная"),a("br"),t._v("рассрочка платежа")])]),a("div",{staticClass:"feature"},[a("div",{staticClass:"icon-4"}),a("div",[t._v("Пошив"),a("br"),t._v("от 1 до 3 дней ")])])])])])],2)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",{staticClass:"title"},[t._v("Виртуальный"),a("br"),t._v("конструктор ковриков")])}],s=(a("a4d3"),a("99af"),a("4de4"),a("4160"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("2fa7")),r=a("2f62");function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(a,!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={name:"slide-4",data:function(){return{name:"",phone:"",finalText:"Жду звонка",loading:!1,submitted:!1,agree:!1,validate:!1}},methods:c({},Object(r["c"])(["setPersonal","prev"]),{sendData:function(){var t=this;this.name&&this.phone&&this.agree?(this.validate=!1,this.setPersonal([this.name,this.phone]),this.getAllInfo(),this.loading=!0,setTimeout((function(){t.loading=!1,t.submitted=!0}),1e3)):this.validate=!0},getAllInfo:function(){var t=this.$store.state.kit,e=this.$store.state.totalPrice,a={personal:"".concat(this.$store.state.personal[0],", ").concat(this.$store.state.personal[1]),car:"".concat(this.$store.state.carModel[0],", ").concat(this.$store.state.carModel[1],", ").concat(this.$store.state.carModel[2]),color:"".concat(this.$store.state.colors[0],", ").concat(this.$store.state.colors[1]),options:function(){if("pyatnik"in t){var a="Комплект: ".concat(t.title,"; Сумма заказа: ").concat(e);return t.pyatnik.is?a+="Подпятник: Да. ":a+="Подпятник: Нет, ",t.shildi.is?a+="Шильды: Да - ".concat(t.shildi.count,"шт."):a+="Шильды: Нет.",a}return"Комплект: ".concat(t.title,"; Подпятник и Шильды - Нет")}},i=[a.personal,a.car,a.color,a.options()];if(!(document.querySelector('div[data-input-lid="1493283059688"] input')&&document.querySelector('div[data-input-lid="1573456678439"] input')&&document.querySelector('div[data-input-lid="1573456688066"] input')&&document.querySelector('div[data-input-lid="1573456705570"] input')))return console.log("Нужных полей не найдено.");document.querySelector('div[data-input-lid="1493283059688"] input').value=i[0],document.querySelector('div[data-input-lid="1573456678439"] input').value=i[1],document.querySelector('div[data-input-lid="1573456688066"] input').value=i[2],document.querySelector('div[data-input-lid="1573456705570"] input').value=i[3],document.querySelector(".t-form__submit button").click()}}),computed:{disabled:{get:function(){return!(this.name&&this.phone&&this.agree)}}}},u=l,d=(a("a02f"),a("2877")),p=Object(d["a"])(u,i,n,!1,null,"8278cb98",null);e["default"]=p.exports},"99af":function(t,e,a){"use strict";var i=a("23e7"),n=a("d039"),s=a("e8b5"),r=a("861d"),o=a("7b0b"),c=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),p=a("b622"),v=a("60ae"),f=p("isConcatSpreadable"),b=9007199254740991,m="Maximum allowed index exceeded",h=v>=51||!n((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),g=d("concat"),y=function(t){if(!r(t))return!1;var e=t[f];return void 0!==e?!!e:s(t)},_=!h||!g;i({target:"Array",proto:!0,forced:_},{concat:function(t){var e,a,i,n,s,r=o(this),d=u(r,0),p=0;for(e=-1,i=arguments.length;e<i;e++)if(s=-1===e?r:arguments[e],y(s)){if(n=c(s.length),p+n>b)throw TypeError(m);for(a=0;a<n;a++,p++)a in s&&l(d,p,s[a])}else{if(p>=b)throw TypeError(m);l(d,p++,s)}return d.length=p,d}})},a02f:function(t,e,a){"use strict";var i=a("66ad"),n=a.n(i);n.a},b0c0:function(t,e,a){var i=a("83ab"),n=a("9bf2").f,s=Function.prototype,r=s.toString,o=/^\s*function ([^ (]*)/,c="name";!i||c in s||n(s,c,{configurable:!0,get:function(){try{return r.call(this).match(o)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-10c77230.c34b9754.js.map
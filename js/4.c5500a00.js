(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"1ae7":function(t,a,e){"use strict";var r=e("7f27"),n=e.n(r);n.a},"7f27":function(t,a,e){},e009:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-form",{on:{submit:function(a){return a.preventDefault(),t.submitForm(a)}}},[e("q-banner",{staticClass:"bg-grey-3 q-mb-lg",scopedSlots:t._u([{key:"avatar",fn:function(){return[e("q-icon",{attrs:{name:"account_circle",color:"primary"}})]},proxy:!0}])},["login"==this.tab?e("span",[t._v("\n\t\t\t\tВойдите, чтобы получить доступ ко всем функциям.\n\t\t\t")]):e("span",[t._v("\n\t\t\t\tЗарегистрируйтесь, чтобы получить доступ ко всем функциям.\n\t\t\t")])]),e("q-input",{ref:"email",staticClass:"q-mb-md",attrs:{rules:[function(a){return t.isValidEmail(a)||"Введите корректный E-mail"}],"lazy-rules":"",outlined:"",label:"E-mail"},model:{value:t.formData.email,callback:function(a){t.$set(t.formData,"email",a)},expression:"formData.email"}}),e("q-input",{ref:"password",staticClass:"q-mb-md",attrs:{rules:[function(t){return t.length>=6||"Пароль не должен быть меньше 6 символов"}],"lazy-rules":"",outlined:"",label:"Пароль",type:"password"},model:{value:t.formData.password,callback:function(a){t.$set(t.formData,"password",a)},expression:"formData.password"}}),e("div",{staticClass:"row"},[e("q-space"),"login"==this.tab?e("q-btn",{attrs:{type:"submit",color:"primary",label:"Войти"}}):e("q-btn",{attrs:{type:"submit",color:"primary",label:"Зарегистрироваться"}})],1)],1)},n=[],s=(e("8e6e"),e("8a81"),e("ac6a"),e("cadf"),e("06db"),e("456d"),e("c47a")),o=e.n(s),i=e("2f62");function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){o()(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var u={props:["tab"],data:function(){return{formData:{email:"",password:""}}},methods:c({},Object(i["b"])("auth",["registerUser","loginUser"]),{isValidEmail:function(t){var a=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return a.test(String(t).toLowerCase())},submitForm:function(){this.$refs.email.validate(),this.$refs.password.validate(),this.$refs.email.hasError||this.$refs.password.hasError||("login"==this.tab?this.loginUser(this.formData):this.registerUser(this.formData))}})},b=u,p=e("2877"),f=e("eebe"),m=e.n(f),d=e("0378"),g=e("54e1"),y=e("0016"),h=e("27f9"),v=e("2c91"),w=e("9c40"),q=Object(p["a"])(b,r,n,!1,null,null,null);a["default"]=q.exports;m()(q,"components",{QForm:d["a"],QBanner:g["a"],QIcon:y["a"],QInput:h["a"],QSpace:v["a"],QBtn:w["a"]})},f724:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{attrs:{padding:""}},[e("q-card",{staticClass:"auth-card"},[e("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab",{attrs:{name:"login",label:"Вход"}}),e("q-tab",{attrs:{name:"register",label:"Регистрация"}})],1),e("q-separator"),e("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab-panel",{attrs:{name:"login"}},[e("login-register",{attrs:{tab:t.tab}})],1),e("q-tab-panel",{attrs:{name:"register"}},[e("login-register",{attrs:{tab:t.tab}})],1)],1)],1)],1)},n=[],s={components:{"login-register":e("e009").default},data:function(){return{tab:"login"}}},o=s,i=(e("1ae7"),e("2877")),l=e("eebe"),c=e.n(l),u=e("9989"),b=e("f09f"),p=e("429b"),f=e("7460"),m=e("eb85"),d=e("adad"),g=e("823b"),y=Object(i["a"])(o,r,n,!1,null,null,null);a["default"]=y.exports;c()(y,"components",{QPage:u["a"],QCard:b["a"],QTabs:p["a"],QTab:f["a"],QSeparator:m["a"],QTabPanels:d["a"],QTabPanel:g["a"]})}}]);
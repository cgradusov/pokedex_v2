!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/pokedex_v2/",r(r.s=7)}([function(e,t,r){e.exports=r(6)},function(e,t,r){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(n){}},function(e,t,r){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(n){}},function(e,t,r){"use strict";try{self["workbox:routing:5.1.4"]&&_()}catch(n){}},function(e,t,r){"use strict";try{self["workbox:strategies:5.1.4"]&&_()}catch(n){}},function(e,t,r){"use strict";try{self["workbox:expiration:5.1.4"]&&_()}catch(n){}},function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(S){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof y?t:y,o=Object.create(a.prototype),i=new E(n||[]);return o._invoke=function(e,t,r){var n=l;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===a)throw o;return U()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=R(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=f(e,t,r);if("normal"===u.type){if(n=r.done?v:h,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(e,r,i),o}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",v="completed",d={};function y(){}function g(){}function m(){}var b={};b[o]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(T([])));x&&x!==r&&n.call(x,o)&&(b=x);var k=m.prototype=y.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function r(a,o,i,c){var u=f(e[a],e,o);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(l).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(u.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(o,o):o()}}function R(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,R(e,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=f(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function q(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function T(e){if(e){var r=e[o];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:U}}function U(){return{value:t,done:!0}}return g.prototype=k.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},_(L.prototype),L.prototype[i]=function(){return this},e.AsyncIterator=L,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new L(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(k),u(k,c,"Generator"),k[o]=function(){return this},k.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=T,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(q),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return c.type="throw",c.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),q(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;q(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.r(t);r(1);function i(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=a(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw i}}}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){var t=l();return function(){var r,n=f(e);if(t){var a=f(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return p(this,r)}}function d(e,t,r){return(d=l()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&u(a,r.prototype),a}).apply(null,arguments)}function y(e){var t="function"===typeof Map?new Map:void 0;return(y=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return d(e,arguments,f(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),u(n,e)})(e)}var g=function(e){for(var t=e,r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return n.length>0&&(t+=" :: ".concat(JSON.stringify(n))),t},m=function(e){s(r,e);var t=v(r);function r(e,n){var a;c(this,r);var o=g(e,n);return(a=t.call(this,o)).name=e,a.details=n,a}return r}(y(Error)),b=new Set;var w={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!==typeof registration?registration.scope:""},x=function(e){return[w.prefix,e,w.suffix].filter((function(e){return e&&e.length>0})).join("-")},k=function(e){return e||x(w.precache)},_=function(e){return e||x(w.runtime)},L=r(0),R=r.n(L);function O(e,t,r,n,a,o,i){try{var c=e[o](i),u=c.value}catch(s){return void r(s)}c.done?t(u):Promise.resolve(u).then(n,a)}function q(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){O(o,n,a,i,c,"next",e)}function c(e){O(o,n,a,i,c,"throw",e)}i(void 0)}))}}function E(){return T.apply(this,arguments)}function T(){return(T=q(R.a.mark((function e(){var t,r,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0,t=i(b),e.prev=2,t.s();case 4:if((r=t.n()).done){e.next=11;break}return n=r.value,e.next=8,n();case 8:0;case 9:e.next=4;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),t.e(e.t0);case 16:return e.prev=16,t.f(),e.finish(16);case 19:0;case 20:case"end":return e.stop()}}),e,null,[[2,13,16,19]])})))).apply(this,arguments)}var U,S=function(e){return new URL(String(e),location.href).href.replace(new RegExp("^".concat(location.origin)),"")},j=function(e,t){return e.filter((function(e){return t in e}))},N=function(){var e=q(R.a.mark((function e(t){var r,n,a,o,c,u,s,f;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.request,n=t.mode,a=t.plugins,o=j(void 0===a?[]:a,"cacheKeyWillBeUsed"),c=r,u=i(o),e.prev=4,u.s();case 6:if((s=u.n()).done){e.next=15;break}return f=s.value,e.next=10,f.cacheKeyWillBeUsed.call(f,{mode:n,request:c});case 10:"string"===typeof(c=e.sent)&&(c=new Request(c));case 13:e.next=6;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),u.e(e.t0);case 20:return e.prev=20,u.f(),e.finish(20);case 23:return e.abrupt("return",c);case 24:case"end":return e.stop()}}),e,null,[[4,17,20,23]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=q(R.a.mark((function e(t){var r,n,a,o,c,u,s,f,l,h;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.request,n=t.response,a=t.event,o=t.plugins,c=n,u=!1,s=i(void 0===o?[]:o),e.prev=4,s.s();case 6:if((f=s.n()).done){e.next=19;break}if(!("cacheWillUpdate"in(l=f.value))){e.next=17;break}return u=!0,h=l.cacheWillUpdate,e.next=13,h.call(l,{request:r,response:c,event:a});case 13:if(c=e.sent){e.next=17;break}return e.abrupt("break",19);case 17:e.next=6;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(4),s.e(e.t0);case 24:return e.prev=24,s.f(),e.finish(24);case 27:return u||(c=c&&200===c.status?c:void 0),e.abrupt("return",c||null);case 29:case"end":return e.stop()}}),e,null,[[4,21,24,27]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=q(R.a.mark((function e(t){var r,n,a,o,c,u,s,f,l,h,p,v,d;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.cacheName,n=t.request,a=t.event,o=t.matchOptions,c=t.plugins,u=void 0===c?[]:c,e.next=3,self.caches.open(r);case 3:return s=e.sent,e.next=6,N({plugins:u,request:n,mode:"read"});case 6:return f=e.sent,e.next=9,s.match(f,o);case 9:l=e.sent,h=i(u),e.prev=12,h.s();case 14:if((p=h.n()).done){e.next=24;break}if(!("cachedResponseWillBeUsed"in(v=p.value))){e.next=22;break}return d=v.cachedResponseWillBeUsed,e.next=20,d.call(v,{cacheName:r,event:a,matchOptions:o,cachedResponse:l,request:f});case 20:l=e.sent;case 22:e.next=14;break;case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(12),h.e(e.t0);case 29:return e.prev=29,h.f(),e.finish(29);case 32:return e.abrupt("return",l);case 33:case"end":return e.stop()}}),e,null,[[12,26,29,32]])})));return function(t){return e.apply(this,arguments)}}(),C={put:function(){var e=q(R.a.mark((function e(t){var r,n,a,o,c,u,s,f,l,h,p,v,d,y,g;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.cacheName,n=t.request,a=t.response,o=t.event,c=t.plugins,u=void 0===c?[]:c,s=t.matchOptions,e.next=4;break;case 4:return e.next=6,N({plugins:u,request:n,mode:"write"});case 6:if(f=e.sent,a){e.next=10;break}throw new m("cache-put-with-no-response",{url:S(f.url)});case 10:return e.next=12,K({event:o,plugins:u,response:a,request:f});case 12:if(l=e.sent){e.next=16;break}return e.abrupt("return");case 16:return e.next=18,self.caches.open(r);case 18:if(h=e.sent,!((p=j(u,"cacheDidUpdate")).length>0)){e.next=26;break}return e.next=23,P({cacheName:r,matchOptions:s,request:f});case 23:e.t0=e.sent,e.next=27;break;case 26:e.t0=null;case 27:return v=e.t0,e.prev=29,e.next=32,h.put(f,l);case 32:e.next=40;break;case 34:if(e.prev=34,e.t1=e.catch(29),"QuotaExceededError"!==e.t1.name){e.next=39;break}return e.next=39,E();case 39:throw e.t1;case 40:d=i(p),e.prev=41,d.s();case 43:if((y=d.n()).done){e.next=49;break}return g=y.value,e.next=47,g.cacheDidUpdate.call(g,{cacheName:r,event:o,oldResponse:v,newResponse:l,request:f});case 47:e.next=43;break;case 49:e.next=54;break;case 51:e.prev=51,e.t2=e.catch(41),d.e(e.t2);case 54:return e.prev=54,d.f(),e.finish(54);case 57:case"end":return e.stop()}}),e,null,[[29,34],[41,51,54,57]])})));return function(t){return e.apply(this,arguments)}}(),match:P};function A(){if(void 0===U){var e=new Response("");if("body"in e)try{new Response(e.body),U=!0}catch(t){U=!1}U=!1}return U}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){a=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function F(e,t,r){return t&&I(e.prototype,t),r&&I(e,r),e}var W=function(){function e(t,r){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=a.onupgradeneeded,i=a.onversionchange;c(this,e),this._db=null,this._name=t,this._version=r,this._onupgradeneeded=o,this._onversionchange=i||function(){return n.close()}}return F(e,[{key:"db",get:function(){return this._db}},{key:"open",value:function(){var e=q(R.a.mark((function e(){var t=this;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._db){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,new Promise((function(e,r){var n=!1;setTimeout((function(){n=!0,r(new Error("The open request was blocked and timed out"))}),t.OPEN_TIMEOUT);var a=indexedDB.open(t._name,t._version);a.onerror=function(){return r(a.error)},a.onupgradeneeded=function(e){n?(a.transaction.abort(),a.result.close()):"function"===typeof t._onupgradeneeded&&t._onupgradeneeded(e)},a.onsuccess=function(){var r=a.result;n?r.close():(r.onversionchange=t._onversionchange.bind(t),e(r))}}));case 4:return this._db=e.sent,e.abrupt("return",this);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getKey",value:function(){var e=q(R.a.mark((function e(t,r){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAllKeys(t,r,1);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"getAll",value:function(){var e=q(R.a.mark((function e(t,r,n){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAllMatching(t,{query:r,count:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"getAllKeys",value:function(){var e=q(R.a.mark((function e(t,r,n){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAllMatching(t,{query:r,count:n,includeKeys:!0});case 2:return a=e.sent,e.abrupt("return",a.map((function(e){return e.key})));case 4:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"getAllMatching",value:function(){var e=q(R.a.mark((function e(t){var r,n,a,o,i,c,u,s,f,l=arguments;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:{},n=r.index,a=r.query,o=void 0===a?null:a,i=r.direction,c=void 0===i?"next":i,u=r.count,s=r.includeKeys,f=void 0!==s&&s,e.next=3,this.transaction([t],"readonly",(function(e,r){var a=e.objectStore(t),i=n?a.index(n):a,s=[],l=i.openCursor(o,c);l.onsuccess=function(){var e=l.result;e?(s.push(f?e:e.value),u&&s.length>=u?r(s):e.continue()):r(s)}}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"transaction",value:function(){var e=q(R.a.mark((function e(t,r,n){var a=this;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.open();case 2:return e.next=4,new Promise((function(e,o){var i=a._db.transaction(t,r);i.onabort=function(){return o(i.error)},i.oncomplete=function(){return e()},n(i,(function(t){return e(t)}))}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"_call",value:function(){var e=q(R.a.mark((function e(t,r,n){var a,o,i,c,u=arguments;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=u.length,o=new Array(a>3?a-3:0),i=3;i<a;i++)o[i-3]=u[i];return c=function(e,n){var a=e.objectStore(r),i=a[t].apply(a,o);i.onsuccess=function(){return n(i.result)}},e.next=4,this.transaction([r],n,c);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"close",value:function(){this._db&&(this._db.close(),this._db=null)}}]),e}();W.prototype.OPEN_TIMEOUT=2e3;for(var H=function(){var e,t=M(B[D],2),r=t[0],n=i(t[1]);try{var a=function(){var t=e.value;t in IDBObjectStore.prototype&&(W.prototype[t]=function(){var e=q(R.a.mark((function e(n){var a,o,i,c=arguments;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=c.length,o=new Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=c[i];return e.next=3,this._call.apply(this,[t,n,r].concat(o));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}())};for(n.s();!(e=n.n()).done;)a()}catch(o){n.e(o)}finally{n.f()}},D=0,B=Object.entries({readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]});D<B.length;D++)H();var G={fetch:function(){var e=q(R.a.mark((function e(t){var r,n,a,o,c,u,s,f,l,h,p,v,d,y,g,b,w,x,k,_,L;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.request,n=t.fetchOptions,a=t.event,o=t.plugins,c=void 0===o?[]:o,"string"===typeof r&&(r=new Request(r)),!(a instanceof FetchEvent&&a.preloadResponse)){e.next=9;break}return e.next=5,a.preloadResponse;case 5:if(!(u=e.sent)){e.next=9;break}return e.abrupt("return",u);case 9:0,s=j(c,"fetchDidFail"),f=s.length>0?r.clone():null,e.prev=12,l=i(c),e.prev=14,l.s();case 16:if((h=l.n()).done){e.next=27;break}if(!("requestWillFetch"in(p=h.value))){e.next=25;break}return v=p.requestWillFetch,d=r.clone(),e.next=23,v.call(p,{request:d,event:a});case 23:r=e.sent;case 25:e.next=16;break;case 27:e.next=32;break;case 29:e.prev=29,e.t0=e.catch(14),l.e(e.t0);case 32:return e.prev=32,l.f(),e.finish(32);case 35:e.next=40;break;case 37:throw e.prev=37,e.t1=e.catch(12),new m("plugin-error-request-will-fetch",{thrownError:e.t1});case 40:if(y=r.clone(),e.prev=41,"navigate"!==r.mode){e.next=48;break}return e.next=45,fetch(r);case 45:g=e.sent,e.next=51;break;case 48:return e.next=50,fetch(r,n);case 50:g=e.sent;case 51:0,b=i(c),e.prev=53,b.s();case 55:if((w=b.n()).done){e.next=64;break}if(!("fetchDidSucceed"in(x=w.value))){e.next=62;break}return e.next=60,x.fetchDidSucceed.call(x,{event:a,request:y,response:g});case 60:g=e.sent;case 62:e.next=55;break;case 64:e.next=69;break;case 66:e.prev=66,e.t2=e.catch(53),b.e(e.t2);case 69:return e.prev=69,b.f(),e.finish(69);case 72:return e.abrupt("return",g);case 75:e.prev=75,e.t3=e.catch(41),k=i(s),e.prev=79,k.s();case 81:if((_=k.n()).done){e.next=87;break}return L=_.value,e.next=85,L.fetchDidFail.call(L,{error:e.t3,event:a,originalRequest:f.clone(),request:y.clone()});case 85:e.next=81;break;case 87:e.next=92;break;case 89:e.prev=89,e.t4=e.catch(79),k.e(e.t4);case 92:return e.prev=92,k.f(),e.finish(92);case 95:throw e.t3;case 96:case"end":return e.stop()}}),e,null,[[12,37],[14,29,32,35],[41,75],[53,66,69,72],[79,89,92,95]])})));return function(t){return e.apply(this,arguments)}}()};function Y(e,t){return $.apply(this,arguments)}function $(){return($=q(R.a.mark((function e(t,r){var n,a,o,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.clone(),a={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},o=r?r(a):a,!A()){e.next=7;break}e.t0=n.body,e.next=10;break;case 7:return e.next=9,n.blob();case 9:e.t0=e.sent;case 10:return i=e.t0,e.abrupt("return",new Response(i,o));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r(5),r(2);var J=[],Q=function(){return J};function V(e){if(!e)throw new m("add-to-cache-list-unexpected-type",{entry:e});if("string"===typeof e){var t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}var r=e.revision,n=e.url;if(!n)throw new m("add-to-cache-list-unexpected-type",{entry:e});if(!r){var a=new URL(n,location.href);return{cacheKey:a.href,url:a.href}}var o=new URL(n,location.href),i=new URL(n,location.href);return o.searchParams.set("__WB_REVISION__",r),{cacheKey:o.href,url:i.href}}var z,X=function(){function e(t){c(this,e),this._cacheName=k(t),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}return F(e,[{key:"addToCacheList",value:function(e){var t,r=[],n=i(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;"string"===typeof a?r.push(a):a&&void 0===a.revision&&r.push(a.url);var o=V(a),c=o.cacheKey,u=o.url,s="string"!==typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(u)&&this._urlsToCacheKeys.get(u)!==c)throw new m("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(u),secondEntry:c});if("string"!==typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(c)&&this._cacheKeysToIntegrities.get(c)!==a.integrity)throw new m("add-to-cache-list-conflicting-integrities",{url:u});this._cacheKeysToIntegrities.set(c,a.integrity)}if(this._urlsToCacheKeys.set(u,c),this._urlsToCacheModes.set(u,s),r.length>0){var f="Workbox is precaching URLs without revision "+"info: ".concat(r.join(", "),"\nThis is generally NOT safe. ")+"Learn more at https://bit.ly/wb-precache";console.warn(f)}}}catch(l){n.e(l)}finally{n.f()}}},{key:"install",value:function(){var e=q(R.a.mark((function e(){var t,r,n,a,o,c,u,s,f,l,h,p,v,d,y,g=this,m=arguments;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.length>0&&void 0!==m[0]?m[0]:{},r=t.event,n=t.plugins,a=[],o=[],e.next=6,self.caches.open(this._cacheName);case 6:return c=e.sent,e.next=9,c.keys();case 9:u=e.sent,s=new Set(u.map((function(e){return e.url}))),f=i(this._urlsToCacheKeys);try{for(f.s();!(l=f.n()).done;)h=M(l.value,2),p=h[0],v=h[1],s.has(v)?o.push(p):a.push({cacheKey:v,url:p})}catch(b){f.e(b)}finally{f.f()}return d=a.map((function(e){var t=e.cacheKey,a=e.url,o=g._cacheKeysToIntegrities.get(t),i=g._urlsToCacheModes.get(a);return g._addURLToCache({cacheKey:t,cacheMode:i,event:r,integrity:o,plugins:n,url:a})})),e.next=16,Promise.all(d);case 16:return y=a.map((function(e){return e.url})),e.abrupt("return",{updatedURLs:y,notUpdatedURLs:o});case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"activate",value:function(){var e=q(R.a.mark((function e(){var t,r,n,a,o,c,u;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,self.caches.open(this._cacheName);case 2:return t=e.sent,e.next=5,t.keys();case 5:r=e.sent,n=new Set(this._urlsToCacheKeys.values()),a=[],o=i(r),e.prev=9,o.s();case 11:if((c=o.n()).done){e.next=19;break}if(u=c.value,n.has(u.url)){e.next=17;break}return e.next=16,t.delete(u);case 16:a.push(u.url);case 17:e.next=11;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(9),o.e(e.t0);case 24:return e.prev=24,o.f(),e.finish(24);case 27:return e.abrupt("return",{deletedURLs:a});case 29:case"end":return e.stop()}}),e,this,[[9,21,24,27]])})));return function(){return e.apply(this,arguments)}}()},{key:"_addURLToCache",value:function(){var e=q(R.a.mark((function e(t){var r,n,a,o,c,u,s,f,l,h,p,v;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.cacheKey,n=t.url,a=t.cacheMode,o=t.event,c=t.plugins,u=t.integrity,s=new Request(n,{integrity:u,cache:a,credentials:"same-origin"}),e.next=4,G.fetch({event:o,plugins:c,request:s});case 4:f=e.sent,h=i(c||[]);try{for(h.s();!(p=h.n()).done;)"cacheWillUpdate"in(v=p.value)&&(l=v)}catch(d){h.e(d)}finally{h.f()}if(!l){e.next=13;break}return e.next=10,l.cacheWillUpdate({event:o,request:s,response:f});case 10:e.t0=e.sent,e.next=14;break;case 13:e.t0=f.status<400;case 14:if(e.t0){e.next=17;break}throw new m("bad-precaching-response",{url:n,status:f.status});case 17:if(!f.redirected){e.next=21;break}return e.next=20,Y(f);case 20:f=e.sent;case 21:return e.next=23,C.put({event:o,plugins:c,response:f,request:r===n?s:new Request(r),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}});case 23:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getURLsToCacheKeys",value:function(){return this._urlsToCacheKeys}},{key:"getCachedURLs",value:function(){return o(this._urlsToCacheKeys.keys())}},{key:"getCacheKeyForURL",value:function(e){var t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}},{key:"matchPrecache",value:function(){var e=q(R.a.mark((function e(t){var r,n,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t instanceof Request?t.url:t,!(n=this.getCacheKeyForURL(r))){e.next=7;break}return e.next=5,self.caches.open(this._cacheName);case 5:return a=e.sent,e.abrupt("return",a.match(n));case 7:return e.abrupt("return",void 0);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createHandler",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(){var r=q(R.a.mark((function r(n){var a,o;return R.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=n.request,r.prev=1,r.next=4,e.matchPrecache(a);case 4:if(!(o=r.sent)){r.next=7;break}return r.abrupt("return",o);case 7:throw new m("missing-precache-entry",{cacheName:e._cacheName,url:a instanceof Request?a.url:a});case 10:if(r.prev=10,r.t0=r.catch(1),!t){r.next=15;break}return r.abrupt("return",fetch(a));case 15:throw r.t0;case 16:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(e){return r.apply(this,arguments)}}()}},{key:"createHandlerBoundToURL",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=this.getCacheKeyForURL(e);if(!r)throw new m("non-precached-url",{url:e});var n=this.createHandler(t),a=new Request(e);return function(){return n({request:a})}}}]),e}(),Z=function(){return z||(z=new X),z};function ee(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=function(){var r=a[n];t.some((function(e){return e.test(r)}))&&e.searchParams.delete(r)},n=0,a=o(e.searchParams.keys());n<a.length;n++)r();return e}var te=R.a.mark(re);function re(e){var t,r,n,a,o,c,u,s,f,l,h,p,v,d=arguments;return R.a.wrap((function(y){for(;;)switch(y.prev=y.next){case 0:return t=d.length>1&&void 0!==d[1]?d[1]:{},r=t.ignoreURLParametersMatching,n=t.directoryIndex,a=t.cleanURLs,o=t.urlManipulation,(c=new URL(e,location.href)).hash="",y.next=5,c.href;case 5:return u=ee(c,r),y.next=8,u.href;case 8:if(!n||!u.pathname.endsWith("/")){y.next=13;break}return(s=new URL(u.href)).pathname+=n,y.next=13,s.href;case 13:if(!a){y.next=18;break}return(f=new URL(u.href)).pathname+=".html",y.next=18,f.href;case 18:if(!o){y.next=37;break}l=o({url:c}),h=i(l),y.prev=21,h.s();case 23:if((p=h.n()).done){y.next=29;break}return v=p.value,y.next=27,v.href;case 27:y.next=23;break;case 29:y.next=34;break;case 31:y.prev=31,y.t0=y.catch(21),h.e(y.t0);case 34:return y.prev=34,h.f(),y.finish(34);case 37:case"end":return y.stop()}}),te,null,[[21,31,34,37]])}var ne=function(e,t){var r,n=Z().getURLsToCacheKeys(),a=i(re(e,t));try{for(a.s();!(r=a.n()).done;){var o=r.value,c=n.get(o);if(c)return c}}catch(u){a.e(u)}finally{a.f()}},ae=!1;function oe(e){ae||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ignoreURLParametersMatching,r=void 0===t?[/^utm_/]:t,n=e.directoryIndex,a=void 0===n?"index.html":n,o=e.cleanURLs,i=void 0===o||o,c=e.urlManipulation,u=k();self.addEventListener("fetch",(function(e){var t=ne(e.request.url,{cleanURLs:i,directoryIndex:a,ignoreURLParametersMatching:r,urlManipulation:c});if(t){var n=self.caches.open(u).then((function(e){return e.match(t)})).then((function(e){return e||fetch(t)}));e.respondWith(n)}}))}(e),ae=!0)}var ie=function(e){var t=Z(),r=Q();e.waitUntil(t.install({event:e,plugins:r}).catch((function(e){throw e})))},ce=function(e){var t=Z();e.waitUntil(t.activate())};r(3);var ue,se=function(e){return e&&"object"===typeof e?e:{handle:e}},fe=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";c(this,e),this.handler=se(r),this.match=t,this.method=n},le=function(e){s(r,e);var t=v(r);function r(e,n,a){c(this,r);return t.call(this,(function(t){var r=t.url,n=e.exec(r.href);if(n&&(r.origin===location.origin||0===n.index))return n.slice(1)}),n,a)}return r}(fe),he=function(){function e(){c(this,e),this._routes=new Map}return F(e,[{key:"routes",get:function(){return this._routes}},{key:"addFetchListener",value:function(){var e=this;self.addEventListener("fetch",(function(t){var r=t.request,n=e.handleRequest({request:r,event:t});n&&t.respondWith(n)}))}},{key:"addCacheListener",value:function(){var e=this;self.addEventListener("message",(function(t){if(t.data&&"CACHE_URLS"===t.data.type){var r=t.data.payload;0;var n=Promise.all(r.urlsToCache.map((function(t){"string"===typeof t&&(t=[t]);var r=d(Request,o(t));return e.handleRequest({request:r})})));t.waitUntil(n),t.ports&&t.ports[0]&&n.then((function(){return t.ports[0].postMessage(!0)}))}}))}},{key:"handleRequest",value:function(e){var t=this,r=e.request,n=e.event;var a=new URL(r.url,location.href);if(a.protocol.startsWith("http")){var o=this.findMatchingRoute({url:a,request:r,event:n}),i=o.params,c=o.route,u=c&&c.handler;if(!u&&this._defaultHandler&&(u=this._defaultHandler),u){var s;0;try{s=u.handle({url:a,request:r,event:n,params:i})}catch(f){s=Promise.reject(f)}return s instanceof Promise&&this._catchHandler&&(s=s.catch((function(e){return t._catchHandler.handle({url:a,request:r,event:n})}))),s}}}},{key:"findMatchingRoute",value:function(e){var t=e.url,r=e.request,n=e.event;var a,o=i(this._routes.get(r.method)||[]);try{for(o.s();!(a=o.n()).done;){var c=a.value,u=void 0,s=c.match({url:t,request:r,event:n});if(s)return u=s,(Array.isArray(s)&&0===s.length||s.constructor===Object&&0===Object.keys(s).length||"boolean"===typeof s)&&(u=void 0),{route:c,params:u}}}catch(f){o.e(f)}finally{o.f()}return{}}},{key:"setDefaultHandler",value:function(e){this._defaultHandler=se(e)}},{key:"setCatchHandler",value:function(e){this._catchHandler=se(e)}},{key:"registerRoute",value:function(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}},{key:"unregisterRoute",value:function(e){if(!this._routes.has(e.method))throw new m("unregister-route-but-not-found-with-method",{method:e.method});var t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new m("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}]),e}(),pe=function(){return ue||((ue=new he).addFetchListener(),ue.addCacheListener()),ue};function ve(e,t,r){var n;if("string"===typeof e){var a=new URL(e,location.href);n=new fe((function(e){return e.url.href===a.href}),t,r)}else if(e instanceof RegExp)n=new le(e,t,r);else if("function"===typeof e)n=new fe(e,t,r);else{if(!(e instanceof fe))throw new m("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}return pe().registerRoute(n),n}r(4);var de,ye=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};c(this,e),this._cacheName=_(t.cacheName),this._plugins=t.plugins||[],this._fetchOptions=t.fetchOptions,this._matchOptions=t.matchOptions}return F(e,[{key:"handle",value:function(){var e=q(R.a.mark((function e(t){var r,n,a,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.event,n=t.request,[],"string"===typeof n&&(n=new Request(n)),e.next=6,C.match({cacheName:this._cacheName,request:n,event:r,matchOptions:this._matchOptions,plugins:this._plugins});case 6:if(a=e.sent){e.next=21;break}return e.prev=9,e.next=12,this._getFromNetwork(n,r);case 12:a=e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),o=e.t0;case 18:0,e.next=22;break;case 21:0;case 22:if(a){e.next=25;break}throw new m("no-response",{url:n.url,error:o});case 25:return e.abrupt("return",a);case 26:case"end":return e.stop()}}),e,this,[[9,15]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_getFromNetwork",value:function(){var e=q(R.a.mark((function e(t,r){var n,a,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.fetch({request:t,event:r,fetchOptions:this._fetchOptions,plugins:this._plugins});case 2:if(n=e.sent,a=n.clone(),o=C.put({cacheName:this._cacheName,request:t,response:a,event:r,plugins:this._plugins}),r)try{r.waitUntil(o)}catch(i){0}return e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()}]),e}();!function(){var e=q(R.a.mark((function e(t){var r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200!==(r=t.response).status&&0!==r.status){e.next=3;break}return e.abrupt("return",r);case 3:return e.abrupt("return",null);case 4:case"end":return e.stop()}}),e)})))}();self.addEventListener("activate",(function(){return self.clients.claim()})),function(e){Z().addToCacheList(e),e.length>0&&(self.addEventListener("install",ie),self.addEventListener("activate",ce))}([{'revision':'c0bfe820aaabf2ed59a6e64f4b670fcd','url':'/pokedex_v2/index.html'},{'revision':null,'url':'/pokedex_v2/static/css/2.015dc0ab.chunk.css'},{'revision':null,'url':'/pokedex_v2/static/css/main.93844040.chunk.css'},{'revision':null,'url':'/pokedex_v2/static/js/2.978bd49d.chunk.js'},{'revision':null,'url':'/pokedex_v2/static/js/main.7f3066f8.chunk.js'},{'revision':null,'url':'/pokedex_v2/static/js/runtime-main.e42a89b7.js'}]),oe(de);var ge,me=new RegExp("/[^/?]+\\.[^/]+$");ve((function(e){var t=e.request,r=e.url;return"navigate"===t.mode&&(!r.pathname.startsWith("/_")&&!r.pathname.match(me))}),(ge="/pokedex_v2/index.html",Z().createHandlerBoundToURL(ge))),ve((function(e){var t=e.url;return t.origin===self.location.origin&&t.pathname.endsWith(".png")}),new ye({cacheName:"pokeimages",plugins:[]})),self.addEventListener("message",(function(e){e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}))}]);
//# sourceMappingURL=service-worker.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e2e668ee"],{"63ff":function(t,r,e){var n=function(i){"use strict";var u,t=Object.prototype,s=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",e=r.asyncIterator||"@@asyncIterator",n=r.toStringTag||"@@toStringTag";function a(t,r,e,n){var o=r&&r.prototype instanceof c?r:c,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(i,a,c){var u=h;return function(t,r){if(u===p)throw new Error("Generator is already running");if(u===y){if("throw"===t)throw r;return G()}for(c.method=t,c.arg=r;;){var e=c.delegate;if(e){var n=_(e,c);if(n){if(n===v)continue;return n}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(u===h)throw u=y,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);u=p;var o=f(i,a,c);if("normal"===o.type){if(u=c.done?y:l,o.arg===v)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(u=y,c.method="throw",c.arg=o.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}i.wrap=a;var h="suspendedStart",l="suspendedYield",p="executing",y="completed",v={};function c(){}function d(){}function g(){}var m={};m[o]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(P([])));x&&x!==t&&s.call(x,o)&&(m=x);var L=g.prototype=c.prototype=Object.create(m);function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function b(u){var r;this._invoke=function(e,n){function t(){return new Promise(function(t,r){!function r(t,e,n,o){var i=f(u[t],u,e);if("throw"!==i.type){var a=i.arg,c=a.value;return c&&"object"==typeof c&&s.call(c,"__await")?Promise.resolve(c.__await).then(function(t){r("next",t,n,o)},function(t){r("throw",t,n,o)}):Promise.resolve(c).then(function(t){a.value=t,n(a)},function(t){return r("throw",t,n,o)})}o(i.arg)}(e,n,t,r)})}return r=r?r.then(t,t):t()}}function _(t,r){var e=t.iterator[r.method];if(e===u){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=u,_(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var n=f(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,v;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=u),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(r){if(r){var t=r[o];if(t)return t.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var e=-1,n=function t(){for(;++e<r.length;)if(s.call(r,e))return t.value=r[e],t.done=!1,t;return t.value=u,t.done=!0,t};return n.next=n}}return{next:G}}function G(){return{value:u,done:!0}}return d.prototype=L.constructor=g,g.constructor=d,g[n]=d.displayName="GeneratorFunction",i.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,n in t||(t[n]="GeneratorFunction")),t.prototype=Object.create(L),t},i.awrap=function(t){return{__await:t}},E(b.prototype),b.prototype[e]=function(){return this},i.AsyncIterator=b,i.async=function(t,r,e,n){var o=new b(a(t,r,e,n));return i.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},E(L),L[n]="Generator",L[o]=function(){return this},L.toString=function(){return"[object Generator]"},i.keys=function(e){var n=[];for(var t in e)n.push(t);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},i.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=u,this.done=!1,this.delegate=null,this.method="next",this.arg=u,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&s.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=u)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function t(t,r){return i.type="throw",i.arg=e,n.next=t,r&&(n.method="next",n.arg=u),!!r}for(var r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=s.call(o,"catchLoc"),c=s.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:P(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=u),v}},i}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},e71e:function(t,r,e){"use strict";function u(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function n(c){return function(){var t=this,a=arguments;return new Promise(function(r,e){var n=c.apply(t,a);function o(t){u(n,r,e,o,i,"next",t)}function i(t){u(n,r,e,o,i,"throw",t)}o(void 0)})}}e.d(r,"a",function(){return n})},f820:function(t,r,e){"use strict";e.r(r);var n,o=(e("63ff"),e("e71e")),i={data:function(){return{}},methods:{fn1:(n=Object(o.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fn2();case 2:t.sent;case 4:case"end":return t.stop()}},t,this)})),function(){return n.apply(this,arguments)}),fn2:function(){return new Promise(function(t,r){setTimeout(function(){t(1)})})}}},a=e("6691"),c=Object(a.a)(i,function(){this.$createElement;return this._self._c,this._m(0)},[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"about"},[r("h1",[this._v("This is an about page")])])}],!1,null,null,null);r.default=c.exports}}]);
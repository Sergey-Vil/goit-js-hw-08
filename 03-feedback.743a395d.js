!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,b=Math.min,g=function(){return s.Date.now()};function p(e,t,n){var r,o,a,u,f,c,l=0,d=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function S(e){return l=e,f=setTimeout(h,t),d?p(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function h(){var e=g();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return s?b(n,a-(e-l)):n}(e))}function w(e){return f=void 0,m&&r?p(e):(r=o=void 0,u)}function T(){var e=g(),n=O(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return S(c);if(s)return f=setTimeout(h,t),p(c)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,y(n)&&(d=!!n.leading,a=(s="maxWait"in n)?v(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},T.flush=function(){return void 0===f?u:w(g())},T}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?c(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};var S=document.querySelector(".feedback-form"),O=document.querySelector(".feedback-form input"),h=document.querySelector(".feedback-form textarea");S.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),S.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem("feedback-form-state")}));var w,T={};(w=JSON.parse(localStorage.getItem("feedback-form-state")))&&(O.value=w.email||"",h.value=w.message||"",T={email:w.email,message:w.message})}();
//# sourceMappingURL=03-feedback.743a395d.js.map

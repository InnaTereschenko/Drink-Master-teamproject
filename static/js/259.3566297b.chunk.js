(self.webpackChunkdrink_master_teamproject=self.webpackChunkdrink_master_teamproject||[]).push([[259],{4054:function(t,n,e){"use strict";e.d(n,{a:function(){return a}});var i=e(9439),r=e(2791),o=e(3881),u=e.n(o),a=function(){var t=(0,r.useState)(window.innerWidth),n=(0,i.Z)(t,2),e=n[0],o=n[1];return(0,r.useEffect)((function(){var t=u()((function(){o(window.innerWidth)}),500);return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),{width:e}}},2259:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return m}});var i=e(9439),r=e(2791),o=e(8880),u=e(3757),a=e(9085),f=(e(5462),e(7442)),c=e(9483),s=e(55),l=e(9434),v=e(7189),d=e(5255),g=e(4054),p=e(7689),h=e(184);function m(){var t=(0,p.s0)(),n=(0,l.I0)(),e=(0,g.a)().width,m=(0,s.s)(),w=m.total,j=m.favoriteDrinks,y=(0,r.useState)(1),b=(0,i.Z)(y,2),x=b[0],T=b[1],O=(0,r.useState)(!1),E=(0,i.Z)(O,2),k=E[0],P=E[1],S=e<1440?8:9,Z=function(t){T(t)},I=Math.ceil(w/S);return(0,r.useEffect)((function(){0===(null===j||void 0===j?void 0:j.length)&&x>1&&Z(x-1),P((null===j||void 0===j?void 0:j.length)>0)}),[j]),(0,r.useEffect)((function(){t("?page=".concat(x))}),[x]),(0,r.useEffect)((function(){n((0,v.cj)({page:x,limit:S})).unwrap().catch((function(){a.Am.error("Something went wrong. Try again",{position:a.Am.POSITION.TOP_RIGHT,autoClose:1500})}))}),[n,x,w,S]),(0,h.jsxs)(c.t,{children:[(0,h.jsx)(a.Ix,{transition:a.Mi}),(0,h.jsx)(u.Z,{title:"Favorites"}),k>0?(0,h.jsx)(o.Z,{favorite:!0,drinksData:j,onPageChange:Z,currentPage:x}):(0,h.jsx)(d.Z,{}),I>1&&(0,h.jsx)(f.Z,{currentPage:x,totalPages:I,onPageChange:Z,path:"/favorites"})]})}},3881:function(t,n,e){var i="Expected a function",r=NaN,o="[object Symbol]",u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,l="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g,v="object"==typeof self&&self&&self.Object===Object&&self,d=l||v||Function("return this")(),g=Object.prototype.toString,p=Math.max,h=Math.min,m=function(){return d.Date.now()};function w(t,n,e){var r,o,u,a,f,c,s=0,l=!1,v=!1,d=!0;if("function"!=typeof t)throw new TypeError(i);function g(n){var e=r,i=o;return r=o=void 0,s=n,a=t.apply(i,e)}function w(t){var e=t-c;return void 0===c||e>=n||e<0||v&&t-s>=u}function b(){var t=m();if(w(t))return x(t);f=setTimeout(b,function(t){var e=n-(t-c);return v?h(e,u-(t-s)):e}(t))}function x(t){return f=void 0,d&&r?g(t):(r=o=void 0,a)}function T(){var t=m(),e=w(t);if(r=arguments,o=this,c=t,e){if(void 0===f)return function(t){return s=t,f=setTimeout(b,n),l?g(t):a}(c);if(v)return f=setTimeout(b,n),g(c)}return void 0===f&&(f=setTimeout(b,n)),a}return n=y(n)||0,j(e)&&(l=!!e.leading,u=(v="maxWait"in e)?p(y(e.maxWait)||0,n):u,d="trailing"in e?!!e.trailing:d),T.cancel=function(){void 0!==f&&clearTimeout(f),s=0,r=c=o=f=void 0},T.flush=function(){return void 0===f?a:x(m())},T}function j(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&g.call(t)==o}(t))return r;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var e=f.test(t);return e||c.test(t)?s(t.slice(2),e?2:8):a.test(t)?r:+t}t.exports=function(t,n,e){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError(i);return j(e)&&(r="leading"in e?!!e.leading:r,o="trailing"in e?!!e.trailing:o),w(t,n,{leading:r,maxWait:n,trailing:o})}},5462:function(){}}]);
//# sourceMappingURL=259.3566297b.chunk.js.map
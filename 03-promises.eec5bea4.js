var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,r){t[e]=r},e.parcelRequired7c6=n);var o=n("iQIUW");const u=document.querySelector(".form"),i=document.querySelector('[name="delay"]'),l=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');let d=1;function s(e,r){const t=Math.random()>.3;return new Promise((()=>{setTimeout((()=>{t?o.Notify.success(`✅ Fulfilled promise ${e} in ${r}ms`):o.Notify.failure(`❌ Rejected promise ${e} in ${r}ms`)}),r)}))}u.addEventListener("submit",(function(e){e.preventDefault();let r=Number(i.value);for(let e=0;e<a.value;e+=1)s(d,r),d+=1,r+=Number(l.value);e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.eec5bea4.js.map

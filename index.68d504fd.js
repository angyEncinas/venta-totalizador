var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},n=e.parcelRequirec771;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequirec771=n),n.register("iSlgh",(function(e,r){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var t=function(e,r){return e+r};e.exports.default=t}));var o;(o=n("iSlgh"))&&o.__esModule;var i=document.querySelector("#ingresar-cantidad"),l=document.querySelector("#totalizador-form"),u=document.querySelector("#resultado-div");l.addEventListener("submit",(function(e){e.preventDefault();var r=Number.parseInt(i.value);u.innerHTML="<p>"+r+"</p>"}));
//# sourceMappingURL=index.68d504fd.js.map

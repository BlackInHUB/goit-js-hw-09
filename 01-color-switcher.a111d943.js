const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");let n=0;function o(){t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}d.disabled=!0,e.addEventListener("click",(function(){n=setInterval(o,1e3),this.disabled=!0,d.disabled=!1})),d.addEventListener("click",(function(){clearInterval(n),this.disabled=!0,e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.a111d943.js.map
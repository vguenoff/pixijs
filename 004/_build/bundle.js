!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,t,n){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=function(e,t){t=t||"#2C3539";var n=void 0,i=void 0,r=void 0,o=void 0;n=window.innerWidth/e.offsetWidth,i=window.innerHeight/e.offsetHeight,r=Math.min(n,i),e.style.transformOrigin="0 0",e.style.transform="scale("+r+")",console.log(n),o=Math.ceil(e.offsetHeight*r)<window.innerHeight?"vertically":"horizontally";var a=void 0;return"horizontally"===o&&(a=(window.innerWidth-e.offsetWidth*r)/2,e.style.marginTop=0,e.style.marginBottom=0,e.style.marginLeft=a+"px",e.style.marginRight=a+"px"),"vertically"===o&&(a=(window.innerHeight-e.offsetHeight*r)/2,e.style.marginTop=a+"px",e.style.marginBottom=a+"px",e.style.marginLeft=0,e.style.marginRight=0),e.style.paddingLeft=0,e.style.paddingRight=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.display="block",document.body.style.backgroundColor=t,r}},function(e,t,n){"use strict";var i=n(0),r=PIXI.Container,o=PIXI.autoDetectRenderer,a=PIXI.loader.resources,d=PIXI.Sprite,l=new r,s=o(800,600);document.getElementById("game").appendChild(s.view),n.i(i.a)(s.view);var u=function(){var e=new d(a["assets/pixie96x48.png"].texture);s.backgroundColor=16777215,l.addChild(e),s.render(l),s.view.style.opacity=1};PIXI.loader.add("assets/pixie96x48.png").load(u),window.addEventListener("resize",function(){n.i(i.a)(s.view)})}]);
//# sourceMappingURL=bundle.js.map
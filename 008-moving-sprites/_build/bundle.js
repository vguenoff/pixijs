!function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,t,i){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,i){"use strict";i.d(t,"a",function(){return n});var n=function(e,t,i,n,r){var o=void 0,a=void 0,s=PIXI.utils.TextureCache,c=PIXI.Texture,d=PIXI.Rectangle;return"string"==typeof e?s[e]&&(o=new c(s[e])):e instanceof c&&(o=new c(e)),o?(a=new d(t,i,n,r),o.frame=a,o.baseTexture.scaleMode=PIXI.SCALE_MODES.NEAREST,o):void console.log("Please enter a "+e+" texture into the cache.")}},function(e,t,i){"use strict";var n=i(3);i.d(t,"a",function(){return r});var r=function(e){var t=i.i(n.a)(37),r=i.i(n.a)(38),o=i.i(n.a)(39),a=i.i(n.a)(40);t.press=function(){e.accelerationX=-e.speed,e.frictionX=1},t.release=function(){o.isDown||(e.accelerationX=0,e.frictionX=e.drag)},r.press=function(){e.accelerationY=-e.speed,e.frictionY=1},r.release=function(){a.isDown||(e.accelerationY=0,e.frictionY=e.drag)},o.press=function(){e.accelerationX=e.speed,e.frictionX=1},o.release=function(){t.isDown||(e.accelerationX=0,e.frictionX=e.drag)},a.press=function(){e.accelerationY=e.speed,e.frictionY=1},a.release=function(){r.isDown||(e.accelerationY=0,e.frictionY=e.drag)}}},function(e,t,i){"use strict";i.d(t,"a",function(){return n});var n=function(e,t){t=t||"#2C3539";var i=void 0,n=void 0,r=void 0,o=void 0;i=window.innerWidth/e.offsetWidth,n=window.innerHeight/e.offsetHeight,r=Math.min(i,n),e.style.transformOrigin="0 0",e.style.transform="scale("+r+")",console.log(i),o=Math.ceil(e.offsetHeight*r)<window.innerHeight?"vertically":"horizontally";var a=void 0;return"horizontally"===o&&(a=(window.innerWidth-e.offsetWidth*r)/2,e.style.marginTop=0,e.style.marginBottom=0,e.style.marginLeft=a+"px",e.style.marginRight=a+"px"),"vertically"===o&&(a=(window.innerHeight-e.offsetHeight*r)/2,e.style.marginTop=a+"px",e.style.marginBottom=a+"px",e.style.marginLeft=0,e.style.marginRight=0),e.style.paddingLeft=0,e.style.paddingRight=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.display="block",document.body.style.backgroundColor=t,r}},function(e,t,i){"use strict";i.d(t,"a",function(){return n});var n=function(e){var t={};return t.code=e,t.isDown=!1,t.isUp=!0,t.press=void 0,t.release=void 0,t.downHandler=function(e){e.keyCode===t.code&&(t.isUp&&t.press&&t.press(),t.isDown=!0,t.isUp=!1),e.preventDefault()},t.upHandler=function(e){e.keyCode===t.code&&(t.isDown&&t.release&&t.release(),t.isDown=!1,t.isUp=!0),e.preventDefault()},window.addEventListener("keydown",t.downHandler.bind(t),!1),window.addEventListener("keyup",t.upHandler.bind(t),!1),t}},function(e,t,i){"use strict";var n=i(2),r=i(0),o=i(1),a=i(5),s=PIXI.Container,c=PIXI.autoDetectRenderer,d=PIXI.loader,l=PIXI.Sprite,u=new s,f=c(512,512),v=void 0,p=void 0;document.getElementById("game").appendChild(f.view),i.i(n.a)(f.view);var h=function(){v.vx+=v.accelerationX,v.vy+=v.accelerationY,v.vx*=v.frictionX,v.vy*=v.frictionY,v.vy+=.1,v.x+=v.vx,v.y+=v.vy;var e=i.i(a.a)(v,{x:0,y:0,width:f.view.width,height:f.view.height});e&&((e.has("left")||e.has("right"))&&(v.vx=-v.vx),(e.has("top")||e.has("bottom"))&&(v.vy=-v.vy))},w=function e(){requestAnimationFrame(e),p(),f.render(u)},y=function(){v=new l(i.i(r.a)("assets/pixie96x64.png",0,0,96,64)),v.x=f.view.width/2-v.width/2,v.y=f.view.height/2-v.height/2,v.vx=0,v.vy=0,v.accelerationX=0,v.accelerationY=0,v.frictionX=1,v.frictionY=1,v.speed=.2,v.drag=.98,i.i(o.a)(v),p=h,u.addChild(v),f.view.style.opacity=1,w()};d.add("assets/pixie96x64.png").load(y),window.addEventListener("resize",function(){i.i(n.a)(f.view)})},function(e,t,i){"use strict";i.d(t,"a",function(){return n});var n=function(e,t){var i=new Set;return e.x<t.x&&(e.x=t.x,i.add("left")),e.y<t.y&&(e.y=t.y,i.add("top")),e.x+e.width>t.width&&(e.x=t.width-e.width,i.add("right")),e.y+e.height>t.height&&(e.y=t.height-e.height,i.add("bottom")),0===i.size&&(i=void 0),i}}]);
//# sourceMappingURL=bundle.js.map
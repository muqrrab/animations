(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[866],{296:function(e){function n(e,n,t){var r,o,i,u,c;function s(){var l=Date.now()-u;l<n&&l>=0?r=setTimeout(s,n-l):(r=null,t||(c=e.apply(i,o),i=o=null))}null==n&&(n=100);var l=function(){i=this,o=arguments,u=Date.now();var l=t&&!r;return r||(r=setTimeout(s,n)),l&&(c=e.apply(i,o),i=o=null),c};return l.clear=function(){r&&(clearTimeout(r),r=null)},l.flush=function(){r&&(c=e.apply(i,o),i=o=null,clearTimeout(r),r=null)},l}n.debounce=n,e.exports=n},8726:function(e,n,t){"use strict";t.d(n,{Z:function(){return E}});var r=t(5893),o=t(7294),i=t(7423),u=t(1915),c=t(6042),s=t(9396),l=t(828),f=t(7297),a=t(3460),d=t(5697),h=t.n(d),v=t(5178),p=t(8556),w=t(6255);function m(){var e=(0,f.Z)(["\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  "," {\n    width: 100%;\n    height: 100%;\n  }\n"]);return m=function(){return e},e}var g=v.ZP.div.withConfig({componentId:"sc-6fa41e44-0"})(m(),p.qk.m),b=(0,o.forwardRef)((function(e,n){var t=e.children,i=(0,l.Z)((0,w.Z)(),2)[1],u=(0,l.Z)((0,a.Z)({debounce:{scroll:1e3,resize:1e3},scroll:!1}),2),f=u[0],d=u[1].height,h=void 0===d?0:d;return(0,o.useEffect)((function(){i((function(e){return(0,s.Z)((0,c.Z)({},e),{containerScrollHeight:h-window.innerHeight})}))}),[h,i]),(0,r.jsx)(g,{ref:n,children:(0,r.jsx)("div",{ref:f,children:t})})}));b.displayName="ScrollingWrapper",b.defaultProps={children:null},b.propTypes={children:h().node};var y=b,E=function(e){var n=e.children,t=(0,o.useRef)(),c=(0,i.v)({container:t}).scrollY,s=(0,o.useState)({containerRef:t,from:[],containerScrollHeight:0,scrollY:c});return(0,r.jsx)(u.hQ.Provider,{value:s,children:(0,r.jsx)(y,{ref:t,children:n})})}},5556:function(e,n,t){"use strict";t.d(n,{e:function(){return a},o:function(){return w}});var r=t(6042),o=t(9396),i=t(9534),u=t(5893),c=t(7650),s=t(1163),l=function(e){var n=(0,s.useRouter)().isPreview;if(!(void 0!==n&&n)||!e)return{};if("string"!==typeof e)return{};var t=JSON.parse(e.replace(/^<!--#storyblok#/,"").replace(/-->$/,""));return{"data-blok-c":JSON.stringify(t),"data-blok-uid":t.id+"-"+t.uid}},f=function(e){var n=e.disabled,t=e.onChange,r=e.children;return n?r:(0,u.jsx)(c.df,{threshold:"0.9",onChange:t,children:r})},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(n){var t=n.items,c=void 0===t?[]:t,s=n.propsPerItem,a=n.onInView,d=(0,i.Z)(n,["items","propsPerItem","onInView"]);return c.map((function(n,t){var c=n.component,h=n._editable,v=n._uid,p=(0,i.Z)(n,["component","_editable","_uid"]),w=(null===e||void 0===e?void 0:e[c])||null,m=l(h);if(!w)return null;var g=(null===s||void 0===s?void 0:s((0,r.Z)({component:c,_uid:v},p)))||{};return(0,u.jsx)(f,{disabled:!a,onChange:function(e){return e&&(null===a||void 0===a?void 0:a(p))},children:(0,u.jsx)(w,(0,o.Z)((0,r.Z)((0,o.Z)((0,r.Z)({},p),{index:t}),d,g),{containerSpread:m}))},v||p.slug)}))}},d=t(7568),h=t(414),v=t(7294),p=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=(0,v.useState)(e),i=o[0],u=o[1],c=Boolean(r);return(0,v.useEffect)((function(){c&&(0,d.Z)((function(){var o,i;return(0,h.__generator)(this,(function(c){switch(c.label){case 0:return[4,t.e(1).then(t.bind(t,1001))];case 1:return o=c.sent().storyblokBridge,[4,r()];case 2:return i=c.sent().SBAdaptor,o(e,n,(function(e){u(i.adaptContent(e))})),[2]}}))}))()}),[c,e,n,r]),c?i:e},w=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=function(t){var o=t.data,c=t.fetchArgs,s=t.preview,l=(0,i.Z)(t,["data","fetchArgs","preview"]),f=p(o,c,s&&n);return(0,u.jsx)(e,(0,r.Z)({},l,f))};return t}},6255:function(e,n,t){"use strict";var r=t(7294),o=t(1915);n.Z=function(){return(0,r.useContext)(o.hQ)}},9054:function(e,n,t){"use strict";var r=t(7294),o={width:0,height:0},i=new Set,u=!1,c=function(){i.forEach((function(e){e({width:window.innerWidth,height:window.innerHeight})}))};n.Z=function(){var e=(0,r.useState)(o),n=e[0],t=e[1];return(0,r.useEffect)((function(){return i.add(t),u||(window.addEventListener("resize",c),u=!0),t({width:window.innerWidth,height:window.innerHeight}),function(){i.delete(t),0===i.size&&(window.removeEventListener("resize",c),u=!1)}}),[]),n}},8039:function(e,n,t){"use strict";t.d(n,{s:function(){return o}});var r=t(5556),o=function(e){return(0,r.o)(e,(function(){return Promise.all([t.e(229),t.e(157)]).then(t.bind(t,6157))}))}},3460:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(7294),o=t(296),i=t.n(o);function u(e){let{debounce:n,scroll:t,polyfill:o,offsetSize:u}=void 0===e?{debounce:0,scroll:!1,offsetSize:!1}:e;const s=o||("undefined"===typeof window?class{}:window.ResizeObserver);if(!s)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[f,a]=(0,r.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),d=(0,r.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:f}),h=n?"number"===typeof n?n:n.scroll:null,v=n?"number"===typeof n?n:n.resize:null,p=(0,r.useRef)(!1);(0,r.useEffect)((()=>(p.current=!0,()=>{p.current=!1})));const[w,m,g]=(0,r.useMemo)((()=>{const e=()=>{if(!d.current.element)return;const{left:e,top:n,width:t,height:r,bottom:o,right:i,x:c,y:s}=d.current.element.getBoundingClientRect(),f={left:e,top:n,width:t,height:r,bottom:o,right:i,x:c,y:s};d.current.element instanceof HTMLElement&&u&&(f.height=d.current.element.offsetHeight,f.width=d.current.element.offsetWidth),Object.freeze(f),p.current&&!l(d.current.lastBounds,f)&&a(d.current.lastBounds=f)};return[e,v?i()(e,v):e,h?i()(e,h):e]}),[a,u,h,v]);function b(){d.current.scrollContainers&&(d.current.scrollContainers.forEach((e=>e.removeEventListener("scroll",g,!0))),d.current.scrollContainers=null),d.current.resizeObserver&&(d.current.resizeObserver.disconnect(),d.current.resizeObserver=null)}function y(){d.current.element&&(d.current.resizeObserver=new s(g),d.current.resizeObserver.observe(d.current.element),t&&d.current.scrollContainers&&d.current.scrollContainers.forEach((e=>e.addEventListener("scroll",g,{capture:!0,passive:!0}))))}var E,Z,x;return E=g,Z=Boolean(t),(0,r.useEffect)((()=>{if(Z){const e=E;return window.addEventListener("scroll",e,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",e,!0)}}}),[E,Z]),x=m,(0,r.useEffect)((()=>{const e=x;return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[x]),(0,r.useEffect)((()=>{b(),y()}),[t,g,m]),(0,r.useEffect)((()=>b),[]),[e=>{e&&e!==d.current.element&&(b(),d.current.element=e,d.current.scrollContainers=c(e),y())},f,w]}function c(e){const n=[];if(!e||e===document.body)return n;const{overflow:t,overflowX:r,overflowY:o}=window.getComputedStyle(e);return[t,r,o].some((e=>"auto"===e||"scroll"===e))&&n.push(e),[...n,...c(e.parentElement)]}const s=["x","y","top","bottom","left","right","width","height"],l=(e,n)=>s.every((t=>e[t]===n[t]))},578:function(e,n,t){"use strict";t.d(n,{H:function(){return s}});var r=t(9180);var o=t(4960),i=t(5262),u=t(4735);var c=t(6681);function s(e,n,t,o){const i="function"===typeof n?n:function(...e){const n=!Array.isArray(e[0]),t=n?0:-1,o=e[0+t],i=e[1+t],u=e[2+t],c=e[3+t],s=(0,r.s)(i,u,{mixer:(l=u[0],(e=>"object"===typeof e&&e.mix)(l)?l.mix:void 0),...c});var l;return n?s(o):s}(n,t,o);return Array.isArray(e)?l(e,i):l([e],(([e])=>i(e)))}function l(e,n){const t=(0,c.h)((()=>[]));return function(e,n){const t=(0,o.c)(n()),r=()=>t.set(n());return r(),(0,i.f)(e,(()=>u.ZP.update(r,!1,!0)),(()=>u.qY.update(r))),t}(e,(()=>{t.length=0;const r=e.length;for(let n=0;n<r;n++)t[n]=e[n].get();return n(t)}))}}}]);
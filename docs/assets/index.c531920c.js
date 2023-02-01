import{g as P,i as w,j as Z,B as x,O as p,K as B,b2 as ee,x as te,o as k,c as re,a as H,J as $,s as z,z as ie,r as j,n as I,w as A,b as ne,d as ae,t as se,q as ue,_ as oe}from"./index.048a73c8.js";var L=null;function _e(e){return L||(L=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(r){return setTimeout(r,16)}).bind(window)),L(e)}var S=null;function de(e){S||(S=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(r){clearTimeout(r)}).bind(window)),S(e)}function le(e){var r=document.createElement("style");return r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e)),(document.querySelector("head")||document.body).appendChild(r),r}function E(e,r){r===void 0&&(r={});var t=document.createElement(e);return Object.keys(r).forEach(function(a){t[a]=r[a]}),t}function U(e,r,t){var a=window.getComputedStyle(e,t||null)||{display:"none"};return a[r]}function D(e){if(!document.documentElement.contains(e))return{detached:!0,rendered:!1};for(var r=e;r!==document;){if(U(r,"display")==="none")return{detached:!1,rendered:!1};r=r.parentNode}return{detached:!1,rendered:!0}}var ce='.resize-triggers{visibility:hidden;opacity:0;pointer-events:none}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}',R=0,b=null;function fe(e,r){e.__resize_mutation_handler__||(e.__resize_mutation_handler__=pe.bind(e));var t=e.__resize_listeners__;if(!t){if(e.__resize_listeners__=[],window.ResizeObserver){var a=e.offsetWidth,s=e.offsetHeight,u=new ResizeObserver(function(){!e.__resize_observer_triggered__&&(e.__resize_observer_triggered__=!0,e.offsetWidth===a&&e.offsetHeight===s)||C(e)}),i=D(e),_=i.detached,d=i.rendered;e.__resize_observer_triggered__=_===!1&&d===!1,e.__resize_observer__=u,u.observe(e)}else if(e.attachEvent&&e.addEventListener)e.__resize_legacy_resize_handler__=function(){C(e)},e.attachEvent("onresize",e.__resize_legacy_resize_handler__),document.addEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);else if(R||(b=le(ce)),ge(e),e.__resize_rendered__=D(e).rendered,window.MutationObserver){var o=new MutationObserver(e.__resize_mutation_handler__);o.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e.__resize_mutation_observer__=o}}e.__resize_listeners__.push(r),R++}function he(e,r){var t=e.__resize_listeners__;if(!!t){if(r&&t.splice(t.indexOf(r),1),!t.length||!r){if(e.detachEvent&&e.removeEventListener){e.detachEvent("onresize",e.__resize_legacy_resize_handler__),document.removeEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);return}e.__resize_observer__?(e.__resize_observer__.unobserve(e),e.__resize_observer__.disconnect(),e.__resize_observer__=null):(e.__resize_mutation_observer__&&(e.__resize_mutation_observer__.disconnect(),e.__resize_mutation_observer__=null),e.removeEventListener("scroll",q),e.removeChild(e.__resize_triggers__.triggers),e.__resize_triggers__=null),e.__resize_listeners__=null}!--R&&b&&b.parentNode.removeChild(b)}}function ve(e){var r=e.__resize_last__,t=r.width,a=r.height,s=e.offsetWidth,u=e.offsetHeight;return s!==t||u!==a?{width:s,height:u}:null}function pe(){var e=D(this),r=e.rendered,t=e.detached;r!==this.__resize_rendered__&&(!t&&this.__resize_triggers__&&(N(this),this.addEventListener("scroll",q,!0)),this.__resize_rendered__=r,C(this))}function q(){var e=this;N(this),this.__resize_raf__&&de(this.__resize_raf__),this.__resize_raf__=_e(function(){var r=ve(e);r&&(e.__resize_last__=r,C(e))})}function C(e){!e||!e.__resize_listeners__||e.__resize_listeners__.forEach(function(r){r.call(e,e)})}function ge(e){var r=U(e,"position");(!r||r==="static")&&(e.style.position="relative"),e.__resize_old_position__=r,e.__resize_last__={};var t=E("div",{className:"resize-triggers"}),a=E("div",{className:"resize-expand-trigger"}),s=E("div"),u=E("div",{className:"resize-contract-trigger"});a.appendChild(s),t.appendChild(a),t.appendChild(u),e.appendChild(t),e.__resize_triggers__={triggers:t,expand:a,expandChild:s,contract:u},N(e),e.addEventListener("scroll",q,!0),e.__resize_last__={width:e.offsetWidth,height:e.offsetHeight}}function N(e){var r=e.__resize_triggers__,t=r.expand,a=r.expandChild,s=r.contract,u=s.scrollWidth,i=s.scrollHeight,_=t.offsetWidth,d=t.offsetHeight,o=t.scrollWidth,h=t.scrollHeight;s.scrollLeft=u,s.scrollTop=i,a.style.width=_+1+"px",a.style.height=d+1+"px",t.scrollLeft=o,t.scrollTop=h}const xe=["aria-label"];var G=P({__name:"text-clamp",props:{text:{type:String,required:!0},maxHeight:{type:[String,Number],required:!1},maxLines:{type:Number,required:!1},expanded:{type:Boolean,required:!1,default:!1},location:{type:String,required:!1,default:"end"},ellipsis:{type:String,required:!1,default:"\u2026"},autoResize:{type:Boolean,required:!1,default:!1}},emits:["clamp-change","update:expanded"],setup(e,{emit:r}){const t=e,a=w(null),s=w(null),u=w(null),i=Z({offset:0,localExpanded:!!t.expanded,unregisterResizeCallback:null}),_=x(()=>{if(!i.localExpanded&&t.maxHeight)return typeof(t==null?void 0:t.maxHeight)=="number"?`${t==null?void 0:t.maxHeight}px`:t==null?void 0:t.maxHeight}),d=()=>{u.value&&(u.value.textContent=X.value)},o=()=>{i.localExpanded||(d(),(g()||l.value)&&y())},h=()=>{t.text&&(i.offset=t.text.length,M(),t.autoResize&&a.value&&(fe(a.value,o),i.unregisterResizeCallback=()=>{a.value&&he(a.value,o)}),o())},M=()=>{var n;(n=i.unregisterResizeCallback)==null||n.call(i)},g=()=>!(!t.maxLines&&!t.maxHeight)&&!!a.value&&(!!(t.maxLines&&m()>t.maxLines)||!!(t.maxHeight&&a.value.scrollHeight>a.value.offsetHeight)),m=()=>s.value?Object.keys(Array.prototype.slice.call(s.value.getClientRects()).reduce((n,{top:c,bottom:v})=>{const f=`${c}/${v}`;return n[f]||(n[f]=!0),n},{})).length:0,y=(...n)=>{const[c=0,v=i.offset]=n;if(v-c<=3)return void J();const f=Math.floor((v+c)/2);F(f),g()?y(c,f):y(f,v)},F=n=>{i.offset=n,d()},J=()=>{K(),Q()},K=()=>{for(;(!g()||m()<2)&&i.offset<t.text.length;)O(1)},Q=()=>{for(;g()&&m()>1&&i.offset>0;)O(-1)},O=n=>{F(i.offset+n)},l=x(()=>!!t.text&&i.offset!==t.text.length);p(()=>l.value,n=>{B(()=>{r("clamp-change",n)})},{immediate:!0});const X=x(()=>l.value?Y.value:t.text),Y=x(()=>{if(t.location==="start")return t.ellipsis+(t.text.slice(0,i.offset)||"").trim();if(t.location==="middle"){const n=Math.floor(i.offset/2);return(t.text.slice(0,n)||"").trim()+t.ellipsis+(t.text.slice(-n)||"").trim()}return(t.text.slice(0,i.offset)||"").trim()+t.ellipsis}),W=()=>{i.localExpanded=!0},T=()=>{i.localExpanded=!1},V=()=>{i.localExpanded=!i.localExpanded};return p(()=>t.expanded,n=>{i.localExpanded=n}),p(()=>i.localExpanded,n=>{n?F(t.text.length):o(),t.expanded!==n&&r("update:expanded",n)}),p(()=>[t.maxLines,t.maxHeight,t.ellipsis,t.location,l.value].join(),()=>{B(()=>{o()})}),p(()=>[t.text,t.autoResize].join(),()=>{B(()=>{h()})}),ee(()=>{M()}),te(()=>{h()}),(n,c)=>(k(),re("div",{ref_key:"textClampRef",ref:a,class:"text-clamp",style:ie({overflow:"hidden",maxHeight:z(_)})},[H("span",{ref_key:"contentRef",ref:s},[$(n.$slots,"before",{expand:W,collapse:T,toggle:V,clamped:z(l),expanded:i.localExpanded}),H("span",{ref_key:"textRef",ref:u,"aria-label":e.text},null,8,xe),$(n.$slots,"after",{expand:W,collapse:T,toggle:V,clamped:z(l),expanded:i.localExpanded})],512)],4))}});G.__file="package/text-clamp.vue";const Ee=e=>(e.install=function(r){r.component(e.__name,e)},e),ze=Ee(G),be={class:"text-clamp-wrap"},Ce=P({__name:"index",setup(e){const r="Vue (\u8BFB\u97F3 /vju\u02D0/\uFF0C\u7C7B\u4F3C\u4E8E view) \u662F\u4E00\u5957\u7528\u4E8E\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684\u6E10\u8FDB\u5F0F\u6846\u67B6\u3002\u4E0E\u5176\u5B83\u5927\u578B\u6846\u67B6\u4E0D\u540C\u7684\u662F\uFF0CVue \u88AB\u8BBE\u8BA1\u4E3A\u53EF\u4EE5\u81EA\u5E95\u5411\u4E0A\u9010\u5C42\u5E94\u7528\u3002Vue \u7684\u6838\u5FC3\u5E93\u53EA\u5173\u6CE8\u89C6\u56FE\u5C42\uFF0C\u4E0D\u4EC5\u6613\u4E8E\u4E0A\u624B\uFF0C\u8FD8\u4FBF\u4E8E\u4E0E\u7B2C\u4E09\u65B9\u5E93\u6216\u65E2\u6709\u9879\u76EE\u6574\u5408\u3002\u53E6\u4E00\u65B9\u9762\uFF0C\u5F53\u4E0E\u73B0\u4EE3\u5316\u7684\u5DE5\u5177\u94FE\u4EE5\u53CA\u5404\u79CD\u652F\u6301\u7C7B\u5E93\u7ED3\u5408\u4F7F\u7528\u65F6\uFF0CVue \u4E5F\u5B8C\u5168\u80FD\u591F\u4E3A\u590D\u6742\u7684\u5355\u9875\u5E94\u7528\u63D0\u4F9B\u9A71\u52A8\u3002";return(t,a)=>{const s=j("el-button"),u=j("PageWrapLayout");return k(),I(u,null,{default:A(()=>[H("div",be,[ne(z(ze),{text:r,"max-lines":3},{after:A(({toggle:i,expanded:_,clamped:d})=>[_||d?(k(),I(s,{key:0,type:"primary",onClick:i},{default:A(()=>[ae(se(_?"\u6536\u8D77":"\u5C55\u5F00"),1)]),_:2},1032,["onClick"])):ue("",!0)]),_:1})])]),_:1})}}});const ye=oe(Ce,[["__scopeId","data-v-bb6cacbd"]]);export{ye as default};
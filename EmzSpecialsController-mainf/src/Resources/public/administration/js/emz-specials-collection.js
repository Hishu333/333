!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/bundles/emzspecialscollection/",n(n.s="nSJZ")}({"2edp":function(e,t){e.exports='{% block sw_cms_my_block_image_text_gallery %}\n<div class="sw-cms-my-block-image-text-gallery.html.twig">\n    <div class="sw-cms-my-block-image-text-gallery.html.twig__left">\n        <slot name="left-image"></slot>\n        <slot name="left-text"></slot>\n    </div>\n\n    <div class="sw-cms-my-block-image-text-gallery.html.twig__center">\n        <slot name="center-image"></slot>\n        <slot name="center-text"></slot>\n    </div>\n\n    <div class="sw-cms-my-block-image-text-gallery.html.twig__right">\n        <slot name="right-image"></slot>\n        <slot name="right-text"></slot>\n    </div>\n</div>\n{% endblock %}\n'},"3MB2":function(e,t){e.exports='{% block sw_cms_my_block_image_text_gallery_preview %}\n<div class="sw-cms-my-preview-image-text-gallery.html">\n    <div class="sw-cms-my-preview-image-text-gallery.html__left">\n        <div class="sw-cms-my-preview-image-text-gallery.html__image">\n            <img\n                :src="\'/administration/static/img/cms/preview_camera_small.jpg\' | asset"\n                alt=""\n            >\n        </div>\n        <div class="sw-cms-my-preview-image-text-gallery.html__text">\n            <h2>Lorem</h2>\n            <p>Lorem ipsum dolor sit amet.</p>\n        </div>\n    </div>\n\n    <div class="sw-cms-my-preview-image-text-gallery.html__center">\n        <div class="sw-cms-my-preview-image-text-gallery.html__image">\n            <img\n                :src="\'/administration/static/img/cms/preview_plant_small.jpg\' | asset"\n                alt=""\n            >\n        </div>\n        <div class="sw-cms-my-preview-image-text-gallery.html__text">\n            <h2>Ipsum</h2>\n            <p>Lorem ipsum dolor sit amet.</p>\n        </div>\n    </div>\n\n    <div class="sw-cms-my-preview-image-text-gallery.html__right">\n        <div class="sw-cms-my-preview-image-text-gallery.html__image">\n            <img\n                :src="\'/administration/static/img/cms/preview_glasses_small.jpg\' | asset"\n                alt=""\n            >\n        </div>\n        <div class="sw-cms-my-preview-image-text-gallery.html__text">\n            <h2>Dolor</h2>\n            <p>Lorem ipsum dolor sit amet.</p>\n        </div>\n    </div>\n</div>\n{% endblock %}\n'},HR3U:function(e,t,n){},SZ7m:function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},i=0;i<t.length;i++){var s=t[i],a=s[0],l={id:e+":"+i,css:s[1],media:s[2],sourceMap:s[3]};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}n.r(t),n.d(t,"default",(function(){return g}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},a=i&&(document.head||document.getElementsByTagName("head")[0]),l=null,o=0,m=!1,c=function(){},d=null,p="data-vue-ssr-id",u="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(e,t,n,i){m=n,d=i||{};var a=r(e,t);return f(a),function(t){for(var n=[],i=0;i<a.length;i++){var l=a[i];(o=s[l.id]).refs--,n.push(o)}t?f(a=r(e,t)):a=[];for(i=0;i<n.length;i++){var o;if(0===(o=n[i]).refs){for(var m=0;m<o.parts.length;m++)o.parts[m]();delete s[o.id]}}}}function f(e){for(var t=0;t<e.length;t++){var n=e[t],r=s[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(y(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(y(n.parts[i]));s[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function y(e){var t,n,r=document.querySelector("style["+p+'~="'+e.id+'"]');if(r){if(m)return c;r.parentNode.removeChild(r)}if(u){var i=o++;r=l||(l=v()),t=x.bind(null,r,i,!1),n=x.bind(null,r,i,!0)}else r=v(),t=w.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var h,_=(h=[],function(e,t){return h[e]=t,h.filter(Boolean).join("\n")});function x(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(t,i);else{var s=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function w(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),d.ssrId&&e.setAttribute(p,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},iFoh:function(e,t,n){var r=n("HR3U");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("SZ7m").default)("9a746090",r,!0,{})},kNuX:function(e,t,n){},nSJZ:function(e,t,n){"use strict";n.r(t);var r=n("2edp"),i=n.n(r);n("iFoh");Shopware.Component.register("sw-cms-my-block-image-text-gallery",{template:i.a});var s=n("3MB2"),a=n.n(s);n("pOOl");Shopware.Component.register("sw-cms-preview-image-text-gallery",{template:a.a}),Shopware.Service("cmsService").registerCmsBlock({name:"cms-mitarbeiter",label:"cms-mitarbeiter.label",category:"text-image",component:"sw-cms-my-block-image-text-gallery",previewComponent:"sw-cms-my-preview-block-image-text-gallery",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{"left-image":{type:"image"},"left-text":{type:"text"},"center-image":{type:"image"},"center-text":{type:"text"},"right-image":{type:"image"},"right-text":{type:"text"}}})},pOOl:function(e,t,n){var r=n("kNuX");r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n("SZ7m").default)("cee0418e",r,!0,{})}});
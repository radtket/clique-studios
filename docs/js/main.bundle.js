!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){!function(t){let e,n={settings:{heading:t(".js-bg-clip")},init(){e=this.settings,this.bindEvents()},bindEvents(){t(window).on("load resize scroll",t.proxy(this.getBgClip,this))},getBgClip(){e.heading.each(function(){const e=t(this).closest("article, section").offset().top-t(window).scrollTop();n=e-t(this).css("top").replace(/[^-\d\.]/g,"")-t(this).css("margin-top").replace(/[^-\d\.]/g,""),t(this).css("clip",`rect(${n}px, auto, auto, auto)`)})}};n.init()}(jQuery),$(window).load(()=>{$(window).trigger("scroll"),$(window).trigger("resize")}),$(document).ready(()=>{$("a.scrollLink").click(function(t){t.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},500)}),function(){let t;const e=$("#top-menu"),n=e.outerHeight()+15,i=e.find("a"),o=i.map(function(){const t=$($(this).attr("href"));if(t.length)return t});i.click(function(t){const e=$(this).attr("href"),i="#"===e?0:$(e).offset().top-n+1;$("html, body").stop().animate({scrollTop:i},300),t.preventDefault()}),$(window).scroll(function(){const e=$(this).scrollTop()+n;let r=o.map(function(){if($(this).offset().top<e)return this});const s=(r=r[r.length-1])&&r.length?r[0].id:"";t!==s&&(t=s,i.parent().removeClass("active").end().filter(`[href='#${s}']`).parent().addClass("active"))})}(),$(window).scroll(()=>{$(window).scrollTop()>220?$(".site-header").removeClass("site-header__show"):$(".site-header").addClass("site-header__show")}),(new WOW).init(),$(window).trigger("resize")}),$(window).resize(()=>{!function(){var t;(t=jQuery)(".js-height-full").height(t(window).height()),t(".js-height-parent").each(function(){t(this).height(t(this).parent().first().height())})}()})}]);
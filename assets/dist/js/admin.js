!function(){var t={502:function(){jQuery(document).ready((function(t){t(".affcoups-input-colorpicker").wpColorPicker(),t("[data-affcoups-settings-nav]").on("click",(function(n){n.preventDefault();var e=t(".affcoups-settings-nav-item"),a=t(this).parent("li"),o=t(this).data("affcoups-settings-nav");if(o){var s=t('[data-affcoups-settings-content="'+o+'"]');if(s){var i=t(".affcoups-settings-content");if(i){t("[data-affcoups-settings-nav]").removeClass("active"),e.removeClass("active"),i.removeClass("active"),t(this).addClass("active"),a.addClass("active"),s.addClass("active");var f=t("#affcoups_settings_active_tab");if(f&&f.val(o),void 0!==history.pushState){var c=window.location.href,r=new URL(c);r.searchParams.set("tab",o),history.pushState({},null,r)}}}}})),t(document).on("click","#affcoups-delete-log-submit",(function(n){t("#affcoups-delete-log").val("1")})),setTimeout((function(){t("#wpbody-content > .affcoups-settings .affcoups-settings-content > .card > .error, .notice").insertBefore(t("#affcoups-admin-page"))}),10)}))},398:function(){},792:function(){},111:function(){}},n={};function e(a){if(n[a])return n[a].exports;var o=n[a]={exports:{}};return t[a](o,o.exports,e),o.exports}e.m=t,e.x=function(){},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){var t={467:0},n=[[502],[398],[792],[111]],a=function(){},o=function(o,s){for(var i,f,c=s[0],r=s[1],u=s[2],p=s[3],l=0,v=[];l<c.length;l++)f=c[l],e.o(t,f)&&t[f]&&v.push(t[f][0]),t[f]=0;for(i in r)e.o(r,i)&&(e.m[i]=r[i]);for(u&&u(e),o&&o(s);v.length;)v.shift()();return p&&n.push.apply(n,p),a()},s=self.webpackChunkaffiliate_coupons=self.webpackChunkaffiliate_coupons||[];function i(){for(var a,o=0;o<n.length;o++){for(var s=n[o],i=!0,f=1;f<s.length;f++){var c=s[f];0!==t[c]&&(i=!1)}i&&(n.splice(o--,1),a=e(e.s=s[0]))}return 0===n.length&&(e.x(),e.x=function(){}),a}s.forEach(o.bind(null,0)),s.push=o.bind(null,s.push.bind(s));var f=e.x;e.x=function(){return e.x=f||function(){},(a=i)()}}();e.x()}();
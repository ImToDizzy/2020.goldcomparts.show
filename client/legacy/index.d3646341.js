import{w as t,x as s,_ as a,a as n,b as r,c as e,i as c,s as o,d as i,S as u,e as f,f as l,t as h,g as v,j as m,l as p,h as d,k as g,m as y,F as x,n as b,o as E,q as R,z as w,p as D,r as j,J as I}from"./client.6d2e8d87.js";import{t as $}from"./tsv.c906c42a.js";import{s as q}from"./helpers.38afc14c.js";function N(t){var s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,e=n(t);if(s){var c=n(this).constructor;a=Reflect.construct(e,arguments,c)}else a=e.apply(this,arguments);return r(this,a)}}function V(t,s,a){var n=t.slice();return n[2]=s[a],n}function k(t){var s,a,n,r,e,c,o,i,u,w,D=t[2].name+"",j=(t[2].otherName?"  (".concat(t[2].otherName,")"):"")+"";return{c:function(){s=f("div"),a=f("a"),n=f("div"),r=l(),e=f("h6"),c=h(D),o=l(),i=h(j),w=l(),this.h()},l:function(t){s=v(t,"DIV",{class:!0});var u=m(s);a=v(u,"A",{href:!0});var f=m(a);n=v(f,"DIV",{class:!0,style:!0}),m(n).forEach(p),r=d(f),e=v(f,"H6",{class:!0});var l=m(e);c=g(l,D),o=d(l),i=g(l,j),l.forEach(p),f.forEach(p),w=d(u),u.forEach(p),this.h()},h:function(){y(n,"class","bio-photo svelte-ex8ylq"),x(n,"background-image","url(img/bios/"+t[2].username+".jpeg)"),y(e,"class","svelte-ex8ylq"),y(a,"href",u="artists/"+q(t[2].name)),y(s,"class","bio-box svelte-ex8ylq")},m:function(t,u){b(t,s,u),E(s,a),E(a,n),E(a,r),E(a,e),E(e,c),E(e,o),E(e,i),E(s,w)},p:function(t,s){1&s&&x(n,"background-image","url(img/bios/"+t[2].username+".jpeg)"),1&s&&D!==(D=t[2].name+"")&&R(c,D),1&s&&j!==(j=(t[2].otherName?"  (".concat(t[2].otherName,")"):"")+"")&&R(i,j),1&s&&u!==(u="artists/"+q(t[2].name))&&y(a,"href",u)},d:function(t){t&&p(s)}}}function S(t){for(var s,a,n,r,e,c=t[0],o=[],i=0;i<c.length;i+=1)o[i]=k(V(t,c,i));return{c:function(){s=l(),a=f("section"),n=f("div"),r=f("div"),e=f("div");for(var t=0;t<o.length;t+=1)o[t].c();this.h()},l:function(t){w('[data-svelte="svelte-1xemdmz"]',document.head).forEach(p),s=d(t),a=v(t,"SECTION",{class:!0});var c=m(a);n=v(c,"DIV",{class:!0});var i=m(n);r=v(i,"DIV",{class:!0});var u=m(r);e=v(u,"DIV",{class:!0});for(var f=m(e),l=0;l<o.length;l+=1)o[l].l(f);f.forEach(p),u.forEach(p),i.forEach(p),c.forEach(p),this.h()},h:function(){document.title="Final Show - 2020",y(e,"class","bio-boxes svelte-ex8ylq"),y(r,"class","content"),y(n,"class","container"),y(a,"class","section bg-col-7")},m:function(t,c){b(t,s,c),b(t,a,c),E(a,n),E(n,r),E(r,e);for(var i=0;i<o.length;i+=1)o[i].m(e,null)},p:function(t,s){var a=D(s,1)[0];if(1&a){var n;for(c=t[0],n=0;n<c.length;n+=1){var r=V(t,c,n);o[n]?o[n].p(r,a):(o[n]=k(r),o[n].c(),o[n].m(e,null))}for(;n<o.length;n+=1)o[n].d(1);o.length=c.length}},i:j,o:j,d:function(t){t&&p(s),t&&p(a),I(o,t)}}}function z(t){return C.apply(this,arguments)}function C(){return(C=t(s.mark((function t(a){var n;return s.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.params,t.next=3,this.fetch("artists.tsv").then((function(t){return t.text()}));case 3:return n=t.sent,t.abrupt("return",{artistsRows:n});case 5:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function F(t,s,a){var n,r=s.artistsRows;return t.$$set=function(t){"artistsRows"in t&&a(1,r=t.artistsRows)},t.$$.update=function(){2&t.$$.dirty&&a(0,n=$(r).sort((function(t,s){return t.name.localeCompare(s.name,"en",{sensitivity:"base"})})))},[n,r]}var A=function(t){a(n,u);var s=N(n);function n(t){var a;return e(this,n),a=s.call(this),c(i(a),t,F,S,o,{artistsRows:1}),a}return n}();export default A;export{z as preload};
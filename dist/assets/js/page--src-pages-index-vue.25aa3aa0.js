(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{aK7f:function(t,a,e){},gEGz:function(t,a,e){"use strict";e("aK7f")},iyQ6:function(t,a,e){"use strict";e.r(a);e("Kw5r");var s=e("DOVJ"),n=(e("Y6W1"),e("VTBJ")),i=(e("qePV"),e("rB9j"),e("UxlC"),e("2B1R"),e("ma9I"),e("fVfk")),l={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,a){var e=a.props,l=a.data,o=a.parent,c=e.info,u=e.showLinks,p=e.showNavigation,g=e.ariaLabel,d=function(t,a){var e=t.currentPage,s=void 0===e?1:e,n=t.totalPages,i=void 0===n?1:n,l=Math.ceil(a/2),r=Math.floor(s-l),o=Math.floor(s+l);i<=a?(r=0,o=i):s<=l?(r=0,o=a):s+l>=i&&(r=i-a,o=i);for(var c=[],u=r+1;u<=o;u++)c.push(u);return{current:s,total:i,start:r,end:o,pages:c}}(c,e.range),f=d.current,v=d.total,b=d.pages,y=d.start,C=d.end,L=Object(i.d)(o.$route),h=function(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";a===f&&(l=e.ariaCurrentLabel);var c={to:r(L,a),exact:!0};return e.activeLinkClass&&(c.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(c.exactActiveClass=e.exactActiveLinkClass),t(s.a,{class:[e.linkClass,o],attrs:Object(n.a)(Object(n.a)({},c),{},{"aria-label":l.replace("%n",a),"aria-current":f===a})},[i])},x=u?b.map((function(t){return h(t,t,e.ariaLinkLabel)})):[];if(p){var m=e.firstLabel,S=e.prevLabel,k=e.nextLabel,_=e.lastLabel,w=e.ariaFirstLabel,P=e.ariaPrevLabel,j=e.ariaNextLabel,N=e.ariaLastLabel,O=e.firstClass,B=e.prevClass,G=e.nextClass,I=e.lastClass,$=e.navClass;f>1&&x.unshift(h(f-1,S,P,[B,$])),y>0&&x.unshift(h(1,m,w,[O,$])),f<v&&x.push(h(f+1,k,j,[G,$])),C<v&&x.push(h(v,_,N,[I,$]))}return x.length<2?null:t("nav",Object(n.a)(Object(n.a)({},l),{},{attrs:{role:"navigation","aria-label":g}}),x)}};function r(t,a){var e=/\/$/.test(t)?"/":"";return a>1?Object(i.g)(t)+"/".concat(a).concat(e):t}e("6NbQ");var o={name:"Index",components:{Pager:l},metaInfo:{title:"Hello, world!"},computed:{system:function(){return this.$page.system.edges[0].node}}},c=(e("gEGz"),e("KHd+")),u=null,p=Object(c.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("header",{staticClass:"masthead",style:{backgroundImage:"url('"+(t.ENV_API_URL+t.system.homeBg.url)+"')"}},[e("div",{staticClass:"container position-relative px-4 px-lg-5"},[e("div",{staticClass:"row gx-4 gx-lg-5 justify-content-center"},[e("div",{staticClass:"col-md-10 col-lg-8 col-xl-7"},[e("div",{staticClass:"site-heading"},[e("h1",[t._v(t._s(t.system.siteName))]),e("span",{staticClass:"subheading"},[t._v(t._s(t.system.brief))])])])])])]),e("div",{staticClass:"container px-4 px-lg-5"},[e("div",{staticClass:"row gx-4 gx-lg-5 justify-content-center"},[e("div",{staticClass:"col-md-10 col-lg-8 col-xl-7"},[t._l(t.$page.articles.edges,(function(a){return[e("div",{key:a.node.id,staticClass:"post-preview"},[e("g-link",{attrs:{to:a.node.path}},[e("h2",{staticClass:"post-title"},[t._v("\n              "+t._s(a.node.title)+"\n            ")])]),e("p",{staticClass:"post-meta"},[t._v("\n            Posted by\n            "),e("a",{attrs:{href:"#!"}},[t._v("Start Bootstrap")]),t._v("\n            "+t._s(a.node.create_at)+"\n          ")])],1),e("hr",{key:"hr-"+a.node.id,staticClass:"my-4"})]})),e("Pager",{attrs:{info:t.$page.articles.pageInfo}})],2)])])])}),[],!1,null,null,null);"function"==typeof u&&u(p);a.default=p.exports}}]);
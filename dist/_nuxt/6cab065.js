(window.webpackJsonp=window.webpackJsonp||[]).push([[8,3,4],{213:function(n,t,l){var content=l(218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,l(90).default)("cb8fb07c",content,!0,{sourceMap:!1})},214:function(n,t,l){var content=l(220);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,l(90).default)("36707afc",content,!0,{sourceMap:!1})},215:function(n,t,l){"use strict";l.r(t);var o=[function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"text-2xl"},[o("a",{attrs:{href:"/"}},[o("img",{staticClass:"logo-blue",attrs:{src:l(216),alt:"mardraft",width:"60px"}}),o("span",{staticClass:"font-black text-xl text-white"},[n._v("Mardraft ")]),n._v(" "),o("span",{staticClass:"font-thin hidden-xs hidden-sm text-xl"},[n._v("Web Development")])])])}],e={layout:"default",data:function(){return{isOpen:!1,view:{atTopOfPage:!0}}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.pageYOffset>0?this.view.atTopOfPage&&(this.view.atTopOfPage=!1):this.view.atTopOfPage||(this.view.atTopOfPage=!0)}}},c=(l(217),l(36)),component=Object(c.a)(e,(function(){var n=this,t=n.$createElement,l=n._self._c||t;return l("nav",{staticClass:"fixed w-full m-auto top-0 animated",class:{scrolled:!n.view.atTopOfPage}},[l("header",{staticClass:"bgHeader lg:flex lg:justify-evenly"},[l("div",{staticClass:"flex items-center justify-between"},[n._m(0),n._v(" "),l("div",[l("button",{staticClass:"menu lg:hidden",attrs:{onclick:"this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))","aria-label":"Main Menu"},on:{click:function(t){n.isOpen=!n.isOpen}}},[l("svg",{attrs:{width:"50",height:"50",viewBox:"0 0 100 100"}},[l("path",{staticClass:"line line1",attrs:{d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}}),n._v(" "),l("path",{staticClass:"line line2",attrs:{d:"M 20,50 H 80"}}),n._v(" "),l("path",{staticClass:"line line3",attrs:{d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"}})])])])]),n._v(" "),l("div",{staticClass:"px-6 py-7 lg:flex items-center",class:n.isOpen?"block":"hidden"},[l("NuxtLink",{staticClass:"block px-4 rounded hover:text-sunset spacer",attrs:{to:"/"}},[n._v("HOME")]),n._v(" "),l("NuxtLink",{staticClass:"block px-4 rounded hover:text-sunset spacer",attrs:{to:"/projects"}},[n._v("PROJECTS")]),n._v(" "),l("span",{staticClass:"block px-4 spacer"},[n._v("enquiries@mardraft.co.uk")])],1)])])}),o,!1,null,null,null);t.default=component.exports;installComponents(component,{Header:l(215).default})},216:function(n,t,l){n.exports=l.p+"img/mardraft-logo.c8b59d0.png"},217:function(n,t,l){"use strict";l(213)},218:function(n,t,l){var o=l(89)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\n.logo-blue{\n  float:left;\n  margin-right:5px\n}\nnav{\n  z-index:4;\n  background:#2a3956\n}\n.bgHeader{\n  color:#e4e4e4\n}\nnav.scrolled{\n  --tw-shadow:0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  border-bottom:0;\n  background:#2a3956\n}\n.menu{\n  background-color:transparent;\n  border:none;\n  cursor:pointer;\n  padding:0\n}\n.line{\n  fill:none;\n  stroke:#fcd34d;\n  stroke-width:6;\n  transition:stroke-dasharray .6s cubic-bezier(.4,0,.2,1),stroke-dashoffset .6s cubic-bezier(.4,0,.2,1)\n}\n.line1{\n  stroke-dasharray:60 207\n}\n.line1,.line2{\n  stroke-width:6\n}\n.line2{\n  stroke-dasharray:60 60\n}\n.line3{\n  stroke-dasharray:60 207;\n  stroke-width:6\n}\n.opened .line1{\n  stroke-dasharray:90 207;\n  stroke-dashoffset:-134;\n  stroke-width:6\n}\n.opened .line2{\n  stroke-dasharray:1 60;\n  stroke-dashoffset:-30;\n  stroke-width:6\n}\n.opened .line3{\n  stroke-dasharray:90 207;\n  stroke-dashoffset:-134;\n  stroke-width:6\n}\n@media (max-width:767px){\n.hidden-xs{\n    display:none!important\n}\n}\n@media (min-width:768px) and (max-width:991px){\n.hidden-sm{\n    display:none!important\n}\n}\n@media (min-width:992px) and (max-width:1199px){\n.hidden-md{\n    display:none!important\n}\n}\n@media (min-width:1200px){\n.hidden-lg{\n    display:none!important\n}\n}\n.spacer{\n  padding-bottom:10px\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},219:function(n,t,l){"use strict";l(214)},220:function(n,t,l){var o=l(89)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\n.bgFooter{\n  font-size:14px;\n  background:#2a3956;\n  color:#e4e4e4;\n  text-align:center;\n  padding:15px;\n  position:absolute;\n  right:0;\n  bottom:0;\n  left:0\n}\n@media (max-width:767px){\n.bgFooter{\n    font-size:13px;\n    padding:10px\n}\n}\n.footMargin{\n  padding:10px 0\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},221:function(n,t,l){"use strict";l.r(t);var o={name:"Footer",layout:"default"},e=(l(219),l(36)),component=Object(e.a)(o,(function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)}),[function(){var n=this,t=n.$createElement,l=n._self._c||t;return l("div",{staticClass:"bgFooter py-md shadow-inner"},[l("div",{staticClass:"footMargin"},[l("p",[n._v("This site uses cookies. Use of this site constitutes acceptance of them. For more, see: "),l("a",{attrs:{href:"/en/PrivacyPolicy",title:"Privacy policy"}},[n._v("Privacy policy")])]),n._v(" "),l("span",[n._v("Copyright © 2022 "),l("a",{attrs:{href:"http://mardraft.co.uk"}},[n._v("www.mardraft.co.uk ")])])])])}],!1,null,null,null);t.default=component.exports},228:function(n,t,l){var content=l(236);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,l(90).default)("3102b2a6",content,!0,{sourceMap:!1})},233:function(n,t,l){n.exports=l.p+"img/web.d7eb8a2.png"},234:function(n,t,l){n.exports=l.p+"img/graphic.5319252.png"},235:function(n,t,l){"use strict";l(228)},236:function(n,t,l){var o=l(89)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\n.static h3{\n  font-size:32px;\n  line-height:55px;\n  letter-spacing:-.009em;\n  font-weight:100;\n  margin-bottom:20px;\n  padding-bottom:0;\n  color:#4c9ec8;\n  border-bottom:1px solid #2a3956;\n  margin-top:30px\n}\n.processes{\n  margin-bottom:80px;\n  margin-top:80px;\n  width:100%\n}\n.boxes{\n  padding:25px;\n  margin-left:15px\n}\n.boxes img{\n  margin-left:auto;\n  margin-right:auto\n}\n.processes h2{\n  font-size:33px;\n  font-weight:300;\n  line-height:49px;\n  min-height:49px;\n  margin:20px\n}\n@media (max-width:767px){\n.processes{\n    min-height:auto;\n    margin-bottom:80px;\n    padding-top:30px\n}\n}\n.intro{\n  padding-top:100px;\n  padding-bottom:60px;\n  position:relative;\n  width:100%;\n  height:100%;\n  text-align:center;\n  color:#e4e4e4\n}\n.intro h2{\n  font-weight:110;\n  font-size:30px;\n  margin-top:10px;\n  margin-left:auto;\n  margin-right:auto\n}\n.intro p{\n  font-size:19px;\n  color:#f5f5f5;\n  opacity:.8\n}\n@media (max-width:1005px){\n.intro h2{\n    font-weight:100;\n    font-size:25px;\n    margin-top:10px\n}\n.intro p{\n    font-size:16px;\n    color:#f5f5f5;\n    opacity:.8\n}\n}\n@media (min-width:768px){\n.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12{\n    float:left\n}\n.col-sm-12{\n    width:100%\n}\n.col-sm-11{\n    width:91.66666667%\n}\n.col-sm-10{\n    width:83.33333333%\n}\n.col-sm-9{\n    width:75%\n}\n.col-sm-8{\n    width:66.66666667%\n}\n.col-sm-7{\n    width:58.33333333%\n}\n.col-sm-6{\n    width:50%\n}\n.col-sm-5{\n    width:41.66666667%\n}\n.col-sm-4{\n    width:33.33333333%\n}\n.col-sm-3{\n    width:25%\n}\n.col-sm-2{\n    width:16.66666667%\n}\n.col-sm-1{\n    width:8.33333333%\n}\n.col-sm-pull-12{\n    right:100%\n}\n.col-sm-pull-11{\n    right:91.66666667%\n}\n.col-sm-pull-10{\n    right:83.33333333%\n}\n.col-sm-pull-9{\n    right:75%\n}\n.col-sm-pull-8{\n    right:66.66666667%\n}\n.col-sm-pull-7{\n    right:58.33333333%\n}\n.col-sm-pull-6{\n    right:50%\n}\n.col-sm-pull-5{\n    right:41.66666667%\n}\n.col-sm-pull-4{\n    right:33.33333333%\n}\n.col-sm-pull-3{\n    right:25%\n}\n.col-sm-pull-2{\n    right:16.66666667%\n}\n.col-sm-pull-1{\n    right:8.33333333%\n}\n.col-sm-pull-0{\n    right:auto\n}\n.col-sm-push-12{\n    left:100%\n}\n.col-sm-push-11{\n    left:91.66666667%\n}\n.col-sm-push-10{\n    left:83.33333333%\n}\n.col-sm-push-9{\n    left:75%\n}\n.col-sm-push-8{\n    left:66.66666667%\n}\n.col-sm-push-7{\n    left:58.33333333%\n}\n.col-sm-push-6{\n    left:50%\n}\n.col-sm-push-5{\n    left:41.66666667%\n}\n.col-sm-push-4{\n    left:33.33333333%\n}\n.col-sm-push-3{\n    left:25%\n}\n.col-sm-push-2{\n    left:16.66666667%\n}\n.col-sm-push-1{\n    left:8.33333333%\n}\n.col-sm-push-0{\n    left:auto\n}\n.col-sm-offset-12{\n    margin-left:100%\n}\n.col-sm-offset-11{\n    margin-left:91.66666667%\n}\n.col-sm-offset-10{\n    margin-left:83.33333333%\n}\n.col-sm-offset-9{\n    margin-left:75%\n}\n.col-sm-offset-8{\n    margin-left:66.66666667%\n}\n.col-sm-offset-7{\n    margin-left:58.33333333%\n}\n.col-sm-offset-6{\n    margin-left:50%\n}\n.col-sm-offset-5{\n    margin-left:41.66666667%\n}\n.col-sm-offset-4{\n    margin-left:33.33333333%\n}\n.col-sm-offset-3{\n    margin-left:25%\n}\n.col-sm-offset-2{\n    margin-left:16.66666667%\n}\n.col-sm-offset-1{\n    margin-left:8.33333333%\n}\n.col-sm-offset-0{\n    margin-left:0\n}\n}\n@media (min-width:992px){\n.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{\n    float:left\n}\n.col-md-12{\n    width:100%\n}\n.col-md-11{\n    width:91.66666667%\n}\n.col-md-10{\n    width:83.33333333%\n}\n.col-md-9{\n    width:75%\n}\n.col-md-8{\n    width:66.66666667%\n}\n.col-md-7{\n    width:58.33333333%\n}\n.col-md-6{\n    width:50%\n}\n.col-md-5{\n    width:41.66666667%\n}\n.col-md-4{\n    width:33.33333333%\n}\n.col-md-3{\n    width:25%\n}\n.col-md-2{\n    width:16.66666667%\n}\n.col-md-1{\n    width:8.33333333%\n}\n.col-md-pull-12{\n    right:100%\n}\n.col-md-pull-11{\n    right:91.66666667%\n}\n.col-md-pull-10{\n    right:83.33333333%\n}\n.col-md-pull-9{\n    right:75%\n}\n.col-md-pull-8{\n    right:66.66666667%\n}\n.col-md-pull-7{\n    right:58.33333333%\n}\n.col-md-pull-6{\n    right:50%\n}\n.col-md-pull-5{\n    right:41.66666667%\n}\n.col-md-pull-4{\n    right:33.33333333%\n}\n.col-md-pull-3{\n    right:25%\n}\n.col-md-pull-2{\n    right:16.66666667%\n}\n.col-md-pull-1{\n    right:8.33333333%\n}\n.col-md-pull-0{\n    right:auto\n}\n.col-md-push-12{\n    left:100%\n}\n.col-md-push-11{\n    left:91.66666667%\n}\n.col-md-push-10{\n    left:83.33333333%\n}\n.col-md-push-9{\n    left:75%\n}\n.col-md-push-8{\n    left:66.66666667%\n}\n.col-md-push-7{\n    left:58.33333333%\n}\n.col-md-push-6{\n    left:50%\n}\n.col-md-push-5{\n    left:41.66666667%\n}\n.col-md-push-4{\n    left:33.33333333%\n}\n.col-md-push-3{\n    left:25%\n}\n.col-md-push-2{\n    left:16.66666667%\n}\n.col-md-push-1{\n    left:8.33333333%\n}\n.col-md-push-0{\n    left:auto\n}\n.col-md-offset-12{\n    margin-left:100%\n}\n.col-md-offset-11{\n    margin-left:91.66666667%\n}\n.col-md-offset-10{\n    margin-left:83.33333333%\n}\n.col-md-offset-9{\n    margin-left:75%\n}\n.col-md-offset-8{\n    margin-left:66.66666667%\n}\n.col-md-offset-7{\n    margin-left:58.33333333%\n}\n.col-md-offset-6{\n    margin-left:50%\n}\n.col-md-offset-5{\n    margin-left:41.66666667%\n}\n.col-md-offset-4{\n    margin-left:33.33333333%\n}\n.col-md-offset-3{\n    margin-left:25%\n}\n.col-md-offset-2{\n    margin-left:16.66666667%\n}\n.col-md-offset-1{\n    margin-left:8.33333333%\n}\n.col-md-offset-0{\n    margin-left:0\n}\n}\n@media (min-width:1200px){\n.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{\n    float:left\n}\n.col-lg-12{\n    width:100%\n}\n.col-lg-11{\n    width:91.66666667%\n}\n.col-lg-10{\n    width:83.33333333%\n}\n.col-lg-9{\n    width:75%\n}\n.col-lg-8{\n    width:66.66666667%\n}\n.col-lg-7{\n    width:58.33333333%\n}\n.col-lg-6{\n    width:50%\n}\n.col-lg-5{\n    width:41.66666667%\n}\n.col-lg-4{\n    width:33.33333333%\n}\n.col-lg-3{\n    width:25%\n}\n.col-lg-2{\n    width:16.66666667%\n}\n.col-lg-1{\n    width:8.33333333%\n}\n.col-lg-pull-12{\n    right:100%\n}\n.col-lg-pull-11{\n    right:91.66666667%\n}\n.col-lg-pull-10{\n    right:83.33333333%\n}\n.col-lg-pull-9{\n    right:75%\n}\n.col-lg-pull-8{\n    right:66.66666667%\n}\n.col-lg-pull-7{\n    right:58.33333333%\n}\n.col-lg-pull-6{\n    right:50%\n}\n.col-lg-pull-5{\n    right:41.66666667%\n}\n.col-lg-pull-4{\n    right:33.33333333%\n}\n.col-lg-pull-3{\n    right:25%\n}\n.col-lg-pull-2{\n    right:16.66666667%\n}\n.col-lg-pull-1{\n    right:8.33333333%\n}\n.col-lg-pull-0{\n    right:auto\n}\n.col-lg-push-12{\n    left:100%\n}\n.col-lg-push-11{\n    left:91.66666667%\n}\n.col-lg-push-10{\n    left:83.33333333%\n}\n.col-lg-push-9{\n    left:75%\n}\n.col-lg-push-8{\n    left:66.66666667%\n}\n.col-lg-push-7{\n    left:58.33333333%\n}\n.col-lg-push-6{\n    left:50%\n}\n.col-lg-push-5{\n    left:41.66666667%\n}\n.col-lg-push-4{\n    left:33.33333333%\n}\n.col-lg-push-3{\n    left:25%\n}\n.col-lg-push-2{\n    left:16.66666667%\n}\n.col-lg-push-1{\n    left:8.33333333%\n}\n.col-lg-push-0{\n    left:auto\n}\n.col-lg-offset-12{\n    margin-left:100%\n}\n.col-lg-offset-11{\n    margin-left:91.66666667%\n}\n.col-lg-offset-10{\n    margin-left:83.33333333%\n}\n.col-lg-offset-9{\n    margin-left:75%\n}\n.col-lg-offset-8{\n    margin-left:66.66666667%\n}\n.col-lg-offset-7{\n    margin-left:58.33333333%\n}\n.col-lg-offset-6{\n    margin-left:50%\n}\n.col-lg-offset-5{\n    margin-left:41.66666667%\n}\n.col-lg-offset-4{\n    margin-left:33.33333333%\n}\n.col-lg-offset-3{\n    margin-left:25%\n}\n.col-lg-offset-2{\n    margin-left:16.66666667%\n}\n.col-lg-offset-1{\n    margin-left:8.33333333%\n}\n.col-lg-offset-0{\n    margin-left:0\n}\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},254:function(n,t,l){"use strict";l.r(t);var o={data:function(){return{projects:[{title:"Webpages",id:1,details:"",img:l(233)},{title:"Graphics",id:2,details:"",img:l(234)}]}}},e=(l(235),l(36)),component=Object(e.a)(o,(function(){var n=this,t=n.$createElement,l=n._self._c||t;return l("div",[l("Header"),n._v(" "),l("div",{staticClass:"intro",attrs:{id:"intro"}},[l("div",{staticClass:"content static"},[l("div",{staticClass:"container"},[l("div",{staticClass:"row"},[l("div",{staticClass:"flex-container wrap"},n._l(n.projects,(function(t){return l("div",{key:t.id,staticClass:"col-md-6  processes transform hover:-translate-z-1 hover:scale-105 duration-1000 ease-in-out"},[l("nuxt-link",{attrs:{to:{path:"MyProjects/"+t.title,params:{id:t.id,title:t.title,img:t.img}}}},[l("div",{staticClass:"boxes rounded-md shadow-sm border hover:border-sky hover:text-sky text-rhino"},[l("h2",[n._v(n._s(t.title))]),n._v(" "),l("img",{attrs:{src:t.img,width:"250px"}})])])],1)})),0)])])])]),n._v(" "),l("Footer")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:l(215).default,Footer:l(221).default})}}]);
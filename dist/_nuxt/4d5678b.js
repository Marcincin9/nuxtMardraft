(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2,3,4],{213:function(n,t,e){var content=e(218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(90).default)("cb8fb07c",content,!0,{sourceMap:!1})},214:function(n,t,e){var content=e(220);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(90).default)("36707afc",content,!0,{sourceMap:!1})},215:function(n,t,e){"use strict";e.r(t);var o=[function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticClass:"text-2xl"},[o("a",{attrs:{href:"/"}},[o("img",{staticClass:"logo-blue",attrs:{src:e(216),alt:"mardraft",width:"60px"}}),o("span",{staticClass:"font-black text-xl text-white"},[n._v("Mardraft ")]),n._v(" "),o("span",{staticClass:"font-thin hidden-xs hidden-sm text-xl"},[n._v("Web Development")])])])}],r={layout:"default",data:function(){return{isOpen:!1,view:{atTopOfPage:!0}}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.pageYOffset>0?this.view.atTopOfPage&&(this.view.atTopOfPage=!1):this.view.atTopOfPage||(this.view.atTopOfPage=!0)}}},l=(e(217),e(36)),component=Object(l.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("nav",{staticClass:"fixed w-full m-auto top-0 animated",class:{scrolled:!n.view.atTopOfPage}},[e("header",{staticClass:"bgHeader lg:flex lg:justify-evenly"},[e("div",{staticClass:"flex items-center justify-between"},[n._m(0),n._v(" "),e("div",[e("button",{staticClass:"menu lg:hidden",attrs:{onclick:"this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))","aria-label":"Main Menu"},on:{click:function(t){n.isOpen=!n.isOpen}}},[e("svg",{attrs:{width:"50",height:"50",viewBox:"0 0 100 100"}},[e("path",{staticClass:"line line1",attrs:{d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}}),n._v(" "),e("path",{staticClass:"line line2",attrs:{d:"M 20,50 H 80"}}),n._v(" "),e("path",{staticClass:"line line3",attrs:{d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"}})])])])]),n._v(" "),e("div",{staticClass:"px-6 py-7 lg:flex items-center",class:n.isOpen?"block":"hidden"},[e("NuxtLink",{staticClass:"block px-4 rounded hover:text-sunset spacer",attrs:{to:"/"}},[n._v("HOME")]),n._v(" "),e("NuxtLink",{staticClass:"block px-4 rounded hover:text-sunset spacer",attrs:{to:"/projects"}},[n._v("PROJECTS")]),n._v(" "),e("span",{staticClass:"block px-4 spacer"},[n._v("enquiries@mardraft.co.uk")])],1)])])}),o,!1,null,null,null);t.default=component.exports;installComponents(component,{Header:e(215).default})},216:function(n,t,e){n.exports=e.p+"img/mardraft-logo.c8b59d0.png"},217:function(n,t,e){"use strict";e(213)},218:function(n,t,e){var o=e(89)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\n.logo-blue{\n  float:left;\n  margin-right:5px\n}\nnav{\n  z-index:4;\n  background:#2a3956\n}\n.bgHeader{\n  color:#e4e4e4\n}\nnav.scrolled{\n  --tw-shadow:0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  border-bottom:0;\n  background:#2a3956\n}\n.menu{\n  background-color:transparent;\n  border:none;\n  cursor:pointer;\n  padding:0\n}\n.line{\n  fill:none;\n  stroke:#fcd34d;\n  stroke-width:6;\n  transition:stroke-dasharray .6s cubic-bezier(.4,0,.2,1),stroke-dashoffset .6s cubic-bezier(.4,0,.2,1)\n}\n.line1{\n  stroke-dasharray:60 207\n}\n.line1,.line2{\n  stroke-width:6\n}\n.line2{\n  stroke-dasharray:60 60\n}\n.line3{\n  stroke-dasharray:60 207;\n  stroke-width:6\n}\n.opened .line1{\n  stroke-dasharray:90 207;\n  stroke-dashoffset:-134;\n  stroke-width:6\n}\n.opened .line2{\n  stroke-dasharray:1 60;\n  stroke-dashoffset:-30;\n  stroke-width:6\n}\n.opened .line3{\n  stroke-dasharray:90 207;\n  stroke-dashoffset:-134;\n  stroke-width:6\n}\n@media (max-width:767px){\n.hidden-xs{\n    display:none!important\n}\n}\n@media (min-width:768px) and (max-width:991px){\n.hidden-sm{\n    display:none!important\n}\n}\n@media (min-width:992px) and (max-width:1199px){\n.hidden-md{\n    display:none!important\n}\n}\n@media (min-width:1200px){\n.hidden-lg{\n    display:none!important\n}\n}\n.spacer{\n  padding-bottom:10px\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},219:function(n,t,e){"use strict";e(214)},220:function(n,t,e){var o=e(89)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\n.bgFooter{\n  font-size:14px;\n  background:#2a3956;\n  color:#e4e4e4;\n  text-align:center;\n  padding:15px;\n  position:absolute;\n  right:0;\n  bottom:0;\n  left:0\n}\n@media (max-width:767px){\n.bgFooter{\n    font-size:13px;\n    padding:10px\n}\n}\n.footMargin{\n  padding:10px 0\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},221:function(n,t,e){"use strict";e.r(t);var o={name:"Footer",layout:"default"},r=(e(219),e(36)),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"bgFooter py-md shadow-inner"},[e("div",{staticClass:"footMargin"},[e("p",[n._v("This site uses cookies. Use of this site constitutes acceptance of them. For more, see: "),e("a",{attrs:{href:"/en/PrivacyPolicy",title:"Privacy policy"}},[n._v("Privacy policy")])]),n._v(" "),e("span",[n._v("Copyright © 2022 "),e("a",{attrs:{href:"http://mardraft.co.uk"}},[n._v("www.mardraft.co.uk ")])])])])}],!1,null,null,null);t.default=component.exports},222:function(n,t,e){var content=e(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(90).default)("4e43abf4",content,!0,{sourceMap:!1})},223:function(n,t,e){"use strict";e(222)},224:function(n,t,e){var o=e(89),r=e(225),l=e(226),c=o((function(i){return i[1]})),d=r(l);c.push([n.i,"/*purgecss start ignore*/\n.box-left,.box-right{\n  padding:20px\n}\n.top-intro{\n  margin-top:220px\n}\n.top-box{\n  background:url("+d+");\n  margin-top:85px;\n  background-repeat:no-repeat;\n  background-size:cover;\n  background-position:50%;\n  box-shadow:inset 0 0 0 2000px rgba(76,159,200,.538)\n}\n.mid-box,.top-box{\n  width:100%;\n  height:700px\n}\n.mid-box{\n  background-color:#c5c5c5\n}\n.bottom-box{\n  width:100%;\n  background-color:#fff;\n  height:750px\n}\n.entry-copy h2{\n  margin-top:100px\n}\n.lnr{\n  font-size:1.5em\n}\n.skills-area,.skills-intro{\n  padding-top:35px\n}\n.who-text h4{\n  padding-top:140px\n}\n.skills h4,.who-text h4{\n  font-size:30px;\n  line-height:50px;\n  font-weight:400;\n  color:#4c9ec8\n}\n.skills h4{\n  margin-bottom:10px;\n  padding-top:50px\n}\n.skills,.who-text p{\n  font-size:20px;\n  color:#000;\n  font-weight:400;\n  text-align:center\n}\n.skills-area h4{\n  padding:8px 0 2px;\n  font-size:20px;\n  font-weight:400;\n  line-height:1em;\n  color:#4c9ec8;\n  margin:0 0 10px\n}\n.skills-area p{\n  font-size:15px;\n  color:#000;\n  font-weight:400;\n  margin-bottom:10px\n}\n.drop-shadow-lg{\n  text-shadow:3px 3px 6px rgb(0 0 0/26%),0 0 5px rgb(15 3 86/22%)\n}\n.row{\n  margin-left:-15px;\n  margin-right:-15px\n}\n.container{\n  margin-right:auto;\n  margin-left:auto;\n  padding-left:35px;\n  padding-right:35px;\n  z-index:3\n}\n@media (min-width:768px){\n.container{\n    width:750px;\n    padding-left:15px;\n    padding-right:15px\n}\n}\n@media (min-width:992px){\n.container{\n    width:970px;\n    padding-left:15px;\n    padding-right:15px\n}\n}\n@media (min-width:1200px){\n.container{\n    width:1170px;\n    padding-left:15px;\n    padding-right:15px\n}\n}\n.front h2{\n  font-weight:110;\n  font-size:35px;\n  margin-top:80px\n}\n.front h3{\n  font-size:28px;\n  margin-bottom:50px\n}\n@media (max-width:967px){\n.caption-style-4 img{\n    padding:20px\n}\n.container-a4{\n    padding:30px\n}\n.caption-style-4{\n    margin-top:100px\n}\n.boxes{\n    margin-left:0\n}\n.bgHeader{\n    padding:20px\n}\n.top-box{\n    margin-top:0;\n    height:400px\n}\n.top-intro{\n    margin-top:190px\n}\n.front h2{\n    font-weight:100;\n    font-size:26px;\n    margin-top:40px\n}\n.front h3{\n    font-size:12px;\n    margin-bottom:30px\n}\n.front p{\n    font-size:15px;\n    padding:0\n}\n.bgFooter p{\n    font-size:12px\n}\n.box-left,.box-right{\n    padding:10px\n}\n.skills-area h4{\n    font-size:15px\n}\n}\n.social-links{\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  margin-top:100px\n}\n.icons{\n  padding:20px;\n  position:relative;\n  overflow:hidden;\n  transition:transform .5s\n}\n.icons a{\n  text-align:center;\n  text-decoration:none;\n  color:#1c2330\n}\n.icons a .fab{\n  font-size:30px;\n  position:relative;\n  z-index:2;\n  transition:color .5s\n}\n.social-links a:hover .fab{\n  color:#4c9ec8\n}\n\n/*purgecss end ignore*/",""]),c.locals={},n.exports=c},225:function(n,t,e){"use strict";n.exports=function(n,t){return t||(t={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},226:function(n,t,e){n.exports=e.p+"img/bg-top.7664ce6.jpg"},227:function(n,t,e){"use strict";e.r(t);var o={layout:"default"},r=(e(223),e(36)),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{staticClass:"front",attrs:{id:"intro"}},[e("div",{staticClass:"overlayBg"}),n._v(" "),e("div",{staticClass:"content"},[e("section",{staticClass:"top-box"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row entry-copy text-center"},[e("div",{staticClass:"grid grid-cols-2"},[e("div",{staticClass:"box-left top-intro"},[e("h3",[n._v(" Creating websites, content management systems and online stores. "),e("br"),n._v(" Design graphics, mockups and newsletters.")])]),n._v(" "),e("div",{staticClass:"box-right top-intro"})]),e("br")])])]),n._v(" "),e("section",{staticClass:"mid-box"},[e("div",{staticClass:"who-text entry-copy text-center container"},[e("h4",[n._v("Who we are?")]),n._v(" "),e("div",{staticClass:"skills-intro"},[e("p",[e("a",{attrs:{href:"http://mardraft.co.uk"}},[n._v("Mardraft")]),n._v(" team creates websites and mockups for individual clients and companies. ")]),n._v(" "),e("br"),n._v(" "),e("p",[n._v("We approach each client individually, paying attention to the needs and requirements during"),e("br"),n._v(" the development of the project, and offer reliable aftercare service.")])])]),n._v(" "),e("div",{staticClass:"social-links"},[e("div",{staticClass:"icons"},[e("a",{attrs:{href:"https://www.facebook.com/Mardraft-Freelance-web-development-109635647881632",target:"_blank"}},[e("i",{staticClass:"fab fa-facebook-f"})])]),n._v(" "),e("div",{staticClass:"icons"},[e("a",{attrs:{href:"https://github.com/Marcincin9",target:"_blank"}},[e("i",{staticClass:"fab fa-github"})])]),n._v(" "),e("div",{staticClass:"icons"},[e("a",{attrs:{href:"https://www.linkedin.com/in/marcin-olszynski-5b14b2208/",target:"_blank"}},[e("i",{staticClass:"fab fa-linkedin-in"})])])])]),n._v(" "),e("section",{staticClass:"bottom-box"},[e("div",{staticClass:"who-text entry-copy text-center"},[e("h4",[n._v("What we use?")]),n._v(" "),e("div",{staticClass:"row text-center container"},[e("div",{staticClass:"grid grid-cols-2"},[e("div",{staticClass:"box-left"},[e("div",{staticClass:"skills-area"},[e("div",{staticClass:"col-xs-2"},[e("i",{staticClass:"lnr lnr-screen"})]),n._v(" "),e("div",{staticClass:"col-xs-10"},[e("h4",[n._v("Front-end")]),n._v(" "),e("p",[n._v("JavaScript frameworks, html / css frameworks")])])]),n._v(" "),e("div",{staticClass:"skills-area"},[e("div",{staticClass:"col-xs-2"},[e("i",{staticClass:"lnr lnr-database"})]),n._v(" "),e("div",{staticClass:"col-xs-10"},[e("h4",[n._v("Back-end")]),n._v(" "),e("p",[n._v("Database, server environments, php frameworks")])])])]),n._v(" "),e("div",{staticClass:"box-right"},[e("div",{staticClass:"skills-area"},[e("div",{staticClass:"col-xs-2"},[e("i",{staticClass:"lnr lnr-magic-wand"})]),n._v(" "),e("div",{staticClass:"col-xs-10"},[e("h4",[n._v("Designing")]),n._v(" "),e("p",[n._v("Mockups and patterns, Graphic design")])])]),n._v(" "),e("div",{staticClass:"skills-area"},[e("div",{staticClass:"col-xs-2"},[e("i",{staticClass:"lnr lnr-laptop-phone"})]),n._v(" "),e("div",{staticClass:"col-xs-10"},[e("h4",[n._v("CMS")]),n._v(" "),e("p",[n._v("Wordpress, Magento, PrestaShop")])])])])])])])])])])])}],!1,null,null,null);t.default=component.exports},232:function(n,t,e){var content=e(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(90).default)("bad8e090",content,!0,{sourceMap:!1})},251:function(n,t,e){"use strict";e(232)},252:function(n,t,e){var o=e(89)((function(i){return i[1]}));o.push([n.i,"/*purgecss start ignore*/\nhtml{\n  height:100%;\n  box-sizing:border-box;\n  overflow-x:hidden\n}\n*,:after,:before{\n  box-sizing:inherit;\n  margin:0;\n  padding:0\n}\nbody{\n  position:relative;\n  overflow-x:hidden;\n  min-height:100%\n}\n\n/*purgecss end ignore*/",""]),o.locals={},n.exports=o},255:function(n,t,e){"use strict";e.r(t);var o=e(1),r=e(215),l=e(221),c=e(227),d=o.a.extend({components:{Header:r.default,Content:c.default,Footer:l.default}}),f=(e(251),e(36)),component=Object(f.a)(d,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",[e("Header"),n._v(" "),e("Content"),n._v(" "),e("Footer")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:e(215).default,Content:e(227).default,Footer:e(221).default})}}]);
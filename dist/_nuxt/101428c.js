(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3,4],{213:function(e,t,n){var content=n(218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(90).default)("cb8fb07c",content,!0,{sourceMap:!1})},214:function(e,t,n){var content=n(220);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(90).default)("36707afc",content,!0,{sourceMap:!1})},215:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text-2xl"},[o("a",{attrs:{href:"/"}},[o("img",{staticClass:"logo-blue",attrs:{src:n(216),alt:"mardraft",width:"60px"}}),o("span",{staticClass:"font-black text-xl text-white"},[e._v("Mardraft ")]),e._v(" "),o("span",{staticClass:"font-thin hidden-xs hidden-sm text-xl"},[e._v("Web Development")])])])}],r={layout:"default",data:function(){return{isOpen:!1,view:{atTopOfPage:!0}}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.pageYOffset>0?this.view.atTopOfPage&&(this.view.atTopOfPage=!1):this.view.atTopOfPage||(this.view.atTopOfPage=!0)}}},l=(n(217),n(36)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"fixed w-full m-auto top-0 animated",class:{scrolled:!e.view.atTopOfPage}},[n("header",{staticClass:"bgHeader lg:flex lg:justify-evenly"},[n("div",{staticClass:"flex items-center justify-between"},[e._m(0),e._v(" "),n("div",[n("button",{staticClass:"menu lg:hidden",attrs:{onclick:"this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))","aria-label":"Main Menu"},on:{click:function(t){e.isOpen=!e.isOpen}}},[n("svg",{attrs:{width:"50",height:"50",viewBox:"0 0 100 100"}},[n("path",{staticClass:"line line1",attrs:{d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}}),e._v(" "),n("path",{staticClass:"line line2",attrs:{d:"M 20,50 H 80"}}),e._v(" "),n("path",{staticClass:"line line3",attrs:{d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"}})])])])]),e._v(" "),n("div",{staticClass:"px-6 py-7 lg:flex items-center",class:e.isOpen?"block":"hidden"},[n("NuxtLink",{staticClass:"block px-4 rounded hover:text-sunset spacer",attrs:{to:"/"}},[e._v("HOME")]),e._v(" "),n("NuxtLink",{staticClass:"block px-4 rounded hover:text-sunset spacer",attrs:{to:"/projects"}},[e._v("PROJECTS")]),e._v(" "),n("span",{staticClass:"block px-4 spacer"},[e._v("enquiries@mardraft.co.uk")])],1)])])}),o,!1,null,null,null);t.default=component.exports;installComponents(component,{Header:n(215).default})},216:function(e,t,n){e.exports=n.p+"img/mardraft-logo.c8b59d0.png"},217:function(e,t,n){"use strict";n(213)},218:function(e,t,n){var o=n(89)((function(i){return i[1]}));o.push([e.i,"/*purgecss start ignore*/\n.logo-blue{\n  float:left;\n  margin-right:5px\n}\nnav{\n  z-index:4;\n  background:#2a3956\n}\n.bgHeader{\n  color:#e4e4e4\n}\nnav.scrolled{\n  --tw-shadow:0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  border-bottom:0;\n  background:#2a3956\n}\n.menu{\n  background-color:transparent;\n  border:none;\n  cursor:pointer;\n  padding:0\n}\n.line{\n  fill:none;\n  stroke:#fcd34d;\n  stroke-width:6;\n  transition:stroke-dasharray .6s cubic-bezier(.4,0,.2,1),stroke-dashoffset .6s cubic-bezier(.4,0,.2,1)\n}\n.line1{\n  stroke-dasharray:60 207\n}\n.line1,.line2{\n  stroke-width:6\n}\n.line2{\n  stroke-dasharray:60 60\n}\n.line3{\n  stroke-dasharray:60 207;\n  stroke-width:6\n}\n.opened .line1{\n  stroke-dasharray:90 207;\n  stroke-dashoffset:-134;\n  stroke-width:6\n}\n.opened .line2{\n  stroke-dasharray:1 60;\n  stroke-dashoffset:-30;\n  stroke-width:6\n}\n.opened .line3{\n  stroke-dasharray:90 207;\n  stroke-dashoffset:-134;\n  stroke-width:6\n}\n@media (max-width:767px){\n.hidden-xs{\n    display:none!important\n}\n}\n@media (min-width:768px) and (max-width:991px){\n.hidden-sm{\n    display:none!important\n}\n}\n@media (min-width:992px) and (max-width:1199px){\n.hidden-md{\n    display:none!important\n}\n}\n@media (min-width:1200px){\n.hidden-lg{\n    display:none!important\n}\n}\n.spacer{\n  padding-bottom:10px\n}\n\n/*purgecss end ignore*/",""]),o.locals={},e.exports=o},219:function(e,t,n){"use strict";n(214)},220:function(e,t,n){var o=n(89)((function(i){return i[1]}));o.push([e.i,"/*purgecss start ignore*/\n.bgFooter{\n  font-size:14px;\n  background:#2a3956;\n  color:#e4e4e4;\n  text-align:center;\n  padding:15px;\n  position:absolute;\n  right:0;\n  bottom:0;\n  left:0\n}\n@media (max-width:767px){\n.bgFooter{\n    font-size:13px;\n    padding:10px\n}\n}\n.footMargin{\n  padding:10px 0\n}\n\n/*purgecss end ignore*/",""]),o.locals={},e.exports=o},221:function(e,t,n){"use strict";n.r(t);var o={name:"Footer",layout:"default"},r=(n(219),n(36)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bgFooter py-md shadow-inner"},[n("div",{staticClass:"footMargin"},[n("p",[e._v("This site uses cookies. Use of this site constitutes acceptance of them. For more, see: "),n("a",{attrs:{href:"/en/PrivacyPolicy",title:"Privacy policy"}},[e._v("Privacy policy")])]),e._v(" "),n("span",[e._v("Copyright © 2022 "),n("a",{attrs:{href:"http://mardraft.co.uk"}},[e._v("www.mardraft.co.uk ")])])])])}],!1,null,null,null);t.default=component.exports},253:function(e,t,n){"use strict";n.r(t);n(17),n(37);var o={data:function(){return{loading:!1,success:!1,errored:!1,name:"",email:"",phone:"",message:""}},methods:{sendMessage:function(){var e=this;this.loading=!0,this.$axios.post("/messages",{name:this.name,email:this.email,phone:this.phone,message:this.message}).then((function(t){e.success=!0,e.errored=!1})).catch((function(t){e.errored=!0})).finally((function(){e.loading=!1}))}}},r=n(36),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header"),e._v(" "),n("div",{staticClass:"intro",attrs:{id:"intro"}},[n("div",{staticClass:"overlayBg"}),e._v(" "),n("div",{staticClass:"content static"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[e._m(0),e._v(" "),e.success?n("div",{staticClass:"rounded bg-indigo-500 text-white text-lg p-4"},[e._v("\n      Great! Your message has been sent successfully. I will try to respond\n      quickly.\n    ")]):n("form",{staticClass:"grid grid-cols-1 gap-y-6",on:{submit:function(t){return t.preventDefault(),e.sendMessage.apply(null,arguments)}}},[e.errored?n("div",{staticClass:"rounded bg-red-200 text-lg p-4"},[e._v("\n        Bummer, Something went wrong. Did you fill out all of the fields?\n      ")]):e._e(),e._v(" "),n("div",[n("label",{staticClass:"sr-only",attrs:{for:"full_name"}},[e._v("Full name*")]),e._v(" "),n("div",{staticClass:"relative rounded-md shadow-sm"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150",attrs:{required:"",name:"name",id:"full_name",placeholder:"Full name*"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),n("div",[n("label",{staticClass:"sr-only",attrs:{for:"email"}},[e._v("Email*")]),e._v(" "),n("div",{staticClass:"relative rounded-md shadow-sm"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150",attrs:{required:"",name:"email",id:"email",type:"email",placeholder:"Email*"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),e._v(" "),n("div",[n("label",{staticClass:"sr-only",attrs:{for:"phone"}},[e._v("Phone")]),e._v(" "),n("div",{staticClass:"relative rounded-md shadow-sm"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150",attrs:{name:"phone",id:"phone",placeholder:"Phone"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})])]),e._v(" "),n("div",[n("label",{staticClass:"sr-only",attrs:{for:"message"}},[e._v("Message")]),e._v(" "),n("div",{staticClass:"relative rounded-md shadow-sm"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150",attrs:{required:"",name:"message",id:"message",rows:"4",placeholder:"Message*"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})])]),e._v(" "),n("div",{},[n("span",{staticClass:"inline-flex rounded-md shadow-sm"},[n("button",{staticClass:"inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 rounded-md text-black bg-yellow-300 hover:bg-yellow-200 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out",attrs:{type:"submit"}},[e._v("\n            "+e._s(e.loading?"Sending Message...":"Submit")+"\n          ")])])])])])])])]),e._v(" "),n("Footer")],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"static-intro "},[n("h3",[e._v("Contact")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:n(215).default,Footer:n(221).default})}}]);
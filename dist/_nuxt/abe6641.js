(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3,4],{213:function(e,o,t){var content=t(218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(90).default)("cb8fb07c",content,!0,{sourceMap:!1})},214:function(e,o,t){var content=t(220);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(90).default)("36707afc",content,!0,{sourceMap:!1})},215:function(e,o,t){"use strict";t.r(o);var r=[function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("div",{staticClass:"text-2xl"},[r("a",{attrs:{href:"/"}},[r("img",{staticClass:"logo-blue",attrs:{src:t(216),alt:"mardraft",width:"60px"}}),r("span",{staticClass:"font-black text-xl text-white"},[e._v("Mardraft ")]),e._v(" "),r("span",{staticClass:"font-thin hidden-xs hidden-sm text-xl"},[e._v("Web Development")])])])}],n={layout:"default",data:function(){return{isOpen:!1,view:{atTopOfPage:!0}}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){window.pageYOffset>0?this.view.atTopOfPage&&(this.view.atTopOfPage=!1):this.view.atTopOfPage||(this.view.atTopOfPage=!0)}}},l=(t(217),t(36)),component=Object(l.a)(n,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("nav",{staticClass:"fixed w-full m-auto top-0 animated",class:{scrolled:!e.view.atTopOfPage}},[t("header",{staticClass:"bgHeader lg:flex lg:justify-evenly"},[t("div",{staticClass:"flex items-center justify-between"},[e._m(0),e._v(" "),t("div",[t("button",{staticClass:"menu lg:hidden",attrs:{onclick:"this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))","aria-label":"Main Menu"},on:{click:function(o){e.isOpen=!e.isOpen}}},[t("svg",{attrs:{width:"50",height:"50",viewBox:"0 0 100 100"}},[t("path",{staticClass:"line line1",attrs:{d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}}),e._v(" "),t("path",{staticClass:"line line2",attrs:{d:"M 20,50 H 80"}}),e._v(" "),t("path",{staticClass:"line line3",attrs:{d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"}})])])])]),e._v(" "),t("div",{staticClass:"px-6 py-7 lg:flex items-center",class:e.isOpen?"block":"hidden"},[t("NuxtLink",{staticClass:"block px-4 rounded hover:text-sunset spacer",attrs:{to:"/"}},[e._v("HOME")]),e._v(" "),t("NuxtLink",{staticClass:"block px-4 rounded hover:text-sunset spacer",attrs:{to:"/projects"}},[e._v("PROJECTS")]),e._v(" "),t("span",{staticClass:"block px-4 spacer"},[e._v("enquiries@mardraft.co.uk")])],1)])])}),r,!1,null,null,null);o.default=component.exports;installComponents(component,{Header:t(215).default})},216:function(e,o,t){e.exports=t.p+"img/mardraft-logo.c8b59d0.png"},217:function(e,o,t){"use strict";t(213)},218:function(e,o,t){var r=t(89)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.logo-blue{\n  float:left;\n  margin-right:5px\n}\nnav{\n  z-index:4;\n  background:#2a3956\n}\n.bgHeader{\n  color:#e4e4e4\n}\nnav.scrolled{\n  --tw-shadow:0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  border-bottom:0;\n  background:#2a3956\n}\n.menu{\n  background-color:transparent;\n  border:none;\n  cursor:pointer;\n  padding:0\n}\n.line{\n  fill:none;\n  stroke:#fcd34d;\n  stroke-width:6;\n  transition:stroke-dasharray .6s cubic-bezier(.4,0,.2,1),stroke-dashoffset .6s cubic-bezier(.4,0,.2,1)\n}\n.line1{\n  stroke-dasharray:60 207\n}\n.line1,.line2{\n  stroke-width:6\n}\n.line2{\n  stroke-dasharray:60 60\n}\n.line3{\n  stroke-dasharray:60 207;\n  stroke-width:6\n}\n.opened .line1{\n  stroke-dasharray:90 207;\n  stroke-dashoffset:-134;\n  stroke-width:6\n}\n.opened .line2{\n  stroke-dasharray:1 60;\n  stroke-dashoffset:-30;\n  stroke-width:6\n}\n.opened .line3{\n  stroke-dasharray:90 207;\n  stroke-dashoffset:-134;\n  stroke-width:6\n}\n@media (max-width:767px){\n.hidden-xs{\n    display:none!important\n}\n}\n@media (min-width:768px) and (max-width:991px){\n.hidden-sm{\n    display:none!important\n}\n}\n@media (min-width:992px) and (max-width:1199px){\n.hidden-md{\n    display:none!important\n}\n}\n@media (min-width:1200px){\n.hidden-lg{\n    display:none!important\n}\n}\n.spacer{\n  padding-bottom:10px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},219:function(e,o,t){"use strict";t(214)},220:function(e,o,t){var r=t(89)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.bgFooter{\n  font-size:14px;\n  background:#2a3956;\n  color:#e4e4e4;\n  text-align:center;\n  padding:15px;\n  position:absolute;\n  right:0;\n  bottom:0;\n  left:0\n}\n@media (max-width:767px){\n.bgFooter{\n    font-size:13px;\n    padding:10px\n}\n}\n.footMargin{\n  padding:10px 0\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},221:function(e,o,t){"use strict";t.r(o);var r={name:"Footer",layout:"default"},n=(t(219),t(36)),component=Object(n.a)(r,(function(){var e=this,o=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"bgFooter py-md shadow-inner"},[t("div",{staticClass:"footMargin"},[t("p",[e._v("This site uses cookies. Use of this site constitutes acceptance of them. For more, see: "),t("a",{attrs:{href:"/en/PrivacyPolicy",title:"Privacy policy"}},[e._v("Privacy policy")])]),e._v(" "),t("span",[e._v("Copyright © 2022 "),t("a",{attrs:{href:"http://mardraft.co.uk"}},[e._v("www.mardraft.co.uk ")])])])])}],!1,null,null,null);o.default=component.exports},229:function(e,o,t){var content=t(238);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(90).default)("29786482",content,!0,{sourceMap:!1})},237:function(e,o,t){"use strict";t(229)},238:function(e,o,t){var r=t(89)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.tu[data-v-d5baf96a]{\n  margin-right:auto;\n  margin-left:auto;\n  padding-left:75px;\n  padding-right:75px\n}\n.privacy-intro[data-v-d5baf96a]{\n  margin-top:160px;\n  margin-bottom:160px\n}\n.privacy-intro p[data-v-d5baf96a]{\n  color:#000;\n  opacity:.8\n}\nli[data-v-d5baf96a]{\n  font-size:15px;\n  color:#3c3c3c\n}\nh2[data-v-d5baf96a]{\n  color:#2a3956;\n  font-size:28px;\n  margin-top:50px\n}\nh1[data-v-d5baf96a]{\n  font-weight:110;\n  font-size:35px;\n  margin-top:80px\n}\nh1[data-v-d5baf96a],h3[data-v-d5baf96a]{\n  color:#4c9ec8\n}\nh3[data-v-d5baf96a]{\n  font-size:22px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},256:function(e,o,t){"use strict";t.r(o);t(237);var r=t(36),component=Object(r.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("Header"),e._v(" "),e._m(0),e._v(" "),t("Footer")],1)}),[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"privacy-intro"},[t("div",{staticClass:"content"},[t("div",{staticClass:"tu"},[t("div",{staticClass:"row"},[t("h1",[e._v("Privacy Policy")]),e._v(" "),t("p",[e._v("Last updated: March 21, 2022")]),e._v(" "),t("p",[e._v("This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.")]),e._v(" "),t("p",[e._v("We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the "),t("a",{attrs:{href:"https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/",target:"_blank"}},[e._v("Privacy Policy Template")]),e._v(".")]),e._v(" "),t("h2",[e._v("Interpretation and Definitions")]),e._v(" "),t("h3",[e._v("Interpretation")]),e._v(" "),t("p",[e._v("The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.")]),e._v(" "),t("h3",[e._v("Definitions")]),e._v(" "),t("p",[e._v("For the purposes of this Privacy Policy:")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Account")]),e._v(" means a unique account created for You to access our Service or parts of our Service.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Company")]),e._v(' (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to mardraft.')])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Cookies")]),e._v(" are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Country")]),e._v(" refers to:  United Kingdom")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Device")]),e._v(" means any device that can access the Service such as a computer, a cellphone or a digital tablet.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Personal Data")]),e._v(" is any information that relates to an identified or identifiable individual.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Service")]),e._v(" refers to the Website.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Service Provider")]),e._v(" means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Usage Data")]),e._v(" refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Website")]),e._v(" refers to mardraft, accessible from "),t("a",{attrs:{href:"http://www.mardraft.co.uk/",rel:"external nofollow noopener",target:"_blank"}},[e._v("http://www.mardraft.co.uk/")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("You")]),e._v(" means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.")])])]),e._v(" "),t("h2",[e._v("Collecting and Using Your Personal Data")]),e._v(" "),t("h3",[e._v("Types of Data Collected")]),e._v(" "),t("h3",[e._v("Personal Data")]),e._v(" "),t("p",[e._v("While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Email address")])]),e._v(" "),t("li",[t("p",[e._v("First name and last name")])]),e._v(" "),t("li",[t("p",[e._v("Phone number")])]),e._v(" "),t("li",[t("p",[e._v("Usage Data")])])]),e._v(" "),t("h3",[e._v("Usage Data")]),e._v(" "),t("p",[e._v("Usage Data is collected automatically when using the Service.")]),e._v(" "),t("p",[e._v("Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.")]),e._v(" "),t("p",[e._v("When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.")]),e._v(" "),t("p",[e._v("We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.")]),e._v(" "),t("h3",[e._v("Tracking Technologies and Cookies")]),e._v(" "),t("p",[e._v("We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Cookies or Browser Cookies.")]),e._v(" A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.")]),e._v(" "),t("li",[t("strong",[e._v("Flash Cookies.")]),e._v(' Certain features of our Service may use local stored objects (or Flash Cookies) to collect and store information about Your preferences or Your activity on our Service. Flash Cookies are not managed by the same browser settings as those used for Browser Cookies. For more information on how You can delete Flash Cookies, please read "Where can I change the settings for disabling, or deleting local shared objects?" available at '),t("a",{attrs:{href:"https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_",rel:"external nofollow noopener",target:"_blank"}},[e._v("https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_")])]),e._v(" "),t("li",[t("strong",[e._v("Web Beacons.")]),e._v(" Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).")])]),e._v(" "),t("p",[e._v('Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies: '),t("a",{attrs:{href:"https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking",target:"_blank"}},[e._v("Use of Cookies by Free Privacy Policy")]),e._v(".")]),e._v(" "),t("p",[e._v("We use both Session and Persistent Cookies for the purposes set out below:")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Necessary / Essential Cookies")])]),e._v(" "),t("p",[e._v("Type: Session Cookies")]),e._v(" "),t("p",[e._v("Administered by: Us")]),e._v(" "),t("p",[e._v("Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Cookies Policy / Notice Acceptance Cookies")])]),e._v(" "),t("p",[e._v("Type: Persistent Cookies")]),e._v(" "),t("p",[e._v("Administered by: Us")]),e._v(" "),t("p",[e._v("Purpose: These Cookies identify if users have accepted the use of cookies on the Website.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Functionality Cookies")])]),e._v(" "),t("p",[e._v("Type: Persistent Cookies")]),e._v(" "),t("p",[e._v("Administered by: Us")]),e._v(" "),t("p",[e._v("Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.")])])]),e._v(" "),t("p",[e._v("For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.")]),e._v(" "),t("h3",[e._v("Use of Your Personal Data")]),e._v(" "),t("p",[e._v("The Company may use Personal Data for the following purposes:")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("To provide and maintain our Service")]),e._v(", including to monitor the usage of our Service.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("To manage Your Account:")]),e._v(" to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("For the performance of a contract:")]),e._v(" the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("To contact You:")]),e._v(" To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("To provide You")]),e._v(" with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("To manage Your requests:")]),e._v(" To attend and manage Your requests to Us.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("For business transfers:")]),e._v(" We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("For other purposes")]),e._v(": We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.")])])]),e._v(" "),t("p",[e._v("We may share Your personal information in the following situations:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("With Service Providers:")]),e._v(" We may share Your personal information with Service Providers to monitor and analyze the use of our Service,  to contact You.")]),e._v(" "),t("li",[t("strong",[e._v("For business transfers:")]),e._v(" We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.")]),e._v(" "),t("li",[t("strong",[e._v("With Affiliates:")]),e._v(" We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.")]),e._v(" "),t("li",[t("strong",[e._v("With business partners:")]),e._v(" We may share Your information with Our business partners to offer You certain products, services or promotions.")]),e._v(" "),t("li",[t("strong",[e._v("With other users:")]),e._v(" when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.")]),e._v(" "),t("li",[t("strong",[e._v("With Your consent")]),e._v(": We may disclose Your personal information for any other purpose with Your consent.")])]),e._v(" "),t("h3",[e._v("Retention of Your Personal Data")]),e._v(" "),t("p",[e._v("The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.")]),e._v(" "),t("p",[e._v("The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.")]),e._v(" "),t("h3",[e._v("Transfer of Your Personal Data")]),e._v(" "),t("p",[e._v("Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.")]),e._v(" "),t("p",[e._v("Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.")]),e._v(" "),t("p",[e._v("The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.")]),e._v(" "),t("h3",[e._v("Disclosure of Your Personal Data")]),e._v(" "),t("h3",[e._v("Business Transactions")]),e._v(" "),t("p",[e._v("If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.")]),e._v(" "),t("h3",[e._v("Law enforcement")]),e._v(" "),t("p",[e._v("Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).")]),e._v(" "),t("h3",[e._v("Other legal requirements")]),e._v(" "),t("p",[e._v("The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:")]),e._v(" "),t("ul",[t("li",[e._v("Comply with a legal obligation")]),e._v(" "),t("li",[e._v("Protect and defend the rights or property of the Company")]),e._v(" "),t("li",[e._v("Prevent or investigate possible wrongdoing in connection with the Service")]),e._v(" "),t("li",[e._v("Protect the personal safety of Users of the Service or the public")]),e._v(" "),t("li",[e._v("Protect against legal liability")])]),e._v(" "),t("h3",[e._v("Security of Your Personal Data")]),e._v(" "),t("p",[e._v("The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.")]),e._v(" "),t("h2",[e._v("Children's Privacy")]),e._v(" "),t("p",[e._v("Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.")]),e._v(" "),t("p",[e._v("If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.")]),e._v(" "),t("h2",[e._v("Links to Other Websites")]),e._v(" "),t("p",[e._v("Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.")]),e._v(" "),t("p",[e._v("We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.")]),e._v(" "),t("h2",[e._v("Changes to this Privacy Policy")]),e._v(" "),t("p",[e._v("We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.")]),e._v(" "),t("p",[e._v('We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.')]),e._v(" "),t("p",[e._v("You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.")]),e._v(" "),t("h2",[e._v("Contact Us")]),e._v(" "),t("p",[e._v("If you have any questions about this Privacy Policy, You can contact us:")]),e._v(" "),t("ul",[t("li",[e._v("By email: mardraft@outlook.com")])])])])])])}],!1,null,"d5baf96a",null);o.default=component.exports;installComponents(component,{Header:t(215).default,Footer:t(221).default})}}]);
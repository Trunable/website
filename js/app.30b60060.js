(function(a){function e(e){for(var i,n,c=e[0],s=e[1],l=e[2],d=0,m=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(a[i]=s[i]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var a,e=0;e<o.length;e++){for(var t=o[e],i=!0,c=1;c<t.length;c++){var s=t[c];0!==r[s]&&(i=!1)}i&&(o.splice(e--,1),a=n(n.s=t[0]))}return a}var i={},r={app:0},o=[];function n(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=a,n.c=i,n.d=function(a,e,t){n.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},n.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,e){if(1&e&&(a=n(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var i in a)n.d(t,i,function(e){return a[e]}.bind(null,i));return t},n.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return n.d(e,"a",e),e},n.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;o.push([0,"chunk-vendors"]),t()})({0:function(a,e,t){a.exports=t("56d7")},"02a9":function(a,e,t){a.exports=t.p+"img/c_07.caebd022.jpg"},"034f":function(a,e,t){"use strict";t("85ec")},"071f":function(a,e){},"1ae4":function(a,e,t){a.exports=t.p+"img/logo.3e637081.svg"},"28f5":function(a,e,t){a.exports=t.p+"img/c_04.88a9a826.jpg"},"3b52":function(a,e,t){},"3c11":function(a,e,t){a.exports=t.p+"img/c_09.dd164552.jpg"},"442b":function(a,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return r}));var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{staticClass:"py-7 py-md-0 bg-hero d-flex justify-center align-center"},[t("div",{staticClass:"container"},[t("div",{staticClass:"row vh-md-100"},[t("div",{staticClass:"col-md-8 col-sm-10 col-12 mx-auto my-auto text-center"},[t("h2",{staticClass:"white--text font-weight-black"},[a._v("Formamos a los genios del futuro")]),t("p",{staticClass:"overline font-weight-normal white--text"},[a._v("Programas de formación para estimular el desarrollo intelectual a través de áreas STEAM (Ciencia, Tecnología, Ingeniería, Arte y Matemática).")]),t("v-btn",{staticClass:"black--text",attrs:{color:"secondary",large:"",href:"https://bu3pic1770z.typeform.com/to/zcPEnlpL",target:"_blank",rel:"noopener"}},[t("v-icon",{attrs:{left:""}},[a._v("mdi-lead-pencil")]),a._v("inscríbete")],1)],1)])]),t("router-view")],1)},r=[]},"4b06":function(a,e,t){"use strict";t("3b52")},"4d9e":function(a,e,t){a.exports=t.p+"img/c_02.5d49111c.jpg"},"56d7":function(a,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var i=t("2b0e"),r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-app",[t("Navbar")],1)},o=[],n=function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",[i("v-app-bar",{attrs:{fixed:"",color:"white"}},[i("v-app-bar-title",[i("router-link",{attrs:{img:"",to:"/"}},[i("v-img",{attrs:{width:"180px",height:"auto",src:t("1ae4")}})],1)],1),i("v-spacer"),i("div",{staticClass:"hidden-sm-and-down"},a._l(a.items,(function(e){return i("v-menu",{key:e.id,scopedSlots:a._u([{key:"activator",fn:function(t){t.on;var r=t.attrs;return[i("v-tooltip",{attrs:{bottom:""},scopedSlots:a._u([{key:"activator",fn:function(t){var o=t.on;return[i("v-btn",a._g(a._b({attrs:{fab:"",icon:"",to:e.url}},"v-btn",r,!1),Object.assign({},o)),[i("v-icon",[a._v(a._s(e.icon))])],1)]}}],null,!0)},[i("span",[a._v(a._s(e.text))])])]}}],null,!0)})})),1),i("v-menu",{attrs:{transition:"slide-y-transition",bottom:"",left:"","offset-y":""},scopedSlots:a._u([{key:"activator",fn:function(e){var t=e.on,r=e.attrs;return[i("v-btn",a._g(a._b({staticClass:"d-lg-none d-md-none",attrs:{icon:""}},"v-btn",r,!1),t),[i("v-icon",[a._v("mdi-menu")])],1)]}}])},[i("v-list",[i("v-list-item-group",{model:{value:a.model,callback:function(e){a.model=e},expression:"model"}},a._l(a.items,(function(e){return i("v-list-item",{key:e.id,attrs:{to:e.url}},[i("v-list-item-icon",[i("v-icon",{domProps:{textContent:a._s(e.icon)}})],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:a._s(e.text)}})],1)],1)})),1)],1)],1)],1),i("router-view")],1)},c=[],s={data:function(){return{items:[{icon:"mdi-certificate-outline",text:"Certificados",url:"/certificados"}],model:1}}},l=s,u=t("2877"),d=t("6544"),m=t.n(d),p=t("40dc"),f=t("bb78"),g=t("8336"),h=t("132d"),b=t("adda"),v=t("8860"),C=t("da13"),_=t("5d23"),x=t("1baa"),w=t("34c3"),y=t("e449"),j=t("2fa4"),A=t("3a2f"),T=Object(u["a"])(l,n,c,!1,null,null,null),P=T.exports;m()(T,{VAppBar:p["a"],VAppBarTitle:f["a"],VBtn:g["a"],VIcon:h["a"],VImg:b["a"],VList:v["a"],VListItem:C["a"],VListItemContent:_["a"],VListItemGroup:x["a"],VListItemIcon:w["a"],VListItemTitle:_["b"],VMenu:y["a"],VSpacer:j["a"],VTooltip:A["a"]});var V={name:"App",components:{Navbar:P},data:function(){return{}}},S=V,I=(t("034f"),t("7496")),R=Object(u["a"])(S,r,o,!1,null,null,null),E=R.exports;m()(R,{VApp:I["a"]});var k=t("8c4f"),O=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("inicio"),t("aprende"),t("preguntas"),t("cursos"),t("pie")],1)},H=[],M=t("9d4c"),L=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{attrs:{id:"features"}},[t("div",{staticClass:"container mt-15 mb-15"},[a._m(0),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6 mx-auto text-center"},[t("div",{staticClass:"d-flex justify-center my-4"},[t("v-icon",{attrs:{"x-large":"",color:"primary"}},[a._v("mdi-cast-education")])],1),t("h4",[a._v("Online")]),t("p",{staticClass:"font-weight-light"},[a._v("Los cursos son 100% en línea, con clases en vivo vía Zoom.")])]),t("div",{staticClass:"col-md-6 mx-auto text-center"},[t("div",{staticClass:"d-flex justify-center my-4"},[t("v-icon",{attrs:{"x-large":"",color:"secondary"}},[a._v("mdi-tools")])],1),t("h4",[a._v("Proyectos")]),t("p",{staticClass:"font-weight-light"},[a._v("Cursos 100% prácticos, donde se desarrollan varios proyectos.")])]),t("div",{staticClass:"col-md-6 mx-auto text-center"},[t("div",{staticClass:"d-flex justify-center my-4"},[t("v-icon",{attrs:{"x-large":"",color:"success"}},[a._v("mdi-rocket")])],1),t("h4",[a._v("Futuro")]),t("p",{staticClass:"font-weight-light"},[a._v("Formamos futuros genios en áreas STEAM.")])]),t("div",{staticClass:"col-md-6 mx-auto text-center"},[t("div",{staticClass:"d-flex justify-center my-4"},[t("v-icon",{attrs:{"x-large":"",color:"accent"}},[a._v("mdi-bag-personal")])],1),t("h4",[a._v("Refuerza")]),t("p",{staticClass:"font-weight-light"},[a._v("Contenidos complementarios para seguir estudiando.")])]),a._m(1),t("div",{staticClass:"col-md-5 mx-auto mt-4"},[[t("v-carousel",{attrs:{"show-arrows":!1,height:"250",cycle:"","show-arrows-on-hover":"","hide-delimiter-background":""}},a._l(a.items,(function(a,e){return t("v-carousel-item",{key:e,attrs:{src:a.src}})})),1)]],2)])]),t("router-view")],1)},B=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row px-4"},[t("div",{staticClass:"col-md-6 mx-auto text-center"},[t("h2",{staticClass:"accent--text font-weight-bold"},[a._v("Aprende con nosotros")]),t("p",{staticClass:"font-weight-light"},[a._v("Con nuestros cursos para niños online estamos aprovechando toda nuestra experiencia para que tu hijo o hija sea capaz de aprender los conceptos más importantes. Además la modalidad de clases en directo por videoconferencia con un profesor capacitado son un garantía de tranquilidad para padres y alumnos.")])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"col-md-6 mr-auto mt-4"},[t("h2",{staticClass:"font-weight-medium"},[a._v("Trunable es mas que una academia.")]),t("p",{staticClass:"font-weight-normal"},[a._v("Trunable brinda una propuesta innovadora, orientado a niños. Aprender Ciencia, Tecnología, Ingeniería, Arte y Matemáticas no tiene por que ser una tarea pesada. TRUNABLE - inpiramos futuro")])])}],F={data:function(){return{items:[{src:t("77a8")},{src:t("ab0a")},{src:t("efc1")},{src:t("fbf3")}]}}},D=F,J=t("5e66"),z=t("3e35"),N=Object(u["a"])(D,L,B,!1,null,null,null),U=N.exports;m()(N,{VCarousel:J["a"],VCarouselItem:z["a"],VIcon:h["a"]});var G=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{attrs:{id:"features"}},[t("div",{staticClass:"container mt-15 mb-15"},[a._m(0),t("div",{staticClass:"row"},a._l(a.cuestiones,(function(e,i){return t("div",{key:i,staticClass:"col-md-6 px-10"},[t("h5",[a._v(a._s(e.pregunta))]),t("p",{staticClass:"font-weight-light"},[a._v(a._s(e.respuesta))])])})),0)]),t("router-view")],1)},$=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row px-4"},[t("div",{staticClass:"col-md-6 mx-auto text-center"},[t("h2",{staticClass:"success--text font-weight-bold"},[a._v("Preguntas Frecuentes.")]),t("p",{staticClass:"font-weight-light"},[a._v("Respuestas a las preguntas mas habituales")])])])}],Y={data:function(){return{cuestiones:[{pregunta:"¿Cómo se verifica la autenticidad del certificado?",respuesta:'Una vez concluido el curso, se asigna un código(ID) de certificado por cada curso que ha completado, dirígete al icono CERTIFICADO que se encuentra en la esquina superior derecha de la página, ingresa el código y dale click al botón "Buscar ID", en su pantalla aparecerá los datos. Esto permite verificar la autenticidad de certificado.'},{pregunta:"¿Dónde publican los cursos, cómo me entero acerca de los próximos lanzamientos?",respuesta:'Enterate de los nuevos cursos a través de nuestras redes sociales o puedes contactarnos haciendo click en el botón "contáctanos" o los iconos de redes sociales en la parte inferior de la página.'},{pregunta:"¿Cuáles son los modos de pago de un curso?",respuesta:"Existen tres métodos de pago. Depósito bancario, Transferencia a cuenta bancaria y Tigo Money.  Se recomienda previamente coordinar el método de pago."},{pregunta:"¿Qué es trunable?",respuesta:"Somos una institución que brinda capacitación virtual enfocada en áreas STEAM(Ciencia, Tecnología, Ingeniería, Arte y Matemática). Trunable es un emprendimiento virtual."}]}}},q=Y,Z=Object(u["a"])(q,G,$,!1,null,null,null),K=Z.exports,X=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{attrs:{id:"features"}},[t("div",{staticClass:"container mt-15 mb-15"},[a._m(0),t("div",{staticClass:"row"},a._l(a.items,(function(e,i){return t("div",{key:i,staticClass:"col-md-4 px-10"},[t("v-card",{staticClass:"mx-auto"},[t("v-img",{staticClass:"align-end",attrs:{src:e.src}}),t("v-card-text",{staticClass:"pb-0"},[a._v("Nivel: "+a._s(e.nivel))]),t("v-card-title",{staticClass:"py-0",staticStyle:{"word-break":"normal"}},[a._v(a._s(e.alt))]),t("v-card-title",{staticClass:"py-0 font-weight-black accent--text"},[a._v(a._s(e.focus))]),t("v-card-actions",{staticClass:"d-flex justify-end"},[t("v-btn",{attrs:{color:"success",text:"",href:"https://wa.me/+59178316724/?text=Deseo mas infomación",target:"_blank",rel:"noopener"}},[t("v-icon",{staticClass:"mx-1",attrs:{small:""}},[a._v(a._s(a.icons.mdiWhatsapp))]),a._v("Más info")],1)],1)],1)],1)})),0),t("div",{staticClass:"row mt-10"},[t("div",{staticClass:"col-md-6 mx-auto text-center"},[t("h5",[a._v("Para mas información")]),t("v-btn",{attrs:{color:"primary",href:"https://wa.me/+59178316724/?text=Deseo mas infomación",target:"_blank",rel:"noopener"}},[a._v("Click aquí")])],1)])]),t("router-view")],1)},Q=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row px-4"},[t("div",{staticClass:"col-md-6 mx-auto text-center"},[t("h2",{staticClass:"primary--text font-weight-bold"},[a._v("Cursos ofertados")]),t("p",{staticClass:"font-weight-light"},[a._v("100% online con instructores de amplia experencia")])])])}],W=t("94ed"),aa={data:function(){return{icons:{mdiWhatsapp:W["a"]},items:[{src:t("deb1"),alt:"Programción de Videojuegos",focus:"SCRATCH",nivel:"Básico"},{src:t("4d9e"),alt:"Programación de Videojuegos",focus:"ROBLOX",nivel:"Básico"},{src:t("7cfd"),alt:"Programación de Videojuegos",focus:"MINECRAFT",nivel:"Básico"},{src:t("28f5"),alt:"Introdución a la pintura",focus:"ACUARELAS",nivel:"Básico"},{src:t("bf6e"),alt:"Word, PowerPoint, Excel",focus:"OFIMÁTICA",nivel:"Básico"},{src:t("ff9e"),alt:"Robótica",focus:"ARDUINO",nivel:"Básico"},{src:t("02a9"),alt:"Jaquemate",focus:"AJEDRES",nivel:"Básico"},{src:t("5b9f"),alt:"Introduccion Programación",focus:"PYTHON",nivel:"Básico"},{src:t("3c11"),alt:"Diseño Gráfico Vectorial",focus:"AFFINITY DESIGNER",nivel:"Básico"},{src:t("7b47"),alt:"Diseño Gráfico - Juniors",focus:"AFFINITY DESIGNER",nivel:"Básico"}]}}},ea=aa,ta=t("b0af"),ia=t("99d9"),ra=Object(u["a"])(ea,X,Q,!1,null,null,null),oa=ra.exports;m()(ra,{VBtn:g["a"],VCard:ta["a"],VCardActions:ia["a"],VCardText:ia["b"],VCardTitle:ia["c"],VIcon:h["a"],VImg:b["a"]});var na=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-footer",{attrs:{color:"indigo accent-4",padless:""}},[t("div",{staticClass:"container mt-15 mb-15"},[t("div",{staticClass:"row mt-10"},[t("div",{staticClass:"col-md-6 mr-auto"},[t("p",{staticClass:"overline white--text"},[a._v("Todo los cursos están orientados a estimular el desarrollo intelectual a través de áreas STEAM (Ciencia, Tecnología, Ingeniería, Arte y Matemática).")])]),t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"d-flex justify-center"},[t("a",{staticClass:"mx-4 text-decoration-none",attrs:{icon:"",href:"https://fb.com/trunable",target:"_blank",rel:"noopener"}},[t("v-icon",{attrs:{large:"",color:"white"}},[a._v("mdi-facebook")])],1),t("a",{staticClass:"mx-4 text-decoration-none",attrs:{icon:"",href:"https://twitter.com/trunable",target:"_blank",rel:"noopener"}},[t("v-icon",{attrs:{large:"",color:"white"}},[a._v("mdi-twitter")])],1),t("a",{staticClass:"mx-4 text-decoration-none",attrs:{icon:"",href:"https://instagram.com/trunable",target:"_blank",rel:"noopener"}},[t("v-icon",{attrs:{large:"",color:"white"}},[a._v("mdi-instagram")])],1),t("a",{staticClass:"mx-4 text-decoration-none",attrs:{icon:"",href:"https://wa.me/+59178316724",target:"_blank",rel:"noopener"}},[t("v-icon",{attrs:{large:"",color:"white"}},[a._v("mdi-whatsapp")])],1)])])])]),t("v-col",{staticClass:"text-center white--text",attrs:{cols:"12"}},[a._v("Hecho con "),t("v-icon",{attrs:{mediun:"",color:"pink"}},[a._v("mdi-heart")]),a._v(" TRUNABLE")],1)],1)},ca=[],sa={name:"piePagina"},la=sa,ua=t("62ad"),da=t("553a"),ma=Object(u["a"])(la,na,ca,!1,null,null,null),pa=ma.exports;m()(ma,{VCol:ua["a"],VFooter:da["a"],VIcon:h["a"]});var fa={name:"Home",components:{inicio:M["default"],aprende:U,preguntas:K,cursos:oa,pie:pa}},ga=fa,ha=(t("cccb"),Object(u["a"])(ga,O,H,!1,null,null,null)),ba=ha.exports,va=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",[t("div",{staticClass:"container mt-15 mb-15"},[t("div",{staticClass:"row px-4"},[t("div",{staticClass:"col-md-6 mx-auto text-center"},[t("h4",[a._v("Verificación de certificado")]),t("div",{staticClass:"caption primary--text"},[a._v("Para verificar la autenticidad de tu certificado, ingresa el ID ubicado en la parte superior derecha.")]),t("v-form",{ref:"form",model:{value:a.valido,callback:function(e){a.valido=e},expression:"valido"}},[t("v-layout",{staticClass:"column"},[t("v-flex",[t("v-text-field",{attrs:{label:"ID",rules:a.rules,"hide-details":"auto",required:""},model:{value:a.buscar,callback:function(e){a.buscar=e},expression:"buscar"}})],1),t("v-flex",{staticClass:"text-xs-center mt-5"},[t("v-btn",{staticClass:"mr-4",attrs:{color:"primary",center:"",disabled:!a.valido},on:{click:a.real}},[a._v("Buscar ID")]),t("v-btn",{staticClass:"outlined",attrs:{color:"pink",dark:""},on:{click:a.reset}},[a._v("Refrescar")])],1)],1)],1)],1)]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6 mx-auto text-center"},[a.cer?t("cer",{attrs:{c:a.carton}}):a._e()],1)])])])},Ca=[],_a=(t("4de4"),t("caad"),t("2532"),t("d5a9")),xa=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("v-card",{staticClass:"mx-auto text-center pd"},[t("v-img",{staticClass:"white--text text-right white--text",attrs:{src:a.c.img}},[t("v-card-title",{staticClass:"subtitle_1 flex-column align-end"},[a._v("ID: "+a._s(a.c.id))])],1),t("h5",{staticClass:"mt-4"},[a._v(a._s(a.c.curso))]),t("p",{staticClass:"subtitle-2 mt-4"},[a._v("TRUNABLE CERTIFICA QUE:")]),t("h4",{staticClass:"blue-grey--text"},[a._v(a._s(a.c.name))]),"instructor"===a.c.tipo?t("p",{staticClass:"body-2 mx-4 my-4"},[a._v("Ha participado en calidad de instructor(a) del curso: "+a._s(a.c.curso)+" completando todas las lecciones satisfactoriamente.")]):t("p",{staticClass:"body-2 mx-4 my-4"},[a._v("Ha participado del curso: "+a._s(a.c.curso)+" completando todas las lecciones satisfactoriamente.")]),t("div",{staticClass:"overline caption"},[a._v(a._s(a.c.fecha))])],1)],1)},wa=[],ya={name:"cer",props:{c:{type:Object,required:!0}}},ja=ya,Aa=Object(u["a"])(ja,xa,wa,!1,null,null,null),Ta=Aa.exports;m()(Aa,{VCard:ta["a"],VCardTitle:ia["c"],VImg:b["a"]});var Pa={name:"Search",components:{cer:Ta},data:function(){return{estudiantes:_a,carton:{},buscar:"",rules:[function(a){return!!a||"El código es requerido."},function(a){return a&&a.length>=4||"Min 4 characters"}],valido:!1,cer:!1}},methods:{reset:function(){this.$refs.form.reset(),this.cer=!1},real:function(){var a=this;try{if(this.buscar.toUpperCase()===_a.filter((function(e){return e.id.toLowerCase().includes(a.buscar.toLowerCase())}))[0].id)return this.carton=_a.filter((function(e){return e.id.toLowerCase().includes(a.buscar.toLowerCase())}))[0],this.cer=!0,this.carton;throw new Error("algo paso")}catch(e){console.log(e)}}}},Va=Pa,Sa=t("0e8f"),Ia=t("4bd4"),Ra=t("a722"),Ea=t("8654"),ka=Object(u["a"])(Va,va,Ca,!1,null,null,null),Oa=ka.exports;m()(ka,{VBtn:g["a"],VFlex:Sa["a"],VForm:Ia["a"],VLayout:Ra["a"],VTextField:Ea["a"]}),i["a"].use(k["a"]);var Ha=[{path:"*",redirect:"/"},{path:"/",name:"Home",component:ba},{path:"/certificados",name:"Certificados",component:Oa}],Ma=new k["a"]({mode:"history",base:"/",routes:Ha}),La=Ma,Ba=t("2f62");i["a"].use(Ba["a"]);var Fa=new Ba["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Da=t("f309"),Ja=t("fcf4");i["a"].use(Da["a"]);var za=new Da["a"]({theme:{themes:{light:{primary:Ja["a"].indigo.accent4,secondary:Ja["a"].amber.darken1,accent:Ja["a"].pink.base,error:"#FF5252",info:"#2196F3",success:Ja["a"].green.accent4,warning:"#FFC107"}}}});i["a"].config.productionTip=!1,new i["a"]({router:La,store:Fa,vuetify:za,render:function(a){return a(E)}}).$mount("#app")},"5b9f":function(a,e,t){a.exports=t.p+"img/c_08.724d2ed5.jpg"},"5ced":function(a,e,t){},"77a8":function(a,e,t){a.exports=t.p+"img/slide_4.0ce5dfd7.jpg"},"7b47":function(a,e,t){a.exports=t.p+"img/c_10.d2ce504b.jpg"},"7cfd":function(a,e,t){a.exports=t.p+"img/c_03.40ee29bc.jpg"},"85ec":function(a,e,t){},"9d4c":function(a,e,t){"use strict";var i=t("442b"),r=t("c560"),o=(t("4b06"),t("2877")),n=t("6544"),c=t.n(n),s=t("8336"),l=t("132d"),u=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports,c()(u,{VBtn:s["a"],VIcon:l["a"]})},ab0a:function(a,e,t){a.exports=t.p+"img/slide_2.c5f0e2b3.jpg"},bf6e:function(a,e,t){a.exports=t.p+"img/c_05.15e831cf.jpg"},c560:function(a,e,t){"use strict";var i=t("071f"),r=t.n(i);e["default"]=r.a},cccb:function(a,e,t){"use strict";t("5ced")},d5a9:function(a){a.exports=JSON.parse('[{"name":"Facundo Trujillo Pinto","curso":"Programación de videojuegos con SCRATCH","fecha":"Cochabamba, enero 2021","id":"6ULZFY","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/scratch_certificado.png"},{"name":"Jhoan Leonardo Cruz Saravia","curso":"Programación de videojuegos con SCRATCH","fecha":"Cochabamba, enero 2021","id":"2JD4UU","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/scratch_certificado.png"},{"name":"Luciano Rocabado Romero","curso":"Programación de videojuegos con SCRATCH","fecha":"Cochabamba, enero 2021","id":"HB7HMH","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/scratch_certificado.png"},{"name":"Carlos Andrés Pereyra Baldivieso","curso":"Programación de videojuegos con SCRATCH","fecha":"Cochabamba, enero 2021","id":"C5EL8T","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/scratch_certificado.png"},{"name":"Marialis Belen Vargas Bustamante","curso":"Programación de videojuegos con SCRATCH","fecha":"Cochabamba, enero 2021","id":"VEMMUH","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/scratch_certificado.png"},{"name":"Sebastian Bernal Aro","curso":"Programación de videojuegos con SCRATCH","fecha":"Cochabamba, enero 2021","id":"L366VQ","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/scratch_certificado.png"},{"name":"Liliana Barbara Velasco","curso":"Programación de videojuegos con SCRATCH","fecha":"Cochabamba, enero 2021","id":"V9NY9K","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/scratch_certificado.png"},{"name":"Oscar Joel Canelas Adriazola","curso":"Programación de videojuegos con SCRATCH","fecha":"Cochabamba, enero 2021","id":"ZA2ZUA","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/scratch_certificado.png"},{"name":"Miguel Ángel Sierra Pacheco","curso":"Programación de videojuegos con SCRATCH","fecha":"Cochabamba, enero 2021","id":"KC8RHH","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/scratch_certificado.png"},{"name":"Laura Solano","curso":"Programación de videojuegos con SCRATCH","fecha":"Cochabamba, enero 2021","id":"YGBR3A","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/scratch_certificado.png"},{"name":"Daniela Antoneth Fernandez Soto","curso":"Programación de videojuegos con SCRATCH","fecha":"Cochabamba, enero 2021","id":"229DJR","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/scratch_certificado.png"},{"name":"Jazmin Maite Zerna Espinoza ","curso":"Programación de videojuegos con SCRATCH","fecha":"Cochabamba, enero 2021","id":"8LVJTH","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/scratch_certificado.png"},{"name":"Marcos Ernesto Flores Villarroel","curso":"Programación de videojuegos con SCRATCH","fecha":"Cochabamba, enero 2021","id":"5YURX3","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/scratch_certificado.png"},{"name":"Sergio Andrés Ticona Rivera","curso":"Programación de videojuegos con SCRATCH","fecha":"Cochabamba, enero 2021","id":"PXPX38","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/scratch_certificado.png"},{"name":"Pedro García Villarroel","curso":"Programación de videojuegos con SCRATCH","fecha":"Cochabamba, enero 2021","id":"64R8FC","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/scratch_certificado.png"},{"name":"Pablo Benjamín Vidal Machaca","curso":"Programación de videojuegos con SCRATCH","fecha":"Cochabamba, enero 2021","id":"LMWFHU","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/scratch_certificado.png"},{"name":"Aleida Luciana Zuñagua Quiñajo","curso":"Ilustración con acuarelas","fecha":"Cochabamba, enero 2021","id":"KYA8X5","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/acuarelas_certificado.png"},{"name":"Patricia Nicole Portillo Sandoval ","curso":"Ilustración con acuarelas","fecha":"Cochabamba, enero 2021","id":"PB4RJK","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/acuarelas_certificado.png"},{"name":"Carlos Andrés Pereyra Baldivieso","curso":"Ilustración con acuarelas","fecha":"Cochabamba, enero 2021","id":"AEP4Z3","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/acuarelas_certificado.png"},{"name":"Saskia Hurtado Yañez","curso":"Ilustración con acuarelas","fecha":"Cochabamba, enero 2021","id":"ZGYT66","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/acuarelas_certificado.png"},{"name":"Adrik Hurtado Yañez","curso":"Ilustración con acuarelas","fecha":"Cochabamba, enero 2021","id":"AHT7V6","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/acuarelas_certificado.png"},{"name":"Juan Pablo Cahuaya Gomez","curso":"Ilustración con acuarelas","fecha":"Cochabamba, enero 2021","id":"L8KZJ3","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/acuarelas_certificado.png"},{"name":"Gabriela Cahuaya Gomez","curso":"Ilustración con acuarelas","fecha":"Cochabamba, enero 2021","id":"7KCFL3","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/acuarelas_certificado.png"},{"name":"Luis Ignacio Ayala Maldonado","curso":"Ilustración con acuarelas","fecha":"Cochabamba, enero 2021","id":"R29XTU","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/acuarelas_certificado.png"},{"name":"Luis Santiago Ayala Maldonado ","curso":"Ilustración con acuarelas","fecha":"Cochabamba, enero 2021","id":"SNSS9J","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/acuarelas_certificado.png"},{"name":"Jessika Rosario Peredo Mayorga","curso":"Ilustración con acuarelas","fecha":"Cochabamba, enero 2021","id":"5VMDTD","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/acuarelas_certificado.png"},{"name":"Claudia Flores Sanchez","curso":"Programación de videojuegos con SCRATCH","fecha":"Cochabamba, enero 2021","id":"BCLLJ6","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/scratch_certificado.png"},{"name":"Ana Paola Cespedes Sejas","curso":"Programación de videojuegos con SCRATCH","fecha":"Cochabamba, enero 2021","id":"DYS767","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/scratch_certificado.png"},{"name":"Lilia Johanna Valencia González","curso":"Programación con Python - Introduccion","fecha":"Cochabamba, febrero 2021","id":"GVA5GM","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/python_01_certificado.png"},{"name":"Sebastián Villarroel Rojas","curso":"Computación y Ofimática","fecha":"Cochabamba, junio 2021","id":"XBA3WR","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/ofimatica_certificado.png"},{"name":"Isabella Estrella Villarroel Rendon","curso":"Computación y Ofimática","fecha":"Cochabamba, junio 2022","id":"RCYQMR","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/ofimatica_certificado.png"},{"name":"Santiago Verá Mendoza","curso":"Computación y Ofimática","fecha":"Cochabamba, junio 2023","id":"FA49Z8","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/ofimatica_certificado.png"},{"name":"Camila Angely Aguilar Villarroel","curso":"Computación y Ofimática","fecha":"Cochabamba, junio 2024","id":"YNZFJP","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/ofimatica_certificado.png"},{"name":"Thiago Ismael Pinto Tapia","curso":"Computación y Ofimática","fecha":"Cochabamba, junio 2025","id":"MUTPUP","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/ofimatica_certificado.png"},{"name":"Wayra Victoria Flores Mejia","curso":"Computación y Ofimática","fecha":"Cochabamba, junio 2026","id":"KJFZRG","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/ofimatica_certificado.png"},{"name":"Diego Sempertegui Gonzales","curso":"Computación y Ofimática","fecha":"Cochabamba, junio 2027","id":"V4QCFE","img":"https://raw.githubusercontent.com/daddriel/imgtrunable/main/ofimatica_certificado.png"}]')},deb1:function(a,e,t){a.exports=t.p+"img/c_01.45445be8.jpg"},efc1:function(a,e,t){a.exports=t.p+"img/slide_3.27eedc81.jpg"},fbf3:function(a,e,t){a.exports=t.p+"img/slide_1.3e058a29.jpg"},ff9e:function(a,e,t){a.exports=t.p+"img/c_06.9edefa55.jpg"}});
//# sourceMappingURL=app.30b60060.js.map
(function(e){function t(t){for(var n,s,l=t[0],i=t[1],c=t[2],u=0,p=[];u<l.length;u++)s=l[u],o[s]&&p.push(o[s][0]),o[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var i=a[s];0!==o[i]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},o={app:0},r=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"56a6334e"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise(function(t,n){a=o[e]=[t,n]});t.push(a[2]=n);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=s(e),r=function(t){i.onerror=i.onload=null,clearTimeout(c);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+n+": "+r+")");s.type=n,s.request=r,a[1](s)}o[e]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:i})},12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),o=a("bb71");a("da64");n["a"].use(o["a"],{theme:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},customProperties:!0,iconfont:"md"});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-toolbar",{staticClass:"white--text",attrs:{app:"",color:"blue"}},[a("img",{staticClass:"logo",attrs:{src:"https://buscaativaescolar.org.br/images/logo-busca-ativa-escolar.png?1540573178"}}),a("v-toolbar-title",{staticClass:"headline"},[a("span",[e._v("Bem vind@!")]),a("span",{staticClass:"font-weight-light"},[e._v(" Nome da escola")])]),a("v-spacer"),a("v-btn",{staticClass:"white--text",attrs:{flat:"",href:"//buscaativaescolar.org.br",target:"_blank"}},[a("span",{staticClass:"mr-2"},[e._v("Ir para o Busca Ativa Escolar")]),a("v-icon",[e._v("open_in_new")])],1)],1),a("v-content",[a("router-view")],1)],1)},s=[],l={name:"App",data:function(){return{}}},i=l,c=a("2877"),u=a("6544"),d=a.n(u),p=a("7496"),f=a("8336"),h=a("549c"),v=a("132d"),m=a("9910"),b=a("71d9"),g=a("2a7f"),_=Object(c["a"])(i,r,s,!1,null,null,null),x=_.exports;d()(_,{VApp:p["a"],VBtn:f["a"],VContent:h["a"],VIcon:v["a"],VSpacer:m["a"],VToolbar:b["a"],VToolbarTitle:g["a"]});var y=a("8c4f"),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("HelloWorld")},C=[],k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",[e._v("\n    Informar dados de endereço da criança\n    "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"search",label:"Pesquisar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{attrs:{headers:e.headers,items:e.alunos,loading:e.loading},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",[e._v(e._s(t.item.name)),a("br"),a("small",[a("b",[e._v("Nome da mãe:")]),e._v(" "+e._s(t.item.mother_name))])]),a("td",{staticClass:"text-xs-left"},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"#####-###",expression:"'#####-###'"}],attrs:{required:""},on:{keyup:function(a){return e.searchCep(t.item.place_cep,t.index)}},model:{value:t.item.place_cep,callback:function(a){e.$set(t.item,"place_cep",a)},expression:"props.item.place_cep"}})],1),a("td",{staticClass:"text-xs-left"},[a("v-text-field",{attrs:{required:""},on:{blur:function(a){return e.update(t.index,e.alunos[t.index].place_address)}},model:{value:e.alunos[t.index].place_address,callback:function(a){e.$set(e.alunos[t.index],"place_address",a)},expression:"alunos[props.index].place_address"}})],1),a("td",{staticClass:"text-xs-left"},[a("v-text-field",{attrs:{required:""},on:{blur:function(a){return e.update(t.index,e.alunos[t.index].place_reference)}},model:{value:e.alunos[t.index].place_reference,callback:function(a){e.$set(e.alunos[t.index],"place_reference",a)},expression:"alunos[props.index].place_reference"}})],1),a("td",{staticClass:"text-xs-left"},[a("v-text-field",{attrs:{required:""},on:{blur:function(a){return e.update(t.index,e.alunos[t.index].place_neighborhood)}},model:{value:e.alunos[t.index].place_neighborhood,callback:function(a){e.$set(e.alunos[t.index],"place_neighborhood",a)},expression:"alunos[props.index].place_neighborhood"}})],1),a("td",{staticClass:"text-xs-left"},[e._v(e._s(t.item.status))])]}}])},[a("v-progress-linear",{attrs:{slot:"progress",color:"blue",indeterminate:""},slot:"progress"}),a("v-alert",{attrs:{slot:"no-results",value:!0,color:"error",icon:"warning"},slot:"no-results"},[e._v('\n      Você pesquisou por "'+e._s(e.search)+'" mas não foi encontrado.\n    ')])],1)],1)},V=[],j=(a("a481"),{data:function(){return{search:"",pagination:{},selected:[],loading:!0,headers:[{text:"Nome",align:"left",value:"nome"},{text:"CEP",sortable:!1,align:"left",value:"place_cep"},{text:"Logradouro / Endereço",sortable:!1,align:"left",value:"place_address"},{text:"Complemento",sortable:!1,align:"left",value:"place_reference"},{text:"Bairro",sortable:!1,align:"left",value:"place_neighborhood"},{text:"Status",align:"left",value:"status"}],alunos:[],school_id:"",token:"",url:"http://localhost:3000/api/v1"}},created:function(){var e=this;this.school_id=this.$route.params.school_id,this.token=this.$route.params.token,this.$nextTick(function(){e.getAlunos()})},methods:{getAlunos:function(){var e=this;this.$http.get(this.url+"/alertas?school_last_id="+this.school_id).then(function(t){e.alunos=t.body.data,e.loading=!1},function(e){console.log("Error on request")})},searchCep:function(e,t){var a=e.replace(/[^A-Z0-9]/gi,"");8===a.length&&(this.loading=!0,this.$http.get("https://viacep.com.br/ws/".concat(a,"/json/")).then(function(e){this.alunos[t].place_address=e.body.logradouro,this.alunos[t].numero=e.body.numero,this.alunos[t].complemento=e.body.complemento,this.alunos[t].place_cep=e.body.cep,this.alunos[t].place_neighborhood=e.body.bairro,this.loading=!1,this.update(t,!0)}).catch(function(e){return console.log(e)}))},update:function(e,t){var a=this;if(console.log(e),t){this.loading=!0;var n=this.alunos[e];this.$http.put(this.url+"/alertas/"+n.id,n).then(function(e){a.loading=!1},function(e){console.log("Error on request")})}}}}),$=j,O=a("0798"),P=a("b0af"),T=a("12b2"),E=a("8fea"),S=a("8e36"),q=a("2677"),A=Object(c["a"])($,k,V,!1,null,null,null),F=A.exports;d()(A,{VAlert:O["a"],VCard:P["a"],VCardTitle:T["a"],VDataTable:E["a"],VProgressLinear:S["a"],VSpacer:m["a"],VTextField:q["a"]});var B={components:{HelloWorld:F}},M=B,N=Object(c["a"])(M,w,C,!1,null,null,null),I=N.exports;n["a"].use(y["a"]);var L=new y["a"]({mode:"history",routes:[{path:"/",name:"home",component:I},{path:"/:school_id/:token",name:"homelink",component:I},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),D=a("2f62");n["a"].use(D["a"]);var H=new D["a"].Store({state:{},mutations:{},actions:{}}),J=(a("db4d"),a("28dd")),W=a("3a60"),Z=a.n(W);n["a"].use(Z.a),n["a"].use(J["a"]),n["a"].config.productionTip=!1,new n["a"]({router:L,store:H,render:function(e){return e(x)}}).$mount("#app")}});
//# sourceMappingURL=app.2e03b40b.js.map
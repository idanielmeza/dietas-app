(this["webpackJsonpdietasapp-frontend"]=this["webpackJsonpdietasapp-frontend"]||[]).push([[0],{68:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(33),r=a.n(n),i=a(14),o=a(5),l=a(4),d=a.n(l),j=a(8),b=a(6),u=Object(c.createContext)(),m=a(2),h="REGISTRO_EXITOSO",x="LOGIN_EXITOSO",O="LOGIN_ERROR",p="CERRAR_SESIONS",f="INFORMACION_USUARIO",v="COMIDA_ACTUAL",g="AGREGAR_DIETA",N="CALORIAS_USADAS",y="INFORMACION_COMIDA",w=function(e,t){switch(t.type){case x:case h:return localStorage.setItem("user-token",t.payload.token),Object(m.a)(Object(m.a)({},e),{},{token:t.payload.token,usuario:t.payload.usuario,autenticado:!0,cargando:!1});case p:case O:return localStorage.removeItem("user-token"),Object(m.a)(Object(m.a)({},e),{},{token:null,usuario:null,autenticado:null,cargando:!1});default:return e}},C=a(34),F=a.n(C).a.create({baseURL:window.location.href}),k=function(e){e?F.defaults.headers.common["user-token"]=e:delete F.defaults.headers.common["user-token"]},S=a(3),_=a.n(S),A=a(0),I=function(e){var t={token:localStorage.getItem("user-token"),autenticado:null,usuario:null,cargando:!0},a=Object(c.useReducer)(w,t),s=Object(b.a)(a,2),n=s[0],r=s[1],i=function(){var e=Object(j.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.post("/api/usuario",t);case 3:a=e.sent,console.log(a.data.token),r({type:h,payload:a.data}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),r({type:O}),_.a.toast({html:"".concat(e.t0.response.data.errors[0].msg)});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(j.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.post("/api/auth/login",t);case 3:a=e.sent,r({type:x,payload:a.data}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),r({type:O}),_.a.toast({html:"".concat(e.t0.response.data.msg)});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=localStorage.getItem("user-token"))&&k(t),e.prev=2,e.next=5,F.get("/api/usuario");case 5:return a=e.sent,r({type:x,payload:a.data}),e.abrupt("return",a.data.usuario);case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0),r({types:O});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return Object(A.jsx)(u.Provider,{value:{autenticado:n.autenticado,usuario:n.usuario,registrarUsuario:i,iniciarSesion:o,obtenerUsuario:l,cerrarSesion:function(){delete F.defaults.headers.common["user-token"],r({type:p})}},children:e.children})},E=Object(c.createContext)(),P=function(e){var t=Object(c.useState)(0),a=Object(b.a)(t,2),s=a[0],n=a[1];return Object(A.jsx)(E.Provider,{value:{pagina:s,guardarPagina:n},children:e.children})},R=a(37),T=Object(c.createContext)(),U=function(e,t){switch(t.type){case f:return Object(m.a)(Object(m.a)({},e),{},{total:t.payload.total,informacion:t.payload.informacion});case v:return Object(m.a)(Object(m.a)({},e),{},{comida:t.payload});case g:return Object(m.a)(Object(m.a)({},e),{},{dieta:t.payload});case N:return Object(m.a)(Object(m.a)({},e),{},{consumidas:t.payload,restantes:e.total-t.payload});case y:return Object(m.a)(Object(m.a)({},e),{},{comidaInfo:t.payload});default:return e}},D=function(e){var t=Object(c.useContext)(E).pagina,a=Object(c.useReducer)(U,{informacion:{edad:"",estatura:"",peso:"",sexo:"",objetivo:"",actividad:""},dieta:{1:[],2:[],3:[],4:[],5:[]},comida:[],total:0,consumidas:0,restantes:0,comidaInfo:{prote:0,carbos:0,grasa:0,kcal:0}}),s=Object(b.a)(a,2),n=s[0],r=s[1],i=function(){var e=Object(j.a)(d.a.mark((function e(t){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t,e.next=4,F.put("/api/usuario",a);case 4:c=o(t),r({type:f,payload:{total:c,informacion:t}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),_.a.toast({html:"Hubo un error vuelve a intentarlo"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),o=function(e){var t=e.edad,a=e.estatura,c=e.peso,s=e.sexo,n=e.objetivo,r=e.actividad,i=0;if("h"===s)i=(66+13.7*Number(c)+5*Number(a)-6.75*Number(t))*Number(r)+Number(n);else if("m"===s){i=(655+9.6*Number(c)+1.8*Number(a)-4.7*Number(t))*Number(r)+Number(n)}return i},l=function(){if(0!==t&&0!==n.dieta["".concat(t)].lenght){var e=n.dieta["".concat(t)];r({type:v,payload:e}),u(),O()}},u=function(){for(var e=0,t=0,a=0,c=1;c<=5;++c)n.dieta[c]&&n.dieta[c].forEach((function(c){e+=c.porcion*c.proteina,t+=c.porcion*c.carbohidrato,a+=c.porcion*c.grasa}));var s=Number((9*a+4*(t+e)).toFixed(2));r({type:N,payload:s}),n.consumidas>n.total&&_.a.toast({html:"Has excedido la cantidad de calorias"})},m=function(){var e=Object(j.a)(d.a.mark((function e(a){var c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.porcion=1,!1,(c=n.dieta[t]).forEach((function(e){e._id!==a._id||_.a.toast({html:"El alimento ".concat(e.nombre," ha sido agregado anteriormente.")})})),c=[].concat(Object(R.a)(c),[a]),e.prev=5,(s=n.dieta)[t]=c,e.next=10,F.put("api/usuario/comida",{comida:s});case 10:r({type:g,payload:s}),l(),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),console.log(e.t0),_.a.toast({html:"Hubo un error"});case 18:u();case 19:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(j.a)(d.a.mark((function e(a){var c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.dieta,s=c[t].filter((function(e){return e._id!==a})),c[t]=s,e.prev=3,e.next=6,F.put("/api/usuario/comida",{comida:c});case 6:r({type:g,payload:c}),l(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),_.a.toast({html:"Hubo un error, vuelve a intentarlo"});case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(j.a)(d.a.mark((function e(a,c){var s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=n.comida,0!=a){e.next=4;break}return h(c),e.abrupt("return");case 4:return s.forEach((function(e){e._id==c&&(e.porcion=Number(a))})),(i=n.dieta)[t]=s,e.prev=7,e.next=10,F.put("/api/usuario/comida",{comida:i});case 10:r({type:g,payload:i}),l(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),_.a.toast({html:"Hubo un error,vuelve a intentarlo"});case 17:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(t,a){return e.apply(this,arguments)}}(),O=function(){var e=0,t=0,a=0;n.comida.forEach((function(c){e+=c.porcion*c.proteina,t+=c.porcion*c.carbohidrato,a+=c.porcion*c.grasa}));var c=Number((9*a+4*(t+e)).toFixed(2));r({type:y,payload:{prote:e,carbos:t,grasa:a,kcal:c}})};return Object(c.useEffect)((function(){l()}),[t]),Object(A.jsx)(T.Provider,{value:{informacion:n.informacion,total:n.total,consumidas:n.consumidas,dieta:n.dieta,comida:n.comida,comidaInfo:n.comidaInfo,restantes:n.restantes,obtenerKcal:i,agregarUsuario:function(e){var t=e.edad,a=e.estatura,c=e.peso,s=e.sexo,n=e.objetivo,i=e.actividad,l=e.comida,d={edad:t,estatura:a,peso:c,sexo:s,objetivo:n,actividad:i},j=o(d);r({type:f,payload:{total:j,informacion:d}}),l&&r({type:g,payload:JSON.parse(l)})},agregarAlimento:m,borrarAlimento:h,actualizarAlimento:x,caloriasUsadas:u},children:e.children})},G=function(){var e=Object(c.useContext)(E).guardarPagina,t=function(t){e(t)};return Object(A.jsx)("div",{className:"row",children:Object(A.jsx)("div",{className:"col s12",children:Object(A.jsxs)("ul",{className:"tabs tabs-fixed-width tab-demo z-depth-1 teal darken-1",children:[Object(A.jsx)("li",{className:"tab",children:Object(A.jsx)("a",{className:"grey-text text-lighten-5",href:"#",onClick:function(){return t(0)},children:"Perfil"})}),Object(A.jsx)("li",{className:"tab",children:Object(A.jsx)("a",{className:"grey-text text-lighten-5",href:"#",onClick:function(){return t(1)},children:"Comida 1"})}),Object(A.jsx)("li",{className:"tab",children:Object(A.jsx)("a",{className:"grey-text text-lighten-5",href:"#",onClick:function(){return t(2)},children:"Comida 2"})}),Object(A.jsx)("li",{className:"tab",children:Object(A.jsx)("a",{className:"grey-text text-lighten-5",href:"#",onClick:function(){return t(3)},children:"Comida 3"})}),Object(A.jsx)("li",{className:"tab",children:Object(A.jsx)("a",{className:"grey-text text-lighten-5",href:"#",onClick:function(){return t(4)},children:"Comida 4"})}),Object(A.jsx)("li",{className:"tab",children:Object(A.jsx)("a",{className:"grey-text text-lighten-5",href:"#",onClick:function(){return t(5)},children:"Comida 5"})})]})})})},L=a(13),M=function(){var e=Object(c.useState)({nombre:"",proteina:"",carbohidrato:"",grasa:"",gramo:"",ml:"false"}),t=Object(b.a)(e,2),a=t[0],s=t[1],n=a.nombre,r=a.proteina,i=a.carbohidrato,o=a.grasa,l=a.gramo,u=a.ml,h=function(e){s(Object(m.a)(Object(m.a)({},a),{},Object(L.a)({},e.target.name,e.target.value)))},x=function(){var e=Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=a).ml=JSON.parse(t.ml),e.prev=2,e.next=5,F.post("/api/alimentos",t);case 5:c=e.sent,console.log(c),s(Object(m.a)(Object(m.a)({},a),{},{nombre:"",proteina:"",carbohidrato:"",grasa:"",gramo:"",ml:"false"})),_.a.toast({html:"Se ha agregado el alimento ".concat(t.nombre)}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0),_.a.toast({html:"Hubo un error, vuelve a intentarlo"});case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}();return Object(A.jsxs)(c.Fragment,{children:[Object(A.jsx)("nav",{className:"container",children:Object(A.jsx)("div",{className:"nav-wrapper teal",children:Object(A.jsx)("p",{href:"#!",className:"center",children:"Crea un nuevo alimento"})})}),Object(A.jsx)("div",{className:"container",children:Object(A.jsx)("div",{className:"row",children:Object(A.jsxs)("form",{className:"col s12",onSubmit:function(e){e.preventDefault(),""!==n&&""!==r&&""!==i&&""!==o&&""!==l&&""!==u?x():_.a.toast({html:"Todos los campos son obligatorios"})},children:[Object(A.jsxs)("div",{className:"row",children:[Object(A.jsxs)("div",{className:"input-field col s12",children:[Object(A.jsx)("input",{name:"nombre",id:"icon_prefix",type:"text",className:"validate",onChange:h,value:n}),Object(A.jsx)("label",{htmlFor:"icon_prefix",children:"Nombre"})]}),Object(A.jsxs)("div",{className:"input-field col s12",children:[Object(A.jsx)("input",{name:"proteina",id:"proteina",type:"number",className:"validate",onChange:h,value:r}),Object(A.jsx)("label",{htmlFor:"proteina",children:"Proteina"})]}),Object(A.jsxs)("div",{className:"input-field col s12",children:[Object(A.jsx)("input",{name:"carbohidrato",id:"carbohidrato",type:"number",className:"validate",onChange:h,value:i}),Object(A.jsx)("label",{htmlFor:"carbohidrato",children:"Carbohidratos"})]}),Object(A.jsxs)("div",{className:"input-field col s12",children:[Object(A.jsx)("input",{name:"grasa",id:"grasa",type:"number",className:"validate",onChange:h,value:o}),Object(A.jsx)("label",{htmlFor:"grasa",children:"Grasa"})]}),Object(A.jsxs)("div",{className:"input-field col s12",children:[Object(A.jsx)("input",{name:"gramo",id:"gramo",type:"number",className:"validate",onChange:h,value:l}),Object(A.jsx)("label",{htmlFor:"gramo",children:"Porcion"})]}),Object(A.jsxs)("div",{className:"input-field col s12",children:[Object(A.jsxs)("select",{onChange:onchange,name:"ml",value:u,children:[Object(A.jsx)("option",{value:"false",children:"gr"}),Object(A.jsx)("option",{value:"true",children:"ml"})]}),Object(A.jsx)("label",{children:"Medida"})]})]}),Object(A.jsx)("div",{className:"row",children:Object(A.jsxs)("button",{className:"btn waves-effect waves-light col s12 m2 offset-m10",type:"submit",name:"action",children:["Agregar",Object(A.jsx)("i",{className:"material-icons right",children:"send"})]})})]})})})]})},H=function(){var e=Object(c.useContext)(T),t=e.obtenerKcal,a=e.informacion,s=e.total,n=e.consumidas,r=e.restantes,i=e.caloriasUsadas,o=e.dieta,l=Object(c.useContext)(u).cerrarSesion,d=Object(c.useContext)(E).pagina,j=Object(c.useState)({edad:"",estatura:"",peso:"",sexo:"",objetivo:"",actividad:""}),h=Object(b.a)(j,2),x=h[0],O=h[1],p=x.edad,f=x.estatura,v=x.peso,g=x.sexo,N=x.objetivo,y=x.actividad,w=Object(c.useState)({prote:0,carbos:0,grasa:0}),C=Object(b.a)(w,2),F=C[0],k=C[1],S=F.prote,I=F.carbos,P=F.grasa,R=function(e){O(Object(m.a)(Object(m.a)({},x),{},Object(L.a)({},e.target.name,e.target.value)))};return Object(c.useEffect)((function(){O(a),i(),setTimeout((function(){_.a.updateTextFields(),_.a.AutoInit(),function(){for(var e=0,t=0,a=0,c=1;c<=5;++c)o[c]&&o[c].forEach((function(c){e+=c.porcion*c.proteina,t+=c.porcion*c.carbohidrato,a+=c.porcion*c.grasa}));k(Object(m.a)(Object(m.a)({},F),{},{prote:e,carbos:t,grasa:a}))}()}),100)}),[a,d]),Object(A.jsxs)("div",{className:"row container",children:[Object(A.jsx)("form",{className:"col s12",onSubmit:function(e){e.preventDefault(),""!==p&&""!==f&&""!==v&&""!==g&&""!==N&&""!==y?t(x):_.a.toast({html:"Todos los campos son obligatorios"})},children:Object(A.jsxs)("div",{className:"row",children:[Object(A.jsxs)("div",{className:"input-field col s12 m4",children:[Object(A.jsx)("i",{className:"material-icons prefix",children:"elderly"}),Object(A.jsx)("input",{onChange:R,name:"edad",id:"elderly",type:"number",className:"validate",value:p}),Object(A.jsx)("label",{htmlFor:"elderly",children:"Edad"})]}),Object(A.jsxs)("div",{className:"input-field col s12 m4",children:[Object(A.jsx)("i",{className:"material-icons prefix",children:"height"}),Object(A.jsx)("input",{onChange:R,name:"estatura",id:"height",type:"number",className:"validate",value:f}),Object(A.jsx)("label",{htmlFor:"height",children:"Estatura"})]}),Object(A.jsxs)("div",{className:"input-field col s12 m4",children:[Object(A.jsx)("i",{className:"material-icons prefix",children:"monitor_weight"}),Object(A.jsx)("input",{onChange:R,name:"peso",id:"monitor_weight",type:"number",className:"validate",value:v}),Object(A.jsx)("label",{htmlFor:"monitor_weight",children:"Peso"})]}),Object(A.jsxs)("div",{className:"input-field col s12 m4",children:[Object(A.jsx)("i",{className:"material-icons prefix",children:"people"}),Object(A.jsxs)("select",{onChange:R,name:"sexo",value:""!==g?g:"",children:[Object(A.jsx)("option",{value:"",disabled:!0,children:"Seleccionar"}),Object(A.jsx)("option",{value:"h",children:"Hombre"}),Object(A.jsx)("option",{value:"m",children:"Mujer"})]}),Object(A.jsx)("label",{children:"Sexo"})]}),Object(A.jsxs)("div",{className:"input-field col s12 m4",children:[Object(A.jsx)("i",{className:"material-icons prefix",children:"monitor_weight"}),Object(A.jsxs)("select",{onChange:R,name:"objetivo",value:""!==N?N:"",children:[Object(A.jsx)("option",{value:"",disabled:!0,children:"Seleccionar"}),Object(A.jsx)("option",{value:"-1000",children:"Perder 1Kg / Semana"}),Object(A.jsx)("option",{value:"-500",children:"Perder 0.5Kg / Semana"}),Object(A.jsx)("option",{value:"0",children:"Mantener Peso"}),Object(A.jsx)("option",{value:"+250",children:"Aumentar Peso Lentamente"}),Object(A.jsx)("option",{value:"+500",children:"Aumentar Peso"})]}),Object(A.jsx)("label",{children:"Objetivo"})]}),Object(A.jsxs)("div",{className:"input-field col s12 m4",children:[Object(A.jsx)("i",{className:"material-icons prefix",children:"fitness_center"}),Object(A.jsxs)("select",{onChange:R,name:"actividad",value:""!=y?"".concat(y):"",children:[Object(A.jsx)("option",{value:"",disabled:!0,children:"Seleccionar"}),Object(A.jsx)("option",{value:"1.2",children:"Poco/Nulo"}),Object(A.jsx)("option",{value:"1.375",children:"Ligero"}),Object(A.jsx)("option",{value:"1.55",children:"Moderado"}),Object(A.jsx)("option",{value:"1.72",children:"Deportista"}),Object(A.jsx)("option",{value:"1.9",children:"Atleta"})]}),Object(A.jsx)("label",{children:"Actividad"})]}),Object(A.jsxs)("div",{children:[Object(A.jsxs)("button",{className:"btn waves-effect waves-light red col hide-on-small-only m3",type:"button",name:"action",onClick:function(){return l()},children:["Cerrar Sesion",Object(A.jsx)("i",{className:"material-icons right",children:"logout"})]}),Object(A.jsxs)("button",{className:"btn waves-effect waves-light col hide-on-small-only offset-m6 m3 ",type:"submit",name:"action",children:["Guardar",Object(A.jsx)("i",{className:"material-icons right",children:"send"})]}),Object(A.jsxs)("button",{className:"btn waves-effect waves-light col s12 hide-on-med-and-up ",type:"submit",name:"action",children:["Guardar",Object(A.jsx)("i",{className:"material-icons right",children:"send"})]}),Object(A.jsxs)("button",{className:"btn waves-effect waves-light red col s12 hide-on-med-and-up",type:"button",name:"action",onClick:function(){return l()},children:["Cerrar Sesion",Object(A.jsx)("i",{className:"material-icons right",children:"logout"})]})]})]})}),Object(A.jsxs)("table",{children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{children:"Total"}),Object(A.jsx)("th",{children:"Usadas"}),Object(A.jsx)("th",{children:"Restantes"})]})}),Object(A.jsx)("tbody",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:s.toFixed(2)}),Object(A.jsx)("td",{children:n.toFixed(2)}),Object(A.jsx)("td",{children:r.toFixed(2)})]})})]}),Object(A.jsx)("br",{}),Object(A.jsxs)("table",{children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{children:"Proteina"}),Object(A.jsx)("th",{children:"Carbohidratos"}),Object(A.jsx)("th",{children:"Grasas"})]})}),Object(A.jsxs)("tbody",{children:[Object(A.jsxs)("tr",{children:[Object(A.jsxs)("td",{children:[S.toFixed(2)," gr"]}),Object(A.jsxs)("td",{children:[I.toFixed(2)," gr"]}),Object(A.jsxs)("td",{children:[P.toFixed(2)," gr"]})]}),Object(A.jsxs)("tr",{children:[Object(A.jsxs)("td",{children:[(4*S/(4*(S+I)+9*P)*100).toFixed(2)||0,"%"]}),Object(A.jsxs)("td",{children:[(4*I/(4*(S+I)+9*P)*100).toFixed(2)||0,"%"]}),Object(A.jsxs)("td",{children:[(9*P/(4*(S+I)+9*P)*100).toFixed(2)||0,"%"]})]})]})]}),Object(A.jsx)("br",{}),Object(A.jsx)(M,{})]})},B=function(e){var t=e.alimentos,a=Object(c.useContext)(T).agregarAlimento;return Object(c.useEffect)((function(){_.a.AutoInit()}),[]),0===t.length?null:Object(A.jsx)("div",{className:"container",children:Object(A.jsx)("ul",{className:"collapsible",children:t.map((function(e){return Object(A.jsxs)("li",{name:"alimento",children:[Object(A.jsx)("div",{className:"collapsible-header row",style:{margin:"0.5rem",padding:"0 0"},children:Object(A.jsxs)("div",{className:"col s12 row",children:[Object(A.jsxs)("div",{className:"col s6 m10",children:[Object(A.jsx)("p",{className:"col s4 m4",children:e.nombre}),Object(A.jsxs)("p",{className:"col hide-on-small-only m4",children:[e.gramo," ",e.ml?Object(A.jsx)("span",{children:"ml"}):Object(A.jsx)("span",{children:"gr"})]}),Object(A.jsxs)("p",{className:"col s12 m4",children:[(4*e.proteina+4*e.carbohidrato+9*e.grasa).toFixed(2)," kcal"]})]}),Object(A.jsx)("div",{className:"col s6 m2 right-align",children:Object(A.jsx)("button",{className:"btn waves-effect waves-light",type:"button",onClick:function(){return a(e)},children:Object(A.jsx)("i",{className:"material-icons right",children:"add_circle"})})})]})}),Object(A.jsx)("div",{className:"collapsible-body row center-align",children:Object(A.jsxs)("span",{children:[Object(A.jsxs)("p",{className:"col s12 hide-on-med-and-up",children:["Porcion: ",e.gramo," ",e.ml?Object(A.jsx)("span",{children:"ml"}):Object(A.jsx)("span",{children:"gr"})]}),Object(A.jsxs)("p",{className:"col s12 m4",children:["Proteina: ",e.proteina," gr "]}),Object(A.jsxs)("p",{className:"col s12 m4",children:["Carbohidratos: ",e.carbohidrato," gr "]}),Object(A.jsxs)("p",{className:"col s12 m4",children:["Grasas: ",e.grasa," gr "]})]})})]},e._id)}))})})},q=function(){var e=Object(c.useState)({busqueda:""}),t=Object(b.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!1),r=Object(b.a)(n,2),i=r[0],o=r[1],l=Object(c.useState)([]),u=Object(b.a)(l,2),h=u[0],x=u[1],O=a.busqueda,p=function(){var e=Object(j.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==O.trim()){e.next=4;break}return _.a.toast({html:"Ingresa el nombre de un alimento"}),e.abrupt("return");case 4:return e.prev=4,e.next=7,F.post("api/search",{busqueda:O});case 7:c=e.sent,x(c.data.resultados[0]),s(Object(m.a)(Object(m.a)({},a),{},{termino:""})),o(!0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),_.a.toast("Hubo un error, vuelve a intentarlo");case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(A.jsxs)(c.Fragment,{children:[Object(A.jsx)("div",{className:"row container",children:Object(A.jsx)("form",{className:"col s12",onSubmit:p,children:Object(A.jsxs)("div",{children:[Object(A.jsxs)("div",{className:"input-field col s12 m10",children:[Object(A.jsx)("i",{className:"material-icons prefix",children:"mode_edit"}),Object(A.jsx)("input",{type:"text",className:"materialize-textarea",name:"busqueda",id:"busqueda",onChange:function(e){s(Object(m.a)(Object(m.a)({},a),{},Object(L.a)({},e.target.name,e.target.value)))},value:O}),Object(A.jsx)("label",{htmlFor:"busqueda",children:"Busca tu alimento"})]}),Object(A.jsxs)("div",{className:"col offset-s8 s4 m2 container",children:[Object(A.jsx)("button",{className:"btn waves-effect waves-light col s6 m6",type:"submit",children:Object(A.jsx)("i",{className:"material-icons right",children:"send"})}),i?Object(A.jsx)("button",{className:"btn waves-effect waves-light col s6 m6",type:"button",onClick:function(){return o(!1)},children:Object(A.jsx)("i",{className:"material-icons right",children:"close"})}):null]})]})})}),i?Object(A.jsx)(B,{alimentos:h}):null]})},K=function(){var e=Object(c.useContext)(T),t=e.comida,a=e.borrarAlimento,s=e.actualizarAlimento,n=Object(c.useContext)(E).pagina,r=function(e){s(e.target.value,e.target.name)};return Object(c.useEffect)((function(){setTimeout((function(){_.a.AutoInit(),_.a.updateTextFields()}),100)}),[t,n]),t?t.map((function(e){return Object(A.jsxs)("li",{name:"alimento",children:[Object(A.jsx)("div",{className:"collapsible-header row",style:{margin:".5rem",padding:"0 0"},children:Object(A.jsxs)("div",{className:"col s12 row",style:{marginBottom:"0.5rem"},children:[Object(A.jsxs)("div",{className:"col s12 m10",children:[Object(A.jsxs)("p",{className:"col s7 m4",children:[e.nombre," / ",e.gramo*e.porcion,e.ml?Object(A.jsx)("span",{children:"ml"}):Object(A.jsx)("span",{children:"gr"})]}),Object(A.jsxs)("p",{className:"col hide-on-small-only m4",children:[(e.porcion*(4*e.proteina+4*e.carbohidrato+9*e.grasa)).toFixed(2)," kcal"]}),Object(A.jsxs)("div",{className:"input-field col s5 m4",style:{marginBottom:"0",paddingBottom:"0"},children:[Object(A.jsx)("i",{className:"material-icons prefix",children:"confirmation_number"}),Object(A.jsx)("input",{name:e._id,id:"icon_prefix",type:"number",className:"validate",value:e.porcion,onBlur:r}),Object(A.jsxs)("label",{htmlFor:"icon_prefix",children:["Cantidad / ","".concat(e.gramo)," ",e.ml?Object(A.jsx)("span",{children:"ml"}):Object(A.jsx)("span",{children:"gr"})]})]})]}),Object(A.jsx)("div",{className:"col s12 m2 right-align",children:Object(A.jsx)("button",{className:"btn waves-effect waves-light",type:"button",onClick:function(){return a(e._id)},children:Object(A.jsx)("i",{className:"material-icons right",children:"delete_outline"})})})]})}),Object(A.jsx)("div",{className:"collapsible-body row center-align",children:Object(A.jsxs)("span",{children:[Object(A.jsxs)("p",{className:"col s12 hide-on-med-and-up",children:[(e.porcion*(4*e.proteina+4*e.carbohidrato+9*e.grasa)).toFixed(2)," kcal"]}),Object(A.jsxs)("p",{className:"col s12 m4",children:["Proteina: ",(e.porcion*e.proteina).toFixed(2)," gr "]}),Object(A.jsxs)("p",{className:"col s12 m4",children:["Carbohidratos: ",(e.porcion*e.carbohidrato).toFixed(2)," gr "]}),Object(A.jsxs)("p",{className:"col s12 m4",children:["Grasas: ",(e.porcion*e.grasa).toFixed(2)," gr "]})]})})]},"".concat(n).concat(e._id))})):null},z=function(){var e=Object(c.useContext)(E).pagina;return Object(A.jsx)(c.Fragment,{children:Object(A.jsx)("div",{className:"container",children:Object(A.jsxs)("ul",{className:"collapsible",children:[Object(A.jsxs)("div",{className:"collapsible-header",children:[Object(A.jsx)("i",{className:"material-icons",children:"restaurant"}),"Comida",e]}),Object(A.jsx)(K,{})]})})})},J=function(){var e=Object(c.useContext)(T),t=e.restantes,a=e.comida,s=e.total,n=Object(c.useContext)(E).pagina,r=Object(c.useState)({prote:0,grasa:0,carbos:0}),i=Object(b.a)(r,2),o=i[0],l=i[1];return Object(c.useEffect)((function(){if(0!==n){var e=0,t=0,c=0;a.forEach((function(a){e+=a.porcion*a.proteina,t+=a.porcion*a.carbohidrato,c+=a.porcion*a.grasa})),l(Object(m.a)(Object(m.a)({},o),{},{prote:e,grasa:c,carbos:t}))}}),[a,n]),Object(A.jsx)("div",{className:"container",children:Object(A.jsxs)("table",{className:"",children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{children:"Proteina"}),Object(A.jsx)("th",{children:"Carbohidratos"}),Object(A.jsx)("th",{children:"Grasas"}),Object(A.jsx)("th",{children:"Kcal"}),Object(A.jsx)("th",{children:"Kcal Restantes"})]})}),Object(A.jsxs)("tbody",{children:[Object(A.jsxs)("tr",{children:[Object(A.jsxs)("td",{children:[o.prote.toFixed(2)||0," gr"]}),Object(A.jsxs)("td",{children:[o.carbos.toFixed(2)||0," gr"]}),Object(A.jsxs)("td",{children:[o.grasa.toFixed(2)||0," gr"]}),Object(A.jsx)("td",{children:(4*(o.prote+o.carbos)+9*o.grasa).toFixed(2)||0}),Object(A.jsx)("td",{children:t.toFixed(2)})]}),Object(A.jsxs)("tr",{children:[Object(A.jsxs)("td",{children:[(4*o.prote/(4*(o.prote+o.carbos)+9*o.grasa)*100).toFixed(2)||0,"%"]}),Object(A.jsxs)("td",{children:[(4*o.carbos/(4*(o.prote+o.carbos)+9*o.grasa)*100).toFixed(2)||0,"%"]}),Object(A.jsxs)("td",{children:[(9*o.grasa/(4*(o.prote+o.carbos)+9*o.grasa)*100).toFixed(2)||0,"%"]}),Object(A.jsx)("td",{children:"100%"}),Object(A.jsxs)("td",{children:[(t/s*100).toFixed(2),"%"]})]})]})]})})},X=function(){return Object(A.jsxs)(c.Fragment,{children:[Object(A.jsx)(q,{}),Object(A.jsx)(z,{}),Object(A.jsx)(J,{})]})},Q=function(){var e=Object(c.useContext)(E).pagina;return Object(c.useEffect)((function(){_.a.AutoInit(),_.a.updateTextFields()}),[e]),Object(A.jsxs)(c.Fragment,{children:[Object(A.jsx)(G,{}),0===e?Object(A.jsx)(H,{}):Object(A.jsx)(X,{})]})},V=function(e){var t=Object(c.useContext)(u),a=t.iniciarSesion,s=t.autenticado;Object(c.useEffect)((function(){s&&e.history.push("/")}),[s,e.history]);var n=Object(c.useState)({correo:"",password:""}),r=Object(b.a)(n,2),o=r[0],l=r[1],d=o.correo,j=o.password,h=function(e){l(Object(m.a)(Object(m.a)({},o),{},Object(L.a)({},e.target.name,e.target.value)))};return Object(A.jsxs)(c.Fragment,{children:[Object(A.jsx)("nav",{children:Object(A.jsxs)("div",{className:"nav-wrapper teal",children:[Object(A.jsx)("a",{href:"#!",className:"brand-logo",children:"DietasApp"}),Object(A.jsx)("ul",{className:"right",children:Object(A.jsx)("li",{children:Object(A.jsx)(i.b,{to:"/singup",className:"col s12 m10",children:"Crear Cuenta"})})})]})}),Object(A.jsx)("div",{className:"container",children:Object(A.jsx)("div",{className:"row",children:Object(A.jsxs)("form",{className:"col s12 m8 offset-m2",onSubmit:function(e){e.preventDefault(),""!==d.trim()&&""!==j.trim()?a(o):_.a.toast({html:"Todos los campos son obligatorios"})},children:[Object(A.jsxs)("div",{className:"row",children:[Object(A.jsxs)("div",{className:"input-field col s12",children:[Object(A.jsx)("i",{className:"material-icons prefix",children:"email"}),Object(A.jsx)("input",{name:"correo",id:"icon_prefix",type:"email",className:"validate",onChange:h}),Object(A.jsx)("label",{htmlFor:"icon_prefix",children:"Correo"})]}),Object(A.jsxs)("div",{className:"input-field col s12",children:[Object(A.jsx)("i",{className:"material-icons prefix",children:"password"}),Object(A.jsx)("input",{name:"password",id:"icon_telephone",type:"password",className:"validate",onChange:h}),Object(A.jsx)("label",{htmlFor:"icon_telephone",children:"Contrase\xf1a"})]})]}),Object(A.jsx)("div",{className:"row",children:Object(A.jsxs)("button",{className:"btn waves-effect waves-light col s12 m2 offset-m10",type:"submit",name:"action",children:["Conectar",Object(A.jsx)("i",{className:"material-icons right",children:"send"})]})})]})})})]})},W=function(e){var t=Object(c.useContext)(u),a=t.registrarUsuario,s=t.autenticado;Object(c.useEffect)((function(){s&&e.history.push("/")}),[s,e.history]);var n=Object(c.useState)({nombre:"",correo:"",password:"",confirmar:""}),r=Object(b.a)(n,2),o=r[0],l=r[1],d=o.nombre,j=o.confirmar,h=o.correo,x=o.password,O=function(e){l(Object(m.a)(Object(m.a)({},o),{},Object(L.a)({},e.target.name,e.target.value)))};return Object(A.jsxs)(c.Fragment,{children:[Object(A.jsx)("nav",{children:Object(A.jsxs)("div",{className:"nav-wrapper teal",children:[Object(A.jsx)("a",{href:"#!",className:"brand-logo",children:"DietasApp"}),Object(A.jsx)("ul",{className:"right",children:Object(A.jsx)("li",{children:Object(A.jsx)(i.b,{to:"/login",className:"col s12 m10",children:"Iniciar Sesion"})})})]})}),Object(A.jsx)("div",{className:"container",children:Object(A.jsx)("div",{className:"row",children:Object(A.jsxs)("form",{className:"col s12 m8 offset-m2",onSubmit:function(e){e.preventDefault(),""!==d.trim()&&""!==h.trim()&&""!==x.trim()&&""!==j.trim()?x.length<6?_.a.toast({html:"La contrase\xf1a debe tener al menos 6 caracteres"}):x===j?a({nombre:d,correo:h,password:x}):_.a.toast({html:"Las contrase\xf1as deben coincidir"}):_.a.toast({html:"Todos los campos son obligatorios"})},children:[Object(A.jsxs)("div",{className:"row",children:[Object(A.jsxs)("div",{className:"input-field col s12",children:[Object(A.jsx)("i",{className:"material-icons prefix",children:"person"}),Object(A.jsx)("input",{name:"nombre",id:"nombre",type:"text",className:"validate",onChange:O}),Object(A.jsx)("label",{htmlFor:"nombre",children:"Nombre"})]}),Object(A.jsxs)("div",{className:"input-field col s12",children:[Object(A.jsx)("i",{className:"material-icons prefix",children:"email"}),Object(A.jsx)("input",{name:"correo",id:"correo",type:"email",className:"validate",onChange:O}),Object(A.jsx)("label",{htmlFor:"correo",children:"Correo"})]}),Object(A.jsxs)("div",{className:"input-field col s12",children:[Object(A.jsx)("i",{className:"material-icons prefix",children:"password"}),Object(A.jsx)("input",{name:"password",id:"password",type:"password",className:"validate",onChange:O}),Object(A.jsx)("label",{htmlFor:"password",children:"Contrase\xf1a"})]}),Object(A.jsxs)("div",{className:"input-field col s12",children:[Object(A.jsx)("i",{className:"material-icons prefix",children:"password"}),Object(A.jsx)("input",{name:"confirmar",id:"confirmar",type:"password",className:"validate",onChange:O}),Object(A.jsx)("label",{htmlFor:"confirmar",children:"Confirmar Contrase\xf1a"})]})]}),Object(A.jsx)("div",{className:"row",children:Object(A.jsxs)("button",{className:"btn waves-effect waves-light col s12 m2 offset-m10",type:"submit",name:"action",children:["Registrar",Object(A.jsx)("i",{className:"material-icons right",children:"send"})]})})]})})})]})},Y=a(38),Z=["component"],$=function(e){var t=e.component,a=Object(Y.a)(e,Z),s=Object(c.useContext)(u),n=s.autenticado,r=s.cargando,i=s.obtenerUsuario,l=Object(c.useContext)(T).agregarUsuario;return Object(c.useEffect)(Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:(t=e.sent)&&l(t);case 4:case"end":return e.stop()}}),e)}))),[n]),Object(A.jsx)(o.b,Object(m.a)(Object(m.a)({},a),{},{render:function(e){return n||r?Object(A.jsx)(t,Object(m.a)({},e)):Object(A.jsx)(o.a,{to:"/login"})}}))};var ee=function(){return Object(A.jsx)(I,{children:Object(A.jsx)(P,{children:Object(A.jsx)(D,{children:Object(A.jsx)(i.a,{children:Object(A.jsxs)(o.d,{children:[Object(A.jsx)($,{exact:!0,path:"/",component:Q}),Object(A.jsx)(o.b,{exact:!0,path:"/login",component:V}),Object(A.jsx)(o.b,{exact:!0,path:"/singup",component:W})]})})})})})},te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(A.jsx)(s.a.StrictMode,{children:Object(A.jsx)(ee,{})}),document.getElementById("root")),te()}},[[68,1,2]]]);
//# sourceMappingURL=main.1cac68b3.chunk.js.map
(this["webpackJsonpuser-react-app"]=this["webpackJsonpuser-react-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),s=n.n(c),i=(n(15),n(16),n(2)),l=n(3),o=n(5),d=n(4),j=n(8),b=n(10),u=n(0),h=r.a.createContext(),m=h.Consumer,f=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var a;Object(i.a)(this,n),(a=t.call(this,e)).state={users:[],dispatch:function(e){a.setState((function(t){return function(e,t){switch(e.type){case"DELETE":return{users:t.users.filter((function(t){return t.id!==e.payload.id}))};case"ADD":var n=t.users,a=Object(b.a)({id:Math.max.apply(Math,Object(j.a)(n.map((function(e){return e.id}))))+1},e.payload);return{users:[].concat(Object(j.a)(n),[a])};default:return{users:t.users}}}(e,t)}))}};for(var r=[],c=["Yusuf","Umut","Bulak","Mehmet","U\xe7ar","Sinem","G\xfcnd\xfcz","Ye\u015fim","Bulut","Ahmet","Hamdi","Da\u011f","Nimet"],s=["Engineer","Doctor","Artist","Teacher","Lawyer","Writer"],l=1;l<=12;l++){var o=Math.floor(Math.random()*c.length),d=Math.floor(Math.random()*c.length),u=Math.floor(Math.random()*s.length);r.push({id:l,name:c[o]+" "+c[d],age:Math.floor(90*Math.random())+1,job:s[u]})}return a.state.users=r,a}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)(h.Provider,{value:this.state,children:this.props.children})}}]),n}(a.Component),p=m,O=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.removeUser=function(t,n){t({type:"DELETE",payload:{id:e.props.id}})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.id,a=t.name,r=t.age,c=t.job;return Object(u.jsx)(p,{children:function(t){var s=t.dispatch;return Object(u.jsx)("div",{className:"col-3",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsxs)("div",{className:"card-header d-flex justify-content-between",children:[Object(u.jsxs)("p",{className:"card-title",children:[Object(u.jsx)("b",{children:"ID: "}),n]}),Object(u.jsx)("button",{className:"btn btn-danger btn-sm",onClick:e.removeUser.bind(e,s),children:"Kald\u0131r"})]}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Full Name: "}),a]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Age: "})," ",r]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Job: "})," ",c]})]})]})})}})}}]),n}(a.Component);O.defaultProps={name:"Kullan\u0131c\u0131 Ad\u0131",job:"Unemployed"};var x=O,v=n(6),g=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",age:"",job:"",formIsVisible:!0},e.toggleFormVisibility=function(t){e.setState((function(e){return{formIsVisible:!e.formIsVisible}}))},e.changeState=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.addUser=function(t,n){var a=e.state;t({type:"ADD",payload:{name:a.name,age:parseInt(a.age),job:a.job}})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.formIsVisible;return Object(u.jsx)("div",{className:"d-flex justify-content-center m-5",children:Object(u.jsxs)("div",{className:"card col col-md-4",children:[Object(u.jsxs)("div",{className:"card-header d-flex justify-content-between",children:[Object(u.jsx)("h4",{className:"card-title",children:"User"}),Object(u.jsx)("button",{className:"btn btn-outline-secondary btn-sm",onClick:this.toggleFormVisibility,children:t?"v":"^"})]}),t&&Object(u.jsx)("div",{className:"card-body",children:Object(u.jsxs)("form",{children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"name-input",className:"form-label",children:"Full Name"}),Object(u.jsx)("input",{type:"text",className:"form-control",id:"name-input",name:"name",onChange:this.changeState})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"age-input",className:"form-label",children:"Age"}),Object(u.jsx)("input",{type:"number",className:"form-control",id:"age-input",name:"age",onChange:this.changeState})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"job-input",className:"form-label",children:"Job"}),Object(u.jsx)("input",{type:"text",className:"form-control",id:"job-input",name:"job",onChange:this.changeState})]}),Object(u.jsx)(p,{children:function(t){var n=t.dispatch;return Object(u.jsx)("button",{type:"button",className:"btn btn-primary",onClick:e.addUser.bind(e,n),children:"Add"})}})]})})]})})}}]),n}(a.Component);var y=function(){return Object(u.jsx)(f,{children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("header",{children:[Object(u.jsx)(g,{}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(p,{children:function(e){return e.users.map((function(e){return Object(u.jsx)(x,{id:e.id,name:e.name,age:e.age,job:e.job},e.id)}))}})})]})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),N()}},[[18,1,2]]]);
//# sourceMappingURL=main.1622bd6b.chunk.js.map
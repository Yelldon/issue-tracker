(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{dbef:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"create"},[a("h2",[e._v("Create New Issue")]),a("form",{staticClass:"mt-8",on:{submit:function(t){return t.preventDefault(),e.runSubmit(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.username,expression:"form.username"}],staticClass:"border mb-6",attrs:{type:"text",placeholder:"Username"},domProps:{value:e.form.username},on:{input:function(t){t.target.composing||e.$set(e.form,"username",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"border mb-6",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.firstname,expression:"form.firstname"}],staticClass:"border mb-6",attrs:{type:"text",placeholder:"First Name"},domProps:{value:e.form.firstname},on:{input:function(t){t.target.composing||e.$set(e.form,"firstname",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.lastname,expression:"form.lastname"}],staticClass:"border mb-6",attrs:{type:"text",placeholder:"Last Name"},domProps:{value:e.form.lastname},on:{input:function(t){t.target.composing||e.$set(e.form,"lastname",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"border mb-6",attrs:{type:"email",placeholder:"Email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),a("button",{staticClass:"b-green"},[e._v("\n      Create New User\n    ")]),a("a",{staticClass:"pl-3",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.cancel(t)}}},[e._v("\n    Cancel\n  ")])])])},s=[],n={name:"CreateIssue",data:function(){return{issues:[],form:{username:null,password:null,firstname:null,lastname:null,email:null}}},mounted:function(){},methods:{runSubmit:function(){var e=this;axios.post("/users",this.$data.form).then(function(t){console.log(t),e.form.username=null,e.form.password=null,e.form.firstname=null,e.form.lastname=null,e.form.email=null}).catch(function(e){console.log(e)})},cancel:function(){}}},o=n,m=a("2877"),l=Object(m["a"])(o,r,s,!1,null,"fe084f4e",null);t["default"]=l.exports}}]);
//# sourceMappingURL=user.1942e064.js.map
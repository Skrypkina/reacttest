(this.webpackJsonpreacttest=this.webpackJsonpreacttest||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"users":[{"id":"1","name":"Levon","surname":"Sargis","desc":"Phasellus magna enim, congue id dolor sed, molestie fermentum justo. Proin arcu sem, auctor et neque at, pulvinar aliquet magna."},{"id":"2","name":"Poghos","surname":"Haig","desc":"Cras nec ornare nulla, at volutpat leo. Suspendisse tristique nec nisi vitae fringilla. Vivamus nunc ex, condimentum ac accumsan eu."},{"id":"3","name":"Keghart","surname":"Petros","desc":"Maecenas scelerisque massa id fermentum gravida. Suspendisse tempor placerat erat nec consectetur. Sed mollis nisi ut lectus viverra, quis dictum."},{"id":"4","name":"Vardan","surname":"Hakob","desc":"Nullam ut risus faucibus, volutpat elit condimentum, iaculis erat. Ut placerat varius ligula. Aliquam erat volutpat. Vestibulum eleifend congue sagittis."},{"id":"5","name":"Ohannes","surname":"Sahak","desc":"Aliquam at nisi finibus, volutpat lorem nec, sodales nunc. Morbi sodales ligula nec enim hendrerit consectetur. Sed tempus pulvinar sem."},{"id":"6","name":"Khajag","surname":"Stepan","desc":"Nunc mattis erat odio, et tempus felis pulvinar ac. Aliquam a odio et ipsum mattis consectetur eu ut massa. Nulla."},{"id":"7","name":"Jirair","surname":"Ara","desc":"Vivamus rhoncus interdum metus, sit amet viverra dolor bibendum vel. Vestibulum sit amet suscipit nibh. Fusce ornare tellus non urna."},{"id":"8","name":"Sevan","surname":"Hagop","desc":"Quisque nec aliquam enim. Nam nisi diam, porttitor at tortor nec, gravida dictum erat. In hac habitasse platea dictumst. Vestibulum."},{"id":"9","name":"Daniel","surname":"Avetis","desc":"Phasellus nec sem condimentum, varius lectus a, efficitur leo. Suspendisse potenti. Curabitur vel pharetra metus, nec scelerisque sapien. Sed non."},{"id":"10","name":"Levon","surname":"Sargis","desc":"Phasellus magna enim, congue id dolor sed, molestie fermentum justo. Proin arcu sem, auctor et neque at, pulvinar aliquet magna."},{"id":"11","name":"Poghos","surname":"Haig","desc":"Cras nec ornare nulla, at volutpat leo. Suspendisse tristique nec nisi vitae fringilla. Vivamus nunc ex, condimentum ac accumsan eu."},{"id":"12","name":"Keghart","surname":"Petros","desc":"Maecenas scelerisque massa id fermentum gravida. Suspendisse tempor placerat erat nec consectetur. Sed mollis nisi ut lectus viverra, quis dictum."},{"id":"13","name":"Vardan","surname":"Hakob","desc":"Nullam ut risus faucibus, volutpat elit condimentum, iaculis erat. Ut placerat varius ligula. Aliquam erat volutpat. Vestibulum eleifend congue sagittis."},{"id":"14","name":"Hagop","surname":"Rouben","desc":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas faucibus eleifend imperdiet. Sed quis tellus."},{"id":"15","name":"Ohannes","surname":"Sahak","desc":"Aliquam at nisi finibus, volutpat lorem nec, sodales nunc. Morbi sodales ligula nec enim hendrerit consectetur. Sed tempus pulvinar sem."},{"id":"16","name":"Khajag","surname":"Stepan","desc":"Nunc mattis erat odio, et tempus felis pulvinar ac. Aliquam a odio et ipsum mattis consectetur eu ut massa. Nulla."},{"id":"17","name":"Jirair","surname":"Ara","desc":"Vivamus rhoncus interdum metus, sit amet viverra dolor bibendum vel. Vestibulum sit amet suscipit nibh. Fusce ornare tellus non urna."},{"id":"18","name":"Sevan","surname":"Hagop","desc":"Quisque nec aliquam enim. Nam nisi diam, porttitor at tortor nec, gravida dictum erat. In hac habitasse platea dictumst. Vestibulum."},{"id":"19","name":"Daniel","surname":"Avetis","desc":"Phasellus nec sem condimentum, varius lectus a, efficitur leo. Suspendisse potenti. Curabitur vel pharetra metus, nec scelerisque sapien. Sed non."},{"id":"20","name":"Hagop","surname":"Rouben","desc":"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas faucibus eleifend imperdiet. Sed quis tellus."}]}')},18:function(e,a,t){e.exports=t(28)},28:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(4),u=t.n(i),r=t(8),c=t(5),l=t(6),m=t(9),o=t(7),d=t(10),p="FETCH_USERS",v=t(14);console.log(v);var b=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(s)))).state={},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchUsers(v)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,"Hellow world!!!"))}}]),a}(n.Component),h=Object(r.b)(null,(function(e){return{fetchUsers:function(a){return e(function(e){return{type:p,payload:e}}(a))}}}))(b),f=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(s)))).state={},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(h,null))}}]),a}(n.Component),g=t(3),q=t(17),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case p:return n;default:return e}},j=Object(g.combineReducers)({users:S}),O=Object(g.createStore)(j,Object(q.devToolsEnhancer)());u.a.render(s.a.createElement(r.a,{store:O},s.a.createElement(f,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.64632444.chunk.js.map
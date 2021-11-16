(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(11),r=a.n(s),o=(a(16),a(6)),l=(a(17),a(8)),i=a(1);function d(e){return Object(i.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:[Object(i.jsx)(l.b,{className:"navbar-brand",to:"/ReactApp",children:e.title}),Object(i.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{class:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsx)("ul",{className:"navbar-nav",children:Object(i.jsx)("li",{className:"nav-item active",children:Object(i.jsxs)(l.b,{className:"nav-link",to:"/ReactApp",children:["Home ",Object(i.jsx)("span",{className:"sr-only",children:"(current)"})]})})}),Object(i.jsxs)("div",{className:"custom-control custom-switch text-".concat("light"===e.mode?"dark":"light"," mx-1"),children:[Object(i.jsx)("input",{type:"checkbox",className:"custom-control-input",onClick:e.toggleMode,id:"customSwitches"}),Object(i.jsx)("label",{className:"custom-control-label",htmlFor:"customSwitches",children:"light"===e.mode?"Enable Dark Mode":"Enable Light Mode"})]})]})]})}var b=a(5),j=a(7);function p(e){var t,a,n,s,r,l,d=Object(c.useState)(""),p=Object(o.a)(d,2),h=p[0],m=p[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container my-4",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(i.jsx)("h1",{children:"Text Analyzer"}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"exampleFormControlTextarea1",children:e.heading}),Object(i.jsx)("textarea",{className:"form-control",value:h,onChange:function(e){m(e.target.value)},style:{color:"dark"===e.mode?"white":"#042743",backgroundColor:"dark"===e.mode?"grey":"white"},id:"exampleFormControlTextarea1",rows:"8"})]}),Object(i.jsx)("button",{className:"btn btn-primary mx-1","data-tip":!0,"data-for":"upper",onClick:function(){e.showAlert("Converted to UpperCase","success");var t=h.toUpperCase();m(t)},children:"Upper"}),Object(i.jsx)(j.a,(t={id:"upper",place:"top",effect:"solid"},Object(b.a)(t,"id","upper"),Object(b.a)(t,"children","Convert into uppercase"),t)),Object(i.jsx)("button",{className:"btn btn-success mx-1","data-tip":!0,"data-for":"lower",onClick:function(){e.showAlert("Converted to LowerCase","success");var t=h.toLowerCase();m(t)},children:"Lower"}),Object(i.jsx)(j.a,(a={id:"upper",place:"top",effect:"solid"},Object(b.a)(a,"id","lower"),Object(b.a)(a,"children"," Convert into lowercase"),a)),Object(i.jsx)("button",{className:"btn btn-warning mx-1 my-2","data-tip":!0,"data-for":"title",onClick:function(){e.showAlert("Text has been Capitalize","success");for(var t=h.split(" "),a="",c=0;c<t.length;c++){var n=t[c].toLowerCase();a+=t[c].charAt(0).toUpperCase()+n.slice(1)+" "}m(a)},children:"Capitalize"}),Object(i.jsx)(j.a,(n={id:"upper",place:"top",effect:"solid"},Object(b.a)(n,"id","title"),Object(b.a)(n,"children","Convert into titlecase"),n)),Object(i.jsx)("button",{className:"btn btn-danger mx-1 my-2","data-tip":!0,"data-for":"clear",onClick:function(){e.showAlert("Text has been removed","success");m("")},children:"Clear"}),Object(i.jsx)(j.a,(s={id:"upper",place:"top",effect:"solid"},Object(b.a)(s,"id","clear"),Object(b.a)(s,"children","Clear all text"),s)),Object(i.jsx)("button",{className:"btn btn-secondary mx-1 my-2","data-tip":!0,"data-for":"copy",onClick:function(){e.showAlert("Text has been copied","success");var t=document.getElementById("exampleFormControlTextarea1");t.select(),navigator.clipboard.writeText(t.value)},children:"Copy"}),Object(i.jsx)(j.a,(r={id:"upper",place:"top",effect:"solid"},Object(b.a)(r,"id","copy"),Object(b.a)(r,"children"," Copy the whole text"),r)),Object(i.jsx)("button",{className:"btn btn-info mx-1 my-2","data-tip":!0,"data-for":"space",onClick:function(){e.showAlert("Extra spaces has been removed","success");var t=h.replace(/\s+/g," ");m(t)},children:"Spaces"}),Object(i.jsx)(j.a,(l={id:"upper",place:"top",effect:"solid"},Object(b.a)(l,"id","space"),Object(b.a)(l,"children","Remove extra spaces"),l))]}),Object(i.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(i.jsx)("h3",{children:"Text Summary"}),Object(i.jsxs)("p",{children:["Total Number of words is ",h.split(" ").length-1," and characters is ",h.length]}),Object(i.jsxs)("p",{children:[.008*h.split(" ").length," minutes required to read"]}),Object(i.jsx)("h3",{children:"Preview"}),Object(i.jsx)("p",{children:h.length>0?h:"Enter text in the box to preview it here"})]})]})}function h(e){return e.alert&&Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:(e.alert.type,e.alert.type.charAt(0).toUpperCase()+e.alert.type.slice(1))})," : ",e.alert.msg]})}var m=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),r=Object(o.a)(s,2),b=r[0],j=r[1],u=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),1500)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(l.a,{children:[Object(i.jsx)(d,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#042743",u("Dark mode has been enabled","success")):(n("light"),document.body.style.backgroundColor="white",u("Light mode has been enabled","success"))}}),Object(i.jsx)(h,{alert:b}),Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(m.c,{children:Object(i.jsx)(m.a,{exact:!0,path:"/ReactApp",element:Object(i.jsx)(p,{heading:"Enter text here to analyze",mode:a,showAlert:u})})})})]})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),x()}},[[22,1,2]]]);
//# sourceMappingURL=main.6d8dd160.chunk.js.map
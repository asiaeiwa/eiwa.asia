(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[882],{4576:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/career/backend-developer",function(){return a(6538)}])},1902:function(e,r,a){"use strict";a.d(r,{a:function(){return t}});var n=a(5893),i=a(59),o=a(7294),s=a(1076),c=a.n(s),t=function(e){var r=e.children,a=e.className,s=void 0===a?"":a,t=(0,i.G_)("breadcrumb",c()),l="".concat(t," ").concat(s).trim();return(0,n.jsx)("ul",{className:l,children:o.Children.toArray(r).map((function(e,r){return(0,n.jsx)("li",{className:c().breadcrumb__item,children:e},r)}))})}},9337:function(e,r,a){"use strict";a.d(r,{z:function(){return u}});var n=a(1799),i=a(9396),o=a(9534),s=a(5893),c=a(7392),t=a(59),l=a(9436),d=a.n(l),u=function(e){var r=e.children,a=e.className,l=void 0===a?"":a,u=e.href,m=e.modifiers,p=void 0===m?"pink":m,_=e.tag,j=void 0===_?"button":_,x=e.target,b=e.type,h=(0,o.Z)(e,["children","className","href","modifiers","tag","target","type"]),v=(0,t.G_)("button",d(),p),f="".concat(v," ").concat(l).trim();return"a"===j?(0,s.jsx)(c.r,{href:u,target:x,children:(0,s.jsx)("span",(0,i.Z)((0,n.Z)({className:f},h),{children:r}))}):(0,s.jsx)("button",(0,i.Z)((0,n.Z)({className:f,type:b},h),{children:r}))}},48:function(e,r,a){"use strict";a.d(r,{B:function(){return d}});var n=a(1799),i=a(9534),o=a(5893),s=a(2599),c=a(59),t=a(2923),l=a.n(t),d=function(e){var r=e.label,a=e.className,t=void 0===a?"":a,d=e.isError,u=e.errorMessage,m=e.isMultiLine,p=e.type,_=void 0===p?"text":p,j=e.sub,x=(0,i.Z)(e,["label","className","isError","errorMessage","isMultiLine","type","sub"]),b=(0,c.G_)("input-group",l(),d&&"error",m&&"multi-line"),h="".concat(b," ").concat(t).trim(),v=m?"textarea":"input";return(0,o.jsxs)("label",{className:h,children:[(0,o.jsx)("span",{className:l()["input-group__label"],children:r}),(0,o.jsx)(v,(0,n.Z)({className:l()["input-group__input"],type:_},x)),u&&d&&(0,o.jsx)("span",{className:l()["input-group__error"],children:u}),j&&(0,o.jsx)(s.x,{tag:"span",className:l()["input-group__sub"],children:j})]})}},921:function(e,r,a){"use strict";a.d(r,{q:function(){return l}});var n=a(5893),i=a(4790),o=a(59),s=a(7058),c=a(5155),t=a.n(c),l=function(e){var r=e.className,a=void 0===r?"":r,c=e.dateExp,l=e.location,d=e.title,u=e.salary,m=e.button,p=(0,s.$)("common").t,_=(0,o.G_)("job-overview",t()),j=(0,o.n8)(_,a);return(0,n.jsxs)("article",{className:j,children:[(0,n.jsxs)("ul",{className:t()["job-overview__props"],children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(i.J,{modifiers:"clock"}),(0,n.jsxs)("div",{children:[p("job-overview.expiration-date"),(0,n.jsx)("span",{children:c})]})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.J,{modifiers:"location"}),(0,n.jsxs)("div",{children:[p("job-overview.location"),(0,n.jsx)("span",{children:l})]})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.J,{modifiers:"profile"}),(0,n.jsxs)("div",{children:[p("job-overview.job-title"),(0,n.jsx)("span",{children:d})]})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.J,{modifiers:"salary"}),(0,n.jsxs)("div",{children:[p("job-overview.salary"),(0,n.jsxs)("span",{children:["$",u.from.toLocaleString(),u.to&&" - $".concat(u.to.toLocaleString())]})]})]})]}),(0,n.jsx)("div",{className:t()["job-overview__button"],children:m})]})}},9920:function(e,r,a){"use strict";a.d(r,{f:function(){return j}});var n=a(1799),i=a(9396),o=a(9534),s=a(5893),c=a(9337),t=a(1477),l=a(48),d=a(7232),u=a(59),m=a(1650),p=a(3230),_=a.n(p),j=function(e){var r=e.className,a=void 0===r?"":r,p=(0,o.Z)(e,["className"]),j=(0,m.$G)("common").t,x=(0,u.G_)("modal-apply-job",_()),b=(0,u.n8)(x,a),h=j("can-blank");return(0,s.jsxs)(d.u,(0,i.Z)((0,n.Z)({className:b},p),{children:[(0,s.jsx)(t.X,{tag:"div",modifiers:"section",className:_()["modal-apply-job__heading"],children:j("apply-job")}),(0,s.jsxs)("form",{action:"",children:[(0,s.jsx)(l.B,{className:_()["modal-apply-job__input-group"],name:"name",label:j("form-job.name"),placeholder:j("form-job.name-placeholder"),errorMessage:h}),(0,s.jsx)(l.B,{className:_()["modal-apply-job__input-group"],name:"email",label:j("form-job.email"),placeholder:j("form-job.email-placeholder"),errorMessage:h,type:"email"}),(0,s.jsx)(l.B,{className:_()["modal-apply-job__input-group"],name:"cv",label:j("form-job.cv"),errorMessage:h,isError:!0,type:"file",sub:j("form-job.cv-sub"),accept:".doc,.docx,.pdf"}),(0,s.jsx)(l.B,{className:_()["modal-apply-job__input-group"],name:"introduce",label:j("form-job.introduce"),placeholder:j("form-job.introduce-placeholder"),errorMessage:h,isMultiLine:!0,rows:5}),(0,s.jsx)(c.z,{className:_()["modal-apply-job__button"],type:"submit",children:j("apply-job")})]})]}))}},7232:function(e,r,a){"use strict";a.d(r,{u:function(){return m}});var n=a(5893),i=a(59),o=a(7294),s=a(3197),c=a.n(s),t=function(e){var r=e.className,a=void 0===r?"":r,s=e.isActive,t=e.onClick,l=e.modifiers,d=(0,i.G_)("backdrop",c(),l,s&&"show"),u="".concat(d," ").concat(a).trim(),m=(0,o.useCallback)((function(e){t&&t(e)}),[t]);return(0,n.jsx)("div",{className:u,onClick:m})},l=a(4790),d=a(9259),u=a.n(d),m=function(e){var r=e.children,a=e.className,o=void 0===a?"":a,s=e.isActive,c=e.onClose,d=(0,i.G_)("modal",u(),s&&"active"),m=(0,i.n8)(d,o);return(0,n.jsxs)("div",{className:m,children:[(0,n.jsx)(t,{isActive:s,onClick:c}),(0,n.jsx)("div",{className:u().modal__wrapper,children:(0,n.jsxs)("div",{className:u().modal__container,children:[(0,n.jsx)(l.J,{modifiers:"close",onClick:c,className:u().modal__close}),r]})})]})}},6538:function(e,r,a){"use strict";a.r(r),a.d(r,{__N_SSG:function(){return g}});var n=a(5893),i=a(1902),o=a(9337),s=a(315),c=a(2882),t=a(6472),l=a(1477),d=a(4790),u=a(921),m=a(7392),p=a(9920),_=a(6768),j=a(8383),x=a(2599),b=a(7294),h=a(7058),v=a(7303),f=a.n(v),g=!0;r.default=function(){var e=(0,h.$)("career").t,r=(0,b.useState)(!1),a=r[0],v=r[1],g=(0,b.useCallback)((function(){return v(!0)}),[]),N=(0,b.useCallback)((function(){return v(!1)}),[]);return(0,n.jsx)(_.T,{id:"career-detail",className:f()["career-detail"],title:e("recent.03.title"),children:(0,n.jsxs)(t.v,{modifiers:"padding-bottom",children:[(0,n.jsxs)(c.W,{className:f()["career-detail__container"],children:[(0,n.jsxs)(i.a,{children:[(0,n.jsx)(m.r,{href:"/",children:e("menu.home",{ns:"common"})}),(0,n.jsx)(m.r,{href:"/career",children:e("menu.career",{ns:"common"})})]}),(0,n.jsxs)("div",{className:f()["career-detail__header"],children:[(0,n.jsx)(l.X,{tag:"h1",modifiers:"section",className:f()["career-detail__heading"],children:e("recent.03.title")}),(0,n.jsxs)("div",{className:f()["career-detail__type"],children:[" ",e("recent.03.type")]}),(0,n.jsxs)("ul",{className:f()["career-detail__props"],children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(d.J,{modifiers:"location"}),(0,n.jsx)("span",{children:e("recent.03.location")})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(d.J,{modifiers:"salary"}),(0,n.jsx)("span",{className:f()["career-detail__price"],children:e("recent.03.salary")})]})]})]}),(0,n.jsxs)(j.X,{gutter:"24",children:[(0,n.jsxs)(s.s,{col:4,className:f()["career-detail__column-overview"],children:[(0,n.jsx)(l.X,{tag:"h2",className:f()["career-detail__header-overview"],children:e("job-overview.title",{ns:"common"})}),(0,n.jsx)(u.q,{button:(0,n.jsxs)(o.z,{onClick:g,children:[" ",e("apply-job",{ns:"common"})]}),dateExp:e("recent.03.dateExp"),location:e("recent.03.location"),salary:{from:2500},title:e("recent.03.title")})]}),(0,n.jsx)(s.s,{col:8,className:f()["career-detail__column-content"],children:(0,n.jsxs)("div",{className:f()["career-detail__content"],children:[(0,n.jsx)(l.X,{tag:"h2",className:f()["career-detail__header-desc"],children:e("job-description",{ns:"common"})}),(0,n.jsx)(x.x,{children:"At least 2 years of experience in Backend technologies and programming languages such as JavaScript, Java, NodeJS, NoSQL (MongoDB), RDBMS (MySQL, PostgreSQL), Docker, Restful API, RabbitMQ (or Kafka)"}),(0,n.jsx)(x.x,{children:"Have experience with Google Cloud Platform (or AWS) is a plus"}),(0,n.jsx)(x.x,{children:"Good teamwork and reliability"}),(0,n.jsx)(x.x,{children:"Have experience of Agile software development process"})]})})]})]}),(0,n.jsx)(p.f,{isActive:a,onClose:N})]})})}},3197:function(e){e.exports={backdrop:"_2ryb3a","backdrop--show":"xnob3c","backdrop--block":"jsb2nr"}},1076:function(e){e.exports={breadcrumb:"cnvtyg",breadcrumb__item:"axrlbq"}},9436:function(e){e.exports={button:"dg9umq","button--pink":"_1waw5r","button--little":"xr0bgu","button--blue":"_1ibhvl","button--outline":"rsaw5l","button--white":"agl0zq"}},2923:function(e){e.exports={"input-group":"_3jvdxa","input-group__label":"xhymvs","input-group__input":"luchv0","input-group__error":"vycm9y","input-group__sub":"x3n1yg","input-group--error":"cm9ymq","input-group--multi-line":"wxpbmu"}},5155:function(e){e.exports={"job-overview":"j2awv3","job-overview__props":"cm9wcw","job-overview__button":"r0b24x"}},3230:function(e){e.exports={"modal-apply-job__heading":"fkaw5n","modal-apply-job__input-group":"cm91ca","modal-apply-job__button":"xr0b24"}},9259:function(e){e.exports={modal:"w9kyww",modal__wrapper:"bwzxix",modal__container:"w5lcjq",modal__close:"nsb3nl","modal--active":"dgl2zq"}},7303:function(e){e.exports={"career-detail__container":"bmvymg","career-detail__column-overview":"awv3mq","career-detail__column-content":"rlbnqx","career-detail__header":"vhzgvy","career-detail__props":"hjvchm","career-detail__content":"gvudde","career-detail__type":"dhlwzq","career-detail__price":"hjpy2u","career-detail__heading":"gluzzm","career-detail__header-overview":"awv3mg"}}},function(e){e.O(0,[147,149,774,888,179],(function(){return r=4576,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
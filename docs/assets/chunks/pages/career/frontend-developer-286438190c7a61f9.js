(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[805],{1793:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/career/frontend-developer",function(){return a(5253)}])},1902:function(e,r,a){"use strict";a.d(r,{a:function(){return l}});var n=a(5893),i=a(59),s=a(7294),o=a(1076),c=a.n(o),l=function(e){var r=e.children,a=e.className,o=void 0===a?"":a,l=(0,i.G_)("breadcrumb",c()),t="".concat(l," ").concat(o).trim();return(0,n.jsx)("ul",{className:t,children:s.Children.toArray(r).map((function(e,r){return(0,n.jsx)("li",{className:c().breadcrumb__item,children:e},r)}))})}},48:function(e,r,a){"use strict";a.d(r,{B:function(){return d}});var n=a(1799),i=a(9534),s=a(5893),o=a(2599),c=a(59),l=a(2923),t=a.n(l),d=function(e){var r=e.label,a=e.className,l=void 0===a?"":a,d=e.isError,u=e.errorMessage,m=e.isMultiLine,p=e.type,_=void 0===p?"text":p,j=e.sub,x=(0,i.Z)(e,["label","className","isError","errorMessage","isMultiLine","type","sub"]),v=(0,c.G_)("input-group",t(),d&&"error",m&&"multi-line"),h="".concat(v," ").concat(l).trim(),b=m?"textarea":"input";return(0,s.jsxs)("label",{className:h,children:[(0,s.jsx)("span",{className:t()["input-group__label"],children:r}),(0,s.jsx)(b,(0,n.Z)({className:t()["input-group__input"],type:_},x)),u&&d&&(0,s.jsx)("span",{className:t()["input-group__error"],children:u}),j&&(0,s.jsx)(o.x,{tag:"span",className:t()["input-group__sub"],children:j})]})}},921:function(e,r,a){"use strict";a.d(r,{q:function(){return t}});var n=a(5893),i=a(4790),s=a(59),o=a(7058),c=a(5155),l=a.n(c),t=function(e){var r=e.className,a=void 0===r?"":r,c=e.dateExp,t=e.location,d=e.title,u=e.salary,m=e.button,p=(0,o.$)("common").t,_=(0,s.G_)("job-overview",l()),j=(0,s.n8)(_,a);return(0,n.jsxs)("article",{className:j,children:[(0,n.jsxs)("ul",{className:l()["job-overview__props"],children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(i.J,{modifiers:"clock"}),(0,n.jsxs)("div",{children:[p("job-overview.expiration-date"),(0,n.jsx)("span",{children:c})]})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.J,{modifiers:"location"}),(0,n.jsxs)("div",{children:[p("job-overview.location"),(0,n.jsx)("span",{children:t})]})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.J,{modifiers:"profile"}),(0,n.jsxs)("div",{children:[p("job-overview.job-title"),(0,n.jsx)("span",{children:d})]})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.J,{modifiers:"salary"}),(0,n.jsxs)("div",{children:[p("job-overview.salary"),(0,n.jsxs)("span",{children:["$",u.from.toLocaleString(),u.to&&" - $".concat(u.to.toLocaleString())]})]})]})]}),(0,n.jsx)("div",{className:l()["job-overview__button"],children:m})]})}},9920:function(e,r,a){"use strict";a.d(r,{f:function(){return j}});var n=a(1799),i=a(9396),s=a(9534),o=a(5893),c=a(9337),l=a(1477),t=a(48),d=a(7232),u=a(59),m=a(1650),p=a(3230),_=a.n(p),j=function(e){var r=e.className,a=void 0===r?"":r,p=(0,s.Z)(e,["className"]),j=(0,m.$G)("common").t,x=(0,u.G_)("modal-apply-job",_()),v=(0,u.n8)(x,a),h=j("can-blank");return(0,o.jsxs)(d.u,(0,i.Z)((0,n.Z)({className:v},p),{children:[(0,o.jsx)(l.X,{tag:"div",modifiers:"section",className:_()["modal-apply-job__heading"],children:j("apply-job")}),(0,o.jsxs)("form",{action:"",children:[(0,o.jsx)(t.B,{className:_()["modal-apply-job__input-group"],name:"name",label:j("form-job.name"),placeholder:j("form-job.name-placeholder"),errorMessage:h}),(0,o.jsx)(t.B,{className:_()["modal-apply-job__input-group"],name:"email",label:j("form-job.email"),placeholder:j("form-job.email-placeholder"),errorMessage:h,type:"email"}),(0,o.jsx)(t.B,{className:_()["modal-apply-job__input-group"],name:"cv",label:j("form-job.cv"),errorMessage:h,isError:!0,type:"file",sub:j("form-job.cv-sub"),accept:".doc,.docx,.pdf"}),(0,o.jsx)(t.B,{className:_()["modal-apply-job__input-group"],name:"introduce",label:j("form-job.introduce"),placeholder:j("form-job.introduce-placeholder"),errorMessage:h,isMultiLine:!0,rows:5}),(0,o.jsx)(c.z,{className:_()["modal-apply-job__button"],type:"submit",children:j("apply-job")})]})]}))}},7232:function(e,r,a){"use strict";a.d(r,{u:function(){return m}});var n=a(5893),i=a(59),s=a(7294),o=a(3197),c=a.n(o),l=function(e){var r=e.className,a=void 0===r?"":r,o=e.isActive,l=e.onClick,t=e.modifiers,d=(0,i.G_)("backdrop",c(),t,o&&"show"),u="".concat(d," ").concat(a).trim(),m=(0,s.useCallback)((function(e){l&&l(e)}),[l]);return(0,n.jsx)("div",{className:u,onClick:m})},t=a(4790),d=a(9259),u=a.n(d),m=function(e){var r=e.children,a=e.className,s=void 0===a?"":a,o=e.isActive,c=e.onClose,d=(0,i.G_)("modal",u(),o&&"active"),m=(0,i.n8)(d,s);return(0,n.jsxs)("div",{className:m,children:[(0,n.jsx)(l,{isActive:o,onClick:c}),(0,n.jsx)("div",{className:u().modal__wrapper,children:(0,n.jsxs)("div",{className:u().modal__container,children:[(0,n.jsx)(t.J,{modifiers:"close",onClick:c,className:u().modal__close}),r]})})]})}},5253:function(e,r,a){"use strict";a.r(r),a.d(r,{__N_SSG:function(){return g}});var n=a(5893),i=a(1902),s=a(9337),o=a(315),c=a(2882),l=a(6472),t=a(1477),d=a(4790),u=a(921),m=a(7392),p=a(9920),_=a(6768),j=a(8383),x=a(2599),v=a(1650),h=a(7294),b=a(7303),f=a.n(b),g=!0;r.default=function(){var e=(0,v.$G)("career").t,r=(0,h.useState)(!1),a=r[0],b=r[1],g=(0,h.useCallback)((function(){return b(!0)}),[]),N=(0,h.useCallback)((function(){return b(!1)}),[]);return(0,n.jsx)(_.T,{id:"career-detail",className:f()["career-detail"],title:e("recent.01.title"),children:(0,n.jsxs)(l.v,{modifiers:"padding-bottom",children:[(0,n.jsxs)(c.W,{className:f()["career-detail__container"],children:[(0,n.jsxs)(i.a,{children:[(0,n.jsx)(m.r,{href:"/",children:e("menu.home",{ns:"common"})}),(0,n.jsx)(m.r,{href:"/career",children:e("menu.career",{ns:"common"})})]}),(0,n.jsxs)("div",{className:f()["career-detail__header"],children:[(0,n.jsx)(t.X,{tag:"h1",modifiers:"section",className:f()["career-detail__heading"],children:e("recent.01.title")}),(0,n.jsx)("div",{className:f()["career-detail__type"],children:e("recent.01.type")}),(0,n.jsxs)("ul",{className:f()["career-detail__props"],children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(d.J,{modifiers:"location"}),(0,n.jsx)("span",{children:e("recent.01.location")})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(d.J,{modifiers:"salary"}),(0,n.jsx)("span",{className:f()["career-detail__price"],children:e("recent.01.salary")})]})]})]}),(0,n.jsxs)(j.X,{gutter:"24",children:[(0,n.jsxs)(o.s,{col:4,className:f()["career-detail__column-overview"],children:[(0,n.jsx)(t.X,{tag:"h2",className:f()["career-detail__header-overview"],children:e("job-overview.title",{ns:"common"})}),(0,n.jsx)(u.q,{button:(0,n.jsx)(s.z,{onClick:g,children:e("apply-job",{ns:"common"})}),dateExp:e("recent.01.dateExp"),location:e("recent.01.location"),salary:{from:2e3,to:3e3},title:e("recent.01.title")})]}),(0,n.jsx)(o.s,{col:8,className:f()["career-detail__column-content"],children:(0,n.jsxs)("div",{className:f()["career-detail__content"],children:[(0,n.jsx)(t.X,{tag:"h2",className:f()["career-detail__header-desc"],children:e("job-description",{ns:"common"})}),(0,n.jsx)(x.x,{children:"University degree in Computer Sciences, or equivalent."}),(0,n.jsx)(x.x,{children:"Having +1 year of experience in Front-End development."}),(0,n.jsx)(x.x,{children:"Good experience in modern JS frameworks/libraries such as React, Angular, Vue,\u2026"}),(0,n.jsx)(x.x,{children:"Experienced in HTML/CSS, JavaScript/TypeScript and pre-processing languages such as LESS/SASS/SCSS"})]})})]})]}),(0,n.jsx)(p.f,{isActive:a,onClose:N})]})})}},3197:function(e){e.exports={backdrop:"ryb3a","backdrop--show":"nob3c","backdrop--block":"sb2nr"}},1076:function(e){e.exports={breadcrumb:"nvtyg",breadcrumb__item:"xrlbq"}},2923:function(e){e.exports={"input-group":"jvdxa","input-group__label":"hymvs","input-group__input":"uchv0","input-group__error":"ycm9y","input-group__sub":"_3n1yg","input-group--error":"m9ymq","input-group--multi-line":"xpbmu"}},5155:function(e){e.exports={"job-overview":"wv3mg","job-overview__props":"m9wcw","job-overview__button":"_0b24y"}},3230:function(e){e.exports={"modal-apply-job__heading":"kaw5n","modal-apply-job__input-group":"m91ca","modal-apply-job__button":"r0b24"}},9259:function(e){e.exports={modal:"_9kyww",modal__wrapper:"wzxix",modal__container:"_5lcjq",modal__close:"sb3nl","modal--active":"gl2zq"}},7303:function(e){e.exports={"career-detail__container":"mvymg","career-detail__column-overview":"_2awv3","career-detail__column-content":"lbnqx","career-detail__header":"hzgvy","career-detail__props":"jvchm","career-detail__content":"vudde","career-detail__type":"hlwzq","career-detail__price":"jpy2u","career-detail__heading":"luzzm","career-detail__header-overview":"wv3mq"}}},function(e){e.O(0,[147,149,774,888,179],(function(){return r=1793,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
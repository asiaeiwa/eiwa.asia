(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{1734:function(e,c,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product",function(){return s(5632)}])},25:function(e,c,s){"use strict";s.d(c,{S:function(){return n}});var t=s(5893),i=s(59),a=s(7925),r=s.n(a),n=function(e){var c=e.modifiers,s=e.className,a=void 0===s?"":s,n=e.items,o=(0,i.G_)("check-list",r(),c),p=(0,i.n8)(o,a);return(0,t.jsx)("ul",{className:p,children:Array.isArray(n)&&n.map((function(e,c){return(0,t.jsx)("li",{className:r()["check-list__item"],children:e},c)}))})}},48:function(e,c,s){"use strict";s.d(c,{B:function(){return l}});var t=s(1799),i=s(9534),a=s(5893),r=s(2599),n=s(59),o=s(2923),p=s.n(o),l=function(e){var c=e.label,s=e.className,o=void 0===s?"":s,l=e.isError,m=e.errorMessage,d=e.isMultiLine,h=e.type,_=void 0===h?"text":h,u=e.sub,k=(0,i.Z)(e,["label","className","isError","errorMessage","isMultiLine","type","sub"]),x=(0,n.G_)("input-group",p(),l&&"error",d&&"multi-line"),g="".concat(x," ").concat(o).trim(),j=d?"textarea":"input";return(0,a.jsxs)("label",{className:g,children:[(0,a.jsx)("span",{className:p()["input-group__label"],children:c}),(0,a.jsx)(j,(0,t.Z)({className:p()["input-group__input"],type:_},k)),m&&l&&(0,a.jsx)("span",{className:p()["input-group__error"],children:m}),u&&(0,a.jsx)(r.x,{tag:"span",className:p()["input-group__sub"],children:u})]})}},804:function(e,c,s){"use strict";s.d(c,{l:function(){return u}});var t=s(1799),i=s(9396),a=s(9534),r=s(5893),n=s(9337),o=s(1477),p=s(48),l=s(7232),m=s(59),d=s(1650),h=s(9915),_=s.n(h),u=function(e){var c=e.className,s=void 0===c?"":c,h=e.titlePack,u=e.idPack,k=(0,a.Z)(e,["className","titlePack","idPack"]),x=(0,d.$G)("common").t,g=(0,m.G_)("modal-choose-plan",_()),j=(0,m.n8)(g,s),b=x("can-blank");return(0,r.jsxs)(l.u,(0,i.Z)((0,t.Z)({className:j},k),{children:[(0,r.jsxs)(o.X,{tag:"div",modifiers:"section",className:_()["modal-choose-plan__heading"],children:[x("choose-plan")," ",(0,r.jsx)("span",{children:"-"})," ",(0,r.jsx)("span",{children:h})]}),(0,r.jsxs)("form",{action:"",children:[(0,r.jsx)("input",{type:"hidden",name:"idpack",value:u}),(0,r.jsx)(p.B,{className:_()["modal-choose-plan__input-group"],name:"name",label:x("form-plan.name"),placeholder:x("form-plan.name-placeholder"),errorMessage:b}),(0,r.jsx)(p.B,{className:_()["modal-choose-plan__input-group"],name:"email",label:x("form-plan.email"),placeholder:x("form-plan.email-placeholder"),errorMessage:b,type:"email"}),(0,r.jsx)(p.B,{className:_()["modal-choose-plan__input-group"],name:"phone",label:x("form-plan.phone"),placeholder:x("form-plan.phone-placeholder"),errorMessage:b,isError:!0}),(0,r.jsx)(n.z,{className:_()["modal-choose-plan__button"],type:"submit",children:x("form-plan.submit")})]})]}))}},7232:function(e,c,s){"use strict";s.d(c,{u:function(){return d}});var t=s(5893),i=s(59),a=s(7294),r=s(3197),n=s.n(r),o=function(e){var c=e.className,s=void 0===c?"":c,r=e.isActive,o=e.onClick,p=e.modifiers,l=(0,i.G_)("backdrop",n(),p,r&&"show"),m="".concat(l," ").concat(s).trim(),d=(0,a.useCallback)((function(e){o&&o(e)}),[o]);return(0,t.jsx)("div",{className:m,onClick:d})},p=s(4790),l=s(9259),m=s.n(l),d=function(e){var c=e.children,s=e.className,a=void 0===s?"":s,r=e.isActive,n=e.onClose,l=(0,i.G_)("modal",m(),r&&"active"),d=(0,i.n8)(l,a);return(0,t.jsxs)("div",{className:d,children:[(0,t.jsx)(o,{isActive:r,onClick:n}),(0,t.jsx)("div",{className:m().modal__wrapper,children:(0,t.jsxs)("div",{className:m().modal__container,children:[(0,t.jsx)(p.J,{modifiers:"close",onClick:n,className:m().modal__close}),c]})})]})}},6117:function(e,c,s){"use strict";s.d(c,{J:function(){return p}});var t=s(5893),i=s(1477),a=s(2599),r=s(59),n=s(4323),o=s.n(n),p=function(e){var c=e.modifiers,s=e.price,n=e.title,p=e.desc,l=e.className,m=void 0===l?"":l,d=e.button,h=e.tag,_=e.children,u=(0,r.G_)("pack-item",o(),c),k=(0,r.n8)(u,m);return(0,t.jsxs)("div",{className:k,children:[(0,t.jsx)(i.X,{tag:"h3",className:o()["pack-item__title"],children:n}),s&&(0,t.jsxs)("div",{className:o()["pack-item__price"],children:[(0,t.jsxs)("span",{className:o()["pack-item__number"],children:["$",s]}),(0,t.jsx)("span",{className:o()["pack-item__unit"],children:"/month"})]}),p&&(0,t.jsx)(a.x,{className:o()["pack-item__desc"],children:p}),_&&(0,t.jsx)("div",{className:o()["pack-item__check-list"],children:_}),h&&(0,t.jsx)("span",{className:o()["pack-item__tag"],children:h}),(0,t.jsx)("div",{className:o()["pack-item__button-container"],children:d})]})}},6995:function(e,c,s){"use strict";s.d(c,{_:function(){return h}});var t=s(5893),i=s(25),a=s(315),r=s(2882),n=s(1477),o=s(8821),p=s(8383),l=s(59),m=s(2141),d=s.n(m),h=function(e){var c=e.className,s=void 0===c?"":c,m=e.imgSrc,h=e.children,_=e.checkList,u=e.button,k=e.title,x=(0,l.G_)("section-pack",d()),g=(0,l.n8)(x,s);return(0,t.jsx)("section",{className:g,children:(0,t.jsxs)(r.W,{children:[(0,t.jsx)(n.X,{className:d()["section-pack__heading"],modifiers:["page","border-inline"],tag:"h2",children:k}),(0,t.jsxs)(p.X,{gutter:"24",className:d()["section-pack__wrapper"],children:[(0,t.jsx)(a.s,{col:"6",className:d()["section-pack__column-image"],children:(0,t.jsx)(o.E,{src:m,width:"570",height:"320",layout:"responsive",isLazy:!0,alt:k})}),(0,t.jsxs)(a.s,{col:"6",className:d()["section-pack__column-info"],children:[(0,t.jsx)("div",{className:d()["section-pack__desc"],children:h}),_&&(0,t.jsx)(i.S,{className:d()["section-pack__check-list"],items:_}),u&&(0,t.jsx)("div",{className:d()["section-pack__button"],children:u})]})]})]})})}},5632:function(e,c,s){"use strict";s.r(c),s.d(c,{__N_SSG:function(){return y},default:function(){return z}});var t=s(5893),i=s(9337),a=s(25),r=s(315),n=s(2882),o=s(6472),p=s(1477),l=s(804),m=s(6117),d=s(6768),h=s(8383),_=s(6995),u=s(8821),k=s(59),x=s(9813),g=s.n(x),j=s(2599),b=function(e){var c=e.className,s=void 0===c?"":c,i=e.title,a=e.button,o=e.items,l=(0,k.G_)("section-pro-pack",g()),m=(0,k.n8)(l,s);return(0,t.jsx)("section",{className:m,children:(0,t.jsxs)(n.W,{className:g()["section-pro-pack__container"],children:[(0,t.jsxs)("div",{className:g()["section-pro-pack__wrapper-heading"],children:[(0,t.jsx)(p.X,{className:g()["section-pro-pack__heading"],modifiers:["page","border-inline"],tag:"h2",children:i}),a]}),(0,t.jsx)(h.X,{gutter:"24",className:g()["section-pro-pack__wrapper-content"],children:o&&o.map((function(e,c){return(0,t.jsxs)(r.s,{col:4,className:g()["section-pro-pack__item"],children:[(0,t.jsx)(u.E,{src:e.imgSrc,width:364,height:408,alt:e.name,layout:"responsive",modifiers:"rounded",className:g()["section-pro-pack__item-image"],isLazy:!0}),(0,t.jsx)(j.x,{className:g()["section-pro-pack__item-name"],children:e.name})]},c)}))})]})})},f=s(1650),N=s(7294),v=s(6712),w=s.n(v),y=!0,z=function(){var e=(0,f.$G)("product").t,c=(0,N.useState)(!1),s=c[0],u=c[1],k=(0,N.useCallback)((function(){return u(!0)}),[]),x=(0,N.useCallback)((function(){return u(!1)}),[]);return(0,t.jsx)(d.T,{id:"product",className:w().product,title:e("title"),description:e("description"),keywords:e("keywords"),children:(0,t.jsxs)(o.v,{modifiers:"padding-bottom",children:[(0,t.jsx)(p.X,{className:w().product__title,modifiers:["page"],tag:"h1",children:e("heading")}),(0,t.jsx)(j.x,{className:w()["product__title-desc"],children:e("desc")}),(0,t.jsx)("section",{className:w()["product__section-service"],children:(0,t.jsx)(n.W,{children:(0,t.jsxs)(h.X,{className:w().product__service,children:[(0,t.jsx)(r.s,{col:3,children:(0,t.jsx)(m.J,{desc:e("pacts.intro.desc"),className:w()["product__pack-item"],price:e("pacts.intro.price"),title:e("pacts.intro.title"),button:(0,t.jsx)(i.z,{modifiers:["little"],onClick:k,children:e("choose-plan",{ns:"common"})}),children:(0,t.jsx)(a.S,{items:[e("pacts.intro.checklist.01"),e("pacts.intro.checklist.02"),e("pacts.intro.checklist.03"),e("pacts.intro.checklist.04"),e("pacts.intro.checklist.05"),e("pacts.intro.checklist.06")]})})}),(0,t.jsx)(r.s,{col:3,children:(0,t.jsx)(m.J,{desc:e("pacts.base.desc"),className:w()["product__pack-item"],price:e("pacts.base.price"),title:e("pacts.base.title"),button:(0,t.jsx)(i.z,{modifiers:["little"],onClick:k,children:e("choose-plan",{ns:"common"})}),children:(0,t.jsx)(a.S,{items:[e("pacts.base.checklist.01"),e("pacts.base.checklist.02"),e("pacts.base.checklist.03"),e("pacts.base.checklist.04"),e("pacts.base.checklist.05"),e("pacts.base.checklist.06")]})})}),(0,t.jsx)(r.s,{col:3,className:w().product__highlight,children:(0,t.jsx)(m.J,{desc:e("pacts.pro.desc"),modifiers:"highlight",className:w()["product__pack-item"],price:e("pacts.pro.price"),title:e("pacts.pro.title"),button:(0,t.jsx)(i.z,{modifiers:["pink"],onClick:k,children:e("choose-plan",{ns:"common"})}),children:(0,t.jsx)(a.S,{modifiers:"white",items:[e("pacts.pro.checklist.01"),e("pacts.pro.checklist.02"),e("pacts.pro.checklist.03"),e("pacts.pro.checklist.04"),e("pacts.pro.checklist.05"),e("pacts.pro.checklist.06")]})})}),(0,t.jsx)(r.s,{col:3,children:(0,t.jsx)(m.J,{desc:e("pacts.enterprise.desc"),className:w()["product__pack-item"],price:e("pacts.enterprise.price"),title:e("pacts.enterprise.title"),button:(0,t.jsx)(i.z,{modifiers:["little"],onClick:k,children:e("choose-plan",{ns:"common"})}),children:(0,t.jsx)(a.S,{items:[e("pacts.enterprise.checklist.01"),e("pacts.enterprise.checklist.02"),e("pacts.enterprise.checklist.03"),e("pacts.enterprise.checklist.04"),e("pacts.enterprise.checklist.05"),e("pacts.enterprise.checklist.06")]})})})]})})}),(0,t.jsx)(_._,{className:w().product__pack,title:e("pacts.base.long-title"),checkList:[e("pacts.base.checklist.01"),e("pacts.base.checklist.02"),e("pacts.base.checklist.03"),e("pacts.base.checklist.04"),e("pacts.base.checklist.05"),e("pacts.base.checklist.06"),e("pacts.base.checklist.07"),e("pacts.base.checklist.08"),e("pacts.base.checklist.09"),e("pacts.base.checklist.10"),e("pacts.base.checklist.11"),e("pacts.base.checklist.12")],button:(0,t.jsx)(i.z,{href:"/product/base-pack",modifiers:["pink"],tag:"a",children:e("read-more",{ns:"common"})}),imgSrc:"/images/product/image-1.png",children:(0,t.jsxs)(j.x,{children:[e("pacts.base.paragraph01"),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),e("pacts.base.paragraph02")]})}),(0,t.jsx)(b,{className:w()["product__pro-pack"],title:e("pacts.pro.long-title"),button:(0,t.jsx)(i.z,{href:"/product/pro-pack",tag:"a",children:e("read-more",{ns:"common"})}),items:[{imgSrc:"/images/product/pro-1.jpg",name:e("pacts.pro.highlight.01.name")},{imgSrc:"/images/product/pro-1.jpg",name:e("pacts.pro.highlight.02.name")},{imgSrc:"/images/product/pro-1.jpg",name:e("pacts.pro.highlight.03.name")}]}),(0,t.jsx)(_._,{className:w().product__pack,title:e("pacts.enterprise.long-title"),checkList:[e("pacts.enterprise.checklist.01"),e("pacts.enterprise.checklist.02"),e("pacts.enterprise.checklist.03"),e("pacts.enterprise.checklist.04"),e("pacts.enterprise.checklist.05"),e("pacts.enterprise.checklist.06"),e("pacts.enterprise.checklist.07"),e("pacts.enterprise.checklist.08"),e("pacts.enterprise.checklist.09"),e("pacts.enterprise.checklist.10"),e("pacts.enterprise.checklist.11"),e("pacts.enterprise.checklist.12"),e("pacts.enterprise.checklist.13"),e("pacts.enterprise.checklist.14"),e("pacts.enterprise.checklist.15")],button:(0,t.jsx)(i.z,{href:"/product/enterprise-pack",modifiers:["pink"],tag:"a",children:e("read-more",{ns:"common"})}),imgSrc:"/images/product/image-1.png",children:(0,t.jsxs)(j.x,{children:[e("pacts.enterprise.paragraph01"),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),e("pacts.enterprise.paragraph02")]})}),(0,t.jsx)(l.l,{idPack:"pro",titlePack:"".concat(e("pacts.pro.title")," ($").concat(e("pacts.pro.price"),"/month)"),isActive:s,onClose:x})]})})}},3197:function(e){e.exports={backdrop:"ryb3a","backdrop--show":"nob3c","backdrop--block":"sb2nr"}},7925:function(e){e.exports={"check-list":"lzdde","check-list__item":"rlbtq","check-list--white":"hpdgu"}},2923:function(e){e.exports={"input-group":"jvdxa","input-group__label":"hymvs","input-group__input":"uchv0","input-group__error":"ycm9y","input-group__sub":"_3n1yg","input-group--error":"m9ymq","input-group--multi-line":"xpbmu"}},9915:function(e){e.exports={"modal-choose-plan":"bsyw4","modal-choose-plan__heading":"rpbmc","modal-choose-plan__input-group":"yb3vw","modal-choose-plan__button":"hrvbg"}},9259:function(e){e.exports={modal:"_9kyww",modal__wrapper:"wzxix",modal__container:"_5lcjq",modal__close:"sb3nl","modal--active":"gl2zq"}},4323:function(e){e.exports={"pack-item":"gvtoa","pack-item__title":"rsztu","pack-item__price":"ljzti","pack-item__number":"_1izxi","pack-item__unit":"_1bml0","pack-item__desc":"xnjmq","pack-item__button-container":"mvynw","pack-item__tag":"_90ywc","pack-item__check-list":"xn0mg","pack-item--cate":"jyxrl","pack-item--highlight":"lnahq","pack-item--small":"fsbde"}},2141:function(e){e.exports={"section-pack":"wywnr","section-pack__heading":"w5nmg","section-pack__wrapper":"wcgvy","section-pack__column-image":"hz2ux","section-pack__column-info":"w5mbw","section-pack__desc":"kzxnj","section-pack__check-list":"xn0mq","section-pack__button":"_0b24x"}},9813:function(e){e.exports={"section-pro-pack":"fjaze","section-pro-pack__container":"mvymw","section-pro-pack__wrapper-heading":"w5nna","section-pro-pack__wrapper-content":"w50mg","section-pro-pack__heading":"luzzq","section-pro-pack__item":"rlbty","section-pro-pack__item-image":"fnzti","section-pro-pack__item-name":"uyw1l"}},6712:function(e){e.exports={product__title:"_0bgux","product__title-desc":"gvzyw",product__container:"mvyna",product__service:"ljzte",product__highlight:"pz2h0","product__section-service":"_2awnl",product__pack:"fjazi","product__pro-pack":"bhy2s"}}},function(e){e.O(0,[147,149,774,888,179],(function(){return c=1734,e(e.s=c);var c}));var c=e.O();_N_E=c}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[486],{4737:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/base-pack",function(){return t(9296)}])},3895:function(e,i,t){"use strict";t.d(i,{Q:function(){return d},U:function(){return l}});var s=t(5893),a=t(1477),c=t(5708),o=t(7294),r=t(5094),n=t.n(r),l=function(e){var i=e.children,t=e.className,o=void 0===t?"":t,r=e.title,l=(0,c.G)("accordion",n()),d=(0,c.n)(l,o);return(0,s.jsxs)("div",{className:d,children:[(0,s.jsx)(a.X,{tag:"h3",children:r}),(0,s.jsx)("ul",{className:n().accordion__list,children:i})]})},d=function(e){var i=e.title,t=e.children,a=(0,o.useState)(!1),r=a[0],l=a[1],d=(0,c.G)("accordion__item",n(),r&&"active"),u=(0,o.useCallback)((function(){return l((function(e){return!e}))}),[]);return(0,s.jsxs)("li",{className:d,children:[(0,s.jsx)("div",{className:n()["accordion__item-title"],onClick:u,children:i}),(0,s.jsx)("div",{className:n()["accordion__item-text"],children:t})]})}},25:function(e,i,t){"use strict";t.d(i,{S:function(){return r}});var s=t(5893),a=t(5708),c=t(7925),o=t.n(c),r=function(e){var i=e.modifiers,t=e.className,c=void 0===t?"":t,r=e.items,n=(0,a.G)("check-list",o(),i),l=(0,a.n)(n,c);return(0,s.jsx)("ul",{className:l,children:Array.isArray(r)&&r.map((function(e,i){return(0,s.jsx)("li",{className:o()["check-list__item"],children:e},i)}))})}},48:function(e,i,t){"use strict";t.d(i,{B:function(){return d}});var s=t(1799),a=t(9534),c=t(5893),o=t(2599),r=t(5708),n=t(2923),l=t.n(n),d=function(e){var i=e.label,t=e.className,n=void 0===t?"":t,d=e.isError,u=e.errorMessage,p=e.isMultiLine,m=e.type,h=void 0===m?"text":m,_=e.sub,g=(0,a.Z)(e,["label","className","isError","errorMessage","isMultiLine","type","sub"]),f=(0,r.G)("input-group",l(),d&&"error",p&&"multi-line"),x="".concat(f," ").concat(n).trim(),k=p?"textarea":"input";return(0,c.jsxs)("label",{className:x,children:[(0,c.jsx)("span",{className:l()["input-group__label"],children:i}),(0,c.jsx)(k,(0,s.Z)({className:l()["input-group__input"],type:h},g)),u&&d&&(0,c.jsx)("span",{className:l()["input-group__error"],children:u}),_&&(0,c.jsx)(o.x,{tag:"span",className:l()["input-group__sub"],children:_})]})}},804:function(e,i,t){"use strict";t.d(i,{l:function(){return _}});var s=t(1799),a=t(9396),c=t(9534),o=t(5893),r=t(9337),n=t(1477),l=t(48),d=t(7232),u=t(5708),p=t(1650),m=t(9915),h=t.n(m),_=function(e){var i=e.className,t=void 0===i?"":i,m=e.titlePack,_=e.idPack,g=(0,c.Z)(e,["className","titlePack","idPack"]),f=(0,p.$G)("common").t,x=(0,u.G)("modal-choose-plan",h()),k=(0,u.n)(x,t),b=f("can-blank");return(0,o.jsxs)(d.u,(0,a.Z)((0,s.Z)({className:k},g),{children:[(0,o.jsxs)(n.X,{tag:"div",modifiers:"section",className:h()["modal-choose-plan__heading"],children:[f("choose-plan")," ",(0,o.jsx)("span",{children:"-"})," ",(0,o.jsx)("span",{children:m})]}),(0,o.jsxs)("form",{action:"",children:[(0,o.jsx)("input",{type:"hidden",name:"idpack",value:_}),(0,o.jsx)(l.B,{className:h()["modal-choose-plan__input-group"],name:"name",label:f("form-plan.name"),placeholder:f("form-plan.name-placeholder"),errorMessage:b}),(0,o.jsx)(l.B,{className:h()["modal-choose-plan__input-group"],name:"email",label:f("form-plan.email"),placeholder:f("form-plan.email-placeholder"),errorMessage:b,type:"email"}),(0,o.jsx)(l.B,{className:h()["modal-choose-plan__input-group"],name:"phone",label:f("form-plan.phone"),placeholder:f("form-plan.phone-placeholder"),errorMessage:b,isError:!0}),(0,o.jsx)(r.z,{className:h()["modal-choose-plan__button"],type:"submit",children:f("form-plan.submit")})]})]}))}},7232:function(e,i,t){"use strict";t.d(i,{u:function(){return p}});var s=t(5893),a=t(5708),c=t(7294),o=t(3197),r=t.n(o),n=function(e){var i=e.className,t=void 0===i?"":i,o=e.isActive,n=e.onClick,l=e.modifiers,d=(0,a.G)("backdrop",r(),l,o&&"show"),u="".concat(d," ").concat(t).trim(),p=(0,c.useCallback)((function(e){n&&n(e)}),[n]);return(0,s.jsx)("div",{className:u,onClick:p})},l=t(4790),d=t(9259),u=t.n(d),p=function(e){var i=e.children,t=e.className,c=void 0===t?"":t,o=e.isActive,r=e.onClose,d=(0,a.G)("modal",u(),o&&"active"),p=(0,a.n)(d,c);return(0,s.jsxs)("div",{className:p,children:[(0,s.jsx)(n,{isActive:o,onClick:r}),(0,s.jsx)("div",{className:u().modal__wrapper,children:(0,s.jsxs)("div",{className:u().modal__container,children:[(0,s.jsx)(l.J,{modifiers:"close",onClick:r,className:u().modal__close}),i]})})]})}},6995:function(e,i,t){"use strict";t.d(i,{_:function(){return m}});var s=t(5893),a=t(25),c=t(315),o=t(2882),r=t(1477),n=t(8821),l=t(8383),d=t(5708),u=t(2141),p=t.n(u),m=function(e){var i=e.className,t=void 0===i?"":i,u=e.imgSrc,m=e.children,h=e.checkList,_=e.button,g=e.title,f=(0,d.G)("section-pack",p()),x=(0,d.n)(f,t);return(0,s.jsx)("section",{className:x,children:(0,s.jsxs)(o.W,{children:[(0,s.jsx)(r.X,{className:p()["section-pack__heading"],modifiers:["page","border-inline"],tag:"h2",children:g}),(0,s.jsxs)(l.X,{gutter:"24",className:p()["section-pack__wrapper"],children:[(0,s.jsx)(c.s,{col:"6",className:p()["section-pack__column-image"],children:(0,s.jsx)(n.E,{src:u,width:"570",height:"320",layout:"responsive",isLazy:!0,alt:g})}),(0,s.jsxs)(c.s,{col:"6",className:p()["section-pack__column-info"],children:[(0,s.jsx)("div",{className:p()["section-pack__desc"],children:m}),h&&(0,s.jsx)(a.S,{className:p()["section-pack__check-list"],items:h}),_&&(0,s.jsx)("div",{className:p()["section-pack__button"],children:_})]})]})]})})}},4090:function(e,i,t){"use strict";t.d(i,{L:function(){return l}});var s=t(5893),a=t(2882),c=t(1477),o=t(5708),r=t(6698),n=t.n(r),l=function(e){var i=e.className,t=void 0===i?"":i,r=e.title,l=e.price,d=e.button,u=(0,o.G)("sticky",n()),p=(0,o.n)(u,t);return(0,s.jsx)("div",{className:p,children:(0,s.jsxs)(a.W,{className:n().sticky__container,children:[(0,s.jsx)(c.X,{className:n().sticky__heading,tag:"div",modifiers:"page",children:r}),(0,s.jsxs)("div",{className:n().sticky__right,children:[(0,s.jsxs)("div",{className:n().sticky__price,children:[l,(0,s.jsx)("span",{className:n().sticky__month,children:"/month"})]}),(0,s.jsx)("div",{className:n().sticky__button,children:d})]})]})})}},9296:function(e,i,t){"use strict";t.r(i),t.d(i,{__N_SSG:function(){return b}});var s=t(5893),a=t(3895),c=t(9337),o=t(315),r=t(2882),n=t(6472),l=t(1477),d=t(804),u=t(6768),p=t(8383),m=t(6995),h=t(4090),_=t(2599),g=t(1650),f=t(7294),x=t(3866),k=t.n(x),b=!0;i.default=function(){var e=(0,g.$G)("product").t,i=(0,f.useState)(!1),t=i[0],x=i[1],b=(0,f.useCallback)((function(){return x(!0)}),[]),j=(0,f.useCallback)((function(){return x(!1)}),[]);return(0,s.jsx)(u.T,{id:"product-detail",className:k()["product-detail"],title:e("pacts.base.long-title"),isNeedH1:!0,children:(0,s.jsxs)(n.v,{modifiers:"padding-bottom",children:[(0,s.jsx)(m._,{className:k()["product-detail__section-pack"],title:e("pacts.base.long-title"),checkList:[e("pacts.base.checklist.01"),e("pacts.base.checklist.02"),e("pacts.base.checklist.03"),e("pacts.base.checklist.04"),e("pacts.base.checklist.05"),e("pacts.base.checklist.06"),e("pacts.base.checklist.07"),e("pacts.base.checklist.08"),e("pacts.base.checklist.09"),e("pacts.base.checklist.10"),e("pacts.base.checklist.11"),e("pacts.base.checklist.12")],imgSrc:"/images/product/image-1.png",children:(0,s.jsxs)(_.x,{children:[e("pacts.base.paragraph01"),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),e("pacts.base.paragraph02")]})}),(0,s.jsx)("section",{className:k()["product-detail__section-faq"],children:(0,s.jsx)(r.W,{children:(0,s.jsxs)("div",{className:k()["product-detail__blue-bg"],children:[(0,s.jsx)(l.X,{tag:"h2",modifiers:["border-bottom","page"],className:k()["product-detail__heading-faq"],children:"Frequently asked questions"}),(0,s.jsx)(r.W,{className:k()["product-detail__small-container"],children:(0,s.jsxs)(p.X,{gutter:"88",children:[(0,s.jsxs)(o.s,{col:"6",children:[(0,s.jsxs)(a.U,{title:"The basic",className:k()["product-detail__accordion"],children:[(0,s.jsx)(a.Q,{title:"How does it work?",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat omnis enim blanditiis quos porro reprehenderit dolore?"}),(0,s.jsx)(a.Q,{title:"Which platform do you support?",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat omnis enim blanditiis quos porro reprehenderit dolore?"}),(0,s.jsx)(a.Q,{title:"How does it work?",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat omnis enim blanditiis quos porro reprehenderit dolore?"}),(0,s.jsx)(a.Q,{title:"How does it work?",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat omnis enim blanditiis quos porro reprehenderit dolore?"})]}),(0,s.jsxs)(a.U,{title:"Manage your plan",className:k()["product-detail__accordion"],children:[(0,s.jsx)(a.Q,{title:"How does it work?",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat omnis enim blanditiis quos porro reprehenderit dolore?"}),(0,s.jsx)(a.Q,{title:"Which platform do you support?",children:"We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow."}),(0,s.jsx)(a.Q,{title:"How to delete an account?",children:"We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow."}),(0,s.jsx)(a.Q,{title:"Refund policy",children:"We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow."})]})]}),(0,s.jsxs)(o.s,{col:"6",children:[(0,s.jsxs)(a.U,{title:"Using Solo",className:k()["product-detail__accordion"],children:[(0,s.jsx)(a.Q,{title:"How to upgrade a free to a paid plan?",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat omnis enim blanditiis quos porro reprehenderit dolore?"}),(0,s.jsx)(a.Q,{title:"How to cancel a paid plan?",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat omnis enim blanditiis quos porro reprehenderit dolore?"}),(0,s.jsx)(a.Q,{title:"Using Solo",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat omnis enim blanditiis quos porro reprehenderit dolore?"}),(0,s.jsx)(a.Q,{title:"How to create a new workspace?",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat omnis enim blanditiis quos porro reprehenderit dolore?"})]}),(0,s.jsxs)(a.U,{title:"Security & private",className:k()["product-detail__accordion"],children:[(0,s.jsx)(a.Q,{title:"How to invite team members?",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat omnis enim blanditiis quos porro reprehenderit dolore?"}),(0,s.jsx)(a.Q,{title:"Which platform do you support?",children:"We're a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources to energize your creative workflow."}),(0,s.jsx)(a.Q,{title:"How does it work?",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat omnis enim blanditiis quos porro reprehenderit dolore?"}),(0,s.jsx)(a.Q,{title:"Change password",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit consequatur fugiat, ad placeat omnis enim blanditiis quos porro reprehenderit dolore?"})]})]})]})})]})})}),(0,s.jsx)(h.L,{price:"$".concat(e("pacts.base.price")),title:e("pacts.base.long-title"),button:(0,s.jsx)(c.z,{onClick:b,children:e("choose-plan",{ns:"common"})})}),(0,s.jsx)(d.l,{idPack:"base",titlePack:"".concat(e("pacts.base.title")," ($").concat(e("pacts.base.price"),"/month)"),isActive:t,onClose:j})]})})}},5094:function(e){e.exports={accordion:"_9umw",accordion__list:"n0mq",accordion__item:"vtoa","accordion__item--active":"pdmu","accordion__item-title":"xlng","accordion__item-text":"ehqy"}},3197:function(e){e.exports={backdrop:"yb3a","backdrop--show":"ob3c","backdrop--block":"b2nr"}},7925:function(e){e.exports={"check-list":"zdde","check-list__item":"lbtq","check-list--white":"pdgu"}},2923:function(e){e.exports={"input-group":"vdxa","input-group__label":"ymvs","input-group__input":"chv0","input-group__error":"cm9y","input-group__sub":"n1yg","input-group--error":"_9ymq","input-group--multi-line":"pbmu"}},9915:function(e){e.exports={"modal-choose-plan":"syw4","modal-choose-plan__heading":"pbmc","modal-choose-plan__input-group":"b3vw","modal-choose-plan__button":"rvbg"}},9259:function(e){e.exports={modal:"kyww",modal__wrapper:"zxi4",modal__container:"lcju",modal__close:"b3nl","modal--active":"l2zq"}},2141:function(e){e.exports={"section-pack":"ywnr","section-pack__heading":"_5nmg","section-pack__wrapper":"ymta","section-pack__column-image":"z2uy","section-pack__column-info":"mbze","section-pack__desc":"njmq","section-pack__check-list":"n0mg","section-pack__button":"b240"}},6698:function(e){e.exports={sticky:"y2t5",sticky__container:"zxi1",sticky__right:"doda",sticky__heading:"_5nmw",sticky__price:"jzti",sticky__month:"_50aa"}},3866:function(e){e.exports={"product-detail":"awwx","product-detail__section-pack":"fjaw","product-detail__section-faq":"zmfx","product-detail__blue-bg":"tymc","product-detail__small-container":"lcji","product-detail__heading-faq":"fxmq","product-detail__accordion":"vbji"}}},function(e){e.O(0,[147,149,516,774,888,179],(function(){return i=4737,e(e.s=i);var i}));var i=e.O();_N_E=i}]);
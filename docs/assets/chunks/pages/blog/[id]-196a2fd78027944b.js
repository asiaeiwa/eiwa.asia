(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[610],{3972:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[id]",function(){return t(2694)}])},1954:function(e,i,t){"use strict";t.d(i,{l:function(){return p}});var a=t(1799),s=t(9396),o=t(5893),l=t(1477),n=t(8821),r=t(7392),c=t(2599),m=t(59),d=t(3530),u=t.n(d),p=function(e){var i=e.modifiers,t=e.className,d=void 0===t?"":t,p=e.title,g=e.imgSrc,b=e.sub,_=e.date,h=e.href,x=(0,m.G_)("blog-item",u(),i),j=(0,m.n8)(x,d),f=_?new Date(_):new Date,v=null===i||void 0===i?void 0:i.includes("big"),N=null===i||void 0===i?void 0:i.includes("small"),w=null===i||void 0===i?void 0:i.includes("horizontal"),k=v?{width:752,height:785}:N?{width:228,height:153}:w?{width:143,height:96}:{width:364,height:205};return(0,o.jsxs)("article",{className:j,children:[(0,o.jsx)(r.r,{href:h,className:u()["blog-item__image"],children:(0,o.jsx)(n.E,(0,s.Z)((0,a.Z)({src:g},k),{layout:"responsive",modifiers:"rounded",isLazy:!0,alt:p}))}),(0,o.jsx)("time",{className:u()["blog-item__time"],dateTime:"".concat(f.getFullYear(),"-").concat(f.getMonth()+1,"-").concat(f.getDate()),children:f.toDateString()}),(0,o.jsx)(r.r,{href:h,className:u()["blog-item__link"],children:(0,o.jsx)(l.X,{className:u()["blog-item__title"],tag:v?"h2":N||w?"h6":"h5",modifiers:v?"section":void 0,children:p})}),(0,o.jsx)(c.x,{className:u()["blog-item__sub"],children:b})]})}},2330:function(e,i,t){"use strict";t.d(i,{p:function(){return m}});var a=t(5893),s=t(9337),o=t(1477),l=t(6779),n=t(59),r=t(3665),c=t.n(r),m=function(e){var i=e.className,t=void 0===i?"":i,r=e.title,m=e.submitText,d=(0,n.G_)("box-subscribe",c()),u=(0,n.n8)(d,t);return(0,a.jsxs)("form",{className:u,children:[(0,a.jsx)(o.X,{className:c()["box-subscribe__heading"],tag:"h3",children:r}),(0,a.jsx)(l.I,{className:c()["box-subscribe__email"],placeholder:"example@gmail.com",name:"email",type:"email",modifiers:"black"}),(0,a.jsx)(s.z,{className:c()["box-subscribe__button"],type:"submit",children:m})]})}},1522:function(e,i,t){"use strict";t.d(i,{$:function(){return r}});var a=t(5893),s=t(1477),o=t(59),l=t(858),n=t.n(l),r=function(e){var i=e.children,t=e.title,l=e.className,r=void 0===l?"":l,c=(0,o.G_)("box-title",n()),m=(0,o.n8)(c,r);return(0,a.jsxs)("div",{className:m,children:[(0,a.jsx)(s.X,{className:n()["box-title__title"],tag:"h6",children:t}),(0,a.jsx)("div",{className:n()["box-title__content"],children:i})]})}},1902:function(e,i,t){"use strict";t.d(i,{a:function(){return r}});var a=t(5893),s=t(59),o=t(7294),l=t(1076),n=t.n(l),r=function(e){var i=e.children,t=e.className,l=void 0===t?"":t,r=(0,s.G_)("breadcrumb",n()),c="".concat(r," ").concat(l).trim();return(0,a.jsx)("ul",{className:c,children:o.Children.toArray(i).map((function(e,i){return(0,a.jsx)("li",{className:n().breadcrumb__item,children:e},i)}))})}},48:function(e,i,t){"use strict";t.d(i,{B:function(){return m}});var a=t(1799),s=t(9534),o=t(5893),l=t(2599),n=t(59),r=t(2923),c=t.n(r),m=function(e){var i=e.label,t=e.className,r=void 0===t?"":t,m=e.isError,d=e.errorMessage,u=e.isMultiLine,p=e.type,g=void 0===p?"text":p,b=e.sub,_=(0,s.Z)(e,["label","className","isError","errorMessage","isMultiLine","type","sub"]),h=(0,n.G_)("input-group",c(),m&&"error",u&&"multi-line"),x="".concat(h," ").concat(r).trim(),j=u?"textarea":"input";return(0,o.jsxs)("label",{className:x,children:[(0,o.jsx)("span",{className:c()["input-group__label"],children:i}),(0,o.jsx)(j,(0,a.Z)({className:c()["input-group__input"],type:g},_)),d&&m&&(0,o.jsx)("span",{className:c()["input-group__error"],children:d}),b&&(0,o.jsx)(l.x,{tag:"span",className:c()["input-group__sub"],children:b})]})}},804:function(e,i,t){"use strict";t.d(i,{l:function(){return b}});var a=t(1799),s=t(9396),o=t(9534),l=t(5893),n=t(9337),r=t(1477),c=t(48),m=t(7232),d=t(59),u=t(1650),p=t(9915),g=t.n(p),b=function(e){var i=e.className,t=void 0===i?"":i,p=e.titlePack,b=e.idPack,_=(0,o.Z)(e,["className","titlePack","idPack"]),h=(0,u.$G)("common").t,x=(0,d.G_)("modal-choose-plan",g()),j=(0,d.n8)(x,t),f=h("can-blank");return(0,l.jsxs)(m.u,(0,s.Z)((0,a.Z)({className:j},_),{children:[(0,l.jsxs)(r.X,{tag:"div",modifiers:"section",className:g()["modal-choose-plan__heading"],children:[h("choose-plan")," ",(0,l.jsx)("span",{children:"-"})," ",(0,l.jsx)("span",{children:p})]}),(0,l.jsxs)("form",{action:"",children:[(0,l.jsx)("input",{type:"hidden",name:"idpack",value:b}),(0,l.jsx)(c.B,{className:g()["modal-choose-plan__input-group"],name:"name",label:h("form-plan.name"),placeholder:h("form-plan.name-placeholder"),errorMessage:f}),(0,l.jsx)(c.B,{className:g()["modal-choose-plan__input-group"],name:"email",label:h("form-plan.email"),placeholder:h("form-plan.email-placeholder"),errorMessage:f,type:"email"}),(0,l.jsx)(c.B,{className:g()["modal-choose-plan__input-group"],name:"phone",label:h("form-plan.phone"),placeholder:h("form-plan.phone-placeholder"),errorMessage:f,isError:!0}),(0,l.jsx)(n.z,{className:g()["modal-choose-plan__button"],type:"submit",children:h("form-plan.submit")})]})]}))}},7232:function(e,i,t){"use strict";t.d(i,{u:function(){return u}});var a=t(5893),s=t(59),o=t(7294),l=t(3197),n=t.n(l),r=function(e){var i=e.className,t=void 0===i?"":i,l=e.isActive,r=e.onClick,c=e.modifiers,m=(0,s.G_)("backdrop",n(),c,l&&"show"),d="".concat(m," ").concat(t).trim(),u=(0,o.useCallback)((function(e){r&&r(e)}),[r]);return(0,a.jsx)("div",{className:d,onClick:u})},c=t(4790),m=t(9259),d=t.n(m),u=function(e){var i=e.children,t=e.className,o=void 0===t?"":t,l=e.isActive,n=e.onClose,m=(0,s.G_)("modal",d(),l&&"active"),u=(0,s.n8)(m,o);return(0,a.jsxs)("div",{className:u,children:[(0,a.jsx)(r,{isActive:l,onClick:n}),(0,a.jsx)("div",{className:d().modal__wrapper,children:(0,a.jsxs)("div",{className:d().modal__container,children:[(0,a.jsx)(c.J,{modifiers:"close",onClick:n,className:d().modal__close}),i]})})]})}},6117:function(e,i,t){"use strict";t.d(i,{J:function(){return c}});var a=t(5893),s=t(1477),o=t(2599),l=t(59),n=t(4323),r=t.n(n),c=function(e){var i=e.modifiers,t=e.price,n=e.title,c=e.desc,m=e.className,d=void 0===m?"":m,u=e.button,p=e.tag,g=e.children,b=(0,l.G_)("pack-item",r(),i),_=(0,l.n8)(b,d);return(0,a.jsxs)("div",{className:_,children:[(0,a.jsx)(s.X,{tag:"h3",className:r()["pack-item__title"],children:n}),t&&(0,a.jsxs)("div",{className:r()["pack-item__price"],children:[(0,a.jsxs)("span",{className:r()["pack-item__number"],children:["$",t]}),(0,a.jsx)("span",{className:r()["pack-item__unit"],children:"/month"})]}),c&&(0,a.jsx)(o.x,{className:r()["pack-item__desc"],children:c}),g&&(0,a.jsx)("div",{className:r()["pack-item__check-list"],children:g}),p&&(0,a.jsx)("span",{className:r()["pack-item__tag"],children:p}),(0,a.jsx)("div",{className:r()["pack-item__button-container"],children:u})]})}},2694:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return L}});var a=t(5893),s=t(1954),o=t(1477),l=t(59),n=t(7294),r=t(8352),c=t(245),m=t.n(c),d=(t(933),function(e){var i=e.children,t=e.className,s=void 0===t?"":t,c=e.title,d=(0,l.G_)("blog-related",m()),u=(0,l.n8)(d,s);return(0,a.jsxs)("div",{className:u,children:[(0,a.jsx)(o.X,{tag:"h5",className:m()["blog-related__heading"],modifiers:"border-inline",children:c}),(0,a.jsx)("div",{className:m()["blog-related__wrapper-slider"],children:(0,a.jsx)(r.tq,{className:m()["blog-related__slider"],slidesPerView:"auto",spaceBetween:20,children:n.Children.toArray(i).map((function(e,i){return(0,a.jsx)(r.o5,{className:m()["blog-related__item"],children:e},i)}))})})]})}),u=t(2330),p=t(1522),g=t(1902),b=t(9337),_=t(315),h=t(2882),x=t(6472),j=t(8821),f=t(7392),v=t(804),N=t(6117),w=t(6768),k=t(8383),q=t(2599),y=t(7557),z=t.n(y),L=function(){var e=(0,n.useState)(!1),i=e[0],t=e[1],l=(0,n.useCallback)((function(){return t(!0)}),[]),r=(0,n.useCallback)((function(){return t(!1)}),[]),c=new Date("2021-05-23");return(0,a.jsx)(w.T,{id:"blog-detail",className:z()["blog-detail"],title:"How To Write A Business Plan \u2013 Starting A Business Beginning | Blog",children:(0,a.jsxs)(x.v,{modifiers:"padding-bottom",children:[(0,a.jsx)(o.X,{className:z()["blog-detail__title"],modifiers:["page","border-bottom"],tag:"div",children:"Blog & News"}),(0,a.jsxs)(h.W,{className:z()["blog-detail__container"],children:[(0,a.jsxs)(g.a,{className:z()["blog-detail__breadcrumb"],children:[(0,a.jsx)(f.r,{href:"/",children:"Home"}),(0,a.jsx)(f.r,{href:"/blog",children:"Blogs"})]}),(0,a.jsxs)(k.X,{gutter:"24",children:[(0,a.jsxs)(_.s,{col:8,className:z()["blog-detail__column-content"],children:[(0,a.jsxs)("section",{children:[(0,a.jsx)("time",{className:z()["blog-detail__time"],dateTime:"".concat(c.getFullYear(),"-").concat(c.getMonth()+1,"-").concat(c.getDate()),children:c.toDateString()}),(0,a.jsx)(o.X,{tag:"h1",modifiers:"section",className:z()["blog-detail__heading"],children:"How to Write A Business Plan - Starting A Business beginning"}),(0,a.jsx)(j.E,{width:752,height:485,src:"/images/career/image-1.jpeg",isLazy:!0,alt:"How to Write A Business Plan - Starting A Business beginning"}),(0,a.jsxs)(q.x,{tag:"div",className:"blog-detail__content",children:[(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."}),(0,a.jsx)("blockquote",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."}),(0,a.jsx)(o.X,{tag:"h2",modifiers:"section",children:"Lorem ipsum dolor sit amet"}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."})]})]}),(0,a.jsxs)(d,{className:z()["blog-detail__blog-related"],title:"You may like these too",children:[(0,a.jsx)(s.l,{date:"2021-05-23",imgSrc:"/images/blog/image-3.jpeg",modifiers:"small",sub:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam laoreet dolore magna aliquam",title:"How to Write A Business Plan \u2013 Starting A Business beginning",href:"/blog/post-2"}),(0,a.jsx)(s.l,{date:"2021-05-23",imgSrc:"/images/blog/image-4.jpeg",modifiers:"small",sub:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam laoreet dolore magna aliquam",title:"How to Write A Business Plan \u2013 Starting A Business beginning",href:"/blog/post-3"}),(0,a.jsx)(s.l,{date:"2021-05-23",imgSrc:"/images/blog/image-5.jpeg",modifiers:"small",sub:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam laoreet dolore magna aliquam",title:"How to Write A Business Plan \u2013 Starting A Business beginning",href:"/blog/post-4"})]})]}),(0,a.jsxs)(_.s,{col:4,className:z()["blog-detail__column-sidebar"],children:[(0,a.jsx)(u.p,{submitText:"Submit",title:"Subscribe to Our Newsletter"}),(0,a.jsxs)(p.$,{className:z()["blog-detail__box-title"],title:"Hot News",children:[(0,a.jsx)(s.l,{date:"2021-05-23",imgSrc:"/images/blog/hot-new-1.jpeg",modifiers:"horizontal",sub:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam laoreet dolore magna aliquam",title:"The Study Shows Who the Leading Who the Leading",href:"/blog/post-2",className:z()["blog-detail__blog-item"]}),(0,a.jsx)(s.l,{date:"2021-05-23",imgSrc:"/images/blog/hot-new-2.jpeg",modifiers:"horizontal",sub:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam laoreet dolore magna aliquam",title:"The Study Shows Who the Leading Who the Leading",href:"/blog/post-3",className:z()["blog-detail__blog-item"]}),(0,a.jsx)(s.l,{date:"2021-05-23",imgSrc:"/images/blog/hot-new-3.jpeg",modifiers:"horizontal",sub:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam laoreet dolore magna aliquam",title:"The Study Shows Who the Leading Who the Leading",href:"/blog/post-4",className:z()["blog-detail__blog-item"]})]}),(0,a.jsxs)(p.$,{className:z()["blog-detail__box-title"],title:"Service packages",children:[(0,a.jsx)(N.J,{modifiers:"small",desc:"For most businesses that want to optimize web queries",price:"20",title:"Intro",button:(0,a.jsx)(b.z,{modifiers:["outline","pink"],onClick:l,children:"Choose plan"}),className:z()["blog-detail__pack-item"]}),(0,a.jsx)(N.J,{modifiers:["small","highlight"],desc:"For most businesses that want to optimize web queries",price:"100",title:"Pro",button:(0,a.jsx)(b.z,{modifiers:["pink"],onClick:l,children:"Choose plan"}),tag:"MOST POPULAR",className:z()["blog-detail__pack-item"]}),(0,a.jsx)(N.J,{modifiers:"small",desc:"For most businesses that want to optimize web queries",price:"50",title:"Base",button:(0,a.jsx)(b.z,{modifiers:["outline","pink"],onClick:l,children:"Choose plan"}),className:z()["blog-detail__pack-item"]}),(0,a.jsx)(N.J,{modifiers:"small",desc:"For most businesses that want to optimize web queries",price:"200",title:"Enterprise",button:(0,a.jsx)(b.z,{modifiers:["outline","pink"],onClick:l,children:"Choose plan"}),className:z()["blog-detail__pack-item"]})]})]})]})]}),(0,a.jsx)(v.l,{titlePack:"title pack",idPack:"enterprise",isActive:i,onClose:r})]})})}},3197:function(e){e.exports={backdrop:"ryb3a","backdrop--show":"nob3c","backdrop--block":"sb2nr"}},3530:function(e){e.exports={"blog-item":"gvtnw","blog-item__time":"_0aw1l","blog-item__title":"rsztq","blog-item__link":"saw5r","blog-item__sub":"_9zdwi","blog-item--big":"_1iawc","blog-item--small":"wfsba","blog-item--horizontal":"udgfs","blog-item__image":"wfnzq"}},245:function(e){e.exports={"blog-related__heading":"w5nmq","blog-related__slider":"lkzxi","blog-related":"hdgvk","blog-related__item":"pdgvt"}},3665:function(e){e.exports={"box-subscribe":"mlizq","box-subscribe__heading":"gluzw","box-subscribe__email":"_1haww","box-subscribe__button":"_0dg9u"}},858:function(e){e.exports={"box-title":"pdgxl","box-title__title":"xrszq","box-title__content":"_0zw50"}},1076:function(e){e.exports={breadcrumb:"nvtyg",breadcrumb__item:"xrlbq"}},2923:function(e){e.exports={"input-group":"jvdxa","input-group__label":"hymvs","input-group__input":"uchv0","input-group__error":"ycm9y","input-group__sub":"_3n1yg","input-group--error":"m9ymq","input-group--multi-line":"xpbmu"}},9915:function(e){e.exports={"modal-choose-plan":"bsyw4","modal-choose-plan__heading":"rpbmc","modal-choose-plan__input-group":"yb3vw","modal-choose-plan__button":"hrvbg"}},9259:function(e){e.exports={modal:"_9kyww",modal__wrapper:"wzxix",modal__container:"_5lcjq",modal__close:"sb3nl","modal--active":"gl2zq"}},4323:function(e){e.exports={"pack-item":"gvtoa","pack-item__title":"rsztu","pack-item__price":"ljzti","pack-item__number":"_1izxi","pack-item__unit":"_1bml0","pack-item__desc":"xnjmq","pack-item__button-container":"mvynw","pack-item__tag":"_90ywc","pack-item__check-list":"xn0mg","pack-item--cate":"jyxrl","pack-item--highlight":"lnahq","pack-item--small":"fsbde"}},7557:function(e){e.exports={"blog-detail__title":"gxlmg","blog-detail__container":"w5lcg","blog-detail__breadcrumb":"j1bwi","blog-detail__column-content":"w50mq","blog-detail__column-sidebar":"lymfy","blog-detail__time":"rpbwu","blog-detail__heading":"pbmcx","blog-detail__blog-related":"xrlza","blog-detail__box-title":"rszti","blog-detail__blog-item":"rlbti","blog-detail__pack-item":"rlbtm"}}},function(e){e.O(0,[147,666,149,794,774,888,179],(function(){return i=3972,e(e.s=i);var i}));var i=e.O();_N_E=i}]);
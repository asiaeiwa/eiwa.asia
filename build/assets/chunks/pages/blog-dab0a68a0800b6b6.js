(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return s(1391)}])},1954:function(e,i,s){"use strict";s.d(i,{l:function(){return u}});var t=s(1799),l=s(9396),o=s(5893),a=s(1477),n=s(8821),c=s(7392),r=s(2599),m=s(5708),d=s(3530),b=s.n(d),u=function(e){var i=e.modifiers,s=e.className,d=void 0===s?"":s,u=e.title,_=e.imgSrc,p=e.sub,g=e.date,x=e.href,h=(0,m.G)("blog-item",b(),i),j=(0,m.n)(h,d),f=g?new Date(g):new Date,v=null===i||void 0===i?void 0:i.includes("big"),N=null===i||void 0===i?void 0:i.includes("small"),k=null===i||void 0===i?void 0:i.includes("horizontal"),w=v?{width:752,height:785}:N?{width:228,height:153}:k?{width:143,height:96}:{width:364,height:205};return(0,o.jsxs)("article",{className:j,children:[(0,o.jsx)(c.r,{href:x,className:b()["blog-item__image"],children:(0,o.jsx)(n.E,(0,l.Z)((0,t.Z)({src:_},w),{layout:"responsive",modifiers:"rounded",isLazy:!0,alt:u}))}),(0,o.jsx)("time",{className:b()["blog-item__time"],dateTime:"".concat(f.getFullYear(),"-").concat(f.getMonth()+1,"-").concat(f.getDate()),children:f.toDateString()}),(0,o.jsx)(c.r,{href:x,className:b()["blog-item__link"],children:(0,o.jsx)(a.X,{className:b()["blog-item__title"],tag:v?"h2":N||k?"h6":"h5",modifiers:v?"section":void 0,children:u})}),(0,o.jsx)(r.x,{className:b()["blog-item__sub"],children:p})]})}},2330:function(e,i,s){"use strict";s.d(i,{p:function(){return m}});var t=s(5893),l=s(9337),o=s(1477),a=s(6779),n=s(5708),c=s(3665),r=s.n(c),m=function(e){var i=e.className,s=void 0===i?"":i,c=e.title,m=e.submitText,d=(0,n.G)("box-subscribe",r()),b=(0,n.n)(d,s);return(0,t.jsxs)("form",{className:b,children:[(0,t.jsx)(o.X,{className:r()["box-subscribe__heading"],tag:"h3",children:c}),(0,t.jsx)(a.I,{className:r()["box-subscribe__email"],placeholder:"example@gmail.com",name:"email",type:"email",modifiers:"black"}),(0,t.jsx)(l.z,{className:r()["box-subscribe__button"],type:"submit",children:m})]})}},1522:function(e,i,s){"use strict";s.d(i,{$:function(){return c}});var t=s(5893),l=s(1477),o=s(5708),a=s(858),n=s.n(a),c=function(e){var i=e.children,s=e.title,a=e.className,c=void 0===a?"":a,r=(0,o.G)("box-title",n()),m=(0,o.n)(r,c);return(0,t.jsxs)("div",{className:m,children:[(0,t.jsx)(l.X,{className:n()["box-title__title"],tag:"h6",children:s}),(0,t.jsx)("div",{className:n()["box-title__content"],children:i})]})}},48:function(e,i,s){"use strict";s.d(i,{B:function(){return m}});var t=s(1799),l=s(9534),o=s(5893),a=s(2599),n=s(5708),c=s(2923),r=s.n(c),m=function(e){var i=e.label,s=e.className,c=void 0===s?"":s,m=e.isError,d=e.errorMessage,b=e.isMultiLine,u=e.type,_=void 0===u?"text":u,p=e.sub,g=(0,l.Z)(e,["label","className","isError","errorMessage","isMultiLine","type","sub"]),x=(0,n.G)("input-group",r(),m&&"error",b&&"multi-line"),h="".concat(x," ").concat(c).trim(),j=b?"textarea":"input";return(0,o.jsxs)("label",{className:h,children:[(0,o.jsx)("span",{className:r()["input-group__label"],children:i}),(0,o.jsx)(j,(0,t.Z)({className:r()["input-group__input"],type:_},g)),d&&m&&(0,o.jsx)("span",{className:r()["input-group__error"],children:d}),p&&(0,o.jsx)(a.x,{tag:"span",className:r()["input-group__sub"],children:p})]})}},804:function(e,i,s){"use strict";s.d(i,{l:function(){return p}});var t=s(1799),l=s(9396),o=s(9534),a=s(5893),n=s(9337),c=s(1477),r=s(48),m=s(7232),d=s(5708),b=s(1650),u=s(9915),_=s.n(u),p=function(e){var i=e.className,s=void 0===i?"":i,u=e.titlePack,p=e.idPack,g=(0,o.Z)(e,["className","titlePack","idPack"]),x=(0,b.$G)("common").t,h=(0,d.G)("modal-choose-plan",_()),j=(0,d.n)(h,s),f=x("can-blank");return(0,a.jsxs)(m.u,(0,l.Z)((0,t.Z)({className:j},g),{children:[(0,a.jsxs)(c.X,{tag:"div",modifiers:"section",className:_()["modal-choose-plan__heading"],children:[x("choose-plan")," ",(0,a.jsx)("span",{children:"-"})," ",(0,a.jsx)("span",{children:u})]}),(0,a.jsxs)("form",{action:"",children:[(0,a.jsx)("input",{type:"hidden",name:"idpack",value:p}),(0,a.jsx)(r.B,{className:_()["modal-choose-plan__input-group"],name:"name",label:x("form-plan.name"),placeholder:x("form-plan.name-placeholder"),errorMessage:f}),(0,a.jsx)(r.B,{className:_()["modal-choose-plan__input-group"],name:"email",label:x("form-plan.email"),placeholder:x("form-plan.email-placeholder"),errorMessage:f,type:"email"}),(0,a.jsx)(r.B,{className:_()["modal-choose-plan__input-group"],name:"phone",label:x("form-plan.phone"),placeholder:x("form-plan.phone-placeholder"),errorMessage:f,isError:!0}),(0,a.jsx)(n.z,{className:_()["modal-choose-plan__button"],type:"submit",children:x("form-plan.submit")})]})]}))}},7232:function(e,i,s){"use strict";s.d(i,{u:function(){return b}});var t=s(5893),l=s(5708),o=s(7294),a=s(3197),n=s.n(a),c=function(e){var i=e.className,s=void 0===i?"":i,a=e.isActive,c=e.onClick,r=e.modifiers,m=(0,l.G)("backdrop",n(),r,a&&"show"),d="".concat(m," ").concat(s).trim(),b=(0,o.useCallback)((function(e){c&&c(e)}),[c]);return(0,t.jsx)("div",{className:d,onClick:b})},r=s(4790),m=s(9259),d=s.n(m),b=function(e){var i=e.children,s=e.className,o=void 0===s?"":s,a=e.isActive,n=e.onClose,m=(0,l.G)("modal",d(),a&&"active"),b=(0,l.n)(m,o);return(0,t.jsxs)("div",{className:b,children:[(0,t.jsx)(c,{isActive:a,onClick:n}),(0,t.jsx)("div",{className:d().modal__wrapper,children:(0,t.jsxs)("div",{className:d().modal__container,children:[(0,t.jsx)(r.J,{modifiers:"close",onClick:n,className:d().modal__close}),i]})})]})}},6117:function(e,i,s){"use strict";s.d(i,{J:function(){return r}});var t=s(5893),l=s(1477),o=s(2599),a=s(5708),n=s(4323),c=s.n(n),r=function(e){var i=e.modifiers,s=e.price,n=e.title,r=e.desc,m=e.className,d=void 0===m?"":m,b=e.button,u=e.tag,_=e.children,p=(0,a.G)("pack-item",c(),i),g=(0,a.n)(p,d);return(0,t.jsxs)("div",{className:g,children:[(0,t.jsx)(l.X,{tag:"h3",className:c()["pack-item__title"],children:n}),s&&(0,t.jsxs)("div",{className:c()["pack-item__price"],children:[(0,t.jsxs)("span",{className:c()["pack-item__number"],children:["$",s]}),(0,t.jsx)("span",{className:c()["pack-item__unit"],children:"/month"})]}),r&&(0,t.jsx)(o.x,{className:c()["pack-item__desc"],children:r}),_&&(0,t.jsx)("div",{className:c()["pack-item__check-list"],children:_}),u&&(0,t.jsx)("span",{className:c()["pack-item__tag"],children:u}),(0,t.jsx)("div",{className:c()["pack-item__button-container"],children:b})]})}},1391:function(e,i,s){"use strict";s.r(i),s.d(i,{__N_SSG:function(){return f}});var t=s(5893),l=s(1954),o=s(2330),a=s(1522),n=s(9337),c=s(315),r=s(2882),m=s(6472),d=s(1477),b=s(804),u=s(6117),_=s(6768),p=s(8383),g=s(7294),x=s(1650),h=s(4367),j=s.n(h),f=!0;i.default=function(){var e=(0,x.$G)("blog").t,i=(0,g.useState)(!1),s=i[0],h=i[1],f=(0,g.useCallback)((function(){return h(!0)}),[]),v=(0,g.useCallback)((function(){return h(!1)}),[]);return(0,t.jsx)(_.T,{id:"blog",className:j().blog,title:e("title"),description:e("description"),keywords:e("keywords"),children:(0,t.jsxs)(m.v,{modifiers:"padding-bottom",children:[(0,t.jsx)(d.X,{className:j().blog__title,modifiers:["page","border-bottom"],tag:"h1",children:e("heading")}),(0,t.jsx)(r.W,{className:j().blog__container,children:(0,t.jsxs)(p.X,{gutter:"24",children:[(0,t.jsxs)(c.s,{col:8,className:j()["blog__column-content"],children:[(0,t.jsx)(l.l,{date:e("content.01.date"),imgSrc:"/images/blog/image-1.jpeg",sub:e("content.01.sub"),title:e("content.01.title"),modifiers:"big",href:"/blog/post-1"}),(0,t.jsxs)(p.X,{gutter:"24",className:j().blog__list,children:[(0,t.jsx)(c.s,{col:"6",className:j().blog__column,children:(0,t.jsx)(l.l,{date:e("content.02.date"),imgSrc:"/images/blog/image-2.jpeg",sub:e("content.02.sub"),title:e("content.02.title"),href:"/blog/post-2"})}),(0,t.jsx)(c.s,{col:"6",className:j().blog__column,children:(0,t.jsx)(l.l,{date:e("content.03.date"),imgSrc:"/images/blog/image-3.jpeg",sub:e("content.03.sub"),title:e("content.03.title"),href:"/blog/post-3"})}),(0,t.jsx)(c.s,{col:"6",className:j().blog__column,children:(0,t.jsx)(l.l,{date:e("content.04.date"),imgSrc:"/images/blog/image-4.jpeg",sub:e("content.04.sub"),title:e("content.04.title"),href:"/blog/post-4"})}),(0,t.jsx)(c.s,{col:"6",className:j().blog__column,children:(0,t.jsx)(l.l,{date:e("content.05.date"),imgSrc:"/images/blog/image-5.jpeg",sub:e("content.05.sub"),title:e("content.05.title"),href:"/blog/post-5"})})]}),(0,t.jsx)("div",{className:j()["blog__load-more"],children:(0,t.jsxs)(n.z,{modifiers:"blue",children:[" ",e("load-more",{ns:"common"})]})})]}),(0,t.jsxs)(c.s,{col:4,className:j()["blog__column-sidebar"],children:[(0,t.jsx)(o.p,{submitText:e("sidebar.subscribe.submit"),title:e("sidebar.subscribe.title")}),(0,t.jsxs)(a.$,{className:j()["blog__box-title"],title:e("sidebar.box-news.title"),children:[(0,t.jsx)(l.l,{date:e("sidebar.box-news.01.date"),imgSrc:"/images/blog/hot-new-1.jpeg",modifiers:"horizontal",sub:e("sidebar.box-news.01.sub"),title:e("sidebar.box-news.01.title"),href:"/blog/post-1",className:j()["blog__blog-item"]}),(0,t.jsx)(l.l,{date:e("sidebar.box-news.02.date"),imgSrc:"/images/blog/hot-new-2.jpeg",modifiers:"horizontal",sub:e("sidebar.box-news.02.sub"),title:e("sidebar.box-news.02.title"),href:"/blog/post-2",className:j()["blog__blog-item"]}),(0,t.jsx)(l.l,{date:e("sidebar.box-news.03.date"),imgSrc:"/images/blog/hot-new-3.jpeg",modifiers:"horizontal",sub:e("sidebar.box-news.03.sub"),title:e("sidebar.box-news.03.title"),href:"/blog/post-3",className:j()["blog__blog-item"]})]}),(0,t.jsxs)(a.$,{className:j()["blog__box-title"],title:e("sidebar.box-service.titie"),children:[(0,t.jsx)(u.J,{modifiers:"small",desc:e("sidebar.box-service.01.desc"),price:e("sidebar.box-service.01.price"),title:e("sidebar.box-service.01.title"),button:(0,t.jsx)(n.z,{modifiers:["outline","pink"],onClick:f,children:e("choose-plan",{ns:"common"})}),className:j()["blog__pack-item"]}),(0,t.jsx)(u.J,{modifiers:["small","highlight"],desc:e("sidebar.box-service.02.desc"),price:e("sidebar.box-service.02.price"),title:e("sidebar.box-service.02.title"),button:(0,t.jsx)(n.z,{modifiers:["pink"],onClick:f,children:e("choose-plan",{ns:"common"})}),tag:e("sidebar.box-service.02.tag"),className:j()["blog__pack-item"]}),(0,t.jsx)(u.J,{modifiers:"small",desc:e("sidebar.box-service.03.desc"),price:e("sidebar.box-service.03.price"),title:e("sidebar.box-service.03.title"),button:(0,t.jsx)(n.z,{modifiers:["outline","pink"],onClick:f,children:e("choose-plan",{ns:"common"})}),className:j()["blog__pack-item"]}),(0,t.jsx)(u.J,{modifiers:"small",desc:e("sidebar.box-service.04.desc"),price:e("sidebar.box-service.04.price"),title:e("sidebar.box-service.04.title"),button:(0,t.jsx)(n.z,{modifiers:["outline","pink"],onClick:f,children:e("choose-plan",{ns:"common"})}),className:j()["blog__pack-item"]})]})]})]})}),(0,t.jsx)(b.l,{titlePack:"title pack",idPack:"enterprise",isActive:s,onClose:v})]})})}},3197:function(e){e.exports={backdrop:"yb3a","backdrop--show":"ob3c","backdrop--block":"b2nr"}},3530:function(e){e.exports={"blog-item":"vtng","blog-item__time":"aw1l","blog-item__title":"sztq","blog-item__link":"aw5r","blog-item__sub":"zdwi","blog-item--big":"iawc","blog-item--small":"fsba","blog-item--horizontal":"dgfs","blog-item__image":"nzti"}},3665:function(e){e.exports={"box-subscribe":"lizq","box-subscribe__heading":"luzw","box-subscribe__email":"haww","box-subscribe__button":"dg9u"}},858:function(e){e.exports={"box-title":"dgxl","box-title__title":"rszq","box-title__content":"zw50"}},2923:function(e){e.exports={"input-group":"vdxa","input-group__label":"ymvs","input-group__input":"chv0","input-group__error":"cm9y","input-group__sub":"n1yg","input-group--error":"_9ymq","input-group--multi-line":"pbmu"}},9915:function(e){e.exports={"modal-choose-plan":"syw4","modal-choose-plan__heading":"pbmc","modal-choose-plan__input-group":"b3vw","modal-choose-plan__button":"rvbg"}},9259:function(e){e.exports={modal:"kyww",modal__wrapper:"zxi4",modal__container:"lcju",modal__close:"b3nl","modal--active":"l2zq"}},4323:function(e){e.exports={"pack-item":"vtnw","pack-item__title":"sztu","pack-item__price":"jzte","pack-item__number":"izxi","pack-item__unit":"bml0","pack-item__desc":"zxnj","pack-item__button-container":"vynw","pack-item__tag":"_0ywc","pack-item__check-list":"axn0","pack-item--cate":"yxrl","pack-item--highlight":"nahq","pack-item--small":"sbde"}},4367:function(e){e.exports={blog__title:"_0bgu",blog__container:"vymg","blog__column-content":"bnqx","blog__column-sidebar":"iyxi","blog__box-title":"xlmg",blog__list:"lzda",blog__column:"_1umq","blog__load-more":"b3jl","blog__blog-item":"vtmw","blog__pack-item":"vtna"}}},function(e){e.O(0,[147,149,774,888,179],(function(){return i=7801,e(e.s=i);var i}));var i=e.O();_N_E=i}]);
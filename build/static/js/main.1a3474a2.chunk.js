(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1B1_q",summary:"CartItem_summary__3FMDj",price:"CartItem_price__2Nl0j",amount:"CartItem_amount__jUKEC",actions:"CartItem_actions__UwVPJ"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__2pjQw",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr","button--alt":"Cart_button--alt__1Z2QQ",button:"Cart_button__fw1-t"}},,,,function(e,t,n){e.exports={button:"HeaderCartButton_button__3CMOT",icon:"HeaderCartButton_icon__9KWtg",badge:"HeaderCartButton_badge__1Z3gL",bump:"HeaderCartButton_bump__3atD4"}},function(e,t,n){e.exports={meal:"AuctionItem_meal__1FmVc",meal_img:"AuctionItem_meal_img__1_WAn",description:"AuctionItem_description__2emWw",price:"AuctionItem_price__2_w2m"}},,function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mfF6",modal:"Modal_modal__4DXUe","slide-down":"Modal_slide-down__W3MdX"}},,function(e,t,n){e.exports={header:"Header_header__zSTUo","main-image":"Header_main-image__2Q3So"}},function(e,t,n){e.exports={timer:"Timer_timer__2VyBD"}},function(e,t,n){e.exports={summary:"AuctionsSummary_summary__kNCKV"}},function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={meals:"AvailableAuctions_meals__2gTgv","meals-appear":"AvailableAuctions_meals-appear__1BwZ4"}},function(e,t,n){e.exports={input:"Input_input__2swPp"}},function(e,t,n){e.exports={form:"AuctionItemForm_form__VBW6O"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(5),a=n.n(c),i=(n(25),n(2)),r=n(1),s=n.n(r),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},m=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),u=n(8),d=n.n(u),j=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(r.useContext)(m).items,u=s.reduce((function(e,t){return e+t.amount}),0),j="".concat(d.a.button," ").concat(c?d.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(o.jsxs)("button",{className:j,onClick:e.onClick,children:[Object(o.jsx)("span",{className:d.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:d.a.badge,children:u})]})},b=n.p+"static/media/main1.ffbd4ed3.jpg",p=n(13),O=n.n(p),h=function(e){return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsxs)("header",{className:O.a.header,children:[Object(o.jsx)("h1",{children:"Auction"}),Object(o.jsx)(j,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:O.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},x=n(15),_=n.n(x),f=function(){return Object(o.jsxs)("section",{className:_.a.summary,children:[Object(o.jsx)("h2",{children:"Welcome to Our Auction Page"}),Object(o.jsx)("p",{children:"blah vlah"}),Object(o.jsx)("p",{children:"blah vlah blah vlah!"})]})},v=n(16),g=n.n(v),C=function(e){return Object(o.jsx)("div",{className:g.a.card,children:e.children})},A=n(17),N=n.n(A),y=n(7),w=n(18),I=n.n(w),B=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:I.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(y.a)({ref:t},e.input))]})})),S=n(19),F=n.n(S),M=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(r.useRef)(),l=+e.upPrice;l+=.1*l;return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{className:F.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=+n;console.log(n),0===n.trim().length||c<1?a(!1):(e.onAddToCart(1,n),e.onPriceUpdate(n))},children:[Object(o.jsx)(B,{ref:s,label:"Bid Amount Rs. ",input:{id:"amount",type:"number",min:l.toFixed(0),defaultValue:l.toFixed(0)}}),Object(o.jsx)("button",{children:" Bid"}),!c&&Object(o.jsx)("p",{children:"Please enter a valid amount"})]})})},H=n(9),k=n.n(H),P=n(14),D=n.n(P),T=!0,J=function(e){var t=Object(r.useState)("00"),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)("00"),l=Object(i.a)(s,2),m=l[0],u=l[1],d=Object(r.useState)("00"),j=Object(i.a)(d,2),b=j[0],p=j[1],O=Object(r.useState)("00"),h=Object(i.a)(O,2),x=h[0],_=h[1],f=Object(r.useRef)();return Object(r.useEffect)((function(){T=function(){var t=new Date("".concat(e.due)).getTime();f=setInterval((function(){var e=(new Date).getTime(),n=t-e,c=Math.floor(n/864e5),i=Math.floor(n%864e5/36e5),r=Math.floor(n%36e5/6e4),s=Math.floor(n%6e4/1e3);if(s,n<=0)return clearInterval(f.current),!1;a(c),u(i),p(r),_(s)}),1e3)}()})),T?Object(o.jsx)("h4",{className:D.a.timer,children:"Time UP!"}):Object(o.jsx)("div",{className:D.a.timer,children:Object(o.jsxs)("h4",{children:[c,Object(o.jsx)("small",{children:"D"}),":",m,Object(o.jsx)("small",{children:"h"}),":",b,Object(o.jsx)("small",{children:"m"}),":",x,"s"]})})},R=function(e){var t=Object(r.useContext)(m),n=e.meal,c=Object(r.useState)(n.price),a=Object(i.a)(c,2),s=a[0],l=a[1],u="Base Price:Rs.".concat(n.price.toFixed(2));return Object(o.jsxs)("div",{className:k.a.meal,children:[Object(o.jsx)("img",{className:k.a.meal_img,src:n.src,alt:""}),Object(o.jsx)(J,{due:n.due}),Object(o.jsx)("h3",{children:n.name}),Object(o.jsx)("div",{className:k.a.description,children:n.description}),Object(o.jsx)("div",{className:k.a.price,children:u}),Object(o.jsx)(M,{onAddToCart:function(e,c){t.addItem({id:n.id,name:n.name,amount:e,price:c})},price:n.price.toFixed(0),onPriceUpdate:function(e){l(e)},upPrice:s})]})},E=n.p+"static/media/image2.984b1e13.jpg",V=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99,due:"July 30 2021 00:00:00",src:E},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5,due:"July 30 2021 00:00:00",src:n.p+"static/media/main.dd83ca35.jpg"},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99,due:"July 30 2021 00:00:00",src:E},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99,due:"July 30 2021 00:00:00",src:E},{id:"m5",name:"Sushi1",description:"Finest fish and veggies",price:22.99,due:"July 30 2021 00:00:00",src:E},{id:"m6",name:"Schnitzel1",description:"A german specialty!",price:16.5,due:"June 30 2021 00:00:00",src:E},{id:"m7",name:"Barbecue Burger1",description:"American, raw, meaty",price:12.99,due:"June 30 2022 00:00:00",src:E},{id:"m8",name:"Green Bowl1",description:"Healthy...and green...",price:18.99,due:"July 30 2020 00:00:00",src:E}],U=function(){var e=V.map((function(e){return Object(o.jsx)(R,{meal:e,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:N.a.meals,children:e.map((function(e){return Object(o.jsx)(C,{meal:e,children:e},e.key)}))})},z=function(){return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsx)(f,{}),Object(o.jsx)(U,{})]})},W=n(11),Q=n.n(W),G=function(e){return Object(o.jsx)("div",{className:Q.a.backdrop,onClick:e.onClose})},K=function(e){return Object(o.jsx)("div",{className:Q.a.modal,children:Object(o.jsx)("div",{className:Q.a.content,children:e.children})})},Z=document.getElementById("overlays"),L=function(e){return Object(o.jsxs)(r.Fragment,{children:[a.a.createPortal(Object(o.jsx)(G,{onClose:e.onClose}),Z),a.a.createPortal(Object(o.jsx)(K,{children:e.children}),Z)]})},X=n(3),q=n.n(X),Y=function(e){var t="Rs. ".concat(e.price);return Object(o.jsxs)("li",{className:q.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:q.a.summary,children:[Object(o.jsx)("span",{className:q.a.price,children:t}),Object(o.jsxs)("span",{className:q.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsx)("div",{className:q.a.actions,children:Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"})})]})},$=n(4),ee=n.n($),te=function(e){var t=Object(r.useContext)(m),n="$".concat(t.totalAmount),c=t.items.length>0,a=function(e){t.removeItem(e)},i=Object(o.jsx)("ul",{className:ee.a["cart-items"],children:t.items.map((function(e){return Object(o.jsx)(Y,{name:e.name,amount:e.amount,price:e.price,onRemove:a.bind(null,e.id)},e.id)}))});return Object(o.jsxs)(L,{onClose:e.onClose,children:[i,Object(o.jsxs)("div",{className:ee.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:n})]}),Object(o.jsxs)("div",{className:ee.a.actions,children:[Object(o.jsx)("button",{className:ee.a["button--alt"],onClick:e.onClose,children:"Close"}),c&&Object(o.jsx)("button",{className:ee.a.button,children:"Order"})]})]})},ne=n(20),ce={items:[],totalAmount:0},ae=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+ +t.item.price,a=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[a];if(i&&(c-=i.price),i){var r=Object(y.a)(Object(y.a)({},i),{},{price:t.item.price});(n=Object(ne.a)(e.items))[a]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],m=e.totalAmount-l.price;return 1===l.amount&&(s=e.items.filter((function(e){return e.id!==t.id}))),{items:s,totalAmount:m}}return ce},ie=function(e){var t=Object(r.useReducer)(ae,ce),n=Object(i.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})}};return Object(o.jsx)(m.Provider,{value:s,children:e.children})};var re=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(ie,{children:[n&&Object(o.jsx)(te,{onClose:function(){c(!1)}}),Object(o.jsx)(h,{onShowCart:function(){c(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(z,{})}),Object(o.jsx)("footer",{children:Object(o.jsx)("h1",{children:Object(o.jsx)("center",{children:"Hi!! im Footer"})})})]})};a.a.render(Object(o.jsx)(re,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.1a3474a2.chunk.js.map
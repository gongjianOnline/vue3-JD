(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["OrderConfimation"],{"04e5":function(t,e,c){"use strict";c("d189")},"0d54":function(t,e,c){"use strict";c.r(e);var r=c("7a23"),n=Object(r["I"])("data-v-1687ed90");Object(r["t"])("data-v-1687ed90");var a={class:"wrapper"};Object(r["r"])();var i=n((function(t,e,c,n,i,o){var s=Object(r["x"])("TopArea"),u=Object(r["x"])("ProductList"),d=Object(r["x"])("Order");return Object(r["q"])(),Object(r["d"])("div",a,[Object(r["h"])(s),Object(r["h"])(u),Object(r["h"])(d)])})),o=Object(r["I"])("data-v-d6cf08ec");Object(r["t"])("data-v-d6cf08ec");var s={class:"top"},u={class:"top_header"},d=Object(r["h"])("use",{"xlink:href":"#iconback"},null,-1),b=Object(r["g"])(" 确认订单 "),l=Object(r["h"])("div",{class:"top_receiver"},[Object(r["h"])("div",{class:"top_receiver_title"},"收货地址"),Object(r["h"])("div",{class:"top_receiver_address"},"南开大学远程教育学院"),Object(r["h"])("div",{class:"top_receiver_info"},[Object(r["h"])("span",{class:"top_receiver_info_name"},"小明"),Object(r["h"])("span",{class:"top_receiver_info_name"},"15031616161")]),Object(r["h"])("div",{class:"right"},[Object(r["h"])("svg",{class:"icon","aria-hidden":"true"},[Object(r["h"])("use",{"xlink:href":"#iconback-right"})])])],-1);Object(r["r"])();var O=o((function(t,e,c,n,a,i){return Object(r["q"])(),Object(r["d"])("div",s,[Object(r["h"])("div",u,[(Object(r["q"])(),Object(r["d"])("svg",{class:"icon iconback","aria-hidden":"true",onClick:e[1]||(e[1]=function(){return n.handleBackClick&&n.handleBackClick.apply(n,arguments)})},[d])),b]),l])})),h=c("6c02"),v={name:"TopArea",setup:function(){var t=Object(h["d"])(),e=function(){t.back()};return{handleBackClick:e}}};c("f7ba");v.render=O,v.__scopeId="data-v-d6cf08ec";var f=v,p=(c("b0c0"),c("b680"),Object(r["I"])("data-v-6b8e6a35"));Object(r["t"])("data-v-6b8e6a35");var j={class:"products"},m={class:"products_title"},_={class:"products_wrapper"},k={class:"products_list"},C={class:"products_item_detail"},g={class:"products_item_title"},w={class:"products_item_price"},x={class:""},I=Object(r["h"])("span",{class:"products_item_yen"},"¥",-1),L={class:"products_item_total"},N=Object(r["h"])("span",{class:"products_item_yen"},"¥",-1);Object(r["r"])();var F=p((function(t,e,c,n,a,i){return Object(r["q"])(),Object(r["d"])("div",j,[Object(r["h"])("div",m,Object(r["z"])(n.shopName),1),Object(r["h"])("div",_,[Object(r["h"])("div",k,[(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(n.productList,(function(t){return Object(r["q"])(),Object(r["d"])("div",{key:t._id,class:"products_item"},[Object(r["h"])("img",{class:"products_item_img",src:t.imgUrl,alt:""},null,8,["src"]),Object(r["h"])("div",C,[Object(r["h"])("h4",g,Object(r["z"])(t.name),1),Object(r["h"])("p",w,[Object(r["h"])("span",x,[I,Object(r["g"])(Object(r["z"])(t.price)+" x "+Object(r["z"])(t.count),1)]),Object(r["h"])("span",L,[N,Object(r["g"])(Object(r["z"])((t.price*t.count).toFixed(2)),1)])])])])})),128))])])])})),S=c("75c9"),q={name:"ProductList",setup:function(){var t=Object(h["c"])(),e=t.params.id,c=Object(S["a"])(e),r=c.productList,n=c.shopName;return{productList:r,shopName:n}}};c("04e5");q.render=F,q.__scopeId="data-v-6b8e6a35";var y=q,z=Object(r["I"])("data-v-abc44bf4");Object(r["t"])("data-v-abc44bf4");var R={class:"order"},T={class:"order_price"},A=Object(r["g"])(" 实付金额 "),B=Object(r["h"])("h3",{class:"mask_content_title"},"确认要离开的收银台?",-1),E=Object(r["h"])("p",{class:"mask_content_desc"},"请尽快完成支付,否则将被取消",-1),P={class:"mask_content_btns"};Object(r["r"])();var D=z((function(t,e,c,n,a,i){return Object(r["q"])(),Object(r["d"])(r["a"],null,[Object(r["h"])("div",R,[Object(r["h"])("div",T,[A,Object(r["h"])("b",null,"￥"+Object(r["z"])(n.calculations.price),1)]),Object(r["h"])("div",{class:"order_btn",onClick:e[1]||(e[1]=function(){return n.handleSubmitClick(!0)})},"提交订单")]),Object(r["G"])(Object(r["h"])("div",{class:"mask",onClick:e[5]||(e[5]=function(){return n.handleSubmitClick(!1)})},[Object(r["h"])("div",{class:"mask_content",onClick:e[4]||(e[4]=Object(r["H"])((function(){}),["stop"]))},[B,E,Object(r["h"])("div",P,[Object(r["h"])("div",{class:"mask_content_btn mask_content_btn-first",onClick:e[2]||(e[2]=function(){return n.handleConfirmOrder(!0)})},"取消订单"),Object(r["h"])("div",{class:"mask_content_btn mask_content_btn-last",onClick:e[3]||(e[3]=function(){return n.handleConfirmOrder(!1)})},"确认支付")])])],512),[[r["D"],n.showConfirm]])],64)})),H=c("1da1"),J=(c("96cf"),c("b775")),G=c("5502"),M=function(t,e,c){var r=Object(h["d"])(),n=Object(G["b"])(),a=function(){var a=Object(H["a"])(regeneratorRuntime.mark((function a(i){var o,s,u,d,b;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(s in o=[],e.value)u=e.value[s],o.push({id:u._id,num:u.count});return a.prev=2,a.next=5,Object(J["b"])("/api/order",{addressId:1,shopId:c,shopName:t.value,isCanceled:i,products:o});case 5:b=a.sent,0===(null===b||void 0===b||null===(d=b.data)||void 0===d?void 0:d.errno)&&(n.commit("clearcarData",c),r.push({name:"Home"})),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](2),console.log("失败信息",a.t0);case 12:case"end":return a.stop()}}),a,null,[[2,9]])})));return function(t){return a.apply(this,arguments)}}();return{handleConfirmOrder:a}},U=function(){var t=Object(r["v"])(!1),e=function(e){t.value=e};return{handleSubmitClick:e,showConfirm:t}},W={name:"Order",setup:function(){var t=Object(h["c"])(),e=t.params.id,c=Object(S["a"])(e),r=c.calculations,n=c.shopName,a=c.productList,i=M(n,a,e),o=i.handleConfirmOrder,s=U(),u=s.handleSubmitClick,d=s.showConfirm;return{calculations:r,handleConfirmOrder:o,showConfirm:d,handleSubmitClick:u}}};c("ecb9");W.render=D,W.__scopeId="data-v-abc44bf4";var K=W,Q={name:"OrderConfirmation",components:{TopArea:f,ProductList:y,Order:K}};c("38e1");Q.render=i,Q.__scopeId="data-v-1687ed90";e["default"]=Q},1148:function(t,e,c){"use strict";var r=c("a691"),n=c("1d80");t.exports=function(t){var e=String(n(this)),c="",a=r(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(c+=e);return c}},1834:function(t,e,c){},"38e1":function(t,e,c){"use strict";c("5610")},"408a":function(t,e,c){var r=c("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},5610:function(t,e,c){},"75c9":function(t,e,c){"use strict";c.d(e,"a",(function(){return a}));c("b680");var r=c("5502"),n=c("7a23"),a=function(t){var e=Object(r["b"])(),c=e.state.cartList,a=function(t,c,r,n){e.commit("changeCartItemInfo",{shopId:t,productId:c,productInfo:r,num:n})},i=Object(n["b"])((function(){var e,r=(null===(e=c[t])||void 0===e?void 0:e.productList)||{},n={};for(var a in r){var i=r[a];i.count>0&&(n[a]=i)}return n})),o=Object(n["b"])((function(){var e,r=(null===(e=c[t])||void 0===e?void 0:e.shopName)||"";return r})),s=Object(n["b"])((function(){var e,r=null===(e=c[t])||void 0===e?void 0:e.productList,n={total:0,price:0,allChecked:!0};if(!r)return 0;for(var a in r){var i=r[a];n.total+=i.count,i.check&&(n.price+=i.count*i.price),i.count>0&&!i.check&&(n.allChecked=!1)}return n.price=n.price.toFixed(2),n}));return{changeCartItemInfo:a,cartList:c,productList:i,shopName:o,calculations:s}}},b680:function(t,e,c){"use strict";var r=c("23e7"),n=c("a691"),a=c("408a"),i=c("1148"),o=c("d039"),s=1..toFixed,u=Math.floor,d=function(t,e,c){return 0===e?c:e%2===1?d(t,e-1,c*t):d(t*t,e/2,c)},b=function(t){var e=0,c=t;while(c>=4096)e+=12,c/=4096;while(c>=2)e+=1,c/=2;return e},l=function(t,e,c){var r=-1,n=c;while(++r<6)n+=e*t[r],t[r]=n%1e7,n=u(n/1e7)},O=function(t,e){var c=6,r=0;while(--c>=0)r+=t[c],t[c]=u(r/e),r=r%e*1e7},h=function(t){var e=6,c="";while(--e>=0)if(""!==c||0===e||0!==t[e]){var r=String(t[e]);c=""===c?r:c+i.call("0",7-r.length)+r}return c},v=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){s.call({})}));r({target:"Number",proto:!0,forced:v},{toFixed:function(t){var e,c,r,o,s=a(this),u=n(t),v=[0,0,0,0,0,0],f="",p="0";if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(f="-",s=-s),s>1e-21)if(e=b(s*d(2,69,1))-69,c=e<0?s*d(2,-e,1):s/d(2,e,1),c*=4503599627370496,e=52-e,e>0){l(v,0,c),r=u;while(r>=7)l(v,1e7,0),r-=7;l(v,d(10,r,1),0),r=e-1;while(r>=23)O(v,1<<23),r-=23;O(v,1<<r),l(v,1,1),O(v,2),p=h(v)}else l(v,0,c),l(v,1<<-e,0),p=h(v)+i.call("0",u);return u>0?(o=p.length,p=f+(o<=u?"0."+i.call("0",u-o)+p:p.slice(0,o-u)+"."+p.slice(o-u))):p=f+p,p}})},c7b1:function(t,e,c){},d189:function(t,e,c){},ecb9:function(t,e,c){"use strict";c("1834")},f7ba:function(t,e,c){"use strict";c("c7b1")}}]);
//# sourceMappingURL=OrderConfimation.595cee9c.js.map
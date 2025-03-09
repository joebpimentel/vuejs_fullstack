(function(){"use strict";var t={964:function(t,r,e){var n=e(751),o=e(641);const a={class:"page-wrap"};function s(t,r,e,n,s,u){const c=(0,o.g2)("NavBar"),i=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(c,{user:s.user},null,8,["user"]),(0,o.Lk)("div",a,[(0,o.bF)(i,{user:s.user},null,8,["user"])])],64)}var u=e(241);const c={class:"nav-bar"},i={class:"logo-wrap"},d=["src"],l={class:"nav-buttons-wrap"};function p(t,r,e,n,a,s){const u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",c,[(0,o.bF)(u,{to:"/products",class:"products-link"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",i,[(0,o.Lk)("img",{src:a.logo},null,8,d)])])),_:1}),(0,o.Lk)("div",l,[e.user?((0,o.uX)(),(0,o.CE)("button",{key:0,onClick:r[0]||(r[0]=(...t)=>s.signOut&&s.signOut(...t))},"Sign Out")):(0,o.Q3)("",!0),(0,o.bF)(u,{to:"/cart"},{default:(0,o.k6)((()=>r[1]||(r[1]=[(0,o.Lk)("button",null,"Shopping Cart",-1)]))),_:1})])])}var m=e.p+"img/logo-hexagon.d2768201.svg",g={name:"NavBar",props:["user"],data(){return{logo:m}},methods:{signOut(){const t=(0,u.xI)();(0,u.CI)(t)}}},f=e(262);const h=(0,f.A)(g,[["render",p]]);var v=h,k={name:"App",components:{NavBar:v},data(){return{user:null}},created(){const t=(0,u.xI)();(0,u.hg)(t,(t=>{this.user=t}))}};const y=(0,f.A)(k,[["render",s]]);var I=y,b=e(220);const C={key:0},w={key:1};function L(t,r,e,n,a,s){const u=(0,o.g2)("ShoppingCartList");return(0,o.uX)(),(0,o.CE)(o.FK,null,[r[2]||(r[2]=(0,o.Lk)("h1",null,"Shopping Cart",-1)),a.cartItems.length>0?((0,o.uX)(),(0,o.CE)("div",C,[(0,o.bF)(u,{onRemoveFromCart:r[0]||(r[0]=t=>s.removeFromCart(t)),cartItems:a.cartItems},null,8,["cartItems"]),r[1]||(r[1]=(0,o.Lk)("button",{class:"checkout-button"},"Proceed to Checkout",-1))])):((0,o.uX)(),(0,o.CE)("div",w," You currently have no items in your cart! "))],64)}var A=e(335),F=e(33);const S=["src"],E={class:"details-wrap"},P=["onClick"];function X(t,r,e,n,a,s){return(0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.cartItems,(r=>((0,o.uX)(),(0,o.CE)("div",{class:"product-container",key:r.id},[(0,o.Lk)("img",{class:"product-image",src:r.imageurl},null,8,S),(0,o.Lk)("div",E,[(0,o.Lk)("h3",null,(0,F.v_)(r.name),1),(0,o.Lk)("p",null,(0,F.v_)(r.price),1)]),(0,o.Lk)("button",{onClick:e=>t.$emit("remove-from-cart",r.id),class:"remove-button"},"Remove from Cart",8,P)])))),128)}var O={name:"ShoppingCartList",props:["cartItems"]};const $=(0,f.A)(O,[["render",X]]);var j=$,_={name:"ShoppingCartPage",props:["user"],data(){return{cartItems:[]}},async created(){if(this.user){const t=await A.A.get(`/api/users/${this.user.uid}/cart`),r=t.data;this.cartItems=r}},components:{ShoppingCartList:j},methods:{async removeFromCart(t){const r=parseInt(t),e=await A.A.delete(`/api/users/${this.user.uid}/cart/${r}`),n=e.data;this.cartItems=n}},watch:{async user(t){if(t){const t=await A.A.get(`/api/users/${this.user.uid}/cart`),r=Array.from(t.data);this.cartItems=r}}}};const x=(0,f.A)(_,[["render",L]]);var N=x;function K(t,r,e,n,a,s){const u=(0,o.g2)("ProductsList");return(0,o.uX)(),(0,o.CE)(o.FK,null,[r[0]||(r[0]=(0,o.Lk)("h1",null,"Products",-1)),(0,o.bF)(u,{products:a.products},null,8,["products"])],64)}const T={class:"grid-wrap"},B=["src"],M={class:"product-name"},Q={class:"product-price"};function D(t,r,e,n,a,s){const u=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",T,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.products,(t=>((0,o.uX)(),(0,o.CE)("div",{class:"product-item",key:t.id},[(0,o.Lk)("img",{src:t.imageurl},null,8,B),(0,o.Lk)("h3",M,(0,F.v_)(t.name),1),(0,o.Lk)("p",Q,(0,F.v_)(t.price),1),(0,o.bF)(u,{to:"/products/"+t.id},{default:(0,o.k6)((()=>r[0]||(r[0]=[(0,o.Lk)("button",null,"View Details",-1)]))),_:2},1032,["to"])])))),128))])}var R={name:"ProductsList",props:["products"]};const z=(0,f.A)(R,[["render",D]]);var G=z,J={name:"ProductsPage",data(){return{products:[]}},async created(){const t=await A.A.get("/api/products"),r=t.data;this.products=r},components:{ProductsList:G}};const V=(0,f.A)(J,[["render",K]]);var W=V;const Y={key:0},q={class:"img-wrap"},H=["src"],U={class:"product-details"},Z={class:"price"},tt={key:1,class:"grey-button"},rt={key:1};function et(t,r,e,n,a,s){const u=(0,o.g2)("NotFoundPage");return a.product?((0,o.uX)(),(0,o.CE)("div",Y,[(0,o.Lk)("div",q,[(0,o.Lk)("img",{src:a.product.imageurl},null,8,H)]),(0,o.Lk)("div",U,[(0,o.Lk)("h1",null,(0,F.v_)(a.product.name),1),(0,o.Lk)("h3",Z,(0,F.v_)(a.product.price),1),e.user&&!s.itemIsInCart?((0,o.uX)(),(0,o.CE)("button",{key:0,onClick:r[0]||(r[0]=(...t)=>s.addToCart&&s.addToCart(...t)),class:"add-to-cart"},"Add to cart")):(0,o.Q3)("",!0),e.user&&s.itemIsInCart?((0,o.uX)(),(0,o.CE)("button",tt,"Item is already in cart")):(0,o.Q3)("",!0),e.user?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("button",{key:2,class:"sign-in",onClick:r[1]||(r[1]=(...t)=>s.signIn&&s.signIn(...t))},"Sing in to add to cart"))])])):((0,o.uX)(),(0,o.CE)("div",rt,[(0,o.bF)(u)]))}function nt(t,r,e,n,a,s){return(0,o.uX)(),(0,o.CE)("h1",null,"404: Page Not Found")}var ot={name:"NotFoundPage"};const at=(0,f.A)(ot,[["render",nt]]);var st=at,ut={name:"ProductDetailPage",props:["user"],data(){return{product:{},cartItems:Array.from([])}},async created(){const t=(0,u.xI)();if((0,u.Pj)(t,window.location.href)){const r=window.localStorage.getItem("emailForSignIn");await(0,u.hK)(t,r,window.location.href),alert("Successfully signed in!"),window.localStorage.removeItem("emailForSignIn")}const r=await A.A.get(`/api/products/${this.$route.params.productId}`),e=r.data;if(this.product=e,this.user){const t=await A.A.get(`/api/users/${this.user.uid}/cart`),r=Array.from(t.data);this.cartItems=r}},components:{NotFoundPage:st},methods:{async addToCart(){if(this.user)try{await A.A.post(`/api/users/${this.user.uid}/cart`,{id:this.$route.params.productId}),alert("Successfully added item to cart!")}catch(t){alert(t.response.data)}},async signIn(){const t=prompt("Please enter your e-mail to sign in:"),r=(0,u.xI)(),e={url:`https://vuejs-fullstack.onrender.com/products/${this.$route.params.productId}`,handleCodeInApp:!0};await(0,u.MN)(r,t,e),alert("A login link was sent to the email you provided"),window.localStorage.setItem("emailForSignIn",t)}},computed:{itemIsInCart(){const t=parseInt(this.$route.params.productId);let r=!1;return this.user&&(r=this.cartItems.some((r=>r.id===t))||!1),r}},watch:{async user(t){if(t){const t=await A.A.get(`/api/users/${this.user.uid}/cart`),r=Array.from(t.data);this.cartItems=r}}}};const ct=(0,f.A)(ut,[["render",et]]);var it=ct,dt=e(223);const lt={apiKey:"AIzaSyCAtejybbXxN558G5XPAJRoxj9Cvh56zXc",authDomain:"vuecourse-f7e03.firebaseapp.com",projectId:"vuecourse-f7e03",storageBucket:"vuecourse-f7e03.firebasestorage.app",messagingSenderId:"603904476277",appId:"1:603904476277:web:4efbb955872032eae9243c"};(0,dt.Wp)(lt),(0,n.Ef)(I).use(b.aE({history:b.LA("/"),routes:[{path:"/cart",component:N},{path:"/products",component:W},{path:"/products/:productId",component:it},{path:"/",redirect:"/products"},{path:"/:pathMatch(.*)*",component:st}]})).mount("#app")}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return t[n](a,a.exports,e),a.exports}e.m=t,function(){var t=[];e.O=function(r,n,o,a){if(!n){var s=1/0;for(d=0;d<t.length;d++){n=t[d][0],o=t[d][1],a=t[d][2];for(var u=!0,c=0;c<n.length;c++)(!1&a||s>=a)&&Object.keys(e.O).every((function(t){return e.O[t](n[c])}))?n.splice(c--,1):(u=!1,a<s&&(s=a));if(u){t.splice(d--,1);var i=o();void 0!==i&&(r=i)}}return r}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[n,o,a]}}(),function(){e.d=function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var t={524:0};e.O.j=function(r){return 0===t[r]};var r=function(r,n){var o,a,s=n[0],u=n[1],c=n[2],i=0;if(s.some((function(r){return 0!==t[r]}))){for(o in u)e.o(u,o)&&(e.m[o]=u[o]);if(c)var d=c(e)}for(r&&r(n);i<s.length;i++)a=s[i],e.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return e.O(d)},n=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=e.O(void 0,[504],(function(){return e(964)}));n=e.O(n)})();
//# sourceMappingURL=app.2f08e921.js.map
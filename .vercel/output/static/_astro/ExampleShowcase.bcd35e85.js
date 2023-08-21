import{g as h,u as A,s as M,i as d,a as j,t as p,d as O,b as z,e as f,c as H}from"./web.4298dd11.js";import{g as L,d as E,f as P,h as N,o as F,m as T,c as C,a as y,F as B}from"./solid.ace06e4d.js";function D(r){var n,a,e="";if(typeof r=="string"||typeof r=="number")e+=r;else if(typeof r=="object")if(Array.isArray(r))for(n=0;n<r.length;n++)r[n]&&(a=D(r[n]))&&(e&&(e+=" "),e+=a);else for(n in r)r[n]&&(e&&(e+=" "),e+=n);return e}function I(){for(var r,n,a=0,e="";a<arguments.length;)(r=arguments[a++])&&(n=D(r))&&(e&&(e+=" "),e+=n);return e}const G=p("<div><div>");function q(r){const[,n]=L(r,["children","isOpen"]),[a,e]=E();let c,s;return P(()=>{const o=new ResizeObserver(([i])=>{e(i.contentRect.height)});o.observe(s),N(()=>{o.disconnect()})}),F(()=>{s.style.position="absolute"}),P(()=>{c.style.height=r.isOpen?a()+"px":"0px"}),(()=>{const o=h(G),i=o.firstChild;return A(t=>c=t,o),M(o,T(n,{get class(){return I("relative overflow-hidden transition-[height]",n.class)}}),!1,!0),A(t=>s=t,i),d(i,()=>r.children),j(),o})()}function J(r,n){return(r%n+n)%n}const K={src:"/_astro/example-agencies.3374f837.png",width:827,height:496,format:"png"},Q={src:"/_astro/example-blogs.6b46657d.png",width:827,height:496,format:"png"},V={src:"/_astro/example-e-commerce.d0820dc1.webp",width:827,height:496,format:"webp"},W={src:"/_astro/example-marketing.8740f9d9.webp",width:827,height:496,format:"webp"},X={src:"/_astro/example-portfolio.946b692e.webp",width:827,height:496,format:"webp"},Y=p('<div class="mx-auto flex w-full max-w-screen-2xl flex-col gap-4 px-4 md:flex-row md:items-center md:px-0"><section aria-label="Examples" class="mb-4 grid gap-4 md:mx-auto md:w-[380px]"></section><section aria-label="Example Previews" class="relative isolate md:w-1/2">'),Z=p('<p class="body my-4 text-gray-200">'),ee=p('<p class="flex justify-between"><a class="link-underline"></a><a class="link-underline">See it in the wild'),te=p(`<details class="group noise-panel p-4 text-left"><summary class="accordion heading-4 flex w-full cursor-pointer select-none items-center justify-between"><span></span><div aria-hidden="true" class="leading-none after:content-['+'] group-open:after:content-['-']"></div></summary><!#><!/>`),re=p('<a tabindex="-1" target="_blank" data-card><p class="code flex items-center justify-center py-1 text-sm" aria-hidden="true"></p><img class="w-full object-cover object-left-top" loading="lazy" decoding="async">'),m=[{title:"Blogs",description:"Build personal and professional blogs with Astro's built-in Markdown support and content APIs.",liveUrl:new URL("https://firebase.blog/"),image:Q,cta:{text:"Blog themes",href:"/themes/?categories%5B%5D=blog"}},{title:"Marketing",description:"Stand out from the crowd with a lightning fast site that ranks higher in SEO.",liveUrl:new URL("https://rokt.com/"),image:W,cta:{text:"Marketing themes",href:"/themes/?categories%5B%5D=landing-page"}},{title:"Agencies",description:"Agencies use Astro to build fast websites, faster. Customize every site with full control over your frontend code.",liveUrl:new URL("https://www.thinkmill.com.au/"),image:K,cta:{text:"Agency themes",href:"/themes/?categories%5B%5D=landing-page"}},{title:"E-Commerce",description:"Time is money. Give your customers a better shopping experience and grow your business faster.",liveUrl:new URL("https://www.enjoyyearof.com/"),image:V,cta:{text:"E-Commerce themes",href:"/themes/?categories%5B%5D=ecommerce"}},{title:"Portfolios",description:"Put your best foot forward with a portfolio that performs. Help people get to know you (and your work) faster.",liveUrl:new URL("https://baldbeardedbuilder.com/"),image:X,cta:{text:"Portfolio themes",href:"/themes/?categories%5B%5D=portfolio"}}],R=32,[k,ne]=E(0);function oe(){return(()=>{const r=h(Y),n=r.firstChild,a=n.nextSibling;return d(n,C(B,{each:m,children:(e,c)=>{const[s,o]=E(k()==c()),i=(()=>{const t=h(te),u=t.firstChild,v=u.firstChild,$=u.nextSibling,[_,b]=z($.nextSibling);return t.$$click=l=>{l.target.localName!=="a"&&(l.preventDefault(),ne(c()))},d(v,()=>e.title),d(t,C(q,{get isOpen(){return s()},onTransitionEnd:()=>{i.open&&!s()&&(i.open=!1)},get children(){return[(()=>{const l=h(Z);return d(l,()=>e.description),l})(),(()=>{const l=h(ee),g=l.firstChild,x=g.nextSibling;return d(g,()=>e.cta.text),y(w=>{const U=e.cta.href,S=e.liveUrl.href;return U!==w._v$&&f(g,"href",w._v$=U),S!==w._v$2&&f(x,"href",w._v$2=S),w},{_v$:void 0,_v$2:void 0}),l})()]}}),_,b),y(()=>t.open=c()===0),j(),t})();return P(()=>{k()===c()?(o(!0),i.open=!0):o(!1)}),i}})),d(a,C(B,{each:m,children:(e,c)=>(()=>{const s=h(re),o=s.firstChild,i=o.nextSibling;return s.style.setProperty("--translate","calc(var(--position) * 32px)"),d(o,()=>e.liveUrl.hostname),y(t=>{const u=e.liveUrl.href,v=J(c()-(k()??0),m.length),$=`calc(${m.length} - var(--position))`,_=I("noise-panel left-0 top-0 block w-full","translate-y-[var(--translate)] transition-transform md:translate-x-[var(--translate)]",c()===k()?"relative":"absolute"),b=e.image.src,l=e.image.width,g=e.image.height,x=`Example image for ${e.title}`;return u!==t._v$3&&f(s,"href",t._v$3=u),v!==t._v$4&&((t._v$4=v)!=null?s.style.setProperty("--position",v):s.style.removeProperty("--position")),$!==t._v$5&&((t._v$5=$)!=null?s.style.setProperty("z-index",$):s.style.removeProperty("z-index")),_!==t._v$6&&H(s,t._v$6=_),b!==t._v$7&&f(i,"src",t._v$7=b),l!==t._v$8&&f(i,"width",t._v$8=l),g!==t._v$9&&f(i,"height",t._v$9=g),x!==t._v$10&&f(i,"alt",t._v$10=x),t},{_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),s})()})),y(()=>`calc(${R}px * ${m.length-1})`!=null?a.style.setProperty("padding-bottom",`calc(${R}px * ${m.length-1})`):a.style.removeProperty("padding-bottom")),r})()}O(["click"]);export{oe as default};

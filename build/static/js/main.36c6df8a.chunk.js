(this.webpackJsonpdevto=this.webpackJsonpdevto||[]).push([[0],{120:function(e,t){},137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),l=(a(82),a(83),a(23)),o=a(4),s=a(30),m=a.n(s),d=a(40),p=a(41),E=a.n(p),u=a(16),g=a(163),h=a(165),v=a(166),f=a(139),y=a(65),b=a.n(y),_=a(66),L=a.n(_),w=a(67),S=a.n(w),T=a(33),x=a(39),I=a.n(x),N=Object(g.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:"50px"},flexGrow:1,marginBottom:"7%"},paper:{padding:e.spacing(2),margin:"auto",minWidth:"100%",backgroundColor:"#ffffff",boxShadow:"0.5px #e4e4e4 solid",position:"relative"},image:{width:128,height:128},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"},title:{fontSize:"25px",fontFamily:"Big Caslon,Book Antiqua,Palatino Linotype,Georgia,serif",color:"#222222"},svg:{height:"30px",width:"24px",paddingLeft:"9px"},svgcomment:{paddingLeft:"10px",height:"45px",width:"26px"}}}));function A(e){var t=Object(u.c)((function(e){return e.articleList})),a=t.articles,c=t.loading,i=t.error,o=Object(u.b)(),s=N();return Object(n.useEffect)((function(){return o(function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"ARTICLE_LIST_REQUEST"}),e.next=4,E.a.get("https://dev.to/api/articles?username=hemant");case 4:a=e.sent,n=a.data,t({type:"ARTICLE_LIST_SUCCESS",payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:"ARTICLE_LIST_FAIL",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),function(){}}),[]),c?r.a.createElement("div",{className:"loading"},r.a.createElement(h.a,{color:"secondary"})):i?r.a.createElement("div",null,i):r.a.createElement("div",{className:"main-box"},r.a.createElement(T.a,null,r.a.createElement("title",null,"Hemant's Blog"),r.a.createElement("meta",{name:"description",content:"articles.description"}),r.a.createElement("meta",{property:"og:title",content:"articles.title"}),r.a.createElement("meta",{property:"og:url",content:"hemant-blogs.netlify.app"}),r.a.createElement("meta",{property:"og:description",content:"articles.description"}),r.a.createElement("meta",{property:"og:image",content:"articles.cover_image"}),r.a.createElement("meta",{property:"og:type",content:"Tech-Blog"})),r.a.createElement(I.a,{repo:"https://github.com/8bithemant/Dev-Blogs",colorOctocat:"white",isPride:!0}),r.a.createElement("div",{className:"home-banner"},r.a.createElement("div",{className:"home-header"},"Hemant Joshi's Articles"),r.a.createElement("div",{className:"home-description"},r.a.createElement("i",null," ","Hii, I am ",r.a.createElement("a",{href:"https://hemant.codes/"},"Hemant Joshi")," "),".",r.a.createElement("br",null)," I am 18 Year old Mern Stack Dev, I share a lot of daily content on Twitter, be sure to follow me ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://twitter.com/8bithemant/"},r.a.createElement("i",null,"@8bithemant ")))),r.a.createElement("div",{className:"articles-box"},a.map((function(e){return r.a.createElement(l.b,{className:s.title,to:"/articles/hemant/"+e.slug,style:{textDecoration:"none",color:"white"}},r.a.createElement("div",{key:e.id},r.a.createElement("div",{className:s.root},r.a.createElement(f.a,{className:s.paper},r.a.createElement(v.a,{container:!0,spacing:2},r.a.createElement(v.a,{item:!0,xs:12,sm:!0,container:!0},r.a.createElement(v.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2},r.a.createElement(v.a,{item:!0,xs:!0},r.a.createElement("div",{className:"articles-title"},e.title),r.a.createElement("div",{className:"articles-info"},r.a.createElement("img",{src:b.a,alt:"React Logo",className:"articles-svg"}),r.a.createElement("div",{className:"articles-info-1"},e.public_reactions_count),r.a.createElement("img",{src:L.a,alt:"React Logo",className:"articles-svg"}),r.a.createElement("div",{className:"articles-info-1"},e.comments_count),r.a.createElement("img",{src:S.a,alt:"React Logo",className:"articles-svg"})," ",r.a.createElement("div",{className:"articles-info-1"},e.readable_publish_date," ")),r.a.createElement("div",{className:"articles-description"},e.description)),r.a.createElement(v.a,{item:!0}))))))))}))))}a(107);var C=a(70),R=a(169),k=a(170),O=a(168),D=a(167),j=a(171),B=a(72);function U(e){var t=e.children,a=e.window,n=Object(D.a)({target:a?a():void 0});return r.a.createElement(j.a,{appear:!1,direction:"down",in:!n},t)}var H=function(e){var t=Object(u.c)((function(e){return e.articleDetails})),a=t.articles,c=t.loading,i=t.error,o=Object(u.b)();return Object(n.useEffect)((function(){var t;return o((t=e.match.params.slug,function(){var e=Object(d.a)(m.a.mark((function e(a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"ARTICLE_DETAILS_REQUEST",payload:t}),e.next=4,E.a.get("https://dev.to/api/articles/hemant/"+t);case 4:n=e.sent,r=n.data,a({type:"ARTICLE_DETAILS_SUCCESS",payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),a({type:"ARTICLE_DETAILS_FAIL",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())),function(){}}),[]),r.a.createElement("div",null,r.a.createElement(O.a,null),r.a.createElement(U,e,r.a.createElement(R.a,null,r.a.createElement("div",{className:"header"},r.a.createElement(k.a,{style:{backgroundColor:"black"}},r.a.createElement(l.b,{to:"/",style:{textDecoration:"none",color:"white"}},r.a.createElement("div",{className:"articles-header-a"},"Hemant ")))))),r.a.createElement(k.a,null),c?r.a.createElement("div",{className:"loading"},r.a.createElement(h.a,{color:"secondary"})):i?r.a.createElement("div",null,i):r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:"container-md"},r.a.createElement("img",{src:a.cover_image,class:"img-fluid",alt:"Responsive image"})),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"article-title"},a.title)),r.a.createElement("div",{className:"body"},r.a.createElement("div",{class:"markdown-body"},r.a.createElement(C.a,{markdown:a.body_markdown,options:{tables:!0,emoji:!0}}))),r.a.createElement(T.a,null,r.a.createElement("title",null,a.title),r.a.createElement("meta",{name:"description",content:a.description}),r.a.createElement("meta",{property:"og:title",content:a.title}),r.a.createElement("meta",{property:"og:url",content:"hemant-blogs.netlify.app"}),r.a.createElement("meta",{property:"og:description",content:a.description}),r.a.createElement("meta",{property:"og:image",content:a.cover_image}),r.a.createElement("meta",{property:"og:type",content:"Tech-Blog"})),r.a.createElement("div",{className:"share"},"Share on  ",r.a.createElement(B.Twitter,{url:"hemant-blogs.netlify.app/articles/hemant/"+a.slug,shareText:"Hii, check this Awesome Blog post by @8bithemant     '"+a.title+"'         #100daysofocde #DevCommunity"})," ?")))};var F=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"grid-container"},r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"content"},r.a.createElement(o.a,{path:"/",exact:!0,component:A}),r.a.createElement(o.a,{path:"/articles/hemant/:slug",component:H})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=a(22),Q=a(73);var W=Object(J.c)({articleList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{articles:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ARTICLE_LIST_REQUEST":return{loading:!0};case"ARTICLE_LIST_SUCCESS":return{loading:!1,articles:t.payload};case"ARTICLE_LIST_FAIL":return{loading:!1,error:t.payload};default:return e}},articleDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{articles:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ARTICLE_DETAILS_REQUEST":return{loading:!0};case"ARTICLE_DETAILS_SUCCESS":return{loading:!1,articles:t.payload};case"ARTICLE_DETAILS_FAIL":return{loading:!1,error:t.payload};default:return e}}}),P=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.d,G=Object(J.e)(W,P(Object(J.a)(Q.a)));i.a.render(r.a.createElement(u.a,{store:G},r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,a){e.exports=a.p+"static/media/heart.3c19ab0a.svg"},66:function(e,t,a){e.exports=a.p+"static/media/pharmacy.44745d96.svg"},67:function(e,t,a){e.exports=a.p+"static/media/writing.1abcdebd.svg"},77:function(e,t,a){e.exports=a(137)},82:function(e,t,a){},83:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.36c6df8a.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{228:function(e,n,t){t.d(n,{FH:function(){return r.FH},Jz:function(){return r.Jz},eF:function(){return r.eF},fT:function(){return r.fT},r2:function(){return r.r2}});var r=t(347)},347:function(e,n,t){t.d(n,{FH:function(){return r},Jz:function(){return d},ZF:function(){return a},eF:function(){return o},fT:function(){return s},r2:function(){return c}});var r="https://api.themoviedb.org/3/movie/",i="85c51028d47d6f3b76fd606d9b7a0314",c="https://image.tmdb.org/t/p/original",a="/credits?api_key=".concat(i,"&language=en-US"),o="?api_key=".concat(i,"&language=en-US"),s="https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query="),d="/reviews?api_key=".concat(i,"&language=en-US&page=1")},961:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var r=t(439),i=t(791),c=t(689),a=t(87),o=t(228),s=t(243),d=t(184);function u(){var e,n,t=(0,i.useState)(""),u=(0,r.Z)(t,2),l=u[0],h=u[1],f=(0,i.useState)("idle"),p=(0,r.Z)(f,2),x=p[0],j=p[1],v=(0,c.UO)().movieId,g=(0,i.useRef)(null!==(e=null===(n=(0,c.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies");return(0,i.useEffect)((function(){try{s.Z.get("".concat(o.FH).concat(v).concat(o.eF)).then((function(e){h(e),j("pending")}))}catch(e){j("error")}}),[v]),"error"===x?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.rU,{to:g.current,children:(0,d.jsxs)("button",{children:[" ","<"," back"]})}),(0,d.jsx)("h2",{children:" Something went wrong "})]}):"pending"===x?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.rU,{to:g.current,children:(0,d.jsxs)("button",{children:[" ","<"," back"]})}),(0,d.jsx)("div",{style:{display:"flex"},children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("img",{width:220,src:"".concat(o.r2).concat(l.data.poster_path),alt:"poster"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:l.data.title}),(0,d.jsxs)("p",{children:["User Score: ",(10*l.data.vote_average).toFixed(),"%"]}),(0,d.jsx)("p",{children:(0,d.jsx)("b",{children:"Overview"})}),(0,d.jsx)("p",{children:l.data.overview}),(0,d.jsx)("p",{children:(0,d.jsx)("b",{children:"Genres"})}),(0,d.jsx)("p",{children:l.data.genres.map((function(e){return"'"+e.name+"' "}))})]})]})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{children:"Additional information"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(a.rU,{to:"cast",movieid:v,children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(a.rU,{to:"reviews",movieid:v,children:"Reviews"})})]}),(0,d.jsx)(c.j3,{})]})]}):void 0}}}]);
//# sourceMappingURL=961.2cc80c77.chunk.js.map
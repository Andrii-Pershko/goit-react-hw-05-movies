"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[877],{347:function(e,n,t){t.d(n,{FH:function(){return r},H1:function(){return s},Jz:function(){return p},ZF:function(){return i},eF:function(){return o},fT:function(){return u},r2:function(){return c}});var r="https://api.themoviedb.org/3/movie/",a="85c51028d47d6f3b76fd606d9b7a0314",c="https://image.tmdb.org/t/p/original",i="/credits?api_key=".concat(a,"&language=en-US"),o="?api_key=".concat(a,"&language=en-US"),u="https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&language=en-US&page=1&include_adult=false&query="),p="/reviews?api_key=".concat(a,"&language=en-US&page=1"),s="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(a)},877:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(439),a=t(689),c=t(791),i=t(243),o=t(347),u=t(184),p=function(){var e=(0,c.useState)([]),n=(0,r.Z)(e,2),t=n[0],p=n[1],s=(0,c.useState)("idle"),d=(0,r.Z)(s,2),l=d[0],h=d[1],f=(0,a.UO)().movieId;return(0,c.useEffect)((function(){try{i.Z.get("".concat(o.FH).concat(f).concat(o.ZF)).then((function(e){p(e.data.cast),h("pending")}))}catch(e){alert("Unknown error, please reset page"),h("error")}}),[]),"error"===l?(0,u.jsx)("h1",{children:"Unknown error, please reset page"}):"pending"===l?(0,u.jsx)("ul",{children:t.map((function(e){var n=e.id,t=e.profile_path,r=e.character,a=e.name;return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{width:120,src:"".concat(o.r2).concat(t),alt:""}),(0,u.jsxs)("p",{children:["Character: ",r]}),(0,u.jsxs)("p",{children:["Name: ",a]})]},n)}))}):void 0}}}]);
//# sourceMappingURL=877.a0a4ceeb.chunk.js.map
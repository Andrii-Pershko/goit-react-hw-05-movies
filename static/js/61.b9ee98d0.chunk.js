"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[61],{61:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(439),a=n(791),c=n(689),i=n(87),s=n(243),o=n(184),u="https://api.themoviedb.org/3/trending/movie/day?api_key=".concat("85c51028d47d6f3b76fd606d9b7a0314");function d(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],d=e[1],h=(0,c.TH)();return(0,a.useEffect)((function(){try{s.Z.get(u).then((function(t){return d(t.data.results)}))}catch(t){}}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Tranding today"}),(0,o.jsx)("ul",{className:"movieList",children:n.map((function(t){var e=t.id,n=t.title;return(0,o.jsx)("li",{children:(0,o.jsx)(i.rU,{to:"/movies/".concat(e),state:{from:h},children:n})},e)}))})]})}}}]);
//# sourceMappingURL=61.b9ee98d0.chunk.js.map
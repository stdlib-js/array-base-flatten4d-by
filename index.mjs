// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";function o(r,o,f,n,e){var s,t,l,a,i,u,c,d,p,m,h,v;if(t=o[3],l=o[2],a=o[1],i=o[0],s=[],f){for(u=0;u<t;u++)for(c=0;c<l;c++)for(d=0;d<a;d++)for(p=0;p<i;p++)s.push(n.call(e,r[p][d][c][u],[p,d,c,u],r));return s}for(p=0;p<i;p++)for(v=r[p],d=0;d<a;d++)for(h=v[d],c=0;c<l;c++)for(m=h[c],u=0;u<t;u++)s.push(n.call(e,m[u],[p,d,c,u],r));return s}function f(r,o,f,n,e,s,t,l){var a,i,u,c,d,p,m,h,v,g,j,b;if(a=o[3],i=o[2],u=o[1],c=o[0],b=s,f){for(d=0;d<a;d++)for(p=0;p<i;p++)for(m=0;m<u;m++)for(h=0;h<c;h++)n[b]=t.call(l,r[h][m][p][d],[h,m,p,d],r),b+=e;return n}for(h=0;h<c;h++)for(j=r[h],m=0;m<u;m++)for(g=j[m],p=0;p<i;p++)for(v=g[p],d=0;d<a;d++)n[b]=t.call(l,v[d],[h,m,p,d],r),b+=e;return n}r(o,"assign",f);export{f as assign,o as default};
//# sourceMappingURL=index.mjs.map

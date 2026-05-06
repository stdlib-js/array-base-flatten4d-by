"use strict";var R=function(n,v){return function(){return v||n((v={exports:{}}).exports,v),v.exports}};var j=R(function(I,g){
function D(n,v,B,e,q){var u,c,s,l,S,f,o,r,a,i,t,y;if(c=v[3],s=v[2],l=v[1],S=v[0],u=[],B){for(f=0;f<c;f++)for(o=0;o<s;o++)for(r=0;r<l;r++)for(a=0;a<S;a++)u.push(e.call(q,n[a][r][o][f],[a,r,o,f],n));return u}for(a=0;a<S;a++)for(y=n[a],r=0;r<l;r++)for(t=y[r],o=0;o<s;o++)for(i=t[o],f=0;f<c;f++)u.push(e.call(q,i[f],[a,r,o,f],n));return u}g.exports=D
});var z=R(function(J,w){
function E(n,v,B,e,q,u,c,s){var l,S,f,o,r,a,i,t,y,m,O,d;if(l=v[3],S=v[2],f=v[1],o=v[0],d=u,B){for(r=0;r<l;r++)for(a=0;a<S;a++)for(i=0;i<f;i++)for(t=0;t<o;t++)e[d]=c.call(s,n[t][i][a][r],[t,i,a,r],n),d+=q;return e}for(t=0;t<o;t++)for(O=n[t],i=0;i<f;i++)for(m=O[i],a=0;a<S;a++)for(y=m[a],r=0;r<l;r++)e[d]=c.call(s,y[r],[t,i,a,r],n),d+=q;return e}w.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=j(),G=z();F(C,"assign",G);module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

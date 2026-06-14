"use strict";var R=function(n,v){return function(){try{return v||n((v={exports:{}}).exports,v),v.exports}catch(q){throw (v=0, q)}};};var j=R(function(I,g){
function D(n,v,q,e,y){var u,c,s,l,S,f,o,r,a,i,t,d;if(c=v[3],s=v[2],l=v[1],S=v[0],u=[],q){for(f=0;f<c;f++)for(o=0;o<s;o++)for(r=0;r<l;r++)for(a=0;a<S;a++)u.push(e.call(y,n[a][r][o][f],[a,r,o,f],n));return u}for(a=0;a<S;a++)for(d=n[a],r=0;r<l;r++)for(t=d[r],o=0;o<s;o++)for(i=t[o],f=0;f<c;f++)u.push(e.call(y,i[f],[a,r,o,f],n));return u}g.exports=D
});var z=R(function(J,w){
function E(n,v,q,e,y,u,c,s){var l,S,f,o,r,a,i,t,d,m,O,B;if(l=v[3],S=v[2],f=v[1],o=v[0],B=u,q){for(r=0;r<l;r++)for(a=0;a<S;a++)for(i=0;i<f;i++)for(t=0;t<o;t++)e[B]=c.call(s,n[t][i][a][r],[t,i,a,r],n),B+=y;return e}for(t=0;t<o;t++)for(O=n[t],i=0;i<f;i++)for(m=O[i],a=0;a<S;a++)for(d=m[a],r=0;r<l;r++)e[B]=c.call(s,d[r],[t,i,a,r],n),B+=y;return e}w.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=j(),G=z();F(C,"assign",G);module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

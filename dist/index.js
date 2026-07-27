"use strict";var R=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(o){throw r=0,o}}};var E=R(function(O,F){"use strict";var J=require("@stdlib/ndarray-base-assert-is-row-major"),z=require("@stdlib/strided-base-reinterpret-complex128");function K(i,r,o,h,l,p,g,x,e,q,c,d){var s,y,n,w,f,j,V,_,C,m,t,a,v,u;if(i<=0||r<=0)return e;if(s=z(o,0),y=z(p,0),n=z(e,0),j=h*2,V=g*2,w=q*2,f=c*2,m=l*2,t=x*2,a=d*2,J([q,c])){for(v=0;v<i;v++){for(t=x*2,u=0;u<r;u++)n[a]=s[m],n[a+1]=s[m+1],n[a+f]=y[t],n[a+f+1]=y[t+1],t+=V,a+=w;m+=j}return e}for(m=l*2,a=d*2,v=0;v<i;v++){for(_=s[m],C=s[m+1],u=0;u<r;u++)n[a]=_,n[a+1]=C,a+=w;m+=j}for(a=d*2+f,v=0;v<i;v++)for(t=x*2,u=0;u<r;u++)n[a]=y[t],n[a+1]=y[t+1],t+=V,a+=w;return e}F.exports=K});var A=R(function(rr,k){"use strict";var Q=require("@stdlib/blas-base-assert-is-layout"),S=require("@stdlib/ndarray-base-assert-is-column-major-string"),T=require("@stdlib/strided-base-stride2offset"),U=require("@stdlib/math-base-special-fast-max"),P=require("@stdlib/string-format"),W=E();function Z(i,r,o,h,l,p,g,x,e){var q,c,d,s;if(!Q(i))throw new TypeError(P("invalid argument. First argument must be a valid order. Value: `%s`.",i));if(S(i)){if(e<U(1,r*o))throw new RangeError(P("invalid argument. Ninth argument must be greater than or equal to max(1,%d). Value: `%d`.",r*o,e));q=1,c=e}else{if(e<2)throw new RangeError(P("invalid argument. Ninth argument must be greater than or equal to max(1,%d). Value: `%d`.",2,e));q=e,c=1}return d=T(r,l),s=T(o,g),W(r,o,h,l,d,p,g,s,x,q,c,0)}k.exports=Z});var H=R(function(ar,G){"use strict";var $=require("@stdlib/utils-define-nonenumerable-read-only-property"),B=A(),X=E();$(B,"ndarray",X);G.exports=B});var Y=require("path").join,L=require("@stdlib/utils-try-require"),M=require("@stdlib/assert-is-error"),N=H(),b,I=L(Y(__dirname,"./native.js"));M(I)?b=N:b=I;module.exports=b;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map

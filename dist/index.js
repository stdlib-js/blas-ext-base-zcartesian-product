"use strict";var R=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(s){throw r=0,s}}};var E=R(function(O,F){"use strict";var J=require("@stdlib/ndarray-base-assert-is-row-major"),z=require("@stdlib/strided-base-reinterpret-complex128");function K(i,r,s,h,x,p,g,y,e,l,c,d){var m,n,v,w,f,j,V,_,C,q,t,a,u,o;if(i<=0||r<=0)return e;if(m=z(s,0),n=z(p,0),v=z(e,0),j=h*2,V=g*2,w=l*2,f=c*2,q=x*2,t=y*2,a=d*2,J([l,c])){for(u=0;u<i;u++){for(t=y*2,o=0;o<r;o++)v[a]=m[q],v[a+1]=m[q+1],v[a+f]=n[t],v[a+f+1]=n[t+1],t+=V,a+=w;q+=j}return e}for(q=x*2,a=d*2,u=0;u<i;u++){for(_=m[q],C=m[q+1],o=0;o<r;o++)v[a]=_,v[a+1]=C,a+=w;q+=j}for(a=d*2+f,u=0;u<i;u++)for(t=y*2,o=0;o<r;o++)v[a]=n[t],v[a+1]=n[t+1],t+=V,a+=w;return e}F.exports=K});var A=R(function(rr,k){"use strict";var Q=require("@stdlib/blas-base-layout-resolve-str"),S=require("@stdlib/ndarray-base-assert-is-column-major-string"),T=require("@stdlib/strided-base-stride2offset"),U=require("@stdlib/math-base-special-fast-max"),P=require("@stdlib/string-format"),W=E();function Z(i,r,s,h,x,p,g,y,e){var l,c,d,m,n;if(n=Q(i),n===null)throw new TypeError(P("invalid argument. First argument must be a valid order. Value: `%s`.",i));if(S(n)){if(e<U(1,r*s))throw new RangeError(P("invalid argument. Ninth argument must be greater than or equal to max(1,%d). Value: `%d`.",r*s,e));l=1,c=e}else{if(e<2)throw new RangeError(P("invalid argument. Ninth argument must be greater than or equal to max(1,%d). Value: `%d`.",2,e));l=e,c=1}return d=T(r,x),m=T(s,g),W(r,s,h,x,d,p,g,m,y,l,c,0)}k.exports=Z});var H=R(function(ar,G){"use strict";var $=require("@stdlib/utils-define-nonenumerable-read-only-property"),B=A(),X=E();$(B,"ndarray",X);G.exports=B});var Y=require("path").join,L=require("@stdlib/utils-try-require"),M=require("@stdlib/assert-is-error"),N=H(),b,I=L(Y(__dirname,"./native.js"));M(I)?b=N:b=I;module.exports=b;
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

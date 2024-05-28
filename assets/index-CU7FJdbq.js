var fe=Object.defineProperty;var Ce=(e,t,i)=>t in e?fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var Y=(e,t,i)=>(Ce(e,typeof t!="symbol"?t+"":t,i),i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();function w(){}function oe(e){return e()}function x(){return Object.create(null)}function j(e){e.forEach(oe)}function ae(e){return typeof e=="function"}function pe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ie(e){return Object.keys(e).length===0}function g(e,t){e.appendChild(t)}function P(e,t,i){e.insertBefore(t,i||null)}function N(e){e.parentNode&&e.parentNode.removeChild(e)}function ge(e,t){for(let i=0;i<e.length;i+=1)e[i]&&e[i].d(t)}function v(e){return document.createElement(e)}function Q(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function M(e){return document.createTextNode(e)}function F(){return M(" ")}function Le(){return M("")}function We(e,t,i,l){return e.addEventListener(t,i,l),()=>e.removeEventListener(t,i,l)}function h(e,t,i){i==null?e.removeAttribute(t):e.getAttribute(t)!==i&&e.setAttribute(t,i)}function _e(e){return Array.from(e.childNodes)}function ee(e,t){t=""+t,e.data!==t&&(e.data=t)}let A;function k(e){A=e}function ve(){if(!A)throw new Error("Function called outside component initialization");return A}function ye(e){ve().$$.on_mount.push(e)}const E=[],te=[];let O=[];const ie=[],we=Promise.resolve();let T=!1;function be(){T||(T=!0,we.then(ce))}function U(e){O.push(e)}const K=new Set;let H=0;function ce(){if(H!==0)return;const e=A;do{try{for(;H<E.length;){const t=E[H];H++,k(t),$e(t.$$)}}catch(t){throw E.length=0,H=0,t}for(k(null),E.length=0,H=0;te.length;)te.pop()();for(let t=0;t<O.length;t+=1){const i=O[t];K.has(i)||(K.add(i),i())}O.length=0}while(E.length);for(;ie.length;)ie.pop()();T=!1,K.clear(),k(e)}function $e(e){if(e.fragment!==null){e.update(),j(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(U)}}function He(e){const t=[],i=[];O.forEach(l=>e.indexOf(l)===-1?t.push(l):i.push(l)),i.forEach(l=>l()),O=t}const B=new Set;let b;function Ee(){b={r:0,c:[],p:b}}function Me(){b.r||j(b.c),b=b.p}function R(e,t){e&&e.i&&(B.delete(e),e.i(t))}function G(e,t,i,l){if(e&&e.o){if(B.has(e))return;B.add(e),b.c.push(()=>{B.delete(e),l&&(i&&e.d(1),l())}),e.o(t)}else l&&l()}function se(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Oe(e){e&&e.c()}function de(e,t,i){const{fragment:l,after_update:s}=e.$$;l&&l.m(t,i),U(()=>{const n=e.$$.on_mount.map(oe).filter(ae);e.$$.on_destroy?e.$$.on_destroy.push(...n):j(n),e.$$.on_mount=[]}),s.forEach(U)}function he(e,t){const i=e.$$;i.fragment!==null&&(He(i.after_update),j(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function Ne(e,t){e.$$.dirty[0]===-1&&(E.push(e),be(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Se(e,t,i,l,s,n,r=null,p=[-1]){const S=A;k(e);const a=e.$$={fragment:null,ctx:[],props:n,update:w,not_equal:s,bound:x(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(S?S.$$.context:[])),callbacks:x(),dirty:p,skip_bound:!1,root:t.target||S.$$.root};r&&r(a.root);let c=!1;if(a.ctx=i?i(e,t.props||{},(m,o,...f)=>{const C=f.length?f[0]:o;return a.ctx&&s(a.ctx[m],a.ctx[m]=C)&&(!a.skip_bound&&a.bound[m]&&a.bound[m](C),c&&Ne(e,m)),o}):[],a.update(),c=!0,j(a.before_update),a.fragment=l?l(a.ctx):!1,t.target){if(t.hydrate){const m=_e(t.target);a.fragment&&a.fragment.l(m),m.forEach(N)}else a.fragment&&a.fragment.c();t.intro&&R(e.$$.fragment),de(e,t.target,t.anchor),ce()}k(S)}class me{constructor(){Y(this,"$$");Y(this,"$$set")}$destroy(){he(this,1),this.$destroy=w}$on(t,i){if(!ae(i))return w;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(i),()=>{const s=l.indexOf(i);s!==-1&&l.splice(s,1)}}$set(t){this.$$set&&!Ie(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ke="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ke);function le(e,t,i){const l=e.slice();return l[10]=t[i],l}function ne(e){let t,i,l,s;return{c(){t=Q("circle"),h(t,"cx",i=e[5](e[10].sepalLength)),h(t,"cy",l=e[6](e[10].sepalWidth)),h(t,"r","5"),h(t,"fill",s=e[10].species===0?"red":"blue")},m(n,r){P(n,t,r)},p(n,r){r&1&&i!==(i=n[5](n[10].sepalLength))&&h(t,"cx",i),r&1&&l!==(l=n[6](n[10].sepalWidth))&&h(t,"cy",l),r&1&&s!==(s=n[10].species===0?"red":"blue")&&h(t,"fill",s)},d(n){n&&N(t)}}}function re(e){let t,i,l;return{c(){t=Q("line"),h(t,"x1",e[5](4)),h(t,"y1",i=e[6](y(4,e[4]))),h(t,"x2",e[5](7.5)),h(t,"y2",l=e[6](y(7.5,e[4]))),h(t,"stroke","green"),h(t,"stroke-width","2")},m(s,n){P(s,t,n)},p(s,n){n&16&&i!==(i=s[6](y(4,s[4])))&&h(t,"y1",i),n&16&&l!==(l=s[6](y(7.5,s[4])))&&h(t,"y2",l)},d(s){s&&N(t)}}}function Ae(e){let t,i,l,s=y(4,e[4])!==null&&y(7.5,e[4])!==null,n,r,p,S,a,c,m,o,f,C,W,D=e[2][e[3]].toFixed(4)+"",z,V,Z,$=se(e[0]),I=[];for(let d=0;d<$.length;d+=1)I[d]=ne(le(e,$,d));let L=s&&re(e);return{c(){t=v("div"),i=Q("svg");for(let d=0;d<I.length;d+=1)I[d].c();l=Le(),L&&L.c(),n=F(),r=v("div"),p=v("input"),a=F(),c=v("p"),m=M("Iteration: "),o=M(e[3]),f=F(),C=v("p"),W=M("Loss: "),z=M(D),h(i,"width",ue),h(i,"height",J),h(i,"class","svelte-js2blq"),h(p,"type","range"),h(p,"min","0"),h(p,"max",S=e[1].length-1),p.value=e[3],h(r,"class","controls svelte-js2blq"),h(t,"class","container svelte-js2blq")},m(d,_){P(d,t,_),g(t,i);for(let u=0;u<I.length;u+=1)I[u]&&I[u].m(i,null);g(i,l),L&&L.m(i,null),g(t,n),g(t,r),g(r,p),g(r,a),g(r,c),g(c,m),g(c,o),g(r,f),g(r,C),g(C,W),g(C,z),V||(Z=We(p,"input",e[8]),V=!0)},p(d,[_]){if(_&97){$=se(d[0]);let u;for(u=0;u<$.length;u+=1){const X=le(d,$,u);I[u]?I[u].p(X,_):(I[u]=ne(X),I[u].c(),I[u].m(i,l))}for(;u<I.length;u+=1)I[u].d(1);I.length=$.length}_&16&&(s=y(4,d[4])!==null&&y(7.5,d[4])!==null),s?L?L.p(d,_):(L=re(d),L.c(),L.m(i,null)):L&&(L.d(1),L=null),_&2&&S!==(S=d[1].length-1)&&h(p,"max",S),_&8&&(p.value=d[3]),_&8&&ee(o,d[3]),_&12&&D!==(D=d[2][d[3]].toFixed(4)+"")&&ee(z,D)},i:w,o:w,d(d){d&&N(t),ge(I,d),L&&L.d(),V=!1,Z()}}}const ue=500,J=500,q=50;function y(e,t){return t[2]!==0?-(t[0]+t[1]*e)/t[2]:null}function je(e,t,i){let{data:l}=t,{weightsHistory:s}=t,{costHistory:n}=t,r=0,p=s[0];function S(o){const f=Math.min(...l.map(W=>W.sepalLength)),C=Math.max(...l.map(W=>W.sepalLength));return(o-f)/(C-f)*(ue-2*q)+q}function a(o){const f=Math.min(...l.map(W=>W.sepalWidth)),C=Math.max(...l.map(W=>W.sepalWidth));return J-((o-f)/(C-f)*(J-2*q)+q)}function c(o){i(4,p=s[o]),i(3,r=o)}const m=o=>c(o.target.value);return e.$$set=o=>{"data"in o&&i(0,l=o.data),"weightsHistory"in o&&i(1,s=o.weightsHistory),"costHistory"in o&&i(2,n=o.costHistory)},[l,s,n,r,p,S,a,c,m]}class Pe extends me{constructor(t){super(),Se(this,t,je,Ae,pe,{data:0,weightsHistory:1,costHistory:2})}}function De(e){return e.filter(t=>t.Species==="Iris-setosa"||t.Species==="Iris-versicolor").map(t=>({sepalLength:t.SepalLengthCm,sepalWidth:t.SepalWidthCm,species:t.Species==="Iris-setosa"?0:1}))}function qe(e){return 1/(1+Math.exp(-e))}function Fe(e,t){return-1/t.length*t.reduce((l,s,n)=>{const r=e[n];return l+(s*Math.log(r)+(1-s)*Math.log(1-r))},0)}function Be(e,t,i,l){let s=new Array(e[0].length).fill(0),n=e.length,r=[],p=[];for(let S=0;S<l;S++){let a=e.map(m=>qe(m.reduce((o,f,C)=>o+f*s[C],0)));s=s.map((m,o)=>m-i*(1/n)*a.reduce((f,C,W)=>f+(C-t[W])*e[W][o],0)),p.push([...s]);let c=Fe(a,t);r.push(c)}return{weights:s,costHistory:r,weightsHistory:p}}const Re=[{Id:1,SepalLengthCm:5.1,SepalWidthCm:3.5,Species:"Iris-setosa"},{Id:2,SepalLengthCm:4.9,SepalWidthCm:3,Species:"Iris-setosa"},{Id:3,SepalLengthCm:4.7,SepalWidthCm:3.2,Species:"Iris-setosa"},{Id:4,SepalLengthCm:4.6,SepalWidthCm:3.1,Species:"Iris-setosa"},{Id:5,SepalLengthCm:5,SepalWidthCm:3.6,Species:"Iris-setosa"},{Id:6,SepalLengthCm:5.4,SepalWidthCm:3.9,Species:"Iris-setosa"},{Id:7,SepalLengthCm:4.6,SepalWidthCm:3.4,Species:"Iris-setosa"},{Id:8,SepalLengthCm:5,SepalWidthCm:3.4,Species:"Iris-setosa"},{Id:9,SepalLengthCm:4.4,SepalWidthCm:2.9,Species:"Iris-setosa"},{Id:10,SepalLengthCm:4.9,SepalWidthCm:3.1,Species:"Iris-setosa"},{Id:11,SepalLengthCm:5.4,SepalWidthCm:3.7,Species:"Iris-setosa"},{Id:12,SepalLengthCm:4.8,SepalWidthCm:3.4,Species:"Iris-setosa"},{Id:13,SepalLengthCm:4.8,SepalWidthCm:3,Species:"Iris-setosa"},{Id:14,SepalLengthCm:4.3,SepalWidthCm:3,Species:"Iris-setosa"},{Id:15,SepalLengthCm:5.8,SepalWidthCm:4,Species:"Iris-setosa"},{Id:16,SepalLengthCm:5.7,SepalWidthCm:4.4,Species:"Iris-setosa"},{Id:17,SepalLengthCm:5.4,SepalWidthCm:3.9,Species:"Iris-setosa"},{Id:18,SepalLengthCm:5.1,SepalWidthCm:3.5,Species:"Iris-setosa"},{Id:19,SepalLengthCm:5.7,SepalWidthCm:3.8,Species:"Iris-setosa"},{Id:20,SepalLengthCm:5.1,SepalWidthCm:3.8,Species:"Iris-setosa"},{Id:21,SepalLengthCm:5.4,SepalWidthCm:3.4,Species:"Iris-setosa"},{Id:22,SepalLengthCm:5.1,SepalWidthCm:3.7,Species:"Iris-setosa"},{Id:23,SepalLengthCm:4.6,SepalWidthCm:3.6,Species:"Iris-setosa"},{Id:24,SepalLengthCm:5.1,SepalWidthCm:3.3,Species:"Iris-setosa"},{Id:25,SepalLengthCm:4.8,SepalWidthCm:3.4,Species:"Iris-setosa"},{Id:26,SepalLengthCm:5,SepalWidthCm:3,Species:"Iris-setosa"},{Id:27,SepalLengthCm:5,SepalWidthCm:3.4,Species:"Iris-setosa"},{Id:28,SepalLengthCm:5.2,SepalWidthCm:3.5,Species:"Iris-setosa"},{Id:29,SepalLengthCm:5.2,SepalWidthCm:3.4,Species:"Iris-setosa"},{Id:30,SepalLengthCm:4.7,SepalWidthCm:3.2,Species:"Iris-setosa"},{Id:31,SepalLengthCm:4.8,SepalWidthCm:3.1,Species:"Iris-setosa"},{Id:32,SepalLengthCm:5.4,SepalWidthCm:3.4,Species:"Iris-setosa"},{Id:33,SepalLengthCm:5.2,SepalWidthCm:4.1,Species:"Iris-setosa"},{Id:34,SepalLengthCm:5.5,SepalWidthCm:4.2,Species:"Iris-setosa"},{Id:35,SepalLengthCm:4.9,SepalWidthCm:3.1,Species:"Iris-setosa"},{Id:36,SepalLengthCm:5,SepalWidthCm:3.2,Species:"Iris-setosa"},{Id:37,SepalLengthCm:5.5,SepalWidthCm:3.5,Species:"Iris-setosa"},{Id:38,SepalLengthCm:4.9,SepalWidthCm:3.1,Species:"Iris-setosa"},{Id:39,SepalLengthCm:4.4,SepalWidthCm:3,Species:"Iris-setosa"},{Id:40,SepalLengthCm:5.1,SepalWidthCm:3.4,Species:"Iris-setosa"},{Id:41,SepalLengthCm:5,SepalWidthCm:3.5,Species:"Iris-setosa"},{Id:42,SepalLengthCm:4.5,SepalWidthCm:2.3,Species:"Iris-setosa"},{Id:43,SepalLengthCm:4.4,SepalWidthCm:3.2,Species:"Iris-setosa"},{Id:44,SepalLengthCm:5,SepalWidthCm:3.5,Species:"Iris-setosa"},{Id:45,SepalLengthCm:5.1,SepalWidthCm:3.8,Species:"Iris-setosa"},{Id:46,SepalLengthCm:4.8,SepalWidthCm:3,Species:"Iris-setosa"},{Id:47,SepalLengthCm:5.1,SepalWidthCm:3.8,Species:"Iris-setosa"},{Id:48,SepalLengthCm:4.6,SepalWidthCm:3.2,Species:"Iris-setosa"},{Id:49,SepalLengthCm:5.3,SepalWidthCm:3.7,Species:"Iris-setosa"},{Id:50,SepalLengthCm:5,SepalWidthCm:3.3,Species:"Iris-setosa"},{Id:51,SepalLengthCm:7,SepalWidthCm:3.2,Species:"Iris-versicolor"},{Id:52,SepalLengthCm:6.4,SepalWidthCm:3.2,Species:"Iris-versicolor"},{Id:53,SepalLengthCm:6.9,SepalWidthCm:3.1,Species:"Iris-versicolor"},{Id:54,SepalLengthCm:5.5,SepalWidthCm:2.3,Species:"Iris-versicolor"},{Id:55,SepalLengthCm:6.5,SepalWidthCm:2.8,Species:"Iris-versicolor"},{Id:56,SepalLengthCm:5.7,SepalWidthCm:2.8,Species:"Iris-versicolor"},{Id:57,SepalLengthCm:6.3,SepalWidthCm:3.3,Species:"Iris-versicolor"},{Id:58,SepalLengthCm:4.9,SepalWidthCm:2.4,Species:"Iris-versicolor"},{Id:59,SepalLengthCm:6.6,SepalWidthCm:2.9,Species:"Iris-versicolor"},{Id:60,SepalLengthCm:5.2,SepalWidthCm:2.7,Species:"Iris-versicolor"},{Id:61,SepalLengthCm:5,SepalWidthCm:2,Species:"Iris-versicolor"},{Id:62,SepalLengthCm:5.9,SepalWidthCm:3,Species:"Iris-versicolor"},{Id:63,SepalLengthCm:6,SepalWidthCm:2.2,Species:"Iris-versicolor"},{Id:64,SepalLengthCm:6.1,SepalWidthCm:2.9,Species:"Iris-versicolor"},{Id:65,SepalLengthCm:5.6,SepalWidthCm:2.9,Species:"Iris-versicolor"},{Id:66,SepalLengthCm:6.7,SepalWidthCm:3.1,Species:"Iris-versicolor"},{Id:67,SepalLengthCm:5.6,SepalWidthCm:3,Species:"Iris-versicolor"},{Id:68,SepalLengthCm:5.8,SepalWidthCm:2.7,Species:"Iris-versicolor"},{Id:69,SepalLengthCm:6.2,SepalWidthCm:2.2,Species:"Iris-versicolor"},{Id:70,SepalLengthCm:5.6,SepalWidthCm:2.5,Species:"Iris-versicolor"},{Id:71,SepalLengthCm:5.9,SepalWidthCm:3.2,Species:"Iris-versicolor"},{Id:72,SepalLengthCm:6.1,SepalWidthCm:2.8,Species:"Iris-versicolor"},{Id:73,SepalLengthCm:6.3,SepalWidthCm:2.5,Species:"Iris-versicolor"},{Id:74,SepalLengthCm:6.1,SepalWidthCm:2.8,Species:"Iris-versicolor"},{Id:75,SepalLengthCm:6.4,SepalWidthCm:2.9,Species:"Iris-versicolor"},{Id:76,SepalLengthCm:6.6,SepalWidthCm:3,Species:"Iris-versicolor"},{Id:77,SepalLengthCm:6.8,SepalWidthCm:2.8,Species:"Iris-versicolor"},{Id:78,SepalLengthCm:6.7,SepalWidthCm:3,Species:"Iris-versicolor"},{Id:79,SepalLengthCm:6,SepalWidthCm:2.9,Species:"Iris-versicolor"},{Id:80,SepalLengthCm:5.7,SepalWidthCm:2.6,Species:"Iris-versicolor"},{Id:81,SepalLengthCm:5.5,SepalWidthCm:2.4,Species:"Iris-versicolor"},{Id:82,SepalLengthCm:5.5,SepalWidthCm:2.4,Species:"Iris-versicolor"},{Id:83,SepalLengthCm:5.8,SepalWidthCm:2.7,Species:"Iris-versicolor"},{Id:84,SepalLengthCm:6,SepalWidthCm:2.7,Species:"Iris-versicolor"},{Id:85,SepalLengthCm:5.4,SepalWidthCm:3,Species:"Iris-versicolor"},{Id:86,SepalLengthCm:6,SepalWidthCm:3.4,Species:"Iris-versicolor"},{Id:87,SepalLengthCm:6.7,SepalWidthCm:3.1,Species:"Iris-versicolor"},{Id:88,SepalLengthCm:6.3,SepalWidthCm:2.3,Species:"Iris-versicolor"},{Id:89,SepalLengthCm:5.6,SepalWidthCm:3,Species:"Iris-versicolor"},{Id:90,SepalLengthCm:5.5,SepalWidthCm:2.5,Species:"Iris-versicolor"},{Id:91,SepalLengthCm:5.5,SepalWidthCm:2.6,Species:"Iris-versicolor"},{Id:92,SepalLengthCm:6.1,SepalWidthCm:3,Species:"Iris-versicolor"},{Id:93,SepalLengthCm:5.8,SepalWidthCm:2.6,Species:"Iris-versicolor"},{Id:94,SepalLengthCm:5,SepalWidthCm:2.3,Species:"Iris-versicolor"},{Id:95,SepalLengthCm:5.6,SepalWidthCm:2.7,Species:"Iris-versicolor"},{Id:96,SepalLengthCm:5.7,SepalWidthCm:3,Species:"Iris-versicolor"},{Id:97,SepalLengthCm:5.7,SepalWidthCm:2.9,Species:"Iris-versicolor"},{Id:98,SepalLengthCm:6.2,SepalWidthCm:2.9,Species:"Iris-versicolor"},{Id:99,SepalLengthCm:5.1,SepalWidthCm:2.5,Species:"Iris-versicolor"},{Id:100,SepalLengthCm:5.7,SepalWidthCm:2.8,Species:"Iris-versicolor"}];function ze(e){let t;return{c(){t=v("p"),t.textContent="Loading model results..."},m(i,l){P(i,t,l)},p:w,i:w,o:w,d(i){i&&N(t)}}}function Ve(e){let t,i;return t=new Pe({props:{data:e[0],weightsHistory:e[1].weightsHistory,costHistory:e[1].costHistory}}),{c(){Oe(t.$$.fragment)},m(l,s){de(t,l,s),i=!0},p(l,s){const n={};s&1&&(n.data=l[0]),s&2&&(n.weightsHistory=l[1].weightsHistory),s&2&&(n.costHistory=l[1].costHistory),t.$set(n)},i(l){i||(R(t.$$.fragment,l),i=!0)},o(l){G(t.$$.fragment,l),i=!1},d(l){he(t,l)}}}function Ye(e){let t,i,l,s,n,r;const p=[Ve,ze],S=[];function a(c,m){return c[1]?0:1}return s=a(e),n=S[s]=p[s](e),{c(){t=v("main"),i=v("h1"),i.textContent="Logistic Regression Visualization",l=F(),n.c(),h(t,"class","svelte-19lvdmt")},m(c,m){P(c,t,m),g(t,i),g(t,l),S[s].m(t,null),r=!0},p(c,[m]){let o=s;s=a(c),s===o?S[s].p(c,m):(Ee(),G(S[o],1,1,()=>{S[o]=null}),Me(),n=S[s],n?n.p(c,m):(n=S[s]=p[s](c),n.c()),R(n,1),n.m(t,null))},i(c){r||(R(n),r=!0)},o(c){G(n),r=!1},d(c){c&&N(t),S[s].d()}}}function Ke(e,t,i){let l=[],s;return ye(async()=>{i(0,l=De(Re));const n=l.map(p=>[1,p.sepalLength,p.sepalWidth]),r=l.map(p=>p.species);i(1,s=Be(n,r,.01,100))}),[l,s]}class Te extends me{constructor(t){super(),Se(this,t,Ke,Ye,pe,{})}}new Te({target:document.getElementById("app")});

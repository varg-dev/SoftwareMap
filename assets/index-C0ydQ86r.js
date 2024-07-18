(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var ko=typeof global<"u"?global:typeof self<"u"?self:typeof window<"u"?window:{},dn=[],Yt=[],Dh=typeof Uint8Array<"u"?Uint8Array:Array,to=!1;function Sc(){to=!0;for(var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=0,t=s.length;e<t;++e)dn[e]=s[e],Yt[s.charCodeAt(e)]=e;Yt[45]=62,Yt[95]=63}function Uh(s){to||Sc();var e,t,n,i,r,a,o=s.length;if(o%4>0)throw new Error("Invalid string. Length must be a multiple of 4");r=s[o-2]==="="?2:s[o-1]==="="?1:0,a=new Dh(o*3/4-r),n=r>0?o-4:o;var l=0;for(e=0,t=0;e<n;e+=4,t+=3)i=Yt[s.charCodeAt(e)]<<18|Yt[s.charCodeAt(e+1)]<<12|Yt[s.charCodeAt(e+2)]<<6|Yt[s.charCodeAt(e+3)],a[l++]=i>>16&255,a[l++]=i>>8&255,a[l++]=i&255;return r===2?(i=Yt[s.charCodeAt(e)]<<2|Yt[s.charCodeAt(e+1)]>>4,a[l++]=i&255):r===1&&(i=Yt[s.charCodeAt(e)]<<10|Yt[s.charCodeAt(e+1)]<<4|Yt[s.charCodeAt(e+2)]>>2,a[l++]=i>>8&255,a[l++]=i&255),a}function Nh(s){return dn[s>>18&63]+dn[s>>12&63]+dn[s>>6&63]+dn[s&63]}function Fh(s,e,t){for(var n,i=[],r=e;r<t;r+=3)n=(s[r]<<16)+(s[r+1]<<8)+s[r+2],i.push(Nh(n));return i.join("")}function zo(s){to||Sc();for(var e,t=s.length,n=t%3,i="",r=[],a=16383,o=0,l=t-n;o<l;o+=a)r.push(Fh(s,o,o+a>l?l:o+a));return n===1?(e=s[t-1],i+=dn[e>>2],i+=dn[e<<4&63],i+="=="):n===2&&(e=(s[t-2]<<8)+s[t-1],i+=dn[e>>10],i+=dn[e>>4&63],i+=dn[e<<2&63],i+="="),r.push(i),r.join("")}function Mr(s,e,t,n,i){var r,a,o=i*8-n-1,l=(1<<o)-1,c=l>>1,h=-7,u=t?i-1:0,d=t?-1:1,p=s[e+u];for(u+=d,r=p&(1<<-h)-1,p>>=-h,h+=o;h>0;r=r*256+s[e+u],u+=d,h-=8);for(a=r&(1<<-h)-1,r>>=-h,h+=n;h>0;a=a*256+s[e+u],u+=d,h-=8);if(r===0)r=1-c;else{if(r===l)return a?NaN:(p?-1:1)*(1/0);a=a+Math.pow(2,n),r=r-c}return(p?-1:1)*a*Math.pow(2,r-n)}function Ec(s,e,t,n,i,r){var a,o,l,c=r*8-i-1,h=(1<<c)-1,u=h>>1,d=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:r-1,g=n?1:-1,_=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,a=h):(a=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+u>=1?e+=d/l:e+=d*Math.pow(2,1-u),e*l>=2&&(a++,l/=2),a+u>=h?(o=0,a=h):a+u>=1?(o=(e*l-1)*Math.pow(2,i),a=a+u):(o=e*Math.pow(2,u-1)*Math.pow(2,i),a=0));i>=8;s[t+p]=o&255,p+=g,o/=256,i-=8);for(a=a<<i|o,c+=i;c>0;s[t+p]=a&255,p+=g,a/=256,c-=8);s[t+p-g]|=_*128}var Oh={}.toString,bc=Array.isArray||function(s){return Oh.call(s)=="[object Array]"},Bh=50;z.TYPED_ARRAY_SUPPORT=ko.TYPED_ARRAY_SUPPORT!==void 0?ko.TYPED_ARRAY_SUPPORT:!0;or();function or(){return z.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function Cn(s,e){if(or()<e)throw new RangeError("Invalid typed array length");return z.TYPED_ARRAY_SUPPORT?(s=new Uint8Array(e),s.__proto__=z.prototype):(s===null&&(s=new z(e)),s.length=e),s}function z(s,e,t){if(!z.TYPED_ARRAY_SUPPORT&&!(this instanceof z))return new z(s,e,t);if(typeof s=="number"){if(typeof e=="string")throw new Error("If encoding is specified then the first argument must be a string");return no(this,s)}return Ac(this,s,e,t)}z.poolSize=8192;z._augment=function(s){return s.__proto__=z.prototype,s};function Ac(s,e,t,n){if(typeof e=="number")throw new TypeError('"value" argument must not be a number');return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer?Gh(s,e,t,n):typeof e=="string"?zh(s,e,t):Vh(s,e)}z.from=function(s,e,t){return Ac(null,s,e,t)};z.TYPED_ARRAY_SUPPORT&&(z.prototype.__proto__=Uint8Array.prototype,z.__proto__=Uint8Array,typeof Symbol<"u"&&Symbol.species&&z[Symbol.species]);function Tc(s){if(typeof s!="number")throw new TypeError('"size" argument must be a number');if(s<0)throw new RangeError('"size" argument must not be negative')}function kh(s,e,t,n){return Tc(e),e<=0?Cn(s,e):t!==void 0?typeof n=="string"?Cn(s,e).fill(t,n):Cn(s,e).fill(t):Cn(s,e)}z.alloc=function(s,e,t){return kh(null,s,e,t)};function no(s,e){if(Tc(e),s=Cn(s,e<0?0:io(e)|0),!z.TYPED_ARRAY_SUPPORT)for(var t=0;t<e;++t)s[t]=0;return s}z.allocUnsafe=function(s){return no(null,s)};z.allocUnsafeSlow=function(s){return no(null,s)};function zh(s,e,t){if((typeof t!="string"||t==="")&&(t="utf8"),!z.isEncoding(t))throw new TypeError('"encoding" must be a valid string encoding');var n=wc(e,t)|0;s=Cn(s,n);var i=s.write(e,t);return i!==n&&(s=s.slice(0,i)),s}function ma(s,e){var t=e.length<0?0:io(e.length)|0;s=Cn(s,t);for(var n=0;n<t;n+=1)s[n]=e[n]&255;return s}function Gh(s,e,t,n){if(e.byteLength,t<0||e.byteLength<t)throw new RangeError("'offset' is out of bounds");if(e.byteLength<t+(n||0))throw new RangeError("'length' is out of bounds");return t===void 0&&n===void 0?e=new Uint8Array(e):n===void 0?e=new Uint8Array(e,t):e=new Uint8Array(e,t,n),z.TYPED_ARRAY_SUPPORT?(s=e,s.__proto__=z.prototype):s=ma(s,e),s}function Vh(s,e){if(gn(e)){var t=io(e.length)|0;return s=Cn(s,t),s.length===0||e.copy(s,0,0,t),s}if(e){if(typeof ArrayBuffer<"u"&&e.buffer instanceof ArrayBuffer||"length"in e)return typeof e.length!="number"||ou(e.length)?Cn(s,0):ma(s,e);if(e.type==="Buffer"&&bc(e.data))return ma(s,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function io(s){if(s>=or())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+or().toString(16)+" bytes");return s|0}z.isBuffer=jt;function gn(s){return!!(s!=null&&s._isBuffer)}z.compare=function(e,t){if(!gn(e)||!gn(t))throw new TypeError("Arguments must be Buffers");if(e===t)return 0;for(var n=e.length,i=t.length,r=0,a=Math.min(n,i);r<a;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0};z.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};z.concat=function(e,t){if(!bc(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return z.alloc(0);var n;if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var i=z.allocUnsafe(t),r=0;for(n=0;n<e.length;++n){var a=e[n];if(!gn(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(i,r),r+=a.length}return i};function wc(s,e){if(gn(s))return s.length;if(typeof ArrayBuffer<"u"&&typeof ArrayBuffer.isView=="function"&&(ArrayBuffer.isView(s)||s instanceof ArrayBuffer))return s.byteLength;typeof s!="string"&&(s=""+s);var t=s.length;if(t===0)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":case void 0:return lr(s).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Uc(s).length;default:if(n)return lr(s).length;e=(""+e).toLowerCase(),n=!0}}z.byteLength=wc;function Hh(s,e,t){var n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(s||(s="utf8");;)switch(s){case"hex":return Qh(this,e,t);case"utf8":case"utf-8":return Lc(this,e,t);case"ascii":return Jh(this,e,t);case"latin1":case"binary":return Zh(this,e,t);case"base64":return jh(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return eu(this,e,t);default:if(n)throw new TypeError("Unknown encoding: "+s);s=(s+"").toLowerCase(),n=!0}}z.prototype._isBuffer=!0;function oi(s,e,t){var n=s[e];s[e]=s[t],s[t]=n}z.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)oi(this,t,t+1);return this};z.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)oi(this,t,t+3),oi(this,t+1,t+2);return this};z.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)oi(this,t,t+7),oi(this,t+1,t+6),oi(this,t+2,t+5),oi(this,t+3,t+4);return this};z.prototype.toString=function(){var e=this.length|0;return e===0?"":arguments.length===0?Lc(this,0,e):Hh.apply(this,arguments)};z.prototype.equals=function(e){if(!gn(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:z.compare(this,e)===0};z.prototype.inspect=function(){var e="",t=Bh;return this.length>0&&(e=this.toString("hex",0,t).match(/.{2}/g).join(" "),this.length>t&&(e+=" ... ")),"<Buffer "+e+">"};z.prototype.compare=function(e,t,n,i,r){if(!gn(e))throw new TypeError("Argument must be a Buffer");if(t===void 0&&(t=0),n===void 0&&(n=e?e.length:0),i===void 0&&(i=0),r===void 0&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,i>>>=0,r>>>=0,this===e)return 0;for(var a=r-i,o=n-t,l=Math.min(a,o),c=this.slice(i,r),h=e.slice(t,n),u=0;u<l;++u)if(c[u]!==h[u]){a=c[u],o=h[u];break}return a<o?-1:o<a?1:0};function Rc(s,e,t,n,i){if(s.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,isNaN(t)&&(t=i?0:s.length-1),t<0&&(t=s.length+t),t>=s.length){if(i)return-1;t=s.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e=="string"&&(e=z.from(e,n)),gn(e))return e.length===0?-1:Go(s,e,t,n,i);if(typeof e=="number")return e=e&255,z.TYPED_ARRAY_SUPPORT&&typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(s,e,t):Uint8Array.prototype.lastIndexOf.call(s,e,t):Go(s,[e],t,n,i);throw new TypeError("val must be string, number or Buffer")}function Go(s,e,t,n,i){var r=1,a=s.length,o=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le")){if(s.length<2||e.length<2)return-1;r=2,a/=2,o/=2,t/=2}function l(p,g){return r===1?p[g]:p.readUInt16BE(g*r)}var c;if(i){var h=-1;for(c=t;c<a;c++)if(l(s,c)===l(e,h===-1?0:c-h)){if(h===-1&&(h=c),c-h+1===o)return h*r}else h!==-1&&(c-=c-h),h=-1}else for(t+o>a&&(t=a-o),c=t;c>=0;c--){for(var u=!0,d=0;d<o;d++)if(l(s,c+d)!==l(e,d)){u=!1;break}if(u)return c}return-1}z.prototype.includes=function(e,t,n){return this.indexOf(e,t,n)!==-1};z.prototype.indexOf=function(e,t,n){return Rc(this,e,t,n,!0)};z.prototype.lastIndexOf=function(e,t,n){return Rc(this,e,t,n,!1)};function Wh(s,e,t,n){t=Number(t)||0;var i=s.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;var r=e.length;if(r%2!==0)throw new TypeError("Invalid hex string");n>r/2&&(n=r/2);for(var a=0;a<n;++a){var o=parseInt(e.substr(a*2,2),16);if(isNaN(o))return a;s[t+a]=o}return a}function Xh(s,e,t,n){return br(lr(e,s.length-t),s,t,n)}function Cc(s,e,t,n){return br(ru(e),s,t,n)}function qh(s,e,t,n){return Cc(s,e,t,n)}function Yh(s,e,t,n){return br(Uc(e),s,t,n)}function $h(s,e,t,n){return br(au(e,s.length-t),s,t,n)}z.prototype.write=function(e,t,n,i){if(t===void 0)i="utf8",n=this.length,t=0;else if(n===void 0&&typeof t=="string")i=t,n=this.length,t=0;else if(isFinite(t))t=t|0,isFinite(n)?(n=n|0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var r=this.length-t;if((n===void 0||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");for(var a=!1;;)switch(i){case"hex":return Wh(this,e,t,n);case"utf8":case"utf-8":return Xh(this,e,t,n);case"ascii":return Cc(this,e,t,n);case"latin1":case"binary":return qh(this,e,t,n);case"base64":return Yh(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $h(this,e,t,n);default:if(a)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),a=!0}};z.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function jh(s,e,t){return e===0&&t===s.length?zo(s):zo(s.slice(e,t))}function Lc(s,e,t){t=Math.min(s.length,t);for(var n=[],i=e;i<t;){var r=s[i],a=null,o=r>239?4:r>223?3:r>191?2:1;if(i+o<=t){var l,c,h,u;switch(o){case 1:r<128&&(a=r);break;case 2:l=s[i+1],(l&192)===128&&(u=(r&31)<<6|l&63,u>127&&(a=u));break;case 3:l=s[i+1],c=s[i+2],(l&192)===128&&(c&192)===128&&(u=(r&15)<<12|(l&63)<<6|c&63,u>2047&&(u<55296||u>57343)&&(a=u));break;case 4:l=s[i+1],c=s[i+2],h=s[i+3],(l&192)===128&&(c&192)===128&&(h&192)===128&&(u=(r&15)<<18|(l&63)<<12|(c&63)<<6|h&63,u>65535&&u<1114112&&(a=u))}}a===null?(a=65533,o=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|a&1023),n.push(a),i+=o}return Kh(n)}var Vo=4096;function Kh(s){var e=s.length;if(e<=Vo)return String.fromCharCode.apply(String,s);for(var t="",n=0;n<e;)t+=String.fromCharCode.apply(String,s.slice(n,n+=Vo));return t}function Jh(s,e,t){var n="";t=Math.min(s.length,t);for(var i=e;i<t;++i)n+=String.fromCharCode(s[i]&127);return n}function Zh(s,e,t){var n="";t=Math.min(s.length,t);for(var i=e;i<t;++i)n+=String.fromCharCode(s[i]);return n}function Qh(s,e,t){var n=s.length;(!e||e<0)&&(e=0),(!t||t<0||t>n)&&(t=n);for(var i="",r=e;r<t;++r)i+=su(s[r]);return i}function eu(s,e,t){for(var n=s.slice(e,t),i="",r=0;r<n.length;r+=2)i+=String.fromCharCode(n[r]+n[r+1]*256);return i}z.prototype.slice=function(e,t){var n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);var i;if(z.TYPED_ARRAY_SUPPORT)i=this.subarray(e,t),i.__proto__=z.prototype;else{var r=t-e;i=new z(r,void 0);for(var a=0;a<r;++a)i[a]=this[a+e]}return i};function xt(s,e,t){if(s%1!==0||s<0)throw new RangeError("offset is not uint");if(s+e>t)throw new RangeError("Trying to access beyond buffer length")}z.prototype.readUIntLE=function(e,t,n){e=e|0,t=t|0,n||xt(e,t,this.length);for(var i=this[e],r=1,a=0;++a<t&&(r*=256);)i+=this[e+a]*r;return i};z.prototype.readUIntBE=function(e,t,n){e=e|0,t=t|0,n||xt(e,t,this.length);for(var i=this[e+--t],r=1;t>0&&(r*=256);)i+=this[e+--t]*r;return i};z.prototype.readUInt8=function(e,t){return t||xt(e,1,this.length),this[e]};z.prototype.readUInt16LE=function(e,t){return t||xt(e,2,this.length),this[e]|this[e+1]<<8};z.prototype.readUInt16BE=function(e,t){return t||xt(e,2,this.length),this[e]<<8|this[e+1]};z.prototype.readUInt32LE=function(e,t){return t||xt(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};z.prototype.readUInt32BE=function(e,t){return t||xt(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};z.prototype.readIntLE=function(e,t,n){e=e|0,t=t|0,n||xt(e,t,this.length);for(var i=this[e],r=1,a=0;++a<t&&(r*=256);)i+=this[e+a]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i};z.prototype.readIntBE=function(e,t,n){e=e|0,t=t|0,n||xt(e,t,this.length);for(var i=t,r=1,a=this[e+--i];i>0&&(r*=256);)a+=this[e+--i]*r;return r*=128,a>=r&&(a-=Math.pow(2,8*t)),a};z.prototype.readInt8=function(e,t){return t||xt(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};z.prototype.readInt16LE=function(e,t){t||xt(e,2,this.length);var n=this[e]|this[e+1]<<8;return n&32768?n|4294901760:n};z.prototype.readInt16BE=function(e,t){t||xt(e,2,this.length);var n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n};z.prototype.readInt32LE=function(e,t){return t||xt(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};z.prototype.readInt32BE=function(e,t){return t||xt(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};z.prototype.readFloatLE=function(e,t){return t||xt(e,4,this.length),Mr(this,e,!0,23,4)};z.prototype.readFloatBE=function(e,t){return t||xt(e,4,this.length),Mr(this,e,!1,23,4)};z.prototype.readDoubleLE=function(e,t){return t||xt(e,8,this.length),Mr(this,e,!0,52,8)};z.prototype.readDoubleBE=function(e,t){return t||xt(e,8,this.length),Mr(this,e,!1,52,8)};function Ft(s,e,t,n,i,r){if(!gn(s))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<r)throw new RangeError('"value" argument is out of bounds');if(t+n>s.length)throw new RangeError("Index out of range")}z.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t=t|0,n=n|0,!i){var r=Math.pow(2,8*n)-1;Ft(this,e,t,n,r,0)}var a=1,o=0;for(this[t]=e&255;++o<n&&(a*=256);)this[t+o]=e/a&255;return t+n};z.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t=t|0,n=n|0,!i){var r=Math.pow(2,8*n)-1;Ft(this,e,t,n,r,0)}var a=n-1,o=1;for(this[t+a]=e&255;--a>=0&&(o*=256);)this[t+a]=e/o&255;return t+n};z.prototype.writeUInt8=function(e,t,n){return e=+e,t=t|0,n||Ft(this,e,t,1,255,0),z.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[t]=e&255,t+1};function Sr(s,e,t,n){e<0&&(e=65535+e+1);for(var i=0,r=Math.min(s.length-t,2);i<r;++i)s[t+i]=(e&255<<8*(n?i:1-i))>>>(n?i:1-i)*8}z.prototype.writeUInt16LE=function(e,t,n){return e=+e,t=t|0,n||Ft(this,e,t,2,65535,0),z.TYPED_ARRAY_SUPPORT?(this[t]=e&255,this[t+1]=e>>>8):Sr(this,e,t,!0),t+2};z.prototype.writeUInt16BE=function(e,t,n){return e=+e,t=t|0,n||Ft(this,e,t,2,65535,0),z.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=e&255):Sr(this,e,t,!1),t+2};function Er(s,e,t,n){e<0&&(e=4294967295+e+1);for(var i=0,r=Math.min(s.length-t,4);i<r;++i)s[t+i]=e>>>(n?i:3-i)*8&255}z.prototype.writeUInt32LE=function(e,t,n){return e=+e,t=t|0,n||Ft(this,e,t,4,4294967295,0),z.TYPED_ARRAY_SUPPORT?(this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255):Er(this,e,t,!0),t+4};z.prototype.writeUInt32BE=function(e,t,n){return e=+e,t=t|0,n||Ft(this,e,t,4,4294967295,0),z.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255):Er(this,e,t,!1),t+4};z.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t=t|0,!i){var r=Math.pow(2,8*n-1);Ft(this,e,t,n,r-1,-r)}var a=0,o=1,l=0;for(this[t]=e&255;++a<n&&(o*=256);)e<0&&l===0&&this[t+a-1]!==0&&(l=1),this[t+a]=(e/o>>0)-l&255;return t+n};z.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t=t|0,!i){var r=Math.pow(2,8*n-1);Ft(this,e,t,n,r-1,-r)}var a=n-1,o=1,l=0;for(this[t+a]=e&255;--a>=0&&(o*=256);)e<0&&l===0&&this[t+a+1]!==0&&(l=1),this[t+a]=(e/o>>0)-l&255;return t+n};z.prototype.writeInt8=function(e,t,n){return e=+e,t=t|0,n||Ft(this,e,t,1,127,-128),z.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),e<0&&(e=255+e+1),this[t]=e&255,t+1};z.prototype.writeInt16LE=function(e,t,n){return e=+e,t=t|0,n||Ft(this,e,t,2,32767,-32768),z.TYPED_ARRAY_SUPPORT?(this[t]=e&255,this[t+1]=e>>>8):Sr(this,e,t,!0),t+2};z.prototype.writeInt16BE=function(e,t,n){return e=+e,t=t|0,n||Ft(this,e,t,2,32767,-32768),z.TYPED_ARRAY_SUPPORT?(this[t]=e>>>8,this[t+1]=e&255):Sr(this,e,t,!1),t+2};z.prototype.writeInt32LE=function(e,t,n){return e=+e,t=t|0,n||Ft(this,e,t,4,2147483647,-2147483648),z.TYPED_ARRAY_SUPPORT?(this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24):Er(this,e,t,!0),t+4};z.prototype.writeInt32BE=function(e,t,n){return e=+e,t=t|0,n||Ft(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),z.TYPED_ARRAY_SUPPORT?(this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255):Er(this,e,t,!1),t+4};function Pc(s,e,t,n,i,r){if(t+n>s.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Ic(s,e,t,n,i){return i||Pc(s,e,t,4),Ec(s,e,t,n,23,4),t+4}z.prototype.writeFloatLE=function(e,t,n){return Ic(this,e,t,!0,n)};z.prototype.writeFloatBE=function(e,t,n){return Ic(this,e,t,!1,n)};function Dc(s,e,t,n,i){return i||Pc(s,e,t,8),Ec(s,e,t,n,52,8),t+8}z.prototype.writeDoubleLE=function(e,t,n){return Dc(this,e,t,!0,n)};z.prototype.writeDoubleBE=function(e,t,n){return Dc(this,e,t,!1,n)};z.prototype.copy=function(e,t,n,i){if(n||(n=0),!i&&i!==0&&(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);var r=i-n,a;if(this===e&&n<t&&t<i)for(a=r-1;a>=0;--a)e[a+t]=this[a+n];else if(r<1e3||!z.TYPED_ARRAY_SUPPORT)for(a=0;a<r;++a)e[a+t]=this[a+n];else Uint8Array.prototype.set.call(e,this.subarray(n,n+r),t);return r};z.prototype.fill=function(e,t,n,i){if(typeof e=="string"){if(typeof t=="string"?(i=t,t=0,n=this.length):typeof n=="string"&&(i=n,n=this.length),e.length===1){var r=e.charCodeAt(0);r<256&&(e=r)}if(i!==void 0&&typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!z.isEncoding(i))throw new TypeError("Unknown encoding: "+i)}else typeof e=="number"&&(e=e&255);if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;t=t>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);var a;if(typeof e=="number")for(a=t;a<n;++a)this[a]=e;else{var o=gn(e)?e:lr(new z(e,i).toString()),l=o.length;for(a=0;a<n-t;++a)this[a+t]=o[a%l]}return this};var tu=/[^+\/0-9A-Za-z-_]/g;function nu(s){if(s=iu(s).replace(tu,""),s.length<2)return"";for(;s.length%4!==0;)s=s+"=";return s}function iu(s){return s.trim?s.trim():s.replace(/^\s+|\s+$/g,"")}function su(s){return s<16?"0"+s.toString(16):s.toString(16)}function lr(s,e){e=e||1/0;for(var t,n=s.length,i=null,r=[],a=0;a<n;++a){if(t=s.charCodeAt(a),t>55295&&t<57344){if(!i){if(t>56319){(e-=3)>-1&&r.push(239,191,189);continue}else if(a+1===n){(e-=3)>-1&&r.push(239,191,189);continue}i=t;continue}if(t<56320){(e-=3)>-1&&r.push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(e-=3)>-1&&r.push(239,191,189);if(i=null,t<128){if((e-=1)<0)break;r.push(t)}else if(t<2048){if((e-=2)<0)break;r.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;r.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;r.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return r}function ru(s){for(var e=[],t=0;t<s.length;++t)e.push(s.charCodeAt(t)&255);return e}function au(s,e){for(var t,n,i,r=[],a=0;a<s.length&&!((e-=2)<0);++a)t=s.charCodeAt(a),n=t>>8,i=t%256,r.push(i),r.push(n);return r}function Uc(s){return Uh(nu(s))}function br(s,e,t,n){for(var i=0;i<n&&!(i+t>=e.length||i>=s.length);++i)e[i+t]=s[i];return i}function ou(s){return s!==s}function jt(s){return s!=null&&(!!s._isBuffer||Nc(s)||lu(s))}function Nc(s){return!!s.constructor&&typeof s.constructor.isBuffer=="function"&&s.constructor.isBuffer(s)}function lu(s){return typeof s.readFloatLE=="function"&&typeof s.slice=="function"&&Nc(s.slice(0,0))}class Ke extends Error{constructor(e,t,n,...i){Array.isArray(t)&&(t=t.join(" ").trim()),super(t),Error.captureStackTrace!==void 0&&Error.captureStackTrace(this,Ke),this.code=e;for(const r of i)for(const a in r){const o=r[a];this[a]=jt(o)?o.toString(n.encoding):o==null?o:JSON.parse(JSON.stringify(o))}}}const cu=function(s){return typeof s=="object"&&s!==null&&!Array.isArray(s)},Fc=function(s){const e=[];for(let t=0,n=s.length;t<n;t++){const i=s[t];if(i==null||i===!1)e[t]={disabled:!0};else if(typeof i=="string")e[t]={name:i};else if(cu(i)){if(typeof i.name!="string")throw new Ke("CSV_OPTION_COLUMNS_MISSING_NAME",["Option columns missing name:",`property "name" is required at position ${t}`,"when column is an object literal"]);e[t]=i}else throw new Ke("CSV_INVALID_COLUMN_DEFINITION",["Invalid column definition:","expect a string or a literal object,",`got ${JSON.stringify(i)} at position ${t}`])}return e};class Ho{constructor(e=100){this.size=e,this.length=0,this.buf=z.allocUnsafe(e)}prepend(e){if(jt(e)){const t=this.length+e.length;if(t>=this.size&&(this.resize(),t>=this.size))throw Error("INVALID_BUFFER_STATE");const n=this.buf;this.buf=z.allocUnsafe(this.size),e.copy(this.buf,0),n.copy(this.buf,e.length),this.length+=e.length}else{const t=this.length++;t===this.size&&this.resize();const n=this.clone();this.buf[0]=e,n.copy(this.buf,1,0,t)}}append(e){const t=this.length++;t===this.size&&this.resize(),this.buf[t]=e}clone(){return z.from(this.buf.slice(0,this.length))}resize(){const e=this.length;this.size=this.size*2;const t=z.allocUnsafe(this.size);this.buf.copy(t,0,0,e),this.buf=t}toString(e){return e?this.buf.slice(0,this.length).toString(e):Uint8Array.prototype.slice.call(this.buf.slice(0,this.length))}toJSON(){return this.toString("utf8")}reset(){this.length=0}}const hu=12,uu=13,du=10,fu=32,pu=9,mu=function(s){return{bomSkipped:!1,bufBytesStart:0,castField:s.cast_function,commenting:!1,error:void 0,enabled:s.from_line===1,escaping:!1,escapeIsQuote:jt(s.escape)&&jt(s.quote)&&z.compare(s.escape,s.quote)===0,expectedRecordLength:Array.isArray(s.columns)?s.columns.length:void 0,field:new Ho(20),firstLineToHeaders:s.cast_first_line_to_header,needMoreDataSize:Math.max(s.comment!==null?s.comment.length:0,...s.delimiter.map(e=>e.length),s.quote!==null?s.quote.length:0),previousBuf:void 0,quoting:!1,stop:!1,rawBuffer:new Ho(100),record:[],recordHasError:!1,record_length:0,recordDelimiterMaxLength:s.record_delimiter.length===0?0:Math.max(...s.record_delimiter.map(e=>e.length)),trimChars:[z.from(" ",s.encoding)[0],z.from("	",s.encoding)[0]],wasQuoting:!1,wasRowDelimiter:!1,timchars:[z.from(z.from([uu],"utf8").toString(),s.encoding),z.from(z.from([du],"utf8").toString(),s.encoding),z.from(z.from([hu],"utf8").toString(),s.encoding),z.from(z.from([fu],"utf8").toString(),s.encoding),z.from(z.from([pu],"utf8").toString(),s.encoding)]}},gu=function(s){return s.replace(/([A-Z])/g,function(e,t){return"_"+t.toLowerCase()})},Wo=function(s){const e={};for(const n in s)e[gu(n)]=s[n];if(e.encoding===void 0||e.encoding===!0)e.encoding="utf8";else if(e.encoding===null||e.encoding===!1)e.encoding=null;else if(typeof e.encoding!="string"&&e.encoding!==null)throw new Ke("CSV_INVALID_OPTION_ENCODING",["Invalid option encoding:","encoding must be a string or null to return a buffer,",`got ${JSON.stringify(e.encoding)}`],e);if(e.bom===void 0||e.bom===null||e.bom===!1)e.bom=!1;else if(e.bom!==!0)throw new Ke("CSV_INVALID_OPTION_BOM",["Invalid option bom:","bom must be true,",`got ${JSON.stringify(e.bom)}`],e);if(e.cast_function=null,e.cast===void 0||e.cast===null||e.cast===!1||e.cast==="")e.cast=void 0;else if(typeof e.cast=="function")e.cast_function=e.cast,e.cast=!0;else if(e.cast!==!0)throw new Ke("CSV_INVALID_OPTION_CAST",["Invalid option cast:","cast must be true or a function,",`got ${JSON.stringify(e.cast)}`],e);if(e.cast_date===void 0||e.cast_date===null||e.cast_date===!1||e.cast_date==="")e.cast_date=!1;else if(e.cast_date===!0)e.cast_date=function(n){const i=Date.parse(n);return isNaN(i)?n:new Date(i)};else if(typeof e.cast_date!="function")throw new Ke("CSV_INVALID_OPTION_CAST_DATE",["Invalid option cast_date:","cast_date must be true or a function,",`got ${JSON.stringify(e.cast_date)}`],e);if(e.cast_first_line_to_header=null,e.columns===!0)e.cast_first_line_to_header=void 0;else if(typeof e.columns=="function")e.cast_first_line_to_header=e.columns,e.columns=!0;else if(Array.isArray(e.columns))e.columns=Fc(e.columns);else if(e.columns===void 0||e.columns===null||e.columns===!1)e.columns=!1;else throw new Ke("CSV_INVALID_OPTION_COLUMNS",["Invalid option columns:","expect an array, a function or true,",`got ${JSON.stringify(e.columns)}`],e);if(e.group_columns_by_name===void 0||e.group_columns_by_name===null||e.group_columns_by_name===!1)e.group_columns_by_name=!1;else{if(e.group_columns_by_name!==!0)throw new Ke("CSV_INVALID_OPTION_GROUP_COLUMNS_BY_NAME",["Invalid option group_columns_by_name:","expect an boolean,",`got ${JSON.stringify(e.group_columns_by_name)}`],e);if(e.columns===!1)throw new Ke("CSV_INVALID_OPTION_GROUP_COLUMNS_BY_NAME",["Invalid option group_columns_by_name:","the `columns` mode must be activated."],e)}if(e.comment===void 0||e.comment===null||e.comment===!1||e.comment==="")e.comment=null;else if(typeof e.comment=="string"&&(e.comment=z.from(e.comment,e.encoding)),!jt(e.comment))throw new Ke("CSV_INVALID_OPTION_COMMENT",["Invalid option comment:","comment must be a buffer or a string,",`got ${JSON.stringify(e.comment)}`],e);if(e.comment_no_infix===void 0||e.comment_no_infix===null||e.comment_no_infix===!1)e.comment_no_infix=!1;else if(e.comment_no_infix!==!0)throw new Ke("CSV_INVALID_OPTION_COMMENT",["Invalid option comment_no_infix:","value must be a boolean,",`got ${JSON.stringify(e.comment_no_infix)}`],e);const t=JSON.stringify(e.delimiter);if(Array.isArray(e.delimiter)||(e.delimiter=[e.delimiter]),e.delimiter.length===0)throw new Ke("CSV_INVALID_OPTION_DELIMITER",["Invalid option delimiter:","delimiter must be a non empty string or buffer or array of string|buffer,",`got ${t}`],e);if(e.delimiter=e.delimiter.map(function(n){if(n==null||n===!1)return z.from(",",e.encoding);if(typeof n=="string"&&(n=z.from(n,e.encoding)),!jt(n)||n.length===0)throw new Ke("CSV_INVALID_OPTION_DELIMITER",["Invalid option delimiter:","delimiter must be a non empty string or buffer or array of string|buffer,",`got ${t}`],e);return n}),e.escape===void 0||e.escape===!0?e.escape=z.from('"',e.encoding):typeof e.escape=="string"?e.escape=z.from(e.escape,e.encoding):(e.escape===null||e.escape===!1)&&(e.escape=null),e.escape!==null&&!jt(e.escape))throw new Error(`Invalid Option: escape must be a buffer, a string or a boolean, got ${JSON.stringify(e.escape)}`);if(e.from===void 0||e.from===null)e.from=1;else if(typeof e.from=="string"&&/\d+/.test(e.from)&&(e.from=parseInt(e.from)),Number.isInteger(e.from)){if(e.from<0)throw new Error(`Invalid Option: from must be a positive integer, got ${JSON.stringify(s.from)}`)}else throw new Error(`Invalid Option: from must be an integer, got ${JSON.stringify(e.from)}`);if(e.from_line===void 0||e.from_line===null)e.from_line=1;else if(typeof e.from_line=="string"&&/\d+/.test(e.from_line)&&(e.from_line=parseInt(e.from_line)),Number.isInteger(e.from_line)){if(e.from_line<=0)throw new Error(`Invalid Option: from_line must be a positive integer greater than 0, got ${JSON.stringify(s.from_line)}`)}else throw new Error(`Invalid Option: from_line must be an integer, got ${JSON.stringify(s.from_line)}`);if(e.ignore_last_delimiters===void 0||e.ignore_last_delimiters===null)e.ignore_last_delimiters=!1;else if(typeof e.ignore_last_delimiters=="number")e.ignore_last_delimiters=Math.floor(e.ignore_last_delimiters),e.ignore_last_delimiters===0&&(e.ignore_last_delimiters=!1);else if(typeof e.ignore_last_delimiters!="boolean")throw new Ke("CSV_INVALID_OPTION_IGNORE_LAST_DELIMITERS",["Invalid option `ignore_last_delimiters`:","the value must be a boolean value or an integer,",`got ${JSON.stringify(e.ignore_last_delimiters)}`],e);if(e.ignore_last_delimiters===!0&&e.columns===!1)throw new Ke("CSV_IGNORE_LAST_DELIMITERS_REQUIRES_COLUMNS",["The option `ignore_last_delimiters`","requires the activation of the `columns` option"],e);if(e.info===void 0||e.info===null||e.info===!1)e.info=!1;else if(e.info!==!0)throw new Error(`Invalid Option: info must be true, got ${JSON.stringify(e.info)}`);if(e.max_record_size===void 0||e.max_record_size===null||e.max_record_size===!1)e.max_record_size=0;else if(!(Number.isInteger(e.max_record_size)&&e.max_record_size>=0))if(typeof e.max_record_size=="string"&&/\d+/.test(e.max_record_size))e.max_record_size=parseInt(e.max_record_size);else throw new Error(`Invalid Option: max_record_size must be a positive integer, got ${JSON.stringify(e.max_record_size)}`);if(e.objname===void 0||e.objname===null||e.objname===!1)e.objname=void 0;else if(jt(e.objname)){if(e.objname.length===0)throw new Error("Invalid Option: objname must be a non empty buffer");e.encoding===null||(e.objname=e.objname.toString(e.encoding))}else if(typeof e.objname=="string"){if(e.objname.length===0)throw new Error("Invalid Option: objname must be a non empty string")}else if(typeof e.objname!="number")throw new Error(`Invalid Option: objname must be a string or a buffer, got ${e.objname}`);if(e.objname!==void 0){if(typeof e.objname=="number"){if(e.columns!==!1)throw Error("Invalid Option: objname index cannot be combined with columns or be defined as a field")}else if(e.columns===!1)throw Error("Invalid Option: objname field must be combined with columns or be defined as an index")}if(e.on_record===void 0||e.on_record===null)e.on_record=void 0;else if(typeof e.on_record!="function")throw new Ke("CSV_INVALID_OPTION_ON_RECORD",["Invalid option `on_record`:","expect a function,",`got ${JSON.stringify(e.on_record)}`],e);if(e.on_skip!==void 0&&e.on_skip!==null&&typeof e.on_skip!="function")throw new Error(`Invalid Option: on_skip must be a function, got ${JSON.stringify(e.on_skip)}`);if(e.quote===null||e.quote===!1||e.quote==="")e.quote=null;else if(e.quote===void 0||e.quote===!0?e.quote=z.from('"',e.encoding):typeof e.quote=="string"&&(e.quote=z.from(e.quote,e.encoding)),!jt(e.quote))throw new Error(`Invalid Option: quote must be a buffer or a string, got ${JSON.stringify(e.quote)}`);if(e.raw===void 0||e.raw===null||e.raw===!1)e.raw=!1;else if(e.raw!==!0)throw new Error(`Invalid Option: raw must be true, got ${JSON.stringify(e.raw)}`);if(e.record_delimiter===void 0)e.record_delimiter=[];else if(typeof e.record_delimiter=="string"||jt(e.record_delimiter)){if(e.record_delimiter.length===0)throw new Ke("CSV_INVALID_OPTION_RECORD_DELIMITER",["Invalid option `record_delimiter`:","value must be a non empty string or buffer,",`got ${JSON.stringify(e.record_delimiter)}`],e);e.record_delimiter=[e.record_delimiter]}else if(!Array.isArray(e.record_delimiter))throw new Ke("CSV_INVALID_OPTION_RECORD_DELIMITER",["Invalid option `record_delimiter`:","value must be a string, a buffer or array of string|buffer,",`got ${JSON.stringify(e.record_delimiter)}`],e);if(e.record_delimiter=e.record_delimiter.map(function(n,i){if(typeof n!="string"&&!jt(n))throw new Ke("CSV_INVALID_OPTION_RECORD_DELIMITER",["Invalid option `record_delimiter`:","value must be a string, a buffer or array of string|buffer",`at index ${i},`,`got ${JSON.stringify(n)}`],e);if(n.length===0)throw new Ke("CSV_INVALID_OPTION_RECORD_DELIMITER",["Invalid option `record_delimiter`:","value must be a non empty string or buffer",`at index ${i},`,`got ${JSON.stringify(n)}`],e);return typeof n=="string"&&(n=z.from(n,e.encoding)),n}),typeof e.relax_column_count!="boolean")if(e.relax_column_count===void 0||e.relax_column_count===null)e.relax_column_count=!1;else throw new Error(`Invalid Option: relax_column_count must be a boolean, got ${JSON.stringify(e.relax_column_count)}`);if(typeof e.relax_column_count_less!="boolean")if(e.relax_column_count_less===void 0||e.relax_column_count_less===null)e.relax_column_count_less=!1;else throw new Error(`Invalid Option: relax_column_count_less must be a boolean, got ${JSON.stringify(e.relax_column_count_less)}`);if(typeof e.relax_column_count_more!="boolean")if(e.relax_column_count_more===void 0||e.relax_column_count_more===null)e.relax_column_count_more=!1;else throw new Error(`Invalid Option: relax_column_count_more must be a boolean, got ${JSON.stringify(e.relax_column_count_more)}`);if(typeof e.relax_quotes!="boolean")if(e.relax_quotes===void 0||e.relax_quotes===null)e.relax_quotes=!1;else throw new Error(`Invalid Option: relax_quotes must be a boolean, got ${JSON.stringify(e.relax_quotes)}`);if(typeof e.skip_empty_lines!="boolean")if(e.skip_empty_lines===void 0||e.skip_empty_lines===null)e.skip_empty_lines=!1;else throw new Error(`Invalid Option: skip_empty_lines must be a boolean, got ${JSON.stringify(e.skip_empty_lines)}`);if(typeof e.skip_records_with_empty_values!="boolean")if(e.skip_records_with_empty_values===void 0||e.skip_records_with_empty_values===null)e.skip_records_with_empty_values=!1;else throw new Error(`Invalid Option: skip_records_with_empty_values must be a boolean, got ${JSON.stringify(e.skip_records_with_empty_values)}`);if(typeof e.skip_records_with_error!="boolean")if(e.skip_records_with_error===void 0||e.skip_records_with_error===null)e.skip_records_with_error=!1;else throw new Error(`Invalid Option: skip_records_with_error must be a boolean, got ${JSON.stringify(e.skip_records_with_error)}`);if(e.rtrim===void 0||e.rtrim===null||e.rtrim===!1)e.rtrim=!1;else if(e.rtrim!==!0)throw new Error(`Invalid Option: rtrim must be a boolean, got ${JSON.stringify(e.rtrim)}`);if(e.ltrim===void 0||e.ltrim===null||e.ltrim===!1)e.ltrim=!1;else if(e.ltrim!==!0)throw new Error(`Invalid Option: ltrim must be a boolean, got ${JSON.stringify(e.ltrim)}`);if(e.trim===void 0||e.trim===null||e.trim===!1)e.trim=!1;else if(e.trim!==!0)throw new Error(`Invalid Option: trim must be a boolean, got ${JSON.stringify(e.trim)}`);if(e.trim===!0&&s.ltrim!==!1?e.ltrim=!0:e.ltrim!==!0&&(e.ltrim=!1),e.trim===!0&&s.rtrim!==!1?e.rtrim=!0:e.rtrim!==!0&&(e.rtrim=!1),e.to===void 0||e.to===null)e.to=-1;else if(typeof e.to=="string"&&/\d+/.test(e.to)&&(e.to=parseInt(e.to)),Number.isInteger(e.to)){if(e.to<=0)throw new Error(`Invalid Option: to must be a positive integer greater than 0, got ${JSON.stringify(s.to)}`)}else throw new Error(`Invalid Option: to must be an integer, got ${JSON.stringify(s.to)}`);if(e.to_line===void 0||e.to_line===null)e.to_line=-1;else if(typeof e.to_line=="string"&&/\d+/.test(e.to_line)&&(e.to_line=parseInt(e.to_line)),Number.isInteger(e.to_line)){if(e.to_line<=0)throw new Error(`Invalid Option: to_line must be a positive integer greater than 0, got ${JSON.stringify(s.to_line)}`)}else throw new Error(`Invalid Option: to_line must be an integer, got ${JSON.stringify(s.to_line)}`);return e},Xo=function(s){return s.every(e=>e==null||e.toString&&e.toString().trim()==="")},_u=13,xu=10,mi={utf8:z.from([239,187,191]),utf16le:z.from([255,254])},vu=function(s={}){const e={bytes:0,comment_lines:0,empty_lines:0,invalid_field_length:0,lines:1,records:0},t=Wo(s);return{info:e,original_options:s,options:t,state:mu(t),__needMoreData:function(n,i,r){if(r)return!1;const{encoding:a,escape:o,quote:l}=this.options,{quoting:c,needMoreDataSize:h,recordDelimiterMaxLength:u}=this.state,d=i-n-1,p=Math.max(h,u===0?z.from(`\r
`,a).length:u,c?(o===null?0:o.length)+l.length:0,c?l.length+u:0);return d<p},parse:function(n,i,r,a){const{bom:o,comment_no_infix:l,encoding:c,from_line:h,ltrim:u,max_record_size:d,raw:p,relax_quotes:g,rtrim:_,skip_empty_lines:m,to:f,to_line:y}=this.options;let{comment:x,escape:E,quote:I,record_delimiter:A}=this.options;const{bomSkipped:w,previousBuf:F,rawBuffer:b,escapeIsQuote:S}=this.state;let R;if(F===void 0)if(n===void 0){a();return}else R=n;else F!==void 0&&n===void 0?R=F:R=z.concat([F,n]);if(w===!1)if(o===!1)this.state.bomSkipped=!0;else if(R.length<3){if(i===!1){this.state.previousBuf=R;return}}else{for(const G in mi)if(mi[G].compare(R,0,mi[G].length)===0){const Y=mi[G].length;this.state.bufBytesStart+=Y,R=R.slice(Y),this.options=Wo({...this.original_options,encoding:G}),{comment:x,escape:E,quote:I}=this.options;break}this.state.bomSkipped=!0}const W=R.length;let U;for(U=0;U<W&&!this.__needMoreData(U,W,i);U++){if(this.state.wasRowDelimiter===!0&&(this.info.lines++,this.state.wasRowDelimiter=!1),y!==-1&&this.info.lines>y){this.state.stop=!0,a();return}this.state.quoting===!1&&A.length===0&&this.__autoDiscoverRecordDelimiter(R,U)&&(A=this.options.record_delimiter);const G=R[U];if(p===!0&&b.append(G),(G===_u||G===xu)&&this.state.wasRowDelimiter===!1&&(this.state.wasRowDelimiter=!0),this.state.escaping===!0)this.state.escaping=!1;else{if(E!==null&&this.state.quoting===!0&&this.__isEscape(R,U,G)&&U+E.length<W)if(S){if(this.__isQuote(R,U+E.length)){this.state.escaping=!0,U+=E.length-1;continue}}else{this.state.escaping=!0,U+=E.length-1;continue}if(this.state.commenting===!1&&this.__isQuote(R,U))if(this.state.quoting===!0){const j=R[U+I.length],V=_&&this.__isCharTrimable(R,U+I.length),re=x!==null&&this.__compareBytes(x,R,U+I.length,j),ce=this.__isDelimiter(R,U+I.length,j),pe=A.length===0?this.__autoDiscoverRecordDelimiter(R,U+I.length):this.__isRecordDelimiter(j,R,U+I.length);if(E!==null&&this.__isEscape(R,U,G)&&this.__isQuote(R,U+E.length))U+=E.length-1;else if(!j||ce||pe||re||V){this.state.quoting=!1,this.state.wasQuoting=!0,U+=I.length-1;continue}else if(g===!1){const ke=this.__error(new Ke("CSV_INVALID_CLOSING_QUOTE",["Invalid Closing Quote:",`got "${String.fromCharCode(j)}"`,`at line ${this.info.lines}`,"instead of delimiter, record delimiter, trimable character","(if activated) or comment"],this.options,this.__infoField()));if(ke!==void 0)return ke}else this.state.quoting=!1,this.state.wasQuoting=!0,this.state.field.prepend(I),U+=I.length-1}else if(this.state.field.length!==0){if(g===!1){const j=this.__infoField(),V=Object.keys(mi).map(ce=>mi[ce].equals(this.state.field.toString())?ce:!1).filter(Boolean)[0],re=this.__error(new Ke("INVALID_OPENING_QUOTE",["Invalid Opening Quote:",`a quote is found on field ${JSON.stringify(j.column)} at line ${j.lines}, value is ${JSON.stringify(this.state.field.toString(c))}`,V?`(${V} bom)`:void 0],this.options,j,{field:this.state.field}));if(re!==void 0)return re}}else{this.state.quoting=!0,U+=I.length-1;continue}if(this.state.quoting===!1){const j=this.__isRecordDelimiter(G,R,U);if(j!==0){if(this.state.commenting&&this.state.wasQuoting===!1&&this.state.record.length===0&&this.state.field.length===0)this.info.comment_lines++;else{if(this.state.enabled===!1&&this.info.lines+(this.state.wasRowDelimiter===!0?1:0)>=h){this.state.enabled=!0,this.__resetField(),this.__resetRecord(),U+=j-1;continue}if(m===!0&&this.state.wasQuoting===!1&&this.state.record.length===0&&this.state.field.length===0){this.info.empty_lines++,U+=j-1;continue}this.info.bytes=this.state.bufBytesStart+U;const ce=this.__onField();if(ce!==void 0)return ce;this.info.bytes=this.state.bufBytesStart+U+j;const pe=this.__onRecord(r);if(pe!==void 0)return pe;if(f!==-1&&this.info.records>=f){this.state.stop=!0,a();return}}this.state.commenting=!1,U+=j-1;continue}if(this.state.commenting)continue;if(x!==null&&(l===!1||this.state.record.length===0&&this.state.field.length===0)&&this.__compareBytes(x,R,U,G)!==0){this.state.commenting=!0;continue}const V=this.__isDelimiter(R,U,G);if(V!==0){this.info.bytes=this.state.bufBytesStart+U;const re=this.__onField();if(re!==void 0)return re;U+=V-1;continue}}}if(this.state.commenting===!1&&d!==0&&this.state.record_length+this.state.field.length>d)return this.__error(new Ke("CSV_MAX_RECORD_SIZE",["Max Record Size:","record exceed the maximum number of tolerated bytes",`of ${d}`,`at line ${this.info.lines}`],this.options,this.__infoField()));const Y=u===!1||this.state.quoting===!0||this.state.field.length!==0||!this.__isCharTrimable(R,U),H=_===!1||this.state.wasQuoting===!1;if(Y===!0&&H===!0)this.state.field.append(G);else{if(_===!0&&!this.__isCharTrimable(R,U))return this.__error(new Ke("CSV_NON_TRIMABLE_CHAR_AFTER_CLOSING_QUOTE",["Invalid Closing Quote:","found non trimable byte after quote",`at line ${this.info.lines}`],this.options,this.__infoField()));Y===!1&&(U+=this.__isCharTrimable(R,U)-1);continue}}if(i===!0)if(this.state.quoting===!0){const G=this.__error(new Ke("CSV_QUOTE_NOT_CLOSED",["Quote Not Closed:",`the parsing is finished with an opening quote at line ${this.info.lines}`],this.options,this.__infoField()));if(G!==void 0)return G}else if(this.state.wasQuoting===!0||this.state.record.length!==0||this.state.field.length!==0){this.info.bytes=this.state.bufBytesStart+U;const G=this.__onField();if(G!==void 0)return G;const Y=this.__onRecord(r);if(Y!==void 0)return Y}else this.state.wasRowDelimiter===!0?this.info.empty_lines++:this.state.commenting===!0&&this.info.comment_lines++;else this.state.bufBytesStart+=U,this.state.previousBuf=R.slice(U);this.state.wasRowDelimiter===!0&&(this.info.lines++,this.state.wasRowDelimiter=!1)},__onRecord:function(n){const{columns:i,group_columns_by_name:r,encoding:a,info:o,from:l,relax_column_count:c,relax_column_count_less:h,relax_column_count_more:u,raw:d,skip_records_with_empty_values:p}=this.options,{enabled:g,record:_}=this.state;if(g===!1)return this.__resetRecord();const m=_.length;if(i===!0){if(p===!0&&Xo(_)){this.__resetRecord();return}return this.__firstLineToColumns(_)}if(i===!1&&this.info.records===0&&(this.state.expectedRecordLength=m),m!==this.state.expectedRecordLength){const f=i===!1?new Ke("CSV_RECORD_INCONSISTENT_FIELDS_LENGTH",["Invalid Record Length:",`expect ${this.state.expectedRecordLength},`,`got ${m} on line ${this.info.lines}`],this.options,this.__infoField(),{record:_}):new Ke("CSV_RECORD_INCONSISTENT_COLUMNS",["Invalid Record Length:",`columns length is ${i.length},`,`got ${m} on line ${this.info.lines}`],this.options,this.__infoField(),{record:_});if(c===!0||h===!0&&m<this.state.expectedRecordLength||u===!0&&m>this.state.expectedRecordLength)this.info.invalid_field_length++,this.state.error=f;else{const y=this.__error(f);if(y)return y}}if(p===!0&&Xo(_)){this.__resetRecord();return}if(this.state.recordHasError===!0){this.__resetRecord(),this.state.recordHasError=!1;return}if(this.info.records++,l===1||this.info.records>=l){const{objname:f}=this.options;if(i!==!1){const y={};for(let x=0,E=_.length;x<E;x++)i[x]===void 0||i[x].disabled||(r===!0&&y[i[x].name]!==void 0?Array.isArray(y[i[x].name])?y[i[x].name]=y[i[x].name].concat(_[x]):y[i[x].name]=[y[i[x].name],_[x]]:y[i[x].name]=_[x]);if(d===!0||o===!0){const x=Object.assign({record:y},d===!0?{raw:this.state.rawBuffer.toString(a)}:{},o===!0?{info:this.__infoRecord()}:{}),E=this.__push(f===void 0?x:[y[f],x],n);if(E)return E}else{const x=this.__push(f===void 0?y:[y[f],y],n);if(x)return x}}else if(d===!0||o===!0){const y=Object.assign({record:_},d===!0?{raw:this.state.rawBuffer.toString(a)}:{},o===!0?{info:this.__infoRecord()}:{}),x=this.__push(f===void 0?y:[_[f],y],n);if(x)return x}else{const y=this.__push(f===void 0?_:[_[f],_],n);if(y)return y}}this.__resetRecord()},__firstLineToColumns:function(n){const{firstLineToHeaders:i}=this.state;try{const r=i===void 0?n:i.call(null,n);if(!Array.isArray(r))return this.__error(new Ke("CSV_INVALID_COLUMN_MAPPING",["Invalid Column Mapping:","expect an array from column function,",`got ${JSON.stringify(r)}`],this.options,this.__infoField(),{headers:r}));const a=Fc(r);this.state.expectedRecordLength=a.length,this.options.columns=a,this.__resetRecord();return}catch(r){return r}},__resetRecord:function(){this.options.raw===!0&&this.state.rawBuffer.reset(),this.state.error=void 0,this.state.record=[],this.state.record_length=0},__onField:function(){const{cast:n,encoding:i,rtrim:r,max_record_size:a}=this.options,{enabled:o,wasQuoting:l}=this.state;if(o===!1)return this.__resetField();let c=this.state.field.toString(i);if(r===!0&&l===!1&&(c=c.trimRight()),n===!0){const[h,u]=this.__cast(c);if(h!==void 0)return h;c=u}this.state.record.push(c),a!==0&&typeof c=="string"&&(this.state.record_length+=c.length),this.__resetField()},__resetField:function(){this.state.field.reset(),this.state.wasQuoting=!1},__push:function(n,i){const{on_record:r}=this.options;if(r!==void 0){const a=this.__infoRecord();try{n=r.call(null,n,a)}catch(o){return o}if(n==null)return}i(n)},__cast:function(n){const{columns:i,relax_column_count:r}=this.options;if(Array.isArray(i)===!0&&r&&this.options.columns.length<=this.state.record.length)return[void 0,void 0];if(this.state.castField!==null)try{const o=this.__infoField();return[void 0,this.state.castField.call(null,n,o)]}catch(o){return[o]}if(this.__isFloat(n))return[void 0,parseFloat(n)];if(this.options.cast_date!==!1){const o=this.__infoField();return[void 0,this.options.cast_date.call(null,n,o)]}return[void 0,n]},__isCharTrimable:function(n,i){return((a,o)=>{const{timchars:l}=this.state;e:for(let c=0;c<l.length;c++){const h=l[c];for(let u=0;u<h.length;u++)if(h[u]!==a[o+u])continue e;return h.length}return 0})(n,i)},__isFloat:function(n){return n-parseFloat(n)+1>=0},__compareBytes:function(n,i,r,a){if(n[0]!==a)return 0;const o=n.length;for(let l=1;l<o;l++)if(n[l]!==i[r+l])return 0;return o},__isDelimiter:function(n,i,r){const{delimiter:a,ignore_last_delimiters:o}=this.options;if(o===!0&&this.state.record.length===this.options.columns.length-1)return 0;if(o!==!1&&typeof o=="number"&&this.state.record.length===o-1)return 0;e:for(let l=0;l<a.length;l++){const c=a[l];if(c[0]===r){for(let h=1;h<c.length;h++)if(c[h]!==n[i+h])continue e;return c.length}}return 0},__isRecordDelimiter:function(n,i,r){const{record_delimiter:a}=this.options,o=a.length;e:for(let l=0;l<o;l++){const c=a[l],h=c.length;if(c[0]===n){for(let u=1;u<h;u++)if(c[u]!==i[r+u])continue e;return c.length}}return 0},__isEscape:function(n,i,r){const{escape:a}=this.options;if(a===null)return!1;const o=a.length;if(a[0]===r){for(let l=0;l<o;l++)if(a[l]!==n[i+l])return!1;return!0}return!1},__isQuote:function(n,i){const{quote:r}=this.options;if(r===null)return!1;const a=r.length;for(let o=0;o<a;o++)if(r[o]!==n[i+o])return!1;return!0},__autoDiscoverRecordDelimiter:function(n,i){const{encoding:r}=this.options,a=[z.from(`\r
`,r),z.from(`
`,r),z.from("\r",r)];e:for(let o=0;o<a.length;o++){const l=a[o].length;for(let c=0;c<l;c++)if(a[o][c]!==n[i+c])continue e;return this.options.record_delimiter.push(a[o]),this.state.recordDelimiterMaxLength=a[o].length,a[o].length}return 0},__error:function(n){const{encoding:i,raw:r,skip_records_with_error:a}=this.options,o=typeof n=="string"?new Error(n):n;if(a){this.state.recordHasError=!0,this.options.on_skip!==void 0&&this.options.on_skip(o,r?this.state.rawBuffer.toString(i):void 0);return}else return o},__infoDataSet:function(){return{...this.info,columns:this.options.columns}},__infoRecord:function(){const{columns:n,raw:i,encoding:r}=this.options;return{...this.__infoDataSet(),error:this.state.error,header:n===!0,index:this.state.record.length,raw:i?this.state.rawBuffer.toString(r):void 0}},__infoField:function(){const{columns:n}=this.options,i=Array.isArray(n);return{...this.__infoRecord(),column:i===!0?n.length>this.state.record.length?n[this.state.record.length].name:null:this.state.record.length,quoting:this.state.wasQuoting}}}},qo=function(s,e={}){typeof s=="string"&&(s=z.from(s));const t=e&&e.objname?{}:[],n=vu(e),i=l=>{n.options.objname===void 0?t.push(l):t[l[0]]=l[1]},r=()=>{},a=n.parse(s,!1,i,r);if(a!==void 0)throw a;const o=n.parse(void 0,!0,i,r);if(o!==void 0)throw o;return t};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const so="166",yu=0,Yo=1,Mu=2,Oc=1,Bc=2,wn=3,Un=0,Ut=1,Jt=2,Yn=0,Ni=1,$o=2,jo=3,Ko=4,Su=5,ri=100,Eu=101,bu=102,Au=103,Tu=104,wu=200,Ru=201,Cu=202,Lu=203,ga=204,_a=205,Pu=206,Iu=207,Du=208,Uu=209,Nu=210,Fu=211,Ou=212,Bu=213,ku=214,zu=0,xa=1,Gu=2,cr=3,Vu=4,Hu=5,Wu=6,Xu=7,ro=0,qu=1,Yu=2,$n=0,$u=1,ju=2,Ku=3,Ju=4,Zu=5,Qu=6,ed=7,Jo="attached",td="detached",kc=300,Bi=301,ki=302,va=303,ya=304,Ar=306,zi=1e3,Xn=1001,hr=1002,Lt=1003,zc=1004,os=1005,Gt=1006,Qs=1007,Ln=1008,Nn=1009,Gc=1010,Vc=1011,fs=1012,ao=1013,ui=1014,Pt=1015,vs=1016,oo=1017,lo=1018,Gi=1020,Hc=35902,Wc=1021,Xc=1022,It=1023,qc=1024,Yc=1025,hi=1026,Vi=1027,co=1028,ho=1029,$c=1030,uo=1031,fo=1033,er=33776,tr=33777,nr=33778,ir=33779,Ma=35840,Sa=35841,Ea=35842,ba=35843,Aa=36196,Ta=37492,wa=37496,Ra=37808,Ca=37809,La=37810,Pa=37811,Ia=37812,Da=37813,Ua=37814,Na=37815,Fa=37816,Oa=37817,Ba=37818,ka=37819,za=37820,Ga=37821,sr=36492,Va=36494,Ha=36495,jc=36283,Wa=36284,Xa=36285,qa=36286,ps=2300,ms=2301,Dr=2302,Zo=2400,Qo=2401,el=2402,nd=2500,id=0,Kc=1,Ya=2,sd=3200,rd=3201,po=0,ad=1,Wn="",Rt="srgb",Mt="srgb-linear",mo="display-p3",Tr="display-p3-linear",ur="linear",nt="srgb",dr="rec709",fr="p3",gi=7680,tl=519,od=512,ld=513,cd=514,Jc=515,hd=516,ud=517,dd=518,fd=519,pr=35044,$a="300 es",Pn=2e3,mr=2001;class $i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nl=1234567;const hs=Math.PI/180,Hi=180/Math.PI;function rn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[s&255]+St[s>>8&255]+St[s>>16&255]+St[s>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function bt(s,e,t){return Math.max(e,Math.min(t,s))}function go(s,e){return(s%e+e)%e}function pd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function md(s,e,t){return s!==e?(t-s)/(e-s):0}function us(s,e,t){return(1-t)*s+t*e}function gd(s,e,t,n){return us(s,e,1-Math.exp(-t*n))}function _d(s,e=1){return e-Math.abs(go(s,e*2)-e)}function xd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function vd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function yd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Md(s,e){return s+Math.random()*(e-s)}function Sd(s){return s*(.5-Math.random())}function Ed(s){s!==void 0&&(nl=s);let e=nl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bd(s){return s*hs}function Ad(s){return s*Hi}function Td(s){return(s&s-1)===0&&s!==0}function wd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Rd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Cd(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function sn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ze(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ld={DEG2RAD:hs,RAD2DEG:Hi,generateUUID:rn,clamp:bt,euclideanModulo:go,mapLinear:pd,inverseLerp:md,lerp:us,damp:gd,pingpong:_d,smoothstep:xd,smootherstep:vd,randInt:yd,randFloat:Md,randFloatSpread:Sd,seededRandom:Ed,degToRad:bd,radToDeg:Ad,isPowerOfTwo:Td,ceilPowerOfTwo:wd,floorPowerOfTwo:Rd,setQuaternionFromProperEuler:Cd,normalize:Ze,denormalize:sn};class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,n,i,r,a,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],y=i[1],x=i[4],E=i[7],I=i[2],A=i[5],w=i[8];return r[0]=a*_+o*y+l*I,r[3]=a*m+o*x+l*A,r[6]=a*f+o*E+l*w,r[1]=c*_+h*y+u*I,r[4]=c*m+h*x+u*A,r[7]=c*f+h*E+u*w,r[2]=d*_+p*y+g*I,r[5]=d*m+p*x+g*A,r[8]=d*f+p*E+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ur.makeScale(e,t)),this}rotate(e){return this.premultiply(Ur.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ur.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ur=new Fe;function Zc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function gs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pd(){const s=gs("canvas");return s.style.display="block",s}const il={};function _o(s){s in il||(il[s]=!0,console.warn(s))}function Id(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const sl=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rl=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bs={[Mt]:{transfer:ur,primaries:dr,toReference:s=>s,fromReference:s=>s},[Rt]:{transfer:nt,primaries:dr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Tr]:{transfer:ur,primaries:fr,toReference:s=>s.applyMatrix3(rl),fromReference:s=>s.applyMatrix3(sl)},[mo]:{transfer:nt,primaries:fr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(rl),fromReference:s=>s.applyMatrix3(sl).convertLinearToSRGB()}},Dd=new Set([Mt,Tr]),Xe={enabled:!0,_workingColorSpace:Mt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Dd.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=bs[e].toReference,i=bs[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return bs[s].primaries},getTransfer:function(s){return s===Wn?ur:bs[s].transfer}};function Fi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Nr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let _i;class Ud{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_i===void 0&&(_i=gs("canvas")),_i.width=e.width,_i.height=e.height;const n=_i.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Fi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nd=0;class Qc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Fr(i[a].image)):r.push(Fr(i[a]))}else r=Fr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Fr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ud.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fd=0;class pt extends $i{constructor(e=pt.DEFAULT_IMAGE,t=pt.DEFAULT_MAPPING,n=Xn,i=Xn,r=Gt,a=Ln,o=It,l=Nn,c=pt.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=rn(),this.name="",this.source=new Qc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zi:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case hr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zi:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case hr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=kc;pt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,i=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,E=(p+1)/2,I=(f+1)/2,A=(h+d)/4,w=(u+_)/4,F=(g+m)/4;return x>E&&x>I?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=A/n,r=w/n):E>I?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=A/i,r=F/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=w/r,i=F/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Od extends $i{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ln extends Od{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class eh extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bd extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*_,y=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const I=Math.sqrt(x),A=Math.atan2(I,f*y);m=Math.sin(m*A)/I,o=Math.sin(o*A)/I}const E=o*y;if(l=l*m+d*E,c=c*m+p*E,h=h*m+g*E,u=u*m+_*E,m===1-o){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Or.copy(this).projectOnVector(e),this.sub(Or)}reflect(e){return this.sub(Or.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Or=new L,al=new _n;class Vt{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(r,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),As.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),As.copy(n.boundingBox)),As.applyMatrix4(e.matrixWorld),this.union(As)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zi),Ts.subVectors(this.max,Zi),xi.subVectors(e.a,Zi),vi.subVectors(e.b,Zi),yi.subVectors(e.c,Zi),On.subVectors(vi,xi),Bn.subVectors(yi,vi),Jn.subVectors(xi,yi);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-Jn.z,Jn.y,On.z,0,-On.x,Bn.z,0,-Bn.x,Jn.z,0,-Jn.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-Jn.y,Jn.x,0];return!Br(t,xi,vi,yi,Ts)||(t=[1,0,0,0,1,0,0,0,1],!Br(t,xi,vi,yi,Ts))?!1:(ws.crossVectors(On,Bn),t=[ws.x,ws.y,ws.z],Br(t,xi,vi,yi,Ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mn=[new L,new L,new L,new L,new L,new L,new L,new L],Qt=new L,As=new Vt,xi=new L,vi=new L,yi=new L,On=new L,Bn=new L,Jn=new L,Zi=new L,Ts=new L,ws=new L,Zn=new L;function Br(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Zn.fromArray(s,r);const o=i.x*Math.abs(Zn.x)+i.y*Math.abs(Zn.y)+i.z*Math.abs(Zn.z),l=e.dot(Zn),c=t.dot(Zn),h=n.dot(Zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const kd=new Vt,Qi=new L,kr=new L;class Nt{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qi.subVectors(e,this.center);const t=Qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Qi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qi.copy(e.center).add(kr)),this.expandByPoint(Qi.copy(e.center).sub(kr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new L,zr=new L,Rs=new L,kn=new L,Gr=new L,Cs=new L,Vr=new L;class di{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){zr.copy(e).add(t).multiplyScalar(.5),Rs.copy(t).sub(e).normalize(),kn.copy(this.origin).sub(zr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Rs),o=kn.dot(this.direction),l=-kn.dot(Rs),c=kn.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(zr).addScaledVector(Rs,d),p}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,i,r){Gr.subVectors(t,e),Cs.subVectors(n,e),Vr.crossVectors(Gr,Cs);let a=this.direction.dot(Vr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;kn.subVectors(this.origin,e);const l=o*this.direction.dot(Cs.crossVectors(kn,Cs));if(l<0)return null;const c=o*this.direction.dot(Gr.cross(kn));if(c<0||l+c>a)return null;const h=-o*kn.dot(Vr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(e,t,n,i,r,a,o,l,c,h,u,d,p,g,_,m){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,p,g,_,m)}set(e,t,n,i,r,a,o,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Mi.setFromMatrixColumn(e,0).length(),r=1/Mi.setFromMatrixColumn(e,1).length(),a=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zd,e,Gd)}lookAt(e,t,n){const i=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),zn.crossVectors(n,kt),zn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),zn.crossVectors(n,kt)),zn.normalize(),Ls.crossVectors(kt,zn),i[0]=zn.x,i[4]=Ls.x,i[8]=kt.x,i[1]=zn.y,i[5]=Ls.y,i[9]=kt.y,i[2]=zn.z,i[6]=Ls.z,i[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],x=n[7],E=n[11],I=n[15],A=i[0],w=i[4],F=i[8],b=i[12],S=i[1],R=i[5],W=i[9],U=i[13],G=i[2],Y=i[6],H=i[10],j=i[14],V=i[3],re=i[7],ce=i[11],pe=i[15];return r[0]=a*A+o*S+l*G+c*V,r[4]=a*w+o*R+l*Y+c*re,r[8]=a*F+o*W+l*H+c*ce,r[12]=a*b+o*U+l*j+c*pe,r[1]=h*A+u*S+d*G+p*V,r[5]=h*w+u*R+d*Y+p*re,r[9]=h*F+u*W+d*H+p*ce,r[13]=h*b+u*U+d*j+p*pe,r[2]=g*A+_*S+m*G+f*V,r[6]=g*w+_*R+m*Y+f*re,r[10]=g*F+_*W+m*H+f*ce,r[14]=g*b+_*U+m*j+f*pe,r[3]=y*A+x*S+E*G+I*V,r[7]=y*w+x*R+E*Y+I*re,r[11]=y*F+x*W+E*H+I*ce,r[15]=y*b+x*U+E*j+I*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*p-n*l*p)+_*(+t*l*p-t*c*d+r*a*d-i*a*p+i*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],y=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,x=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,E=h*_*c-g*u*c+g*o*p-a*_*p-h*o*f+a*u*f,I=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,A=t*y+n*x+i*E+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=y*w,e[1]=(_*d*r-u*m*r-_*i*p+n*m*p+u*i*f-n*d*f)*w,e[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*f+n*l*f)*w,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*p-n*l*p)*w,e[4]=x*w,e[5]=(h*m*r-g*d*r+g*i*p-t*m*p-h*i*f+t*d*f)*w,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*f-t*l*f)*w,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*p+t*l*p)*w,e[8]=E*w,e[9]=(g*u*r-h*_*r-g*n*p+t*_*p+h*n*f-t*u*f)*w,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*f+t*o*f)*w,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*w,e[12]=I*w,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*w,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*w,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,_=a*h,m=a*u,f=o*u,y=l*c,x=l*h,E=l*u,I=n.x,A=n.y,w=n.z;return i[0]=(1-(_+f))*I,i[1]=(p+E)*I,i[2]=(g-x)*I,i[3]=0,i[4]=(p-E)*A,i[5]=(1-(d+f))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(g+x)*w,i[9]=(m-y)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Mi.set(i[0],i[1],i[2]).length();const a=Mi.set(i[4],i[5],i[6]).length(),o=Mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],en.copy(this);const c=1/r,h=1/a,u=1/o;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,t.setFromRotationMatrix(en),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Pn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(o===Pn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===mr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Pn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*c,p=(n+i)*h;let g,_;if(o===Pn)g=(a+r)*u,_=-2*u;else if(o===mr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Mi=new L,en=new we,zd=new L(0,0,0),Gd=new L(1,1,1),zn=new L,Ls=new L,kt=new L,ol=new we,ll=new _n;class cn{constructor(e=0,t=0,n=0,i=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ol.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ol,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ll.setFromEuler(this),this.setFromQuaternion(ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class xo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vd=0;const cl=new L,Si=new _n,En=new we,Ps=new L,es=new L,Hd=new L,Wd=new _n,hl=new L(1,0,0),ul=new L(0,1,0),dl=new L(0,0,1),fl={type:"added"},Xd={type:"removed"},Ei={type:"childadded",child:null},Hr={type:"childremoved",child:null};class it extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=it.DEFAULT_UP.clone();const e=new L,t=new cn,n=new _n,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new we},normalMatrix:{value:new Fe}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=it.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(hl,e)}rotateY(e){return this.rotateOnAxis(ul,e)}rotateZ(e){return this.rotateOnAxis(dl,e)}translateOnAxis(e,t){return cl.copy(e).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hl,e)}translateY(e){return this.translateOnAxis(ul,e)}translateZ(e){return this.translateOnAxis(dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ps.copy(e):Ps.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(es,Ps,this.up):En.lookAt(Ps,es,this.up),this.quaternion.setFromRotationMatrix(En),i&&(En.extractRotation(i.matrixWorld),Si.setFromRotationMatrix(En),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fl),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xd),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fl),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,Hd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,Wd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}it.DEFAULT_UP=new L(0,1,0);it.DEFAULT_MATRIX_AUTO_UPDATE=!0;it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new L,bn=new L,Wr=new L,An=new L,bi=new L,Ai=new L,pl=new L,Xr=new L,qr=new L,Yr=new L;class fn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),tn.subVectors(e,t),i.cross(tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){tn.subVectors(i,t),bn.subVectors(n,t),Wr.subVectors(e,t);const a=tn.dot(tn),o=tn.dot(bn),l=tn.dot(Wr),c=bn.dot(bn),h=bn.dot(Wr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l)}static isFrontFacing(e,t,n,i){return tn.subVectors(n,t),bn.subVectors(e,t),tn.cross(bn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),tn.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return fn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;bi.subVectors(i,n),Ai.subVectors(r,n),Xr.subVectors(e,n);const l=bi.dot(Xr),c=Ai.dot(Xr);if(l<=0&&c<=0)return t.copy(n);qr.subVectors(e,i);const h=bi.dot(qr),u=Ai.dot(qr);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(bi,a);Yr.subVectors(e,r);const p=bi.dot(Yr),g=Ai.dot(Yr);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ai,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return pl.subVectors(r,i),o=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(pl,o);const f=1/(m+_+d);return a=_*f,o=d*f,t.copy(n).addScaledVector(bi,a).addScaledVector(Ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Is={h:0,s:0,l:0};function $r(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Me{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=go(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=$r(a,r,e+1/3),this.g=$r(a,r,e),this.b=$r(a,r,e-1/3)}return Xe.toWorkingColorSpace(this,i),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=th[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Xe.fromWorkingColorSpace(Et.copy(this),e),Math.round(bt(Et.r*255,0,255))*65536+Math.round(bt(Et.g*255,0,255))*256+Math.round(bt(Et.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Et.copy(this),t);const n=Et.r,i=Et.g,r=Et.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Rt){Xe.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,i=Et.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(Is);const n=us(Gn.h,Is.h,t),i=us(Gn.s,Is.s,t),r=us(Gn.l,Is.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Me;Me.NAMES=th;let qd=0;class an extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=rn(),this.name="",this.type="Material",this.blending=Ni,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=_a,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ga&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class li extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new L,Ds=new ae;class At{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=pr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return _o("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ds.fromBufferAttribute(this,t),Ds.applyMatrix3(e),this.setXY(t,Ds.x,Ds.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pr&&(e.usage=this.usage),e}}class nh extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ih extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class on extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yd=0;const qt=new we,jr=new it,Ti=new L,zt=new Vt,ts=new Vt,_t=new L;class Wt extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zc(e)?ih:nh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return jr.lookAt(e),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new on(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];zt.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(zt.min,ts.min),zt.expandByPoint(_t),_t.addVectors(zt.max,ts.max),zt.expandByPoint(_t)):(zt.expandByPoint(ts.min),zt.expandByPoint(ts.max))}zt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)_t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(_t));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)_t.fromBufferAttribute(o,c),l&&(Ti.fromBufferAttribute(e,c),_t.add(Ti)),i=Math.max(i,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new L,l[F]=new L;const c=new L,h=new L,u=new L,d=new ae,p=new ae,g=new ae,_=new L,m=new L;function f(F,b,S){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,F),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),o[F].add(_),o[b].add(_),o[S].add(_),l[F].add(m),l[b].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let F=0,b=y.length;F<b;++F){const S=y[F],R=S.start,W=S.count;for(let U=R,G=R+W;U<G;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const x=new L,E=new L,I=new L,A=new L;function w(F){I.fromBufferAttribute(i,F),A.copy(I);const b=o[F];x.copy(b),x.sub(I.multiplyScalar(I.dot(b))).normalize(),E.crossVectors(A,b);const R=E.dot(l[F])<0?-1:1;a.setXYZW(F,x.x,x.y,x.z,R)}for(let F=0,b=y.length;F<b;++F){const S=y[F],R=S.start,W=S.count;for(let U=R,G=R+W;U<G;U+=3)w(e.getX(U+0)),w(e.getX(U+1)),w(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new At(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ml=new we,Qn=new di,Us=new Nt,gl=new L,wi=new L,Ri=new L,Ci=new L,Kr=new L,Ns=new L,Fs=new ae,Os=new ae,Bs=new ae,_l=new L,xl=new L,vl=new L,ks=new L,zs=new L;class rt extends it{constructor(e=new Wt,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ns.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Kr.fromBufferAttribute(u,e),a?Ns.addScaledVector(Kr,h):Ns.addScaledVector(Kr.sub(t),h))}t.add(Ns)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(r),Qn.copy(e.ray).recast(e.near),!(Us.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(Us,gl)===null||Qn.origin.distanceToSquared(gl)>(e.far-e.near)**2))&&(ml.copy(r).invert(),Qn.copy(e.ray).applyMatrix4(ml),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=y,I=x;E<I;E+=3){const A=o.getX(E),w=o.getX(E+1),F=o.getX(E+2);i=Gs(this,f,e,n,c,h,u,A,w,F),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=o.getX(m),x=o.getX(m+1),E=o.getX(m+2);i=Gs(this,a,e,n,c,h,u,y,x,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=y,I=x;E<I;E+=3){const A=E,w=E+1,F=E+2;i=Gs(this,f,e,n,c,h,u,A,w,F),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=m,x=m+1,E=m+2;i=Gs(this,a,e,n,c,h,u,y,x,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function $d(s,e,t,n,i,r,a,o){let l;if(e.side===Ut?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Un,o),l===null)return null;zs.copy(o),zs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(zs);return c<t.near||c>t.far?null:{distance:c,point:zs.clone(),object:s}}function Gs(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,wi),s.getVertexPosition(l,Ri),s.getVertexPosition(c,Ci);const h=$d(s,e,t,n,wi,Ri,Ci,ks);if(h){i&&(Fs.fromBufferAttribute(i,o),Os.fromBufferAttribute(i,l),Bs.fromBufferAttribute(i,c),h.uv=fn.getInterpolation(ks,wi,Ri,Ci,Fs,Os,Bs,new ae)),r&&(Fs.fromBufferAttribute(r,o),Os.fromBufferAttribute(r,l),Bs.fromBufferAttribute(r,c),h.uv1=fn.getInterpolation(ks,wi,Ri,Ci,Fs,Os,Bs,new ae)),a&&(_l.fromBufferAttribute(a,o),xl.fromBufferAttribute(a,l),vl.fromBufferAttribute(a,c),h.normal=fn.getInterpolation(ks,wi,Ri,Ci,_l,xl,vl,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};fn.getNormal(wi,Ri,Ci,u.normal),h.face=u}return h}class ys extends Wt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(h,3)),this.setAttribute("uv",new on(u,2));function g(_,m,f,y,x,E,I,A,w,F,b){const S=E/w,R=I/F,W=E/2,U=I/2,G=A/2,Y=w+1,H=F+1;let j=0,V=0;const re=new L;for(let ce=0;ce<H;ce++){const pe=ce*R-U;for(let ke=0;ke<Y;ke++){const Qe=ke*S-W;re[_]=Qe*y,re[m]=pe*x,re[f]=G,c.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[f]=A>0?1:-1,h.push(re.x,re.y,re.z),u.push(ke/w),u.push(1-ce/F),j+=1}}for(let ce=0;ce<F;ce++)for(let pe=0;pe<w;pe++){const ke=d+pe+Y*ce,Qe=d+pe+Y*(ce+1),X=d+(pe+1)+Y*(ce+1),Q=d+(pe+1)+Y*ce;l.push(ke,Qe,Q),l.push(Qe,X,Q),V+=6}o.addGroup(p,V,b),p+=V,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wt(s){const e={};for(let t=0;t<s.length;t++){const n=Wi(s[t]);for(const i in n)e[i]=n[i]}return e}function jd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function sh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Kd={clone:Wi,merge:wt};var Jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ht extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jd,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=jd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rh extends it{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new L,yl=new ae,Ml=new ae;class Ct extends rh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,yl,Ml),t.subVectors(Ml,yl)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,Pi=1;class Qd extends it{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ct(Li,Pi,e,t);i.layers=this.layers,this.add(i);const r=new Ct(Li,Pi,e,t);r.layers=this.layers,this.add(r);const a=new Ct(Li,Pi,e,t);a.layers=this.layers,this.add(a);const o=new Ct(Li,Pi,e,t);o.layers=this.layers,this.add(o);const l=new Ct(Li,Pi,e,t);l.layers=this.layers,this.add(l);const c=new Ct(Li,Pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ah extends pt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Bi,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ef extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ah(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ys(5,5,5),r=new Ht({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:Yn});r.uniforms.tEquirect.value=t;const a=new rt(i,r),o=t.minFilter;return t.minFilter===Ln&&(t.minFilter=Gt),new Qd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Jr=new L,tf=new L,nf=new Fe;class Kt{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Jr.subVectors(n,t).cross(tf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Jr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nf.getNormalMatrix(e),i=this.coplanarPoint(Jr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new Nt,Vs=new L;class vo{constructor(e=new Kt,t=new Kt,n=new Kt,i=new Kt,r=new Kt,a=new Kt){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],y=i[13],x=i[14],E=i[15];if(n[0].setComponents(l-r,d-c,m-p,E-f).normalize(),n[1].setComponents(l+r,d+c,m+p,E+f).normalize(),n[2].setComponents(l+a,d+h,m+g,E+y).normalize(),n[3].setComponents(l-a,d-h,m-g,E-y).normalize(),n[4].setComponents(l-o,d-u,m-_,E-x).normalize(),t===Pn)n[5].setComponents(l+o,d+u,m+_,E+x).normalize();else if(t===mr)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Vs.x=i.normal.x>0?e.max.x:e.min.x,Vs.y=i.normal.y>0?e.max.y:e.min.y,Vs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oh(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function sf(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(s.bindBuffer(c,o),u.count===-1&&d.length===0&&s.bufferSubData(c,0,h),d.length!==0){for(let p=0,g=d.length;p<g;p++){const _=d[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(s.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class jn extends Wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const y=f*d-a;for(let x=0;x<c;x++){const E=x*u-r;g.push(E,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const x=y+c*f,E=y+c*(f+1),I=y+1+c*(f+1),A=y+1+c*f;p.push(x,E,A),p.push(E,I,A)}this.setIndex(p),this.setAttribute("position",new on(g,3)),this.setAttribute("normal",new on(_,3)),this.setAttribute("uv",new on(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.width,e.height,e.widthSegments,e.heightSegments)}}var rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,af=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ff=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_f=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Rf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ff=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,np=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ip=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,op=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,um=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Em=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Am=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Um=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:rf,alphahash_pars_fragment:af,alphamap_fragment:of,alphamap_pars_fragment:lf,alphatest_fragment:cf,alphatest_pars_fragment:hf,aomap_fragment:uf,aomap_pars_fragment:df,batching_pars_vertex:ff,batching_vertex:pf,begin_vertex:mf,beginnormal_vertex:gf,bsdfs:_f,iridescence_fragment:xf,bumpmap_pars_fragment:vf,clipping_planes_fragment:yf,clipping_planes_pars_fragment:Mf,clipping_planes_pars_vertex:Sf,clipping_planes_vertex:Ef,color_fragment:bf,color_pars_fragment:Af,color_pars_vertex:Tf,color_vertex:wf,common:Rf,cube_uv_reflection_fragment:Cf,defaultnormal_vertex:Lf,displacementmap_pars_vertex:Pf,displacementmap_vertex:If,emissivemap_fragment:Df,emissivemap_pars_fragment:Uf,colorspace_fragment:Nf,colorspace_pars_fragment:Ff,envmap_fragment:Of,envmap_common_pars_fragment:Bf,envmap_pars_fragment:kf,envmap_pars_vertex:zf,envmap_physical_pars_fragment:Jf,envmap_vertex:Gf,fog_vertex:Vf,fog_pars_vertex:Hf,fog_fragment:Wf,fog_pars_fragment:Xf,gradientmap_pars_fragment:qf,lightmap_pars_fragment:Yf,lights_lambert_fragment:$f,lights_lambert_pars_fragment:jf,lights_pars_begin:Kf,lights_toon_fragment:Zf,lights_toon_pars_fragment:Qf,lights_phong_fragment:ep,lights_phong_pars_fragment:tp,lights_physical_fragment:np,lights_physical_pars_fragment:ip,lights_fragment_begin:sp,lights_fragment_maps:rp,lights_fragment_end:ap,logdepthbuf_fragment:op,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:cp,logdepthbuf_vertex:hp,map_fragment:up,map_pars_fragment:dp,map_particle_fragment:fp,map_particle_pars_fragment:pp,metalnessmap_fragment:mp,metalnessmap_pars_fragment:gp,morphinstance_vertex:_p,morphcolor_vertex:xp,morphnormal_vertex:vp,morphtarget_pars_vertex:yp,morphtarget_vertex:Mp,normal_fragment_begin:Sp,normal_fragment_maps:Ep,normal_pars_fragment:bp,normal_pars_vertex:Ap,normal_vertex:Tp,normalmap_pars_fragment:wp,clearcoat_normal_fragment_begin:Rp,clearcoat_normal_fragment_maps:Cp,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Pp,opaque_fragment:Ip,packing:Dp,premultiplied_alpha_fragment:Up,project_vertex:Np,dithering_fragment:Fp,dithering_pars_fragment:Op,roughnessmap_fragment:Bp,roughnessmap_pars_fragment:kp,shadowmap_pars_fragment:zp,shadowmap_pars_vertex:Gp,shadowmap_vertex:Vp,shadowmask_pars_fragment:Hp,skinbase_vertex:Wp,skinning_pars_vertex:Xp,skinning_vertex:qp,skinnormal_vertex:Yp,specularmap_fragment:$p,specularmap_pars_fragment:jp,tonemapping_fragment:Kp,tonemapping_pars_fragment:Jp,transmission_fragment:Zp,transmission_pars_fragment:Qp,uv_pars_fragment:em,uv_pars_vertex:tm,uv_vertex:nm,worldpos_vertex:im,background_vert:sm,background_frag:rm,backgroundCube_vert:am,backgroundCube_frag:om,cube_vert:lm,cube_frag:cm,depth_vert:hm,depth_frag:um,distanceRGBA_vert:dm,distanceRGBA_frag:fm,equirect_vert:pm,equirect_frag:mm,linedashed_vert:gm,linedashed_frag:_m,meshbasic_vert:xm,meshbasic_frag:vm,meshlambert_vert:ym,meshlambert_frag:Mm,meshmatcap_vert:Sm,meshmatcap_frag:Em,meshnormal_vert:bm,meshnormal_frag:Am,meshphong_vert:Tm,meshphong_frag:wm,meshphysical_vert:Rm,meshphysical_frag:Cm,meshtoon_vert:Lm,meshtoon_frag:Pm,points_vert:Im,points_frag:Dm,shadow_vert:Um,shadow_frag:Nm,sprite_vert:Fm,sprite_frag:Om},se={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},un={basic:{uniforms:wt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:wt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:wt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:wt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:wt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:wt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:wt([se.points,se.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:wt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:wt([se.common,se.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:wt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:wt([se.sprite,se.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:wt([se.common,se.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:wt([se.lights,se.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};un.physical={uniforms:wt([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Hs={r:0,b:0,g:0},ti=new cn,Bm=new we;function km(s,e,t,n,i,r,a){const o=new Me(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1;const E=g(y);E===null?f(o,l):E&&E.isColor&&(f(E,1),x=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,x){const E=g(x);E&&(E.isCubeTexture||E.mapping===Ar)?(h===void 0&&(h=new rt(new ys(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:Wi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ti.copy(x.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(ti)),h.material.toneMapped=Xe.getTransfer(E.colorSpace)!==nt,(u!==E||d!==E.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,p=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new rt(new jn(2,2),new Ht({name:"BackgroundMaterial",uniforms:Wi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(E.colorSpace)!==nt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,p=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,x){y.getRGB(Hs,sh(s)),n.buffers.color.setClear(Hs.r,Hs.g,Hs.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(o,l)},render:_,addToRenderList:m}}function zm(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(S,R,W,U,G){let Y=!1;const H=u(U,W,R);r!==H&&(r=H,c(r.object)),Y=p(S,U,W,G),Y&&g(S,U,W,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,E(S,R,W,U),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,R,W){const U=W.wireframe===!0;let G=n[S.id];G===void 0&&(G={},n[S.id]=G);let Y=G[R.id];Y===void 0&&(Y={},G[R.id]=Y);let H=Y[U];return H===void 0&&(H=d(l()),Y[U]=H),H}function d(S){const R=[],W=[],U=[];for(let G=0;G<t;G++)R[G]=0,W[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:W,attributeDivisors:U,object:S,attributes:{},index:null}}function p(S,R,W,U){const G=r.attributes,Y=R.attributes;let H=0;const j=W.getAttributes();for(const V in j)if(j[V].location>=0){const ce=G[V];let pe=Y[V];if(pe===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor)),ce===void 0||ce.attribute!==pe||pe&&ce.data!==pe.data)return!0;H++}return r.attributesNum!==H||r.index!==U}function g(S,R,W,U){const G={},Y=R.attributes;let H=0;const j=W.getAttributes();for(const V in j)if(j[V].location>=0){let ce=Y[V];ce===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor));const pe={};pe.attribute=ce,ce&&ce.data&&(pe.data=ce.data),G[V]=pe,H++}r.attributes=G,r.attributesNum=H,r.index=U}function _(){const S=r.newAttributes;for(let R=0,W=S.length;R<W;R++)S[R]=0}function m(S){f(S,0)}function f(S,R){const W=r.newAttributes,U=r.enabledAttributes,G=r.attributeDivisors;W[S]=1,U[S]===0&&(s.enableVertexAttribArray(S),U[S]=1),G[S]!==R&&(s.vertexAttribDivisor(S,R),G[S]=R)}function y(){const S=r.newAttributes,R=r.enabledAttributes;for(let W=0,U=R.length;W<U;W++)R[W]!==S[W]&&(s.disableVertexAttribArray(W),R[W]=0)}function x(S,R,W,U,G,Y,H){H===!0?s.vertexAttribIPointer(S,R,W,G,Y):s.vertexAttribPointer(S,R,W,U,G,Y)}function E(S,R,W,U){_();const G=U.attributes,Y=W.getAttributes(),H=R.defaultAttributeValues;for(const j in Y){const V=Y[j];if(V.location>=0){let re=G[j];if(re===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),re!==void 0){const ce=re.normalized,pe=re.itemSize,ke=e.get(re);if(ke===void 0)continue;const Qe=ke.buffer,X=ke.type,Q=ke.bytesPerElement,me=X===s.INT||X===s.UNSIGNED_INT||re.gpuType===ao;if(re.isInterleavedBufferAttribute){const ue=re.data,Ie=ue.stride,Oe=re.offset;if(ue.isInstancedInterleavedBuffer){for(let Ge=0;Ge<V.locationSize;Ge++)f(V.location+Ge,ue.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ge=0;Ge<V.locationSize;Ge++)m(V.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let Ge=0;Ge<V.locationSize;Ge++)x(V.location+Ge,pe/V.locationSize,X,ce,Ie*Q,(Oe+pe/V.locationSize*Ge)*Q,me)}else{if(re.isInstancedBufferAttribute){for(let ue=0;ue<V.locationSize;ue++)f(V.location+ue,re.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ue=0;ue<V.locationSize;ue++)m(V.location+ue);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let ue=0;ue<V.locationSize;ue++)x(V.location+ue,pe/V.locationSize,X,ce,pe*Q,pe/V.locationSize*ue*Q,me)}}else if(H!==void 0){const ce=H[j];if(ce!==void 0)switch(ce.length){case 2:s.vertexAttrib2fv(V.location,ce);break;case 3:s.vertexAttrib3fv(V.location,ce);break;case 4:s.vertexAttrib4fv(V.location,ce);break;default:s.vertexAttrib1fv(V.location,ce)}}}}y()}function I(){F();for(const S in n){const R=n[S];for(const W in R){const U=R[W];for(const G in U)h(U[G].object),delete U[G];delete R[W]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const W in R){const U=R[W];for(const G in U)h(U[G].object),delete U[G];delete R[W]}delete n[S.id]}function w(S){for(const R in n){const W=n[R];if(W[S.id]===void 0)continue;const U=W[S.id];for(const G in U)h(U[G].object),delete U[G];delete W[S.id]}}function F(){b(),a=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:F,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Gm(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)t.update(g,n,d[_])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Vm(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==It&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const w=A===vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Nn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Pt&&!w)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:f,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:E,maxSamples:I}}function Hm(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Kt,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,x=y*4;let E=f.clippingState||null;l.value=E,E=h(g,d,x,p);for(let I=0;I!==x;++I)E[I]=t[I];f.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,E=p;x!==_;++x,E+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Wm(s){let e=new WeakMap;function t(a,o){return o===va?a.mapping=Bi:o===ya&&(a.mapping=ki),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===va||o===ya)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ef(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class yo extends rh{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ui=4,Sl=[.125,.215,.35,.446,.526,.582],ai=20,Zr=new yo,El=new Me;let Qr=null,ea=0,ta=0,na=!1;const si=(1+Math.sqrt(5))/2,Ii=1/si,bl=[new L(-si,Ii,0),new L(si,Ii,0),new L(-Ii,0,si),new L(Ii,0,si),new L(0,si,-Ii),new L(0,si,Ii),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Al{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Qr=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qr,ea,ta),this._renderer.xr.enabled=na,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qr=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),ta=this._renderer.getActiveMipmapLevel(),na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:vs,format:It,colorSpace:Mt,depthBuffer:!1},i=Tl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xm(r)),this._blurMaterial=qm(r,e,t)}return i}_compileMaterial(e){const t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,Zr)}_sceneToCubeUV(e,t,n,i){const o=new Ct(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(El),h.toneMapping=$n,h.autoClear=!1;const p=new li({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),g=new rt(new ys,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(El),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const x=this._cubeSize;Ws(i,y*x,f>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Bi||e.mapping===ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new rt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ws(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Zr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bl[(i-r-1)%bl.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new rt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ai-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ai;m>ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);const f=[];let y=0;for(let w=0;w<ai;++w){const F=w/_,b=Math.exp(-F*F/2);f.push(b),w===0?y+=b:w<m&&(y+=2*b)}for(let w=0;w<f.length;w++)f[w]=f[w]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const E=this._sizeLods[i],I=3*E*(i>x-Ui?i-x+Ui:0),A=4*(this._cubeSize-E);Ws(t,I,A,3*E,2*E),l.setRenderTarget(t),l.render(u,Zr)}}function Xm(s){const e=[],t=[],n=[];let i=s;const r=s-Ui+1+Sl.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-Ui?l=Sl[a-s+Ui-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),x=new Float32Array(m*g*p),E=new Float32Array(f*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,F=A>2?0:-1,b=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];y.set(b,_*g*A),x.set(d,m*g*A);const S=[A,A,A,A,A,A];E.set(S,f*g*A)}const I=new Wt;I.setAttribute("position",new At(y,_)),I.setAttribute("uv",new At(x,m)),I.setAttribute("faceIndex",new At(E,f)),e.push(I),i>Ui&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Tl(s,e,t){const n=new ln(s,e,t);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function qm(s,e,t){const n=new Float32Array(ai),i=new L(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function wl(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Rl(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Mo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ym(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===va||l===ya,h=l===Bi||l===ki;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Al(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Al(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function $m(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&_o("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function jm(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let x=0,E=y.length;x<E;x+=3){const I=y[x+0],A=y[x+1],w=y[x+2];d.push(I,A,A,w,w,I)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,E=y.length/3-1;x<E;x+=3){const I=x+0,A=x+1,w=x+2;d.push(I,A,A,w,w,I)}}else return;const m=new(Zc(d)?ih:nh)(d,1);m.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Km(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*a),t.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*a,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y];for(let y=0;y<_.length;y++)t.update(f,n,_[y])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Zm(s,e,t){const n=new WeakMap,i=new tt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;p===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let E=o.attributes.position.count*x,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*I*4*u),w=new eh(A,E,I,u);w.type=Pt,w.needsUpdate=!0;const F=x*4;for(let S=0;S<u;S++){const R=m[S],W=f[S],U=y[S],G=E*I*4*S;for(let Y=0;Y<R.count;Y++){const H=Y*F;p===!0&&(i.fromBufferAttribute(R,Y),A[G+H+0]=i.x,A[G+H+1]=i.y,A[G+H+2]=i.z,A[G+H+3]=0),g===!0&&(i.fromBufferAttribute(W,Y),A[G+H+4]=i.x,A[G+H+5]=i.y,A[G+H+6]=i.z,A[G+H+7]=0),_===!0&&(i.fromBufferAttribute(U,Y),A[G+H+8]=i.x,A[G+H+9]=i.y,A[G+H+10]=i.z,A[G+H+11]=U.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new ae(E,I)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Qm(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class So extends pt{constructor(e,t,n,i,r,a,o,l,c,h=hi){if(h!==hi&&h!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hi&&(n=ui),n===void 0&&h===Vi&&(n=Gi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Lt,this.minFilter=l!==void 0?l:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const lh=new pt,Cl=new So(1,1),ch=new eh,hh=new Bd,uh=new ah,Ll=[],Pl=[],Il=new Float32Array(16),Dl=new Float32Array(9),Ul=new Float32Array(4);function ji(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ll[i];if(r===void 0&&(r=new Float32Array(i),Ll[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function gt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function wr(s,e){let t=Pl[e];t===void 0&&(t=new Int32Array(e),Pl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function eg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function tg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2fv(this.addr,e),gt(t,e)}}function ng(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;s.uniform3fv(this.addr,e),gt(t,e)}}function ig(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4fv(this.addr,e),gt(t,e)}}function sg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Ul.set(n),s.uniformMatrix2fv(this.addr,!1,Ul),gt(t,n)}}function rg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Dl.set(n),s.uniformMatrix3fv(this.addr,!1,Dl),gt(t,n)}}function ag(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;Il.set(n),s.uniformMatrix4fv(this.addr,!1,Il),gt(t,n)}}function og(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function lg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2iv(this.addr,e),gt(t,e)}}function cg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;s.uniform3iv(this.addr,e),gt(t,e)}}function hg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4iv(this.addr,e),gt(t,e)}}function ug(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function dg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2uiv(this.addr,e),gt(t,e)}}function fg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;s.uniform3uiv(this.addr,e),gt(t,e)}}function pg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4uiv(this.addr,e),gt(t,e)}}function mg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Cl.compareFunction=Jc,r=Cl):r=lh,t.setTexture2D(e||r,i)}function gg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hh,i)}function _g(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||uh,i)}function xg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ch,i)}function vg(s){switch(s){case 5126:return eg;case 35664:return tg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return ag;case 5124:case 35670:return og;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return hg;case 5125:return ug;case 36294:return dg;case 36295:return fg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return xg}}function yg(s,e){s.uniform1fv(this.addr,e)}function Mg(s,e){const t=ji(e,this.size,2);s.uniform2fv(this.addr,t)}function Sg(s,e){const t=ji(e,this.size,3);s.uniform3fv(this.addr,t)}function Eg(s,e){const t=ji(e,this.size,4);s.uniform4fv(this.addr,t)}function bg(s,e){const t=ji(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ag(s,e){const t=ji(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Tg(s,e){const t=ji(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function wg(s,e){s.uniform1iv(this.addr,e)}function Rg(s,e){s.uniform2iv(this.addr,e)}function Cg(s,e){s.uniform3iv(this.addr,e)}function Lg(s,e){s.uniform4iv(this.addr,e)}function Pg(s,e){s.uniform1uiv(this.addr,e)}function Ig(s,e){s.uniform2uiv(this.addr,e)}function Dg(s,e){s.uniform3uiv(this.addr,e)}function Ug(s,e){s.uniform4uiv(this.addr,e)}function Ng(s,e,t){const n=this.cache,i=e.length,r=wr(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),gt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||lh,r[a])}function Fg(s,e,t){const n=this.cache,i=e.length,r=wr(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),gt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||hh,r[a])}function Og(s,e,t){const n=this.cache,i=e.length,r=wr(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),gt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||uh,r[a])}function Bg(s,e,t){const n=this.cache,i=e.length,r=wr(t,i);mt(n,r)||(s.uniform1iv(this.addr,r),gt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||ch,r[a])}function kg(s){switch(s){case 5126:return yg;case 35664:return Mg;case 35665:return Sg;case 35666:return Eg;case 35674:return bg;case 35675:return Ag;case 35676:return Tg;case 5124:case 35670:return wg;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Lg;case 5125:return Pg;case 36294:return Ig;case 36295:return Dg;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}}class zg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vg(t.type)}}class Gg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kg(t.type)}}class Vg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const ia=/(\w+)(\])?(\[|\.)?/g;function Nl(s,e){s.seq.push(e),s.map[e.id]=e}function Hg(s,e,t){const n=s.name,i=n.length;for(ia.lastIndex=0;;){const r=ia.exec(n),a=ia.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Nl(t,c===void 0?new zg(o,s,e):new Gg(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Vg(o),Nl(t,u)),t=u}}}class rr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Hg(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Fl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Wg=37297;let Xg=0;function qg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Yg(s){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(s);let n;switch(e===t?n="":e===fr&&t===dr?n="LinearDisplayP3ToLinearSRGB":e===dr&&t===fr&&(n="LinearSRGBToLinearDisplayP3"),s){case Mt:case Tr:return[n,"LinearTransferOETF"];case Rt:case mo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ol(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+qg(s.getShaderSource(e),a)}else return i}function $g(s,e){const t=Yg(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function jg(s,e){let t;switch(e){case $u:t="Linear";break;case ju:t="Reinhard";break;case Ku:t="OptimizedCineon";break;case Ju:t="ACESFilmic";break;case Qu:t="AgX";break;case ed:t="Neutral";break;case Zu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Kg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function Jg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zg(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ls(s){return s!==""}function Bl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function ja(s){return s.replace(Qg,t_)}const e_=new Map;function t_(s,e){let t=Ne[e];if(t===void 0){const n=e_.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ja(t)}const n_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zl(s){return s.replace(n_,i_)}function i_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Gl(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function s_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Oc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Bc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function r_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bi:case ki:e="ENVMAP_TYPE_CUBE";break;case Ar:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ki:e="ENVMAP_MODE_REFRACTION";break}return e}function o_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ro:e="ENVMAP_BLENDING_MULTIPLY";break;case qu:e="ENVMAP_BLENDING_MIX";break;case Yu:e="ENVMAP_BLENDING_ADD";break}return e}function l_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function c_(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=s_(t),c=r_(t),h=a_(t),u=o_(t),d=l_(t),p=Kg(t),g=Jg(r),_=i.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ls).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ls).join(`
`),f.length>0&&(f+=`
`)):(m=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),f=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?Ne.tonemapping_pars_fragment:"",t.toneMapping!==$n?jg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,$g("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),a=ja(a),a=Bl(a,t),a=kl(a,t),o=ja(o),o=Bl(o,t),o=kl(o,t),a=zl(a),o=zl(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===$a?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=y+m+a,E=y+f+o,I=Fl(i,i.VERTEX_SHADER,x),A=Fl(i,i.FRAGMENT_SHADER,E);i.attachShader(_,I),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(R){if(s.debug.checkShaderErrors){const W=i.getProgramInfoLog(_).trim(),U=i.getShaderInfoLog(I).trim(),G=i.getShaderInfoLog(A).trim();let Y=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,I,A);else{const j=Ol(i,I,"vertex"),V=Ol(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+W+`
`+j+`
`+V)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(U===""||G==="")&&(H=!1);H&&(R.diagnostics={runnable:Y,programLog:W,vertexShader:{log:U,prefix:m},fragmentShader:{log:G,prefix:f}})}i.deleteShader(I),i.deleteShader(A),F=new rr(i,_),b=Zg(i,_)}let F;this.getUniforms=function(){return F===void 0&&w(this),F};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,Wg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=A,this}let h_=0;class u_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new d_(e),t.set(e,n)),n}}class d_{constructor(e){this.id=h_++,this.code=e,this.usedTimes=0}}function f_(s,e,t,n,i,r,a){const o=new xo,l=new u_,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,R,W,U){const G=W.fog,Y=U.geometry,H=b.isMeshStandardMaterial?W.environment:null,j=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),V=j&&j.mapping===Ar?j.image.height:null,re=g[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ce=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pe=ce!==void 0?ce.length:0;let ke=0;Y.morphAttributes.position!==void 0&&(ke=1),Y.morphAttributes.normal!==void 0&&(ke=2),Y.morphAttributes.color!==void 0&&(ke=3);let Qe,X,Q,me;if(re){const qe=un[re];Qe=qe.vertexShader,X=qe.fragmentShader}else Qe=b.vertexShader,X=b.fragmentShader,l.update(b),Q=l.getVertexShaderID(b),me=l.getFragmentShaderID(b);const ue=s.getRenderTarget(),Ie=U.isInstancedMesh===!0,Oe=U.isBatchedMesh===!0,Ge=!!b.map,at=!!b.matcap,C=!!j,ct=!!b.aoMap,Je=!!b.lightMap,et=!!b.bumpMap,ve=!!b.normalMap,ht=!!b.displacementMap,Le=!!b.emissiveMap,De=!!b.metalnessMap,T=!!b.roughnessMap,v=b.anisotropy>0,k=b.clearcoat>0,J=b.dispersion>0,Z=b.iridescence>0,K=b.sheen>0,Se=b.transmission>0,oe=v&&!!b.anisotropyMap,de=k&&!!b.clearcoatMap,Ue=k&&!!b.clearcoatNormalMap,ee=k&&!!b.clearcoatRoughnessMap,he=Z&&!!b.iridescenceMap,Ve=Z&&!!b.iridescenceThicknessMap,Ce=K&&!!b.sheenColorMap,fe=K&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,Be=!!b.specularColorMap,st=!!b.specularIntensityMap,P=Se&&!!b.transmissionMap,te=Se&&!!b.thicknessMap,q=!!b.gradientMap,$=!!b.alphaMap,ie=b.alphaTest>0,be=!!b.alphaHash,He=!!b.extensions;let ut=$n;b.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ut=s.toneMapping);const vt={shaderID:re,shaderType:b.type,shaderName:b.name,vertexShader:Qe,fragmentShader:X,defines:b.defines,customVertexShaderID:Q,customFragmentShaderID:me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&U._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&U.instanceColor!==null,instancingMorph:Ie&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Mt,alphaToCoverage:!!b.alphaToCoverage,map:Ge,matcap:at,envMap:C,envMapMode:C&&j.mapping,envMapCubeUVHeight:V,aoMap:ct,lightMap:Je,bumpMap:et,normalMap:ve,displacementMap:d&&ht,emissiveMap:Le,normalMapObjectSpace:ve&&b.normalMapType===ad,normalMapTangentSpace:ve&&b.normalMapType===po,metalnessMap:De,roughnessMap:T,anisotropy:v,anisotropyMap:oe,clearcoat:k,clearcoatMap:de,clearcoatNormalMap:Ue,clearcoatRoughnessMap:ee,dispersion:J,iridescence:Z,iridescenceMap:he,iridescenceThicknessMap:Ve,sheen:K,sheenColorMap:Ce,sheenRoughnessMap:fe,specularMap:Pe,specularColorMap:Be,specularIntensityMap:st,transmission:Se,transmissionMap:P,thicknessMap:te,gradientMap:q,opaque:b.transparent===!1&&b.blending===Ni&&b.alphaToCoverage===!1,alphaMap:$,alphaTest:ie,alphaHash:be,combine:b.combine,mapUv:Ge&&_(b.map.channel),aoMapUv:ct&&_(b.aoMap.channel),lightMapUv:Je&&_(b.lightMap.channel),bumpMapUv:et&&_(b.bumpMap.channel),normalMapUv:ve&&_(b.normalMap.channel),displacementMapUv:ht&&_(b.displacementMap.channel),emissiveMapUv:Le&&_(b.emissiveMap.channel),metalnessMapUv:De&&_(b.metalnessMap.channel),roughnessMapUv:T&&_(b.roughnessMap.channel),anisotropyMapUv:oe&&_(b.anisotropyMap.channel),clearcoatMapUv:de&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(b.sheenRoughnessMap.channel),specularMapUv:Pe&&_(b.specularMap.channel),specularColorMapUv:Be&&_(b.specularColorMap.channel),specularIntensityMapUv:st&&_(b.specularIntensityMap.channel),transmissionMapUv:P&&_(b.transmissionMap.channel),thicknessMapUv:te&&_(b.thicknessMap.channel),alphaMapUv:$&&_(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ve||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Y.attributes.uv&&(Ge||$),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:U.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:ke,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:ut,decodeVideoTexture:Ge&&b.map.isVideoTexture===!0&&Xe.getTransfer(b.map.colorSpace)===nt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Jt,flipSided:b.side===Ut,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:He&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&b.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function f(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)S.push(R),S.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(y(S,b),x(S,b),S.push(s.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function y(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function x(b,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.doubleSided&&o.enable(10),S.flipSided&&o.enable(11),S.useDepthPacking&&o.enable(12),S.dithering&&o.enable(13),S.transmission&&o.enable(14),S.sheen&&o.enable(15),S.opaque&&o.enable(16),S.pointsUvs&&o.enable(17),S.decodeVideoTexture&&o.enable(18),S.alphaToCoverage&&o.enable(19),b.push(o.mask)}function E(b){const S=g[b.type];let R;if(S){const W=un[S];R=Kd.clone(W.uniforms)}else R=b.uniforms;return R}function I(b,S){let R;for(let W=0,U=h.length;W<U;W++){const G=h[W];if(G.cacheKey===S){R=G,++R.usedTimes;break}}return R===void 0&&(R=new c_(s,S,b,r),h.push(R)),R}function A(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function w(b){l.remove(b)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:I,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:F}}function p_(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function m_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Vl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Hl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,p,g,_,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function o(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||m_),n.length>1&&n.sort(d||Vl),i.length>1&&i.sort(d||Vl)}function h(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function g_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Hl,s.set(n,[a])):i>=r.length?(a=new Hl,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function __(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Me};break;case"SpotLight":t={position:new L,direction:new L,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function x_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let v_=0;function y_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function M_(s){const e=new __,t=x_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new we,a=new we;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,y=0,x=0,E=0,I=0,A=0,w=0;c.sort(y_);for(let b=0,S=c.length;b<S;b++){const R=c[b],W=R.color,U=R.intensity,G=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=W.r*U,u+=W.g*U,d+=W.b*U;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],U);w++}else if(R.isDirectionalLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,V=t.get(R);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=R.shadow.matrix,y++}n.directional[p]=H,p++}else if(R.isSpotLight){const H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(W).multiplyScalar(U),H.distance=G,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[_]=H;const j=R.shadow;if(R.map&&(n.spotLightMap[I]=R.map,I++,j.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=j.matrix,R.castShadow){const V=t.get(R);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=Y,E++}_++}else if(R.isRectAreaLight){const H=e.get(R);H.color.copy(W).multiplyScalar(U),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=H,m++}else if(R.isPointLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){const j=R.shadow,V=t.get(R);V.shadowIntensity=j.intensity,V.shadowBias=j.bias,V.shadowNormalBias=j.normalBias,V.shadowRadius=j.radius,V.shadowMapSize=j.mapSize,V.shadowCameraNear=j.camera.near,V.shadowCameraFar=j.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=R.shadow.matrix,x++}n.point[g]=H,g++}else if(R.isHemisphereLight){const H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(U),H.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[f]=H,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==f||F.numDirectionalShadows!==y||F.numPointShadows!==x||F.numSpotShadows!==E||F.numSpotMaps!==I||F.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=E+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,F.directionalLength=p,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=f,F.numDirectionalShadows=y,F.numPointShadows=x,F.numSpotShadows=E,F.numSpotMaps=I,F.numLightProbes=w,n.version=v_++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const x=c[f];if(x.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),u++}else if(x.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Wl(s){const e=new M_(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function S_(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Wl(s),e.set(i,[o])):r>=a.length?(o=new Wl(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class dh extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fh extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const E_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function A_(s,e,t){let n=new vo;const i=new ae,r=new ae,a=new tt,o=new dh({depthPacking:rd}),l=new fh,c={},h=t.maxTextureSize,u={[Un]:Ut,[Ut]:Un,[Jt]:Jt},d=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:E_,fragmentShader:b_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Wt;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new rt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let f=this.type;this.render=function(A,w,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=s.getRenderTarget(),S=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),W=s.state;W.setBlending(Yn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const U=f!==wn&&this.type===wn,G=f===wn&&this.type!==wn;for(let Y=0,H=A.length;Y<H;Y++){const j=A[Y],V=j.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const re=V.getFrameExtents();if(i.multiply(re),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/re.x),i.x=r.x*re.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/re.y),i.y=r.y*re.y,V.mapSize.y=r.y)),V.map===null||U===!0||G===!0){const pe=this.type!==wn?{minFilter:Lt,magFilter:Lt}:{};V.map!==null&&V.map.dispose(),V.map=new ln(i.x,i.y,pe),V.map.texture.name=j.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const ce=V.getViewportCount();for(let pe=0;pe<ce;pe++){const ke=V.getViewport(pe);a.set(r.x*ke.x,r.y*ke.y,r.x*ke.z,r.y*ke.w),W.viewport(a),V.updateMatrices(j,pe),n=V.getFrustum(),E(w,F,V.camera,j,this.type)}V.isPointLightShadow!==!0&&this.type===wn&&y(V,F),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(b,S,R)};function y(A,w){const F=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ln(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(w,null,F,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(w,null,F,p,_,null)}function x(A,w,F,b){let S=null;const R=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)S=R;else if(S=F.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=S.uuid,U=w.uuid;let G=c[W];G===void 0&&(G={},c[W]=G);let Y=G[U];Y===void 0&&(Y=S.clone(),G[U]=Y,w.addEventListener("dispose",I)),S=Y}if(S.visible=w.visible,S.wireframe=w.wireframe,b===wn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=s.properties.get(S);W.light=F}return S}function E(A,w,F,b,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===wn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const U=e.update(A),G=A.material;if(Array.isArray(G)){const Y=U.groups;for(let H=0,j=Y.length;H<j;H++){const V=Y[H],re=G[V.materialIndex];if(re&&re.visible){const ce=x(A,re,b,S);A.onBeforeShadow(s,A,w,F,U,ce,V),s.renderBufferDirect(F,null,U,ce,A,V),A.onAfterShadow(s,A,w,F,U,ce,V)}}}else if(G.visible){const Y=x(A,G,b,S);A.onBeforeShadow(s,A,w,F,U,Y,null),s.renderBufferDirect(F,null,U,Y,A,null),A.onAfterShadow(s,A,w,F,U,Y,null)}}const W=A.children;for(let U=0,G=W.length;U<G;U++)E(W[U],w,F,b,S)}function I(A){A.target.removeEventListener("dispose",I);for(const F in c){const b=c[F],S=A.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}function T_(s){function e(){let P=!1;const te=new tt;let q=null;const $=new tt(0,0,0,0);return{setMask:function(ie){q!==ie&&!P&&(s.colorMask(ie,ie,ie,ie),q=ie)},setLocked:function(ie){P=ie},setClear:function(ie,be,He,ut,vt){vt===!0&&(ie*=ut,be*=ut,He*=ut),te.set(ie,be,He,ut),$.equals(te)===!1&&(s.clearColor(ie,be,He,ut),$.copy(te))},reset:function(){P=!1,q=null,$.set(-1,0,0,0)}}}function t(){let P=!1,te=null,q=null,$=null;return{setTest:function(ie){ie?me(s.DEPTH_TEST):ue(s.DEPTH_TEST)},setMask:function(ie){te!==ie&&!P&&(s.depthMask(ie),te=ie)},setFunc:function(ie){if(q!==ie){switch(ie){case zu:s.depthFunc(s.NEVER);break;case xa:s.depthFunc(s.ALWAYS);break;case Gu:s.depthFunc(s.LESS);break;case cr:s.depthFunc(s.LEQUAL);break;case Vu:s.depthFunc(s.EQUAL);break;case Hu:s.depthFunc(s.GEQUAL);break;case Wu:s.depthFunc(s.GREATER);break;case Xu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}q=ie}},setLocked:function(ie){P=ie},setClear:function(ie){$!==ie&&(s.clearDepth(ie),$=ie)},reset:function(){P=!1,te=null,q=null,$=null}}}function n(){let P=!1,te=null,q=null,$=null,ie=null,be=null,He=null,ut=null,vt=null;return{setTest:function(qe){P||(qe?me(s.STENCIL_TEST):ue(s.STENCIL_TEST))},setMask:function(qe){te!==qe&&!P&&(s.stencilMask(qe),te=qe)},setFunc:function(qe,yn,hn){(q!==qe||$!==yn||ie!==hn)&&(s.stencilFunc(qe,yn,hn),q=qe,$=yn,ie=hn)},setOp:function(qe,yn,hn){(be!==qe||He!==yn||ut!==hn)&&(s.stencilOp(qe,yn,hn),be=qe,He=yn,ut=hn)},setLocked:function(qe){P=qe},setClear:function(qe){vt!==qe&&(s.clearStencil(qe),vt=qe)},reset:function(){P=!1,te=null,q=null,$=null,ie=null,be=null,He=null,ut=null,vt=null}}}const i=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,y=null,x=null,E=null,I=null,A=new Me(0,0,0),w=0,F=!1,b=null,S=null,R=null,W=null,U=null;const G=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,H=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(j)[1]),Y=H>=1):j.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Y=H>=2);let V=null,re={};const ce=s.getParameter(s.SCISSOR_BOX),pe=s.getParameter(s.VIEWPORT),ke=new tt().fromArray(ce),Qe=new tt().fromArray(pe);function X(P,te,q,$){const ie=new Uint8Array(4),be=s.createTexture();s.bindTexture(P,be),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<q;He++)P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?s.texImage3D(te,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,ie):s.texImage2D(te+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ie);return be}const Q={};Q[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),me(s.DEPTH_TEST),r.setFunc(cr),et(!1),ve(Yo),me(s.CULL_FACE),ct(Yn);function me(P){c[P]!==!0&&(s.enable(P),c[P]=!0)}function ue(P){c[P]!==!1&&(s.disable(P),c[P]=!1)}function Ie(P,te){return h[P]!==te?(s.bindFramebuffer(P,te),h[P]=te,P===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=te),P===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=te),!0):!1}function Oe(P,te){let q=d,$=!1;if(P){q=u.get(te),q===void 0&&(q=[],u.set(te,q));const ie=P.textures;if(q.length!==ie.length||q[0]!==s.COLOR_ATTACHMENT0){for(let be=0,He=ie.length;be<He;be++)q[be]=s.COLOR_ATTACHMENT0+be;q.length=ie.length,$=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,$=!0);$&&s.drawBuffers(q)}function Ge(P){return p!==P?(s.useProgram(P),p=P,!0):!1}const at={[ri]:s.FUNC_ADD,[Eu]:s.FUNC_SUBTRACT,[bu]:s.FUNC_REVERSE_SUBTRACT};at[Au]=s.MIN,at[Tu]=s.MAX;const C={[wu]:s.ZERO,[Ru]:s.ONE,[Cu]:s.SRC_COLOR,[ga]:s.SRC_ALPHA,[Nu]:s.SRC_ALPHA_SATURATE,[Du]:s.DST_COLOR,[Pu]:s.DST_ALPHA,[Lu]:s.ONE_MINUS_SRC_COLOR,[_a]:s.ONE_MINUS_SRC_ALPHA,[Uu]:s.ONE_MINUS_DST_COLOR,[Iu]:s.ONE_MINUS_DST_ALPHA,[Fu]:s.CONSTANT_COLOR,[Ou]:s.ONE_MINUS_CONSTANT_COLOR,[Bu]:s.CONSTANT_ALPHA,[ku]:s.ONE_MINUS_CONSTANT_ALPHA};function ct(P,te,q,$,ie,be,He,ut,vt,qe){if(P===Yn){g===!0&&(ue(s.BLEND),g=!1);return}if(g===!1&&(me(s.BLEND),g=!0),P!==Su){if(P!==_||qe!==F){if((m!==ri||x!==ri)&&(s.blendEquation(s.FUNC_ADD),m=ri,x=ri),qe)switch(P){case Ni:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $o:s.blendFunc(s.ONE,s.ONE);break;case jo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ko:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ni:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $o:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case jo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ko:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}f=null,y=null,E=null,I=null,A.set(0,0,0),w=0,_=P,F=qe}return}ie=ie||te,be=be||q,He=He||$,(te!==m||ie!==x)&&(s.blendEquationSeparate(at[te],at[ie]),m=te,x=ie),(q!==f||$!==y||be!==E||He!==I)&&(s.blendFuncSeparate(C[q],C[$],C[be],C[He]),f=q,y=$,E=be,I=He),(ut.equals(A)===!1||vt!==w)&&(s.blendColor(ut.r,ut.g,ut.b,vt),A.copy(ut),w=vt),_=P,F=!1}function Je(P,te){P.side===Jt?ue(s.CULL_FACE):me(s.CULL_FACE);let q=P.side===Ut;te&&(q=!q),et(q),P.blending===Ni&&P.transparent===!1?ct(Yn):ct(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),i.setMask(P.colorWrite);const $=P.stencilWrite;a.setTest($),$&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Le(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(P){b!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),b=P)}function ve(P){P!==yu?(me(s.CULL_FACE),P!==S&&(P===Yo?s.cullFace(s.BACK):P===Mu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ue(s.CULL_FACE),S=P}function ht(P){P!==R&&(Y&&s.lineWidth(P),R=P)}function Le(P,te,q){P?(me(s.POLYGON_OFFSET_FILL),(W!==te||U!==q)&&(s.polygonOffset(te,q),W=te,U=q)):ue(s.POLYGON_OFFSET_FILL)}function De(P){P?me(s.SCISSOR_TEST):ue(s.SCISSOR_TEST)}function T(P){P===void 0&&(P=s.TEXTURE0+G-1),V!==P&&(s.activeTexture(P),V=P)}function v(P,te,q){q===void 0&&(V===null?q=s.TEXTURE0+G-1:q=V);let $=re[q];$===void 0&&($={type:void 0,texture:void 0},re[q]=$),($.type!==P||$.texture!==te)&&(V!==q&&(s.activeTexture(q),V=q),s.bindTexture(P,te||Q[P]),$.type=P,$.texture=te)}function k(){const P=re[V];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ue(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ve(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(P){ke.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),ke.copy(P))}function fe(P){Qe.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),Qe.copy(P))}function Pe(P,te){let q=l.get(te);q===void 0&&(q=new WeakMap,l.set(te,q));let $=q.get(P);$===void 0&&($=s.getUniformBlockIndex(te,P.name),q.set(P,$))}function Be(P,te){const $=l.get(te).get(P);o.get(te)!==$&&(s.uniformBlockBinding(te,$,P.__bindingPointIndex),o.set(te,$))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},V=null,re={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,y=null,x=null,E=null,I=null,A=new Me(0,0,0),w=0,F=!1,b=null,S=null,R=null,W=null,U=null,ke.set(0,0,s.canvas.width,s.canvas.height),Qe.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:me,disable:ue,bindFramebuffer:Ie,drawBuffers:Oe,useProgram:Ge,setBlending:ct,setMaterial:Je,setFlipSided:et,setCullFace:ve,setLineWidth:ht,setPolygonOffset:Le,setScissorTest:De,activeTexture:T,bindTexture:v,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:Z,texImage2D:he,texImage3D:Ve,updateUBOMapping:Pe,uniformBlockBinding:Be,texStorage2D:Ue,texStorage3D:ee,texSubImage2D:K,texSubImage3D:Se,compressedTexSubImage2D:oe,compressedTexSubImage3D:de,scissor:Ce,viewport:fe,reset:st}}function Xl(s,e,t,n){const i=w_(n);switch(t){case Wc:return s*e;case qc:return s*e;case Yc:return s*e*2;case co:return s*e/i.components*i.byteLength;case ho:return s*e/i.components*i.byteLength;case $c:return s*e*2/i.components*i.byteLength;case uo:return s*e*2/i.components*i.byteLength;case Xc:return s*e*3/i.components*i.byteLength;case It:return s*e*4/i.components*i.byteLength;case fo:return s*e*4/i.components*i.byteLength;case er:case tr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case nr:case ir:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sa:case ba:return Math.max(s,16)*Math.max(e,8)/4;case Ma:case Ea:return Math.max(s,8)*Math.max(e,8)/2;case Aa:case Ta:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ra:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ca:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case La:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Da:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Na:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Fa:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ka:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case za:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case sr:case Va:case Ha:return Math.ceil(s/4)*Math.ceil(e/4)*16;case jc:case Wa:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Xa:case qa:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function w_(s){switch(s){case Nn:case Gc:return{byteLength:1,components:1};case fs:case Vc:case vs:return{byteLength:2,components:1};case oo:case lo:return{byteLength:2,components:4};case ui:case ao:case Pt:return{byteLength:4,components:1};case Hc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function R_(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return p?new OffscreenCanvas(T,v):gs("canvas")}function _(T,v,k){let J=1;const Z=De(T);if((Z.width>k||Z.height>k)&&(J=k/Math.max(Z.width,Z.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(J*Z.width),Se=Math.floor(J*Z.height);u===void 0&&(u=g(K,Se));const oe=v?g(K,Se):u;return oe.width=K,oe.height=Se,oe.getContext("2d").drawImage(T,0,0,K,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+K+"x"+Se+")."),oe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==Lt&&T.minFilter!==Gt}function f(T){s.generateMipmap(T)}function y(T,v,k,J,Z=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=v;if(v===s.RED&&(k===s.FLOAT&&(K=s.R32F),k===s.HALF_FLOAT&&(K=s.R16F),k===s.UNSIGNED_BYTE&&(K=s.R8)),v===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.R8UI),k===s.UNSIGNED_SHORT&&(K=s.R16UI),k===s.UNSIGNED_INT&&(K=s.R32UI),k===s.BYTE&&(K=s.R8I),k===s.SHORT&&(K=s.R16I),k===s.INT&&(K=s.R32I)),v===s.RG&&(k===s.FLOAT&&(K=s.RG32F),k===s.HALF_FLOAT&&(K=s.RG16F),k===s.UNSIGNED_BYTE&&(K=s.RG8)),v===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(K=s.RG8UI),k===s.UNSIGNED_SHORT&&(K=s.RG16UI),k===s.UNSIGNED_INT&&(K=s.RG32UI),k===s.BYTE&&(K=s.RG8I),k===s.SHORT&&(K=s.RG16I),k===s.INT&&(K=s.RG32I)),v===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),v===s.RGBA){const Se=Z?ur:Xe.getTransfer(J);k===s.FLOAT&&(K=s.RGBA32F),k===s.HALF_FLOAT&&(K=s.RGBA16F),k===s.UNSIGNED_BYTE&&(K=Se===nt?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(T,v){let k;return T?v===null||v===ui||v===Gi?k=s.DEPTH24_STENCIL8:v===Pt?k=s.DEPTH32F_STENCIL8:v===fs&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ui||v===Gi?k=s.DEPTH_COMPONENT24:v===Pt?k=s.DEPTH_COMPONENT32F:v===fs&&(k=s.DEPTH_COMPONENT16),k}function E(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Lt&&T.minFilter!==Gt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function I(T){const v=T.target;v.removeEventListener("dispose",I),w(v),v.isVideoTexture&&h.delete(v)}function A(T){const v=T.target;v.removeEventListener("dispose",A),b(v)}function w(T){const v=n.get(T);if(v.__webglInit===void 0)return;const k=T.source,J=d.get(k);if(J){const Z=J[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&F(T),Object.keys(J).length===0&&d.delete(k)}n.remove(T)}function F(T){const v=n.get(T);s.deleteTexture(v.__webglTexture);const k=T.source,J=d.get(k);delete J[v.__cacheKey],a.memory.textures--}function b(T){const v=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let Z=0;Z<v.__webglFramebuffer[J].length;Z++)s.deleteFramebuffer(v.__webglFramebuffer[J][Z]);else s.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)s.deleteFramebuffer(v.__webglFramebuffer[J]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=T.textures;for(let J=0,Z=k.length;J<Z;J++){const K=n.get(k[J]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(k[J])}n.remove(T)}let S=0;function R(){S=0}function W(){const T=S;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),S+=1,T}function U(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function G(T,v){const k=n.get(T);if(T.isVideoTexture&&ht(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qe(k,T,v);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+v)}function Y(T,v){const k=n.get(T);if(T.version>0&&k.__version!==T.version){Qe(k,T,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+v)}function H(T,v){const k=n.get(T);if(T.version>0&&k.__version!==T.version){Qe(k,T,v);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+v)}function j(T,v){const k=n.get(T);if(T.version>0&&k.__version!==T.version){X(k,T,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+v)}const V={[zi]:s.REPEAT,[Xn]:s.CLAMP_TO_EDGE,[hr]:s.MIRRORED_REPEAT},re={[Lt]:s.NEAREST,[zc]:s.NEAREST_MIPMAP_NEAREST,[os]:s.NEAREST_MIPMAP_LINEAR,[Gt]:s.LINEAR,[Qs]:s.LINEAR_MIPMAP_NEAREST,[Ln]:s.LINEAR_MIPMAP_LINEAR},ce={[od]:s.NEVER,[fd]:s.ALWAYS,[ld]:s.LESS,[Jc]:s.LEQUAL,[cd]:s.EQUAL,[dd]:s.GEQUAL,[hd]:s.GREATER,[ud]:s.NOTEQUAL};function pe(T,v){if(v.type===Pt&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Gt||v.magFilter===Qs||v.magFilter===os||v.magFilter===Ln||v.minFilter===Gt||v.minFilter===Qs||v.minFilter===os||v.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,V[v.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,V[v.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,V[v.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,re[v.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,re[v.minFilter]),v.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ce[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Lt||v.minFilter!==os&&v.minFilter!==Ln||v.type===Pt&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ke(T,v){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",I));const J=v.source;let Z=d.get(J);Z===void 0&&(Z={},d.set(J,Z));const K=U(v);if(K!==T.__cacheKey){Z[K]===void 0&&(Z[K]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Z[K].usedTimes++;const Se=Z[T.__cacheKey];Se!==void 0&&(Z[T.__cacheKey].usedTimes--,Se.usedTimes===0&&F(v)),T.__cacheKey=K,T.__webglTexture=Z[K].texture}return k}function Qe(T,v,k){let J=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=s.TEXTURE_3D);const Z=ke(T,v),K=v.source;t.bindTexture(J,T.__webglTexture,s.TEXTURE0+k);const Se=n.get(K);if(K.version!==Se.__version||Z===!0){t.activeTexture(s.TEXTURE0+k);const oe=Xe.getPrimaries(Xe.workingColorSpace),de=v.colorSpace===Wn?null:Xe.getPrimaries(v.colorSpace),Ue=v.colorSpace===Wn||oe===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ee=_(v.image,!1,i.maxTextureSize);ee=Le(v,ee);const he=r.convert(v.format,v.colorSpace),Ve=r.convert(v.type);let Ce=y(v.internalFormat,he,Ve,v.colorSpace,v.isVideoTexture);pe(J,v);let fe;const Pe=v.mipmaps,Be=v.isVideoTexture!==!0,st=Se.__version===void 0||Z===!0,P=K.dataReady,te=E(v,ee);if(v.isDepthTexture)Ce=x(v.format===Vi,v.type),st&&(Be?t.texStorage2D(s.TEXTURE_2D,1,Ce,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Ce,ee.width,ee.height,0,he,Ve,null));else if(v.isDataTexture)if(Pe.length>0){Be&&st&&t.texStorage2D(s.TEXTURE_2D,te,Ce,Pe[0].width,Pe[0].height);for(let q=0,$=Pe.length;q<$;q++)fe=Pe[q],Be?P&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,fe.width,fe.height,he,Ve,fe.data):t.texImage2D(s.TEXTURE_2D,q,Ce,fe.width,fe.height,0,he,Ve,fe.data);v.generateMipmaps=!1}else Be?(st&&t.texStorage2D(s.TEXTURE_2D,te,Ce,ee.width,ee.height),P&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,he,Ve,ee.data)):t.texImage2D(s.TEXTURE_2D,0,Ce,ee.width,ee.height,0,he,Ve,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Be&&st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,te,Ce,Pe[0].width,Pe[0].height,ee.depth);for(let q=0,$=Pe.length;q<$;q++)if(fe=Pe[q],v.format!==It)if(he!==null)if(Be){if(P)if(v.layerUpdates.size>0){const ie=Xl(fe.width,fe.height,v.format,v.type);for(const be of v.layerUpdates){const He=fe.data.subarray(be*ie/fe.data.BYTES_PER_ELEMENT,(be+1)*ie/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,be,fe.width,fe.height,1,he,He,0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,fe.width,fe.height,ee.depth,he,fe.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Ce,fe.width,fe.height,ee.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?P&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,fe.width,fe.height,ee.depth,he,Ve,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,q,Ce,fe.width,fe.height,ee.depth,0,he,Ve,fe.data)}else{Be&&st&&t.texStorage2D(s.TEXTURE_2D,te,Ce,Pe[0].width,Pe[0].height);for(let q=0,$=Pe.length;q<$;q++)fe=Pe[q],v.format!==It?he!==null?Be?P&&t.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,fe.width,fe.height,he,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,q,Ce,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?P&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,fe.width,fe.height,he,Ve,fe.data):t.texImage2D(s.TEXTURE_2D,q,Ce,fe.width,fe.height,0,he,Ve,fe.data)}else if(v.isDataArrayTexture)if(Be){if(st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,te,Ce,ee.width,ee.height,ee.depth),P)if(v.layerUpdates.size>0){const q=Xl(ee.width,ee.height,v.format,v.type);for(const $ of v.layerUpdates){const ie=ee.data.subarray($*q/ee.data.BYTES_PER_ELEMENT,($+1)*q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,ee.width,ee.height,1,he,Ve,ie)}v.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,he,Ve,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,ee.width,ee.height,ee.depth,0,he,Ve,ee.data);else if(v.isData3DTexture)Be?(st&&t.texStorage3D(s.TEXTURE_3D,te,Ce,ee.width,ee.height,ee.depth),P&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,he,Ve,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,ee.width,ee.height,ee.depth,0,he,Ve,ee.data);else if(v.isFramebufferTexture){if(st)if(Be)t.texStorage2D(s.TEXTURE_2D,te,Ce,ee.width,ee.height);else{let q=ee.width,$=ee.height;for(let ie=0;ie<te;ie++)t.texImage2D(s.TEXTURE_2D,ie,Ce,q,$,0,he,Ve,null),q>>=1,$>>=1}}else if(Pe.length>0){if(Be&&st){const q=De(Pe[0]);t.texStorage2D(s.TEXTURE_2D,te,Ce,q.width,q.height)}for(let q=0,$=Pe.length;q<$;q++)fe=Pe[q],Be?P&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,he,Ve,fe):t.texImage2D(s.TEXTURE_2D,q,Ce,he,Ve,fe);v.generateMipmaps=!1}else if(Be){if(st){const q=De(ee);t.texStorage2D(s.TEXTURE_2D,te,Ce,q.width,q.height)}P&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he,Ve,ee)}else t.texImage2D(s.TEXTURE_2D,0,Ce,he,Ve,ee);m(v)&&f(J),Se.__version=K.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function X(T,v,k){if(v.image.length!==6)return;const J=ke(T,v),Z=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+k);const K=n.get(Z);if(Z.version!==K.__version||J===!0){t.activeTexture(s.TEXTURE0+k);const Se=Xe.getPrimaries(Xe.workingColorSpace),oe=v.colorSpace===Wn?null:Xe.getPrimaries(v.colorSpace),de=v.colorSpace===Wn||Se===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Ue=v.isCompressedTexture||v.image[0].isCompressedTexture,ee=v.image[0]&&v.image[0].isDataTexture,he=[];for(let $=0;$<6;$++)!Ue&&!ee?he[$]=_(v.image[$],!0,i.maxCubemapSize):he[$]=ee?v.image[$].image:v.image[$],he[$]=Le(v,he[$]);const Ve=he[0],Ce=r.convert(v.format,v.colorSpace),fe=r.convert(v.type),Pe=y(v.internalFormat,Ce,fe,v.colorSpace),Be=v.isVideoTexture!==!0,st=K.__version===void 0||J===!0,P=Z.dataReady;let te=E(v,Ve);pe(s.TEXTURE_CUBE_MAP,v);let q;if(Ue){Be&&st&&t.texStorage2D(s.TEXTURE_CUBE_MAP,te,Pe,Ve.width,Ve.height);for(let $=0;$<6;$++){q=he[$].mipmaps;for(let ie=0;ie<q.length;ie++){const be=q[ie];v.format!==It?Ce!==null?Be?P&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie,0,0,be.width,be.height,Ce,be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie,Pe,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie,0,0,be.width,be.height,Ce,fe,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie,Pe,be.width,be.height,0,Ce,fe,be.data)}}}else{if(q=v.mipmaps,Be&&st){q.length>0&&te++;const $=De(he[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,te,Pe,$.width,$.height)}for(let $=0;$<6;$++)if(ee){Be?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,he[$].width,he[$].height,Ce,fe,he[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Pe,he[$].width,he[$].height,0,Ce,fe,he[$].data);for(let ie=0;ie<q.length;ie++){const He=q[ie].image[$].image;Be?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie+1,0,0,He.width,He.height,Ce,fe,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie+1,Pe,He.width,He.height,0,Ce,fe,He.data)}}else{Be?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ce,fe,he[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Pe,Ce,fe,he[$]);for(let ie=0;ie<q.length;ie++){const be=q[ie];Be?P&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie+1,0,0,Ce,fe,be.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ie+1,Pe,Ce,fe,be.image[$])}}}m(v)&&f(s.TEXTURE_CUBE_MAP),K.__version=Z.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Q(T,v,k,J,Z,K){const Se=r.convert(k.format,k.colorSpace),oe=r.convert(k.type),de=y(k.internalFormat,Se,oe,k.colorSpace);if(!n.get(v).__hasExternalTextures){const ee=Math.max(1,v.width>>K),he=Math.max(1,v.height>>K);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,K,de,ee,he,v.depth,0,Se,oe,null):t.texImage2D(Z,K,de,ee,he,0,Se,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),ve(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Z,n.get(k).__webglTexture,0,et(v)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,Z,n.get(k).__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function me(T,v,k){if(s.bindRenderbuffer(s.RENDERBUFFER,T),v.depthBuffer){const J=v.depthTexture,Z=J&&J.isDepthTexture?J.type:null,K=x(v.stencilBuffer,Z),Se=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=et(v);ve(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,K,v.width,v.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,K,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,K,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,T)}else{const J=v.textures;for(let Z=0;Z<J.length;Z++){const K=J[Z],Se=r.convert(K.format,K.colorSpace),oe=r.convert(K.type),de=y(K.internalFormat,Se,oe,K.colorSpace),Ue=et(v);k&&ve(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,de,v.width,v.height):ve(v)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ue,de,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,de,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ue(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),G(v.depthTexture,0);const J=n.get(v.depthTexture).__webglTexture,Z=et(v);if(v.depthTexture.format===hi)ve(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(v.depthTexture.format===Vi)ve(v)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ie(T){const v=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ue(v.__webglFramebuffer,T)}else if(k){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]=s.createRenderbuffer(),me(v.__webglDepthbuffer[J],T,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),me(v.__webglDepthbuffer,T,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(T,v,k){const J=n.get(T);v!==void 0&&Q(J.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Ie(T)}function Ge(T){const v=T.texture,k=n.get(T),J=n.get(v);T.addEventListener("dispose",A);const Z=T.textures,K=T.isWebGLCubeRenderTarget===!0,Se=Z.length>1;if(Se||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=v.version,a.memory.textures++),K){k.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[oe]=[];for(let de=0;de<v.mipmaps.length;de++)k.__webglFramebuffer[oe][de]=s.createFramebuffer()}else k.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)k.__webglFramebuffer[oe]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Se)for(let oe=0,de=Z.length;oe<de;oe++){const Ue=n.get(Z[oe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&ve(T)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let oe=0;oe<Z.length;oe++){const de=Z[oe];k.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[oe]);const Ue=r.convert(de.format,de.colorSpace),ee=r.convert(de.type),he=y(de.internalFormat,Ue,ee,de.colorSpace,T.isXRRenderTarget===!0),Ve=et(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve,he,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,k.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),me(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),pe(s.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)Q(k.__webglFramebuffer[oe][de],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de);else Q(k.__webglFramebuffer[oe],T,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(v)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let oe=0,de=Z.length;oe<de;oe++){const Ue=Z[oe],ee=n.get(Ue);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture),pe(s.TEXTURE_2D,Ue),Q(k.__webglFramebuffer,T,Ue,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,0),m(Ue)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,J.__webglTexture),pe(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)Q(k.__webglFramebuffer[de],T,v,s.COLOR_ATTACHMENT0,oe,de);else Q(k.__webglFramebuffer,T,v,s.COLOR_ATTACHMENT0,oe,0);m(v)&&f(oe),t.unbindTexture()}T.depthBuffer&&Ie(T)}function at(T){const v=T.textures;for(let k=0,J=v.length;k<J;k++){const Z=v[k];if(m(Z)){const K=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Se=n.get(Z).__webglTexture;t.bindTexture(K,Se),f(K),t.unbindTexture()}}}const C=[],ct=[];function Je(T){if(T.samples>0){if(ve(T)===!1){const v=T.textures,k=T.width,J=T.height;let Z=s.COLOR_BUFFER_BIT;const K=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=n.get(T),oe=v.length>1;if(oe)for(let de=0;de<v.length;de++)t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let de=0;de<v.length;de++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Se.__webglColorRenderbuffer[de]);const Ue=n.get(v[de]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ue,0)}s.blitFramebuffer(0,0,k,J,0,0,k,J,Z,s.NEAREST),l===!0&&(C.length=0,ct.length=0,C.push(s.COLOR_ATTACHMENT0+de),T.depthBuffer&&T.resolveDepthBuffer===!1&&(C.push(K),ct.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ct)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,C))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let de=0;de<v.length;de++){t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,Se.__webglColorRenderbuffer[de]);const Ue=n.get(v[de]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,Ue,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function et(T){return Math.min(i.maxSamples,T.samples)}function ve(T){const v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ht(T){const v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function Le(T,v){const k=T.colorSpace,J=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Mt&&k!==Wn&&(Xe.getTransfer(k)===nt?(J!==It||Z!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function De(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=R,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=H,this.setTextureCube=j,this.rebindTextures=Oe,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ve}function C_(s,e){function t(n,i=Wn){let r;const a=Xe.getTransfer(i);if(n===Nn)return s.UNSIGNED_BYTE;if(n===oo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===lo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Hc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Gc)return s.BYTE;if(n===Vc)return s.SHORT;if(n===fs)return s.UNSIGNED_SHORT;if(n===ao)return s.INT;if(n===ui)return s.UNSIGNED_INT;if(n===Pt)return s.FLOAT;if(n===vs)return s.HALF_FLOAT;if(n===Wc)return s.ALPHA;if(n===Xc)return s.RGB;if(n===It)return s.RGBA;if(n===qc)return s.LUMINANCE;if(n===Yc)return s.LUMINANCE_ALPHA;if(n===hi)return s.DEPTH_COMPONENT;if(n===Vi)return s.DEPTH_STENCIL;if(n===co)return s.RED;if(n===ho)return s.RED_INTEGER;if(n===$c)return s.RG;if(n===uo)return s.RG_INTEGER;if(n===fo)return s.RGBA_INTEGER;if(n===er||n===tr||n===nr||n===ir)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===Sa||n===Ea||n===ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ta||n===wa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Aa||n===Ta)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ra||n===Ca||n===La||n===Pa||n===Ia||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===ka||n===za||n===Ga)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ra)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ca)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ia)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Da)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Na)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ba)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===za)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sr||n===Va||n===Ha)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===sr)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jc||n===Wa||n===Xa||n===qa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===sr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class L_ extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pn extends it{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P_={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(P_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const I_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class U_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new pt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ht({vertexShader:I_,fragmentShader:D_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N_ extends $i{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new U_,m=t.getContextAttributes();let f=null,y=null;const x=[],E=[],I=new ae;let A=null;const w=new Ct;w.layers.enable(1),w.viewport=new tt;const F=new Ct;F.layers.enable(2),F.viewport=new tt;const b=[w,F],S=new L_;S.layers.enable(1),S.layers.enable(2);let R=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=x[X];return Q===void 0&&(Q=new sa,x[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=x[X];return Q===void 0&&(Q=new sa,x[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=x[X];return Q===void 0&&(Q=new sa,x[X]=Q),Q.getHandSpace()};function U(X){const Q=E.indexOf(X.inputSource);if(Q===-1)return;const me=x[Q];me!==void 0&&(me.update(X.inputSource,X.frame,c||a),me.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",Y);for(let X=0;X<x.length;X++){const Q=E[X];Q!==null&&(E[X]=null,x[X].disconnect(Q))}R=null,W=null,_.reset(),e.setRenderTarget(f),p=null,d=null,u=null,i=null,y=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",G),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(I),i.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new ln(p.framebufferWidth,p.framebufferHeight,{format:It,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,me=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?Vi:hi,me=m.stencil?Gi:ui);const Ie={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ie),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ln(d.textureWidth,d.textureHeight,{format:It,type:Nn,depthTexture:new So(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Qe.setContext(i),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(X){for(let Q=0;Q<X.removed.length;Q++){const me=X.removed[Q],ue=E.indexOf(me);ue>=0&&(E[ue]=null,x[ue].disconnect(me))}for(let Q=0;Q<X.added.length;Q++){const me=X.added[Q];let ue=E.indexOf(me);if(ue===-1){for(let Oe=0;Oe<x.length;Oe++)if(Oe>=E.length){E.push(me),ue=Oe;break}else if(E[Oe]===null){E[Oe]=me,ue=Oe;break}if(ue===-1)break}const Ie=x[ue];Ie&&Ie.connect(me)}}const H=new L,j=new L;function V(X,Q,me){H.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(me.matrixWorld);const ue=H.distanceTo(j),Ie=Q.projectionMatrix.elements,Oe=me.projectionMatrix.elements,Ge=Ie[14]/(Ie[10]-1),at=Ie[14]/(Ie[10]+1),C=(Ie[9]+1)/Ie[5],ct=(Ie[9]-1)/Ie[5],Je=(Ie[8]-1)/Ie[0],et=(Oe[8]+1)/Oe[0],ve=Ge*Je,ht=Ge*et,Le=ue/(-Je+et),De=Le*-Je;Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(De),X.translateZ(Le),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const T=Ge+Le,v=at+Le,k=ve-De,J=ht+(ue-De),Z=C*at/v*T,K=ct*at/v*T;X.projectionMatrix.makePerspective(k,J,Z,K,T,v),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function re(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;_.texture!==null&&(X.near=_.depthNear,X.far=_.depthFar),S.near=F.near=w.near=X.near,S.far=F.far=w.far=X.far,(R!==S.near||W!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,W=S.far,w.near=R,w.far=W,F.near=R,F.far=W,w.updateProjectionMatrix(),F.updateProjectionMatrix(),X.updateProjectionMatrix());const Q=X.parent,me=S.cameras;re(S,Q);for(let ue=0;ue<me.length;ue++)re(me[ue],Q);me.length===2?V(S,w,F):S.projectionMatrix.copy(w.projectionMatrix),ce(X,S,Q)};function ce(X,Q,me){me===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(me.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Hi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let pe=null;function ke(X,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){const me=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ue=!1;me.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let Oe=0;Oe<me.length;Oe++){const Ge=me[Oe];let at=null;if(p!==null)at=p.getViewport(Ge);else{const ct=u.getViewSubImage(d,Ge);at=ct.viewport,Oe===0&&(e.setRenderTargetTextures(y,ct.colorTexture,d.ignoreDepthValues?void 0:ct.depthStencilTexture),e.setRenderTarget(y))}let C=b[Oe];C===void 0&&(C=new Ct,C.layers.enable(Oe),C.viewport=new tt,b[Oe]=C),C.matrix.fromArray(Ge.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(Ge.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(at.x,at.y,at.width,at.height),Oe===0&&(S.matrix.copy(C.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(C)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Oe=u.getDepthInformation(me[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,i.renderState)}}for(let me=0;me<x.length;me++){const ue=E[me],Ie=x[me];ue!==null&&Ie!==void 0&&Ie.update(ue,Q,c||a)}pe&&pe(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Qe=new oh;Qe.setAnimationLoop(ke),this.setAnimationLoop=function(X){pe=X},this.dispose=function(){}}}const ni=new cn,F_=new we;function O_(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,sh(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,x,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,x):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ut&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ut&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f),x=y.envMap,E=y.envMapRotation;x&&(m.envMap.value=x,ni.copy(E),ni.x*=-1,ni.y*=-1,ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),m.envMapRotation.value.setFromMatrix4(F_.makeRotationFromEuler(ni)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ut&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function B_(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const E=x.program;n.uniformBlockBinding(y,E)}function c(y,x){let E=i[y.id];E===void 0&&(g(y),E=h(y),i[y.id]=E,y.addEventListener("dispose",m));const I=x.program;n.updateUBOMapping(y,I);const A=e.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function h(y){const x=u();y.__bindingPointIndex=x;const E=s.createBuffer(),I=y.__size,A=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,I,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,E),E}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=i[y.id],E=y.uniforms,I=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let A=0,w=E.length;A<w;A++){const F=Array.isArray(E[A])?E[A]:[E[A]];for(let b=0,S=F.length;b<S;b++){const R=F[b];if(p(R,A,b,I)===!0){const W=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let G=0;for(let Y=0;Y<U.length;Y++){const H=U[Y],j=_(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,W+G,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,W,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,x,E,I){const A=y.value,w=x+"_"+E;if(I[w]===void 0)return typeof A=="number"||typeof A=="boolean"?I[w]=A:I[w]=A.clone(),!0;{const F=I[w];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return I[w]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function g(y){const x=y.uniforms;let E=0;const I=16;for(let w=0,F=x.length;w<F;w++){const b=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,R=b.length;S<R;S++){const W=b[S],U=Array.isArray(W.value)?W.value:[W.value];for(let G=0,Y=U.length;G<Y;G++){const H=U[G],j=_(H),V=E%I;V!==0&&I-V<j.boundary&&(E+=I-V),W.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=j.storage}}}const A=E%I;return A>0&&(E+=I-A),y.__size=E,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function f(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}class k_{constructor(e={}){const{canvas:t=Pd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this.toneMapping=$n,this.toneMappingExposure=1;const x=this;let E=!1,I=0,A=0,w=null,F=-1,b=null;const S=new tt,R=new tt;let W=null;const U=new Me(0);let G=0,Y=t.width,H=t.height,j=1,V=null,re=null;const ce=new tt(0,0,Y,H),pe=new tt(0,0,Y,H);let ke=!1;const Qe=new vo;let X=!1,Q=!1;const me=new we,ue=new L,Ie=new tt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function at(){return w===null?j:1}let C=n;function ct(M,D){return t.getContext(M,D)}try{const M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${so}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",ie,!1),C===null){const D="webgl2";if(C=ct(D,M),C===null)throw ct(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Je,et,ve,ht,Le,De,T,v,k,J,Z,K,Se,oe,de,Ue,ee,he,Ve,Ce,fe,Pe,Be,st;function P(){Je=new $m(C),Je.init(),Pe=new C_(C,Je),et=new Vm(C,Je,e,Pe),ve=new T_(C),ht=new Jm(C),Le=new p_,De=new R_(C,Je,ve,Le,et,Pe,ht),T=new Wm(x),v=new Ym(x),k=new sf(C),Be=new zm(C,k),J=new jm(C,k,ht,Be),Z=new Qm(C,J,k,ht),Ve=new Zm(C,et,De),Ue=new Hm(Le),K=new f_(x,T,v,Je,et,Be,Ue),Se=new O_(x,Le),oe=new g_,de=new S_(Je),he=new km(x,T,v,ve,Z,d,l),ee=new A_(x,Z,et),st=new B_(C,ht,et,ve),Ce=new Gm(C,Je,ht),fe=new Km(C,Je,ht),ht.programs=K.programs,x.capabilities=et,x.extensions=Je,x.properties=Le,x.renderLists=oe,x.shadowMap=ee,x.state=ve,x.info=ht}P();const te=new N_(x,C);this.xr=te,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=Je.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Je.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(M){M!==void 0&&(j=M,this.setSize(Y,H,!1))},this.getSize=function(M){return M.set(Y,H)},this.setSize=function(M,D,O=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,H=D,t.width=Math.floor(M*j),t.height=Math.floor(D*j),O===!0&&(t.style.width=M+"px",t.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(Y*j,H*j).floor()},this.setDrawingBufferSize=function(M,D,O){Y=M,H=D,j=O,t.width=Math.floor(M*O),t.height=Math.floor(D*O),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(S)},this.getViewport=function(M){return M.copy(ce)},this.setViewport=function(M,D,O,B){M.isVector4?ce.set(M.x,M.y,M.z,M.w):ce.set(M,D,O,B),ve.viewport(S.copy(ce).multiplyScalar(j).round())},this.getScissor=function(M){return M.copy(pe)},this.setScissor=function(M,D,O,B){M.isVector4?pe.set(M.x,M.y,M.z,M.w):pe.set(M,D,O,B),ve.scissor(R.copy(pe).multiplyScalar(j).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(M){ve.setScissorTest(ke=M)},this.setOpaqueSort=function(M){V=M},this.setTransparentSort=function(M){re=M},this.getClearColor=function(M){return M.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(M=!0,D=!0,O=!0){let B=0;if(M){let N=!1;if(w!==null){const ne=w.texture.format;N=ne===fo||ne===uo||ne===ho}if(N){const ne=w.texture.type,le=ne===Nn||ne===ui||ne===fs||ne===Gi||ne===oo||ne===lo,ge=he.getClearColor(),_e=he.getClearAlpha(),Ae=ge.r,Re=ge.g,Ee=ge.b;le?(p[0]=Ae,p[1]=Re,p[2]=Ee,p[3]=_e,C.clearBufferuiv(C.COLOR,0,p)):(g[0]=Ae,g[1]=Re,g[2]=Ee,g[3]=_e,C.clearBufferiv(C.COLOR,0,g))}else B|=C.COLOR_BUFFER_BIT}D&&(B|=C.DEPTH_BUFFER_BIT),O&&(B|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),oe.dispose(),de.dispose(),Le.dispose(),T.dispose(),v.dispose(),Z.dispose(),Be.dispose(),st.dispose(),K.dispose(),te.dispose(),te.removeEventListener("sessionstart",hn),te.removeEventListener("sessionend",Io),Kn.stop()};function q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=ht.autoReset,D=ee.enabled,O=ee.autoUpdate,B=ee.needsUpdate,N=ee.type;P(),ht.autoReset=M,ee.enabled=D,ee.autoUpdate=O,ee.needsUpdate=B,ee.type=N}function ie(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function be(M){const D=M.target;D.removeEventListener("dispose",be),He(D)}function He(M){ut(M),Le.remove(M)}function ut(M){const D=Le.get(M).programs;D!==void 0&&(D.forEach(function(O){K.releaseProgram(O)}),M.isShaderMaterial&&K.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,O,B,N,ne){D===null&&(D=Oe);const le=N.isMesh&&N.matrixWorld.determinant()<0,ge=Ch(M,D,O,B,N);ve.setMaterial(B,le);let _e=O.index,Ae=1;if(B.wireframe===!0){if(_e=J.getWireframeAttribute(O),_e===void 0)return;Ae=2}const Re=O.drawRange,Ee=O.attributes.position;let Ye=Re.start*Ae,ot=(Re.start+Re.count)*Ae;ne!==null&&(Ye=Math.max(Ye,ne.start*Ae),ot=Math.min(ot,(ne.start+ne.count)*Ae)),_e!==null?(Ye=Math.max(Ye,0),ot=Math.min(ot,_e.count)):Ee!=null&&(Ye=Math.max(Ye,0),ot=Math.min(ot,Ee.count));const lt=ot-Ye;if(lt<0||lt===1/0)return;Be.setup(N,B,ge,O,_e);let Ot,$e=Ce;if(_e!==null&&(Ot=k.get(_e),$e=fe,$e.setIndex(Ot)),N.isMesh)B.wireframe===!0?(ve.setLineWidth(B.wireframeLinewidth*at()),$e.setMode(C.LINES)):$e.setMode(C.TRIANGLES);else if(N.isLine){let xe=B.linewidth;xe===void 0&&(xe=1),ve.setLineWidth(xe*at()),N.isLineSegments?$e.setMode(C.LINES):N.isLineLoop?$e.setMode(C.LINE_LOOP):$e.setMode(C.LINE_STRIP)}else N.isPoints?$e.setMode(C.POINTS):N.isSprite&&$e.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)$e.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))$e.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const xe=N._multiDrawStarts,yt=N._multiDrawCounts,je=N._multiDrawCount,Zt=_e?k.get(_e).bytesPerElement:1,pi=Le.get(B).currentProgram.getUniforms();for(let Bt=0;Bt<je;Bt++)pi.setValue(C,"_gl_DrawID",Bt),$e.render(xe[Bt]/Zt,yt[Bt])}else if(N.isInstancedMesh)$e.renderInstances(Ye,lt,N.count);else if(O.isInstancedBufferGeometry){const xe=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,yt=Math.min(O.instanceCount,xe);$e.renderInstances(Ye,lt,yt)}else $e.render(Ye,lt)};function vt(M,D,O){M.transparent===!0&&M.side===Jt&&M.forceSinglePass===!1?(M.side=Ut,M.needsUpdate=!0,Es(M,D,O),M.side=Un,M.needsUpdate=!0,Es(M,D,O),M.side=Jt):Es(M,D,O)}this.compile=function(M,D,O=null){O===null&&(O=M),m=de.get(O),m.init(D),y.push(m),O.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),M!==O&&M.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const B=new Set;return M.traverse(function(N){const ne=N.material;if(ne)if(Array.isArray(ne))for(let le=0;le<ne.length;le++){const ge=ne[le];vt(ge,O,N),B.add(ge)}else vt(ne,O,N),B.add(ne)}),y.pop(),m=null,B},this.compileAsync=function(M,D,O=null){const B=this.compile(M,D,O);return new Promise(N=>{function ne(){if(B.forEach(function(le){Le.get(le).currentProgram.isReady()&&B.delete(le)}),B.size===0){N(M);return}setTimeout(ne,10)}Je.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let qe=null;function yn(M){qe&&qe(M)}function hn(){Kn.stop()}function Io(){Kn.start()}const Kn=new oh;Kn.setAnimationLoop(yn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(M){qe=M,te.setAnimationLoop(M),M===null?Kn.stop():Kn.start()},te.addEventListener("sessionstart",hn),te.addEventListener("sessionend",Io),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(D),D=te.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,D,w),m=de.get(M,y.length),m.init(D),y.push(m),me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Qe.setFromProjectionMatrix(me),Q=this.localClippingEnabled,X=Ue.init(this.clippingPlanes,Q),_=oe.get(M,f.length),_.init(),f.push(_),te.enabled===!0&&te.isPresenting===!0){const ne=x.xr.getDepthSensingMesh();ne!==null&&Cr(ne,D,-1/0,x.sortObjects)}Cr(M,D,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(V,re),Ge=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Ge&&he.addToRenderList(_,M),this.info.render.frame++,X===!0&&Ue.beginShadows();const O=m.state.shadowsArray;ee.render(O,M,D),X===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=_.opaque,N=_.transmissive;if(m.setupLights(),D.isArrayCamera){const ne=D.cameras;if(N.length>0)for(let le=0,ge=ne.length;le<ge;le++){const _e=ne[le];Uo(B,N,M,_e)}Ge&&he.render(M);for(let le=0,ge=ne.length;le<ge;le++){const _e=ne[le];Do(_,M,_e,_e.viewport)}}else N.length>0&&Uo(B,N,M,D),Ge&&he.render(M),Do(_,M,D);w!==null&&(De.updateMultisampleRenderTarget(w),De.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(x,M,D),Be.resetDefaultState(),F=-1,b=null,y.pop(),y.length>0?(m=y[y.length-1],X===!0&&Ue.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Cr(M,D,O,B){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Qe.intersectsSprite(M)){B&&Ie.setFromMatrixPosition(M.matrixWorld).applyMatrix4(me);const le=Z.update(M),ge=M.material;ge.visible&&_.push(M,le,ge,O,Ie.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Qe.intersectsObject(M))){const le=Z.update(M),ge=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ie.copy(M.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ie.copy(le.boundingSphere.center)),Ie.applyMatrix4(M.matrixWorld).applyMatrix4(me)),Array.isArray(ge)){const _e=le.groups;for(let Ae=0,Re=_e.length;Ae<Re;Ae++){const Ee=_e[Ae],Ye=ge[Ee.materialIndex];Ye&&Ye.visible&&_.push(M,le,Ye,O,Ie.z,Ee)}}else ge.visible&&_.push(M,le,ge,O,Ie.z,null)}}const ne=M.children;for(let le=0,ge=ne.length;le<ge;le++)Cr(ne[le],D,O,B)}function Do(M,D,O,B){const N=M.opaque,ne=M.transmissive,le=M.transparent;m.setupLightsView(O),X===!0&&Ue.setGlobalState(x.clippingPlanes,O),B&&ve.viewport(S.copy(B)),N.length>0&&Ss(N,D,O),ne.length>0&&Ss(ne,D,O),le.length>0&&Ss(le,D,O),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Uo(M,D,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new ln(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?vs:Nn,minFilter:Ln,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const ne=m.state.transmissionRenderTarget[B.id],le=B.viewport||S;ne.setSize(le.z,le.w);const ge=x.getRenderTarget();x.setRenderTarget(ne),x.getClearColor(U),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),Ge?he.render(O):x.clear();const _e=x.toneMapping;x.toneMapping=$n;const Ae=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),X===!0&&Ue.setGlobalState(x.clippingPlanes,B),Ss(M,O,B),De.updateMultisampleRenderTarget(ne),De.updateRenderTargetMipmap(ne),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Ee=0,Ye=D.length;Ee<Ye;Ee++){const ot=D[Ee],lt=ot.object,Ot=ot.geometry,$e=ot.material,xe=ot.group;if($e.side===Jt&&lt.layers.test(B.layers)){const yt=$e.side;$e.side=Ut,$e.needsUpdate=!0,No(lt,O,B,Ot,$e,xe),$e.side=yt,$e.needsUpdate=!0,Re=!0}}Re===!0&&(De.updateMultisampleRenderTarget(ne),De.updateRenderTargetMipmap(ne))}x.setRenderTarget(ge),x.setClearColor(U,G),Ae!==void 0&&(B.viewport=Ae),x.toneMapping=_e}function Ss(M,D,O){const B=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ne=M.length;N<ne;N++){const le=M[N],ge=le.object,_e=le.geometry,Ae=B===null?le.material:B,Re=le.group;ge.layers.test(O.layers)&&No(ge,D,O,_e,Ae,Re)}}function No(M,D,O,B,N,ne){M.onBeforeRender(x,D,O,B,N,ne),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.transparent===!0&&N.side===Jt&&N.forceSinglePass===!1?(N.side=Ut,N.needsUpdate=!0,x.renderBufferDirect(O,D,B,N,M,ne),N.side=Un,N.needsUpdate=!0,x.renderBufferDirect(O,D,B,N,M,ne),N.side=Jt):x.renderBufferDirect(O,D,B,N,M,ne),M.onAfterRender(x,D,O,B,N,ne)}function Es(M,D,O){D.isScene!==!0&&(D=Oe);const B=Le.get(M),N=m.state.lights,ne=m.state.shadowsArray,le=N.state.version,ge=K.getParameters(M,N.state,ne,D,O),_e=K.getProgramCacheKey(ge);let Ae=B.programs;B.environment=M.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(M.isMeshStandardMaterial?v:T).get(M.envMap||B.environment),B.envMapRotation=B.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Ae===void 0&&(M.addEventListener("dispose",be),Ae=new Map,B.programs=Ae);let Re=Ae.get(_e);if(Re!==void 0){if(B.currentProgram===Re&&B.lightsStateVersion===le)return Oo(M,ge),Re}else ge.uniforms=K.getUniforms(M),M.onBeforeCompile(ge,x),Re=K.acquireProgram(ge,_e),Ae.set(_e,Re),B.uniforms=ge.uniforms;const Ee=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ee.clippingPlanes=Ue.uniform),Oo(M,ge),B.needsLights=Ph(M),B.lightsStateVersion=le,B.needsLights&&(Ee.ambientLightColor.value=N.state.ambient,Ee.lightProbe.value=N.state.probe,Ee.directionalLights.value=N.state.directional,Ee.directionalLightShadows.value=N.state.directionalShadow,Ee.spotLights.value=N.state.spot,Ee.spotLightShadows.value=N.state.spotShadow,Ee.rectAreaLights.value=N.state.rectArea,Ee.ltc_1.value=N.state.rectAreaLTC1,Ee.ltc_2.value=N.state.rectAreaLTC2,Ee.pointLights.value=N.state.point,Ee.pointLightShadows.value=N.state.pointShadow,Ee.hemisphereLights.value=N.state.hemi,Ee.directionalShadowMap.value=N.state.directionalShadowMap,Ee.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ee.spotShadowMap.value=N.state.spotShadowMap,Ee.spotLightMatrix.value=N.state.spotLightMatrix,Ee.spotLightMap.value=N.state.spotLightMap,Ee.pointShadowMap.value=N.state.pointShadowMap,Ee.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Re,B.uniformsList=null,Re}function Fo(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=rr.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function Oo(M,D){const O=Le.get(M);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function Ch(M,D,O,B,N){D.isScene!==!0&&(D=Oe),De.resetTextureUnits();const ne=D.fog,le=B.isMeshStandardMaterial?D.environment:null,ge=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Mt,_e=(B.isMeshStandardMaterial?v:T).get(B.envMap||le),Ae=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Re=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ee=!!O.morphAttributes.position,Ye=!!O.morphAttributes.normal,ot=!!O.morphAttributes.color;let lt=$n;B.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(lt=x.toneMapping);const Ot=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,$e=Ot!==void 0?Ot.length:0,xe=Le.get(B),yt=m.state.lights;if(X===!0&&(Q===!0||M!==b)){const Xt=M===b&&B.id===F;Ue.setState(B,M,Xt)}let je=!1;B.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==yt.state.version||xe.outputColorSpace!==ge||N.isBatchedMesh&&xe.batching===!1||!N.isBatchedMesh&&xe.batching===!0||N.isBatchedMesh&&xe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&xe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&xe.instancing===!1||!N.isInstancedMesh&&xe.instancing===!0||N.isSkinnedMesh&&xe.skinning===!1||!N.isSkinnedMesh&&xe.skinning===!0||N.isInstancedMesh&&xe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&xe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&xe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&xe.instancingMorph===!1&&N.morphTexture!==null||xe.envMap!==_e||B.fog===!0&&xe.fog!==ne||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Ue.numPlanes||xe.numIntersection!==Ue.numIntersection)||xe.vertexAlphas!==Ae||xe.vertexTangents!==Re||xe.morphTargets!==Ee||xe.morphNormals!==Ye||xe.morphColors!==ot||xe.toneMapping!==lt||xe.morphTargetsCount!==$e)&&(je=!0):(je=!0,xe.__version=B.version);let Zt=xe.currentProgram;je===!0&&(Zt=Es(B,D,N));let pi=!1,Bt=!1,Lr=!1;const dt=Zt.getUniforms(),Fn=xe.uniforms;if(ve.useProgram(Zt.program)&&(pi=!0,Bt=!0,Lr=!0),B.id!==F&&(F=B.id,Bt=!0),pi||b!==M){dt.setValue(C,"projectionMatrix",M.projectionMatrix),dt.setValue(C,"viewMatrix",M.matrixWorldInverse);const Xt=dt.map.cameraPosition;Xt!==void 0&&Xt.setValue(C,ue.setFromMatrixPosition(M.matrixWorld)),et.logarithmicDepthBuffer&&dt.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&dt.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Bt=!0,Lr=!0)}if(N.isSkinnedMesh){dt.setOptional(C,N,"bindMatrix"),dt.setOptional(C,N,"bindMatrixInverse");const Xt=N.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),dt.setValue(C,"boneTexture",Xt.boneTexture,De))}N.isBatchedMesh&&(dt.setOptional(C,N,"batchingTexture"),dt.setValue(C,"batchingTexture",N._matricesTexture,De),dt.setOptional(C,N,"batchingIdTexture"),dt.setValue(C,"batchingIdTexture",N._indirectTexture,De),dt.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&dt.setValue(C,"batchingColorTexture",N._colorsTexture,De));const Pr=O.morphAttributes;if((Pr.position!==void 0||Pr.normal!==void 0||Pr.color!==void 0)&&Ve.update(N,O,Zt),(Bt||xe.receiveShadow!==N.receiveShadow)&&(xe.receiveShadow=N.receiveShadow,dt.setValue(C,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Fn.envMap.value=_e,Fn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(Fn.envMapIntensity.value=D.environmentIntensity),Bt&&(dt.setValue(C,"toneMappingExposure",x.toneMappingExposure),xe.needsLights&&Lh(Fn,Lr),ne&&B.fog===!0&&Se.refreshFogUniforms(Fn,ne),Se.refreshMaterialUniforms(Fn,B,j,H,m.state.transmissionRenderTarget[M.id]),rr.upload(C,Fo(xe),Fn,De)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(rr.upload(C,Fo(xe),Fn,De),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&dt.setValue(C,"center",N.center),dt.setValue(C,"modelViewMatrix",N.modelViewMatrix),dt.setValue(C,"normalMatrix",N.normalMatrix),dt.setValue(C,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Xt=B.uniformsGroups;for(let Ir=0,Ih=Xt.length;Ir<Ih;Ir++){const Bo=Xt[Ir];st.update(Bo,Zt),st.bind(Bo,Zt)}}return Zt}function Lh(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Ph(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,D,O){Le.get(M.texture).__webglTexture=D,Le.get(M.depthTexture).__webglTexture=O;const B=Le.get(M);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){const O=Le.get(M);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,O=0){w=M,I=D,A=O;let B=!0,N=null,ne=!1,le=!1;if(M){const _e=Le.get(M);_e.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(C.FRAMEBUFFER,null),B=!1):_e.__webglFramebuffer===void 0?De.setupRenderTarget(M):_e.__hasExternalTextures&&De.rebindTextures(M,Le.get(M.texture).__webglTexture,Le.get(M.depthTexture).__webglTexture);const Ae=M.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(le=!0);const Re=Le.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?N=Re[D][O]:N=Re[D],ne=!0):M.samples>0&&De.useMultisampledRTT(M)===!1?N=Le.get(M).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[O]:N=Re,S.copy(M.viewport),R.copy(M.scissor),W=M.scissorTest}else S.copy(ce).multiplyScalar(j).floor(),R.copy(pe).multiplyScalar(j).floor(),W=ke;if(ve.bindFramebuffer(C.FRAMEBUFFER,N)&&B&&ve.drawBuffers(M,N),ve.viewport(S),ve.scissor(R),ve.setScissorTest(W),ne){const _e=Le.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,_e.__webglTexture,O)}else if(le){const _e=Le.get(M.texture),Ae=D||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.__webglTexture,O||0,Ae)}F=-1},this.readRenderTargetPixels=function(M,D,O,B,N,ne,le){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Le.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(ge=ge[le]),ge){ve.bindFramebuffer(C.FRAMEBUFFER,ge);try{const _e=M.texture,Ae=_e.format,Re=_e.type;if(!et.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-B&&O>=0&&O<=M.height-N&&C.readPixels(D,O,B,N,Pe.convert(Ae),Pe.convert(Re),ne)}finally{const _e=w!==null?Le.get(w).__webglFramebuffer:null;ve.bindFramebuffer(C.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(M,D,O,B,N,ne,le){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Le.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&le!==void 0&&(ge=ge[le]),ge){ve.bindFramebuffer(C.FRAMEBUFFER,ge);try{const _e=M.texture,Ae=_e.format,Re=_e.type;if(!et.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=M.width-B&&O>=0&&O<=M.height-N){const Ee=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ee),C.bufferData(C.PIXEL_PACK_BUFFER,ne.byteLength,C.STREAM_READ),C.readPixels(D,O,B,N,Pe.convert(Ae),Pe.convert(Re),0),C.flush();const Ye=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await Id(C,Ye,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,Ee),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ne)}finally{C.deleteBuffer(Ee),C.deleteSync(Ye)}return ne}}finally{const _e=w!==null?Le.get(w).__webglFramebuffer:null;ve.bindFramebuffer(C.FRAMEBUFFER,_e)}}},this.copyFramebufferToTexture=function(M,D=null,O=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,M=arguments[1]);const B=Math.pow(2,-O),N=Math.floor(M.image.width*B),ne=Math.floor(M.image.height*B),le=D!==null?D.x:0,ge=D!==null?D.y:0;De.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,O,0,0,le,ge,N,ne),ve.unbindTexture()},this.copyTextureToTexture=function(M,D,O=null,B=null,N=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,M=arguments[1],D=arguments[2],N=arguments[3]||0,O=null);let ne,le,ge,_e,Ae,Re;O!==null?(ne=O.max.x-O.min.x,le=O.max.y-O.min.y,ge=O.min.x,_e=O.min.y):(ne=M.image.width,le=M.image.height,ge=0,_e=0),B!==null?(Ae=B.x,Re=B.y):(Ae=0,Re=0);const Ee=Pe.convert(D.format),Ye=Pe.convert(D.type);De.setTexture2D(D,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);const ot=C.getParameter(C.UNPACK_ROW_LENGTH),lt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ot=C.getParameter(C.UNPACK_SKIP_PIXELS),$e=C.getParameter(C.UNPACK_SKIP_ROWS),xe=C.getParameter(C.UNPACK_SKIP_IMAGES),yt=M.isCompressedTexture?M.mipmaps[N]:M.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,yt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,yt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ge),C.pixelStorei(C.UNPACK_SKIP_ROWS,_e),M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,Ae,Re,ne,le,Ee,Ye,yt.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,Ae,Re,yt.width,yt.height,Ee,yt.data):C.texSubImage2D(C.TEXTURE_2D,N,Ae,Re,ne,le,Ee,Ye,yt),C.pixelStorei(C.UNPACK_ROW_LENGTH,ot),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,lt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ot),C.pixelStorei(C.UNPACK_SKIP_ROWS,$e),C.pixelStorei(C.UNPACK_SKIP_IMAGES,xe),N===0&&D.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(M,D,O=null,B=null,N=0){M.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,M=arguments[2],D=arguments[3],N=arguments[4]||0);let ne,le,ge,_e,Ae,Re,Ee,Ye,ot;const lt=M.isCompressedTexture?M.mipmaps[N]:M.image;O!==null?(ne=O.max.x-O.min.x,le=O.max.y-O.min.y,ge=O.max.z-O.min.z,_e=O.min.x,Ae=O.min.y,Re=O.min.z):(ne=lt.width,le=lt.height,ge=lt.depth,_e=0,Ae=0,Re=0),B!==null?(Ee=B.x,Ye=B.y,ot=B.z):(Ee=0,Ye=0,ot=0);const Ot=Pe.convert(D.format),$e=Pe.convert(D.type);let xe;if(D.isData3DTexture)De.setTexture3D(D,0),xe=C.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)De.setTexture2DArray(D,0),xe=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);const yt=C.getParameter(C.UNPACK_ROW_LENGTH),je=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Zt=C.getParameter(C.UNPACK_SKIP_PIXELS),pi=C.getParameter(C.UNPACK_SKIP_ROWS),Bt=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,lt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,lt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,_e),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ae),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Re),M.isDataTexture||M.isData3DTexture?C.texSubImage3D(xe,N,Ee,Ye,ot,ne,le,ge,Ot,$e,lt.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(xe,N,Ee,Ye,ot,ne,le,ge,Ot,lt.data):C.texSubImage3D(xe,N,Ee,Ye,ot,ne,le,ge,Ot,$e,lt),C.pixelStorei(C.UNPACK_ROW_LENGTH,yt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,je),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Zt),C.pixelStorei(C.UNPACK_SKIP_ROWS,pi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Bt),N===0&&D.generateMipmaps&&C.generateMipmap(xe),ve.unbindTexture()},this.initRenderTarget=function(M){Le.get(M).__webglFramebuffer===void 0&&De.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?De.setTextureCube(M,0):M.isData3DTexture?De.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?De.setTexture2DArray(M,0):De.setTexture2D(M,0),ve.unbindTexture()},this.resetState=function(){I=0,A=0,w=null,ve.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===mo?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===Tr?"display-p3":"srgb"}}class gr extends it{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class z_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=pr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return _o("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tt=new L;class Eo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Eo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Xs=new L,ql=new L;class G_ extends it{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Xs.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Xs);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Xs.setFromMatrixPosition(e.matrixWorld),ql.setFromMatrixPosition(this.matrixWorld);const n=Xs.distanceTo(ql)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Yl=new L,$l=new tt,jl=new tt,V_=new L,Kl=new we,qs=new L,ra=new Nt,Jl=new we,aa=new di;class H_ extends rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jo,this.bindMatrix=new we,this.bindMatrixInverse=new we,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qs),this.boundingBox.expandByPoint(qs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qs),this.boundingSphere.expandByPoint(qs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ra.copy(this.boundingSphere),ra.applyMatrix4(i),e.ray.intersectsSphere(ra)!==!1&&(Jl.copy(i).invert(),aa.copy(e.ray).applyMatrix4(Jl),!(this.boundingBox!==null&&aa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,aa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===td?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;$l.fromBufferAttribute(i.attributes.skinIndex,e),jl.fromBufferAttribute(i.attributes.skinWeight,e),Yl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=jl.getComponent(r);if(a!==0){const o=$l.getComponent(r);Kl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(V_.copy(Yl).applyMatrix4(Kl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ph extends it{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mh extends pt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Lt,h=Lt,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zl=new we,W_=new we;class bo{constructor(e=[],t=[]){this.uuid=rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new we)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new we;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:W_;Zl.multiplyMatrices(o,t[r]),Zl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new bo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new mh(t,e,e,It,Pt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ph),this.bones.push(a),this.boneInverses.push(new we().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class In extends At{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Di=new we,Ql=new we,Ys=[],ec=new Vt,X_=new we,ns=new rt,is=new Nt;class cs extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new In(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,X_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),ec.copy(e.boundingBox).applyMatrix4(Di),this.boundingBox.union(ec)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),is.copy(e.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(is)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ns.geometry=this.geometry,ns.material=this.material,ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),is.copy(this.boundingSphere),is.applyMatrix4(n),e.ray.intersectsSphere(is)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Di),Ql.multiplyMatrices(n,Di),ns.matrixWorld=Ql,ns.raycast(e,Ys);for(let a=0,o=Ys.length;a<o;a++){const l=Ys[a];l.instanceId=r,l.object=this,t.push(l)}Ys.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new In(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new mh(new Float32Array(i*this.count),i,this.count,co,Pt));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ao extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _r=new L,xr=new L,tc=new we,ss=new di,$s=new Nt,oa=new L,nc=new L;class To extends it{constructor(e=new Wt,t=new Ao){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)_r.fromBufferAttribute(t,i-1),xr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=_r.distanceTo(xr);e.setAttribute("lineDistance",new on(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(i),$s.radius+=r,e.ray.intersectsSphere($s)===!1)return;tc.copy(i).invert(),ss.copy(e.ray).applyMatrix4(tc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=h.getX(_),y=h.getX(_+1),x=js(this,e,ss,l,f,y);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=js(this,e,ss,l,_,m);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=js(this,e,ss,l,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=js(this,e,ss,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function js(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(_r.fromBufferAttribute(a,i),xr.fromBufferAttribute(a,r),t.distanceSqToSegment(_r,xr,oa,nc)>n)return;oa.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(oa);if(!(l<e.near||l>e.far))return{distance:l,point:nc.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const ic=new L,sc=new L;class gh extends To{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ic.fromBufferAttribute(t,i),sc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ic.distanceTo(sc);e.setAttribute("lineDistance",new on(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class q_ extends To{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _h extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rc=new we,Ka=new di,Ks=new Nt,Js=new L;class Y_ extends it{constructor(e=new Wt,t=new _h){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(i),Ks.radius+=r,e.ray.intersectsSphere(Ks)===!1)return;rc.copy(i).invert(),Ka.copy(e.ray).applyMatrix4(rc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);Js.fromBufferAttribute(u,m),ac(Js,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,_=p;g<_;g++)Js.fromBufferAttribute(u,g),ac(Js,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ac(s,e,t,n,i,r,a){const o=Ka.distanceSqToPoint(s);if(o<t){const l=new L;Ka.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class $_ extends Ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wo extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=po,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xn extends wo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class j_ extends an{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Me(16777215),this.specular=new Me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=po,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Zs(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function K_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function J_(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function oc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function xh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Ms{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Z_ extends Ms{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zo,endingEnd:Zo}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qo:r=e,o=2*t-n;break;case el:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qo:a=e,l=2*n-t;break;case el:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,E=p*m-p*_;for(let I=0;I!==o;++I)r[I]=f*a[h+I]+y*a[c+I]+x*a[l+I]+E*a[u+I];return r}}class Q_ extends Ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class e0 extends Ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class vn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zs(t,this.TimeBufferType),this.values=Zs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zs(e.times,Array),values:Zs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new e0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Q_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Z_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ps:t=this.InterpolantFactoryMethodDiscrete;break;case ms:t=this.InterpolantFactoryMethodLinear;break;case Dr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return ms;case this.InterpolantFactoryMethodSmooth:return Dr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&K_(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Dr,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=ms;class Ki extends vn{constructor(e,t,n){super(e,t,n)}}Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=ps;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;class vh extends vn{}vh.prototype.ValueTypeName="color";class Xi extends vn{}Xi.prototype.ValueTypeName="number";class t0 extends Ms{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)_n.slerpFlat(r,0,a,c-o,a,c,l);return r}}class qi extends vn{InterpolantFactoryMethodLinear(e){return new t0(this.times,this.values,this.getValueSize(),e)}}qi.prototype.ValueTypeName="quaternion";qi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ji extends vn{constructor(e,t,n){super(e,t,n)}}Ji.prototype.ValueTypeName="string";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=ps;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;class Yi extends vn{}Yi.prototype.ValueTypeName="vector";class n0{constructor(e="",t=-1,n=[],i=nd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=rn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(s0(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(vn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=J_(l);l=oc(l,1,h),c=oc(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Xi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,_){if(p.length!==0){const m=[],f=[];xh(p,m,f,g),m.length!==0&&_.push(new u(d,m,f))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let y=0;y!==d[g].morphTargets.length;++y){const x=d[g];m.push(x.time),f.push(x.morphTarget===_?1:0)}i.push(new Xi(".morphTargetInfluence["+_+"]",m,f))}l=p.length*a}else{const p=".bones["+t[u].name+"]";n(Yi,p+".position",d,"pos",i),n(qi,p+".quaternion",d,"rot",i),n(Yi,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function i0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xi;case"vector":case"vector2":case"vector3":case"vector4":return Yi;case"color":return vh;case"quaternion":return qi;case"bool":case"boolean":return Ki;case"string":return Ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function s0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=i0(s.type);if(s.times===void 0){const t=[],n=[];xh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Dn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class r0{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const a0=new r0;class fi{constructor(e){this.manager=e!==void 0?e:a0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Tn={};class o0 extends Error{constructor(e,t){super(e),this.response=t}}class Ro extends fi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Dn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Tn[e]!==void 0){Tn[e].push({onLoad:t,onProgress:n,onError:i});return}Tn[e]=[],Tn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Tn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){y();function y(){u.read().then(({done:x,value:E})=>{if(x)f.close();else{_+=E.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let A=0,w=h.length;A<w;A++){const F=h[A];F.onProgress&&F.onProgress(I)}f.enqueue(E),y()}},x=>{f.error(x)})}}});return new Response(m)}else throw new o0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Dn.add(e,c);const h=Tn[e];delete Tn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Tn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Tn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class l0 extends fi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Dn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=gs("img");function l(){h(),Dn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class yh extends fi{constructor(e){super(e)}load(e,t,n,i){const r=new pt,a=new l0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Rr extends it{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const la=new we,lc=new L,cc=new L;class Co{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vo,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;lc.setFromMatrixPosition(e.matrixWorld),t.position.copy(lc),cc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cc),t.updateMatrixWorld(),la.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(la),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(la)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class c0 extends Co{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Hi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Mh extends Rr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new c0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const hc=new we,rs=new L,ca=new L;class h0 extends Co{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),rs.setFromMatrixPosition(e.matrixWorld),n.position.copy(rs),ca.copy(n.position),ca.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ca),n.updateMatrixWorld(),i.makeTranslation(-rs.x,-rs.y,-rs.z),hc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc)}}class u0 extends Rr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new h0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class d0 extends Co{constructor(){super(new yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class f0 extends Rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.shadow=new d0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class p0 extends Rr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ds{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class vr extends Wt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class m0 extends fi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Dn.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Dn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Dn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Dn.add(e,l),r.manager.itemStart(e)}}const Lo="\\[\\]\\.:\\/",g0=new RegExp("["+Lo+"]","g"),Po="[^"+Lo+"]",_0="[^"+Lo.replace("\\.","")+"]",x0=/((?:WC+[\/:])*)/.source.replace("WC",Po),v0=/(WCOD+)?/.source.replace("WCOD",_0),y0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Po),M0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Po),S0=new RegExp("^"+x0+v0+y0+M0+"$"),E0=["material","materials","bones","map"];class b0{constructor(e,t,n){const i=n||We.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class We{constructor(e,t,n){this.path=t,this.parsedPath=n||We.parseTrackName(t),this.node=We.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new We.Composite(e,t,n):new We(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(g0,"")}static parseTrackName(e){const t=S0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);E0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=We.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}We.Composite=b0;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const uc=new we;class A0{constructor(e,t,n=0,i=1/0){this.ray=new di(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return uc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uc),this}intersectObject(e,t=!0,n=[]){return Ja(e,this,n,t),n.sort(dc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Ja(e[i],this,n,t);return n.sort(dc),n}}function dc(s,e){return s.distance-e.distance}function Ja(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Ja(r[a],e,t,!0)}}class T0 extends gh{constructor(e=10,t=10,n=4473924,i=8947848){n=new Me(n),i=new Me(i);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,p=0,g=-o;d<=t;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=d===r?n:i;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const h=new Wt;h.setAttribute("position",new on(l,3)),h.setAttribute("color",new on(c,3));const u=new Ao({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:so}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=so);var w0=Object.defineProperty,R0=(s,e,t)=>e in s?w0(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,ye=(s,e,t)=>R0(s,typeof e!="symbol"?e+"":e,t);let C0=class extends EventTarget{constructor(e,t,n,i,r=!1,a=4){super(),ye(this,"navigationRenderTarget"),ye(this,"domElement"),ye(this,"renderer"),ye(this,"actualScene"),ye(this,"camera"),ye(this,"depthBufferScene"),ye(this,"copyPlaneScene"),ye(this,"depthBufferRenderTarget"),ye(this,"depthBufferPlaneMaterial"),ye(this,"copyPlaneMaterial"),ye(this,"pointers",[]),ye(this,"previousPointers",[]),ye(this,"mousePosition",new ae),ye(this,"mouseWorldPosition",new L),ye(this,"cameraLookAt",new L),ye(this,"zoomDirection",new L),ye(this,"rotateStart",new ae),ye(this,"rotateEnd",new ae),ye(this,"rotateDelta",new ae),ye(this,"panStart",new L),ye(this,"panHeightGuide",new Kt),ye(this,"mouseButtonConfiguration",{pan:2,rotate:0}),ye(this,"originalCameraPosition"),ye(this,"originalCameraLookAt"),ye(this,"cameraUpVector",new L(0,1,0)),ye(this,"_useBottomOfBoundingBoxAsGroundPlane",!0),ye(this,"_allowRotationBelowGroundPlane",!0),ye(this,"_rotateAroundMousePosition",!1),ye(this,"angleToUpVector"),ye(this,"maxLowerRotationAngle"),ye(this,"maxPanZoomDistance"),ye(this,"groundPlaneHeight"),ye(this,"groundPlane",new Kt),ye(this,"boundingDepthNDC"),ye(this,"sceneBackPoint",new L),ye(this,"boundingSphere",new Nt),ye(this,"nearPlane",new Kt),ye(this,"sceneHasMesh",!1),ye(this,"hasWarnedAboutEmptyScene",!1),ye(this,"_visualiser"),ye(this,"onMouseWheelBound",this.onMouseWheel.bind(this)),ye(this,"onPointerDownBound",this.onPointerDown.bind(this)),ye(this,"onPointerUpBound",this.onPointerUp.bind(this)),ye(this,"handleMouseWheelBound",this.handleMouseWheel.bind(this)),ye(this,"handlePointerDownRotateBound",this.handlePointerDownRotate.bind(this)),ye(this,"handlePointerMoveRotateBound",this.handlePointerMoveRotate.bind(this)),ye(this,"handlePointerDownPanBound",this.handlePointerDownPan.bind(this)),ye(this,"handlePointerMovePanBound",this.handlePointerMovePan.bind(this)),ye(this,"handleTouchMoveZoomRotateBound",this.handleTouchMoveZoomRotate.bind(this)),ye(this,"handleTouchMoveZoomBound",this.handleTouchMoveZoom.bind(this)),ye(this,"updateRenderTargetsBound",this.updateRenderTargets.bind(this)),ye(this,"setupBoundingSphereBound",this.setupBoundingSphere.bind(this)),this.camera=e,this.domElement=t,this.domElement.style.touchAction="none",this.renderer=n,this.actualScene=i,this.navigationRenderTarget=new ln(1,1,{samples:a}),this.navigationRenderTarget.depthTexture=new So(1,1,Pt),this.navigationRenderTarget.depthTexture.format=hi,this.depthBufferRenderTarget=new ln(1,1,{format:It,type:Pt}),this.updateRenderTargets(),this.setupRenderGeometries(),this.setupResilience(),this.actualScene.addEventListener("change",this.setupBoundingSphereBound),this.actualScene.addEventListener("resize",this.updateRenderTargetsBound),this.domElement.addEventListener("pointerdown",this.onPointerDownBound,{passive:!1}),this.domElement.addEventListener("pointercancel",this.onPointerUpBound),this.domElement.addEventListener("wheel",this.onMouseWheelBound,{passive:!1}),this.domElement.addEventListener("contextmenu",this.preventContextMenu),r?this.reloadCamera(this.boundingSphere.center):this.camera.lookAt(0,0,0),this.originalCameraPosition=this.camera.position.clone(),this.originalCameraLookAt=this.cameraLookAt.clone()}zoom(e){var t,n;if(isNaN(e))return;this.zoomDirection.copy(this.mouseWorldPosition).sub(this.camera.position);const i=this.camera.getWorldDirection(new L);this.nearPlane.setFromNormalAndCoplanarPoint(i,this.camera.position.clone().addScaledVector(i,this.camera.near*1.1));const r=this.nearPlane.distanceToPoint(this.mouseWorldPosition)/this.zoomDirection.length();this.zoomDirection.multiplyScalar(r),e<0?this.zoomDirection.multiplyScalar(.33*e):this.zoomDirection.multiplyScalar(.25*e);const a=this.camera.position.clone().add(this.zoomDirection);if(a.length()>this.maxPanZoomDistance||(a.y-this.groundPlaneHeight)/(this.camera.position.y-this.groundPlaneHeight)<0)return;this.camera.position.copy(a),this.camera.updateMatrixWorld(!0);const o=this.readDepthAtPosition(0,0);this.cameraLookAt.copy(new L(0,0,o).unproject(this.camera));const l=-this.camera.position.y/(this.cameraLookAt.y-this.camera.position.y),c=this.camera.position.clone().add(this.cameraLookAt.clone().sub(this.camera.position).multiplyScalar(l));this.cameraLookAt.copy(c),this.updateFurthestSceneDepth(),(t=this._visualiser)==null||t.update({maxNavigationSphereCenter:this.camera.position}),this._rotateAroundMousePosition||(n=this._visualiser)==null||n.update({rotationCenter:this.cameraLookAt})}rotate(e){var t;const n=this._rotateAroundMousePosition?this.mouseWorldPosition:this.cameraLookAt,i=this.camera.position.clone().sub(n),r=this.cameraLookAt.clone().sub(this.camera.position),a=new L().crossVectors(this.camera.getWorldDirection(new L).negate(),this.cameraUpVector).normalize(),o=new we().makeRotationY(-e.x);let l=this.angleToUpVector-e.y;l=Math.max(Math.min(l,this.maxLowerRotationAngle),.001);const c=this.angleToUpVector-l;o.multiply(new we().makeRotationAxis(a,c)),i.applyMatrix4(o),r.applyMatrix4(o),this.camera.position.copy(n.clone().add(i)),this.cameraLookAt.copy(this.camera.position.clone().add(r)),this.camera.updateMatrixWorld(!0),this.camera.lookAt(this.cameraLookAt),this._rotateAroundMousePosition?this.setupAngleToCameraUp():this.angleToUpVector=l,this.updateFurthestSceneDepth(),(t=this._visualiser)==null||t.update({rotationCenter:n})}pan(e){var t,n;e.negate();const i=this.camera.position.clone().add(e);i.clone().sub(this.boundingSphere.center).length()>this.maxPanZoomDistance||(this.camera.position.copy(i),this.cameraLookAt.add(e),this.camera.updateMatrixWorld(!0),this.updateFurthestSceneDepth(),(t=this._visualiser)==null||t.update({maxNavigationSphereCenter:this.camera.position}),this._rotateAroundMousePosition||(n=this._visualiser)==null||n.update({rotationCenter:this.cameraLookAt}))}onMouseWheel(e){this.sceneHasMesh||this.warnAboutEmptyScene(),this.dispatchEvent(new Event("changeStart")),e.preventDefault(),this.handleMouseWheel(e)}onPointerDown(e){if(this.sceneHasMesh||this.warnAboutEmptyScene(),this.dispatchEvent(new Event("changeStart")),this.domElement.removeEventListener("pointermove",this.handlePointerMovePanBound),this.domElement.removeEventListener("pointermove",this.handlePointerMoveRotateBound),this.domElement.removeEventListener("pointermove",this.handleTouchMoveZoomRotateBound),this.domElement.addEventListener("pointerup",this.onPointerUpBound),this.domElement.setPointerCapture(e.pointerId),e.pointerType==="touch")switch(this.trackPointer(e),this.pointers.length){case 1:this.handlePointerDownPan(e),this.domElement.addEventListener("pointermove",this.handlePointerMovePanBound);break;case 2:this.handlePointerDownRotate(e),this.domElement.addEventListener("pointermove",this.handleTouchMoveZoomRotateBound);break}else switch(e.button){case this.mouseButtonConfiguration.rotate:this.handlePointerDownRotate(e),this.domElement.addEventListener("pointermove",this.handlePointerMoveRotateBound);break;case this.mouseButtonConfiguration.pan:this.handlePointerDownPan(e),this.domElement.addEventListener("pointermove",this.handlePointerMovePanBound);break}}onPointerUp(e){e.pointerType==="touch"&&this.removePointer(e),this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this.handlePointerMovePanBound),this.domElement.removeEventListener("pointermove",this.handlePointerMoveRotateBound),this.domElement.removeEventListener("pointermove",this.handleTouchMoveZoomRotateBound),this.pointers.length===0?(this.domElement.removeEventListener("pointerup",this.onPointerUpBound),this.dispatchEvent(new Event("changeEnd"))):this.onPointerDown(this.pointers[0])}handleMouseWheel(e){e.deltaY!==0&&(this.updateMouseParameters(e.clientX,e.clientY),this.zoom(-(e.deltaY/Math.abs(e.deltaY))),this.dispatchEvent(new Event("change")),this.dispatchEvent(new Event("changeEnd")))}handlePointerDownRotate(e){const t=this.getAveragePointerPosition(e);t!==null&&(this.updateMouseParameters(t.x,t.y),this.rotateStart.copy(t))}handlePointerMoveRotate(e){const t=this.getAveragePointerPosition(e);if(t===null)return;this.rotateEnd.copy(t);const n=this.renderer.getSize(new ae),i=Math.min(n.x,n.y);this.rotateDelta.subVectors(this.rotateEnd,this.rotateStart).divideScalar(i/2),this.rotate(this.rotateDelta),this.rotateStart.copy(this.rotateEnd),this.dispatchEvent(new Event("change"))}handlePointerDownPan(e){var t;this.updateMouseParameters(e.clientX,e.clientY),this.panStart.copy(this.mouseWorldPosition),this.panHeightGuide.copy(new Kt(this.cameraUpVector,-this.panStart.y)),(t=this._visualiser)==null||t.update({panHeightGuideHeight:this.panStart.y})}handlePointerMovePan(e){this.updateMouseParameters(e.clientX,e.clientY);const t=new di(this.camera.position,this.mouseWorldPosition.clone().sub(this.camera.position).normalize()),n=new L;t.intersectPlane(this.panHeightGuide,n)!==null&&(this.pan(n.clone().sub(this.panStart)),this.dispatchEvent(new Event("change")))}handleTouchMoveZoomRotate(e){this.trackPointer(e),this.handlePointerMoveRotate(e),this.handleTouchMoveZoom(e),this.dispatchEvent(new Event("change"))}handleTouchMoveZoom(e){const t=this.getOtherPointer(e);if(t===null)return;const n=(e.clientX+t.clientX)/2,i=(e.clientY+t.clientY)/2;this.updateMouseParameters(n,i);const r=new ae(e.clientX-t.clientX,e.clientY-t.clientY).length(),a=new ae(this.previousPointers[0].clientX-this.previousPointers[1].clientX,this.previousPointers[0].clientY-this.previousPointers[1].clientY).length(),o=(r-a)/Math.max(this.domElement.clientWidth,this.domElement.clientHeight)*5;this.zoom(o),this.dispatchEvent(new Event("change"))}preventContextMenu(e){e.preventDefault()}setupRenderGeometries(){const e=`
			varying vec2 vUV;
			
			void main() {
				vUV = uv;
				gl_Position = vec4(position, 1.0);
			}
			`,t=`
			varying vec2 vUV;
			uniform sampler2D uDepthTexture;
			
			void main() {
				gl_FragColor = texture(uDepthTexture, vUV);
			}
			`,n=`
			varying vec2 vUV;
			uniform sampler2D uColorTexture;
			
			void main() {
				gl_FragColor = LinearTosRGB(texture(uColorTexture, vUV));
			}
			`,i=new jn(2,2);this.depthBufferPlaneMaterial=new Ht,this.depthBufferPlaneMaterial.vertexShader=e,this.depthBufferPlaneMaterial.fragmentShader=t;const r=new rt(i,this.depthBufferPlaneMaterial);r.frustumCulled=!1,this.depthBufferScene=new gr,this.depthBufferScene.add(r),this.copyPlaneMaterial=new Ht,this.copyPlaneMaterial.vertexShader=e,this.copyPlaneMaterial.fragmentShader=n;const a=new rt(i,this.copyPlaneMaterial);a.frustumCulled=!1,this.copyPlaneScene=new gr,this.copyPlaneScene.add(a)}update(e=!0){this.depthBufferPlaneMaterial.uniforms={uDepthTexture:{value:this.navigationRenderTarget.depthTexture}},this.renderer.setRenderTarget(this.depthBufferRenderTarget),this.renderer.render(this.depthBufferScene,this.camera),e&&(this.copyPlaneMaterial.uniforms={uColorTexture:{value:this.navigationRenderTarget.texture}},this.renderer.setRenderTarget(null),this.renderer.render(this.copyPlaneScene,this.camera))}dispose(){var e;this.domElement.removeEventListener("pointermove",this.handlePointerMovePanBound),this.domElement.removeEventListener("pointermove",this.handlePointerMoveRotateBound),this.domElement.removeEventListener("pointermove",this.handleTouchMoveZoomRotateBound),this.domElement.removeEventListener("pointerup",this.onPointerUpBound),this.domElement.removeEventListener("pointerdown",this.onPointerDownBound),this.domElement.removeEventListener("pointercancel",this.onPointerUpBound),this.domElement.removeEventListener("wheel",this.onMouseWheelBound),this.domElement.removeEventListener("contextmenu",this.preventContextMenu),(e=this.navigationRenderTarget.depthTexture)==null||e.dispose(),this.navigationRenderTarget.texture.dispose(),this.navigationRenderTarget.dispose(),this.depthBufferPlaneMaterial.dispose(),this.depthBufferRenderTarget.texture.dispose(),this.depthBufferRenderTarget.dispose(),this.copyPlaneMaterial.dispose(),this.depthBufferScene.traverse(t=>{t instanceof rt&&(t.geometry.dispose(),t.material.dispose())}),this.copyPlaneScene.traverse(t=>{t instanceof rt&&(t.geometry.dispose(),t.material.dispose())})}reloadCamera(e){var t;e!==void 0?this.cameraLookAt=e:new di(this.camera.position,this.camera.getWorldDirection(new L)).intersectPlane(this.groundPlane,this.cameraLookAt)===null&&(this.cameraLookAt.copy(this.boundingSphere.center),console.warn("Could not find a valid look at position for the camera. Using the center of the bounding sphere instead.")),this.camera.lookAt(this.cameraLookAt),this.setupAngleToCameraUp(),this.updateFurthestSceneDepth(),(t=this._visualiser)==null||t.update({maxNavigationSphereCenter:this.camera.position})}reset(){this.camera.position.copy(this.originalCameraPosition),this.cameraLookAt.copy(this.originalCameraLookAt),this.camera.lookAt(this.cameraLookAt),this.setupAngleToCameraUp(),this.dispatchEvent(new Event("change"))}updateRenderTargets(){const e=this.renderer.getSize(new ae).multiplyScalar(this.renderer.getPixelRatio());this.depthBufferRenderTarget.setSize(e.x,e.y),this.navigationRenderTarget.setSize(e.x,e.y)}updateMouseParameters(e,t){var n;const i=this.domElement.getBoundingClientRect(),r=e-i.left,a=t-i.top,o=i.width,l=i.height;this.mousePosition.x=r/o*2-1,this.mousePosition.y=1-a/l*2,this.mousePosition.clamp(new ae(-1,-1),new ae(.99,.99));const c=this.readDepthAtPosition(this.mousePosition.x,this.mousePosition.y),h=Math.min(c,this.boundingDepthNDC);this.mouseWorldPosition.set(this.mousePosition.x,this.mousePosition.y,h),this.mouseWorldPosition.unproject(this.camera),(n=this._visualiser)==null||n.update({mouseWorldPosition:this.mouseWorldPosition})}readDepthAtPosition(e,t){const n=this.depthBufferRenderTarget.width,i=this.depthBufferRenderTarget.height;e=Math.max(Math.min(1,e),-1),t=Math.max(Math.min(1,t),-1);const r=e*n/2+n/2,a=t*i/2+i/2,o=new Float32Array(4);this.renderer.readRenderTargetPixels(this.depthBufferRenderTarget,r,a,1,1,o);let l=o[0];return l=Math.min(1,l),l=Math.max(0,l),l=l*2-1,l}setupResilience(){this.setupMaxLowerRotationAngle(),this.setupBoundingSphere(),this.setupAngleToCameraUp()}setupBoundingSphere(){var e;this.actualScene.traverse(n=>{this.sceneHasMesh||n instanceof rt&&(this.sceneHasMesh=!0)});const t=new Vt().setFromObject(this.actualScene,!0);t.getBoundingSphere(this.boundingSphere),this.boundingSphere.radius<=0&&this.sceneHasMesh&&console.warn("Could not calculate a valid bounding sphere for the given scene. This may break the navigation."),this.maxPanZoomDistance=this.boundingSphere.radius*5,this.groundPlaneHeight=this._useBottomOfBoundingBoxAsGroundPlane?t.min.y:0,this.groundPlane=new Kt(this.cameraUpVector,-this.groundPlaneHeight),this.updateFurthestSceneDepth(),(e=this._visualiser)==null||e.update({boundingSphere:this.boundingSphere,groundPlaneHeight:this.groundPlaneHeight})}setupMaxLowerRotationAngle(){var e;this.maxLowerRotationAngle=this._allowRotationBelowGroundPlane?Math.PI-.001:Math.PI/2,(e=this._visualiser)==null||e.update({rotationCenter:this.cameraLookAt})}setupAngleToCameraUp(){this.camera.position.equals(new L(0,0,0))&&console.warn("Camera is at (0, 0, 0). This will break the navigation resilience!"),this.angleToUpVector=this.camera.position.clone().sub(this.cameraLookAt.clone().setY(this.groundPlaneHeight)).angleTo(this.cameraUpVector),(this.angleToUpVector===0||this.angleToUpVector===Math.PI)&&console.warn("Camera position is on y-axis. This will lead to navigation defects. Consider moving your camera.")}updateFurthestSceneDepth(){var e;this.sceneBackPoint.copy(this.boundingSphere.center.clone().addScaledVector(this.camera.getWorldDirection(new L),this.boundingSphere.radius)),this.boundingDepthNDC=this.sceneBackPoint.clone().project(this.camera).z,(e=this._visualiser)==null||e.update({backPlaneAnchor:this.sceneBackPoint})}warnAboutEmptyScene(){this.hasWarnedAboutEmptyScene||(this.hasWarnedAboutEmptyScene=!0,console.warn('The given scene is empty, or was empty at WorldInHandControls creation. This breaks the navigation. If you have added things to the scene since then, dispatch a "change" event on the given scene.'))}trackPointer(e){if(this.pointers.length===0||this.pointers.length===1&&this.pointers[0].pointerId!==e.pointerId){this.pointers.push(e),this.previousPointers.push(e);return}let t=-1;if(this.pointers[0].pointerId===e.pointerId)t=0;else if(this.pointers[1].pointerId===e.pointerId)t=1;else return;this.previousPointers[t]=this.pointers[t],this.pointers[t]=e}removePointer(e){let t=-1;if(this.pointers.length!==0){if(this.pointers.length>0&&this.pointers[0].pointerId===e.pointerId)t=0;else if(this.pointers.length>1&&this.pointers[1].pointerId===e.pointerId)t=1;else return;this.pointers.splice(t,1),this.previousPointers.splice(t,1)}}getOtherPointer(e){return this.pointers.length<2?null:this.pointers[0].pointerId===e.pointerId&&this.pointers[1].pointerId!==e.pointerId?this.pointers[1]:this.pointers[1].pointerId===e.pointerId&&this.pointers[0].pointerId!==e.pointerId?this.pointers[0]:null}getAveragePointerPosition(e){const t=new ae;if(e.pointerType==="mouse")t.x=e.clientX,t.y=e.clientY;else{const n=this.getOtherPointer(e);if(n===null)return null;t.x=(e.clientX+n.clientX)/2,t.y=(e.clientY+n.clientY)/2}return t}set allowRotationBelowGroundPlane(e){this._allowRotationBelowGroundPlane=e,this.setupMaxLowerRotationAngle()}set useBottomOfBoundingBoxAsGroundPlane(e){this._useBottomOfBoundingBoxAsGroundPlane=e,this.setupBoundingSphere(),this.setupAngleToCameraUp()}set rotateAroundMousePosition(e){this._rotateAroundMousePosition=e}set panWithLeftMouseButton(e){e?this.mouseButtonConfiguration={pan:0,rotate:2}:this.mouseButtonConfiguration={pan:2,rotate:0}}set worldInHandControlsVisualiser(e){this._visualiser=e}};const L0="modulepreload",P0=function(s){return"/SoftwareMap/"+s},fc={},ar=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=r?.nonce||r?.getAttribute("nonce");i=Promise.all(t.map(o=>{if(o=P0(o),o in fc)return;fc[o]=!0;const l=o.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${c}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":L0,l||(h.as="script",h.crossOrigin=""),h.href=o,a&&h.setAttribute("nonce",a),document.head.appendChild(h),l)return new Promise((u,d)=>{h.addEventListener("load",u),h.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return i.then(()=>e()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})};function pc(s,e){if(e===id)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ya||e===Kc){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Ya)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class I0 extends fi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new O0(t)}),this.register(function(t){return new B0(t)}),this.register(function(t){return new Y0(t)}),this.register(function(t){return new $0(t)}),this.register(function(t){return new j0(t)}),this.register(function(t){return new z0(t)}),this.register(function(t){return new G0(t)}),this.register(function(t){return new V0(t)}),this.register(function(t){return new H0(t)}),this.register(function(t){return new F0(t)}),this.register(function(t){return new W0(t)}),this.register(function(t){return new k0(t)}),this.register(function(t){return new q0(t)}),this.register(function(t){return new X0(t)}),this.register(function(t){return new U0(t)}),this.register(function(t){return new K0(t)}),this.register(function(t){return new J0(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=ds.extractUrlBase(e);a=ds.resolveURL(c,this.path)}else a=ds.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ro(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Sh){try{a[ze.KHR_BINARY_GLTF]=new Z0(e)}catch(u){i&&i(u);return}r=JSON.parse(a[ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new ux(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ze.KHR_MATERIALS_UNLIT:a[u]=new N0;break;case ze.KHR_DRACO_MESH_COMPRESSION:a[u]=new Q0(r,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:a[u]=new ex;break;case ze.KHR_MESH_QUANTIZATION:a[u]=new tx;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function D0(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class U0{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Me(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Mt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new f0(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new u0(h),c.distance=u;break;case"spot":c=new Mh(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Rn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class N0{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return li}extendParams(e,t,n){const i=[];e.color=new Me(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Mt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(i)}}class F0{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class O0{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(o,o)}return Promise.all(r)}}class B0{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class k0{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class z0{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Mt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Rt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class G0{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class V0{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(o[0],o[1],o[2],Mt),Promise.all(r)}}class H0{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class W0{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(o[0],o[1],o[2],Mt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Rt)),Promise.all(r)}}class X0{constructor(e){this.parser=e,this.name=ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class q0{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Y0{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class $0{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class j0{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class K0{constructor(e){this.name=ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}class J0{constructor(e){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==$t.TRIANGLES&&c.mode!==$t.TRIANGLE_STRIP&&c.mode!==$t.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(const g of u){const _=new we,m=new L,f=new _n,y=new L(1,1,1),x=new cs(g.geometry,g.material,d);for(let E=0;E<d;E++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,E),l.SCALE&&y.fromBufferAttribute(l.SCALE,E),x.setMatrixAt(E,_.compose(m,f,y));for(const E in l)if(E==="_COLOR_0"){const I=l[E];x.instanceColor=new In(I.array,I.itemSize,I.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,l[E]);it.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Sh="glTF",as=12,mc={JSON:1313821514,BIN:5130562};class Z0{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,as),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Sh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-as,r=new DataView(e,as);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===mc.JSON){const c=new Uint8Array(e,as+a,o);this.content=n.decode(c)}else if(l===mc.BIN){const c=as+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Q0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Za[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Za[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],p=Oi[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(const g in p.attributes){const _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(p)},o,c,Mt,d)})})}}class ex{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class tx{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}}class Eh extends Ms{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,g=e*c,_=g-c,m=-2*p+3*d,f=p-d,y=1-m,x=f-d+u;for(let E=0;E!==o;E++){const I=a[_+E+o],A=a[_+E+l]*h,w=a[g+E+o],F=a[g+E]*h;r[E]=y*I+x*A+m*w+f*F}return r}}const nx=new _n;class ix extends Eh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return nx.fromArray(r).normalize().toArray(r),r}}const $t={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Oi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gc={9728:Lt,9729:Gt,9984:zc,9985:Qs,9986:os,9987:Ln},_c={33071:Xn,33648:hr,10497:zi},ha={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Za={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sx={CUBICSPLINE:void 0,LINEAR:ms,STEP:ps},ua={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new wo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Un})),s.DefaultMaterial}function ii(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Rn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ax(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function ox(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lx(s){let e;const t=s.extensions&&s.extensions[ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+da(t.attributes):e=s.indices+":"+da(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+da(s.targets[n]);return e}function da(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Qa(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const hx=new we;class ux{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new D0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new yh(this.options.manager):this.textureLoader=new m0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ro(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ii(r,o,i),Rn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(ds.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=ha[i.type],o=Oi[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new At(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=ha[i.type],c=Oi[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(p&&p!==u){const f=Math.floor(d/p),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let x=t.cache.get(y);x||(_=new c(o,f*p,i.count*p/h),x=new z_(_,p/h),t.cache.add(y,x)),m=new Eo(x,l,d%p/h,g)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),m=new At(_,l,g);if(i.sparse!==void 0){const f=ha.SCALAR,y=Oi[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,I=new y(a[1],x,i.sparse.count*f),A=new c(a[2],E,i.sparse.count*l);o!==null&&(m=new At(m.array.slice(),m.itemSize,m.normalized));for(let w=0,F=I.length;w<F;w++){const b=I[w];if(m.setX(b,A[w*l]),l>=2&&m.setY(b,A[w*l+1]),l>=3&&m.setZ(b,A[w*l+2]),l>=4&&m.setW(b,A[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=gc[d.magFilter]||Gt,h.minFilter=gc[d.minFilter]||Ln,h.wrapS=_c[d.wrapS]||zi,h.wrapT=_c[d.wrapT]||zi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new pt(_);m.needsUpdate=!0,d(m)}),t.load(ds.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Rn(u,a),u.userData.mimeType=a.mimeType||cx(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ze.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new _h,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Ao,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return wo}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[ze.KHR_MATERIALS_UNLIT]){const u=i[ze.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Me(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Mt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Rt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Jt);const h=r.alphaMode||ua.OPAQUE;if(h===ua.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ua.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==li&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==li&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==li){const u=r.emissiveFactor;o.emissive=new Me().setRGB(u[0],u[1],u[2],Mt)}return r.emissiveTexture!==void 0&&a!==li&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Rn(u,r),t.associations.set(u,{materials:e}),r.extensions&&ii(i,u,r),u})}createUniqueName(e){const t=We.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return xc(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=lx(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=xc(new Wt,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?rx(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const _=h[p],m=a[p];let f;const y=c[p];if(m.mode===$t.TRIANGLES||m.mode===$t.TRIANGLE_STRIP||m.mode===$t.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new H_(_,y):new rt(_,y),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===$t.TRIANGLE_STRIP?f.geometry=pc(f.geometry,Kc):m.mode===$t.TRIANGLE_FAN&&(f.geometry=pc(f.geometry,Ya));else if(m.mode===$t.LINES)f=new gh(_,y);else if(m.mode===$t.LINE_STRIP)f=new To(_,y);else if(m.mode===$t.LINE_LOOP)f=new q_(_,y);else if(m.mode===$t.POINTS)f=new Y_(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&ox(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Rn(f,r),m.extensions&&ii(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&ii(i,u[0],r),u[0];const d=new pn;r.extensions&&ii(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ct(Ld.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new yo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Rn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new we;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new bo(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],g=i.samplers[p.sampler],_=p.target,m=_.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],_=u[3],m=u[4],f=[];for(let y=0,x=d.length;y<x;y++){const E=d[y],I=p[y],A=g[y],w=_[y],F=m[y];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const b=n._createAnimationTracks(E,I,A,w,F);if(b)for(let S=0;S<b.length;S++)f.push(b[S])}return new n0(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,hx)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new ph:c.length>1?h=new pn:c.length===1?h=c[0]:h=new it,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Rn(h,r),r.extensions&&ii(n,h,r),r.matrix!==void 0){const u=new we;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new pn;n.name&&(r.name=i.createUniqueName(n.name)),Rn(r,n),n.extensions&&ii(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof an||d instanceof pt)&&u.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];Hn[r.path]===Hn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Hn[r.path]){case Hn.weights:c=Xi;break;case Hn.rotation:c=qi;break;case Hn.position:case Hn.scale:c=Yi;break;default:switch(n.itemSize){case 1:c=Xi;break;case 2:case 3:default:c=Yi;break}break}const h=i.interpolation!==void 0?sx[i.interpolation]:ms,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+Hn[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Qa(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof qi?ix:Eh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function dx(s,e,t){const n=e.attributes,i=new Vt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){const h=Qa(Oi[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new L,l=new L;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=Qa(Oi[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Nt;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function xc(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Za[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Xe.workingColorSpace!==Mt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),Rn(s,e),dx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ax(s,e.targets,t):s})}class fx{async getGlyphAtlas(e){const t=await(await fetch(e)).json();for(const a of t.types)for(const o of a.variants)o.name instanceof Array||(o.name=[o.name]);const n=Object.assign({"/public/copyright_free.glb":()=>ar(()=>import("./copyright_free-DgnUeCuJ.js"),[])}),i=new Array;for(const a in n)i.push(a.substring(a.lastIndexOf("/")+1));if(!i.includes(t.modelFile))return console.error("The gltf specified in the chosen json does not exist!"),null;this.checkAndReplaceInvalidCharacters(t),t.types.length===1&&console.warn("The selected glyph atlas only provides one type of glyph. The mapping of glyphType has no effect.");const r=await this.loadGLTF(t);return{json:t,glyphs:r.glyphs,largestExtent:r.largestExtent}}async loadGLTF(e){const n=await new I0().loadAsync(e.modelFile),i=new Array;n.scene.traverse(a=>{let o=!1;a.name===e.landmark&&(o=!0);for(let l=0;l<e.types.length&&!o;++l)for(let c=0;c<e.types[l].variants.length&&!o;++c)for(let h=0;h<e.types[l].variants[c].name.length&&!o;++h)o=o||a.name===e.types[l].variants[c].name[h];o&&i.push(a)});let r=Number.NEGATIVE_INFINITY;for(const a of i)r=Math.max(new Vt().setFromObject(a,!0).getBoundingSphere(new Nt).radius*2,r);return{glyphs:i,largestExtent:r}}checkAndReplaceInvalidCharacters(e){function t(i){return/[\[\].:\\\s]/g.test(i)}let n=!1;t(e.landmark)&&(n=!0,e.landmark=We.sanitizeNodeName(e.landmark));for(const i of e.types)if(t(i.baseModel)&&(n=!0,i.baseModel=We.sanitizeNodeName(i.baseModel)),i.variants!==void 0)for(const r of i.variants)for(let a=0;a<r.name.length;++a)t(r.name[a])&&(n=!0,r.name[a]=We.sanitizeNodeName(r.name[a]));n&&console.warn("The specified json contains glyph names containing '.', ':', '[', ']', '\\' or whitespace. This is not supported by three.js. All whitespace is replaced with '_' and all other invalid characters are removed. If this leads to issues, consider using '-' instead of the invalid characters. For more info visit https://discourse.threejs.org/t/issue-with-gltfloader-and-objects-with-dots-in-their-name-attribute/6726.")}}var px=Object.defineProperty,mx=(s,e,t)=>e in s?px(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Te=(s,e,t)=>(mx(s,typeof e!="symbol"?e+"":e,t),t);class bh{constructor(e=0,t=0){Te(this,"_codepoint"),Te(this,"_advance"),Te(this,"_bearing",new ae(0,0)),Te(this,"_extent",new ae(0,0)),Te(this,"_kernings",new Map),Te(this,"_subTextureOrigin",new ae(0,0)),Te(this,"_subTextureExtent",new ae(0,0)),this._codepoint=e,this._advance=t}toChar(){return String.fromCodePoint(this.codepoint)}depictable(){return this._subTextureExtent.x>0&&this._subTextureExtent.y>0}kerning(e){const t=this._kernings.get(e);return t!==void 0?t:0}setKerning(e,t){this._kernings.set(e,t)}set codepoint(e){this._codepoint=e}get codepoint(){return this._codepoint}set subTextureOrigin(e){const t=e.clamp(new ae(0,0),new ae(1,1));e.equals(t)||console.warn(`Glyph texture origin clamped to [${t}], given [${e}]`),this._subTextureOrigin=t}get subTextureOrigin(){return this._subTextureOrigin}set subTextureExtent(e){const t=e.clamp(new ae(0,0),new ae(1,1));e.equals(t)||console.warn(`Glyph texture extent clamped to [${t}], given [${origin}]`),this._subTextureExtent=t}get subTextureExtent(){return this._subTextureExtent}set bearing(e){this._bearing=e}get bearing(){return this._bearing}bearingFromFontBaseAndOffset(e,t,n){this._bearing.x=t,this._bearing.y=e-n}set extent(e){this._extent=e}get extent(){return this._extent}set advance(e){this._advance=e}get advance(){return this._advance}}class gx{constructor(){Te(this,"_size"),Te(this,"_base"),Te(this,"_ascent",0),Te(this,"_descent",0),Te(this,"_lineGap",0),Te(this,"_glyphTextureExtent",new ae(0,0)),Te(this,"_glyphTexturePadding",{top:0,right:0,bottom:0,left:0}),Te(this,"_glyphTexture"),Te(this,"_ready",!1),Te(this,"_glyphs",new Map)}hasGlyph(e){return!!this._glyphs.get(e)}glyph(e){const t=this._glyphs.get(e);if(t)return t;const n=new bh;return n.codepoint=e,n}addGlyph(e){if(this.hasGlyph(e.codepoint)){console.error("Expected glyph to not already exist");return}this._glyphs.set(e.codepoint,e)}setKerning(e,t,n){const i=this._glyphs.get(e);if(!i||!this.hasGlyph(t)){console.error(`Expected glyph or glyph of subsequent index to exist,                 given ${e} and ${t} respectively`);return}i.setKerning(t,n)}dispose(){this.glyphTexture.dispose()}set size(e){if(e<=0){console.error(`Expected size to be greater than 0.0, given ${e}`);return}this._size=e}get size(){return this._size}set base(e){if(e<=0){console.error(`Expected base to be greater than 0.0, given ${e}`);return}this._base=e}get base(){return this._base}set ascent(e){if(e<=0){console.error(`Expected ascent to be greater than 0.0, given ${e}`);return}this._ascent=e}get ascent(){return this._ascent}set descent(e){this._descent=e}get descent(){return this._descent}set lineGap(e){this._lineGap=e}get lineGap(){return this._lineGap}set lineHeight(e){if(this.size<=0){console.error("Expected size to be greater than zero to derive line gap from line height");return}this.lineGap=e-this.size}get lineHeight(){return this.size+this.lineGap}set lineSpace(e){this._lineGap=this.size*(e-1)}get lineSpace(){return this.lineHeight===0?this.lineHeight:this.size/this.lineHeight}set glyphTextureExtent(e){if(e.x<=0){console.error(`Expected extent.x to be greater than 0.0, given ${e.x}`);return}if(e.y<=0){console.error(`Expected extent.y to be greater than 0.0, given ${e.y}`);return}this._glyphTextureExtent=e}get glyphTextureExtent(){return this._glyphTextureExtent}set glyphTexturePadding(e){if(e.top<0){console.error(`expected padding.top to be greater than 0.0, given ${e.top}`);return}if(e.right<0){console.error(`Expected padding.right to be greater than 0.0, given ${e.right}`);return}if(e.bottom<0){console.error(`expected padding.bottom to be greater than 0.0, given ${e.bottom}`);return}if(e.left<0){console.error(`Expected padding.left to be greater than 0.0, given ${e.left}`);return}this._glyphTexturePadding=e}get glyphTexturePadding(){return this._glyphTexturePadding}set glyphTexture(e){this._glyphTexture&&this._glyphTexture.dispose(),this._glyphTexture=e}get glyphTexture(){return this._glyphTexture}set ready(e){this._ready=e}get ready(){return this._ready}}class _x extends fi{constructor(e){e?super(e):super()}load(e,t,n,i){const r=`${e}.fnt`,a=`${e}.png`;return this.loadFromUrls(r,a,t,n,i)}loadFromUrls(e,t,n,i,r){Dn.enabled=!0;let a=new gx;const o=new Ro(this.manager);return o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,l=>{try{let c=this.processDescription(l,a);if(c!==!0)throw new Error("Description file could not be parsed correctly.");const h=new yh(this.manager).setPath(this.path).setRequestHeader(this.requestHeader).setWithCredentials(this.withCredentials).load(t,()=>{a.glyphTexture=h,c===!0&&(a.ready=!0),n&&n(a)},i,r)}catch(c){r?r(c):console.error(c),this.manager.itemError(e)}},i,r),a}loadFromAPI(e){let t=e;const n="/fontdescription",i="/distancefield";if(e.endsWith(n)||e.endsWith(i)){const r=e.lastIndexOf("/");t=e.substring(0,r)}return this.loadFromUrls(t+n,t+i)}processDescription(e,t){let n="";n=e.toString();const i=n.split(`
`);let r=!0;for(const a of i){let o=a.split(" ");const l=o[0];switch(o=o.slice(1),l){case"info":r=this.processInfo(o,t);break;case"common":r=this.processCommon(o,t);break;case"char":r=this.processChar(o,t);break;case"kerning":this.processKerning(o,t);break}if(r===!1)break}return r}processInfo(e,t){const n=new Map;if(!this.readKeyValuePairs(e,["size","padding"],n))return!1;t.size=parseFloat(n.get("size"));const i=n.get("padding").split(",");if(i.length!==4)return console.warn(`Expected 4 values for padding, given ${i} (${i.length})`),!1;const r={top:parseFloat(i[0]),right:parseFloat(i[1]),bottom:parseFloat(i[2]),left:parseFloat(i[3])};return t.glyphTexturePadding=r,!0}processCommon(e,t){const n=new Map;return this.readKeyValuePairs(e,["lineHeight","base","scaleW","scaleH"],n)?(t.base=parseFloat(n.get("base")),n.has("ascent")&&(t.ascent=parseFloat(n.get("ascent"))),n.has("descent")&&(t.descent=parseFloat(n.get("descent"))),t.lineHeight=parseFloat(n.get("lineHeight")),t.glyphTextureExtent=new ae(parseFloat(n.get("scaleW")),parseFloat(n.get("scaleH"))),!0):!1}processChar(e,t){const n=new Map;if(!this.readKeyValuePairs(e,["id","x","y","width","height","xoffset","yoffset","xadvance"],n))return!1;const i=parseInt(n.get("id"),10);if(i<=0)return console.warn(`Expected glyph index to be greater than 0, given ${i}`),!1;const r=new bh;r.codepoint=i;const a=new ae(1/t.glyphTextureExtent.x,1/t.glyphTextureExtent.y),o=new ae(parseFloat(n.get("width")),parseFloat(n.get("height")));return r.subTextureOrigin=new ae(parseFloat(n.get("x"))*a.x,1-(parseFloat(n.get("y"))+o.y)*a.y),r.extent=o,r.subTextureExtent.x=o.x*a.x,r.subTextureExtent.y=o.y*a.y,r.bearingFromFontBaseAndOffset(t.base,parseFloat(n.get("xoffset")),parseFloat(n.get("yoffset"))),r.advance=parseFloat(n.get("xadvance")),t.addGlyph(r),!0}processKerning(e,t){const n=new Map;if(!this.readKeyValuePairs(e,["first","second","amount"],n))return!1;const i=parseInt(n.get("first"),10);if(i<=0)return console.warn(`Expected kerning's first to be greater than 0, given ${i}`),!1;const r=parseInt(n.get("second"),10);if(r<=0)return console.warn(`Expected kerning's second to be greater than 0, given ${r}`),!1;const a=parseFloat(n.get("amount"));return t.setKerning(i,r,a),!0}readKeyValuePairs(e,t,n){let i,r;for(const o of e){const l=o.split("=");i=l[0],r=l[1],n.set(i,r)}let a=!0;return t.forEach(o=>a=a&&n.has(o)),a||console.warn(`Not all required keys are provided! Mandatory keys: ${t}`),a}}const xx=`precision highp float;\r
\r
attribute vec3 origin;\r
attribute vec3 tangent;\r
attribute vec3 up;\r
attribute vec4 texCoords;\r
\r
varying vec2 vUv;\r
varying vec2 vDebugPosition;\r
\r
void main(){\r
  vDebugPosition = position.xy;\r
\r
  vUv = texCoords.xy + position.xy * (texCoords.zw - texCoords.xy);\r
\r
  vec3 tangentDirection = position.x * tangent;\r
  vec3 upDirection = position.y * up;\r
  vec4 pos = vec4(origin + tangentDirection + upDirection, 1.0);\r
\r
  gl_Position = projectionMatrix * modelViewMatrix * pos;\r
\r
}`,vx=`precision highp float;\r
\r
varying vec2 vUv;\r
varying vec2 vDebugPosition;\r
\r
uniform sampler2D map;\r
uniform bool debug;\r
uniform vec3 color;\r
uniform bool aa;\r
\r
const int channel = 0;\r
\r
// Anti-aliasing implementation based on https://github.com/cginternals/webgl-operate/blob/master/source/text/glyph.frag\r
float aastep(float t, float value)\r
{\r
  if(aa) \r
  {\r
    //TODO: find good value? was formerly a uniform in webgl-operate\r
    float aaStepScale = 0.8;\r
    /* float afwidth = length(vec2(dFdx(value), dFdy(value))) * u_aaStepScale; */\r
    float afwidth = fwidth(value) * aaStepScale;\r
    /* The aa step scale is more of a hack to provide seemingly smoother (e.g., >= 1.0) or crisper (e.g., between 0.0\r
     * and 1.0) contours without specific sampling. It's just scaling the outcome of the derivatives.\r
     */\r
\r
    return smoothstep(t - afwidth, t + afwidth, value);\r
  }\r
  return step(t, value);\r
}\r
\r
/*\r
float aastep3h(float t, vec2 uv)\r
{\r
    float x = dFdy(uv.x) * 1.0 / 3.0;\r
\r
    float v = aastep(t, texture2D(map, vUv + vec2( -x, 0.))[channel])\r
            + aastep(t, texture2D(map, vUv + vec2( 0., 0.))[channel])\r
            + aastep(t, texture2D(map, vUv + vec2( +x, 0.))[channel]);\r
\r
    return v / 3.0;\r
}\r
\r
float aastep3v(float t, vec2 uv)\r
{\r
    float y = dFdy(uv.y) * 1.0 / 3.0;\r
\r
    float v = aastep(t, texture2D(map, vUv + vec2( 0., -y))[channel])\r
            + aastep(t, texture2D(map, vUv + vec2( 0., 0.))[channel])\r
            + aastep(t, texture2D(map, vUv + vec2( 0., +y))[channel])\r
\r
    return v / 3.0;\r
}\r
\r
float aastep3x3(float t, vec2 uv)\r
{\r
    float x = dFdx(uv.x) * 1.0 / 3.0;\r
    float y = dFdy(uv.y) * 1.0 / 3.0;\r
\r
    float v = texSmooth(t, uv + vec2(  -x, -y)) + texSmooth(t, uv + vec2(  -x, 0.0)) + texSmooth(t, uv + vec2(  -x, +y))\r
            + texSmooth(t, uv + vec2( 0.0, -y)) + texSmooth(t, uv + vec2( 0.0, 0.0)) + texSmooth(t, uv + vec2( 0.0, +y))\r
            + texSmooth(t, uv + vec2(  +x, -y)) + texSmooth(t, uv + vec2(  +x, 0.0)) + texSmooth(t, uv + vec2(  +x, +y));\r
\r
    return v / 9.0;\r
}\r
\r
float aastep4x4(float t, vec2 uv)\r
{\r
    float x0 = dFdx(uv.x);\r
    float y0 = dFdx(uv.y);\r
    float x1 = x0 * 1.0 / 8.0;\r
    float y1 = y0 * 1.0 / 8.0;\r
    float x2 = x0 * 3.0 / 8.0;\r
    float y2 = y0 * 3.0 / 8.0;\r
\r
    float v = texSmooth(t, uv + vec2(-x2,-y2)) + texSmooth(t, uv + vec2(-x2,-y1))\r
            + texSmooth(t, uv + vec2(-x2,+y1)) + texSmooth(t, uv + vec2(-x2,+y2))\r
\r
            + texSmooth(t, uv + vec2(-x1,-y2)) + texSmooth(t, uv + vec2(-x1,-y1))\r
            + texSmooth(t, uv + vec2(-x1,+y1)) + texSmooth(t, uv + vec2(-x1,+y2))\r
\r
            + texSmooth(t, uv + vec2(+x1,-y2)) + texSmooth(t, uv + vec2(+x1,-y1))\r
            + texSmooth(t, uv + vec2(+x1,+y1)) + texSmooth(t, uv + vec2(+x1,+y2))\r
\r
            + texSmooth(t, uv + vec2(+x2,-y2)) + texSmooth(t, uv + vec2(+x2,-y1))\r
            + texSmooth(t, uv + vec2(+x2,+y1)) + texSmooth(t, uv + vec2(+x2,+y2));\r
\r
    return v / 16.0;\r
}\r
*/\r
\r
void main() {\r
  float alpha = 0.0;\r
  vec3 resultColor = color;\r
\r
  alpha = aastep(0.5, texture2D(map, vUv)[channel]);\r
\r
  if (debug) {\r
    float outlineStrength = 0.05;\r
    vec3 outlineColor = vec3(0., 1., 0.);\r
    vec2 outline = max(step(vDebugPosition, vec2(outlineStrength)),step(vec2(1. - outlineStrength),vDebugPosition));\r
    alpha = max(alpha, max(outline.x, outline.y));\r
    resultColor = mix(outlineColor, color, alpha - max(outline.x, outline.y));\r
  }\r
\r
  //maybe don't discard who knows: https://stackoverflow.com/questions/8509051/is-discard-bad-for-program-performance-in-opengl\r
  if(alpha <= 0.0) {\r
    discard;\r
  }\r
  \r
  gl_FragColor = vec4(resultColor, alpha);\r
}`,yx=[`
`," ","-","/","(",")","[","]","<",">"],Mx=s=>yx.includes(String.fromCodePoint(s)),Sx=s=>String.fromCodePoint(s)===" ";class _s{static initArrays(e){const t=new Float32Array(e*3).fill(0),n=new Float32Array(e*3).fill(0),i=new Float32Array(e*3).fill(0),r=new Float32Array(e*4).fill(0);return{origins:t,tangents:n,ups:i,texCoords:r}}static typeset(e){let{origins:t,tangents:n,ups:i,texCoords:r}=this.initArrays(e.length);const a=new L(0,e.lineAnchorOffset*e.scalingFactor,0);let o=new L;o.copy(a);let l=0,c=l,h=e.length,u=new L;u.copy(o);let d=!0,p={min:new ae(1/0,1/0),max:new ae(-1/0,-1/0)};p.max.y=e.fontFace.lineHeight*e.scalingFactor;for(let g=l;g<e.length;g++){let _=e.textGlyphs[g];const m=e.fontFace.lineHeight,f=I=>I<e.length-1?!e.textGlyphs[I].depictable()||Mx(e.textGlyphs[I].codepoint):!1;let y=g!=l?e.textGlyphs[g-1].kerning(_.codepoint):0;const x=e.wrap&&this.shouldWrap(e,o,_,y),E=e.lineFeedAt(g)||x;if(!d&&E){g===0&&console.warn("trying to feed line at index 0");let I=e.textGlyphs[g];if(x&&(g=h+1,I=e.textGlyphs[g],y=g!=l?e.textGlyphs[g-1].kerning(I.codepoint):0),this.alignLine(u,e.alignment,c,g,t,p),o.y-=m*e.scalingFactor,c=g,o.x=a.x,d=!0,Sx(I.codepoint)){this.dontDisplay(g,n,i);continue}}else if(g<e.length-1){const I=e.textGlyphs[g+1];o.x+=_.kerning(I.codepoint)*e.scalingFactor}_.depictable()&&(this.calculateOrigin(o,e,g,t),this.calculateTangent(e,g,n),this.calculateUp(e,g,i),this.calculateTexCoords(e,g,r)),o.x+=_.advance*e.scalingFactor,f(g+1)&&(h=g,u.copy(o),d=!1)}return this.alignLine(o,e.alignment,c,e.length,t,p),{bufferArrays:{origins:t,tangents:n,ups:i,texCoords:r},extent:p}}static shouldWrap(e,t,n,i){return!n.depictable()||n.advance*e.scalingFactor>e.lineWidth&&t.x<=0?!1:t.x+(n.advance+i)*e.scalingFactor>e.lineWidth}static alignLine(e,t,n,i,r,a){let o=0;t!==qn.Alignment.Left&&(o=-e.x),t==qn.Alignment.Center&&(o*=.5),a.min.x=Math.min(a.min.x,o),a.min.y=Math.min(a.min.y,e.y);for(let l=n;l!=i;++l)r[3*l+_s.Components.x]+=o;a.max.x=Math.max(a.max.x,e.x+o)}static calculateOrigin(e,t,n,i){const r=t.textGlyphs[n],a=t.fontFace.glyphTexturePadding,o=new ae((r.bearing.x-a.left)*t.scalingFactor,(r.bearing.y-r.extent.height)*t.scalingFactor);i[3*n+0]=e.x+o.x,i[3*n+1]=e.y+o.y,i[3*n+2]=e.z}static calculateTangent(e,t,n){const i=e.textGlyphs[t];n[3*t+0]=i.extent.width*e.scalingFactor,n[3*t+1]=0,n[3*t+2]=0}static calculateUp(e,t,n){const i=e.textGlyphs[t];n[3*t+0]=0,n[3*t+1]=i.extent.height*e.scalingFactor,n[3*t+2]=0}static calculateTexCoords(e,t,n){const i=e.textGlyphs[t];n[4*t+0]=i.subTextureOrigin.x,n[4*t+1]=i.subTextureOrigin.y,n[4*t+2]=i.subTextureOrigin.x+i.subTextureExtent.x,n[4*t+3]=i.subTextureOrigin.y+i.subTextureExtent.y}static dontDisplay(e,t,n){t[3*e+0]=0,n[3*e+1]=0}}(s=>{(e=>{e[e.x=0]="x",e[e.y=1]="y",e[e.z=2]="z",e[e.w=3]="w"})(s.Components||(s.Components={}))})(_s||(_s={}));const Ah=class nn extends it{constructor(e,t,n=new Me(0)){super(),Te(this,"_mesh"),Te(this,"_fontFace"),Te(this,"_needsInitialLayout",!0),Te(this,"_needsLayout",!1),Te(this,"_textChanged",!1),Te(this,"_color"),Te(this,"_text"),Te(this,"_alwaysFaceCamera",!1),Te(this,"_lineAnchor",nn.LineAnchor.Baseline),Te(this,"_fontSize",1),Te(this,"_lineWidth",100),Te(this,"_lineFeed",nn.DEFAULT_LINE_FEED),Te(this,"_wrap",!1),Te(this,"_alignment",nn.Alignment.Left),Te(this,"_debugMode",!1),Te(this,"_aa",!0),Te(this,"_boundingBox"),Te(this,"_boundingSphere"),Te(this,"_extent"),Te(this,"_textGlyphs"),Te(this,"_vertices",new Float32Array([0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0])),Te(this,"_origins"),Te(this,"_tangents"),Te(this,"_ups"),Te(this,"_texCoords"),Te(this,"_originsAttribute"),Te(this,"_tangentsAttribute"),Te(this,"_upsAttribute"),Te(this,"_texCoordsAttribute"),this.text=e,this._lineAnchor,this._origins=new Float32Array(this.length*3).fill(0),this._tangents=new Float32Array(this.length*3).fill(0),this._ups=new Float32Array(this.length*3).fill(0),this._texCoords=new Float32Array(this.length*4).fill(0);let i=new vr,r=this.createShaderMaterial(new pt,new Me);this.mesh=new rt(i,r),this.mesh.frustumCulled=this.frustumCulled,this.fontFace=t,this.color=n}setOnBeforeRender(e){e.onBeforeRender=(t,n,i)=>{this.mesh.frustumCulled=this.frustumCulled,this._textChanged&&this.fontFace.ready&&(this.updateText(),this._needsLayout=!0,this._textChanged=!1),this._needsInitialLayout&&this.fontFace.ready&&this.initialize(),this._needsLayout&&this.fontFace.ready&&this.layout(),this.projected&&this.lookAt(i.position)}}updateText(){this.geometry.instanceCount=this.length,this.updateTextGlyphs()}updateTextGlyphs(){let e=new Array(this.text.length);for(let t=0;t<this.text.length;t++){const n=this.text.codePointAt(t);n&&(e[t]=this._fontFace.glyph(n))}this.textGlyphs=e}initialize(){this._needsLayout=!0,this._needsInitialLayout=!1,this.updateMap(),this.updateColor()}layout(){const e=_s.typeset(this);this.origins=e.bufferArrays.origins,this.tangents=e.bufferArrays.tangents,this.ups=e.bufferArrays.ups,this.texCoords=e.bufferArrays.texCoords,this.extent=e.extent,this.setupGeometry(),this.computeBoundingSphere(),this.computeBoundingBox(),this._needsLayout=!1}setupGeometry(){this.geometry=new vr,this.geometry.instanceCount=this.length,this._originsAttribute=new In(this._origins,3),this._tangentsAttribute=new In(this._tangents,3),this._upsAttribute=new In(this._ups,3),this._texCoordsAttribute=new In(this._texCoords,4),this.geometry.setAttribute("position",new At(this._vertices,3)),this.geometry.setAttribute("origin",this._originsAttribute),this.geometry.setAttribute("tangent",this._tangentsAttribute),this.geometry.setAttribute("up",this._upsAttribute),this.geometry.setAttribute("texCoords",this._texCoordsAttribute),this.geometry.computeBoundingBox=()=>{this.boundingBox?(this.computeBoundingBox(),this.geometry.boundingBox=this.boundingBox):this.geometry.boundingBox=new Vt},this.geometry.computeBoundingSphere=()=>{this.boundingSphere?(this.computeBoundingSphere(),this.geometry.boundingSphere=this.boundingSphere):this.geometry.boundingSphere=new Nt}}computeBoundingBox(){const e=new L(this.extent.min.x,this.extent.min.y,-1),t=new L(this.extent.max.x,this.extent.max.y,1);this.boundingBox=new Vt(e,t)}computeBoundingSphere(){const e=new L((this.extent.max.x-this.extent.min.x)/2,(this.extent.max.y-this.extent.min.y)/2,0),t=Math.max(this.extent.max.x-this.extent.min.x,this.extent.max.y-this.extent.min.y);this.boundingSphere=new Nt(e,t)}updateColor(){this.material.uniforms&&(this.material.uniforms.color.value=this.color)}updateMap(){this.material.uniforms&&(this.material.uniforms.map.value=this.fontFace.glyphTexture)}updateDebug(){this.material.uniforms&&(this.material.uniforms.debug.value=this.debugMode)}updateAntialiasing(){this.material.uniforms&&(this.material.uniforms.aa.value=this._aa)}createShaderMaterial(e,t){return new Ht({uniforms:{color:{value:t},map:{value:e},debug:{value:this._debugMode},aa:{value:this._aa}},vertexShader:xx,fragmentShader:vx,transparent:!0,side:Jt})}addTo(e,t,n,i){i&&n?this.rotateOnAxis(n,i):i&&!n?console.warn(`You tried to attach ${this.text} Label with only an offset rotation angle but without rotation axis, an offset rotation needs both therefore no rotation was done`):!i&&n&&console.warn(`You tried to attach ${this.text} Label with only an offset rotation axis but without rotation angle, an offset rotation needs both therefore no rotation was done`);const r=this.getWorldQuaternion(new _n);e.add(this),this.setGlobalRotation(r),t&&this.translateGlobal(t)}setGlobalRotation(e){var t;const n=new _n;(t=this.parent)==null||t.getWorldQuaternion(n);const i=n.invert();i.multiply(e),this.setRotationFromQuaternion(i)}translateGlobal(e){if(!this.parent){this.position.add(e);return}const t=this.parent.worldToLocal(new L(0,0,0)),n=this.parent.worldToLocal(e);this.position.add(n.sub(t))}charAt(e){return e>=this.length?(console.error(`Expected index smaller than ${length}, got index ${e}`),""):this.textGlyphs[e].toChar()}lineFeedAt(e){return this.charAt(e)===this.lineFeed}dispose(){this.geometry.dispose(),this.material.dispose()}get fontFace(){return this._fontFace}set fontFace(e){this._fontFace!==e&&(this._fontFace=e,this._needsInitialLayout=!0,this._textChanged=!0)}get length(){return this._text.length}set text(e){this._text!==e&&(this._text=e,this._textChanged=!0)}get text(){return this._text}get textGlyphs(){return this._textGlyphs}set textGlyphs(e){this._textGlyphs=e}get origins(){return this._origins}set origins(e){if(e.length<this.length*3){console.error(`Expected array of size ${this.length*3}, got an array of size ${e.length}`);return}this._origins=e}get tangents(){return this._tangents}set tangents(e){if(e.length<this.length*3){console.error(`Expected array of size ${this.length*3}, got an array of size ${e.length}`);return}this._tangents=e}get ups(){return this._ups}set ups(e){if(e.length<this.length*3){console.error(`Expected array of size ${this.length*3}, got an array of size ${e.length}`);return}this._ups=e}get texCoords(){return this._tangents}set texCoords(e){if(e.length<this.length*4){console.error(`Expected array of size ${this.length*4}, got an array of size ${e.length}`);return}this._texCoords=e}get material(){return this.mesh.material}set material(e){this.mesh.material.dispose(),this.mesh.material=e}get geometry(){return this.mesh.geometry}set geometry(e){this.mesh.geometry.dispose(),this.mesh.geometry=e}get mesh(){return this._mesh}set mesh(e){this._mesh=e,this.setOnBeforeRender(this._mesh),this.add(this._mesh)}get color(){return this._color}set color(e){this._color!==e&&(this._color=e,this.updateColor())}get fontSize(){return this._fontSize}set fontSize(e){this._fontSize!==e&&(this._fontSize=e,this._needsLayout=!0)}get projected(){return this._alwaysFaceCamera}set projected(e){this._alwaysFaceCamera=e}get lineAnchor(){return this._lineAnchor}set lineAnchor(e){this._lineAnchor!==e&&(this._lineAnchor=e,this._needsLayout=!0)}get lineAnchorOffset(){let e=0;if(!this.fontFace.ready)return 0;const t=this.fontFace,n=t.glyphTexturePadding;switch(this.lineAnchor){case nn.LineAnchor.Ascent:e=t.ascent-n.top;break;case nn.LineAnchor.Descent:e=t.descent*(1+n.top/t.ascent);break;case nn.LineAnchor.Center:e=t.ascent-n.top-.5*t.size;break;case nn.LineAnchor.Top:e=t.ascent-n.top+.5*t.lineGap;break;case nn.LineAnchor.Bottom:e=t.ascent-n.top+.5*t.lineGap-t.lineHeight;break;case nn.LineAnchor.Baseline:default:e=-n.top;break}return e}get lineWidth(){return this._lineWidth}set lineWidth(e){this._lineWidth!==e&&(this._lineWidth=e,this._needsLayout=!0)}get lineFeed(){return this._lineFeed!=""?this._lineFeed:nn.DEFAULT_LINE_FEED}set lineFeed(e){this._lineFeed!==e&&(this._lineFeed=e,this._needsLayout=!0)}set wrap(e){this._wrap=e,this._needsLayout=!0}get wrap(){return this._wrap}get alignment(){return this._alignment}set alignment(e){this._alignment!==e&&(this._alignment=e,this._needsLayout=!0)}get scalingFactor(){return this.fontFace.ready?this.fontSize/this.fontFace.size:1}get debugMode(){return this._debugMode}set debugMode(e){this._debugMode!==e&&(this._debugMode=e,this.updateDebug())}get aa(){return this._aa}set aa(e){this._aa!==e&&(this._aa=e,this.updateAntialiasing())}get boundingBox(){return this._boundingBox}set boundingBox(e){this._boundingBox=e}get boundingSphere(){return this._boundingSphere}set boundingSphere(e){this._boundingSphere=e}get extent(){return this._extent}set extent(e){this._extent=e}};Te(Ah,"DEFAULT_LINE_FEED",`
`);let qn=Ah;(s=>{(e=>{e.Left="left",e.Center="center",e.Right="right"})(s.Alignment||(s.Alignment={})),(e=>{e.Top="top",e.Ascent="ascent",e.Center="center",e.Baseline="baseline",e.Descent="descent",e.Bottom="bottom"})(s.LineAnchor||(s.LineAnchor={}))})(qn||(qn={}));class Ex{keyColumn;valueColumn;_position;_scale;_material;constructor(e,t,n,i){this.keyColumn=new qn(e,n,i),this.keyColumn.alignment=qn.Alignment.Right,this.keyColumn.material.depthFunc=xa,this.keyColumn.mesh.renderOrder=-1,this.valueColumn=new qn(t,n,i),this.valueColumn.alignment=qn.Alignment.Left,this.valueColumn.material.depthFunc=xa,this.valueColumn.mesh.renderOrder=-1,this._position=new vc(this),this._scale=new vc(this,!0),this._material=new bx(this)}dispose(){this.keyColumn.dispose(),this.valueColumn.dispose()}rotateX(e){this.keyColumn.rotateX(e),this.valueColumn.rotateX(e)}translateGlobal(e){this.keyColumn.translateGlobal(e),this.valueColumn.translateGlobal(e)}addToObject3D(e){e.add(this.keyColumn),e.add(this.valueColumn)}get position(){return this._position}get scale(){return this._scale}get material(){return this._material}}class vc{splitLabel;isScaleVector;constructor(e,t){this.splitLabel=e,this.isScaleVector=t!==void 0?t:!1}set(e,t,n){this.isScaleVector?(this.splitLabel.keyColumn.scale.set(e,t,n),this.splitLabel.valueColumn.scale.set(e,t,n)):(this.splitLabel.keyColumn.position.set(e,t,n),this.splitLabel.valueColumn.position.set(e,t,n))}}class bx{splitLabel;constructor(e){this.splitLabel=e}set onBeforeCompile(e){this.splitLabel.keyColumn._mesh.material.onBeforeCompile=e,this.splitLabel.valueColumn._mesh.material.onBeforeCompile=e}}class Ax{sceneManager;canvas;fontFace;raycaster;currentLabel;csvRow;labelGroup;_labelOffset=.01;_labelSize=.01;constructor(e){this.sceneManager=e,this.labelGroup=new pn,this.sceneManager.scene.add(this.labelGroup),this.raycaster=new A0,this.canvas=this.sceneManager.renderingManager.canvas,this.fontFace=new _x().load("font/roboto-regular-f00f2383",()=>{this.canvas.addEventListener("pointerdown",t=>{this.handlePointerDown(t)})},void 0,t=>{console.error(t)})}handlePointerDown(e){if(e.button!==0||!(e.ctrlKey||e.altKey))return;this.currentLabel?.dispose(),this.labelGroup.clear();let t=-1;const n=new ae(e.clientX/this.canvas.clientWidth*2-1,1-e.clientY/this.canvas.clientHeight*2);if(this.sceneManager.mappings?.instancingMethod===Dt.InstancedBufferGeometry){if(t=this.sceneManager.renderingManager.getIdFromPixel(n.x,n.y),t===null){this.currentLabel!==void 0&&(this.currentLabel=void 0,this.sceneManager.renderingManager.requestUpdate());return}}else{this.raycaster.setFromCamera(n,this.sceneManager.renderingManager.camera);const c=this.raycaster.intersectObject(this.sceneManager.glyphGroup)[0];if(c===void 0){this.currentLabel!==void 0&&(this.currentLabel=void 0,this.sceneManager.renderingManager.requestUpdate());return}this.sceneManager.mappings?.instancingMethod===Dt.None?t=c.object.userData.id:t=c.object.userData.ids[c.instanceId]}const i=this.sceneManager.csv;if(i===void 0)return;this.csvRow=i[t];let r="",a="";for(let c=0;c<i[0].length;++c){if(r+=i[0][c]+": ",c==0)a+=this.csvRow[c];else{const h=Number(this.csvRow[c]);a+=Math.round(h)!==h?h.toFixed(5):h}c<i[0].length-1&&(r+=`
`,a+=`
`)}const o=new Ex(r,a,this.fontFace,new Me(16777215));o.material.onBeforeCompile=c=>{const h=c.fragmentShader.indexOf("}");c.fragmentShader=`layout(location = 1) out vec4 id;
`+c.fragmentShader.substring(0,h)+`id = vec4(vec3(0.), 1.);
`+c.fragmentShader.substring(h)};const l=this.sceneManager.calculatePosition(this.csvRow);o.position.set(l.x,.001,l.y),o.scale.set(this._labelSize,this._labelSize,this._labelSize),o.rotateX(3*Math.PI/2),o.translateGlobal(new L(0,0,this._labelOffset)),this.currentLabel=o,this.currentLabel.addToObject3D(this.labelGroup),this.sceneManager.renderingManager.requestUpdate(),setTimeout(()=>this.sceneManager.renderingManager.requestUpdate(),20)}updateLabelPosition(){if(this.csvRow===void 0)return;const e=this.sceneManager.calculatePosition(this.csvRow);this.currentLabel?.position.set(e.x,.001,e.y),this.sceneManager.renderingManager.requestUpdate()}set labelOffset(e){this.currentLabel?.translateGlobal(new L(0,0,-this._labelOffset)),this._labelOffset=e,this.currentLabel?.translateGlobal(new L(0,0,this._labelOffset)),this.sceneManager.renderingManager.requestUpdate()}set labelSize(e){this._labelSize=e,this.currentLabel?.scale.set(this._labelSize,this._labelSize,this._labelSize),this.sceneManager.renderingManager.requestUpdate()}}class ci{children;meshes;maxLods;_glyphCount;_glyphToCsvMapping;minX;minY;maxX;maxY;avgX;avgY;width;height;halfWidth;halfHeight;numGlyphs;constructor(e,t,n,i,r,a){this.maxLods=new Set,this.numGlyphs=t,this.minX=n,this.minY=i,this.maxX=r,this.maxY=a,this.avgX=(r+n)/2,this.avgY=(a+i)/2,this.width=r-n,this.height=a-i,this.halfWidth=this.width/2,this.halfHeight=this.height/2,e!==0?(this.children=new Array,this.children.push(new ci(e-1,t,n,this.avgY,this.avgX,a)),this.children.push(new ci(e-1,t,this.avgX,this.avgY,r,a)),this.children.push(new ci(e-1,t,n,i,this.avgX,this.avgY)),this.children.push(new ci(e-1,t,this.avgX,i,r,this.avgY))):(this.meshes=new Array,this._glyphCount=new Array(t).fill(0),this._glyphToCsvMapping=new Array)}incrementGlyphCount(e,t){this.children===void 0?++this._glyphCount[e]:t.x>=this.avgX?t.y>=this.avgY?this.children[1].incrementGlyphCount(e,t):this.children[3].incrementGlyphCount(e,t):t.y>=this.avgY?this.children[0].incrementGlyphCount(e,t):this.children[2].incrementGlyphCount(e,t)}setGlyphToCsvMapping(e,t){this.children===void 0?this._glyphToCsvMapping.push(e):t.x>=this.avgX?t.y>=this.avgY?this.children[1].setGlyphToCsvMapping(e,t):this.children[3].setGlyphToCsvMapping(e,t):t.y>=this.avgY?this.children[0].setGlyphToCsvMapping(e,t):this.children[2].setGlyphToCsvMapping(e,t)}storeDirect(e){this.meshes!==void 0&&this.meshes.push(e)}updateVisibility(e,t){for(const n of this.maxLods){const i=new Array(n);for(let r=0;r<n;++r){const a=this.radiusOnPlane(e,t*r),o=this.radiusOnPlane(e,t*(r+1));if(this.intersects(e,a,this)||this.intersects(e,o,this))if(this.children===void 0)i[r]=!0;else for(const l of this.children)l.updateVisibility(e,t);else if(i[r]=!1,this.children!==void 0)for(const l of this.children)l.setVisibility(n,i)}this.setVisibility(n,i)}}setVisibility(e,t){if(this.meshes!==void 0)for(const n of this.meshes)n.userData.maxLod===e&&(n.visible=t[n.userData.lod])}get leafNodes(){const e=new Array;if(this.children!==void 0)for(let t=0;t<this.children.length;++t)e.push(...this.children[t].leafNodes);else e.push(this);return e}addMaxLod(e,t){this.maxLods.add(e),this.children!==void 0&&(t.x>=this.avgX?t.y>=this.avgY?this.children[1].addMaxLod(e,t):this.children[3].addMaxLod(e,t):t.y>=this.avgY?this.children[0].addMaxLod(e,t):this.children[2].addMaxLod(e,t))}get glyphCount(){return this._glyphCount}get glyphToCsvMapping(){return this._glyphToCsvMapping}clear(){if(this.children===void 0)this.meshes=new Array,this._glyphCount=new Array(this.numGlyphs).fill(0),this.maxLods=new Set;else for(const e of this.children)e.clear()}intersects(e,t,n){const i=Math.abs(e.x-n.avgX),r=Math.abs(e.z-n.avgY);return i>n.halfWidth+t||r>n.halfHeight+t?!1:i<=n.halfWidth||r<=n.halfHeight?!0:(i-n.halfWidth)**2+(r-n.halfHeight)**2<=t**2}radiusOnPlane(e,t){const n=e.y;return n>t?0:Math.sqrt(t**2-n**2)}}var Dt=(s=>(s[s.None=0]="None",s[s.InstancedMesh=1]="InstancedMesh",s[s.InstancedBufferGeometry=2]="InstancedBufferGeometry",s))(Dt||{});class Tx{scene;renderingManager;glyphLoader;pickingHandler;staticElements;idBackground;spotLight;_glyphGroup;_csv;_glyphQuadTree;_glyphAtlas;_instancedGlyphs;materials;_lodObjects;_mappings;xAndYBounds;constructor(e){this.glyphLoader=new fx,this.renderingManager=e,this.scene=new gr,this.staticElements=new pn,this._glyphGroup=new pn,this.scene.add(this.staticElements),this.scene.add(this._glyphGroup),this.setUpStaticElements(),this.pickingHandler=new Ax(this)}setUpStaticElements(){this.scene.background=new Me(16448250),this.staticElements.add(new p0(16777215)),this.spotLight=new Mh(16777215,1,0,Math.PI/2.1,0,0),this.spotLight.castShadow=!0;const e=2**13;this.spotLight.shadow.mapSize.set(e,e),this.spotLight.position.set(-2,2,2),this.spotLight.lookAt(new L(0,0,0)),this.spotLight.shadow.camera.near=.01,this.spotLight.shadow.camera.far=10,this.staticElements.add(this.spotLight);const t=a=>{const o=a.fragmentShader.indexOf("}");a.fragmentShader=`layout(location = 1) out vec4 id;
`+a.fragmentShader.substring(0,o)+`id = vec4(vec3(0.), 1.);
`+a.fragmentShader.substring(o)},n=new rt(new jn(2.25,2.25),new j_({color:16777215,side:Jt}));n.rotateX(Math.PI/2),n.translateY(-1e-4),n.receiveShadow=!0,n.material.onBeforeCompile=t,this.staticElements.add(n);const i=new T0(2.25,100);i.receiveShadow=!0,i.material.onBeforeCompile=t,this.staticElements.add(i);const r=new $_({vertexShader:`
			in vec3 position;
			
			void main() {
				gl_Position = vec4(position.xy, 1., 1.);
			}
			`,fragmentShader:`
			precision highp float;
			precision highp int;

			layout(location = 0) out vec4 color; // not used
			layout(location = 1) out vec4 id;
			
			void main() {
				id = vec4(vec3(0.), 1.);
				color = vec4(vec3(0.), 0.);
			}
			`,glslVersion:$a});this.idBackground=new rt(new jn(2,2),r),this.staticElements.add(this.idBackground)}set csv(e){this._csv={csv:e},this._glyphAtlas!==void 0&&(this._mappings!==void 0&&this.findAttributeBounds(),this.calculateIndicesForGlyphs(),this.createInstancedMeshes())}get csv(){if(this._csv!==void 0)return this._csv.csv}createInstancedMeshes(){if(!(!this.sceneCanBeDrawn()||this._glyphQuadTree===void 0)){this.xAndYBounds===void 0&&this.findAttributeBounds(),this.disposeObject3D(this._glyphGroup),this._glyphGroup.clear(),this.materials=[],this._instancedGlyphs=[],this._lodObjects=[];for(const e of this._glyphQuadTree.leafNodes)if(e.glyphCount!==void 0)for(const[t,n]of e.glyphCount.entries()){if(n<=0)continue;const i=this._glyphAtlas.glyphs[t],r=new Array,a=new Array,o=e.glyphToCsvMapping;if(o!==void 0)if(i.children.length>0?i.traverse(l=>{l.type==="Mesh"&&this.createInstancedMesh(l,n,t,r,a,this._mappings.instancingMethod,o)}):i.type==="Mesh"&&this.createInstancedMesh(i,n,t,r,a,this._mappings.instancingMethod,o),this._instancedGlyphs.push(r),this._mappings.instancingMethod!==0)for(const l of r)e.storeDirect(l),this._glyphGroup.add(l);else for(const l of this._lodObjects)l!==void 0&&this._glyphGroup.add(l)}this.renderingManager.requestUpdate()}}createInstancedMesh(e,t,n,i,r,a,o){let l;if(a===1)l=new Wt;else if(a===2)l=new vr;else if(a===0){this.emulateInstancedMesh(e,t,n,o);return}else return;l.index=e.geometry.index.clone(),l.attributes={...e.geometry.attributes},l instanceof vr&&(l.instanceCount=t);const c=e.material.clone();c.customProgramCacheKey=()=>"lod_"+n;const h=new dh,u=new fh;let d;if(a===1)d=new cs(l,c,t),d.instanceMatrix.usage=pr;else if(a===2)d=new rt(l,c);else return;const p=this._mappings.basicMappings.size/this._glyphAtlas.largestExtent;a===2&&d.scale.set(p,p,p);const g=new Float32Array(t*2);let _,m;const f=new Float32Array(t);let y=0;for(const A of o){const w=A.glyphIndices.indexOf(n);if(w==-1)continue;const F=this.calculatePosition(this._csv.csv[A.csvRow]);if(g[y*2]=F.x,g[y*2+1]=F.y,d instanceof cs){const b=new we().setPosition(F.x,0,F.y).scale(new L(p,p,p));d.setMatrixAt(y,b)}_!==void 0&&m!==void 0&&(_!==w||m!==A.glyphIndices.length-1)&&console.error("You appear to use the same model for two different LoDs. This is not supported."),_=w,m=A.glyphIndices.length-1,f[y]=A.csvRow,this._glyphQuadTree?.addMaxLod(m,F),++y}if(_===void 0||m===void 0)return;d.userData.lod=_,d.userData.maxLod=m;const x=new In(g,2);if(d instanceof cs)d.userData.ids=f;else{const A=new In(f,1);l.setAttribute("idAttribute",A)}l.setAttribute("positionOffset",x),a===2&&(d.frustumCulled=!1),d.castShadow=_===m,c.userData={lodThreshold:{value:this._mappings.lodThreshold}},h.userData={lodThreshold:{value:this._mappings.lodThreshold}},u.userData={lodThreshold:{value:this._mappings.lodThreshold}};const E=A=>{if(A.uniforms.lodThreshold=c.userData.lodThreshold,A.vertexShader=this.addPositionOffsetAndLoDToShader(A.vertexShader,!1,a,_,m),a===2){const w=A.fragmentShader.indexOf("}");A.fragmentShader=`varying float idPass;
layout(location = 1) out vec4 id;
`+A.fragmentShader.substring(0,w)+`id = vec4(vec3(idPass), 1.);
`+A.fragmentShader.substring(w)}},I=A=>{if(A.uniforms.lodThreshold=c.userData.lodThreshold,A.uniforms.actualCameraPosition={value:this.renderingManager.camera.position},A.vertexShader=this.addPositionOffsetAndLoDToShader(A.vertexShader,!0,a,_,m),a===2){const w=A.fragmentShader.indexOf("}");A.fragmentShader=`varying float idPass;
layout(location = 1) out vec4 id;
`+A.fragmentShader.substring(0,w)+`id = vec4(vec3(idPass), 1.);
`+A.fragmentShader.substring(w)}};c.onBeforeCompile=E,h.onBeforeCompile=I,u.onBeforeCompile=I,this.materials.push(c),this.materials.push(h),this.materials.push(u),d.customDistanceMaterial=u,d.customDepthMaterial=h,i.push(d),r.push(x)}addPositionOffsetAndLoDToShader(e,t,n,i,r){return(n===2?"attribute float idAttribute;":"")+`attribute vec2 positionOffset;
			uniform float lodThreshold;
`+(n===2?`varying float idPass;
`:"")+e.substring(0,e.indexOf("}"))+`const float lod = ${i}.;
				const float maxLod = ${r}.;`+(n===2?"gl_Position += projectionMatrix * viewMatrix * vec4(positionOffset.x, 0, positionOffset.y, 0.);":"")+(t?"":`float distance = distance(vec3(positionOffset.x, 0., positionOffset.y), cameraPosition);
				gl_Position.w -= float((distance > lodThreshold * (lod + 1.) && lod < maxLod) || distance <= lodThreshold * lod) * gl_Position.w;`)+(n===2?`idPass = idAttribute;
`:"")+e.substring(e.indexOf("}"))}emulateInstancedMesh(e,t,n,i){const r=new Array;for(let l=0;l<t;++l){const c=e.clone();c.material=e.material.clone(),r.push(c)}const a=this._mappings.basicMappings.size/this._glyphAtlas.largestExtent;let o=0;for(const l of i){const c=l.glyphIndices.indexOf(n);if(c===-1)continue;const h=this.calculatePosition(this._csv.csv[l.csvRow]),u=r[o];u.castShadow=!0,u.userData.id=l.csvRow,u.material.onBeforeCompile=p=>{const g=p.fragmentShader.indexOf("}");p.fragmentShader=`layout(location = 1) out vec4 id;
`+p.fragmentShader.substring(0,g)+`id = vec4(vec3(1), 1.);
`+p.fragmentShader.substring(g)};const d=this._lodObjects[l.csvRow]===void 0?new G_:this._lodObjects[l.csvRow];d.addLevel(u,this._mappings.lodThreshold*c),d.position.set(h.x,0,h.y),d.scale.set(a,a,a),d.castShadow=!0,this._lodObjects[l.csvRow]=d,++o}}calculateIndicesForGlyphs(){if(!this.sceneCanBeDrawn())return;const e={notCastable:void 0,rounding:void 0,wrapAround:void 0,noValidVariant:void 0};this._glyphQuadTree.clear(),this.findAttributeBounds();for(const[t,n]of this._csv.csv.entries()){if(t===0)continue;const i=this.calculatePosition(n),r=this.calculateIndicesForGlyph(n);if(this.mergeWarnings(e,r.warnings),r.indices!=null){this._glyphQuadTree.setGlyphToCsvMapping({glyphIndices:r.indices,csvRow:t},i);for(const a of r.indices)this._glyphQuadTree.incrementGlyphCount(a,i)}}this.printWarnings(e)}calculateIndicesForGlyph(e){const t=this._csv.csv[0].indexOf(this._mappings.requiredMappings.glyphType);let n=Number(e[t]);const i={notCastable:void 0,rounding:void 0,wrapAround:void 0,noValidVariant:void 0};if(n===void 0)return i.notCastable=e[t],{indices:null,warnings:i};n!==Math.round(n)&&(i.rounding=n,n=Math.round(n)),this._glyphAtlas?.json.types.length===1?n=0:n>=this._glyphAtlas.json.types.length&&(i.wrapAround=n,n%=this._glyphAtlas.json.types.length-1);let r=new Array;if(e[0].includes("___Landmark"))r.push(this._glyphAtlas.json.landmark);else{let o=-1;const l=this._glyphAtlas.json.types[n];for(const[c,h]of l.variants.entries()){let u=!0;for(const[d,p]of Object.entries(h))if(d!=="name"&&this._mappings.optionalMappings[d]!==void 0&&Number(e[this._csv.csv[0].indexOf(this._mappings.optionalMappings[d])])<p){u=!1;break}u&&(o=c)}o===-1?(i.noValidVariant=e,r.push(l.baseModel)):r=l.variants[o].name}const a=new Array;for(const o of r)a.push(this._glyphAtlas.glyphs.findIndex(l=>o===l.name));return{indices:a,warnings:i}}findAttributeBounds(){if(!(this._csv===void 0||this._mappings===void 0)){this.xAndYBounds={min:new ae(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),max:new ae(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY)},this._csv.positionIndices=new ae(this._csv.csv[0].indexOf(this._mappings.requiredMappings.positionX),this._csv.csv[0].indexOf(this._mappings.requiredMappings.positionY));for(const[e,t]of this._csv.csv.entries()){if(e===0)continue;const n=Number(t[this._csv.positionIndices.x]),i=Number(t[this._csv.positionIndices.y]);n<this.xAndYBounds.min.x&&(this.xAndYBounds.min.x=n),n>this.xAndYBounds.max.x&&(this.xAndYBounds.max.x=n),i<this.xAndYBounds.min.y&&(this.xAndYBounds.min.y=i),i>this.xAndYBounds.max.y&&(this.xAndYBounds.max.y=i)}}}calculatePosition(e){const t=new ae(Number(e[this._csv.positionIndices.x]),Number(e[this._csv.positionIndices.y]));return t.sub(this.xAndYBounds.min).divide(this.xAndYBounds.max.clone().sub(this.xAndYBounds.min)).multiplyScalar(2).subScalar(1),t}sceneCanBeDrawn(){return this._csv!==void 0&&this._csv.csv[0].length!==0&&this._mappings!==void 0&&this._mappings.basicMappings.glyphAtlas!==""&&this._mappings.requiredMappings.positionX!==""&&this._mappings.requiredMappings.positionY!==""&&this._mappings.requiredMappings.glyphType!==""&&this._glyphAtlas!==void 0&&this._glyphQuadTree!==void 0}get glyphAtlas(){return this._glyphAtlas}set mappings(e){this._mappings=e,this._csv!==void 0&&this.findAttributeBounds(),this.calculateIndicesForGlyphs(),this.createInstancedMeshes()}get mappings(){return this._mappings}get instancedGlyphs(){return this._instancedGlyphs}get glyphGroup(){return this._glyphGroup}get glyphQuadTree(){return this._glyphQuadTree}async update(e){if(e.lodThreshold&&this.materials!==void 0){for(const t of this.materials)t.userData.lodThreshold.value=this._mappings.lodThreshold;this.renderingManager.requestUpdate()}if(e.instancingMethod&&(this.idBackground.visible=this._mappings.instancingMethod===2,this.createInstancedMeshes()),e.labelSettings?.labelSize&&(this.pickingHandler.labelSize=this._mappings.labelSettings.labelSize),e.labelSettings?.labelOffset&&(this.pickingHandler.labelOffset=this._mappings.labelSettings.labelOffset),e.basicMappings?.size&&this._instancedGlyphs!==void 0){const t=this._mappings.basicMappings.size/this._glyphAtlas.largestExtent;for(const n of this._instancedGlyphs)if(n!==void 0)for(const i of n)if(i instanceof cs)for(let r=0;r<i.count;++r){const a=new we;i.getMatrixAt(r,a),i.setMatrixAt(r,new we().copyPosition(a).scale(new L(t,t,t))),i.instanceMatrix.needsUpdate=!0}else i.scale.set(t,t,t);this.renderingManager.requestUpdate()}if(e.basicMappings?.glyphAtlas){if(this._mappings?.basicMappings.glyphAtlas!==void 0){const t=await this.glyphLoader.getGlyphAtlas(this._mappings?.basicMappings.glyphAtlas+".json");t!==null&&(this._glyphAtlas=t,this._glyphQuadTree=new ci(this._mappings.quadtreeDepth,this._glyphAtlas.glyphs.length,-1,-1,1,1))}this.calculateIndicesForGlyphs(),this.createInstancedMeshes()}if(e.quadtreeDepth&&this._glyphAtlas!==void 0&&this._mappings!==void 0&&(this._glyphQuadTree=new ci(this._mappings.quadtreeDepth,this._glyphAtlas.glyphs.length,-1,-1,1,1),this.calculateIndicesForGlyphs(),this.createInstancedMeshes()),e.shadowMapSettings?.sizeExponent){const t=2**this._mappings.shadowMapSettings.sizeExponent;this.spotLight.shadow.mapSize.set(t,t),this.spotLight.shadow.map?.setSize(t,t),this.renderingManager.requestUpdate()}e.shadowMapSettings?.enabled&&(this.spotLight.castShadow=this._mappings.shadowMapSettings.enabled,this.renderingManager.requestUpdate()),(e.requiredMappings?.positionX||e.requiredMappings?.positionY)&&(this.xAndYBounds=void 0,this.createInstancedMeshes(),this.pickingHandler.updateLabelPosition()),e.requiredMappings?.glyphType&&(this.calculateIndicesForGlyphs(),this.createInstancedMeshes()),e.optionalMappings&&(this.calculateIndicesForGlyphs(),this.createInstancedMeshes())}disposeObject3D(e){e.traverse(t=>{if(Object.hasOwn(t,"geometry")&&t.geometry.dispose(),Object.hasOwn(t,"material"))if(t.material instanceof Array)for(const n of t.material)n.dispose();else t.material.dispose();Object.hasOwn(t,"dispose")&&t.dispose(),Object.hasOwn(t,"shadow")&&t.shadow.dispose()})}mergeWarnings(e,t){for(const n in t)e[n]===void 0&&(e[n]=t[n])}printWarnings(e){e.notCastable&&console.error("The column selected for glyphType ("+this._mappings.requiredMappings.glyphType+") contains at least one value that cannot be casted to a number: "+e.notCastable),e.rounding&&console.warn("At least one value given as glyphType is not integer ("+e.rounding+"). Because of this, the value has been rounded."),e.wrapAround&&console.warn("At least one value used to select the glyph type ("+e.wrapAround+") is larger than the amount of available types. This value will be wrapped around."),e.noValidVariant&&console.warn("No valid variant could be found for the at least row "+e.noValidVariant+". The base model of the selected type will be used.")}}class wx{updateRequested;div;renderer;camera;multisampledRenderTarget;simpleRenderTarget;copyScene;copyMaterial;sceneManager;controls;benchmarkResults;constructor(){this.benchmarkResults="",this.updateRequested=!1,this.div=document.getElementById("threeJsDiv"),this.renderer=new k_({antialias:!1}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Bc,this.renderer.setSize(this.div.clientWidth,this.div.clientHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.getContext().getExtension("EXT_float_blend"),this.div.appendChild(this.renderer.domElement),this.camera=new Ct(75,this.div.clientWidth/this.div.clientHeight,.01,20),this.camera.position.set(0,.5,1.35),this.sceneManager=new Tx(this),this.controls=new C0(this.camera,this.renderer.domElement,this.renderer,this.sceneManager.scene,!1,4),this.controls.allowRotationBelowGroundPlane=!1,this.controls.useBottomOfBoundingBoxAsGroundPlane=!1;const e=this.renderer.getSize(new ae).multiplyScalar(this.renderer.getPixelRatio());this.multisampledRenderTarget=new ln(e.x,e.y,{count:2,format:It,type:Pt,samples:4}),this.multisampledRenderTarget.depthTexture=this.controls.navigationRenderTarget.depthTexture,this.simpleRenderTarget=new ln(e.x,e.y,{format:It,type:Pt}),this.simpleRenderTarget.texture.dispose(),this.simpleRenderTarget.texture=this.multisampledRenderTarget.textures[1],this.renderer.setRenderTarget(this.simpleRenderTarget);const t=`
			varying vec2 vUV;
			
			void main() {
				vUV = uv;
				gl_Position = vec4(position, 1.0);
			}
			`,n=`
			varying vec2 vUV;
			uniform sampler2D uColorTexture;
			
			void main() {
				gl_FragColor = LinearTosRGB(texture(uColorTexture, vUV));
			}
			`;this.copyScene=new gr,this.copyMaterial=new Ht,this.copyMaterial.vertexShader=t,this.copyMaterial.fragmentShader=n;const i=new rt(new jn(2,2),this.copyMaterial);i.frustumCulled=!1,this.copyScene.add(i),this.startRendering()}startRendering(){this.requestUpdate(),this.controls.addEventListener("change",()=>this.requestUpdate()),window.addEventListener("resize",()=>{this.renderer.setSize(this.div.clientWidth,this.div.clientHeight),this.camera.aspect=this.div.clientWidth/this.div.clientHeight,this.renderer.setPixelRatio(window.devicePixelRatio),this.camera.updateProjectionMatrix();const e=this.renderer.getSize(new ae).multiplyScalar(this.renderer.getPixelRatio());this.multisampledRenderTarget.setSize(e.x,e.y),this.simpleRenderTarget.setSize(e.x,e.y),this.renderer.setRenderTarget(this.simpleRenderTarget),this.sceneManager.scene.dispatchEvent({type:"resize"}),this.requestUpdate()})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,requestAnimationFrame(()=>this.render()))}render(){if(this.updateRequested=!1,this.sceneManager.mappings?.instancingMethod!==Dt.None){const e=this.sceneManager.glyphQuadTree;e!==void 0&&this.sceneManager.mappings!==void 0&&e.updateVisibility(this.camera.position,this.sceneManager.mappings.lodThreshold)}this.sceneManager.mappings?.instancingMethod===Dt.None||this.sceneManager.mappings?.instancingMethod===Dt.InstancedMesh?(this.renderer.setRenderTarget(this.controls.navigationRenderTarget),this.renderer.render(this.sceneManager.scene,this.camera),this.controls.update(!0)):(this.renderer.setRenderTarget(this.multisampledRenderTarget),this.renderer.render(this.sceneManager.scene,this.camera),this.copyRenderTargetToCanvas(this.multisampledRenderTarget),this.controls.update(!1))}resetCamera(){this.controls.reset()}getIdFromPixel(e,t){const n=this.simpleRenderTarget.width,i=this.simpleRenderTarget.height;e=Math.max(Math.min(1,e),-1),t=Math.max(Math.min(1,t),-1);const r=e*n/2+n/2-1,a=t*i/2+i/2-1,o=new Float32Array(4*9);this.renderer.readRenderTargetPixels(this.simpleRenderTarget,r,a,3,3,o);let l=!0;for(let c=4;c<o.length;c+=4)if(Math.abs(o[c]-o[0])>.001){l=!1;break}return l&&o[0]!==0?Math.round(o[0]):null}get canvas(){return this.renderer.domElement}copyRenderTargetToCanvas(e){this.copyMaterial.uniforms={uColorTexture:{value:e.textures[0]}},this.renderer.setRenderTarget(null),this.renderer.render(this.copyScene,this.camera)}benchmark(){if(console.log(`
----------
Starting benchmark...
----------

`),this.sceneManager.mappings===void 0)return;const e=this.sceneManager.mappings.numberBenchmarkingFrames,t=.5;let n=Math.round(e*(1+t)),i,r,a;const o=new we().makeRotationAxis(new L(0,1,0),2*Math.PI/Math.round(e*(1+t))),l=new L(0,0,0);let c=0;this.resetCamera();const h=new Array(e),u=()=>{n<=e&&(r=i,i=performance.now()),this.render(),n<e&&(a=performance.now(),h[c++]=a-r),--n,n<0&&d(),this.camera.position.applyMatrix4(o),this.camera.lookAt(l),n>=0&&requestAnimationFrame(u)},d=()=>{this.benchmarkResults=`Resolution,InstancingMethod,QuadtreeDepth,GlyphAtlas,UseShadows,Frametime,Framerate
`;const p=this.renderer.getSize(new ae),g=h.reduce((w,F)=>w+F,0);console.log("Elapsed time: "+g+"ms","Average fps: "+e/(g/1e3)),h.sort((w,F)=>w-F);const _=h[h.length-1],m=h[Math.round((h.length-1)*.999)],f=h[Math.round((h.length-1)*.99)],y=h[Math.round((h.length-1)/2)],x=h[Math.round((h.length-1)*.01)],E=h[Math.round((h.length-1)*.001)],I=h[0];console.log("Min fps: "+1/(_/1e3)+", 0.1% low: "+1/(m/1e3)+", 1% low: "+1/(f/1e3)+", median: "+1/(y/1e3)+", 1% high: "+1/(x/1e3)+", 0.1% high: "+1/(E/1e3)+", max: "+1/(I/1e3)),this.resetCamera();let A="";for(const w of h)A+=p.x+"x"+p.y+","+Dt[this.sceneManager.mappings.instancingMethod]+","+this.sceneManager.mappings.quadtreeDepth+","+this.sceneManager.mappings.basicMappings.glyphAtlas+","+this.sceneManager.mappings.shadowMapSettings.enabled+","+w+","+1e3/w+`
`;this.benchmarkResults=this.benchmarkResults+A,console.log(`
----------
End of benchmark.
----------

`)};requestAnimationFrame(u)}downloadBenchmarkResult(){let e="";this.sceneManager.mappings.instancingMethod===Dt.None?e="none":this.sceneManager.mappings.instancingMethod===Dt.InstancedMesh?e="im":this.sceneManager.mappings.instancingMethod===Dt.InstancedBufferGeometry&&(e="ibg");let t="";this.sceneManager.mappings.basicMappings.glyphAtlas==="lodAtlas"?t="highres":this.sceneManager.mappings.basicMappings.glyphAtlas==="lodAtlas_verysmall"&&(t="lowres");let n="";this.sceneManager.mappings.shadowMapSettings.enabled?n="shadows":n="plain";const i=new File([this.benchmarkResults],e+"-"+t+"-"+n+".csv",{type:"text/csv"}),r=document.createElement("a"),a=URL.createObjectURL(i);r.href=a,r.download=i.name,document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(a)}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class mn{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),mn.nextNameID=mn.nextNameID||0,this.$name.id=`lil-gui-name-${++mn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Rx extends mn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function eo(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Cx={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:eo,toHexString:eo},xs={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},Lx={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,e,t=1){const n=xs.fromHexString(s);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([s,e,t],n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return xs.toHexString(i)}},Px={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const n=xs.fromHexString(s);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:s,g:e,b:t},n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return xs.toHexString(i)}},Ix=[Cx,xs,Lx,Px];function Dx(s){return Ix.find(e=>e.match(s))}class Ux extends mn{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Dx(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=eo(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class fa extends mn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Nx extends mn{constructor(e,t,n,i,r,a){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},n=y=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+y),this.$input.value=this.getValue())},i=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y)*-1))},r=y=>{this._inputFocused&&(y.preventDefault(),n(this._step*this._normalizeMouseWheel(y)))};let a=!1,o,l,c,h,u;const d=5,p=y=>{o=y.clientX,l=c=y.clientY,a=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=y=>{if(a){const x=y.clientX-o,E=y.clientY-l;Math.abs(E)>d?(y.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>d&&_()}if(!a){const x=y.clientY-c;u-=x*this._step*this._arrowKeyMultiplier(y),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=y.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(f,y,x,E,I)=>(f-y)/(x-y)*(I-E)+E,t=f=>{const y=this.$slider.getBoundingClientRect();let x=e(f,y.left,y.right,this._min,this._max);this._snapClampSetValue(x)},n=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=f=>{t(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let a=!1,o,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),a=!1},h=f=>{f.touches.length>1||(this._hasScrollBar?(o=f.touches[0].clientX,l=f.touches[0].clientY,a=!0):c(f),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=f=>{if(a){const y=f.touches[0].clientX-o,x=f.touches[0].clientY-l;Math.abs(y)>Math.abs(x)?c(f):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else f.preventDefault(),t(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),g=400;let _;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const x=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(p,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Fx extends mn{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class Ox extends mn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Bx=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function kx(s){const e=document.createElement("style");e.innerHTML=s;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let yc=!1;class yr{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!yc&&o&&(kx(Bx),yc=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=a}add(e,t,n,i,r){if(Object(n)===n)return new Fx(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new Nx(this,e,t,n,i,r);case"boolean":return new Rx(this,e,t);case"string":return new Ox(this,e,t);case"function":return new fa(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new Ux(this,e,t,n)}addFolder(e){const t=new yr({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof fa||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof fa)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class zx{mappings;renderingManager;sceneManager;mainGui;labelSettingsGui;shadowSettingsGui;basicMappingsGui;requiredMappingsGui;optionalMappingsGui;_csvAttributes;_glyphAtlasAxes;_componentStatus;constructor(e){this.mainGui=new yr({title:"Options"}),this.mappings={instancingMethod:Dt.InstancedMesh,numberBenchmarkingFrames:500,lodThreshold:.75,quadtreeDepth:3,labelSettings:{labelSize:.01,labelOffset:.01},shadowMapSettings:{sizeExponent:13,enabled:!0},basicMappings:{size:.1,glyphAtlas:""},requiredMappings:{positionX:"",positionY:"",glyphType:""},optionalMappings:{}},this._componentStatus={basicMappings:!1,requiredMappings:!1,optionalMappings:!1},this._csvAttributes=[],this._glyphAtlasAxes=[],this.renderingManager=e,this.sceneManager=this.renderingManager.sceneManager,this.sceneManager.mappings=this.mappings,this.addMainGui(),this.renderingManager.controls.addEventListener("changeEnd",()=>this.updateURL())}addMainGui(){this.mainGui.add({reset:()=>this.renderingManager.resetCamera()},"reset").name("Reset camera"),this.mainGui.add({reset:()=>window.location.replace("/SoftwareMap/")},"reset").name("Reset visualization"),this.mainGui.add({benchmark:()=>this.renderingManager.benchmark()},"benchmark").name("Benchmark"),this.mainGui.add({getBenchmarkResults:()=>this.renderingManager.downloadBenchmarkResult()},"getBenchmarkResults").name("Download benchmark results"),this.mainGui.add(this.mappings,"numberBenchmarkingFrames").name("Number of frames to render in benchmark").onChange(()=>this.updateURL()),this.mainGui.add(this.mappings,"lodThreshold").name("Distance threshold for LoD").min(0).max(3).onChange(async()=>{await this.sceneManager.update({lodThreshold:!0}),this.updateURL()}),this.mainGui.add(this.mappings,"instancingMethod",{None:Dt.None,InstancedMesh:Dt.InstancedMesh,InstancedBufferGeometry:Dt.InstancedBufferGeometry}).name("Instancing method").onChange(async()=>{await this.sceneManager.update({instancingMethod:!0}),this.updateURL()}),this.mainGui.add(this.mappings,"quadtreeDepth").name("Depth of QuadTree").onFinishChange(async()=>{await this.sceneManager.update({quadtreeDepth:!0}),this.updateURL()}),this.shadowSettingsGui=this.mainGui.addFolder("Shadow map settings"),this.shadowSettingsGui.add(this.mappings.shadowMapSettings,"enabled").name("Use shadow map").onChange(async()=>{await this.sceneManager.update({shadowMapSettings:{enabled:!0}}),this.updateURL()}),this.shadowSettingsGui.add(this.mappings.shadowMapSettings,"sizeExponent").min(8).max(15).step(1).name("Shadow map size exponent").onChange(async()=>{await this.sceneManager.update({shadowMapSettings:{sizeExponent:!0}}),this.updateURL()}),this.labelSettingsGui=this.mainGui.addFolder("Label settings"),this.labelSettingsGui.add(this.mappings.labelSettings,"labelSize").min(.005).max(.05).onChange(async()=>{await this.sceneManager.update({labelSettings:{labelSize:!0}}),this.updateURL()}),this.labelSettingsGui.add(this.mappings.labelSettings,"labelOffset").min(.01).max(.1).onChange(async()=>{await this.sceneManager.update({labelSettings:{labelOffset:!0}}),this.updateURL()})}set csvAttributes(e){this._csvAttributes=[...e];const t=this._csvAttributes.indexOf("Document");t!==-1&&this._csvAttributes.splice(t,1);const n={...this._componentStatus};this.componentStatus={basicMappings:!1,requiredMappings:!1,optionalMappings:!1},this.componentStatus=n,this.clearInvalidMappings()}set glyphAtlasAxes(e){this._glyphAtlasAxes=e,this.componentStatus={optionalMappings:this._glyphAtlasAxes.length!==0}}set componentStatus(e){e.basicMappings!==void 0&&this._componentStatus.basicMappings!==e.basicMappings&&(this._componentStatus.basicMappings=e.basicMappings,this.updateBasicMappingStatus()),e.requiredMappings!==void 0&&this._componentStatus.requiredMappings!==e.requiredMappings&&(this._componentStatus.requiredMappings=e.requiredMappings,this.updateRequiredMappingStatus()),e.optionalMappings!==void 0&&this._componentStatus.optionalMappings!==e.optionalMappings&&(this._componentStatus.optionalMappings=e.optionalMappings,this.updateOptionalMappingStatus())}updateBasicMappingStatus(){this._componentStatus.basicMappings?(this.basicMappingsGui=this.mainGui.addFolder("Basic mappings"),this.basicMappingsGui.add(this.mappings.basicMappings,"size").name("Size multiplier").min(.01).max(.2).onChange(async()=>{await this.sceneManager.update({basicMappings:{size:!0}}),this.updateURL()}),this.basicMappingsGui.add(this.mappings.basicMappings,"glyphAtlas",this.getGlyphAtlasNames()).name("Glyph atlas").onChange(async()=>{await this.glyphAtlasChange(),this.updateURL()})):(this.basicMappingsGui?.destroy(),this.basicMappingsGui=void 0)}updateRequiredMappingStatus(){this._componentStatus.requiredMappings?(this.requiredMappingsGui=this.mainGui.addFolder("Required mappings"),this.requiredMappingsGui.add(this.mappings.requiredMappings,"positionX",this._csvAttributes).name("x position").onChange(async()=>{await this.sceneManager.update({requiredMappings:{positionX:!0}}),this.updateURL()}),this.requiredMappingsGui.add(this.mappings.requiredMappings,"positionY",this._csvAttributes).name("y position").onChange(async()=>{await this.sceneManager.update({requiredMappings:{positionY:!0}}),this.updateURL()}),this.requiredMappingsGui.add(this.mappings.requiredMappings,"glyphType",this._csvAttributes).name("Glyph type").onChange(async()=>{await this.sceneManager.update({requiredMappings:{glyphType:!0}}),this.updateURL()})):(this.requiredMappingsGui?.destroy(),this.requiredMappingsGui=void 0)}updateOptionalMappingStatus(){if(this._componentStatus.optionalMappings){this.optionalMappingsGui=this.mainGui.addFolder("Optional mappings");for(const e of this._glyphAtlasAxes)this.optionalMappingsGui.add(this.mappings.optionalMappings,e,this._csvAttributes).onChange(async()=>{await this.sceneManager.update({optionalMappings:e}),this.updateURL()})}else this.optionalMappingsGui?.destroy(),this.optionalMappingsGui=void 0}getGlyphAtlasNames(){const e=Object.assign({"/public/lodAtlas.json":()=>ar(()=>import("./lodAtlas-DZanHTZF.js"),[]),"/public/lodAtlas_small.json":()=>ar(()=>import("./lodAtlas_small-DZanHTZF.js"),[]),"/public/lodAtlas_verysmall.json":()=>ar(()=>import("./lodAtlas_verysmall-DZanHTZF.js"),[])}),t=[];for(const n in e){const i=n.substring(n.lastIndexOf("/")+1),r=i.substring(0,i.lastIndexOf("."));t.push(r)}return t}clearInvalidMappings(){for(const[e,t]of Object.entries(this.mappings.requiredMappings))if(t!==void 0&&!this._csvAttributes.includes(t)){const n=this.requiredMappingsGui?.controllers.find(i=>i.property===e);n!==void 0&&n.setValue("")}for(const[e,t]of Object.entries(this.mappings.optionalMappings))if(!this._csvAttributes.includes(t)){const n=this.optionalMappingsGui?.controllers.find(i=>i.property===e);n!==void 0&&n.setValue(""),delete this.mappings.optionalMappings[e]}}async parseQuery(e){const t=e.get("state");if(t===null)return;const n=JSON.parse(atob(t));this.mappings=n.mappings,this.renderingManager.camera.position.set(n.cameraPosition.x,n.cameraPosition.y,n.cameraPosition.z),this.renderingManager.controls.reloadCamera(this.renderingManager.camera.position.clone().add(n.cameraDirection)),this.sceneManager.mappings=this.mappings,this.mainGui.destroy(),this.mainGui=new yr({title:"Options"}),this.addMainGui(),await this.glyphAtlasChange(),this.componentStatus={basicMappings:!1,requiredMappings:!1,optionalMappings:!1},this.componentStatus={basicMappings:!0,requiredMappings:!0,optionalMappings:this._glyphAtlasAxes.length!==0},await this.sceneManager.update({lodThreshold:!0,labelSettings:{labelSize:!0,labelOffset:!0},shadowMapSettings:{sizeExponent:!0,enabled:!0}})}updateURL(){const e={mappings:this.mappings,cameraPosition:this.renderingManager.camera.position,cameraDirection:this.renderingManager.camera.getWorldDirection(new L)},t=btoa(JSON.stringify(e));history.replaceState(null,"","?state="+t)}async glyphAtlasChange(){await this.sceneManager.update({basicMappings:{glyphAtlas:!0}}),this.componentStatus={requiredMappings:!0},this.sceneManager.glyphAtlas!==void 0&&(this.glyphAtlasAxes=this.sceneManager.glyphAtlas.json.attributes)}}const Th=new wx,pa=new zx(Th),wh=document.getElementById("fileUpload");let Mc=!0;await Rh();wh.addEventListener("change",Rh);async function Rh(){const s=wh.files;let e;if(s===null||s[0]===void 0)e=await qo(await(await fetch("LocPositionsTensorflow.csv")).text());else{const t=s[0];e=await qo(await t.text())}Gx(e),pa.csvAttributes=e[0],pa.componentStatus={basicMappings:!0},Th.sceneManager.csv=e,Mc&&(await pa.parseQuery(new URLSearchParams(window.location.search)),Mc=!1)}function Gx(s){let e=0;e:for(let t=0;t<s[1][0].length;++t){for(let n=2;n<s.length;++n)if(s[n][0][t]!==s[1][0][t]&&!s[n][0].includes("___Landmark"))break e;++e}for(let t=1;t<s.length;++t){if(s[t][0].includes("___Landmark"))return;s[t][0]=s[t][0].substring(e)}}

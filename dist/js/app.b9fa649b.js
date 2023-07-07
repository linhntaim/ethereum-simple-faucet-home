(function(){var e={2538:function(e,t,r){"use strict";r.d(t,{l:function(){return ft}});var n={};r.r(n),r.d(n,{app:function(){return x},cache:function(){return L},encryption:function(){return C},env:function(){return b},localization:function(){return k},log:function(){return _},services:function(){return E},storage:function(){return O}});var s={};r.r(s);var o=r(9242);class i{constructor(){this.snakeCache={},this.camelCache={},this.studlyCache={}}ctypeLower(e){return/^[a-z]+$/.test(e)}lcfirst(e){return e.charAt(0).toLowerCase()+e.substr(1)}strncmp(e,t,r){return e=e.substring(0,r),t=t.substring(0,r),e===t?0:e>t?1:-1}ucwords(e,t="\\s\\t\\r\\n\\f\\v"){return e.replace(new RegExp("(^(.)|["+t+"]+(.))","g"),(e=>e.toUpperCase()))}after(e,t){if(""===t)return e;const r=e.indexOf(t);return-1===r?e:e.substr(r+t.length)}afterLast(e,t){if(""===t)return e;const r=e.lastIndexOf(t);return-1===r?e:e.substr(r+t.length)}before(e,t){return""===t?e:e.split(t)[0]}beforeLast(e,t){if(""===t)return e;const r=e.lastIndexOf(t);return-1===r?e:e.substr(0,r)}between(e,t,r){return""===t||""===r?e:this.beforeLast(this.after(e,t),r)}camel(e){return e in this.camelCache?this.camelCache[e]:this.camelCache[e]=this.lcfirst(this.studly(e))}contains(e,t){return"string"===typeof t&&(t=[t]),t.some((t=>""!==t&&-1!==e.indexOf(t)))}containsAll(e,t){return t.every((t=>this.contains(e,t)))}endsWith(e,t){return"string"===typeof t&&(t=[t]),t.some((t=>""!==t&&null!==t&&e.substr(-t.length)===t))}snake(e,t="_"){const r=e;if(r in this.snakeCache){if(t in this.snakeCache[r])return this.snakeCache[r][t]}else this.snakeCache[r]={};return this.ctypeLower(e)||(e=this.ucwords(e).replace(/\s+/u,""),e=e.replace(/(.)(?=[A-Z])/u,"$1"+t).toLowerCase()),this.snakeCache[r][t]=e}startsWith(e,t){return"string"===typeof t&&(t=[t]),t.some((t=>""!==t&&null!==t&&0===this.strncmp(e,t,t.length)))}studly(e){const t=e;return t in this.studlyCache?this.studlyCache[t]:(e=this.ucwords(e.replace(/[-_]/g," ")),this.studlyCache[t]=e.replace(/\s+/g,""))}}function a(){return(new Date).getTime()}function l(e,t=null){return t&&t(e),e}function c(e,t=null){return t?t(e):e}function u(e,t,r=null){const n=t.split(".");let s;while(s=n.shift()){if("object"!==typeof e||!(s in e)){e=null;break}e=e[s]}return null==e?r:e}function h(e,t,r){let n;Object.defineProperty(e,t,{get(){return"undefined"!==typeof n?n:n=r(this)}})}const d=new i;function p(e){return{install(t){h(t.config.globalProperties,"$start",(()=>({fresh:0,freshStart:e,isFresh(){return 0===this.fresh},continue(){++this.fresh,this.freshStart=a()},reset(){this.fresh=0}})))}}}class f{constructor(e){this.app=e}}class g extends f{constructor(e){super(e),this.registered={}}make(e,t=null){const r=e.name;return r in this.registered||(this.registered[r]=t||(t=>new e(t))),this.create(r)}create(e){return this.registered[e](this.app)}}class m extends g{create(e){return"function"===typeof this.registered[e]?this.registered[e]=super.create(e):this.registered[e]}}function v(){return{install(e){h(e.config.globalProperties,"$singleton",(()=>new m(e._instance.proxy)))}}}const w=v(),b={NODE_ENV:"production",VUE_APP_FAUCET_ENDPOINT:"https://freefaucet-endpoint.dapp.io.vn/claim",VUE_APP_ID:"simple-faucet",VUE_APP_LOG_LEVEL:"debug",VUE_APP_NAME:"Simple Faucet",BASE_URL:"/"};var y=r(3436);const x={id:b.VUE_APP_ID||"starter",name:b.VUE_APP_NAME||"Starter",url:window.location.origin+(0,y.trim)(b.BASE_URL,"/"),routes:{root:{name:"root"}}},_={default:"console",drivers:{console:{level:b.VUE_APP_LOG_LEVEL||"debug"}}},E={request:{default:null,drivers:{}}},C={default:"base64",drivers:{base64:{}}},O={default:"local",drivers:{local:{prefix:x.id+"__",flatten:!0},cookie:{prefix:x.id+"__",flatten:!0}}},L={default:"storage",drivers:{storage:{storage:"local"}}},k={locale:{default:b.VUE_APP_LOCALE||"en",fallback:b.VUE_APP_FALLBACK_LOCALE||"en",supported:["en","vi"]}};class P{constructor(e){Object.keys(e).forEach((t=>this[t]=e[t]))}get(e,t=null){return u(this,e,t)}}function $(e){return{install(t){h(t.config.globalProperties,"$config",(()=>new P(e)))}}}const j=$(n);class T{constructor(e,t,r=null){this.app=e,this.config=e.$config,this.configKey=t,this.drivers={},this.extended={},this.withs={},this.defaultDriver=r}getConfig(e,t=null){return this.config?.get(`${this.configKey}.${e}`,t)||t}options(e){return this.getConfig(`drivers.${e}`,{})}getDefaultDriver(){return this.getConfig("default",this.defaultDriver)}extend(e,t){switch(typeof e){case"string":this.extended[e]=t;break;case"object":Object.keys(e).forEach((t=>this.extended[t]=e[t]));break}return this}mod(e,t){t(this.driver(e))}driver(e=null){return null==e&&(e=this.getDefaultDriver()),e in this.drivers?this.drivers[e]:this.drivers[e]=this.createDriver(e)}createDriver(e){return c(this.createCustomDriver(e),(t=>t||c(this.createExtendedDriver(e),(e=>e||this.createDefaultDriver()))))}createCustomDriver(e){const t="create"+d.studly(e);return t in this?this[t]():null}createExtendedDriver(e){return e in this.extended?this.extended[e]():null}createDefaultDriver(){throw"Driver does not exist."}}class R{constructor(e={}){this.options=e}}class A extends R{constructor(e={}){super(e),this.levels={debug:0,info:1,notice:2,warning:3,error:4,critical:5,alert:6,emergency:7}}levelValue(e){return e in this.levels?this.levels[e]:0}higherOrEqualTo(e){return this.levelValue(e)>=("level"in this.options?this.levelValue(this.options.level):0)}debug(e,t,...r){}info(e,t,...r){}notice(e,t,...r){}warning(e,t,...r){}error(e,t,...r){}critical(e,t,...r){}alert(e,t,...r){}emergency(e,t,...r){}}class D extends A{debug(e,t,...r){this.higherOrEqualTo("debug")&&console.debug(e+":",t,...r)}info(e,t,...r){this.higherOrEqualTo("info")&&console.info(e+":",t,...r)}notice(e,t,...r){this.higherOrEqualTo("notice")&&console.warn(e+":",t,...r)}warning(e,t,...r){this.higherOrEqualTo("warning")&&console.warn(e+":",t,...r)}error(e,t,...r){this.higherOrEqualTo("error")&&console.error(e+":",t,...r)}critical(e,t,...r){this.higherOrEqualTo("critical")&&console.error(e+":",t,...r)}alert(e,t,...r){this.higherOrEqualTo("alert")&&console.error(e+":",t,...r)}emergency(e,t,...r){this.higherOrEqualTo("emergency")&&console.error(e+":",t,...r)}}class S extends T{constructor(e){super(e,"log","console")}createConsole(){return new D(this.options("console"))}}function V(e={}){return{install(t){h(t.config.globalProperties,"$logManager",(()=>new S(t._instance.proxy).extend(e))),h(t.config.globalProperties,"$log",(e=>e.$logManager.driver()))}}}const U=V();class F extends T{constructor(e){super(e,"services.request","default")}}function M(e={}){return{install(t){h(t.config.globalProperties,"$request",(()=>new F(t._instance.proxy).extend(e))),h(t.config.globalProperties,"$service",(e=>t=>e.$singleton.make(t)))}}}const N=M();r(2801);class q extends R{encrypt(e){return e}decrypt(e){return e}}class I extends q{encrypt(e){return btoa(e)}decrypt(e){return atob(e)}}class K extends T{constructor(e){super(e,"encryption","base64")}createBase64(){return new I(this.options("base64"))}}function B(e={}){return{install(t){h(t.config.globalProperties,"$encryption",(()=>new K(t._instance.proxy).extend(e))),h(t.config.globalProperties,"$encryptor",(e=>e.$encryption.driver()))}}}const H=B();class Z extends R{constructor(e,t={}){super(t),this.encryptor=e}prefixKey(e){return"prefix"in this.options?this.options.prefix+e:e}async put(e,t,r={}){return this.putRaw(this.prefixKey(e),await this.toRawValue(this.toValue(t,r),r),r)}putRaw(e,t,r={}){return this}toValue(e,t={}){return e}async toRawValue(e,t={}){let r={value:e,options:t};return this.options.flatten&&(r=JSON.stringify(r)),this.options.encrypt&&(r=await this.encryptor.encrypt(r)),r}flash(e,t,r={}){return r.flash=!0,this.put(e,t,r)}has(e){return this.hasRaw(this.prefixKey(e))}hasRaw(e){return!1}async keep(e){if(this.has(e)){const t=await this.fromRawValue(e,this.getRaw(this.prefixKey(e))),r=this.fromValue(e,t.value,t.options);t.options.keep=!0,await this.put(e,r,t.options)}return this}async get(e,t=null){if(!this.has(e))return t;const r=await this.fromRawValue(e,this.getRaw(this.prefixKey(e)));return this.fromValue(e,r.value,r.options)}fromValue(e,t,r={}){return r.expired&&(new Date).getTime()>r.expired?(this.remove(e),null):(r.flash&&(r.keep?delete r.keep:this.remove(e)),t)}async fromRawValue(e,t){return this.options.encrypt&&(t=await this.encryptor.decrypt(t)),this.options.flatten&&(t=JSON.parse(t)),t}getRaw(e){return null}remove(e){return this.removeRaw(this.prefixKey(e))}removeRaw(e){return this}}class z extends Z{constructor(e,t={}){super(e,t),this.handler=window.localStorage}putRaw(e,t,r={}){return this.handler.setItem(e,t),this}hasRaw(e){return e in this.handler}getRaw(e){return this.handler.getItem(e)}removeRaw(e){return this.handler.removeItem(e),this}}var W=r(680);class Y extends Z{constructor(e,t={}){super(e,t),this.options.flatten=!0}putRaw(e,t,r={}){const n={secure:/^https/.test(window.location.origin),sameSite:"lax"};return r.expired&&(n.expires=new Date(r.expired)),"expires"in r&&(n.expires=r.expires),"expires"in n||(n.expires=new Date((new Date).getTime()+15768e7)),"path"in r&&(n.path=r.path),"domain"in r&&(n.domain=r.domain),"secure"in r&&(n.secure=r.secure),"sameSite"in r&&(n.sameSite=r.sameSite),W.Z.set(e,t,n),this}hasRaw(e){return(t=>!!t.length&&t.some((t=>e===decodeURIComponent(t.split("=")[0]))))(document.cookie?document.cookie.split("; "):[])}getRaw(e){return W.Z.get(e)}removeRaw(e){return W.Z.remove(e),this}}class G extends T{constructor(e){super(e,"storage","local")}encryptor(e){return e?this.app.$encryption.driver(e):this.app.$encryptor}createLocal(){const e=this.options("local");return new z(this.encryptor(e.encryptor),e)}createCookie(){const e=this.options("cookie");return new Y(this.encryptor(e.encryptor),e)}}function J(e={}){return{install(t){h(t.config.globalProperties,"$storageManager",(()=>new G(t._instance.proxy).extend(e))),h(t.config.globalProperties,"$storage",(e=>e.$storageManager.driver())),h(t.config.globalProperties,"$cookie",(e=>e.$storageManager.driver("cookie")))}}}const Q=J();class X extends R{set(e,t,r=null){return this}get(e,t=null){return t}remove(e){return this}}class ee extends X{constructor(e,t={}){super(t),this.storage=e}async set(e,t,r=null){const n={};return r&&(n.expired=(new Date).getTime()+r),await this.storage.put(e,t,n),this}async get(e,t=null){return await this.storage.get(e,t)}remove(e){return this.storage.remove(e),this}}class te extends T{constructor(e){super(e,"cache","storage")}storage(e){return e?this.app.$storageManager.driver(e):this.app.$storage}createStorage(){const e=this.options("storage");return new ee(this.storage(e.storage),e)}}function re(e={}){return{install(t){h(t.config.globalProperties,"$cacheManager",(()=>new te(t._instance.proxy).extend(e))),h(t.config.globalProperties,"$cache",(e=>e.$cacheManager.driver()))}}}const ne=re();var se=r(5658);class oe{constructor(e=[]){this.locale=null,this.loadedLocales=[],this.supportedLocales=e}applyLocale(e){return this.locale=e}setLocale(e){return this.supportedLocales.includes(e)?this.locale===e?Promise.resolve(e):this.loadedLocales.includes(e)?Promise.resolve(this.applyLocale(e)):this.setUnloadedLocale(e):Promise.resolve(this.locale)}setUnloadedLocale(e){return Promise.resolve(this.applyLocale(e))}}class ie extends oe{createI18Provider(e,t={}){return l((0,se.o)(l(Object.assign({globalInjection:!0,legacy:!1,locale:e.VUE_APP_I18N_LOCALE||"en",fallbackLocale:e.VUE_APP_I18N_FALLBACK_LOCALE||"en"},t||{}),(e=>{this.loadedLocales=Object.keys(e.messages||{}),this.locale=this.loadedLocales.length?e.locale:null}))),(e=>this.i18n=e.global))}applyLocale(e){return this.i18n.locale.value=e,super.applyLocale(e)}setUnloadedLocale(e){return r(1618)(`./${e}.js`).then((t=>(this.i18n.setLocaleMessage(e,t.default),this.loadedLocales.push(e),this.applyLocale(e)))).catch((()=>Promise.resolve(this.locale)))}}class ae{constructor(){this.settings={locale:null,country:null,timezone:null,currency:null,numberFormat:null,longDateFormat:null,shortDateFormat:null,longTimeFormat:null,shortTimeFormat:null},this.applied(),this.localeHandler=null,this.applies={}}applied(){this.appliedSettings=Object.assign({},this.settings)}set(e){return Object.keys(e).forEach((t=>{t in this.settings&&(this.settings[t]=e[t])})),this}setLocale(e){return this.settings.locale=e,this}setLocaleHandler(e){return this.localeHandler=e,this}setLocaleApply(e){return this.applies.locale=e,this}setCommonApply(e){return this.applies.common=e,this}changes(){const e={};return Object.keys(this.settings).forEach((t=>e[t]=this.settings[t]!==this.appliedSettings[t])),e}apply(){const e=this.changes();return c(this.localeHandler.setLocale(this.settings.locale),(t=>this.applies.locale?t.then((async t=>(await this.applies.locale(t,e.locale),t))):t)).then((async()=>(this.applies.common&&await this.applies.common(this.settings,e),this.applied(),this.settings)))}}const le=new ie(k.locale.supported),ce=(new ae).setLocaleHandler(le),ue=le.createI18Provider(b,{locale:k.locale["default"],fallbackLocale:k.locale.fallback}),he={install(e){h(e.config.globalProperties,"$settings",(function(e){return ce.setLocaleApply(((t,r)=>{r?(document.querySelector("html").setAttribute("lang",t),e.$log.debug("locale","applied",t)):e.$log.debug("locale","no need to apply")})).setCommonApply((async(t,r)=>{Object.keys(r).some((e=>r[e]))?(await e.$cookie.put("settings",(()=>{const e={};return Object.keys(t).forEach((r=>t[r]&&(e[r]=t[r]))),e})()),e.$log.debug("settings","applied",t)):e.$log.debug("settings","no need to apply")})),ce})),h(e.config.globalProperties,"$setLocale",(function(e){return t=>(e.$log.debug("locale","applying",t),e.$settings.setLocale(t).apply())}))}};var de=r(65);function pe(e={}){return l((0,de.MT)(e),(e=>{const t=e.install;e.install=function(e,r){t.call(this,e,r),h(this,"app",(()=>e._instance.proxy))}}))}const fe=pe({state:{},getters:{},mutations:{},actions:{},modules:s});var ge=r(2483);class me extends f{constructor(e){super(e),this.middlewares=[],this.middlewareObjects={}}collect(e){return this.middlewares=[],this.middlewareObjects={},e.matched.forEach((e=>{"middleware"in e.meta&&this.middlewares.push(...e.meta.middleware)})),this}getMiddlewares(){return[...this.middlewares]}getMiddleware(e){return e.name in this.middlewareObjects?this.middlewareObjects[e.name]:this.middlewareObjects[e.name]=new e(this.app)}before(e,t,r,n){const s=this.getMiddlewares(),o=(i=null)=>{if(null==i){const i=s.shift();if(i){const n=this.getMiddleware(i);return e in n?void n[e](t,r,o):void o()}n()}else n(i)};o()}beforeEach(e,t,r){this.before("beforeEach",e,t,r)}beforeResolve(e,t,r){this.before("beforeResolve",e,t,r)}after(e,t,r){const n=this.getMiddlewares(),s=()=>{const o=n.shift();if(o){const n=this.getMiddleware(o);if(e in n)return void n[e](t,r,s);s()}};s()}afterEach(e,t){this.after("afterEach",e,t)}}function ve(e,t={}){return l((0,ge.p7)(Object.assign({history:(0,ge.PO)(e.BASE_URL)},t||{})),(e=>{const t=e.install;e.install=function(e){t.call(this,e);let r=null;const n=e=>r||(r=new me(e));this.beforeEach(((t,r,s)=>n(e._instance.proxy).collect(t).beforeEach(t,r,s))),this.beforeResolve(((t,r,s)=>n(e._instance.proxy).beforeResolve(t,r,s))),this.afterEach(((t,r)=>n(e._instance.proxy).afterEach(t,r)))}}))}class we extends f{beforeEach(e,t,r){r()}beforeResolve(e,t,r){r()}afterEach(e,t){}}class be extends we{async beforeEach(e,t,r){const n=this.app.$start.isFresh();this.app.$start.continue(),n&&(await this.restoreFromCache(),await this.restoreFromCookie()),r()}async restoreFromCache(){this.app.$log.debug("middleware","fresh.restoreFromCache")}async restoreFromCookie(){this.app.$log.debug("middleware","fresh.restoreFromCookie"),await this.app.$settings.set(await this.app.$cookie.get("settings",{locale:k.locale["default"]})).apply()}}class ye extends we{async beforeEach(e,t,r){this.app.$log.debug("middleware","locale.beforeEach");const n="locale"in e.query?e.query.locale:"lang"in e.query?e.query.lang:null;n&&await this.app.$setLocale(n),r()}}const xe=[be,ye];var _e=r(3396),Ee=r(7139);const Ce={class:"p-3 text-bg-dark"},Oe={class:"container"},Le={class:"d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"},ke={class:"d-flex align-items-center mb-2 mb-lg-0 me-lg-auto text-white text-decoration-none text-center",href:"/"},Pe={class:"fs-4"},$e={class:"nav col-12 col-lg-auto justify-content-center"},je={class:"container"};function Te(e,t,r,n,s,o){const i=(0,_e.up)("router-link"),a=(0,_e.up)("router-view"),l=(0,_e.up)("toast-container");return(0,_e.wg)(),(0,_e.iD)(_e.HY,null,[(0,_e._)("header",Ce,[(0,_e._)("div",Oe,[(0,_e._)("div",Le,[(0,_e._)("a",ke,[(0,_e._)("span",Pe,(0,Ee.zw)(s.appName),1)]),(0,_e._)("ul",$e,[((0,_e.wg)(!0),(0,_e.iD)(_e.HY,null,(0,_e.Ko)(s.navItems,(t=>((0,_e.wg)(),(0,_e.iD)("li",null,[(0,_e.Wm)(i,{class:(0,Ee.C_)(["nav-link px-2",e.$route.name==t.to.name?"text-secondary":"text-white"]),to:t.to},{default:(0,_e.w5)((()=>[(0,_e.Uk)((0,Ee.zw)(t.title),1)])),_:2},1032,["to","class"])])))),256))])])])]),(0,_e._)("main",null,[(0,_e._)("div",je,[(0,_e.Wm)(a)])]),(0,_e.Wm)(l,{class:"fixed-bottom"})],64)}const Re={class:"toast-container p-3"},Ae={class:"d-flex"},De={class:"toast-body"},Se=["onClick"];function Ve(e,t,r,n,s,o){return(0,_e.wg)(),(0,_e.iD)("div",Re,[((0,_e.wg)(!0),(0,_e.iD)(_e.HY,null,(0,_e.Ko)(s.toasts,((e,t)=>((0,_e.wg)(),(0,_e.iD)("div",{class:(0,Ee.C_)(["toast align-items-center border-0 show","text-bg-"+e.type]),role:"alert","aria-live":"assertive","aria-atomic":"true"},[(0,_e._)("div",Ae,[(0,_e._)("div",De,(0,Ee.zw)(e.message),1),(0,_e._)("button",{class:"btn-close btn-close-white me-2 m-auto",onClick:e=>o.onRemoveToastClick(t),type:"button","aria-label":"Close"},null,8,Se)])],2)))),256))])}var Ue={name:"ToastContainer",data(){return{toasts:[],autoRemoveTimeout:null}},mounted(){this.construct()},unmounted(){this.destruct()},methods:{construct(){this.$bus.on("toast",this.addToast)},destruct(){this.$bus.off("toast",this.addToast),null!=this.autoRemoveTimeout&&(clearTimeout(this.autoRemoveTimeout),this.autoRemoveTimeout=null,this.toasts=[])},addToast(e){this.toasts.push(e),null==this.autoRemoveTimeout&&this.autoRemoveToast()},autoRemoveToast(){this.autoRemoveTimeout=setTimeout((()=>{this.toasts.length?(this.toasts.shift(),this.autoRemoveToast()):this.stopAutoRemove()}),5e3)},stopAutoRemove(){clearTimeout(this.autoRemoveTimeout),this.autoRemoveTimeout=null},onRemoveToastClick(e){this.toasts.splice(e,1),this.toasts.length||this.stopAutoRemove()}}},Fe=r(89);const Me=(0,Fe.Z)(Ue,[["render",Ve],["__scopeId","data-v-6d60fbf0"]]);var Ne=Me,qe={name:"Base",components:{ToastContainer:Ne},data(){return{appName:"Simple Faucet",navItems:[{title:"Home",to:{name:"root"}},{title:"About",to:{name:"about"}}]}}};const Ie=(0,Fe.Z)(qe,[["render",Te]]);var Ke=Ie;const Be={class:"error"};function He(e,t,r,n,s,o){const i=(0,_e.up)("router-view");return(0,_e.wg)(),(0,_e.iD)("div",Be,[(0,_e.Wm)(i)])}var Ze={name:"BaseError"};const ze=(0,Fe.Z)(Ze,[["render",He]]);var We=ze;const Ye=[{path:"/",component:Ke,meta:{middleware:xe},children:[{path:"clear-site-data",name:"clear_site_data",component:()=>r.e(105).then(r.bind(r,1022))},{path:"error",component:We,children:[{path:"404",name:"not_found",component:()=>r.e(140).then(r.bind(r,3928))}]},{path:"/",name:"root",component:()=>r.e(45).then(r.bind(r,1426))},{path:"about",name:"about",component:()=>r.e(471).then(r.bind(r,4848))},{path:":pathMatch(.*)*",component:()=>r.e(517).then(r.bind(r,4440))}]}],Ge=ve(b,{routes:Ye});class Je extends f{constructor(e){super(e),this.url=this.app.$config.app.url,this.router=this.app.$router}concat(...e){return e.unshift(this.url),e.join("/")}to(e=""){return this.concat(e)}route(e){return this.concat(this.router.resolve(e).path.substr(1))}}function Qe(){return{install(e){h(e.config.globalProperties,"$url",(()=>new Je(e._instance.proxy)))}}}const Xe=Qe();var et=r(1373);function tt(){return{install(e){h(e.config.globalProperties,"$bus",(()=>(0,et.Z)()))}}}const rt=tt();var nt=r(1549),st=r(8665);class ot{constructor(){this.provider=null,this.signer=null,this.chains=null}connected(){return null!=this.provider}connect(){return this.connected()||(null==window.ethereum?this.provider=null:(this.updateConnection(),this.on("accountsChanged",this.updateConnection.bind(this)),this.on("chainChanged",this.updateConnection.bind(this)))),this}updateConnection(){this.provider=new nt.Q(window.ethereum),this.signer=null}on(e,t){this.connected()&&window.ethereum.addListener(e,t)}off(e=null,t=null){this.connected()&&(null!=t?window.ethereum.removeListener(e,t):window.ethereum.removeAllListeners(e))}hasSigner(){return!(!this.connected()||null==this.signer)&&this.signer}getSigner(){return null!=this.signer?new Promise((e=>e(this.signer))):this.provider.getSigner().then((e=>this.signer=e))}getChains(){return null!=this.chains?new Promise((e=>e(this.chains))):fetch("https://chainid.network/chains_mini.json").then((e=>e.json())).then((e=>(this.chains={},e.forEach((e=>this.chains[e.chainId]=e)),this.chains)))}declareContract(e,t){return new st.CH(e,t,this.signer)}}function it(){return{install(e){h(e.config.globalProperties,"$ethereum",(()=>new ot))}}}const at=it(),lt={factory:w,config:j,log:U,service:N,encryption:H,storage:Q,cache:ne,i18n:ue,localization:he,store:fe,router:Ge,url:Xe,bus:rt,ethereum:at};function ct(e,t){const r=(0,_e.up)("router-view");return(0,_e.wg)(),(0,_e.j4)(r)}const ut={},ht=(0,Fe.Z)(ut,[["render",ct]]);var dt=ht;const pt=a(),ft=c((0,o.ri)(dt),(e=>(e.use(p(pt)),Object.keys(lt).forEach((t=>e.use(lt[t]))),l(e.mount("#app"),(t=>{null==e._instance&&(e._instance={proxy:t})})))))},866:function(e,t,r){"use strict";var n=r(2538);n.l.$log.debug("app","created",n.l)},1618:function(e,t,r){var n={"./en.js":[8367,820],"./vi.js":[8104,355]};function s(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],s=t[0];return r.e(t[1]).then((function(){return r(s)}))}s.keys=function(){return Object.keys(n)},s.id=1618,e.exports=s},5856:function(){},2158:function(){},8076:function(){}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,s,o){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],s=e[u][1],o=e[u][2];for(var a=!0,l=0;l<n.length;l++)(!1&o||i>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(a=!1,o<i&&(i=o));if(a){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,s,o]}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(n,s){if(1&s&&(n=this(n)),8&s)return n;if("object"===typeof n&&n){if(4&s&&n.__esModule)return n;if(16&s&&"function"===typeof n.then)return n}var o=Object.create(null);r.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var a=2&s&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){i[e]=function(){return n[e]}}));return i["default"]=function(){return n},r.d(o,i),o}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+{45:"view-home",105:"view-clear-site-data",140:"view-error-not-found",355:"lang-vi-js",471:"view-about",517:"view-welcome",820:"lang-en-js"}[e]+"."+{45:"8fa62a18",105:"ccb8fdeb",140:"2d663a74",355:"ff49f727",471:"382740e0",517:"278c523e",820:"ddad37ff"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/view-home.06973521.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="@linhntaim/ethereum-simple-faucet-home:";r.l=function(n,s,o,i){if(e[n])e[n].push(s);else{var a,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var h=c[u];if(h.getAttribute("src")==n||h.getAttribute("data-webpack")==t+o){a=h;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",t+o),a.src=n),e[n]=[s];var d=function(t,r){a.onerror=a.onload=null,clearTimeout(p);var s=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),s&&s.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e=function(e,t,r,n){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var o=function(o){if(s.onerror=s.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=a,s.parentNode.removeChild(s),n(l)}};return s.onerror=s.onload=o,s.href=t,document.head.appendChild(s),s},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var s=r[n],o=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(o===e||o===t))return s}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){s=i[n],o=s.getAttribute("data-href");if(o===e||o===t)return s}},n=function(n){return new Promise((function(s,o){var i=r.miniCssF(n),a=r.p+i;if(t(i,a))return s();e(n,a,s,o)}))},s={143:0};r.f.miniCss=function(e,t){var r={45:1};s[e]?t.push(s[e]):0!==s[e]&&r[e]&&t.push(s[e]=n(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}(),function(){var e={143:0};r.f.j=function(t,n){var s=r.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var o=new Promise((function(r,n){s=e[t]=[r,n]}));n.push(s[2]=o);var i=r.p+r.u(t),a=new Error,l=function(n){if(r.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,s[1](a)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,o,i=n[0],a=n[1],l=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(s in a)r.o(a,s)&&(r.m[s]=a[s]);if(l)var u=l(r)}for(t&&t(n);c<i.length;c++)o=i[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},n=self["webpackChunk_linhntaim_ethereum_simple_faucet_home"]=self["webpackChunk_linhntaim_ethereum_simple_faucet_home"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(866)}));n=r.O(n)})();
//# sourceMappingURL=app.b9fa649b.js.map
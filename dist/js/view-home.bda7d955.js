"use strict";(self["webpackChunk_linhntaim_ethereum_simple_faucet_home"]=self["webpackChunk_linhntaim_ethereum_simple_faucet_home"]||[]).push([[45],{3958:function(t,e,n){n.r(e),n.d(e,{default:function(){return Nt}});var i=n(3396),s=n(7139),a=n(9242);const l=t=>((0,i.dD)("data-v-327f0f0c"),t=t(),(0,i.Cn)(),t),r={class:"px-4 py-5 my-5 text-center"},o=l((()=>(0,i._)("h1",{class:"display-5 fw-bold text-body-emphasis"},"Get & Donate Coins",-1))),u={class:"col-lg-6 mx-auto"},h=l((()=>(0,i._)("p",{class:"lead mb-4"},[(0,i.Uk)("Firstly, you must connect your wallet and switch to the "),(0,i._)("span",{class:"tip",title:"See About page"},"supported networks"),(0,i.Uk)(". Then, to get coins, simply click the "),(0,i._)("strong",null,'"Get"'),(0,i.Uk)(" button below. Besides, we are really happy and thankful if you can make a donation to our decentralized funds.")],-1))),c=l((()=>(0,i._)("div",{class:"text-center"},null,-1))),d={class:"alert alert-primary"},g=(0,i.Uk)("Your address:"),m=l((()=>(0,i._)("br",null,null,-1))),f=l((()=>(0,i._)("br",null,null,-1))),w={key:0},p={key:1,class:"text-danger"},v={class:"d-grid gap-2 d-sm-flex justify-content-sm-center"},b=["disabled"],y={key:0,class:"form-text"},Z=["title"],C=(0,i.Uk)("You've got coins recently"),S=l((()=>(0,i._)("hr",null,null,-1))),_={class:"d-grid gap-2 d-sm-flex justify-content-sm-center"},D=["disabled"],k={class:"alert alert-warning small mt-2 mb-2"},A=(0,i.Uk)("Click "),x=l((()=>(0,i._)("strong",null,"Donate",-1))),F=l((()=>(0,i._)("span",{class:"tip",title:"Which manages the fund (see About page for the sourcecode)"},"smart contract",-1))),U=(0,i.Uk)(' at the address "'),$=(0,i.Uk)('" via '),M=l((()=>(0,i._)("em",null,"your wallet",-1))),T=(0,i.Uk)("."),I={class:"progress",role:"progressbar","aria-label":"Basic example","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"},N={class:"small text-warning fw-bold"},W={class:"tip",title:"Current fund"},E=(0,i.Uk)(" / "),z={class:"tip",title:"Cap"},P={key:2,class:"alert alert-warning"},B={key:1,class:"d-grid gap-2 d-sm-flex justify-content-sm-center"},R={key:1,class:"alert alert-danger"};function Y(t,e,n,l,Y,L){return(0,i.wg)(),(0,i.iD)("div",r,[o,(0,i._)("div",u,[h,c,Y.wallet.installed?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[Y.wallet.address?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i._)("div",d,[(0,i._)("span",null,[g,m,(0,i._)("strong",null,(0,s.zw)(L.obfuscatedWalletAddress),1)]),f,null!=Y.wallet.chain?((0,i.wg)(),(0,i.iD)("span",w,(0,s.zw)(Y.wallet.chain.name),1)):((0,i.wg)(),(0,i.iD)("span",p,"Unknown or Not-supported Network"))]),null!=Y.wallet.chain?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i._)("div",v,[(0,i._)("button",{class:"btn btn-primary btn-lg px-4 gap-3",disabled:Y.loading.get,onClick:e[0]||(e[0]=(...t)=>L.onGetClick&&L.onGetClick(...t)),type:"button"},"Get "+(0,s.zw)(Y.sendingAmount)+" "+(0,s.zw)(Y.wallet.chain.nativeCurrency.symbol),9,b)]),Y.lastSentAt>0?((0,i.wg)(),(0,i.iD)("div",y,[(0,i._)("span",{class:(0,s.C_)({"tip text-danger":L.lastSentMinutesAgo<Y.delayMinutes}),title:`You can get coins once every ${L.delayDurationText}`},[L.lastSentDuration.hour>0||L.lastSentDuration.minute>0?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)("You got coins "+(0,s.zw)(L.lastSentDurationText)+" ago",1)],64)):((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[C],64))],10,Z)])):(0,i.kq)("",!0),S,Y.fund.cap>0?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i._)("div",_,[(0,i.wy)((0,i._)("input",{class:"form-control border-warning text-end fw-bold",type:"number",step:"0.01",min:"0.01",max:"100","onUpdate:modelValue":e[1]||(e[1]=t=>Y.donatingAmount=t)},null,512),[[a.nr,Y.donatingAmount]]),(0,i._)("button",{class:"btn btn-warning btn-lg px-4 gap-3",disabled:Y.loading.donate,onClick:e[2]||(e[2]=(...t)=>L.onDonateClick&&L.onDonateClick(...t)),type:"button"},"Donate",8,D)]),(0,i._)("div",k,[A,x,(0,i.Uk)(" to send "+(0,s.zw)(Y.donatingAmount)+" "+(0,s.zw)(Y.wallet.chain.nativeCurrency.symbol)+" to our ",1),F,U,(0,i._)("strong",null,(0,s.zw)(L.faucetContractAddress),1),$,M,T]),(0,i._)("div",I,[(0,i._)("div",{class:"progress-bar bg-warning",style:(0,s.j5)({width:`${L.fundPercentage}%`})},null,4)]),(0,i._)("div",N,[(0,i._)("span",W,(0,s.zw)(Math.floor(100*Y.fund.balance)/100)+" "+(0,s.zw)(Y.wallet.chain.nativeCurrency.symbol),1),E,(0,i._)("span",z,(0,s.zw)(Math.floor(100*Y.fund.cap)/100)+" "+(0,s.zw)(Y.wallet.chain.nativeCurrency.symbol),1)])],64)):((0,i.wg)(),(0,i.iD)("div",P,"Donation is currently disabled"))],64)):(0,i.kq)("",!0)],64)):((0,i.wg)(),(0,i.iD)("div",B,[(0,i._)("button",{class:"btn btn-primary btn-lg px-4 gap-3",type:"button",onClick:e[3]||(e[3]=(...t)=>L.onConnectWalletClick&&L.onConnectWalletClick(...t))},"Connect wallet")]))],64)):((0,i.wg)(),(0,i.iD)("div",R,"Please install an EVM-compatible Wallet."))])])}var L=n(1427),O=n(3781),V=n(714),G=n(7327),H=n(9614),j=n(8829),q=n(2575),J=n(4304),K=n(7223),Q=n(1726);const X=BigInt(-1),tt=BigInt(0),et=BigInt(1),nt=BigInt(5),it={};let st="0000";while(st.length<80)st+=st;function at(t){let e=st;while(e.length<t)e+=e;return BigInt("1"+e.substring(0,t))}function lt(t,e,n){const i=BigInt(e.width);if(e.signed){const e=et<<i-et;(0,L.hu)(null==n||t>=-e&&t<e,"overflow","NUMERIC_FAULT",{operation:n,fault:"overflow",value:t}),t=t>tt?(0,K._Y)((0,K.sS)(t,i),i):-(0,K._Y)((0,K.sS)(-t,i),i)}else{const e=et<<i;(0,L.hu)(null==n||t>=0&&t<e,"overflow","NUMERIC_FAULT",{operation:n,fault:"overflow",value:t}),t=(t%e+e)%e&e-et}return t}function rt(t){"number"===typeof t&&(t=`fixed128x${t}`);let e=!0,n=128,i=18;if("string"===typeof t)if("fixed"===t);else if("ufixed"===t)e=!1;else{const s=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);(0,L.en)(s,"invalid fixed format","format",t),e="u"!==s[1],n=parseInt(s[2]),i=parseInt(s[3])}else if(t){const s=t,a=(t,e,n)=>null==s[t]?n:((0,L.en)(typeof s[t]===e,"invalid fixed format ("+t+" not "+e+")","format."+t,s[t]),s[t]);e=a("signed","boolean",e),n=a("width","number",n),i=a("decimals","number",i)}(0,L.en)(n%8===0,"invalid FixedNumber width (not byte aligned)","format.width",n),(0,L.en)(i<=80,"invalid FixedNumber decimals (too large)","format.decimals",i);const s=(e?"":"u")+"fixed"+String(n)+"x"+String(i);return{signed:e,width:n,decimals:i,name:s}}function ot(t,e){let n="";t<tt&&(n="-",t*=X);let i=t.toString();if(0===e)return n+i;while(i.length<=e)i=st+i;const s=i.length-e;i=i.substring(0,s)+"."+i.substring(s);while("0"===i[0]&&"."!==i[1])i=i.substring(1);while("0"===i[i.length-1]&&"."!==i[i.length-2])i=i.substring(0,i.length-1);return n+i}var ut=new WeakMap,ht=new WeakMap,ct=new WeakMap,dt=new WeakSet,gt=new WeakSet,mt=new WeakSet,ft=new WeakSet,wt=new WeakSet,pt=new WeakSet;class vt{constructor(t,e,n){(0,O.Z)(this,pt),(0,O.Z)(this,wt),(0,O.Z)(this,ft),(0,O.Z)(this,mt),(0,O.Z)(this,gt),(0,O.Z)(this,dt),(0,G.Z)(this,"format",void 0),(0,V.Z)(this,ut,{writable:!0,value:void 0}),(0,V.Z)(this,ht,{writable:!0,value:void 0}),(0,V.Z)(this,ct,{writable:!0,value:void 0}),(0,G.Z)(this,"_value",void 0),(0,L.NK)(t,it,"FixedNumber"),(0,q.Z)(this,ht,e),(0,q.Z)(this,ut,n);const i=ot(e,n.decimals);(0,Q.h)(this,{format:n.name,_value:i}),(0,q.Z)(this,ct,at(n.decimals))}get signed(){return(0,j.Z)(this,ut).signed}get width(){return(0,j.Z)(this,ut).width}get decimals(){return(0,j.Z)(this,ut).decimals}get value(){return(0,j.Z)(this,ht)}addUnsafe(t){return(0,H.Z)(this,mt,Zt).call(this,t)}add(t){return(0,H.Z)(this,mt,Zt).call(this,t,"add")}subUnsafe(t){return(0,H.Z)(this,ft,Ct).call(this,t)}sub(t){return(0,H.Z)(this,ft,Ct).call(this,t,"sub")}mulUnsafe(t){return(0,H.Z)(this,wt,St).call(this,t)}mul(t){return(0,H.Z)(this,wt,St).call(this,t,"mul")}mulSignal(t){(0,H.Z)(this,dt,bt).call(this,t);const e=(0,j.Z)(this,ht)*(0,j.Z)(t,ht);return(0,L.hu)(e%(0,j.Z)(this,ct)===tt,"precision lost during signalling mul","NUMERIC_FAULT",{operation:"mulSignal",fault:"underflow",value:this}),(0,H.Z)(this,gt,yt).call(this,e/(0,j.Z)(this,ct),"mulSignal")}divUnsafe(t){return(0,H.Z)(this,pt,_t).call(this,t)}div(t){return(0,H.Z)(this,pt,_t).call(this,t,"div")}divSignal(t){(0,L.hu)((0,j.Z)(t,ht)!==tt,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),(0,H.Z)(this,dt,bt).call(this,t);const e=(0,j.Z)(this,ht)*(0,j.Z)(this,ct);return(0,L.hu)(e%(0,j.Z)(t,ht)===tt,"precision lost during signalling div","NUMERIC_FAULT",{operation:"divSignal",fault:"underflow",value:this}),(0,H.Z)(this,gt,yt).call(this,e/(0,j.Z)(t,ht),"divSignal")}cmp(t){let e=this.value,n=t.value;const i=this.decimals-t.decimals;return i>0?n*=at(i):i<0&&(e*=at(-i)),e<n?-1:e>n?1:0}eq(t){return 0===this.cmp(t)}lt(t){return this.cmp(t)<0}lte(t){return this.cmp(t)<=0}gt(t){return this.cmp(t)>0}gte(t){return this.cmp(t)>=0}floor(){let t=(0,j.Z)(this,ht);return(0,j.Z)(this,ht)<tt&&(t-=(0,j.Z)(this,ct)-et),t=(0,j.Z)(this,ht)/(0,j.Z)(this,ct)*(0,j.Z)(this,ct),(0,H.Z)(this,gt,yt).call(this,t,"floor")}ceiling(){let t=(0,j.Z)(this,ht);return(0,j.Z)(this,ht)>tt&&(t+=(0,j.Z)(this,ct)-et),t=(0,j.Z)(this,ht)/(0,j.Z)(this,ct)*(0,j.Z)(this,ct),(0,H.Z)(this,gt,yt).call(this,t,"ceiling")}round(t){if(null==t&&(t=0),t>=this.decimals)return this;const e=this.decimals-t,n=nt*at(e-1);let i=this.value+n;const s=at(e);return i=i/s*s,lt(i,(0,j.Z)(this,ut),"round"),new vt(it,i,(0,j.Z)(this,ut))}isZero(){return(0,j.Z)(this,ht)===tt}isNegative(){return(0,j.Z)(this,ht)<tt}toString(){return this._value}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return vt.fromString(this.toString(),t)}static fromValue(t,e,n){const i=null==e?0:(0,K.Dx)(e),s=rt(n);let a=(0,K.yT)(t,"value");const l=i-s.decimals;if(l>0){const e=at(l);(0,L.hu)(a%e===tt,"value loses precision for format","NUMERIC_FAULT",{operation:"fromValue",fault:"underflow",value:t}),a/=e}else l<0&&(a*=at(-l));return lt(a,s,"fromValue"),new vt(it,a,s)}static fromString(t,e){const n=t.match(/^(-?)([0-9]*)\.?([0-9]*)$/);(0,L.en)(n&&n[2].length+n[3].length>0,"invalid FixedNumber string value","value",t);const i=rt(e);let s=n[2]||"0",a=n[3]||"";while(a.length<i.decimals)a+=st;(0,L.hu)(a.substring(i.decimals).match(/^0*$/),"too many decimals for format","NUMERIC_FAULT",{operation:"fromString",fault:"underflow",value:t}),a=a.substring(0,i.decimals);const l=BigInt(n[1]+s+a);return lt(l,i,"fromString"),new vt(it,l,i)}static fromBytes(t,e){let n=(0,K.Gh)((0,J.Pw)(t,"value"));const i=rt(e);return i.signed&&(n=(0,K._Y)(n,i.width)),lt(n,i,"fromBytes"),new vt(it,n,i)}}function bt(t){(0,L.en)(this.format===t.format,"incompatible format; use fixedNumber.toFormat","other",t)}function yt(t,e){return t=lt(t,(0,j.Z)(this,ut),e),new vt(it,t,(0,j.Z)(this,ut))}function Zt(t,e){return(0,H.Z)(this,dt,bt).call(this,t),(0,H.Z)(this,gt,yt).call(this,(0,j.Z)(this,ht)+(0,j.Z)(t,ht),e)}function Ct(t,e){return(0,H.Z)(this,dt,bt).call(this,t),(0,H.Z)(this,gt,yt).call(this,(0,j.Z)(this,ht)-(0,j.Z)(t,ht),e)}function St(t,e){return(0,H.Z)(this,dt,bt).call(this,t),(0,H.Z)(this,gt,yt).call(this,(0,j.Z)(this,ht)*(0,j.Z)(t,ht)/(0,j.Z)(this,ct),e)}function _t(t,e){return(0,L.hu)((0,j.Z)(t,ht)!==tt,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),(0,H.Z)(this,dt,bt).call(this,t),(0,H.Z)(this,gt,yt).call(this,(0,j.Z)(this,ht)*(0,j.Z)(this,ct)/(0,j.Z)(t,ht),e)}const Dt=["wei","kwei","mwei","gwei","szabo","finney","ether"];function kt(t,e){let n=18;if("string"===typeof e){const t=Dt.indexOf(e);(0,L.en)(t>=0,"invalid unit","unit",e),n=3*t}else null!=e&&(n=(0,K.Dx)(e,"unit"));return vt.fromValue(t,n,{decimals:n,width:512}).toString()}function At(t,e){(0,L.en)("string"===typeof t,"value must be a string","value",t);let n=18;if("string"===typeof e){const t=Dt.indexOf(e);(0,L.en)(t>=0,"invalid unit","unit",e),n=3*t}else null!=e&&(n=(0,K.Dx)(e,"unit"));return vt.fromString(t,{decimals:n,width:512}).value}function xt(t){return kt(t,18)}class Ft{constructor(t,e=""){this.message=t,this.type=e}}class Ut extends Ft{constructor(t){super(t,"success")}}class $t extends Ft{constructor(t){super(t,"danger")}}var Mt={name:"Home",data(){return{loading:{get:!1,donate:!1},wallet:{installed:!1,address:null,chain:null},fund:{balance:0,cap:0},delayMinutes:0,lastSentAt:0,sendingAmount:.02,donatingAmount:.02,now:0,refreshDataFromContractTimeout:null}},computed:{chainId(){return null==this.wallet.chain?null:parseInt(this.wallet.chain.chainId)},obfuscatedWalletAddress(){return null==this.wallet.address?null:`${this.wallet.address.substr(0,6)}...${this.wallet.address.substr(this.wallet.address.length-4)}`},faucetContractAddress(){return null==this.chainId?null:this.$config.env[this.faucetContractAddressEnvName(this.chainId)]},fundPercentage(){return 0===this.fund.cap?0:(t=>{switch(!0){case t>100:return 100;case t>0&&t<1:return 1;default:return Math.floor(t)}})(this.fund.balance/this.fund.cap*100)},lastSentMinutesAgo(){return Math.floor((this.now-this.lastSentAt)/60)},lastSentDuration(){return{hour:Math.floor(this.lastSentMinutesAgo/60),minute:this.lastSentMinutesAgo%60}},lastSentDurationText(){return(this.lastSentDuration.hour>0?this.lastSentDuration.hour+" "+(this.lastSentDuration.hour>1?"hours ":"hour "):"")+(this.lastSentDuration.minute>0?this.lastSentDuration.minute+" "+(this.lastSentDuration.minute>1?"minutes":"minute"):"")},delayDuration(){return{hour:Math.floor(this.delayMinutes/60),minute:this.delayMinutes%60}},delayDurationText(){const t=this.delayDuration;return(t.hour>0?t.hour+" "+(t.hour>1?"hours":"hour"):"")+t.minute+" "+(t.minute>1?"minutes":"minute")}},mounted(){this.construct()},unmounted(){this.destruct()},methods:{construct(){this.wallet.installed=this.$ethereum.connect().connected();const t=this.$ethereum.hasSigner();!1!==t&&this.initSigner(t)},destruct(){this.stopRefreshDataFromContract(),this.detachEvents()},faucetContractAddressEnvName(t){return`VUE_APP_FAUCET_CONTRACT_ADDRESS_${t}`},onConnectWalletClick(){this.$ethereum.getSigner().then((t=>this.initSigner(t))).catch((t=>{this.$bus.emit("toast",new $t(t.reason||"Something went wrong."))}))},initSigner(t){this.fillDataFromSigner(t),this.attachEvents()},fillDataFromSigner(t){this.wallet.address=t.address,t.provider.getNetwork().then((t=>{this.$ethereum.getChains().then((e=>{const n=parseInt(t.chainId);n in e&&this.faucetContractAddressEnvName(n)in this.$config.env?(this.wallet.chain=e[n],this.refreshDataFromContract()):(this.stopRefreshDataFromContract(),this.wallet.chain=null)}))})).catch((t=>{this.$bus.emit("toast",new $t(t.reason||"Something went wrong."))}))},refreshDataFromContract(){this.fillDataFromContract(),this.refreshDataFromContractTimeout=setTimeout((()=>{this.refreshDataFromContract()}),6e4)},stopRefreshDataFromContract(){null!=this.refreshDataFromContractTimeout&&(clearTimeout(this.refreshDataFromContractTimeout),this.refreshDataFromContractTimeout=null)},fillDataFromContract(){const t=this.$ethereum.declareContract(this.faucetContractAddress,["function getBalance() public view returns (uint256)","function getSendingAmount() public view returns (uint256)","function getCap() public view returns (uint256)","function getDelayMinutes() public view returns (uint256)","function getTimeout() public view returns (uint256)"]);t.getSendingAmount().then((t=>{this.sendingAmount=parseFloat(xt(t))})).catch((t=>console.log(t))),t.getCap().then((t=>{this.fund.cap=parseFloat(xt(t))})).catch((t=>console.log(t))),t.getBalance().then((t=>{this.fund.balance=parseFloat(xt(t))})).catch((t=>console.log(t))),t.getDelayMinutes().then((t=>{this.delayMinutes=parseInt(t)})).catch((t=>console.log(t))),t.getTimeout().then((t=>{this.lastSentAt=parseInt(t)})).catch((t=>console.log(t))),this.now=Math.floor((new Date).getTime()/1e3)},onWalletChanged(){this.$ethereum.getSigner().then((t=>this.fillDataFromSigner(t))).catch((t=>{this.$bus.emit("toast",new $t(t.reason||"Something went wrong."))}))},attachEvents(){this.$ethereum.on("accountsChanged",this.onWalletChanged),this.$ethereum.on("chainChanged",this.onWalletChanged)},detachEvents(){this.$ethereum.off("accountsChanged",this.onWalletChanged),this.$ethereum.off("chainChanged",this.onWalletChanged)},onGetClick(){this.getWithFeePaidByOwner()},getWithFeePaidByOwner(){this.loading.get=!0,fetch(this.$config.env.VUE_APP_FAUCET_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chainId:this.chainId,address:this.wallet.address})}).then((t=>{if(t.status>=400&&t.status<600)throw t;return t.json()})).then((()=>{this.loading.get=!1,this.$bus.emit("toast",new Ut(`Successfully request to send ${this.sendingAmount} ${this.wallet.chain.nativeCurrency.symbol} to your wallet. Please wait for transaction confirmation.`))})).catch((()=>{this.loading.get=!1,this.$bus.emit("toast",new $t("Something went wrong. Please try again."))}))},getWithFeePaidByUser(){const t=this.$ethereum.declareContract(this.faucetContractAddress,["function sendMe()"]);this.loading.get=!0,t.sendMe().then((()=>{this.loading.get=!1,this.$bus.emit("toast",new Ut(`Successfully request to send ${this.sendingAmount} ${this.wallet.chain.nativeCurrency.symbol} to your wallet. Please wait for transaction confirmation.`))})).catch((t=>{this.loading.get=!1,this.$bus.emit("toast",new $t(t.reason||"Something went wrong."))}))},onDonateClick(){this.$ethereum.getSigner().then((t=>{this.loading.donate=!0,t.sendTransaction({to:this.faucetContractAddress,value:At(this.donatingAmount.toString(),18)}).then((()=>{this.loading.donate=!1,this.$bus.emit("toast",new Ut(`Successfully request to donate ${this.donatingAmount} ${this.wallet.chain.nativeCurrency.symbol} to the smart contract. Please wait for transaction confirmation.`))})).catch((t=>{this.loading.donate=!1,this.$bus.emit("toast",new $t(t.reason||"Something went wrong."))}))})).catch((t=>{this.$bus.emit("toast",new $t(t.reason||"Something went wrong."))}))}}},Tt=n(89);const It=(0,Tt.Z)(Mt,[["render",Y],["__scopeId","data-v-327f0f0c"]]);var Nt=It}}]);
//# sourceMappingURL=view-home.bda7d955.js.map
webpackJsonp([1],{"7Otq":function(e,t,n){e.exports=n.p+"static/img/logo.dc93bc7.png"},M0TA:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("img",{attrs:{src:n("7Otq"),width:"200",height:"200"}}),this._v(" "),t("div",{staticStyle:{"margin-bottom":"20px"}},[this._v("\n    无水印视频下载\n  ")]),this._v(" "),t("router-view"),this._v(" "),t("div",{staticStyle:{position:"fixed",bottom:"5px","text-align":"right"}},[t("el-link",{staticStyle:{"margin-left":"20px"},attrs:{href:"https://github.com/moyada/stealer/issues",type:"primary",target:"_blank"}},[this._v("\n      问题反馈\n    ")])],1)],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},i,!1,function(e){n("M0TA")},null,null).exports,r=n("/ocq");function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=document.createElement("a");n.style.display="none",n.href=e,n.setAttribute("download",t),document.body.appendChild(n),n.click(),document.body.removeChild(n)}var l={name:"home",delimiters:["[[","]]"],data:function(){return{loading:!1,inputUrl:"",selectedType:"",options:[],downloadAddr:""}},mounted:function(){this.getTypes()},methods:{getTypes:function(){var e=this;this.$axios.get("video/list").then(function(t){200===t.status?(e.options=t.data,e.selectedType=t.data[0].value):e.$message.error("数据读取失败!")}).catch(function(t){return e.$message.error("数据读取失败!"+e.getErrData(t))})},selectType:function(e){this.selectedType=e},fetch:function(){var e=this,t=this.inputUrl.trim();""!==t?(this.loading=!0,this.$axios.get("video/fetch?type="+this.selectedType+"&url="+t).then(function(t){e.loading=!1,200===t.status?e.downloadAddr=t.data:(e.$message.error("地址分析失败, "+t.data),e.downloadAddr="")}).catch(function(t){e.loading=!1,e.$message.error("地址分析失败, "+e.getErrData(t)),e.downloadAddr=""})):this.$message({message:"分享地址不能为空",type:"warning"})},download:function(){var e=this,t=this.inputUrl.trim();""!==t?(this.loading=!0,fetch("video/download?type="+this.selectedType+"&url="+t,{responseType:"blob"}).then(function(e){if(!e.ok)throw e.text();var t=e.headers.get("content-disposition"),n=void 0;if(null!==t&&void 0!==t){var a=t.indexOf("filename=");t=t.substring(a+10,t.length-1),n=e.blob()}else t=null,n=e.text();return{data:n,filename:t}}).then(function(n){var a=n.data,i=n.filename;null===i?a.then(function(n){var a=JSON.parse(n);fetch(a.url).then(function(e){return e.blob()}).then(function(n){s(t=window.URL.createObjectURL(n),a.name),window.URL.revokeObjectURL(t),e.loading=!1})}):a.then(function(n){s(t=window.URL.createObjectURL(n),i),window.URL.revokeObjectURL(t),e.loading=!1})}).catch(function(t){e.loading=!1,t.then(function(t){return e.$message.error("视频下载失败, "+t)})})):this.$message({message:"分享地址不能为空",type:"warning"})}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",{attrs:{display:"margin-top: 10px"}},[n("el-input",{staticStyle:{display:"inline-table",width:"30%"},attrs:{placeholder:"请输入分享地址"},model:{value:e.inputUrl,callback:function(t){e.inputUrl=t},expression:"inputUrl"}}),e._v(" "),n("el-select",{staticStyle:{margin:"2px",width:"10%"},attrs:{size:"large"},on:{change:function(t){return e.selectType(e.selectedType)}},model:{value:e.selectedType,callback:function(t){e.selectedType=t},expression:"selectedType"}},e._l(e.options,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:e.disabled}})}),1),e._v(" "),n("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover"}},[n("span",{staticStyle:{color:"#b0b0b0"}},[e._v("直接下载")]),e._v(" "),n("el-button",{staticStyle:{margin:"2px"},attrs:{slot:"reference",loading:e.loading,type:"primary",plain:""},on:{click:function(t){return e.download()}},slot:"reference"},[e._v("下载")])],1),e._v(" "),n("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover"}},[n("span",{staticStyle:{color:"#b0b0b0"}},[e._v("获取下载链接")]),e._v(" "),n("el-button",{staticStyle:{margin:"2px"},attrs:{slot:"reference",loading:e.loading},on:{click:function(t){return e.fetch()}},slot:"reference"},[e._v("分析")])],1)],1),e._v(" "),""!==e.downloadAddr?n("div",{staticStyle:{"margin-top":"10px","padding-left":"20%","padding-right":"20%"}},[n("div",{staticStyle:{"margin-bottom":"10px"}},[e._v("下载地址: ")]),e._v(" "),n("el-link",{staticStyle:{"font-size":"large"},attrs:{href:e.downloadAddr,target:"_blank"}},[e._v("\n        "+e._s(e.downloadAddr)+"\n      ")])],1):e._e()],1)},staticRenderFns:[]};var c=n("VU/8")(l,d,!1,function(e){n("RSnU")},"data-v-1e309a65",null).exports;a.default.use(r.a);var p=new r.a({routes:[{path:"/",name:"HelloWorld",component:c}]}),u=n("zL8q"),f=n.n(u),h=(n("tvR6"),n("mtWM")),v=n.n(h);function g(e){var t,n=void 0;return t=URL.createObjectURL(e),(n=new XMLHttpRequest).open("GET",t,!1),n.send(),URL.revokeObjectURL(t),n.responseText}a.default.use(f.a),a.default.prototype.$axios=v.a,a.default.config.productionTip=!1,a.default.mixin({methods:{blobToString:function(e){return g(e)},getErrData:function(e){return e.response?"blob"===e.response.request.responseType?g(e.response.data):e.response.data:e.request?e:e.message}}}),new a.default({el:"#app",router:p,axios:v.a,components:{App:o},template:"<App/>"})},RSnU:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.627832634a38f1258e00.js.map
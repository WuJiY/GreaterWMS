(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{3619:function(e,t){},"4c97":function(e,t,a){"use strict";a.r(t);var s,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-table shadow-24",attrs:{id:"table",data:e.table_list,"row-key":"id",separator:e.separator,loading:e.loading,columns:e.columns,"hide-bottom":"",pagination:e.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:e.height},flat:"",bordered:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:e.$t("refresh")},on:{click:function(t){return e.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("refreshtip")))])],1)],1),a("q-space"),a("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:e.$t("search")},on:{input:function(t){return e.getSearchList()}},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[t.row.id===e.editid?[a("q-td",{key:"staff_name",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("staff.view_staff.staff_name"),autofocus:"",rules:[function(t){return t&&t.length>0||e.error1}]},model:{value:e.editFormData.staff_name,callback:function(t){e.$set(e.editFormData,"staff_name",t)},expression:"editFormData.staff_name"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"staff_name",attrs:{props:t}},[e._v(e._s(t.row.staff_name))])]:e._e(),t.row.id===e.editid?[a("q-td",{key:"staff_type",attrs:{props:t}},[a("q-select",{attrs:{dense:"",outlined:"",square:"",options:e.staff_type_list,"transition-show":"scale","transition-hide":"scale",label:e.$t("staff.view_staff.staff_type"),rules:[function(t){return t&&t.length>0||e.error2}]},model:{value:e.editFormData.staff_type,callback:function(t){e.$set(e.editFormData,"staff_type",t)},expression:"editFormData.staff_type"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"staff_type",attrs:{props:t}},[e._v(e._s(t.row.staff_type))])]:e._e(),a("q-td",{key:"create_time",attrs:{props:t}},[e._v(e._s(t.row.create_time))]),a("q-td",{key:"update_time",attrs:{props:t}},[e._v(e._s(t.row.update_time))])],2)]}}])})],1),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("previous"),icon:"navigate_before"},on:{click:function(t){return e.getListPrevious()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("previous")))])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("next"),"icon-right":"navigate_next"},on:{click:function(t){return e.getListNext()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("next")))])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.pathname_previous&&!e.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:e.$t("no_data")}})],1)]],2)},o=[],i=(a("5319"),a("3004")),r=a("bd4c"),f=a("a357"),c=a("18d6"),l={name:"Pagestafflist",data(){return{openid:"",login_name:"",authin:"0",pathname:"staff/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],staff_type_list:["Manager","Inbound","Outbound","Supervisor","StockControl","Customer","Supplier"],columns:[{name:"staff_name",required:!0,label:this.$t("staff.view_staff.staff_name"),align:"left",field:"staff_name"},{name:"staff_type",label:this.$t("staff.view_staff.staff_type"),field:"staff_type",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"}],pagination:{page:1,rowsPerPage:"30"},newForm:!1,newFormData:{staff_name:"",staff_type:"",check_code:""},editid:0,editFormData:{},editMode:!1,deleteForm:!1,deleteid:0,sender:"",receiver:"",chat:!1,chat_list:[],chat_text:"",chat_next:null,filter:"",error1:this.$t("staff.view_staff.error1"),error2:this.$t("staff.view_staff.error2")}},methods:{getList(){var e=this;Object(i["e"])(e.pathname,{}).then((t=>{e.table_list=t.results,"zh-hans"===c["a"].getItem("lang")&&e.table_list.forEach(((e,t)=>{"Admin"===e.staff_type?e.staff_type="管理员":"Customer"===e.staff_type?e.staff_type="客户":"Supplier"===e.staff_type?e.staff_type="供应商":"Manager"===e.staff_type?e.staff_type="经理":"Supervisor"===e.staff_type?e.staff_type="主管":"Inbound"===e.staff_type?e.staff_type="收货组":"Outbound"===e.staff_type?e.staff_type="发货组":"StockControl"===e.staff_type&&(e.staff_type="库存管理")})),e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getSearchList(){var e=this;e.filter=e.filter.replace(/\s+/g,""),Object(i["e"])(e.pathname+"?staff_name__icontains="+e.filter,{}).then((t=>{e.table_list=t.results,"zh-hans"===c["a"].getItem("lang")&&e.table_list.forEach(((e,t)=>{"Admin"===e.staff_type?e.staff_type="管理员":"Customer"===e.staff_type?e.staff_type="客户":"Supplier"===e.staff_type?e.staff_type="供应商":"Manager"===e.staff_type?e.staff_type="经理":"Supervisor"===e.staff_type?e.staff_type="主管":"Inbound"===e.staff_type?e.staff_type="收货组":"Outbound"===e.staff_type?e.staff_type="发货组":"StockControl"===e.staff_type&&(e.staff_type="库存管理")})),e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListPrevious(){var e=this;Object(i["e"])(e.pathname_previous,{}).then((t=>{e.table_list=t.results,"zh-hans"===c["a"].getItem("lang")&&e.table_list.forEach(((e,t)=>{"Admin"===e.staff_type?e.staff_type="管理员":"Customer"===e.staff_type?e.staff_type="客户":"Supplier"===e.staff_type?e.staff_type="供应商":"Manager"===e.staff_type?e.staff_type="经理":"Supervisor"===e.staff_type?e.staff_type="主管":"Inbound"===e.staff_type?e.staff_type="收货组":"Outbound"===e.staff_type?e.staff_type="发货组":"StockControl"===e.staff_type&&(e.staff_type="库存管理")})),e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListNext(){var e=this;Object(i["e"])(e.pathname_next,{}).then((t=>{e.table_list=t.results,"zh-hans"===c["a"].getItem("lang")&&e.table_list.forEach(((e,t)=>{"Admin"===e.staff_type?e.staff_type="管理员":"Customer"===e.staff_type?e.staff_type="客户":"Supplier"===e.staff_type?e.staff_type="供应商":"Manager"===e.staff_type?e.staff_type="经理":"Supervisor"===e.staff_type?e.staff_type="主管":"Inbound"===e.staff_type?e.staff_type="收货组":"Outbound"===e.staff_type?e.staff_type="发货组":"StockControl"===e.staff_type&&(e.staff_type="库存管理")})),e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},reFresh(){var e=this;e.getList()},unlock(e){Object(i["i"])(this.pathname+e.id+"/",{is_lock:!e.is_lock,staff_name:e.staff_name,staff_type:e.staff_type}).then((t=>{this.getList();let a="Success unlocked";e.is_lock||(a="Success locked"),this.$q.notify({message:a,icon:"check",color:"green"})})).catch((e=>{this.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},RandomCheckCode(){for(var e=this,t="",a=4,s=[0,1,2,3,4,5,6,7,8,9],n=0;n<a;n++){var o=Math.floor(9*Math.random());t+=s[o]}e.newFormData.check_code=t},newDataSubmit(){var e=this,t=[];e.newFormData.is_lock=!1,e.table_list.forEach((e=>{t.push(e.staff_name)})),-1===t.indexOf(e.newFormData.staff_name)&&0!==e.newFormData.staff_name.length&&e.newFormData.staff_type?(e.RandomCheckCode(),Object(i["h"])(e.pathname,e.newFormData).then((t=>{e.getList(),e.newDataCancel(),e.$q.notify({message:"Success Create",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))):-1!==t.indexOf(e.newFormData.staff_name)?e.$q.notify({message:e.$t("notice.userererror"),icon:"close",color:"negative"}):0===e.newFormData.staff_name.length?e.$q.notify({message:e.$t("staff.view_staff.error1"),icon:"close",color:"negative"}):e.newFormData.staff_type||e.$q.notify({message:e.$t("staff.view_staff.error2"),icon:"close",color:"negative"})},newDataCancel(){var e=this;e.newForm=!1,e.newFormData={staff_name:"",staff_type:""}},editData(e){var t=this;t.editMode=!0,t.editid=e.id,t.editFormData={staff_name:e.staff_name,staff_type:e.staff_type}},editDataSubmit(){var e=this;Object(i["i"])(e.pathname+e.editid+"/",e.editFormData).then((t=>{e.editDataCancel(),e.getList(),e.$q.notify({message:"Success Edit Data",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},editDataCancel(){var e=this;e.editMode=!1,e.editid=0,e.editFormData={staff_name:"",staff_type:""}},deleteData(e){var t=this;t.deleteForm=!0,t.deleteid=e},deleteDataSubmit(){var e=this;Object(i["d"])(e.pathname+e.deleteid+"/").then((t=>{e.deleteDataCancel(),e.getList(),e.$q.notify({message:"Success Edit Data",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},deleteDataCancel(){var e=this;e.deleteForm=!1,e.deleteid=0},initWebSocket(){var e=this;s=new WebSocket(i["k"]+"?sender="+e.login_name+"&receiver="+e.receiver+"&openid="+e.openid),s.onmessage=e.websocketonmessage,s.onopen=e.websocketonopen,s.onerror=e.websocketonerror,s.onclose=e.websocketclose},websocketonopen(){console.log("Success Connect")},websocketonerror(){var e=this;e.initWebSocket()},websocketonmessage(e){var t=this;t.$q.sessionStorage.getItem("receiver")===JSON.parse(e.data).sender&&t.chat_list.push(JSON.parse(e.data)),t.Readnum(),t.$q.notify({message:JSON.parse(e.data).sender+" Send you a message",color:"deep-purple",icon:"textsms",position:"right",actions:[{label:"VIEW",color:"yellow",handler:()=>{t.ChatWith(JSON.parse(e.data).sender)}}]})},websocketsend(){var e=this;""===e.chat_text||(s.send(e.chat_text),e.chat_list.push({sender:e.sender+"-"+e.openid,receiver:e.receiver,detail:e.chat_text,create_time:r["b"].formatDate(Date.now(),"YYYY-MM-DD HH:mm:ss")}),e.chat_text="")},websocketclose(e){console.log("Disconnect",e)},ChatWith(e){var t=this;t.sender=t.login_name,t.receiver=e,t.$q.sessionStorage.set("receiver",e),t.sender===t.receiver?t.$q.notify({message:"Cannot Chat with yourself",icon:"close",color:"negative"}):(t.chat=!0,t.chat_text="",t.initWebSocket(),Object(i["e"])("chat/?sender="+t.sender+"&receiver="+t.receiver).then((e=>{t.chat_list=e.results.reverse(),t.chat_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})})))},LoadChatList(){var e=this;Object(i["e"])(e.chat_next).then((t=>{t.results.forEach((t=>{e.chat_list.unshift(t)})),e.chat_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},ChatClose(){var e=this;e.receiver="",e.$q.sessionStorage.set("receiver",""),e.chat_list=[],e.chat_text="",e.chat_next=null},downloadData(){var e=this;c["a"].has("auth")?Object(i["f"])(e.pathname+"file/?lang="+c["a"].getItem("lang")).then((t=>{var a=Date.now(),s=r["b"].formatDate(a,"YYYYMMDDHHmmssSSS");const n=Object(f["a"])(e.pathname+s+".csv","\ufeff"+t.data,"text/csv");!0!==n&&this.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})})):e.$q.notify({message:e.$t("notice.loginerror"),color:"negative",icon:"warning"})}},created(){var e=this;c["a"].has("openid")?e.openid=c["a"].getItem("openid"):(e.openid="",c["a"].set("openid","")),c["a"].has("login_name")?e.login_name=c["a"].getItem("login_name"):(e.login_name="",c["a"].set("login_name","")),c["a"].has("auth")?(e.authin="1",e.getList()):e.authin="0"},mounted(){var e=this;e.$q.platform.is.electron?e.height=String(e.$q.screen.height-290)+"px":e.height=e.$q.screen.height-290+"px"},updated(){document.getElementById("chat_scroll")&&(document.getElementById("chat_scroll").scrollTop=document.getElementById("chat_scroll").scrollHeight)},destroyed(){s&&s.readyState===s.OPEN&&s.close()}},p=l,d=a("42e1"),_=a("824c"),h=a("eaac"),m=a("e7a9"),u=a("9c40"),g=a("05c0"),y=a("2c91"),v=a("27f9"),b=a("bd08"),w=a("db86"),k=a("ddd8"),x=a("eebe"),q=a.n(x),$=Object(d["a"])(p,n,o,!1,null,null,null);"function"===typeof _["default"]&&Object(_["default"])($);t["default"]=$.exports;q()($,"components",{QTable:h["a"],QBtnGroup:m["a"],QBtn:u["a"],QTooltip:g["a"],QSpace:y["a"],QInput:v["a"],QTr:b["a"],QTd:w["a"],QSelect:k["a"]})},"824c":function(e,t,a){"use strict";var s=a("3619"),n=a.n(s);t["default"]=n.a}}]);
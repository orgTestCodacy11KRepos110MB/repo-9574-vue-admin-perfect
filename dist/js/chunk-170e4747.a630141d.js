(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-170e4747"],{"265d":function(e,t,n){"use strict";var i=n("7a23"),a=n("313e"),c=["id"],r=Object(i["defineComponent"])({props:{className:{type:String,default:"chart"},config:{type:Object,default:function(){}},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"}},setup:function(e){var t,n=e,r={grid:{top:10,left:"2%",right:"2%",bottom:"2%",containLabel:!0},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[150,230,224,218,135,147,260],type:"line"}]},o=function(){var e=a["b"](document.getElementById(n.id));return e.setOption(r),e};return Object(i["onMounted"])((function(){t=o(),window.addEventListener("resize",(function(){t&&t.resize()}))})),function(t,n){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",{id:e.id,class:Object(i["normalizeClass"])(e.className),style:Object(i["normalizeStyle"])({height:e.height,width:e.width})},null,14,c)}}});const o=r;t["a"]=o},"5d81":function(e,t,n){"use strict";var i=n("7a23"),a=n("313e"),c=["id"],r=Object(i["defineComponent"])({props:{className:{type:String,default:"chart"},config:{type:Object,default:function(){}},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"}},setup:function(e){var t,n=e,r={grid:{top:10,left:"2%",right:"2%",bottom:"2%",containLabel:!0},xAxis:{},yAxis:{},series:[{symbolSize:20,data:[[10,8.04],[8.07,6.95],[13,7.58],[9.05,8.81],[11,8.33],[14,7.66],[13.4,6.81],[10,6.33],[14,8.96],[12.5,6.82],[9.15,7.2],[11.5,7.2],[3.03,4.23],[12.2,7.83],[2.02,4.47],[1.05,3.33],[4.05,4.96],[6.03,7.24],[12,6.26],[12,8.84],[7.08,5.82],[5.02,5.68]],type:"scatter"}]},o=function(){var e=a["b"](document.getElementById(n.id));return e.setOption(r),e};return Object(i["onMounted"])((function(){t=o(),window.addEventListener("resize",(function(){t&&t.resize()}))})),function(t,n){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",{id:e.id,class:Object(i["normalizeClass"])(e.className),style:Object(i["normalizeStyle"])({height:e.height,width:e.width})},null,14,c)}}});const o=r;t["a"]=o},6934:function(e,t,n){},aa06:function(e,t,n){"use strict";n("6934")},aa63:function(e,t,n){"use strict";var i=n("7a23"),a=n("313e"),c=["id"],r=Object(i["defineComponent"])({props:{className:{type:String,default:"chart"},config:{type:Object,default:function(){}},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"}},setup:function(e){var t,n=e,r={grid:{top:10,left:"2%",right:"2%",bottom:"2%",containLabel:!0},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{data:[120,200,150,80,70,110,130],type:"bar"}]},o=function(){var e=a["b"](document.getElementById(n.id));return e.setOption(r),e};return Object(i["onMounted"])((function(){t=o(),window.addEventListener("resize",(function(){t&&t.resize()}))})),function(t,n){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",{id:e.id,class:Object(i["normalizeClass"])(e.className),style:Object(i["normalizeStyle"])({height:e.height,width:e.width})},null,14,c)}}});const o=r;t["a"]=o},b10d:function(e,t,n){"use strict";var i=n("7a23"),a=n("313e"),c=["id"],r=Object(i["defineComponent"])({props:{className:{type:String,default:"chart"},config:{type:Object,default:function(){}},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"}},setup:function(e){var t,n=e,r={grid:{top:10,left:"2%",right:"2%",bottom:"2%",containLabel:!0},tooltip:{trigger:"item"},legend:{top:"0%",left:"center"},series:[{name:"Access From",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"40",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"Search Engine"},{value:735,name:"Direct"},{value:580,name:"Email"},{value:484,name:"Union Ads"},{value:300,name:"Video Ads"}]}]},o=function(){var e=a["b"](document.getElementById(n.id));return e.setOption(r),e};return Object(i["onMounted"])((function(){t=o(),window.addEventListener("resize",(function(){t&&t.resize()}))})),function(t,n){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",{id:e.id,class:Object(i["normalizeClass"])(e.className),style:Object(i["normalizeStyle"])({height:e.height,width:e.width})},null,14,c)}}});const o=r;t["a"]=o},b845:function(e,t,n){"use strict";var i=n("7a23"),a=n("313e"),c=["id"],r=Object(i["defineComponent"])({props:{className:{type:String,default:"chart"},config:{type:Object,default:function(){}},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"}},setup:function(e){var t,n=e,r={tooltip:{formatter:"{a} <br/>{b} : {c}%"},series:[{name:"Pressure",type:"gauge",detail:{formatter:"{value}"},data:[{value:50,name:"SCORE"}]}]},o=function(){var e=a["b"](document.getElementById(n.id));return e.setOption(r),e};return Object(i["onMounted"])((function(){t=o(),window.addEventListener("resize",(function(){t&&t.resize()}))})),function(t,n){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",{id:e.id,class:Object(i["normalizeClass"])(e.className),style:Object(i["normalizeStyle"])({height:e.height,width:e.width})},null,14,c)}}});const o=r;t["a"]=o},e6bb:function(e,t,n){"use strict";n.r(t);var i=n("7a23"),a=n("265d"),c=n("aa63"),r=n("b10d"),o=n("5d81"),d=n("b845"),l=n("e9ef"),u={style:{width:"100%"}},s=Object(i["createElementVNode"])("div",{class:"card-header"},[Object(i["createElementVNode"])("span",null,"折线图")],-1),b=Object(i["createElementVNode"])("div",{class:"card-header"},[Object(i["createElementVNode"])("span",null,"柱状图")],-1),f=Object(i["createElementVNode"])("div",{class:"card-header"},[Object(i["createElementVNode"])("span",null,"饼图")],-1),h=Object(i["createElementVNode"])("div",{class:"card-header"},[Object(i["createElementVNode"])("span",null,"散点图")],-1),p=Object(i["createElementVNode"])("div",{class:"card-header"},[Object(i["createElementVNode"])("span",null,"仪表盘")],-1),O=Object(i["createElementVNode"])("div",{class:"card-header"},[Object(i["createElementVNode"])("span",null,"漏斗图")],-1),m=Object(i["defineComponent"])({setup:function(e){return function(e,t){var n=Object(i["resolveComponent"])("el-card"),m=Object(i["resolveComponent"])("el-col"),j=Object(i["resolveComponent"])("el-row");return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",u,[Object(i["createVNode"])(j,{class:"row-bg",gutter:10},{default:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(m,{xs:24,sm:12,lg:8},{default:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(n,{class:"box-card"},{header:Object(i["withCtx"])((function(){return[s]})),default:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(a["a"],{height:"200px",width:"100%"})]})),_:1})]})),_:1}),Object(i["createVNode"])(m,{xs:24,sm:12,lg:8},{default:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(n,{class:"box-card"},{header:Object(i["withCtx"])((function(){return[b]})),default:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(c["a"],{height:"200px",width:"100%",id:"bar"})]})),_:1})]})),_:1}),Object(i["createVNode"])(m,{xs:24,sm:12,lg:8},{default:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(n,{class:"box-card"},{header:Object(i["withCtx"])((function(){return[f]})),default:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(r["a"],{height:"200px",width:"100%",id:"pie"})]})),_:1})]})),_:1}),Object(i["createVNode"])(m,{xs:24,sm:12,lg:8},{default:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(n,{class:"box-card"},{header:Object(i["withCtx"])((function(){return[h]})),default:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(o["a"],{height:"200px",width:"100%",id:"scatter"})]})),_:1})]})),_:1}),Object(i["createVNode"])(m,{xs:24,sm:12,lg:8},{default:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(n,{class:"box-card"},{header:Object(i["withCtx"])((function(){return[p]})),default:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(d["a"],{height:"200px",width:"100%",id:"gauge"})]})),_:1})]})),_:1}),Object(i["createVNode"])(m,{xs:24,sm:12,lg:8},{default:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(n,{class:"box-card"},{header:Object(i["withCtx"])((function(){return[O]})),default:Object(i["withCtx"])((function(){return[Object(i["createVNode"])(l["a"],{height:"200px",width:"100%",id:"funnel"})]})),_:1})]})),_:1})]})),_:1})])}}});n("aa06");const j=m;t["default"]=j},e9ef:function(e,t,n){"use strict";var i=n("7a23"),a=n("313e"),c=["id"],r=Object(i["defineComponent"])({props:{className:{type:String,default:"chart"},config:{type:Object,default:function(){}},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"}},setup:function(e){var t,n=e,r={grid:{top:0,left:"2%",right:"2%",bottom:"0%",containLabel:!0},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c}%"},toolbox:{feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},legend:{show:!1,data:["Show","Click","Visit","Inquiry","Order"]},series:[{name:"Funnel",type:"funnel",left:"10%",top:30,bottom:10,width:"80%",min:0,max:100,minSize:"0%",maxSize:"100%",sort:"descending",gap:2,label:{show:!0,position:"inside"},labelLine:{length:10,lineStyle:{width:1,type:"solid"}},itemStyle:{borderColor:"#fff",borderWidth:1},emphasis:{label:{fontSize:20}},data:[{value:60,name:"Visit"},{value:40,name:"Inquiry"},{value:20,name:"Order"},{value:80,name:"Click"},{value:100,name:"Show"}]}]},o=function(){var e=a["b"](document.getElementById(n.id));return e.setOption(r),e};return Object(i["onMounted"])((function(){t=o(),window.addEventListener("resize",(function(){t&&t.resize()}))})),function(t,n){return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",{id:e.id,class:Object(i["normalizeClass"])(e.className),style:Object(i["normalizeStyle"])({height:e.height,width:e.width})},null,14,c)}}});const o=r;t["a"]=o}}]);
//# sourceMappingURL=chunk-170e4747.a630141d.js.map
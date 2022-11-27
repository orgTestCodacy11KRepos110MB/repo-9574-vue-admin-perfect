import{g as E,h as g,x as M,P as N,r as a,o as U,c as P,b as e,w as t,s as w,bM as j,a as b,F as z,N as L,i as C,j as I,d as k}from"./index.47a6bf9f.js";const O=["src"],S=E({__name:"Upload",props:{modelValue:Array},emits:["update:modelValue"],setup(y,{emit:D}){const p=y;let l=g([]);const F=g(""),c=g(!1),V=(n,r)=>{console.log(n,r)},d=(n,r)=>new Promise((m,_)=>{var i=new FileReader;let s=/\.jpg$|\.jpeg$|\.gif$|\.png$/i;i.readAsDataURL(n);let f=n.name;s.test(f)?i.onload=B=>{l.value.push({name:f,url:B.target.result}),D("update:modelValue",l.value),m(B.target.result)}:(L.error("\u8BF7\u4E0A\u4F20\u56FE\u7247"),_())}),u=n=>{F.value=n.url,c.value=!0};return M(()=>{N(()=>p.modelValue,n=>{l.value=n})}),(n,r)=>{const m=a("el-icon"),_=a("el-upload"),i=a("el-dialog");return U(),P(z,null,[e(_,{action:"","before-upload":d,"list-type":"picture-card","on-preview":u,"on-remove":V,"file-list":w(l)},{default:t(()=>[e(m,null,{default:t(()=>[e(w(j))]),_:1})]),_:1},8,["file-list"]),e(i,{modelValue:c.value,"onUpdate:modelValue":r[0]||(r[0]=s=>c.value=s),width:"80%",top:"80px"},{default:t(()=>[b("img",{"w-full":"",src:F.value,alt:"\u9884\u89C8\u56FE\u7247",style:{width:"100%"}},null,8,O)]),_:1},8,["modelValue"])],64)}}}),T={style:{"max-width":"800px"}},G=b("span",{class:"text-gray-500"},"-",-1),H=E({name:"advancedForm"}),K=E({...H,setup(y){const D=g("default"),p=g(),l=C({name:"\u8DD1\u6B65",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:"",img:[]}),F=C({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0\u6D3B\u52A8\u533A\u57DF",trigger:"blur"},{min:3,max:5,message:"\u957F\u5EA6\u5728 3 \u5230 5 \u4E2A\u5B57\u7B26",trigger:"blur"}],img:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u56FE\u7247",trigger:"blur"}],region:[{required:!0,message:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF",trigger:"change"}],date1:[{type:"date",required:!0,message:"\u8BF7\u9009\u62E9\u65F6\u95F4",trigger:"change"}],date2:[{type:"date",required:!0,message:"\u8BF7\u9009\u62E9\u65F6\u95F4",trigger:"change"}],type:[{type:"array",required:!0,message:"\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u6D3B\u52A8\u6027\u8D28",trigger:"change"}],resource:[{required:!0,message:`\u8BF7\u9009\u62E9\u6D3B\u52A8\u8D44\u6E90
`,trigger:"change"}],desc:[{required:!0,message:"\u8BF7\u586B\u5199\u6D3B\u52A8\u5F62\u5F0F",trigger:"blur"}]}),c=async d=>{console.log("--FORM---",l),d&&await d.validate((u,n)=>{u?console.log("submit!"):console.log("error submit!",n)})},V=d=>{!d||d.resetFields()};return(d,u)=>{const n=a("el-input"),r=a("el-form-item"),m=a("el-option"),_=a("el-select"),i=a("el-date-picker"),s=a("el-col"),f=a("el-time-picker"),B=a("el-switch"),A=a("el-checkbox"),q=a("el-checkbox-group"),v=a("el-radio"),$=a("el-radio-group"),x=a("el-button"),h=a("el-form"),R=a("u-container-layout");return U(),I(R,null,{default:t(()=>[b("div",T,[e(h,{ref_key:"ruleFormRef",ref:p,model:l,rules:F,"label-width":"120px",class:"demo-ruleForm",size:D.value},{default:t(()=>[e(r,{label:"\u6D3B\u52A8\u540D\u79F0",prop:"name"},{default:t(()=>[e(n,{modelValue:l.name,"onUpdate:modelValue":u[0]||(u[0]=o=>l.name=o)},null,8,["modelValue"])]),_:1}),e(r,{label:"\u6D3B\u52A8\u533A\u57DF",prop:"region"},{default:t(()=>[e(_,{modelValue:l.region,"onUpdate:modelValue":u[1]||(u[1]=o=>l.region=o),placeholder:"\u6D3B\u52A8\u533A\u57DF"},{default:t(()=>[e(m,{label:"\u533A\u57DF1",value:"\u4E0A\u6D77"}),e(m,{label:"\u533A\u57DF2",value:"\u5317\u4EAC"})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"\u5373\u65F6\u914D\u9001",required:""},{default:t(()=>[e(s,{span:11},{default:t(()=>[e(r,{prop:"date1"},{default:t(()=>[e(i,{modelValue:l.date1,"onUpdate:modelValue":u[2]||(u[2]=o=>l.date1=o),type:"date",placeholder:"\u9009\u62E9\u65F6\u95F4",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{class:"text-center",span:2,style:{"text-align":"center"}},{default:t(()=>[G]),_:1}),e(s,{span:11},{default:t(()=>[e(r,{prop:"date2"},{default:t(()=>[e(f,{modelValue:l.date2,"onUpdate:modelValue":u[3]||(u[3]=o=>l.date2=o),placeholder:"\u9009\u62E9\u65F6\u95F4",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,{label:"\u5373\u65F6\u914D\u9001",prop:"delivery"},{default:t(()=>[e(B,{modelValue:l.delivery,"onUpdate:modelValue":u[4]||(u[4]=o=>l.delivery=o)},null,8,["modelValue"])]),_:1}),e(r,{label:"\u6D3B\u52A8\u6027\u8D28",prop:"type"},{default:t(()=>[e(q,{modelValue:l.type,"onUpdate:modelValue":u[5]||(u[5]=o=>l.type=o)},{default:t(()=>[e(A,{label:"\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8",name:"type"}),e(A,{label:"\u5730\u63A8\u6D3B\u52A8",name:"type"}),e(A,{label:"\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8",name:"type"}),e(A,{label:"\u5355\u7EAF\u54C1\u724C\u66DD\u5149",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"\u7279\u6B8A\u8D44\u6E90",prop:"resource"},{default:t(()=>[e($,{modelValue:l.resource,"onUpdate:modelValue":u[6]||(u[6]=o=>l.resource=o)},{default:t(()=>[e(v,{label:"\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"}),e(v,{label:"\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"\u4E0A\u4F20\u56FE\u7247",prop:"img"},{default:t(()=>[e(S,{modelValue:l.img,"onUpdate:modelValue":u[7]||(u[7]=o=>l.img=o)},null,8,["modelValue"])]),_:1}),e(r,{label:"\u5907\u6CE8",prop:"desc"},{default:t(()=>[e(n,{modelValue:l.desc,"onUpdate:modelValue":u[8]||(u[8]=o=>l.desc=o),type:"textarea"},null,8,["modelValue"])]),_:1}),e(r,null,{default:t(()=>[e(x,{type:"primary",onClick:u[9]||(u[9]=o=>c(p.value))},{default:t(()=>[k("\u7ACB\u5373\u521B\u5EFA")]),_:1}),e(x,{onClick:u[10]||(u[10]=o=>V(p.value))},{default:t(()=>[k("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model","rules","size"])])]),_:1})}}});export{K as default};
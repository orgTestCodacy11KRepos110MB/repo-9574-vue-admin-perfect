import{E as k}from"./exceljs.min.2c2604a6.js";const h=(a,n=10)=>(a==null?n=10:a.toString().charCodeAt(0)>255?n=a.toString().length*2:n=a.toString().length,n),g=async({column:a,data:n,filename:s,autoWidth:u,format:c})=>{const e=new k.Workbook;e.creator="Me",e.title=s,e.created=new Date,e.modified=new Date;const i=e.addWorksheet(s),l=[];a.forEach((o,t)=>{const w={header:o.label,key:o.name,width:null};if(u){const d=[h(o.label)];n.forEach(f=>{const x=f[o.name]||"";x&&d.push(h(x))}),w.width=Math.max(...d)+5}l.push(w)}),i.columns=l,i.addRows(n);const b=c==="xlsx"?await e.xlsx.writeBuffer():await e.csv.writeBuffer(),r=new Blob([b],{type:"application/octet-binary"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(r,s+`.${c}`);else{const o=document.createElement("a");o.href=window.URL.createObjectURL(r),o.download=s+`.${c}`,o.click(),window.URL.revokeObjectURL(o.href)}};function E(a,n){const{color:s,fontSize:u,horizontal:c,bold:e}=n||{};a.fill={type:"pattern",pattern:"solid",fgColor:{argb:s}},a.font={bold:e!=null?e:!0,size:u!=null?u:11,color:{argb:"ff0000"}},a.alignment={vertical:"middle",wrapText:!0,horizontal:c!=null?c:"left"}}const R=async({column:a,data:n,filename:s,autoWidth:u,format:c})=>{const e=new k.Workbook;e.creator="Me",e.title=s,e.created=new Date,e.modified=new Date;const i=e.addWorksheet(s),l=[];a.forEach((t,w)=>{const d={header:t.label,key:t.name,width:null};if(u){const f=[h(t.label)];n.forEach(x=>{const p=x[t.name]||"";p&&f.push(h(p))}),d.width=Math.max(...f)+5}l.push(d)}),i.columns=l,i.addRows(n),i.getRow(1).eachCell(t=>E(t,{color:"dff8ff",fontSize:12,horizontal:"left"}));const r=c==="xlsx"?await e.xlsx.writeBuffer():await e.csv.writeBuffer(),o=new Blob([r],{type:"application/octet-binary"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(o,s+`.${c}`);else{const t=document.createElement("a");t.href=window.URL.createObjectURL(o),t.download=s+`.${c}`,t.click(),window.URL.revokeObjectURL(t.href)}},v=({column:a,data:n,filename:s,autoWidth:u})=>{const c=new k.Workbook,e=c.addWorksheet("sheet1");e.getRow(1).values=["\u5E8F\u53F7","\u65E5\u671F","\u5730\u5740","\u914D\u9001\u6D88\u606F",,,],e.getRow(2).values=["\u5E8F\u53F7","\u65E5\u671F","\u5730\u5740","\u7701\u4EFD","\u57CE\u5E02","\u90AE\u7F16"];const i=[];a.forEach((l,b)=>{if(l.children)l.children.forEach(r=>{const o={key:r.name,width:null},t=[h(r.label)];n.forEach(w=>{const d=w[r.name]||"";d&&t.push(h(d))}),o.width=Math.max(...t)+5,i.push(o)});else{const r={key:l.name,width:null},o=[h(l.label)];n.forEach(t=>{const w=t[l.name]||"";w&&o.push(h(w))}),r.width=Math.max(...o)+5,i.push(r)}}),e.columns=i,e.addRows(n),e.mergeCells("D1:F1"),e.mergeCells("A1:A2"),e.mergeCells("B1:B2"),e.mergeCells("C1:C2"),c.xlsx.writeBuffer().then(l=>{const b=new Blob([l,{type:"application/vnd.ms-excel"}]);if(window.navigator.msSaveOrOpenBlob)navigator.msSaveBlob(b,s+".xlsx");else{const r=document.createElement("a");r.href=window.URL.createObjectURL(b),r.download=s+".xlsx",r.click(),window.URL.revokeObjectURL(r.href)}})};export{v as a,R as b,g as e};
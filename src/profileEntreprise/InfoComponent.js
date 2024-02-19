import React from "react";
export default function InfoComponent({icone,text,isclickable,data}){
return <div style={{display:"flex",alignItems:"center",gap:10,padding:"1rem",borderBottom:"1px solid gainsboro"}}>
{icone}{text}<span style={{color:"blue"}}>{data?data:''}</span>
</div>
}
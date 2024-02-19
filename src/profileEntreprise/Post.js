import React from "react";
import Avatar from "antd/es/avatar/avatar";
import "./css.css";
export default function Post({data,info}){
    console.log(data,info)
    let comment=data.comment==null?"":data.comment;
    let compom=comment;
    if(comment.length>80){
        compom=comment.slice(0,80)
    }
    return <div style={{display:"flex",flexDirection:"column",width:"256px",height:"301px",border:"solid gainsboro 1px",borderRadius:"5px",}} className="shadow">

<div style={{display:"flex",gap:10,alignItems:"center",padding:"0.5rem",height:"10%"}}>
<div style={{display:"flex",gap:10,alignItems:"center"}}><Avatar src={"http://localhost:8080/image/"+info.image.id} /></div>
<div><p style={{margin:0}}>{info.nom}</p><p style={{fontSize:"10px",margin:0}}>{data.date}</p><p style={{fontSize:"10px",margin:0}}>{info.responsable.postdetravaille}</p></div>

</div>

<div style={{display:"flex",height:"60%",width:"100%",borderRadius:"5px"}}>
<img style={{objectFit:"contain",height:"100%",width:"100%",borderRadius:"5px"}} src="http://localhost:8080/image/4"/>
</div>

<div style={{height:"30%",padding:"0.5rem"}}>
<p>{compom}<a href="#" style={{textDecoration:"none"}}>{comment.length>80?" see more":""}</a></p>
</div>

    </div>
}
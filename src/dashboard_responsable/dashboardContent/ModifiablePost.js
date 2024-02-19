import React from "react";
import Avatar from "antd/es/avatar/avatar";
import {IoIosRemoveCircleOutline} from "react-icons/io";
import axios from "axios";

export default function ModifiablePoste({data}){


    
    let comment=data.comment==null?"":data.comment;
let compom=comment;
if(comment.length>80){
    compom=comment.slice(0,80)
}

const deletse=()=>{
axios.get("http://localhost:8080/post/delete/"+data.id).then((response)=>{console.log(response.data)});
}


    return <div style={{display:"flex",flexDirection:"column",width:"256px",height:"301px",border:"solid gainsboro 1px",borderRadius:"5px",}} className="shadow">
<div style={{height:"10%",display:"flex",justifyContent:"space-between",padding:"0.5rem"}}>

<div style={{display:"flex",gap:10,alignItems:"center"}}>
<div style={{display:"flex",gap:10,alignItems:"center"}}><Avatar src="http://localhost:8080/image/4"/></div>
<div><p style={{margin:0}}>shimano</p><p style={{fontSize:"10px",margin:0}}>respnsable comerciale</p><p style={{fontSize:"10px",margin:0}}>12/02/2022</p></div>
</div>

<div>
<IoIosRemoveCircleOutline onClick={()=>{ deletse() }} color="red" size={20}/> 
</div>

</div>

<div style={{height:"30%",padding:"0.5rem"}}>
<p style={{fontSize:"13px"}}>{compom}<a href="#" style={{textDecoration:"none"}}>{comment.length>80?" see more":""}</a></p>
</div>

<div style={{display:"flex",height:"60%",width:"100%",borderRadius:"5px"}}>
<img style={{objectFit:"contain",height:"100%",width:"100%",borderRadius:"5px"}} src={"http://localhost:8080/image/"+2} />
</div>



    </div>
}
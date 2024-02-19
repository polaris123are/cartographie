import { Avatar } from "antd";
import {Button} from "antd";
import React, { useEffect, useState } from "react";
import NewPost from "./NewPost";
import axios from "axios";
export default function ResponsableInformation({userId}){

    const [info,setinfo]=useState();
    const [loading,setloading]=useState(false);
    useEffect(()=>{
        setloading(false)
axios.get("http://localhost:8080/get/"+userId).then((response)=>{
    setinfo(response.data);
    setloading(true);
})
    },[])

    return loading && <div style={{border:"1px solid gainsboro",borderRadius:"5px",backgroundColor:"white",height:"600px",padding:"1rem",position:"relative"}}>
<div style={{borderBottom:"1px solid gainsboro",display:"flex",flexDirection:"column",alignItems:"center",padding:"1rem"}}>
<Avatar  src={"http://localhost:8080/image/4"} size={100}/>
<div style={{fontSize:"30px"}}>{info.fullName}</div>
<div style={{fontSize:"12px",width:"300px",marginTop:10,height:"100px",wordBreak:"break-word",textAlign:"center"}}>{info.description}</div>
</div>



<div style={{borderBottom:"1px solid gainsboro",fontSize:"13px"}}>
<div style={{fontSize:"12px",fontWeight:1,margin:5}}><b>Contact information</b></div>
<div style={{margin:5}}><span><b>numero de telephone :</b></span><span style={{color:"#7ba5b6"}}>{info.username}</span></div>
<div style={{margin:5}}><span><b>gmail :</b></span><span style={{color:"#7ba5b6"}}>{info.gmail}</span></div>
<div style={{margin:5}}><span><b>adresse :</b></span><span style={{color:"#7ba5b6"}}>{info.adresse}</span></div>
<div style={{margin:5}}><span><b>date de naissance :</b></span><span style={{color:"#7ba5b6"}}>{info.datedenaissance}</span></div>
<div style={{margin:5}}><span><b>post de travaille :</b></span><span style={{color:"#7ba5b6"}}>{info.postdetravaille}</span></div>   
</div>

<div style={{borderBottom:"1px solid gainsboro",fontSize:"13px"}}>
<div> 
<div style={{fontSize:"12px",fontWeight:1,margin:5}}><b>Acount Information</b></div>
<div style={{margin:5}}><span><b>username :</b></span><span style={{color:"#7ba5b6"}}>{info.username}</span></div>
<div style={{margin:5}}><span><b>password :</b></span><span style={{color:"#7ba5b6"}}>{info.password}</span></div>
<div style={{margin:5}}><span><b>account creation :</b></span><span style={{color:"#7ba5b6"}}>{info.username}</span></div>
</div>
</div> 
<div style={{width:"95%",bottom:5,position:"absolute"}}><Button type="primary" style={{width:"100%"}}>
    Modify
</Button></div>

   
   
    </div>

}
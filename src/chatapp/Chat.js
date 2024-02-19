import { Avatar } from "antd";
import React from "react";
export default function Chat({message,date,position}){
    var element;
    if(position=="left"){
       element= <div style={{display:"flex",gap:5,fontsize:"12px",justifyContent:position=="flex-start",alignItems:"center"}}>
       <div style={{display:"inline",backgroundColor:"#5e60f4",borderRadius:"5px 5px 5px 0px",padding:"0.5rem",color:"white",margin:"5px"}}>{message}</div>
         <div style={{color:"gainsboro"}}>{date}</div>
         </div>
    }else{
        element=<div style={{display:"flex",gap:5,fontsize:"12px",justifyContent:"flex-end",alignItems:"center"}}>
        <div style={{color:"gainsboro"}}>{date}</div>
        <div style={{display:"inline",backgroundColor:"#f5f9fc",borderRadius:"5px 5px 5px 0px",padding:"0.5rem",color:"black",margin:"5px"}}>{message}</div>
        </div>
    }
    return <div>{element}</div>
}
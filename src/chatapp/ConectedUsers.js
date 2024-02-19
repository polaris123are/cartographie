import React  from "react";
import User from "./User";

export default function ConectedUsers({connectesusers}){
    return <div style={{borderBottom:"1px solid gainsboro",padding:"1rem"}}>
<div style={{fontSize:"12px"}}><b>Active Users:</b></div>
    <div style={{display:"flex",padding:"1rem 0 1rem 0",gap:10}}>
        {connectesusers.map((element)=><User user={element.id}/>)}


    </div>

    </div>
}
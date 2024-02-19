import { Avatar } from "antd";
import React from "react";
export default function Headermessage({user,username}){
    return <div style={{padding:"0.5rem",display:"flex",alignItems:"center",gap:5,borderBottom:"1px solid gainsboro"}}>
        
        <div style={{border:"solid gainsboro 1px",borderRadius:"5px"}}><Avatar  shape="square" size="large" src={"https://xsgames.co/randomusers/avatar.php?g=pixel&key="+user }/></div>
        <div style={{fontSize:"16px"}}><b>{username}</b></div>
    </div>
}
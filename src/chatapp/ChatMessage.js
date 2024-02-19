import { Avatar } from "antd";
import {Badge} from "antd";
import {React,useState } from "react";



export default function ChatMessage({setcurrentuser,id,username,lastmessage,unreadmessages,time,user}){
    const [show, setShow] = useState(true);
    
    return <div onclick={()=>{setcurrentuser(id)}} style={{display:"flex",gap:5,borderBottom:"1px solid gainsboro",padding:"1rem",position:"relative"}}>

<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><Avatar src={"https://xsgames.co/randomusers/avatar.php?g=pixel&key="+user }/></div>
<div style={{display:"flex",flexDirection:"column",gap:5}}>
    <div style={{fontSize:"12px"}}><b>{username}</b></div>
    <div style={{fontSize:"12px"}}>{lastmessage.length>20?lastmessage.substring(0, 20)+"...":lastmessage}</div>
</div>
<div style={{position:"absolute",right:5,fontSize:"10px"}}>{time}</div>
<div style={{position:"absolute",right:10,top:26}}><Badge count={show ? unreadmessages : 0} showZero color='#faad14' />
</div>


    </div>
}
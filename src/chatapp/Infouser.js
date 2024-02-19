import { Avatar } from "antd";
import React from "react";
import { Badge} from 'antd';
export default function Infouser(){
    return <div style={{display:"flex",flexDirection:"column",borderBottom:"1px solid gainsboro",justifyContent:"center",alignItems:"center",padding:"1rem"}}>
    <div style={{position:"relative"}}> 
    
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{border:"1px solid gainsboro"}}  size={100}/>
        <div style={{position:"absolute",bottom:0,right:0}}><Badge  color={"green"}  /></div>
        
    </div>   
   
        <p style={{fontSize:"17px"}}><b>Adam Maradona</b></p>
    </div>
}
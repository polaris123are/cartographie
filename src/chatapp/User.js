import React  from "react";
import { Avatar,Badge } from 'antd';

export default function User({user}){
    return <div style={{position:"relative"}}>
 <Avatar  src={"https://xsgames.co/randomusers/avatar.php?g=pixel&key="+user }/>
 <div style={{position:"absolute",bottom:0,right:0}}><Badge color="green" /></div>
    </div>
    }
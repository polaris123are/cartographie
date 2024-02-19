import React from "react";
import randomcolor from "./RandomColor";
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Divider, Tooltip } from 'antd';

export default function Review({data}){
    return <div style={{padding:"1rem",width:"300px",height:"200px",border:"1px solid gainsboro",borderRadius:"2px"}}>
<div style={{display:"flex",gap:5,alignItems:"center"}}>
<Avatar
          style={{
            backgroundColor: randomcolor(),
          }}
        >
          { data.user.username[0].toUpperCase()}
        </Avatar>
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
          <div>{data.user.fullName}</div>
        <div style={{fontSize:12+"px"}}>{data.date}</div>
        </div>
        
</div>
<div style={{marginTop:20+"px"}}>
    "{data.description}"
</div>
    </div>
}
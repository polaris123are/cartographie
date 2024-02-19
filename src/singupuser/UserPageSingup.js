import React, { useState } from "react";
import { EyeInvisibleOutlined } from '@ant-design/icons';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Button, DatePicker, Input, Select, Tooltip  } from 'antd';
import {SiElasticsearch} from "react-icons/si";
import axios from "axios";
import { message } from 'antd';
import { useNavigate } from "react-router-dom";

export default function UserPageSingup(){
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const saving = () => {
      messageApi.open({
        key,
        type: 'loading',
        content: 'saving...',
      });}

     const savingend=()=>{
          messageApi.open({
              key,
              type: 'success',
              content: 'saved!',
              duration: 2,
            }); 
      }

    const [username1,setusername]=useState("");
    const [password1,setpassword]=useState("");
    const [numerodetelephone,setnumerodetelephone]=useState("");
    const [gmail,setgmail]=useState("");
    const [adresse,setadresse]=useState("");
    const [datedenaissance,setdatedenaissance]=useState("");
    const [postdetravaille,setpostdetravaille]=useState("");
    const [type,settype]=useState("");

    

    const add=()=>{
        axios.post("http://localhost:8080/singupuser",{
            username:username1,
            password:password1,
            type:type,
            numerodetelephone:numerodetelephone,
	          gmail:gmail,
	          adresse:adresse,
            datedenaissance:datedenaissance,
	          postdetravaille:postdetravaille,
        }).then((response)=>{console.log(response);savingend();
        if(response.data.type=="Company Responible"){
          navigate("/mainresponsable");
        }else if(response.data.type=="normale user"){
          navigate("/Login");
        }});
    }

  
console.log({username:username1,
  password:password1,
  type:type,
  numerodetelephone:numerodetelephone,
  gmail:gmail,
  adresse:adresse,
  datedenaissance:datedenaissance,
  postdetravaille:postdetravaille,})


    return <div style={{margin:"0 auto",width:"800px",height:"100vh",display:"flex",justifyContent:"center",flexDirection:"column",color:"white",fontSize:"14px"}}>
     <div style={{position:"absolute",top:0}}>{contextHolder}</div>
<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#081225",padding:"1rem",borderRadius:"5px"}}>
<div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:5}}>
<SiElasticsearch size={45} color="#ffff00"/>
<div style={{color:"#ffff00",fontSize:"13px"}}>Company Search</div>
</div>
<div style={{display:"flex",width:"100%",gap:10,justifyContent:"center"}}>
<div style={{flexBasis:"40%"}}><p>username:</p>
<Input
      onChange={(value)=>setusername(value.target.value)}
      placeholder="Enter your username"
      prefix={<UserOutlined className="site-form-item-icon" />}
      suffix={
        <Tooltip title="Extra information">
          <InfoCircleOutlined
            style={{
              color: 'rgba(0,0,0,.45)',
            }}
          />
        </Tooltip>
      }
    />
<p>Password:</p>
<Input.Password  onChange={(value)=>setpassword(value.target.value)} placeholder="input password" />

<p>numero de telephone:</p>
<Input placeholder="Basic usage" onChange={(value)=>setnumerodetelephone(value.target.value)} />
<p>gmail:</p>
<Input placeholder="Basic usage" onChange={(value)=>setgmail(value.target.value)} />
</div>
<div style={{flexBasis:"40%"}}>
<p>adresse:</p>
<Input placeholder="Basic usage" onChange={(value)=>setadresse(value.target.value)} />
<p>datedenaissance:</p>
<DatePicker style={{width:"100%"}} onChange={(date, dateString)=>setdatedenaissance(dateString)}/>
<p>Type User:</p>
<Select style={{width:"100%"}} options={[{value:"normale user",label:"normale user"},{value:"Company Responible",label:"Company Responible"}]} onChange={(value)=>settype(value)} />
<p>post de travaille:</p>
{type=="Company Responible"?<div><Input placeholder="Basic usage" onChange={(value)=>setpostdetravaille(value.target.value)} /></div>:<div style={{backgroundColor:"white",borderRadius:"5px"}}><Input placeholder="Basic usage" onChange={(value)=>setpostdetravaille(value.target.value)} disabled/></div>}

</div>
</div>
<div style={{margin:"1rem auto"}}><Button onClick={()=>{saving();add()}}>singup</Button></div>
</div>
</div>

}
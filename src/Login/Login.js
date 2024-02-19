import { Button, Input } from "antd";
import React from "react";
import {SiElasticsearch} from "react-icons/si";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  Space } from 'antd';
import axios from "axios";

export default function Login(){
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const navigate = useNavigate();
    const [loadings, setLoadings] = useState([]);
    const [password, setpassword] = useState("");
    const [username, setusername] = useState("");

    const login=()=>{
      enterLoading(0)
  axios.post("http://localhost:8080/login",{username:username,password:password}).then((response)=>{
    if(response.data.type=="Company Responible"){
      navigate("/mainresponsable/"+response.data.id);
    }else if(response.data.type=="normale user"){
      navigate("/dashboard/"+response.data.id);
    }

  })
}
    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = true;
          return newLoadings;
        });}

    return <div style={{width:1000+"px",margin:"0 auto",marginTop:10,display:"flex",gap:10,height:"100vh",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:0}}>
<div style={{backgroundColor:"#081225",width:"400px",height:"500px",padding:"0.5rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:"5px",gap:10}}>

<div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:5}}>
<SiElasticsearch size={45} color="#ffff00"/>
<div style={{color:"#ffff00",fontSize:"13px"}}>Company Search</div>
</div>
<div style={{width:"73%",color:"white",fontSize:"14px"}}>username:</div>
<div style={{width:"73%"}}><Input width={200}  onChange={(e)=>setusername(e.target.value)}/></div>
<div style={{width:"73%",color:"white",fontSize:"14px"}}>password:</div>
<Space direction="horizontal">
        <Input.Password
          placeholder="input password"
          visibilityToggle={{
            visible: passwordVisible,
            onVisibleChange: setPasswordVisible,
          }}
          onChange={(e)=>setpassword(e.target.value)}
        />
        <Button
          style={{
            width: 80,
          }}
          onClick={() => setPasswordVisible((prevState) => !prevState)}
        >
          {passwordVisible ? 'Hide' : 'Show'}
        </Button>
      </Space>
<div><Button  loading={loadings[0]} onClick={login}>
          Login
        </Button></div>
</div>
    </div>
}
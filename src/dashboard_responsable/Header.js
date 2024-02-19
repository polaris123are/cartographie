import { Avatar } from "antd";
import React, { useState } from "react";
import {AiFillCaretDown} from "react-icons/ai";
import randomcolor from "../profileEntreprise/RandomColor";
import {IoTriangleSharp} from "react-icons/io5";
import {PiTriangleThin} from "react-icons/pi";
import { keyframes } from "styled-components";
import {SiElasticsearch} from "react-icons/si";


export default function Header(){

    const [current,setcurrent]=useState(0);

    return <div style={{display:"flex",justifyContent:"space-between",padding:"1rem",backgroundColor:"#081225",height:"5vh",alignItems:"center",borderBottom:"solid gainsboro 1px"}}>
<div style={{display:"flex",color:"white",gap:5,alignItems:"center"}}>
    <SiElasticsearch size={20} color="yellow"/>
    <div><b></b>Company Search</div>
</div>

<div style={{display:"flex",justifyContent:"space-between",padding:"1rem",color:"#565b68",fontSize:"14px",position:"relative"}}>
<div style={{width:"150px",textAlign:"center",color:current==0?"white":"inherit",}} onClick={()=>setcurrent(0)}>
Overvue
</div>
<div style={{width:"150px",textAlign:"center",color:current==1?"white":"inherit"}}  onClick={()=>setcurrent(1)}>
Personal Information
</div>

<div style={{width:"150px",textAlign:"center",color:current==2?"white":"inherit"}}  onClick={()=>setcurrent(2)}>
Company Information
</div>

<div style={{width:"150px",textAlign:"center",color:current==3?"white":"inherit"}}  onClick={()=>setcurrent(3)}>
Setting
</div>

</div>

<div style={{display:"flex",gap:5,borderRadius:"20px",width:"15%",fontSize:12,padding:"0.5rem",backgroundColor:"#1c2536",alignItems:"center",justifyContent:"space-between"}}>

<div style={{display:"flex",gap:5}}>
<Avatar
          style={{
            backgroundColor: randomcolor(),
          }}
        >
          {"A"}
        </Avatar>
<div style={{color:"white"}}>
<div><b>abdelilah zaidane</b></div>
<div style={{color:"#565b68"}}>responsable de Comerce</div>
</div>
    </div>
    <div><IoTriangleSharp color="white" size={10}/></div>

</div>



    </div>
}
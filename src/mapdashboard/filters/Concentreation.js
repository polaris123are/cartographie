import { Button, Select } from "antd";
import axios from "axios";
import { useState } from "react";

import React, { useEffect } from "react";
export default function Concentreation({citys,concentratio,sethide,hide}){
    const [loading,setloading]=useState(false);
    const [optionofactivite,setopstionactivite]=useState([]);
    const [city,setcity]=useState("");//it may be a problem here
    const [Activiter,setactivite]=useState("");

    const handleChangetypeofactivite=(e)=>{
        setactivite(e);
        console.log("iam from concentration",e);
      }

      const handleChangecity=(e)=>{
        setcity(e);
        console.log("iam from concentration",e);
      }
    
    
    useEffect(()=>{
        setloading(false);
        axios.get("http://localhost:8080/typeactivite").then((response)=>{
          var option=response.data.map(element=>({value:element.id,label:element.nome}))
          setopstionactivite(option)
  
          setloading(true)
      }) 
      

    },
      []);
    

    return loading && <div style={{border:"gainsboro 1px solid",padding:"0.4rem"}}>

    <div style={{margin:2,padding:"0.2rem",fontSize:13}}><b>concentration by activite</b></div>

     <div style={{margin:2,padding:"0.2rem",fontSize:13}}><b>city</b></div>
    <Select  options={citys} onChange={handleChangecity}  style={{fontSize:13,width:"100%"}} />
     <div style={{margin:2,padding:"0.2rem",fontSize:13}}><b>activiter</b></div>
     <Select options={optionofactivite} onChange={handleChangetypeofactivite}  style={{fontSize:13,width:"100%"}}/>
    <Button style={{fontSize:13,width:"100%",marginTop:10}} type="primary" onClick={()=>{concentratio(city,Activiter);sethide(!hide)}}>submit</Button>
    </div>
}
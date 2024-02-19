import React, { useEffect, useState } from "react";
import { Progress, Rate } from 'antd';
import axios from "axios";
export default function Ratingdetailles({data}){

    const [rates,setrates]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8080/Ratingdetail/'+data).then(rates)
    },[])

    
    
    return <div style={{display:"flex"}}>
     <div style={{padding:"2rem",flexBasis:"50%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
  
    <div style={{width:"100%",display:"flex",gap:10}}>5 <Progress percent={100} status="active" showInfo={false} strokeColor={"gold"}  /></div>
    <div style={{width:"100%",display:"flex",gap:10}}>4 <Progress percent={50} status="active" showInfo={false} strokeColor={"gold"}  /></div>
    <div style={{width:"100%",display:"flex",gap:10}}>3 <Progress percent={25} status="active" showInfo={false} strokeColor={"gold"}  /></div>
    <div style={{width:"100%",display:"flex",gap:10}}>2 <Progress percent={15} status="active" showInfo={false} strokeColor={"gold"}  /></div>
    <div style={{width:"100%",display:"flex",gap:10}}>1 <Progress percent={10} status="active" showInfo={false} strokeColor={"gold"}  /></div>
    <div style={{width:"100%",display:"flex",gap:10}}>0<Progress percent={0} status="active" showInfo={false} strokeColor={"gold"}  /></div>
    </div>   
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",flexBasis:"50%",justifyContent:"center"}}>
        <p style={{fontSize:100,margin:0}}>4.5</p>
        <Rate defaultValue={5}/>
    </div>
    
    </div>
}

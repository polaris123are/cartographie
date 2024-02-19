import React from "react";
import { Button } from "antd";
import { useState } from "react";
import Mapaddorganisation from "../map/Mapaddorganisation";

export default function MyModular({setIsModalOpen,isModalOpen,data,setdata}){
    const [position,setpostion]=useState([34.020882,-6.841650])
    console.log(position);
    return <div style={{height:"100vh",width:"100vw",flexDirection:"column",gap:10,borderRadius:"10px",justifyContent:"center",alignItems:"center",zIndex:100,position:"absolute",display:isModalOpen?"flex":"none",padding:"1rem"}} className="ba">
    <div style={{height:"600px",width:"1000px",flexDirection:"column",gap:5,justifyContent:"center",alignItems:"center",display:isModalOpen?"flex":"none",padding:"1rem",backgroundColor:"white"}}>
          <Mapaddorganisation position={position} setpostion={setpostion} />
          <div style={{width:"100%",display:"flex",gap:5,justifyContent:"flex-end"}}><Button onClick={()=>setIsModalOpen(false)}>Annuler</Button><Button  onClick={()=>{setdata({...data,position:position});setIsModalOpen(false)}} type="primary">Save</Button></div>
          </div> 
          </div> 
}
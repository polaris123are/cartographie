import React, { useState } from "react";
import Input from "antd/es/input/Input";
import { Button } from "antd";
import Mapaddorganisation from "../../map/Mapaddorganisation";
import "../../ajouterorganisation/css.css";
import axios from "axios";
import { message } from 'antd';
const { TextArea } = Input;

export default function MapModifyInfo({isModalOpen,setIsModalOpen,data}){
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
       

    const [ville,setville]=useState(data.ville)
    const [adressdetaill,setadressdetaill]=useState(data.adressdetail)
    const [street,setstreet]=useState(data.street)
    
    const Adresse={
        id:data.id,
        ville:ville,
        adressdetail:adressdetaill,
        street:street
    }

    const save=()=>{
        saving();
axios.post("http://localhost:8080/update/adress",Adresse).then((response)=>{
    savingend();
});
    }

    const [position,setposition]=useState([34.020882,-6.841650]);
    console.log(position);
    
    return <div style={{height:"100vh",width:"100vw",flexDirection:"column",left:0,gap:10,borderRadius:"10px",justifyContent:"center",alignItems:"center",zIndex:100,position:"absolute",display:isModalOpen?"flex":"none",padding:"1rem",top:0}} className="ba">
   <div style={{position:"absolute",top:0}}>{contextHolder}</div>
   <div style={{display:"flex",flexDirection:"column",height:"600px",width:"1000px",padding:"1rem",backgroundColor:"white",gap:10}}>
    <div style={{display:"flex",gap:10}}>
    <div style={{flexBasis:"60%",height:"550px",display:"flex",flexDirection:"column",gap:10}}>
    <h1>Adress Information</h1>
     <div><p style={{margin:5,fontSize:"14px"}}>ville</p>
        <Input value={ville} onChange={(e)=>{setville(e.target.value)}}/></div>
        <div><p style={{margin:5,fontSize:"14px"}}>region</p>
        <Input value={"marrackech-casa"}/></div>
        <div><p style={{margin:5,fontSize:"14px"}}>pays</p>
        <Input value={"maroc"} /></div>
        <div><p style={{margin:5,fontSize:"14px"}}>rue</p>
        <Input value={street} onChange={(e)=>{setstreet(e.target.value)}}/>
       </div>
       <div><p style={{margin:5,fontSize:"14px"}}>detaille adress</p>
        <TextArea value={adressdetaill} onChange={(e)=>{setadressdetaill(e.target.value)}} placeholder="Controlled autosize"
        autoSize={{ minRows: 5, maxRows:6}} aria-multiline={5}/>
       </div>
        
      
   </div>
   <div style={{flexBasis:"40%",height:"550px"}}><Mapaddorganisation position={position} setpostion={setposition} /></div>
          
          </div> 
          <div style={{width:"100%",display:"flex",gap:5,justifyContent:"flex-end"}}><Button onClick={()=>setIsModalOpen(false)}>Annuler</Button><Button  onClick={()=>{setposition(position);save();setIsModalOpen(false)}} type="primary">Save</Button></div>
    </div>
   
          </div>

         
}
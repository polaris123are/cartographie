import React, { useEffect } from "react";
import EntrepriseInformation from "./EntrepriseInformation";
import ResponsableInformation from "./ResponsableInformation";
import { useState } from "react";
import {useParams } from 'react-router-dom';
import axios from "axios";
import NotFoundgoAddnew from "./NotFoundgoAddnew";
import Base from "../../Basepage/Base";
export default function Responsablemain(){ 
    
    let{id}=useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

    const [loading,setloading]=useState(false);
  const [data,setdata]=useState([]);

console.log("data",data);
    useEffect(()=>{
    axios.get("http://localhost:8080/Entreprise/accountEntreprise/"+id).then((response)=>{setdata(response.data);console.log(response.data);setloading(true);
  })
    },[])

    

    return loading && <div style={{width:1200+"px",margin:"0 auto",marginTop:10,backgroundColor:"#f3f2f0",display:"flex",gap:10}}>
    <div style={{flexBasis:"60%"}}>{data.id==-1?<NotFoundgoAddnew showModal={showModal}/>:<EntrepriseInformation data={data}/>}</div>
    <div style={{flexBasis:"40%"}}><ResponsableInformation userId={id}/></div>
    <Base setdataa={setdata} userid={id} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}/>
    </div>
}
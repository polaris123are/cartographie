import React, { useEffect, useState } from "react";
import Entreprise from "./Enreprise";
import axios from "axios";
export default function ListeOfEntreprise({data,setactivelement,activelement,showModal,setdatacurrent,id}){
    const [savedentrepriseid,setsavedentreprisevaluesid]=useState([]);
    const [loading,setloading]=useState(false);
    useEffect(()=>{axios.get('http://localhost:8080/idsaved/1').then((response)=>{setsavedentreprisevaluesid(response.data);setloading(true)})
},[])
console.log(savedentrepriseid);
    var listtofentreprise=data.map(element=><Entreprise setdatacurrent={setdatacurrent} key={element.id} activelement={activelement} data={element}  setactivelement={setactivelement} id={id} issaved={savedentrepriseid.includes(element.id)} showModalof={showModal}/>)
    return loading && <div style={{width:"450px",height:"100vh",padding:"1rem",overflowY:"scroll"}}>
{listtofentreprise}   
 </div>
}
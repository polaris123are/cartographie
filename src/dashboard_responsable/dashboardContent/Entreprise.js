import React, { useEffect } from "react";
import Modal from "antd/es/modal/Modal";
import Input from "antd/es/input/Input";
import { DatePicker, Select } from "antd";
import { useState } from "react";
import axios from "axios";
import { message } from 'antd';


export default function Entreprise({data,showmodifyinformation,handleCancel,isopen}){

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
       
    const [nom,setnom]=useState(data.nom)
    const [CNSS,setCNSS]=useState(data.CNSS)
    const [patente,setpatente]=useState(data.patente);
    const [ice,setice]=useState(data.ice)
    const [typeactivite,setypeactivite]=useState(data.typeactivite)
    const [typeEntreprise,setypeEntreprise]=useState(data.typeEntreprise)
    const [datecreation,setdatecreation]=useState(data.datecreation)
    const [nbrmployes,setnbrmployes]=useState(data.nbrmployes)
    const [regitredecomerce,setregitredecomerce]=useState(data.regitredecomerce)
    const [If,setif]=useState(data.if);


    const [optionofentreprise,setopstionentreprise]=useState();
    const [optionofactivite,setopstionactivite]=useState();

    useEffect(()=>{
        axios.get("http://localhost:8080/typeactivite").then((response)=>{
            var option=response.data.map(element=>({value:element.id,label:element.nome}))
            setopstionactivite(option);
          });
          
        axios.get("http://localhost:8080/typetreprise").then((response)=>{
                var option=response.data.map(element=>({value:element.id,label:element.nome}))
                setopstionentreprise(option);
          })
    },[])
  

    
    const entreprise={
        ...data,
        nom:nom,
        patente:patente,
        ice:ice,
        typeactivite:typeactivite,
        typeEntreprise:typeEntreprise,
        datecreation:datecreation,
        nbrmployes:nbrmployes,
        regitredecomerce:regitredecomerce,
        if:If
    }
       

    const handleactiviter=(id)=>{
       const arr=optionofactivite.filter((element)=>element.value==id)
       const typeactiviter={id:arr[0].value,nome:arr[0].label};;
       console.log(typeactiviter)
       setypeactivite(typeactiviter);
       console.log(entreprise)
    }


    const handleentreprise=(id)=>{
        const arr=optionofentreprise.filter((element)=>element.value==id)
        const typeetreprise={id:arr[0].value,nome:arr[0].label};
        console.log(typeetreprise)
        console.log(entreprise)
        setypeEntreprise(typeetreprise);
    }

    const onChange = (date, dateString) => {
        setdatecreation(dateString)
        };
  

    const save=()=>{
        saving();
axios.post("http://localhost:8080/Entreprise/update/entreprise",entreprise).then((response)=>{
    savingend();
    handleCancel();
});
    }

    return <div>
        <Modal title="Basic Info" width={"800px"}  open={isopen} okText={"save"}  onOk={save} onCancel={handleCancel}>
            <div style={{height:"500px",overflowY:"scroll"}}>
            <div style={{position:"absolute",top:0}}>{contextHolder}</div>
            <h1>Basic Info</h1>
        <p style={{margin:5,color:"#7ba5b6"}}>denomination legale</p>
        <Input value={nom} onChange={(e)=>{setnom(e.target.value)}}/>
        <p style={{margin:5,color:"#7ba5b6"}}>Register de commerce</p>
        <Input value={regitredecomerce} onChange={(e)=>{setypeactivite(e.target.value)}}/>
        <p style={{margin:5,color:"#7ba5b6"}}>CNSS</p>
        <Input/>
        <p style={{margin:5,color:"#7ba5b6"}}>patente</p>
        <Input value={patente} onChange={(e)=>{setpatente(e.target.value)}}/>
        <p style={{margin:5,color:"#7ba5b6"}}>nombre des employer</p>
        <Input value={nbrmployes} onChange={(e)=>{setnbrmployes(e.target.value)}}/>
        <p style={{margin:5,color:"#7ba5b6"}}>IF(identifiant fiscal)</p>
        <Input value={If} onChange={(e)=>{setif(e.target.value)}}/>
        <p style={{margin:5,color:"#7ba5b6"}}>ICE</p>
        <Input value={ice} onChange={(e)=>{setice(e.target.value)}}/>
        <p style={{margin:5,color:"#7ba5b6"}}>type de l entreprise</p>
        <Select options={optionofentreprise} defaultValue={data.typeEntreprise.nome} onChange={(value)=>{handleentreprise(value)}} />
        <p style={{margin:5,color:"#7ba5b6"}}>date de creation </p>
        <DatePicker  onChange={onChange}/>
        <p style={{margin:5,color:"#7ba5b6"}}>Type Activite </p>
        <Select  options={optionofactivite} defaultValue={data.typeactivite.nome}  onChange={(value)=>{handleactiviter(value)}}/>
        </div>
       </Modal>
  
    </div>
}
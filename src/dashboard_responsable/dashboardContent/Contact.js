import React from "react";
import { Input } from "antd";
import { useState } from "react";
import { message } from 'antd';
import axios from "axios";
import {Modal} from "antd";

export default function Contact({data,isContactModalOpen,handleCancelContact}){


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
        const [courrier_electronique,setcourrier_electronique]=useState(data.courrier_electronique)
    const [telephone,settelephone]=useState(data.telephone)
    const [linkdin,setlinkdin]=useState(data.linkdin)
    const [siteWeb,setsiteWeb]=useState(data.siteWeb)
    
    const contact={
        id:data.id,
        courrier_electronique:courrier_electronique,
        telephone:telephone,
        linkdin:linkdin,
        siteWeb:siteWeb
    }
       

    

    const save=()=>{
        saving();
axios.post("http://localhost:8080/update/contact",contact).then((response)=>{
    savingend();
    handleCancelContact();
});
    }

return <Modal title="Basic Info" width={"800px"}  open={isContactModalOpen} okText={"save"}  onOk={save} onCancel={handleCancelContact}>
   
     <div style={{position:"absolute",top:0}}>{contextHolder}</div>
    <h1>Contact Information</h1>
        
    <p style={{margin:5,color:"#7ba5b6"}}>Courrier electronique</p>
    <Input value={data.courrier_electronique}   onChange={(e)=>{setcourrier_electronique(e.target.value)}} />
    <p style={{margin:5,color:"#7ba5b6"}}>Numero de Telephone </p>
    <Input value={data.telephone}  onChange={(e)=>{settelephone(e.target.value)}} />
    <p style={{margin:5,color:"#7ba5b6"}}>linkdin</p>
    <Input value={data.linkdin}  onChange={(e)=>{setlinkdin(e.target.value)}} />
    <p style={{margin:5,color:"#7ba5b6"}}>siteWeb </p>
    <Input value={data.siteWeb}  onChange={(e)=>{setsiteWeb(e.target.value)}} />
    
    </Modal>
}
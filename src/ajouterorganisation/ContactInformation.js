import React, { useEffect } from "react";
import Input from "antd/es/input/Input";
import { DatePicker} from "antd";
import { Button,Modal  } from "antd";
import { useState } from "react";
import "./css.css"

import MyModular from "./MyModular";
import axios from "axios";

export default function OrganiationInfo({setdata,data}){

const [isModalOpen, setIsModalOpen] = useState(false);





  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };

    return <div style={{width:"100%",hieght:"90vh",display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center",alignItems:"center"}}>
    
    <div style={{width:"45%"}}>
    <div><h3 style={{margin:"0"}}>contact Information :</h3>
    </div></div>
    <div style={{width:"45%"}}>
    </div>

    <div style={{width:"45%"}}>
    <p>Courrier electronique:</p>
    <Input placeholder="Basic usage" value={data.Courrierelectronique} onChange={(e)=>setdata({...data,Courrierelectronique:e.target.value})}/>
    </div>
    <div style={{width:"45%"}}>
    <p>Numero de Telephone:</p>
    <Input placeholder="Basic usage" value={data.NumerodeTelephone} onChange={(e)=>setdata({...data,NumerodeTelephone:e.target.value})}/>
    </div>
    

    <div style={{width:"45%"}}>
    <p>linkdin:</p>
    <Input placeholder="Basic usage" value={data.linkdin} onChange={(e)=>setdata({...data,linkdin:e.target.value})}/>
    </div>
    
    <div style={{width:"45%"}}>
    
    </div>
    
    <div style={{width:"45%"}}>
    <p>siteWeb:</p>
    <Input addonBefore="http://" addonAfter=".com" defaultValue={data.siteWeb} onChange={(e)=>setdata({...data,siteWeb:e.target.value})}/>
    </div>
    <div style={{width:"45%"}}>
    </div>

    <div style={{width:"45%"}}>
    <div><h3  style={{margin:"0"}}>Adress Information:</h3>
    </div></div>
    <div style={{width:"45%"}}>
    </div>

    

    <div style={{width:"45%"}}>
    <p>address:</p>
    <Input placeholder="Basic usage" value={data.address} onChange={(e)=>setdata({...data,address:e.target.value})}/>
    </div>

    <div style={{width:"45%"}}>
    <p>ville:</p>
    <Input placeholder="Basic usage" value={data.ville} onChange={(e)=>setdata({...data,ville:e.target.value})}/>
    </div>

    <div style={{width:"45%"}}>
    <p >street:</p>
    <Input placeholder="Basic usage" value={data.street} onChange={(e)=>setdata({...data,street:e.target.value})}/>
    </div>
    <div style={{width:"45%"}}>
    <p>Region:</p>
    <Input placeholder="Basic usage" value={data.region} onChange={(e)=>setdata({...data,region:e.target.value})}/>
    </div>

    <div style={{width:"90%"}}>
    <p>position:</p>
    <Button type="primary" onClick={showModal}>
        set position
      </Button>
     
    </div>
   
    <MyModular isModalOpen={isModalOpen} data={data} setdata={setdata} setIsModalOpen={setIsModalOpen}/>
  
      </div>

 

   
}
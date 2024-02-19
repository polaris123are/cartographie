import React, { useEffect, useState } from "react";
import { DatePicker,Select} from "antd";
import Input from "antd/es/input/Input";
import { Button } from "antd";
import axios from "axios";


export default function LegalInformation({setnumber,number,data,setdata}){
  
const [optionofentreprise,setopstionentreprise]=useState();
const [optionofactivite,setopstionactivite]=useState();
const [loading,setloading]=useState(true);

//put loading here
  useEffect(()=>{
    setloading(false);
    axios.get("http://localhost:8080/typeactivite").then((response)=>{
      var option=response.data.map(element=>({value:element.id,label:element.nome}))
      setopstionactivite(option)
  });
    axios.get("http://localhost:8080/typetreprise").then((response)=>{
      var option=response.data.map(element=>({value:element.id,label:element.nome}))
      setopstionentreprise(option)
    })  
    setloading(true);
  },[])

  


  const handleChangetypeofactivite=(e)=>{
    setdata({...data,Activite:e})
  }
  const handleChangetypeofentreprise=(e)=>{
    setdata({...data,type:e})
  }

    const onChange = (date, dateString) => {
      setdata({...data,date:dateString})
      };
    return loading && <div style={{width:"100%",hieght:"90%",display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center",alignItems:"center"}}>

    <div style={{width:"45%"}}>
    <div><h2  style={{margin:"0"}}>Legal Information:</h2>
    </div></div>
    <div style={{width:"45%"}}>
    </div>

    <div style={{width:"45%"}}>
    <p>Register de Comerce:</p>
    <Input placeholder="Basic usage" value={data.Regitredecomerce} onChange={(e)=>setdata({...data,Regitredecomerce:e.target.value})}/>
    </div>
    <div style={{width:"45%"}}>
    <p>IF(identifiant fiscal):</p>
    <Input placeholder="Basic usage" value={data.identifiant} onChange={(e)=>setdata({...data,identifiant:e.target.value})}/>
    </div>
    <div style={{width:"45%"}}>
    <p>CNSS:</p>
    <Input placeholder="Basic usage" value={data.CNSS} onChange={(e)=>setdata({...data,CNSS:e.target.value})} />
    </div>
    <div style={{width:"45%"}}>
    <p>ICE:</p>
    <Input placeholder="Basic usage" value={data.Ice} onChange={(e)=>setdata({...data,Ice:e.target.value})} />
    </div>
    <div style={{width:"45%"}}>
    <p>patente:</p>
    <Input placeholder="Basic usage" value={data.patente} onChange={(e)=>setdata({...data,patente:e.target.value})}/>
    </div>
    <div style={{width:"45%"}}>
    <p>type de l entreprise:</p>
    <Select
      defaultValue="lucy"
      style={{ width: "100%" }}
      onChange={handleChangetypeofentreprise}
      options={optionofentreprise}
    />
    </div>

    <div style={{width:"45%"}}>
    <p>denomination legale:</p>
    <Input placeholder="Basic usage" value={data.denomination} onChange={(e)=>setdata({...data,denomination:e.target.value})} />
    </div>

    <div style={{width:"45%"}}>
    <p>date de creation :</p>
    <DatePicker style={{width:"100%"}}   onChange={onChange} />
    </div>
    <div style={{width:"45%"}}>
    <p>nombre des employer:</p>
    <Input placeholder="Basic usage" value={data.nombreemploye} onChange={(e)=>setdata({...data,nombreemploye:e.target.value})}/>
    </div>
    <div style={{width:"45%"}}>
    <p>Type Activite</p>
    <Select
      defaultValue="lucy"
      style={{ width: "100%" }}
      onChange={handleChangetypeofactivite}
      options={optionofactivite}
    />
    </div>
</div>
    
   
    

}
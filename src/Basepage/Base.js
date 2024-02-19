import LegalInformation from "../ajouterorganisation/LegalInformation";
import Steps from "../steps/Steps";
import ContactInformation from "../ajouterorganisation/ContactInformation";
import { useState } from "react";
import { Button } from "antd";
import {Modal} from "antd";
import Financeorganisation from "../ajouterorganisation/Financeorganisation";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Base({open,onCancel,onOk,userid,setdataa}){
  const navigate=useNavigate();
    
    var initial_data={
        Regitredecomerce:"",
        identifiant:"", 
        CNSS:"", 
        patente:"", 
        Ice:"", 
        type:"",  
        denomination:"", 
        date:"", 
        nombreemploye:"", 
        Activite:"", 
        Courrierelectronique:"", 
        NumerodeTelephone:"", 
        linkdin:"", 
        siteWeb:"",
        address:"",
        position:"",
        ville:"",
        capitale:"",
        Tax:"",
        chiffre:"",
        image:"",
        street:"",
        region:"",
        account:userid,

    }
    

    const [data,setdata]=useState(initial_data);
   
    async function add() {
        axios.post("http://localhost:8080/ajouterEntreprise",{
          patente:data.patente,
          nom:data.denomination,
          nbrmployes:55,
          datecreation:data.date,
          typeactivite: 1,
          typeEntreprise: data.type,
          image: data.image,
          position: {
            lat: data.position[0],
            lng: data.position[1]
          },
          contact: {    
            linkdin: data.linkdin,
            siteWeb: data.siteWeb,
            courrier_electronique:data.Courrierelectronique,
            telephone: data.NumerodeTelephone
          },
          adress: {
            ville: data.ville,
            adressdetail:data.address,
            street:data.street
          },
          finance: {
            capitale: data.capitale,
            chiffredaffaire: [
              {
                sum: 500,
                date: data.date
              }
            ],
            taxprofessionel: data.Tax
          },
          if: data.identifiant,
          Regitredecomerce: data.Regitredecomerce,
          ice: data.Ice,
          region:data.region,
          account:data.account
        }).then((response)=>{onCancel();setdataa(response.data)})
       
    };

  
    const [number,setnumber]=useState(0);




   console.log(data)

    var tableofstepes=[{stepnumber:1, isactive:false, size:15,title:"legal information"},{stepnumber:2, isactive:false, size:15,title:"Contact information"},{stepnumber:3, isactive:false, size:15,title:"Finance information"}]
var tableofforms=[<LegalInformation setnumber={setnumber} number={number} data={data} setdata={setdata}/>,<ContactInformation setnumber={setnumber} number={number} data={data} setdata={setdata} />,<Financeorganisation setnumber={setnumber} number={number} data={data} setdata={setdata}/>]
var button;
if(number>=tableofforms.length-1){
    button=<Button onClick={()=>add()}>Finish</Button>
    }else{
        button= button=<Button onClick={()=>setnumber(number+1)} type="primary">Save & Continue</Button>  
    }

    
  return <div style={{margin:"0 auto",width:"1000px",height:"600px"}}>
        <div style={{width:"100%",height:"10%",display:"flex",alignItems:"center"}}>
        <Steps tableofsteps={tableofstepes} number={number}/>
        </div>
       <div style={{width:"100%",height:"75%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        {tableofforms[number]}
       </div>
       <hr style={{height: "1px", border: 0,borderTop:"1px solid gainsboro"}}/>
       <div style={{display:"flex",justifyContent:"space-between",width:"100%",height:"10%",alignItems:"center"}}>
       <Button onClick={()=>setnumber(0)} >Annuler</Button>
        {button}
       </div>
  </div>
   
}
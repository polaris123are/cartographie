import axios from "axios";
import React, { useEffect, useState } from "react";

import Input from "./FormCheckVille";
import { Button } from "antd";
import FormCheckVille from "./FormCheckVille";
import FilterSlider from "./FilterSlider";
import Concentreation from "./Concentreation";
export default function Filters({changedata,concentratio,sethide,hide}){

       
        const [filtersville,setfiltersville]=useState([]);
        const [filtersactiviter,setfiltersactivier]=useState([]);
        const [filterstypetreprise,setfilterstypetreprise]=useState([]);
        const [filterstreetName,setfilterstreetName]=useState([]);
        const [filterRating,setfilterRating]=useState([]);
        const [filterscapitale,setfiltercapitale]=useState(0);
        const [filternbremploye,setfilternbremploye]=useState(0);
        const [citys,setcitys]=useState([]);
        const [citysofconcentration,setcitysofconcentration]=useState([]);
        
        const myfilerform={
          ville:[],
          activite:[],
          typeofentreprise:[],
          streetname:[],
          rating:[],
          capitale:0,
          nombreemployes:0,
        }



        const [filterform,setfilterfom]=useState(myfilerform)
     

        
      
console.log(filterform)

useEffect(()=>{
  axios.get("http://localhost:8080/filtersville").then((response)=>{
      setfiltersville([response.data]);
      setcitys(response.data.data.map(element=>({value:element.number,label:element.content})));
      setcitysofconcentration(response.data.data.map(element=>({value:element.content,label:element.content})))
   });
},[])

useEffect(()=>{
  axios.get("http://localhost:8080/filterRating").then((response)=>{
    setfilterRating([response.data])
   });
},[])


useEffect(()=>{
  axios.get("http://localhost:8080/filterstypestreetname").then((response)=>{
    setfilterstreetName([response.data])
   });
},[])

useEffect(()=>{
   axios.get("http://localhost:8080/filtersactivite").then((response)=>{
    setfiltersactivier([response.data])
   });
},[])

useEffect(()=>{
   axios.get("http://localhost:8080/filterstypetreprise").then((response)=>{
    setfilterstypetreprise([response.data])
   });
},[])

useEffect(()=>{axios.post("http://localhost:8080/Entreprise/filter",filterform).then((response)=>{console.log(response.data);changedata(response.data)})},[filterform])

console.log(filtersville,filtersactiviter,filterstypetreprise,filterstreetName);

//ville change
const handleonchangeville=(mydata)=>{
  setfilterfom({...filterform,ville:[...filterform.ville,mydata]})
}

const handledeselectville=(mydata)=>{
  var data=filterform.ville.filter(element=>element!=mydata)
  setfilterfom({...filterform,ville:data})
}

//////////////////////////
//ville change
const handleonchangeactivite=(mydata)=>{
  setfilterfom({...filterform,activite:[...filterform.activite,mydata]})
}

const handledeselectactivite=(mydata)=>{
  var data=filterform.activite.filter(element=>element!=mydata)
  setfilterfom({...filterform,activite:data})
}
//////////////////////////
//ville change
const handleontypetreprise=(mydata)=>{
  setfilterfom({...filterform,typeofentreprise:[...filterform.typeofentreprise,mydata]})
}

const handledeselectentreprise=(mydata)=>{
  var data=filterform.typeofentreprise.filter(element=>element!=mydata)
  setfilterfom({...filterform,typeofentreprise:data})
}
//////////////////////////

const handledeselectstreetname=(mydata)=>{
  var data=filterform.streetname.filter(element=>element!=mydata)
  setfilterfom({...filterform,streetname:data})
}

const handledestreetname=(mydata)=>{
  setfilterfom({...filterform,streetname:[...filterform.streetname,mydata]})
}
/////////////////////////

const handledeselectRating=(mydata)=>{
  var data=filterform.rating.filter(element=>element!=mydata)
  setfilterfom({...filterform,rating:data})
}

const handledeRating=(mydata)=>{
  setfilterfom({...filterform,rating:[...filterform.rating,mydata]})
}
/////////////////////////
const handledenombreofemploye=(mydata)=>{
  setfilterfom({...filterform,nombreemployes:mydata})
}

const handledecapitale=(mydata)=>{
  setfilterfom({...filterform,capitale:mydata})
}
/////////////////////////

  


    return <div style={{overflowY:"scroll",width:"20%",height:"100vh",display:"flex",border:"1px solid gainsboro"}}>


<div style={{width:"100%",padding:"0.5rem"}}>
<div style={{border:"solid gainsboro 1px",borderRadius:"5px 5px 0 0",padding:"1rem",backgroundColor:"#0000ff",color:"white"}}><b>Filter By</b></div>
<FilterSlider data={"Capitale"} value={filterscapitale} handleonchange={handledecapitale} />
<FilterSlider data={"Employes Number"} value={filternbremploye} handleonchange={handledenombreofemploye}/>
<FormCheckVille data={filterform}  filters={filtersville} handleonchange={handleonchangeville} handledeselect={handledeselectville} />
<FormCheckVille data={filterform}  filters={filtersactiviter} handleonchange={handleonchangeactivite} handledeselect={handledeselectactivite} />
<FormCheckVille data={filterform}  filters={filterstypetreprise} handleonchange={handleontypetreprise} handledeselect={handledeselectentreprise} />
<FormCheckVille data={filterform}  filters={filterstreetName} handleonchange={handledestreetname} handledeselect={handledeselectstreetname} />
<FormCheckVille data={filterform}  filters={filterRating} handleonchange={handledeRating} handledeselect={handledeselectRating} />
<Concentreation citys={citysofconcentration} concentratio={concentratio} sethide={sethide} hide={hide}/>


</div>
    </div>
}
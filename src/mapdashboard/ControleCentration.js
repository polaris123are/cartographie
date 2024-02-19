import React from "react";
import Input from "./filters/Input";
import { useState } from "react";
import {AiOutlineClose} from "react-icons/ai";
import CheckboxConcentration from "./filters/CheckboxConcentration";
export default function ControleCentration({data,setfilter,hide,setclusters,sethide}){
    let item={item:null,checked:false}
    if(data.length>0){
        item={item:data[0].name,checked:true}
    }
    const [isselected,setselected]=useState(item);
    const arr=data.map(element=><CheckboxConcentration data={element} handleonchange={setfilter} handledeselect={setfilter} isselected={isselected} setselected={setselected}/>)
    return <div style={{position:"absolute",display:hide?"none":"",backgroundColor:"white",borderRadius:"5px",width:"250px",height:"400px",zIndex:100,right:20,top:100,overflowY:"scroll"}}>

<div style={{border:"solid gainsboro 1px",borderRadius:"5px 5px 0 0",padding:"1rem",display:"flex",alignItems:"center",justifyContent:"space-between",color:"white",backgroundColor:"#0000ff"}}><b>Concentreation</b><AiOutlineClose onClick={()=>{sethide(true);setfilter(null);setclusters([])}}/> </div>
{arr}
    </div>
}
import React from "react";
import Step from "./Step";
import {BsChevronCompactRight} from "react-icons/bs";
export default function Steps({tableofsteps,number}){

    return <div style={{display:"flex",gap:20,width:"100%"}}>
{tableofsteps.map((element,index)=><div style={{display:"flex",alignItems:"center",gap:20}}><Step  stepnumber={element.stepnumber} isactive={number==index?true:element.isactive} size={element.size} title={element.title}/>{index>=2?"":<BsChevronCompactRight size={10} color="gray"/>}</div>)}
   
    </div>
}
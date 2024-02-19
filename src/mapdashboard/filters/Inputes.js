import React, { useState } from "react";
import Input from "./Input";
export default function Inputes({data,handleonchange,handledeselect}){
    const inputes=data.data.map(element=><Input data={element} handleonchange={handleonchange} handledeselect={handledeselect}/>)
    return <div>
           <div style={{margin:2,padding:"0.2rem",fontSize:13}}><b>{data.type}</b></div>
    {inputes}
    </div>
}
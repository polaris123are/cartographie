import React, { useState } from "react";
export default function Input({data,handleonchange,handledeselect}){
    const [isselected,setselected]=useState(false);
    return <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"12px"}}><div style={{display:"flex",padding:"0.2rem"}}><input checked={isselected} onChange={isselected?()=>{handledeselect(data.content);setselected(!isselected)}:()=>{handleonchange(data.content);setselected(!isselected)}} type={"checkbox"} name={data.type} value={data.content}/><div>{data.content}</div></div><div>{data.number}</div></div>
}
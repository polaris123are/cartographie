import { Checkbox } from "antd";
import React from "react";
import { useState } from "react";
export default function CheckboxConcentration({data,handledeselect,handleonchange}){
const [isselected,setselected]=useState(false);
return <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.5rem",fontSize:"12px"}}><div style={{display:"flex",padding:"0.2rem"}}><input checked={isselected} onChange={isselected?()=>{handledeselect(null);setselected(!isselected)}:()=>{handledeselect(data.center);setselected(!isselected)}} type={"checkbox"} name={data.name} value={data.name}/><div>{data.name}</div></div><div>{data.data.length}</div></div>

}
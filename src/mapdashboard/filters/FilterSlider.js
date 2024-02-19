import React from "react";
import { Slider } from 'antd';
export default function FilterSlider({data,value,handleonchange}){
    return <div style={{border:"gainsboro 1px solid",padding:"0.4rem"}}>
        <div style={{margin:2,padding:"0.2rem",fontSize:13}}><b>{data}</b></div>
        <div style={{width:"100%"}}>
        <Slider
    defaultValue={value}
    tooltip={{
      open: true,
    }}
    onChange={(e)=>handleonchange(e)}
  />
        </div>

    </div>
}
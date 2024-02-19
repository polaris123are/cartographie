import React, { useState } from "react";
import Input from "./Inputes";
import Inputes from "./Inputes";
export default function FormCheckVille({filters,handleonchange,handledeselect}){
    
const fi=filters.map(element=><Inputes data={element} handleonchange={handleonchange} handledeselect={handledeselect}/>)

return <div style={{border:"gainsboro 1px solid",padding:"0.4rem"}}>
{fi}
</div>
}
import React, { useEffect, useState } from "react";
import ModifiablePoste from "./ModifiablePost";
import axios from "axios";
import { elements } from "chart.js";
export default function ModiafablePostes({id}){
const [postes,setpostes]=useState([]);
useEffect(()=>{axios.get("http://localhost:8080/getPost/"+id).then((response)=>{console.log(response.data);setpostes(response.data)})},[])

    return <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
{postes.map((element)=><ModifiablePoste data={element} />)}
    </div>
}
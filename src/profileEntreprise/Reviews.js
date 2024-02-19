import React from "react";
import { useState,useEffect } from "react";
import Review from "./Review";
import {AiOutlineLeftCircle} from "react-icons/ai";
import {AiOutlineRightCircle} from "react-icons/ai";
import axios from "axios";
export default function Reviews({entreprise}){
    
    const [loading,setloading]=useState([]);
    const [reviews,setreviews]=useState([]);

    useEffect(()=>{
axios.get("http://localhost:8080/Rating/"+entreprise.id).then((response)=>{setreviews(response.data);setloading(true)})
    },[entreprise.id])

    let arr=false;
    if(reviews.length>3){
arr=true;
    }
    return loading && <div style={{display:"flex",width:100+"%",height:240+"px",position:"relative"}}>
    {arr && <div style={{position:"absolute",left:-10,bottom:120+"px",zIndex:200}}><AiOutlineLeftCircle size={25}/></div>}
    {arr && <div style={{position:"absolute",right:-10,bottom:120+"px",zIndex:200}}><AiOutlineRightCircle size={25}/></div>}
    <div style={{display:"flex",overflow:"hidden",gap:10}}>
        {reviews.map(element=><Review data={element}/>)}
    </div>
    </div>
}
import { Avatar, Button, Input } from "antd";
import React, { useState } from "react";
import {HiOutlinePhoto} from "react-icons/hi2";
import "./css.css";
import axios from "axios";
import { message } from 'antd';
import MyuploaderImagePost from "./MyuploaderImagePost";
export default function NewPost({id}){
    
const [messageApi, contextHolder] = message.useMessage();
const [imagesids,addimagesids]=useState(0);
const [identreprise,setidentreprise]=useState(id);
const [commentaire,setcommentaire]=useState("");
const key = 'updatable';
const saving = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'saving...',
    });}

   const savingend=()=>{
        messageApi.open({
            key,
            type: 'success',
            content: 'saved!',
            duration: 2,
          }); 
    }
const post={
    image:imagesids,
    entrepriseid:identreprise,
    comment:commentaire,
}



    const ajouter=()=>{
        console.log(post);
        saving();
axios.post("http://localhost:8080/post/ajouter",post).then((response)=>{console.log(response.data);savingend()});

    }

    return <div style={{backgroundColor:"white",padding:"1.5rem",display:"flex",flexDirection:"column",gap:10,borderRadius:"5px"}}>
    <div style={{position:"absolute",top:0}}>{contextHolder}</div>
    <div style={{display:"flex",gap:10,alignItems:"center"}}>
        <Avatar src={"http://localhost:8080/image/4"} size={40} />
        <Input style={{borderRadius:"20px"}}  defaultValue={"Start a post"} onChange={(e)=>setcommentaire(e.target.value)} />
    </div>

    
    <div style={{display:"flex",paddingLeft:"1rem",paddingRight:"1rem",gap:10,alignItems:"center",justifyContent:"space-between"}}>
    
    <MyuploaderImagePost imagestable={imagesids} addimagesids={addimagesids}/>

    <div><Button onClick={ajouter} style={{borderRadius:"20px"}} type="primary">Post</Button></div>

    </div>
    </div>
    
}
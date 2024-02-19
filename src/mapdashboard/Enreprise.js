import React, { useState } from "react";
import {SlHeart} from "react-icons/sl"
import { Col, Row, Statistic } from 'antd';
import Rating from "./Rating";
import { Rate } from 'antd';
import {FcInfo} from "react-icons/fc";
import "./css.css";
import {FcBookmark} from "react-icons/fc";
import {GoBookmarkFill} from "react-icons/go";
import {FcAbout} from "react-icons/fc";
import {CiBookmarkPlus} from "react-icons/ci";
import { Modal } from 'antd';
import { Input } from 'antd';
import {CiChat1} from "react-icons/ci";
import axios from "axios";
import { useContext } from 'react';
import { ContextApp } from "./Mainpage";

const { TextArea } = Input;


export default function Entreprise({setdatacurrent,showModalof,data,setactivelement,activelement,issaved,setchanged,ischanged,id}){
    const [isactive,setactive]=useState(issaved);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [numberofstars, setnumberofstars] = useState("");
    const [description, setdescription] = useState("");
    const [isModalOpenof, setIsModalOpenof] = useState(false);
    const theme = useContext(ContextApp);

    const datarate={
      numberofstars:numberofstars,
      description:description,
      entreprise:data.id,
      user:1
    }

    
    const unsave=()=>{
axios.get("http://localhost:8080/saveddelete/"+data.id).then((response)=>{setactive(false)})
    }

    const save=()=>{
      axios.post("http://localhost:8080/saveentreprise",{
        entreprise:data.id,
        user: id
      }).then((response)=>{setactive(true)})
          }



    const showModal = () => {
        setIsModalOpen(true);
      };
      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      const add=()=>{

        axios.post("http://localhost:8080/addrating",datarate).then((response)=>console.log(response));
      }


    return <div style={{display:"flex",gap:20,borderRadius:"5px",padding:"0.4rem",alignItems:"center",margin:"6px 0 6px 0",backgroundColor:activelement==data.id?"gainsboro":"white"}} className="sh" onMouseOver={()=>{setactivelement({id:data.id,pos:data.position});console.log(data.id,data)}} onMouseOut={()=>setactivelement({id:-1,pos:[]})}>
        
        
        <div>
            <img width={100} style={{borderRadius:"50%"}} height={100} src={"http://localhost:8080/image/"+data.image.id} alt="hi" />
        </div>
        <div style={{width:"67%"}}>
            
            <div style={{display:"flex",gap:5,justifyContent:"space-between",alignItems:"center",width:"100%"}}> <div style={{display:"flex",alignItems:"center",gap:2}}><b><p style={{color:"#006ce4",margin:"0px",fontSize:"20px",fontSize:17}}>{data.nom}</p></b><Rate  disabled defaultValue={data.rateinfo.rate.toPrecision(2)} style={{fontSize:"15px"}} /></div><a href="#" style={{textDecoration:"none"}} onClick={()=>{isactive?unsave():save()}}>{isactive?<GoBookmarkFill size={20} color="blue"/>:<CiBookmarkPlus size={20}/>}</a><a href="#" onClick={()=>{theme()}} style={{textDecoration:"none"}}><CiChat1 size={20} color="blue"/></a></div>
           <Rating data={data.rateinfo}/>
            <a  onClick={()=>{setdatacurrent(data);showModalof()}} style={{textDecoration:"none",display:"flex",cursor:"pointer"}}><p style={{margin:"0px",fontSize:"13px",display:"flex",alignItems:"center",gap:2}}><FcInfo/>more detaills</p></a>
            <a  onClick={showModal} style={{textDecoration:"none",display:"flex",cursor:"pointer"}}><p style={{margin:"0px",fontSize:"13px",display:"flex",alignItems:"center",gap:2}}><FcAbout/>Rate</p></a>
        </div>
        <Modal title="Rate" open={isModalOpen} onOk={()=>{handleOk();add()}} onCancel={handleCancel}>
        <p>number of stars</p>
        <Rate onChange={(e)=>{setnumberofstars(e)}} defaultValue={3} />
        <p>description:</p>
        <TextArea
        onChange={(e)=>{setdescription(e.target.value)}}
      showCount
      maxLength={100}
      style={{
        height: 120,
        resize: 'none',
        
      }}
      
      
      placeholder="disable resize"
    />
      </Modal>


     
        </div>
}
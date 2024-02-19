import React, { useEffect, useRef } from "react";
import Input from "antd/es/input/Input";
import { Avatar, Button, Image, Select } from "antd";
import {FaLocationDot} from "react-icons/fa6";
import {MdOutlineModeEdit} from "react-icons/md";


 


import ListFinance from "./ListFinance";
import {FaCameraRetro} from "react-icons/fa6";
import NewPost from "./NewPost";
import Fileimage from "./Fileimage";
import "./css.css";
import ModiafablePostes from "./ModiafablePostes";
import { Modal } from 'antd';
import { useState } from "react";
import MapModifyInfo from "./MapModifyInfo";
import axios from "axios";
import Contact from "./Contact";
import Entreprise from "./Entreprise";
import Mychart from "./MyChart";
import MyStatistics from "./MyStatistics";
import NotFoundgoAddnew from "./NotFoundgoAddnew";



export default function EntrepriseInformation({data}){
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setisContactModalOpen] = useState(false);
  const [isAdressModalOpen, setisAdressModalOpen] = useState(false);
  
 const  showAdressInfo = () => {
  setisAdressModalOpen(true);
  };
  const handleOkAdress = () => {
    setisAdressModalOpen(false);
  };
////////////////////////////
  const showContactinformation = () => {
    setisContactModalOpen(true);
  };

  const handleOkContact = () => {
    setisContactModalOpen(false);
  };

  const handleCancelContact = () => {
    setisContactModalOpen(false);
  };
/////////////////////////
const showmodifyinformation = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  
    return  <div style={{width:800+"px",margin:"0 auto",backgroundColor:"#f3f2f0"}}>

        <div style={{backgroundColor:"white",borderRadius:"5px"}}>
        <div style={{borderRadius:"5px",height:200+"px",backgroundColor:"blue",position:"relative"}}>
        <div style={{position:"absolute",right:"10px",top:"10px",borderRadius:"50%",background:"white",padding:"0.5rem"}}><Fileimage component={<FaCameraRetro/>}/>
    </div>
       
      <Avatar src={"http://localhost:8080/image/"+data.image.id} size={150} style={{position:"absolute",bottom:-40,left:50,border:"1px solid gainsboro"}} />
        
        <div style={{position:"absolute",border:"1px solid gainsboro",left:160,bottom:-40,borderRadius:"50%",background:"white",padding:"0.5rem"}}>
        <Fileimage component={<FaCameraRetro/>}/>
        </div>
        </div>

        <div style={{padding:0.5+"rem"}}>
            <div style={{fontSize:40,fontWeight:1,marginTop:30,display:"flex",justifyContent:"space-between"}}><b>{data.nom}</b>

            <div style={{padding:"0.4rem",borderRadius:"50%",width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center"}} onClick={()=>{showmodifyinformation(true)}} className="ll"><MdOutlineModeEdit size={30}/></div>
            </div>

            <div style={{width:600+"px"}}>engineering student in software development at EMSI, currently looking for summer internship</div>
            <div style={{display:"flex",alignItems:"center",gap:10}}><FaLocationDot color="blue" size={20}/><p>{data.adress.adressdetail}</p></div>
            
            <div><span style={{fontSize:15,color:"#7ba5b6"}}>{data.adress.region},Morocco</span><span onClick={()=>{showContactinformation()}}><a href="#" style={{textDecoration:"none",marginLeft:10+"px"}}><b>Contact Info</b></a></span><span onClick={()=>{showAdressInfo()}}><a href="#" style={{textDecoration:"none",marginLeft:10+"px"}}><b>Adress Info</b></a></span> </div>
            </div>    
            </div>
            <div style={{marginTop:"10px"}}><NewPost id={data.id}/></div>

            <div style={{marginTop:"10px",backgroundColor:"white",borderRadius:"5px",padding:"0.5rem"}}>
           <ModiafablePostes id={data.id}/>
            </div>



            <div style={{padding:0.5+"rem",backgroundColor:"white",borderRadius:"5px",marginTop:10+"px"}}>
            <div style={{fontSize:"20px"}}>Finance Information </div>
            <div style={{display:"flex"}}>
            <div style={{flexBasis:"70%"}}>
            <Mychart data={data.finance}/>
</div>

    <MyStatistics data={data.finance}/>

    </div>
             <div>
    <ListFinance data={data.finance} id={data.id}/>
    
            </div> 
            </div>




      <Entreprise  data={data} showmodifyinformation={showmodifyinformation} handleCancel={handleCancel} isopen={isModalOpen}/>
      
      <Contact data={data.contact} isContactModalOpen={isContactModalOpen} handleCancelContact={handleCancelContact}/>
      
      <MapModifyInfo isModalOpen={isAdressModalOpen} setIsModalOpen={handleOkAdress} data={data.adress}/>

      

      
            </div>
            
    
}
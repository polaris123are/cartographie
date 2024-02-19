import React, { useEffect } from "react";
import "./css.css";
import ListeOfEntreprise from "./ListeOfEntreprise";
import MapDashboard from "./MapDashboard";
import Mysearchmethode from "./Mysearchmethode";
import axios from "axios";
import { useState } from "react";
import Filters from "./filters/Filters";
import Modal from "antd/es/modal/Modal";
import EntrepriseInformation from "../dashboard_responsable/dashboardContent/EntrepriseInformation";
import EntrepriseProfile from "../profileEntreprise/EntrepriseProfile";
import MymodalfoeinfoEnreprise from "./MymodalfoeinfoEnreprise";
import { useParams } from "react-router-dom";
import ChatMain from "../chatapp/ChatMain";

import { notification } from 'antd';
import { createContext, useContext } from 'react';
export const ContextApp = createContext(null);
export default function Mainpage(){
  
  

    let {id}=useParams();
    const [dataentreprise,setdataentreprise]=useState([]);
    const [number,setnumber]=useState({id:-1,pos:[]});
    const [loading,setloading]=useState(false);
    const [clusters,setclusters]=useState([]);
    const [hide ,sethide]=useState(true);
    const [datacurrent,setdatacurrent]=useState();
    const [account,setaccount]=useState([]);
    const [loading1,setloading1]=useState(false);
    const [api, contextHolder] = notification.useNotification();
    const [connectedusers,setconnectedusers]=useState([]);

    const [openchatmap, setopenchatmap] = useState(false);
    
    const onOkchatmap=()=>{
      setopenchatmap(true);
    }
    const onCancelchatmap=()=>{
      setopenchatmap(false);
    }

    useEffect(()=>{axios.get("http://localhost:8080/allfrendofconected/"+id)
    .then((response)=>{console.log(response.data);setconnectedusers(response.data)})
  },[])
    

    const openNotification = (message) => {
      api.open({
        message: 'new message',
        description:message,
        duration: 0,
      });}
      const connectandlisten=(idaccount)=>{

        const source = new EventSource("http://localhost:8080/stocks-stream/"+idaccount);
       
    source.addEventListener('message', function(e) {     
        openNotification("iam a message please !!!",e.data);
        console.log(e.data);
        }, false);

   source.addEventListener('open', function(e) {
    openNotification(e.data);
  }, false);

  source.addEventListener('DELET USER', function(e) {
    openNotification(e.data +"user deleted");
    setconnectedusers(connectedusers.filter(element=>element.id!=e.data))
    console.log(e.data);
  }, false);

  source.addEventListener('ADD User', function(e) {
    console.log("iam addded e.data");
    openNotification(e.data+" user added");
    axios.get("http://localhost:8080/get/"+e.data).then((response)=>{setconnectedusers([...connectedusers,response.data])})
    console.log(e.data);
  }, false);
 

  source.addEventListener("error", (event)=> {
    if (event.readyState == EventSource.CLOSED) {
      openNotification("connection Closed !!!");
      
      event.target.close();
      connectandlisten(idaccount);
    } 


    
 });
 
       }
      
    useEffect(()=>{axios.get("http://localhost:8080/get/"+id).then((response)=>{console.log("hi iam account",response.data);setaccount(response.data);connectandlisten(response.data.id);setloading1(true)})},[])
    

  
         



const [isModalOpen, setIsModalOpen] = useState(false);
const showModal = () => {
  setIsModalOpen(true);
};
const handleOk = () => {
  setIsModalOpen(false);
};
const handleCancel = () => {
  setIsModalOpen(false);
};

        

    useEffect(()=>{
        setloading(false);
        axios.get("http://localhost:8080/Entreprise").then((response)=>{
            setdataentreprise(response.data);
            setloading(true);
         });

      
        
         
    },[])
    
    const getconcentration=(ville,activiter)=>{
        axios.get("http://localhost:8080/concentration/"+ville+"/"+activiter).then((response)=>{
            setclusters(response.data);
         });
    }
  console.log("nnnnnnnnnnnnnnnnnnnnnn",account);

    console.log("iam from main ",datacurrent);
    
    return loading1 && loading &&   <ContextApp.Provider value={onOkchatmap}><div style={{width:"100%",height:"100vh",display:"flex"}}>
      {contextHolder}
<Filters changedata={setdataentreprise} concentratio={getconcentration} sethide={sethide} hide={hide}/>
<ListeOfEntreprise setdatacurrent={setdatacurrent} data={dataentreprise} activelement={number} setactivelement={setnumber} showModal={showModal} id={id} />
<MapDashboard data={dataentreprise} activelement={number}  clusters={clusters} hide={hide} sethide={sethide} setclusters={setclusters}/>
<MymodalfoeinfoEnreprise    open={isModalOpen}  onOk={handleCancel} onCancel={handleCancel} entreprise={datacurrent} />
<Modal width="1300px" open={openchatmap}  onOk={onOkchatmap} onCancel={onCancelchatmap}><ChatMain account={account} connectesusers={connectedusers}/></Modal>
    </div></ContextApp.Provider>

}
import React, { useState,useEffect } from "react";
import axios from "axios";
import ConectedUsers from "./ConectedUsers";
import Chatusers from "./Chatusers";
import MessagesContainerOfAcompany from "./MessagesContainerOfAcompany";
import Infouser from "./Infouser";
 
    
export default function ChatMain({connectesusers,account}){
    const [messages,setmessages]=useState({});
    const [freinds,setfriends]=useState();
    const [loading,setloading]=useState(false);
    const [loading1,setloading1]=useState(false);
    const [currentuser,setcurrentuser]=useState();
    
    console.log(account.id);

    useEffect(()=>{
        axios.get("http://localhost:8080/getallmessages/"+account.id+"/2").then((response)=>{
        setmessages(response.data);
        console.log("gggggggggggg",response.data);
        console.log("sadakdkjsadkjskdalkdkladjddddddddddddddd",messages);
        setloading1(true);
    })
    },[]);

    useEffect(()=>{
        axios.get("http://localhost:8080/allfrendof/"+account.id).then((response)=>{setfriends(response.data);
        setloading(true)})
    },[]);




 return loading1 && loading && <div style={{height:"100vh",width:"100%",display:"flex",gap:4,boxSizing:"border-box"}}>


<div style={{width:"30%",border:"1px solid gainsboro",borderRadius:"5px"}}>
    <Infouser/>
    <ConectedUsers connectesusers={connectesusers}/>
    <Chatusers setcurrentuser={setcurrentuser} freinds={freinds}/>
</div>

<div style={{width:"70%",border:"1px solid gainsboro",borderRadius:"5px"}}>
{/*<MessagesContainerOfAcompany messages={messages}/>*/}
</div>

</div>

}
import React from "react";
import Message from "./Message";
import MessagesInpute from "./MessagesInpute";
export default function Messages({Messages}){

    return <div>
       <div style={{height:"79vh",overflowY:"scroll"}}><Message Messages={Messages}/></div>
       <div style={{height:"10vh"}}><MessagesInpute/> </div>
    </div>
}
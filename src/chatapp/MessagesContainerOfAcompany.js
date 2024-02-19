import React from "react";
import Headermessage from "./Headermessage";
import Messages from "./Messages";

export default function MessagesContainerOfAcompany({messages}){
    
    return <div>
        <div style={{width:"100%",height:"10vh"}}> <Headermessage username={messages.user.fullName} user={2}/></div>
        <div style={{width:"100%",height:"90vh"}}><Messages messages={messages.messages}/></div>
    </div>
}
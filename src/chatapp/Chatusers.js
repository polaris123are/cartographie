import React, { useState,useEffect } from "react";
import ChatMessage from "./ChatMessage";
import axios from "axios";
export default function Chatusers({freinds,setcurrentuser}){

    return  <div>
        <div  style={{fontSize:"12px",padding:"1rem",borderBottom:"1px solid gainsboro"}}><b>Messages:</b></div>
        {freinds.map((element=><ChatMessage setcurrentuser={setcurrentuser} id={element.id} key={element.id} username={element.fullName} lastmessage="salam wach cava" unreadmessages={2} time={"15:00 AM"} user={1}/>))
       }
    </div>
}
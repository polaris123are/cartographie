import React from "react";
import Chat from "./Chat";
export default function Message({messages,account}){
    return <div style={{padding:"1rem"}}>
        {messages.map((element=>{<Chat message="hi abelilah" date="15:20" position={"left"}/>}))}
    </div>
}
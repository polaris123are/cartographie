import React from "react";
import {Input} from "antd";
import { Button } from "antd";
export default function MessagesInpute(){
    return <div style={{display:"flex",gap:10,padding:"1rem",alignItems:"center",backgroundColor:"#b8e2f2"}}>
        <Input placeholder="Basic usage" />
        <Button type="primary">send</Button>
    </div>
}
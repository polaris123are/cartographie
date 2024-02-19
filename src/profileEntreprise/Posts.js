import React from "react";
import Post from "./Post";
export default function Posts({data,info}){
console.log("iam from posts",data);
    return <div style={{display:"flex",gap:10}}>
{data.map((element)=><Post data={element}  info={info}/>)}

    </div>
}
import React from "react";

export default function Rating({data}){

    return <div style={{display:"flex",gap:20,alignItems:"center",margin:"10px 0 10px 0"}}>
    <div style={{color:"white",background:"#003b95",borderTopLeftRadius:"5px",borderBottomRightRadius:"5px",borderTopRightRadius:"5px",width:"20px",height:"20px",padding:"0.5rem",display:"flex",justifyContent:"center",alignItems:"center"}}>
        {data.rate}
    </div>
    <div>
        <h3 style={{margin:"0px"}}>{data.satisfaction}</h3>
        <p style={{margin:"0px",fontSize:"12px"}}>{data.numberofrating} experience vecu</p>
    </div>

    </div>
}
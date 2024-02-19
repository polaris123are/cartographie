import React from "react";
export default function Step({stepnumber,isactive,size,title}){
    var backcolor;
    var background;
if(isactive){
    backcolor="#0066fc";
}
return <div style={{display:"flex",alignItems:"center",gap:5}}><span style={{borderRadius:"50%",border:isactive?"":"solid 1px",borderColor:isactive?"white":"gray",backgroundColor:isactive?backcolor:"white", display:"inline-block",height: "25px",width: "25px"}}>
<span style={{fontSize:size,color:isactive?"white":"black",display:"inline",display:"flex",justifyContent:"center"}}>{stepnumber}</span>
</span> <p style={{fontSize:size,fontWeight:isactive?"bolder":"normal",color:isactive?"black":"gray"}}>{title}</p></div>

}
import React from "react";
import { DatePicker,Button} from "antd";
import ImageUploader from "../image/ImageUploader";
import Input from "antd/es/input/Input";
import Myuploader from "../image/MyUploader";
export default function Financeorganisation({setnumber,number,data,setdata}){
    const onChange = (date, dateString) => {
        console.log(date, dateString);
      };
    return <div style={{width:"100%",hieght:"90vh",display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center",alignItems:"center"}}>

    <div style={{width:"45%"}}>
    <div><h2  style={{margin:"0"}}>finance Information:</h2>
    </div></div>
    <div style={{width:"45%"}}>
    </div>

    <div style={{width:"45%"}}>
    <p>capitale:</p>
    <Input placeholder="Basic usage" value={data.capitale} onChange={(e)=>setdata({...data,capitale:e.target.value})} />
    </div>
    <div style={{width:"45%"}}>
    <p>Tax professionel:</p>
    <Input placeholder="Basic usage" value={data.Tax} onChange={(e)=>setdata({...data,Tax:e.target.value})}/>
    </div>
    <div style={{width:"45%"}}>
    <p>chiffre d affaire:</p>
    <Input placeholder="Basic usage" value={data.chiffre} onChange={(e)=>setdata({...data,chiffre:e.target.value})}/>
    </div>
    <div style={{width:"45%"}}>
    
    </div>
    <div style={{width:"45%"}}>
    <div><h2  style={{margin:"0"}}>Image:</h2>
    </div></div>
    <div style={{width:"45%"}}>
    </div>

    <div style={{width:"45%"}}>
    <p>Logo de l entreprise :</p>
    <p style={{fontSize:"15px",color:"gray"}}>SVG or JPG or PNG l image doit etre au maximum 800x400</p>
    </div>
    <div style={{width:"45%"}}>
    {/*<ImageUploader/>*/}
      <Myuploader data={data} setdata={setdata}/>
    </div>

    </div>
}

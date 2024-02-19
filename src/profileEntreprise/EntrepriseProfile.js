import { Rate } from "antd";
import React, { useEffect, useState } from "react";
import { Watermark } from 'antd';
import {FaLocationDot} from "react-icons/fa6";
import axios from "axios";
import InfoComponent from "./InfoComponent";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import DataEntreprise from "./DataEntreprise";
import Review from "./Review";
import Reviews from "./Reviews";
import Rating from "../mapdashboard/Rating";
import Ratingdetailles from "./Ratingdetailles";
import Post from "./Post";
import Posts from "./Posts";
import {Avatar} from "antd";
export default function EntrepriseProfile({entreprise}){

  const [postes,setpostes]=useState([]);
useEffect(()=>{axios.get("http://localhost:8080/getPost/"+entreprise.id).then((response)=>{console.log("hi iam postes",response.data);setpostes(response.data)})},[entreprise.id])

const [current, setCurrent] = useState();
useEffect(()=>{
  setCurrent()
},[entreprise.id])
  const onClick = (e) => {
    console.log('click', e);
    if(e.key=="overvue"){
      setCurrent(<DataEntreprise data={entreprise}/>);

    }else if(e.key=="rating"){
      setCurrent(<Ratingdetailles data={entreprise.id} />);
    }
   
  };
    const items = [
        {
          label: 'Overview',
          key: 'overvue',
          icon: <MailOutlined />,
    
        },
        {
          label: 'Reviews',
          key: 'rating',
          icon: <AppstoreOutlined />,
         
        },
        {
          label: 'Navigation Three',
          key: 'SubMenu',
          icon: <SettingOutlined />,
            },
      ];



    
    

    


return <div style={{margin:"0 auto",width:"px",zIndex:0,position:"relative"}}>

<div style={{borderRadius:"5px",height:200+"px",backgroundColor:"blue",position:"relative"}}>
      
       
      <Avatar src={"http://localhost:8080/image/"+entreprise.image.id} size={150} style={{position:"absolute",bottom:-40,left:50,border:"1px solid gainsboro"}} />
        
        </div>

<div style={{marginTop:70,padding:"1rem"}}>
  <div style={{display:"flex",alignItems:"center",gap:10}}><div style={{fontSize:30+"px",marginBottom:0}}>{entreprise.nom}</div><Rate defaultValue={entreprise.rateinfo.numberofrating} /></div>
  <div style={{display:"flex",alignItems:"center",gap:10}}><FaLocationDot color="blue" size={20}/><p>{entreprise.adress.adressdetail}</p></div>
</div>
<div>
<Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
{current}


</div>

<div>
    <p style={{fontSize:30}}>Posts </p>
</div>
  <Posts data={postes} info={entreprise}/>

<div>
    <p style={{fontSize:30}}>comments </p>
</div>
<Reviews entreprise={entreprise}/>

</div >
}

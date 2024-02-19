import React, { useState } from "react";
import "./css.css";
import { MapContainer,TileLayer,Marker,Circle} from "react-leaflet";
import Search from "antd/es/input/Search";
import { Input, Modal } from "antd";
import { factoryicones } from "./Icon/factoryicones";
import Flytoaplace from "./Flytoaplace";
import ControleCentration from "./ControleCentration";



export default function MapDashboard({data,activelement,clusters,setclusters,hide,sethide}){

console.log(data,activelement);



const [filtersConcentration ,setfilterConcentration]=useState(null)

  let myposition;

  
  
  if(activelement.id==-1 && data.length>0 && filtersConcentration==null){
    myposition=[data[0].position.lat,data[0].position.lng];
  }else if(filtersConcentration!=null){
    myposition=filtersConcentration;
  }else if(data.length==0){
    myposition=[34.020882,-6.841650];
  }
  else{
    myposition=[activelement.pos.lat,activelement.pos.lng];
  }

  


  
  


const positions=data.map((element,index)=><Marker key={element.id} position={[element.position.lat,element.position.lng]} icon={element.id===activelement.id?factoryicones("selected"):factoryicones("static")}></Marker>)




const position = [34.020882,-6.841650]; // [latitude, longitude]

  
  const onSearch = (value) => console.log(value);
    return    <div style={{width:"60%",height:"100vh",position:"relative",display:"flex",flexDirection:"column",alignItems:"center"}}>
       
        <div style={{position:"absolute",zIndex:100,left:0,right:0,marginLeft:"auto",marginRight:"auto",width:"300px",top:20,}}><Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: 300,
      }}
    /></div>

<ControleCentration  data={clusters} setfilter={setfilterConcentration} hide={hide} sethide={sethide} setclusters={setclusters}/>

    <MapContainer 
        center={position} 
        zoom={18} 
    >
{positions}
{filtersConcentration!=null?<Circle center={filtersConcentration} radius={1000}/>:""}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
      />

<Flytoaplace pos={myposition}/>
 
    </MapContainer>


    
</div> 

}
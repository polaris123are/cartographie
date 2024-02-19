import React from "react";
import Header from "./Header";
import EntrepriseInformation from "./dashboardContent/EntrepriseInformation";
import Responsablemain from "./dashboardContent/Responsablemain";
export default function Main(){
    return <div style={{backgroundColor:"#f3f2f0",height:"100%",width:"100%"}}>
  <Header/>
  <Responsablemain/>
    </div>
}
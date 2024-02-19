import React from "react";
import {GiWorld} from "react-icons/gi";
import { FcPhone } from "react-icons/fc";
import InfoComponent from "./InfoComponent";

export default function DataEntreprise({data}){
    return <div>
         <InfoComponent text={"06365487125"} icone={<FcPhone/>}/>  
<InfoComponent text={"www."+data.nom+".ma"} icone={<GiWorld/>}/> 
<InfoComponent text={"Identifiant Commun Entreprise:"} data={data.ice} icone={<FcPhone/>}/> 
<InfoComponent text={"Patente:"} icone={<FcPhone/>} data={data.patente}/> 
<InfoComponent text={"Identifiant Fiscal:"} icone={<FcPhone/>} data={data.if}/> 
<InfoComponent text={"Nombre Des Employes:"} icone={<FcPhone/>} data={data.nbrmployes}/> 
<InfoComponent text={"Date De Creation:"} icone={<FcPhone/>} data={data.datecreation}/> 
<InfoComponent text={"Type Entreprise:"} icone={<FcPhone/>} data={data.typeEntreprise.nome}/> 

</div>
}
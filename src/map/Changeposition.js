import React from "react";
import { useMapEvent } from 'react-leaflet'
export default function Changeposition({position,setpostion}){

    useMapEvent('click', (e) => {
         
        setpostion([e.latlng.lat,e.latlng.lng]);
    });
        
}

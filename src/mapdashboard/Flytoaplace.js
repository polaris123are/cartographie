import React from "react";
import { useMap } from "react-leaflet";
import * as L from 'leaflet'
export default function Flytoaplace({pos}){
    const map = useMap();
     
    map.flyTo(L.latLng(pos[0],pos[1]));

}
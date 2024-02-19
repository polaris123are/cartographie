import { useCallback, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Changeposition from './Changeposition';
export default function Mapaddorganisation({setpostion,position}){

    console.log(position)
    
    return (
      <MapContainer 
      center={[position[0],position[1]]} 
      zoom={12} 
      scrollWheelZoom={false}
      
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png'
    />
    <Marker position={[position[0],position[1]]}>  
      </Marker>
      <Changeposition setpostion={setpostion} position={position} />
  </MapContainer>

       
    )
}
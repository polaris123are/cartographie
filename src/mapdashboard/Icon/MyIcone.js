import L from 'leaflet';

export default function MyIcone(){

    return new L.Icon({
        iconUrl: require('./icons8-location-64.png'),
        iconRetinaUrl: require('./icons8-location-64.png'),
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(30, 30),
        className: 'leaflet-div-icon ',
        
        
    });
}

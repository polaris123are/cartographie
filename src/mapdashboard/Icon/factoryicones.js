import L from 'leaflet';
import "./css.css"


function factoryicones(type){
    if(type=="static"){
        return new L.Icon({
            iconUrl: require('./icons8-location-64.png'),
            iconRetinaUrl: require('./icons8-location-64.png'),
            iconAnchor: null,
            popupAnchor: null,
            shadowUrl: null,
            shadowSize: null,
            shadowAnchor: null,
            iconSize: new L.Point(40, 40),
            className: 'leaflet-div-icon ',    
        });
    
    }else if(type=="selected"){
        return new L.Icon({
            iconUrl: require('./icons8-location.gif'),
            iconRetinaUrl: require('./icons8-location.gif'),
            iconAnchor: null,
            popupAnchor: null,
            shadowUrl: null,
            shadowSize: null,
            shadowAnchor: null,
            iconSize: new L.Point(40, 40),
            className: 'leaflet-div-icon',    
        });
    
    }
}
 
export { factoryicones };
import L from 'leaflet';
import "./css.css";



 
    const iconPositionanimated = new L.Icon({
        iconUrl: require('./output-onlinegiftools.gif'),
        iconRetinaUrl: require('./output-onlinegiftools.gif'),
        iconAnchor: null,
        popupAnchor: null,
        shadowUrl: null,
        shadowSize: null,
        shadowAnchor: null,
        iconSize: new L.Point(40, 40),
        className: 'leaflet-div-icon',    
    });

    



export { iconPositionanimated };
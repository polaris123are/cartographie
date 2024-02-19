import react from "react";
export default function Fileimage({component}){
    return <div>
    <label for="inputTag">{component}</label>
    <input style={{display:"none"}} type="file" id="inputTag" />
    </div>
}
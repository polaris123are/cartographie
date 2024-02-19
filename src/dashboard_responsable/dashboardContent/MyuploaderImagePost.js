import React from "react";
import axios from "axios";
import { useState } from "react";
import {HiOutlinePhoto} from "react-icons/hi2"
export default function MyuploaderImagePost({addimagesids}){

    const [file,setfile]=useState(null);
console.log(file);
     const onFileupload= async ()=>{

        const formData = new FormData();

        formData.append(
            "avatar",
            file,
            file.name
        );

        axios.post('http://localhost:8080/image',
          formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function (response) {
          console.log(response.data.id);
          addimagesids(response.data.id)
          console.log("added");
        })
        .catch(function () {
          console.log('FAILURE!!');
        });
        
    }
    

    const onFileChange=(e)=>{
      console.log("im triggered");
        setfile(e.target.files[0]);
        onFileupload()
    }


return <div>
<div className="ll" style={{ borderRadius: "5px", padding: "0.5rem" }}>
{/*<label style={{ display: "flex", gap: 5 }}  htmlFor="inputTag">
  <HiOutlinePhoto color="#5ca4ed" size={25} />
  <div style={{ color: "#5ca4ed" }}>Photo</div>
  </label>*/}
  <input type="file" id="inputTag"  onChange={onFileChange} />
</div>
</div>

}
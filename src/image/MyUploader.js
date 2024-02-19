import React, { useState } from "react";
import axios from 'axios';

export default function Myuploader({data,setdata}){

    const [file,setfile]=useState(null);

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

          setdata({...data,image:response.data.id})
        })
        .catch(function () {
          console.log('FAILURE!!');
        });
        
    }
    

    const onFileChange=(e)=>{
        setfile(e.target.files[0]);
        
    }


return <div>
    <input type="file" onChange={onFileChange}  ></input>

    <button onClick={onFileupload}> Upload!</button>
    </div>

}
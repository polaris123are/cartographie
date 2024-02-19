import React from "react";
import { Button, Result } from 'antd';
import {Modal} from "antd";
import Base from "antd/es/typography/Base";
import { useState } from "react";
export default function NotFoundgoAddnew({showModal}){
  

    return <div>
 <Result
    title="You dont have a company please click to add"
    style={{backgroundColor:"white",border:"1px solid gainsboro",borderRadius:"5px"}}
    extra={
      <Button type="primary" key="console" onClick={showModal}>
        Add Company
      </Button>
    }
  />  

    </div>
}
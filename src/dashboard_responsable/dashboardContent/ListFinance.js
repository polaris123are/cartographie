import React from "react";
import { DatePicker, Input, Space, Table, Tag } from 'antd';
import { useState } from "react";
import {Button} from "antd";
import { elements } from "chart.js";
import {Modal} from "antd";
import axios from "axios";
import {Statistic } from 'antd';
import { message } from 'antd';

export default function ListFinance({data,id}){
  const [isModalOpenmodify, setIsisModalOpenmodify] = useState(false);
  const [chiffresdaffaire,setchiffredaffaire]=useState(data.chiffredaffaire);
  const [capitale,setcapital]=useState(data.capitale);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [chiffre,setchiffre]=useState("");
  const [date,setdate]=useState("");
  const [tax,settaxes]=useState("");
  

  const [ids,setids]=useState([]);
  const key = 'updatable';
  const saving = (value) => {
    messageApi.open({
      key,
      type: 'loading',
      content: value+'...',
    });}

   const savingend=(value)=>{
        messageApi.open({
            key,
            type: 'success',
            content: value+'!',
            duration: 2,
          }); 
    }
  

const chiffrecomponent={
  id:id,
  chiffredaffaire:chiffre,
  tax:tax,
  date:date
}

console.log(chiffrecomponent);

const changedate = (date, dateString) => {
 setdate(dateString);
 console.log(dateString);
};

  const ajouter=()=>{
    saving("adding")
    axios.post("http://localhost:8080/chiffredaffaire/ajouter",chiffrecomponent).then((response)=>{setchiffredaffaire(response.data);console.log(response.data);savingend("added")});
  }

  const arr=chiffresdaffaire.map((element,index)=>({ key: element.id,
  chiffre: element.sum+ " DH",
  anne: element.date,
  taxe: '13021 DH',}))
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    ajouter()
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


console.log(ids);
const deleteditems={

ids:ids,
id:id,
}
const deletes=()=>{
if(ids.length>0){
  saving("deleting")
  axios.post("http://localhost:8080/chiffredaffaire/delete",deleteditems).then((response)=>{setchiffredaffaire(response.data);savingend("deleted")});
}
console.log("please select somthing");
}

    const columns = [
        {
          title: 'Chiffre d Affaire',
          dataIndex: 'chiffre',
          key: 'chiffre',
          render: (text) => <b>{text}</b>,
        },
        {
          title: 'Taxe',
          dataIndex: 'taxe',
          key: 'taxe',
        },
        {
          title: 'Annee',
          dataIndex: 'anne',
          key: 'anne',
        },
      ];

      const mydata = arr
      ;


      const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          setids(selectedRowKeys);
        },
        getCheckboxProps: (record) => ({
          disabled: record.name === 'Disabled User',
          // Column configuration not to be checked
          name: record.name,
        }),
      };
      const [selectionType, setSelectionType] = useState('checkbox');
    return <div>
      <div style={{position:"absolute",top:0}}>{contextHolder}</div>
       <Table rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}columns={columns} dataSource={mydata} />
        <div style={{display:"flex",gap:5}}><Button type="primary" onClick={showModal} >Ajouter un chiffre d affaire</Button>
    <Button type="primary" onClick={deletes} danger>delete</Button>
    <Button >modify</Button>
    </div>
   
    <Modal title="CHiffre d affaire" open={isModalOpen} onOk={handleOk}  okText="Save" onCancel={handleCancel}>
        <div>chiffre d affaire</div>
        <Input onChange={(e)=>{setchiffre(e.target.value)}}/>
        <div> Annee</div>
        
        <DatePicker  style={{width:"100%"}} onChange={changedate}/> 
       
        <div>Taxe</div>
        <Input onChange={(e)=>{settaxes(e.target.value)}} />
      </Modal>


    </div>
}
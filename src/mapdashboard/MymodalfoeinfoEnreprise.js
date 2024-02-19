import react from "react";
import EntrepriseProfile from "../profileEntreprise/EntrepriseProfile";
import Modal from "antd/es/modal/Modal";
export default function MymodalfoeinfoEnreprise({entreprise,open,onOk,onCancel}){
return <div>
    <Modal width="1000px" open={open}  onOk={onOk} onCancel={onCancel}>
<EntrepriseProfile entreprise={entreprise}/>
</Modal>
</div>
}
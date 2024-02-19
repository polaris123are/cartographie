import react from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Statistic } from "antd";
export default function MyStatistics({data}){
    let tablechiffre=data.chiffredaffaire;
  let chiffrelast=tablechiffre.length<2?0:tablechiffre[tablechiffre.length-2];
  let chiffrecurrent=tablechiffre.length<1?0:tablechiffre[tablechiffre.length-1];
  let devlop=(chiffrecurrent==0?0:chiffrecurrent.sum)-(chiffrelast==0?0:chiffrelast.sum);
  let devloptax=(chiffrecurrent==0?0:chiffrecurrent.taxe)-(chiffrelast==0?0:chiffrelast.taxe);

  return<div style={{display:"flex",flexDirection:"column",flexBasis:"30%",gap:5,justifyContent:"center",height:200+"px",alignItems:"center",height:"100%",padding:"1.5rem"}}>
   <div style={{padding:"1.5rem",border:"1px solid gainsboro",borderRadius:"5px",width:"150px"}} >
<Statistic
          title="Chiffre d Affaire"
          value={devlop}
          precision={0}
          valueStyle={{ color:devlop<0? 'red':'#3f8600' }}
          prefix={devlop<0?<ArrowDownOutlined />:<ArrowUpOutlined />}
          suffix="%"
        />
</div>
<div style={{padding:"1.5rem",border:"1px solid gainsboro",borderRadius:"5px",width:"150px"}} >
<Statistic
          title="Taxes"
          value={devloptax}
          precision={0}
          valueStyle={{ color:devloptax<0? 'red':'#3f8600' }}
          prefix={devloptax<0?<ArrowDownOutlined />:<ArrowUpOutlined />}
          suffix="%"
        />
</div>
</div> 

}
import TabelData from "./TabelData.json";
import Table from "react-bootstrap/Table";
import "./App.css";
import Logo from "./logo.png";
import arrow from "./arrow.png";
import { useState } from "react";

const ProjectTabel1 = () => {
  const [data, setData] = useState(TabelData);
  const [order , setOrder] = useState("ASC");

  const sorting = (col) =>{
        if(order==="ASC"){
            const sorted = [...data].sort((a,b)=>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1: -1  
            );
            setData(sorted);
            setOrder("DSC");
        }
        if(order==="DSC"){
            const sorted = [...data].sort((a,b)=>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1: -1  
            );
            setData(sorted);
            setOrder("ASC");
        }
  }

  return (
    <div>
      <Table tabel table-striped className="tabel1">
        <thead>
          <tr>
            <th className="square border border-#F5F5F5" width="870" onClick={()=>sorting("person-name")} >Name <img src={arrow} alt="arrow" className="arrow" /> </th>
            <th className="square border border-#F5F5F5" width="550" >Email Address</th>
            <th className="square border border-#F5F5F5"  width="670" >Role </th>
          </tr>
        </thead>
        <tbody>
          {data.map((info) => (
            <tr key={info.person.name}>
              <td className="square border border-#F5F5F5"><img src={Logo} alt="logo" /> {info.person.name}</td>
              {/* <td className="square border border-#F5F5F5">{info.city}</td> */}
              <td className="square border border-#F5F5F5" id="emailAddress">{info.email}</td>
              {/* <td className="square border border-#F5F5F5">{info.joiningDate}</td> */}
              <td className="square border border-#F5F5F5">{info.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProjectTabel1;

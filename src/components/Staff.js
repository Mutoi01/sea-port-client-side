import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../style.css'

function Staff() {
  const [staff, setStaff] = useState([]);

  function loadStaff() {
    axios.get("http://localhost:9292/staffs").then((res) => {
      setStaff(res.data.reverse());
    });
  }

  useEffect(() => {
    loadStaff();
  }, []);

  function deleteStaff(id) {
    axios.delete(`http://localhost:9292/staffs/${id}`).then(loadStaff());
  }

  return (
    <>
      <div className="container">
        {/* <h2 ><i>Staff</i></h2>  */}
          <table className="table">
             <thead >
               <tr>
                 <th scope="col"> Name </th>
                 <th scope="col"> Age</th>
                 <th scope="col">Gender </th>
                 <th scope="col"> Occupation </th>
                 <th scope="col">Action</th>
                </tr>
             </thead>

             <tbody >
                    {staff.map((data, index) => (
                <tr key={index}>
                  <td >  {data.name}</td>
                  <td > {data.age}</td>
                  <td >{data.gender}</td>
                  <td >{data.occupation} </td>
                  <td >
                    <Link to={`/edit-staff/${data.id}`}
                    className = "edit-btn"
                    >Edit</Link>
                    <Link onClick={() => deleteStaff(data.id)} to={"#"} 
                    className = "delete-btn"
                    > Delete </Link>
                   </td>
                </tr> ))}
               </tbody>
          </table>
      </div>
    </>
  );
}

export default Staff;
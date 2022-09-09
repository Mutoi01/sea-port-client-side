import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../style.css'

function Ships() {
  const [ship, setShip] = useState([]);

  function loadShip() {
    axios.get("http://localhost:9292/ships").then((res) => {
      setShip(res.data.reverse());
    });
  }

  useEffect(() => {
    loadShip();
  }, []);

  function deleteShip(id) {
    axios.delete(`http://localhost:9292/ships/${id}`).then(loadShip());
  }

  return (
    <>
      <div className="table-container">
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
                    {ship.map((data, index) => (
                <tr key={index}>
                  <td >  {data.vessel}</td>
                  <td > {data.built}</td>
                  <td >{data.gt}</td>
                  <td >{data.size} </td>
                  <td >
                    <Link to={`/edit-ship/${data.id}`}
                    className = "edit-btn"
                    >Edit</Link>
                    <Link onClick={() => deleteShip(data.id)} to={"#"} 
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

export default Ships;
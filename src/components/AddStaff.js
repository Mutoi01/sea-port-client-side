import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../add.css';

function AddStaff() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");

  const navigate = useNavigate();
  const data = {
    name: name,
    age: age,
    gender: gender,
    occupation: occupation,
  };

  function submitForm(e) {
    e.preventDefault();
    axios.post("http://localhost:9292/staffs", data).then(navigate("/"));
  }
  return (
    <div className="container">
      <h2>ADD Staff</h2>
      <form className="form-container">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter name"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="Enter age"
        />
        <input
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          type="text"
          placeholder="Enter gender."
        />
         <input
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          type="text"
          placeholder="Enter Occupation."
        />
        <button
        className="btn"
          type="submit"
          onClick={submitForm}
        >
          ADD STAFF
        </button>
      </form>
    </div>
  );
}

export default AddStaff;
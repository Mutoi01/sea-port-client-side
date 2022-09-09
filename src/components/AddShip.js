import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../add.css';

function AddShip() {
  const [vessel, setVessel] = useState("");
  const [built, setBuilt] = useState("");
  const [gt, setGt] = useState("");
  const [size, setSize] = useState("");

  const navigate = useNavigate();
  const data = {
    vessel: vessel,
    built: built,
    gt: gt,
    size: size,
  };

  function submitForm(e) {
    e.preventDefault();
    axios.post("http://localhost:9292/ships", data).then(navigate("/"));
  }
  return (
    <div className="container">
      <h2>ADD Ship</h2>
      <form className="form-container">
        <input
          value={vessel}
          onChange={(e) => setVessel(e.target.value)}
          type="text"
          placeholder="Enter vessel name"
        />
        <input
          value={built}
          onChange={(e) => setBuilt(e.target.value)}
          type="number"
          placeholder="Enter built year"
        />
        <input
          value={gt}
          onChange={(e) => setGt(e.target.value)}
          type="number"
          placeholder="Enter the Gross Tonnage."
        />
         <input
          value={size}
          onChange={(e) => setSize(e.target.value)}
          type="number"
          placeholder="Enter size."
        />
        <button
        className="btn"
          type="submit"
          onClick={submitForm}
        >
          ADD SHIP
        </button>
      </form>
    </div>
  );
}

export default AddShip;
import React from 'react';
import '../style.css'
import { Link } from 'react-router-dom'


function Cards (){
  return (  
  <section className="card-container">

      <div className="card">
        <div className="card-image card1"></div>
        <h2>Port staff</h2>
        {/* <a href=""><button className="btn">Get started</button></a> */}
        <Link to={"/staff"} className="btn">Get started</Link>
      </div>

      <div className="card">
        <div className="card-image card2"></div>
        <h2>Ships</h2>
        {/* <a href=""><button className="btn">Get started</button></a> */}
        <Link to={"/ships"} className="btn">Get started</Link>    
      </div>

      {/* <div className="card">
        <div className="card-image card3"></div>
        <h2>Docks</h2>
        <a href=""><button className="btn">Get started</button></a>
        
      </div> */}

  </section>
    
  )
}

export default Cards;
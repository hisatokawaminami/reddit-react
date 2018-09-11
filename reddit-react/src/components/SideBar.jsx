import React from 'react';
import { Link } from 'react-router-dom';

function SideBar(){
  return (
    <div className="side-bar col-md-4" >
      <style jsx>{`
          .side-bar {
            float: right;
            width: 300px;
            height: 600px;
            padding: 40px;
            border: 5px solid ;
          }
          `}</style>

        <Link to="/newpost">Create Ticket</Link><br/>
      <Link to="/">Home</Link>
    </div>
  );
}

export default SideBar;

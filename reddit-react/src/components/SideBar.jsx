import React from 'react';

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

            <button className="btn-danger">Create Post</button>
        </div>
    );
}

export default SideBar;

import React from 'react';
import HeaderImg from '../assets/images/header.jpg';

function Header() {
  return (
    <div className="header">
      <style jsx>{`
          .header {
            background-image: url(${HeaderImg});
            height: 200px;
            max-width: 200vw;
            background-size: contain;
            background-repeat: ;
          }
          h1 {
            text-align: center;
          }

          `}

      </style>
      <h1>r/aww</h1>
    </div>
  );
}

export default Header;

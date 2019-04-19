import React from "react";

function Header(){
  return (
    <div>
      <div className="header">
        <h1>Welcome Back!</h1>
        <h1>Your To-Do List</h1>
        <style jsx>{`
          .header {
            text-align: center;
          }
          `}</style>
      </div>
    </div>
  );
}

export default Header;
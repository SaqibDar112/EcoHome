import React from 'react';

const Navbar = () => {
  // const userName = "User Name";

  return (
   <div className='row'>
     <nav className="navbar navbar-expand-lg custom-bg py-2" style={{ backgroundColor: '#f8f9fa', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '100vw' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* First Half: ecoHome Header */}
        <div className="navbar-brand">
          <h3 className="mb-0 px-4 ">EcoHome</h3>
        </div>

        {/* Second Half: User Information and Icon */}
       
      </div>
    </nav>
   </div>
  );
};

export default Navbar;
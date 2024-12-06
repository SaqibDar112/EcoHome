import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use Link instead of a tags
import '../css/Side.css';
import { signout } from '../api/UserApi.js';

import { isAuthenticated } from '../api/UserApi.js';
const Sidebar = () => {
    
  let { user, token } = isAuthenticated();
    const navigate = useNavigate();
    const handleSignout=()=>{
        signout()
        .then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
                navigate('/login')
            }
        })
    }
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/redeemcoins">Redeem Coins</Link></li>
                <li><Link to="/elec-consumption">Consumption Calculator</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/UserReviews">Review</Link></li>
                <li><Link to="/help">Help</Link></li>
            </ul>
          {user &&
            <div className='text-cetner d-flex justify-content-end flex-column align-items-cente p-3 mt-5r'>
            <button className='btn btn-danger' onClick={handleSignout}>Logout</button>
        </div>
          }
        </div>
    );
};
export default Sidebar;
import React from 'react';
import { Link} from 'react-router-dom';
import'./styles/index.css';
import Companylogo from'./Companylogo.png';
const Navbar = () => {
    return (
         <nav>  
        <div>
          <img src={Companylogo} className="Nav-logo" alt="Company logo" />
        </div>
            <ul>
                   <li><Link to="/Home"> Home</Link></li>
                   <li><Link to="/about"> AboutUs </Link></li>
                   <li><Link to="/contact"> ContactUs </Link></li>
                   <li><Link to="/profile"> Profile </Link></li>
                   <li><Link to="/services"> Services </Link></li>
                   <li><Link to="/login"> Login </Link></li>      
               </ul>         
           </nav>
       );
};

export default Navbar;

import { Link } from 'gatsby';
import React from 'react';

const Navbar = () => {
    return (

        <nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>LOGO</h4>
                    </div>
                    <div className="col-md-8 design d-flex justify-content-end">

                        <ul>
                            <li><Link to="/"> Home </Link></li>
                            <li><Link to="/Projects">Projects</Link></li>
                            <li><Link to="/About"> About </Link></li>
                            <li><Link to="/Contact"> Contact </Link></li>
                            <li><Link to="/PageDetails" >PageDetails</Link></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

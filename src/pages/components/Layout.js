import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import SimpleReactLightbox from 'simple-react-lightbox'
const Layout = ({children}) => {
    
    return (
        <React.Fragment>
              <Navbar/>
              <SimpleReactLightbox>
             {children}
             </SimpleReactLightbox>
           
            <Footer/>
        </React.Fragment>
    );
}

export default Layout;

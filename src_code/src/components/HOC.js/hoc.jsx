import React from 'react';
// Components
import Navbar from '../NavBar/Nav';
import Footer from '../Footer/FooterComponent';
import Sidebar from '../Sidebar/Sidebar';
// Higher-order component to add navbar and footer to pages
export const withSidebarLayout = (Component) => {
  return function WithLayoutComponent() {
    return (
      <>
        <Navbar />
        <div style={{display:'flex', flexDirection:'row'}}>
            <Sidebar />
           <Component />   
        </div>
        
        <Footer />
      </>
    );
  };
};

export const withLayout = (Component) => {
    return function WithLayoutComponent() {
      return (
        <>
          <Navbar />
          <Component />             
          <Footer />
        </>
      );
    };
  };


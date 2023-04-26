import React,{useState} from 'react';
import { NavLink , Link} from 'react-router-dom';
// import {HashLink} from 'react-router-hash-link';

const Header = () => {
  return (
      
   <>
      <div className="loader_bg">
            <div className="loader"><img src="images/loading.gif" alt="#"/></div>
      </div>
      <div className="inc-pad">
        <div className="container">
            <div className="row ">
                <div className="col-lg-6">
                    <div className="flex-item">
                        {/* <ul>
                            <li>
                                <i className="fas fa-map-marker-alt"></i> India, Varanasi
                            </li>
                            <li>
                                <i className="fas fa-envelope-open"></i> Info@gmail.com
                            </li>
                        </ul> */}
                    </div>
                </div>
               <div className="col-lg-6 text-right top-head">
                  <div className='flex-item'>
                  {/* <div className="social"> */}
                        <ul>
                           <li>
                              
                                 <i className="fa fa-phone"></i> +91 9651000333
                              
                           </li>
                           <li className='forres'>
                              
                                 <i className="fa fa-envelope-open"></i> Info@gmail.com
                              
                           </li>
                           
                        </ul>
                  {/* </div> */}
                  </div>
               </div>
            </div>
         </div>
      </div>
      <header>
      
         <div className="header">
            <div className="container">
               <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div className="full ">
                        <div className="center-desk">
                           <div className="logo ">
                              <Link to="/home">
                                 <img src="images/Hotel Ramaya Palace Logo_.png" alt="logo" className="img-fluid logo"/>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <nav className="navigation navbar navbar-expand-md navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample04">
                           <ul className="navbar-nav mr-auto">
                              <li className="nav-item">
                              <NavLink to="/home" className="nav-link">Home</NavLink>
                                 {/* <a className="nav-link" href="index.html">Home</a> */}
                              </li>
                              <li className="nav-item">
                              <NavLink to="./about" className="nav-link">About</NavLink>
                                 {/* <a className="nav-link" href="about.html">About</a> */}
                              </li>
                              <li className="nav-item">
                              <NavLink to="./ayodhya" className="nav-link">Ayodhya</NavLink>
                                 {/* <a className="nav-link" href="blog.html">Ayodhya</a> */}
                              </li>
                              <li className="nav-item">
                              <NavLink to="./advantage" className="nav-link">Facility</NavLink>
                                 {/* <a className="nav-link" href="room.html">Advantages</a> */}
                              </li>
                              <li className="nav-item ">
                                 <NavLink to="./gallery" className="nav-link">Gallery</NavLink>
                                 {/* <a className="nav-link" href="gallery.html">Gallery</a> */}
                              </li>
                              <li className="nav-item">
                                 <NavLink to="./Prices" className="nav-link">Tariff</NavLink>
                                 {/* <a className="nav-link" href="room.html">Advantages</a> */}
                              </li>
                              <li className="nav-item">
                                 <NavLink to="./contact" className="nav-link">Contact</NavLink>
                                 {/* <a className="nav-link" href="contact.html">Contact Us</a> */}
                              </li>
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </header>
      </>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
      
      <footer>
         <div className="footer">
            <div className="container">
               <div className="row">
                  <div className=" col-md-4 text-left">
                     {/* <h3>Contact US</h3>
                     <ul className="conta">
                        <li><i className="fa fa-map-marker" aria-hidden="true"></i> Address</li>
                        <li><i className="fa fa-mobile" aria-hidden="true"></i> +01 1234569540</li>
                        <li> <i className="fa fa-envelope" aria-hidden="true"></i><Link to="#"> demo@gmail.com</Link></li>
                     </ul> */}
                     <img src="images/Hotel Ramaya Palace Logo_.png" alt="" />
                     <ul className="social_icon text-center">
                        <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                        {/* <li><Link to="#"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></Link></li> */}
                     </ul>
                  </div>
                  <div className="col-md-4">
                     <h3>Menu Link</h3>
                     <ul className="link_menu">
                        <li>
                           <Link to="./home">Home</Link>
                        </li>
                        <li>
                           <Link to="./about">About</Link>
                        </li>
                        <li>
                           <Link to="./ayodhya">Ayodhya</Link>
                        </li>
                        <li>
                           <Link to="./advantage">Facility</Link>
                        </li>
                        <li>
                           <Link to="./gallery">Gallery</Link>
                        </li>
                        <li>
                           <Link to="./tariff">Tariff</Link>
                        </li>
                        <li>
                           <Link to="./contact">Contact</Link>
                        </li>
                     </ul>
                  </div>
                  <div className=" col-md-4">
                     <h3>Contact US</h3>
                     <ul className="conta">
                        <li><i className="fa fa-map-marker" aria-hidden="true"></i> Address</li>
                        <li><i className="fa fa-mobile" aria-hidden="true"></i> +01 1234569540</li>
                        <li> <i className="fa fa-envelope" aria-hidden="true"></i><Link to="#"> demo@gmail.com</Link></li>
                     </ul>
                  </div>
                  {/* <div className="col-md-4">
                     <h3>News letter</h3>
                     <form className="bottom_form">
                        <input className="enter" placeholder="Enter your email" type="text" name="Enter your email"/>
                        <button className="sub_btn">subscribe</button>
                     </form>
                     <ul className="social_icon">
                        <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                        <li><Link to="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></Link></li>
                     </ul>
                  </div> */}
               </div>
            </div>
            {/* <div className="copyright">
               <div className="container">
                  <div className="row">
                     <div className="col-md-10 offset-md-1">
                        
                        <p>
                        © 2019 All Rights Reserved. Design by <Link to="https://html.design/"> Free Html Templates</Link>
                        <br/><br/>
                        Distributed by <a href="https://themewagon.com/" target="_blank">ThemeWagon</a> 
                        </p>

                     </div>
                  </div>
               </div>
            </div> */}
         </div>
        
    </footer>
    </div>
  )
}

export default Footer

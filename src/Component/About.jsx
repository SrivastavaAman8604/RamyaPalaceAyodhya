import React from 'react'
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
    <Helmet>
         <title>About us</title>
         <meta name='description' content='All About Ramya Palace'/>
      </Helmet>
      <div className="back_re">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="title">
                     <h2>About Us</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="about">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-5">
                  <div className="titlepage">
                    
                     <p className="margin_0">We are a premium hotel that strives to provide our guests with the best      possible hospitality experience. Our hotel is located in the heart of the city, providing easy access to all major tourist attractions .</p>
                      <p>Our well-appointed rooms are designed to offer the utmost comfort and convenience, equipped with modern amenities to cater to all your needs. We offer a range of room types to choose from, including deluxe rooms and suites.</p>
                      <p>At our hotel, we are committed to providing our guests with a memorable and enjoyable stay. Our friendly and courteous staff are always available to assist you with any queries or requests you may have. Thank you for choosing our hotel for your stay in Ayodhya. </p>
                     <a className="read_more" href="Javascript:void(0)"> Read More</a>
                  </div>
               </div>
               <div className="col-md-7">
                  <div className="about_img">
                     <figure><img src="images/cropImages/20220509_185915.jpg" alt="about hotel"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default About

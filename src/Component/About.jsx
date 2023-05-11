import React from 'react'
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
         <title>About Hotel Ramay Palace - Ramjanmbhoomi Ayodhya</title>
         <link rel="canonical" href="https://ramaypalace.com/about" />
         <meta name='description' content='Welcome to Hotel Ramay Palace, the nearest hotel to Ram Janmbhoomi in Ayodhya. Enjoy comfort stay and travel desk services for Darshan and Holiday visits'/>
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
                  <div className="titlepage animated fadeInUp">
                    
                     <p className="margin_0">We are a boutique Hotel in Ayodhya, the land of Ram Janmbhoomi. We strive to provide our guests with the best possible hospitality experience. Our hotel provides easy access to all major tourist destinations in Ayodhya, like Ram Janmbhoomi, Hanuman Garhi, Ramkot Fort & Sita ki Rasoi and many more.
                     </p>
                      <p>Our well-appointed rooms are designed to offer the utmost comfort and convenience, equipped with modern amenities to cater to all your needs. We offer a range of room types to choose from.
</p>
                      <p>At our hotel, we are committed to providing our guests with a memorable and enjoyable stay. Our friendly and courteous staff are always available to assist you with any queries or requests you may have. 
</p>
<p>We also have a Travel Desk from where we help our Guests to arrange Taxis, Guides and other things needed to visit Temples and other Religious Locations.
</p>
                     
                  </div>
               </div>
               <div className="col-md-7  animated fadeInUp">
                  <div className="about_img">
                     <figure>
                        <img src="images/Images/About-Us/about-hotel-ramay-palace.jpeg" alt="about Hotel Ramay Palace Ayodhya"/>
                        {/* <img src='images/NewImages/WhatsApp Image 2023-04-27 at 11.01.30 (4).jpeg'/> */}
                        
                        {/* <img src='images/NewImages/WhatsApp Image 2023-04-27 at 11.01.30.jpeg'/> */}
                     </figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default About

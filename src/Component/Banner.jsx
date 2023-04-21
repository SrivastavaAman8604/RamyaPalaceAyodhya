import React from 'react'
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { SocialIcon } from 'react-social-icons';

const Banner = () => {
  return (
   <>
   <Helmet>
         <title>Ramay Palace</title>
         <meta name='description' content='Home Page '/>
      </Helmet>
   <section className="banner_main" >
      <div className="icon-bar">
   <a href="https://www.facebook.com/theelegancehotel/" target="_blank" className="facebook"><i className="fa fa-facebook"></i>
   </a>
   <a href="https://www.instagram.com/theelegancehotel/" target="_blank" className="instagram ">
      <i className="fa fa-instagram"></i>
      {/* <i className="bi bi-instagram"></i> */}
   </a>
   {/* <SocialIcon url="https://instagram.com/in/jaketrent" /> */}

   <a href="https://api.whatsapp.com/send?phone=+918810719088&amp;text=Hi! I need your help with a booking for Hotel Ramya Palace" target="_blank" className="whatsapp"><i className="fa fa-whatsapp"></i></a>
   <a href="tel:+918810719088" target="_blank" className="phone"><i className="fa fa-phone"></i></a>
</div>
   <div id="myCarousel" className="carousel slide banner" data-ride="carousel" >
      <ol className="carousel-indicators ">
         <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
         <li data-target="#myCarousel" data-slide-to="1"></li>
         <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner ">
         <div className="carousel-item active">
            <img className="first-slide" src="images/cropImages/20220509_185915.1.jpg" alt="First slide"/>
             {/* <img className="first-slide" src="images/Images edit/1280x854/Hotel-Post-1280x854-00.jpg" alt="First slide"/> */}
            <div className="container">
            </div>
          </div>
          <div className="carousel-item">
             <img className="second-slide" src="images/cropImages/20220509_185426.2.jpg" alt="Second slide" />
          </div>
          <div className="carousel-item">
             <img className="third-slide h-25" src="images/cropImages/20220509_184754.1.jpg" alt="Third slide"/>
          </div>
       </div>
       <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
       <span className="sr-only">Previous</span>
       </a>
       <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
       <span className="sr-only">Next</span>
       </a>
    </div>
      
   <div className="booking_ocline">
      <div className="container">
         <div className="row">
            <div className="col-md-5">
               <div className="book_room">
                  <h1>Book a Room Online</h1>
                  <form className="book_now">
                     <div className="row">
                        <div className="col-md-12">
                           <div className='row'>
                           <div className='col-md-6'>
                              <span>Name</span>
                              <input className="online_book" placeholder="Enter name" type="name"/>
                           </div>
                           <div className="col-md-6">
                              <span>Email</span>
                              <input className="online_book" placeholder="Email" type="email" name="email"/>
                           </div>
                           </div>
                        </div>
                        <div className="col-md-12">
                           <div className='row'>
                           <div className='col-md-6'>
                              <span>Phone No.</span>
                              <input className="online_book" placeholder="Enter number" type="phone" name="phone"/>
                           </div>
                           <div className="col-md-6">
                              <span>No. of Persons</span>
                              <input className="online_book" placeholder="No. of Persons" list="p-details" name="person"/>
                                 <datalist id="p-details">
                                                {/* <option value="">No. of Persons</option> */}
                                                <option value="1 Adult">1 Adult</option>
                                                <option value="2 Adult">2 Adult</option>
                                                <option value="3 Adult">3 Adult</option>
                                                <option value="4 Adult">4 Adult</option>
                                                <option value="5 Adult">5 Adult</option>
                                                <option value="6 Adult">6 Adult</option>
                                 </datalist>
                           </div>
                           </div>
                        </div>
                        <div className="col-md-12">
                           <div className='row'>
                           <div className="col-md-6">
                              <span>Arrival</span>
                              <img className="date_cua" src="images/date.png" alt='Arrival date'/>
                              <input className="online_book" placeholder="dd/mm/yyyy" type="date" name="dd/mm/yyyy"/>
                           </div>
                           <div className='col-md-6'>
                              <span>Departure</span>
                              <img className="date_cua" src="images/date.png" alt='Departure date'/>
                              <input className="online_book" placeholder="dd/mm/yyyy" type="date" name="dd/mm/yyyy"/>
                           </div>
                           </div>
                        </div>
                        <div className="col-md-12">
                           <button className="book_btn">Book Now</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
            <div className='col-md-7 text-right'>
               <img src="images/logoheading.png" alt="" className='carousel-logo'/>
            </div>
         </div>
      </div>
   </div>
   </section>
   
   <section>
   {/*About Section*/}
   <div className="about">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-5">
                  <div className="titlepage">
                     <h2>About Us</h2>
                     <p>We are a premium hotel that strives to provide our guests with the best      possible hospitality experience. Our hotel is located in the heart of the city, providing easy access to all major tourist attractions. </p>
                     <p>At our hotel, we are committed to providing our guests with a memorable and enjoyable stay. Our friendly and courteous staff are always available to assist you with any queries or requests you may have. Thank you for choosing our hotel for your stay in Ayodhya. </p>
                     <Link className="read_more" to={"/about"}> Read More</Link>
                  </div>
               </div>
               <div className="col-md-7">
                  <div className="about_img">
                     <figure><img src="images/cropImages/20220509_185915.jpg" alt="about hotel" /></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/*Why Choose US Section*/}
      <div  className="our_room">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Facilities</h2>
                     <p> Make your stay memorable with Us </p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4 col-sm-6">
                  <div id="serv_hover"  className="room">
                     <div className="room_img">
                        <figure><img src="images/Images edit/1280x854/Hotel-Post-1280x854-01.jpg" alt="Parking Facility"/></figure>
                     </div>
                     {/* <div className="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div> */}
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div id="serv_hover"  className="room">
                     <div className="room_img">
                        <figure><img src="images/Images edit/1280x854/Hotel-Post-1280x854-02.jpg" alt="Spacious Room"/></figure>
                     </div>
                     {/* <div className="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div> */}
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div id="serv_hover"  className="room">
                     <div className="room_img">
                        <figure><img src="images/Images edit/1280x854/Hotel-Post-1280x854-03.jpg" alt="Luxury & comfy room"/></figure>
                     </div>
                     {/* <div className="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div> */}
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div id="serv_hover"  className="room">
                     <div className="room_img">
                        <figure><img src="images/Images edit/1280x854/Hotel-Post-1280x854-05.jpg" alt="fully AC"/></figure>
                     </div>
                     {/* <div className="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div> */}
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div id="serv_hover"  className="room">
                     <div className="room_img">
                        <figure><img src="images/Images edit/1280x854/Hotel-Post-1280x854-06.jpg" alt="300m from Shri Ram Janmbhoomi"/></figure>
                     </div>
                     {/* <div className="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div> */}
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div id="serv_hover"  className="room">
                     <div className="room_img">
                        <figure><img src="images/Images edit/1280x854/Hotel-Post-1280x854-07.jpg" alt="Affordable Price"/></figure>
                     </div>
                     {/* <div className="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div> */}
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/*Ayodhya Section*/}
      <div  className="blog">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Pilgrimage</h2>
                     <p>Discover the Spiritual Essence </p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div className="blog_box">
                     <div className="blog_img">
                        <figure><img src="images/ayodhya/arti (1).jpg" alt="Sandhya Arti"/></figure>
                     </div>
                     <div className="blog_room">
                        <h3>Sandhya Arti</h3>
                        <span>offering prayers to Lord Rama  </span>
                        {/* <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p> */}
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="blog_box room">
                     <div className="blog_img">
                        <figure><img src="images/ayodhya/AYODHYA.jpg" alt="Ghat of Ayodhya"/></figure>
                     </div>
                     <div className="blog_room">
                        <h3>Ghat</h3>
                        <span> Holy Riverside Ghats</span>
                        {/* <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p> */}
                     </div>
                  </div>
               </div>
               <div className="col-md-4 ">
                  <div className="blog_box room">
                     <div className="blog_img ">
                        <figure><img src="images/ayodhya/Mandir (1).jpg" alt="Ram Janmabhoomi"/></figure>
                     </div>
                     <div className="blog_room">
                        <h3>Ram Janmbhoomi</h3>
                        <span>birthplace of Lord Rama  </span>
                        {/* <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p> */}
                     </div>
                  </div>
               </div>
            </div>
            <Link className="book_btn text-center" to={"/ayodhya"}> Read More</Link>
         </div>
      </div>

      {/* Contact */ }
      <div className="contact">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Contact Us</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-6">
                  <form id="request" className="main_form">
                     <div className="row">
                        <div className="col-md-12 ">
                           <input className="contactus" placeholder="Name" type="type" name="Name" /> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Email" type="type" name="Email" /> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number" />                          
                        </div>
                        <div className="col-md-12">
                           <textarea className="textarea" placeholder="Message" type="type" Message="Name">Message</textarea>
                        </div>
                        <div className="col-md-12">
                           <button className="send_btn">Send</button>
                        </div>
                     </div>
                  </form>
               </div>
               <div className="col-md-6">
                  <div className="map_main">
                     <div className="map-responsive">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28492.600538754083!2d82.17856816620748!3d26.78981201974049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07937e6d2823%3A0x5fc8f683b17f222b!2sAyodhya%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1681909363153!5m2!1sen!2sin" title='Your Location' width="600" height="400" frameborder="0" style={{border:0, width: "100%"}}></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
</section>
</>
)
}

export default Banner

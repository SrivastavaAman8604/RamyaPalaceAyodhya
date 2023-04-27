import React,{useState} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { SocialIcon } from 'react-social-icons';

const Banner = () => {
   const [startDate, setStartDate] = useState(new Date());
   const [endDate, setEndDate] = useState(new Date());

  return (
   <>
      <Helmet>
         <title>Ramay Palace</title>
         <meta name='description' content='Home Page '/>
      </Helmet>
   <section className="banner_main" >
      <div className="icon-bar">
   {/* <a href="https://www.facebook.com/theelegancehotel/" target="_blank" className="facebook"><i className="fa fa-facebook"></i>
   </a>
   <a href="https://www.instagram.com/theelegancehotel/" target="_blank" className="instagram ">
      <i className="fa fa-instagram"></i>
   </a> */}

   <a href="https://api.whatsapp.com/send?phone=+919651000333&amp;text=Hi! I need your help with a booking for Hotel Ramay Palace" target="_blank" className="whatsapp"><i className="fa fa-whatsapp"></i></a>
   <a href="tel:+919651000333" target="_blank" className="phone"><i className="fa fa-phone"></i></a>
</div>
         {/* <div id="myCarousel" className="carousel slide banner" data-ride="carousel" >
            <ol className="carousel-indicators ">
               <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
               <li data-target="#myCarousel" data-slide-to="1"></li>
               <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner ">
               <div className="carousel-item active">
                  <img className="first-slide" src="images/Images/20220509_185915.1.jpg" alt="First slide"/>
                  <img className="first-slide" src="images/Images edit/1280x854/Hotel-Post-1280x854-00.jpg" alt="First slide"/>
                  <div className="container">
                  </div>
               </div>
               <div className="carousel-item">
                  <img className="second-slide" src="images/Images/20220509_185426.2.jpg" alt="Second slide" />
               </div>
               <div className="carousel-item">
                  <img className="third-slide h-25" src="images/Images/20220509_184754.1.jpg" alt="Third slide"/>
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
         </div> */}

            <Carousel 
               showIndicators={false}
               showThumbs={false} 
               showStatus={false} 
               interval={2000}
               infiniteLoop={true}
               autoPlay={true}
               style={{height:"1392px;"}}
            >
               <div className='adjust'>
                  {/* <img src='images/Images/img.jpeg'/> */}
                  <img src="images/Images/slide/20220509_185915.2.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
               </div>
               <div>
                  <img src="images/Images/slide/20220509_185426.3.jpg" />
                  {/* <img src='images/NewImages/WhatsApp Image 2023-04-27 at 11.01.30 (4).jpeg'/> */}
                    {/* <p className="legend">Legend 2</p> */}
               </div>
               <div>
                  {/* <img src='images/NewImages/WhatsApp Image 2023-04-27 at 11.01.30 (5).jpeg'/> */}
                  <img src="images/Images/slide/20220509_184754.4.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
               </div>
            </Carousel>
      
   <div className="booking_ocline ">
      <div className="container">
         <div className="row">
            <div className="col-md-5">
               <div className="book_room animated fadeInUp">
                  <h1>Book a Room Online</h1>
                  <form className="book_now">
                     <div className="row">
                        <div className="col-md-12">
                           <div className='row'>
                           <div className='col-md-6'>
                              <span>Name</span>
                              <input className="online_book" id="name-book" placeholder="Enter name" type="name"/>
                           </div>
                           <div className="col-md-6">
                              <span>Email</span>
                              <input className="online_book" id="email-book" placeholder="Email" type="email" name="email"/>
                           </div>
                           </div>
                        </div>
                        <div className="col-md-12">
                           <div className='row'>
                           <div className='col-md-6'>
                              <span>Phone </span>
                              <input className="online_book" id='phone-book' placeholder="Enter number" type="phone" name="phone"/>
                           </div>
                           <div className="col-md-6">
                              <span>No. of Persons</span>
                              <input className="online_book" id="person-book" placeholder="No. of Persons" list="p-details" name="person"/>
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
                              {/* <img className="date_cua" src="images/date.png" alt='Arrival date'/> */}
                              <DatePicker className="online_book" 
                              selected={startDate}
                              dateFormat='dd-MM-yyyy'
                              onChange={(date) => setStartDate(date)} 
                              minDate={new Date()}
                              />
                              {/* <input className="online_book form-control datepicker" id="date_picker" placeholder="dd/mm/yyyy" type="text" name="dd/mm/yyyy"/> */}
                           </div>
                           <div className='col-md-6'>
                              <span>Departure</span>
                              {/* <img className="date_cua" src="images/date.png" alt='Departure date'/> */}
                              <DatePicker className="online_book" 
                              selected={endDate} 
                              dateFormat='dd-MM-yyyy'
                              onChange={(date) => setEndDate(date)} 
                              minDate={new Date()}
                              // maxDate={new Date().setDate(30)}
                              />
                              {/* <input className="online_book" placeholder="dd/mm/yyyy" type="date" name="dd/mm/yyyy"/> */}
                           </div>
                           </div>
                        </div>
                        <div className="col-md-12">
                           <button className="book_btn book-now-submit">Book Now</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>

            
            <div className='col-md-7 text-right sidelogo animated fadeInUp'>
               <img src="images/logoheading.png" alt="" className='carousel-logo '/>
            </div>
         </div>
      </div>
   </div>
   </section>
   
   <section>
   {/*About Section*/}
   <div className="about home-aboutus">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-5">
                  <div className="titlepage animated fadeInUp">
                     <h2>About Us</h2>
                     <p>We are a premium hotel that strives to provide our guests with the best      possible hospitality experience. Our hotel is located in the heart of the city, providing easy access to all major tourist attractions. </p>
                     <p>At our hotel, we are committed to providing our guests with a memorable and enjoyable stay. Our friendly and courteous staff are always available to assist you with any queries or requests you may have. Thank you for choosing our hotel for your stay in Ayodhya. </p>
                     <Link className="read_more" to={"/about"}> Read More</Link>
                  </div>
               </div>
               <div className="col-md-7">
                  <div className="about_img">
                     <figure><img src="images/Images/aboutImg.jpg" alt="about hotel" /></figure>
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
                     <div className="room_img animated fadeInUp">
                        <figure><img src="images/Images/Facilities/Hotel-Post-1280x854-01.jpg" alt="Parking Facility"/></figure>
                     </div>
                     {/* <div className="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div> */}
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div id="serv_hover"  className="room">
                     <div className="room_img animated fadeInUp">
                        <figure><img src="images/Images/Facilities/Hotel-Post-1280x854-02.jpg" alt="Spacious Room"/></figure>
                     </div>
                     {/* <div className="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div> */}
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div id="serv_hover"  className="room">
                     <div className="room_img animated fadeInUp">
                        <figure><img src="images/Images/Facilities/Hotel-Post-1280x854-03.jpg" alt="Luxury & comfy room"/></figure>
                     </div>
                     {/* <div className="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div> */}
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div id="serv_hover"  className="room">
                     <div className="room_img animated fadeInUp">
                        <figure><img src="images/Images/Facilities/Hotel-Post-1280x854-05.jpg" alt="fully AC"/></figure>
                     </div>
                     {/* <div className="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div> */}
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div id="serv_hover"  className="room">
                     <div className="room_img animated fadeInUp">
                        <figure><img src="images/Images/Facilities/Hotel-Post-1280x854-06.jpg" alt="300m from Shri Ram Janmbhoomi"/></figure>
                     </div>
                     {/* <div className="bed_room">
                        <h3>Bed Room</h3>
                        <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                     </div> */}
                  </div>
               </div>
               <div className="col-md-4 col-sm-6">
                  <div id="serv_hover"  className="room">
                     <div className="room_img animated fadeInUp">
                        <figure><img src="images/Images/Facilities/Hotel-Post-1280x854-07.jpg" alt="Affordable Price"/></figure>
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
                        <figure><img src="images/Images/Ayodhya/arti (1).jpg" alt="Sandhya Arti"/></figure>
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
                        <figure><img src="images/Images/Ayodhya/AYODHYA.jpg" alt="Ghat of Ayodhya"/></figure>
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
                        <figure><img src="images/Images/Ayodhya/Mandir (1).jpg" alt="Ram Janmabhoomi"/></figure>
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
                           <input className="contactus" id="name" placeholder="Name" type="type" name="Name" /> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" id="email" placeholder="Email" type="type" name="Email" /> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" id="phone" placeholder="Phone Number" type="type" name="Phone Number" />                          
                        </div>
                        <div className="col-md-12">
                           <textarea className="textarea" id="message" placeholder="Message" type="type" Message="Name"/>
                        </div>
                        <div className="col-md-12">
                           <button className="send_btn contact-us-submit" type='submit'>Send</button>
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

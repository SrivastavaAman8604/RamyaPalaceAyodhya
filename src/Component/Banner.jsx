import React,{useState,useRef} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Contact from './Contact';
import emailjs from '@emailjs/browser';
import ContactUs from './ContactUs';
// import { SocialIcon } from 'react-social-icons';

const Banner = () => {
   const [startDate, setStartDate] = useState(new Date());
   const [endDate, setEndDate] = useState(new Date());

   // const[name,setName]=useState("");
   // const[email,setEmail]=useState("");
   // const[phone,setPhone]=useState("");
   // const[message,setMessage]=useState("");
   // const form = useRef();

   // const sendEmail = (e) => {
   //    e.preventDefault();
   //        try {
   //            emailjs.sendForm('service_smjpmre', 'template_rired5p', form.current, 'TWOC87q98bmLmrTRC')
   //        .then((result) => {
   //            console.log(result.text);
   //            console.log("message sent")
   //            setName("");
   //            setEmail("");
   //            setPhone("");
   //            setMessage("");
              
   //        }, (error) => {
   //            console.log(error.text);
   //            console.log(error);
   //        });
   //        } catch (error) {
   //            console.log(error);
   //        }
   //    };


  return (
   <>
      <Helmet>
         <title>Hotel Ramay Palace Ayodhya - near Ram Janmbhoomi</title>
         <link rel="canonical" href="https://ramaypalace.com" />
         <meta name='description' content='Welcome to Hotel Ramay Palace, a boutique hotel in Ayodhya close to Ram Janmbhoomi where you can stay with your family and have a spiritual vacation.'/>
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
 
            <Carousel 
               showIndicators={false}
               showThumbs={false} 
               showStatus={false} 
               interval={2000}
               infiniteLoop={true}
               autoPlay={true}
            >
               <div className='adjust'>
                  {/* <img src='images/Images/img.jpeg'/> */}
                  <img src="images/Images/slide/Hotel-Ramay-Palace-Ayodhya-1.jpg" />
                    {/* <p className="legend">Legend 1</p> */}
               </div>
               <div>
                  <img src="images/Images/slide/Hotel-Ramay-Palace-Ayodhya-2.2.jpg" />
                  {/* <img src='images/NewImages/WhatsApp Image 2023-04-27 at 11.01.30 (4).jpeg'/> */}
                    {/* <p className="legend">Legend 2</p> */}
               </div>
               <div>
                  {/* <img src='images/NewImages/WhatsApp Image 2023-04-27 at 11.01.30 (5).jpeg'/> */}
                  <img src="images/Images/slide/Hotel-Ramay-Palace-Ayodhya.jpeg" />
                    {/* <p className="legend">Legend 3</p> */}
               </div>
               <div>
                  {/* <img src='images/NewImages/WhatsApp Image 2023-04-27 at 11.01.30 (5).jpeg'/> */}
                  <img src="images/Images/slide/Hotel-Ramay-Palace-Ayodhya-2.jpg" />
                    {/* <p className="legend">Legend 3</p> */}
               </div>
            </Carousel>
      
   <div className="booking_ocline ">
      <div className="container">
         <div className="row">
            <div className="col-md-5">
               <div className="book_room animated fadeInUp">
                  <h1>Book a Room Online</h1>
                  <div className="booking-message"></div>
                  <form id='bookingform' className="book_now">
                     <div className="row">
                        <div className="col-md-12">
                           <div className='row'>
                           <div className='col-md-6'>
                              <span>Name</span>
                              <input className="online_book" id="booking_name" placeholder="Enter name" type="text"/>
                           </div>
                           <div className="col-md-6">
                              <span>Email</span>
                              <input className="online_book" id="booking_email" placeholder="Email" type="email" name="email"/>
                           </div>
                           </div>
                        </div>
                        <div className="col-md-12">
                           <div className='row'>
                              <div className='col-md-6'>
                                 <span>Phone </span>
                                 <input className="online_book" id='booking_phone' placeholder="Enter number" type="text" name="phone"/>
                              </div>
                              <div className="col-md-6">
                                 <span>No. of Persons</span>
                                 {/* <input className="online_book" id="person-book" placeholder="No. of Persons" list="p-details" name="person"/> */}
                                    <select id="booking_person" className="online_book">
                                       {/* <option value="">No. of Persons</option> */}
                                       <option value="1 Adult">1 Adult</option>
                                       <option value="2 Adult">2 Adult</option>
                                       <option value="3 Adult">3 Adult</option>
                                       <option value="4 Adult">4 Adult</option>
                                       <option value="5 Adult">5 Adult</option>
                                       <option value="6 Adult">6 Adult</option>
                                    </select>
                              </div>
                           </div>
                        </div>
                        <div className="col-md-12">
                           <div className='row'>
                           <div className="col-md-6">
                              <span>Check-In</span>
                              {/* <img className="date_cua" src="images/date.png" alt='Arrival date'/> */}
                              <DatePicker className="online_book" id="booking_checkin" name='checkin'
                              selected={startDate}
                              dateFormat='dd-MM-yyyy'
                              onChange={(date) => setStartDate(date)} 
                              minDate={new Date()}
                              />
                              {/* <input className="online_book form-control datepicker" id="date_picker" placeholder="dd/mm/yyyy" type="text" name="dd/mm/yyyy"/> */}
                           </div>
                           <div className='col-md-6'>
                              <span>Check-Out</span>
                              {/* <img className="date_cua" src="images/date.png" alt='Departure date'/> */}
                              <DatePicker className="online_book" id="booking_checkout" name='checkout'
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
                           <button className="book_btn book-now-submit" type='button'>Book Now</button>
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
                     <h1>Hotel Ramay Palace Ayodhya</h1>
                     <h3><strong>300m from Shri Ram Janmbhoomi</strong></h3>
                     <p>We are a boutique Hotel in Ayodhya, the land of Ram Janmbhoomi. We strive to provide our guests with the best possible hospitality experience. Our hotel provides easy access to all major tourist destinations in Ayodhya, like Ram Janmbhoomi, Hanuman Garhi, Ramkot Fort & Sita ki Rasoi and many more.
                      </p>
                     <p>At our hotel, we are committed to providing our guests with a memorable and enjoyable stay. Our friendly and courteous staff are always available to assist you with any queries or requests you may have. 
                     </p>
                     <p>We also have a Travel Desk from where we help our Guests to arrange Taxis, Guides and other things needed to visit Temples and other Religious Locations.
                     </p>
                     <Link className="read_more" to={"/about"}> Read More</Link>
                  </div>
               </div>
               <div className="col-md-7">
                  <div className="about_img">
                     <figure><img src="images/Images/About-Us/about-hotel-ramay-palace.jpeg" alt="about hotel" /></figure>
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
                     <h2>Explore Ayodhya through us</h2>
                     <p>Discover the Spiritual Essence </p>
                  </div>
               </div>
            </div>
            <div className="row">
            <div className="col-md-4 ">
                  <div className="blog_box room">
                     <div className="blog_img ayodhya">
                        <figure><img src="images/Images/Ayodhya/Mandir (1).jpg" alt="Ram Janmabhoomi"/></figure>
                     </div>
                     <div className="blog_room">
                        <h3>Shri Ram Janmbhoomi</h3>
                        <span>birthplace of Shri Rama  </span>
                        {/* <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p> */}
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="blog_box">
                     <div className="blog_img ayodhya">
                        <figure><img src="images/Images/Ayodhya/kanakBhavan.jpg" alt="Kanak Bhawan"/></figure>
                     </div>
                     <div className="blog_room">
                        <h3>Kanak Bhawan</h3>
                        <span>Temple for Shri Ram and Mata Sita.</span>
                        {/* <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p> */}
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="blog_box room">
                     <div className="blog_img ayodhya">
                        <figure><img src="images/Images/Ayodhya/Hanuman (1).jpg" alt="Ghat of Ayodhya"/></figure>
                     </div>
                     <div className="blog_room">
                        <h3>Hanuman Garhi</h3>
                        <span> Temple dedicated to Hanuman Ji.</span>
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
               {/* <div className="response-message"></div>
                  <form id="contactUsForm" className="main_form" >
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
                           <textarea className="textarea" id="message" placeholder="Message" type="type" name="Message"/>
                        </div>
                        <div className="col-md-12">
                           <button className="send_btn contact-us-submit" type='button' >Send</button>
                        </div>
                     </div>
                  </form> */}
                  
                  <ContactUs/>
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

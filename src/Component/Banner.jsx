import React from 'react'
import {Link} from 'react-router-dom';

const Banner = () => {
  return (
   <>
    <section className="banner_main" >
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
                            <span>Arrival</span>
                            <img className="date_cua" src="images/date.png"/>
                            <input className="online_book" placeholder="dd/mm/yyyy" type="date" name="dd/mm/yyyy"/>
                         </div>
                         <div className="col-md-12">
                            <span>Departure</span>
                            <img className="date_cua" src="images/date.png"/>
                            <input className="online_book" placeholder="dd/mm/yyyy" type="date" name="dd/mm/yyyy"/>
                         </div>
                         <div className="col-md-12">
                            <button className="book_btn">Book Now</button>
                         </div>
                      </div>
                   </form>
                </div>
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
                     <figure><img src="images/cropImages/20220509_185915.jpg" alt="#" style={{maxHeight:"35em"}}/></figure>
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
                     <h2>Reasons to Choose us</h2>
                     <p> Make your stay memorable with Us </p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4 col-sm-6">
                  <div id="serv_hover"  className="room">
                     <div className="room_img">
                        <figure><img src="images/Images edit/1280x854/Hotel-Post-1280x854-01.jpg" alt="#"/></figure>
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
                        <figure><img src="images/Images edit/1280x854/Hotel-Post-1280x854-02.jpg" alt="#"/></figure>
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
                        <figure><img src="images/Images edit/1280x854/Hotel-Post-1280x854-03.jpg" alt="#"/></figure>
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
                        <figure><img src="images/Images edit/1280x854/Hotel-Post-1280x854-05.jpg" alt="#"/></figure>
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
                        <figure><img src="images/Images edit/1280x854/Hotel-Post-1280x854-06.jpg" alt="#"/></figure>
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
                        <figure><img src="images/Images edit/1280x854/Hotel-Post-1280x854-07.jpg" alt="#"/></figure>
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
                        <figure><img src="images/ayodhya/arti (1).jpg" alt="#"/></figure>
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
                        <figure><img src="images/ayodhya/AYODHYA.jpg" alt="#"/></figure>
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
                        <figure><img src="images/ayodhya/Mandir (1).jpg" alt="#"/></figure>
                     </div>
                     <div className="blog_room">
                        <h3>Ram Janmabhoomi</h3>
                        <span>birthplace of Lord Rama  </span>
                        {/* <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p> */}
                     </div>
                  </div>
               </div>
            </div>
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
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28492.600538754083!2d82.17856816620748!3d26.78981201974049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07937e6d2823%3A0x5fc8f683b17f222b!2sAyodhya%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1681909363153!5m2!1sen!2sin"  width="600" height="400" frameborder="0" style={{border:0, width: "100%"}}></iframe>
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

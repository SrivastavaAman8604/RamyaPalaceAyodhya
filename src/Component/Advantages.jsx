import React from 'react'
import { Helmet } from 'react-helmet'

const Room = () => {
  return (
    <>
    <Helmet>
         <title>Facilities </title>
         <meta name='description' content='Facilities '/>
      </Helmet>
      <div className="back_re">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="title">
                      <h2>Facilities</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div  className="our_room">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     {/* <h2>Reasons to Choose us</h2> */}
                     {/* <p> Make your stay memorable with Us </p> */}
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

    </>
  )
}

export default Room

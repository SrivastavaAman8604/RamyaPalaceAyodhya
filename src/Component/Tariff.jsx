import React from 'react'
import Helmet from 'react-helmet';

const Tariff = () => {
  return (
    <>
    <Helmet>
         <title>Tariff</title>
         <meta name='description' content='Price of Rooms'/>
      </Helmet>
    <div className="back_re">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="title">
                      <h2>Tariff</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
    <div  className="blog">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     {/* <h2>Pilgrimage</h2> */}
                     {/* <p>Best tariff rooms in Ayodhya </p> */}
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4 listing-item">
                  <div className="blog_box">
                     <div className="blog_img">
                        <figure><img src="images/Images/20220509_184838.jpg" alt="Room 1"/></figure>
                     </div>
                     <div className="blog_room text-center">
                        <h3 className='tariffSuite'>SUITE ROOM</h3>
                        <div className='listing'>
                            <h4><span>Double</span> <br />Rs. 7500</h4>
                            <h4><span>Single</span> <br />Rs. 6500</h4>
                        </div>
                        {/* <span>offering prayers to Lord Rama </span> */}
                        {/* <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p> */}
                     </div>
                  </div>
               </div>
               <div className="col-md-4 listing-item">
                  <div className="blog_box room">
                     <div className="blog_img">
                        <figure><img src="images/Images/20220509_184904.jpg" alt="Room 2"/></figure>
                     </div>
                     <div className="blog_room text-center">
                        <h3  className='tariffSuite'>PREMIUM ROOM</h3>
                        <div className='listing'>
                            <h4><span>Double</span> <br />Rs. 6000</h4>
                            <h4><span>Single</span> <br />Rs. 5000</h4>
                        </div>
                        {/* <span> Holy Riverside Ghats</span> */}
                        {/* <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p> */}
                     </div>
                  </div>
               </div>
               <div className="col-md-4 listing-item">
                  <div className="blog_box room">
                     <div className="blog_img ">
                        <figure><img src="images/Images/20220509_185104.jpg" alt="Room 3"/></figure>
                     </div>
                     <div className="blog_room text-center">
                        <h3 className='tariffSuite'>STANDARD ROOM</h3>
                        <div className='listing'>
                            <h4><span>Double</span> <br />Rs. 5000</h4>
                            <h4><span>Single</span> <br />Rs. 4000</h4>
                        </div>
                        {/* <span>birthplace of Lord Rama  </span> */}
                        {/* <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p> */}
                     </div>
                  </div>
               </div>
            </div>
            
         </div>
      </div>
      </>
  )
}

export default Tariff
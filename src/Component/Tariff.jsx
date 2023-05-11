import React from 'react'
import Helmet from 'react-helmet';

const Tariff = () => {
return (
   <>
      <Helmet>
         <title>Room Rates for Hotel Ramay Palace - Ram Janmbhoomi Ayodhya</title>
         <link rel="canonical" href="https://ramaypalace.com/Prices" />
         <meta name='description' content='Affordable and Reasonable Room Tariff rate for stay in Ayodhya, near Ram Janmbhoomi. Best Hotel Rates in Ayodhya with so many facilities.'/>
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
      <div  className="blog2 ">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     {/* <h2>Standard Room</h2> */}
                     {/* <p>Best tariff rooms in Ayodhya </p> */}
                  </div>
               </div>
            </div>
            {/* <div className="row animated fadeInUp">
               <div className="col-md-4 listing-item">
                  <div className="blog_box">
                     <div className="blog_img">
                        <figure><img src="images/Images/Tariff/tariff1.jpeg" alt="Room 1"/></figure>
                     </div>
                     <div className="blog_room text-center">
                        <h3 className='tariffSuite'>SUITE ROOM</h3>
                        <div className='listing'>
                           <h4><span>Double</span> <br />Rs. 2259</h4>
                           <h4><span>Single</span> <br />Rs. 1930</h4>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 listing-item">
                  <div className="blog_box room">
                     <div className="blog_img">
                        <figure><img src="images/Images/Tariff/tariff2.jpeg" alt="Room 2"/></figure>
                     </div>
                     <div className="blog_room text-center">
                        <h3  className='tariffSuite'>PREMIUM ROOM</h3>
                        <div className='listing'>
                           <h4><span>Double</span> <br />Rs. 2259</h4>
                           <h4><span>Single</span> <br />Rs. 1930</h4>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 listing-item">
                  <div className="blog_box room">
                     <div className="blog_img ">
                        <figure><img src="images/Images/Tariff/tariff3.jpeg" alt="Room 3"/></figure>
                     </div>
                     <div className="blog_room text-center">
                        <h3 className='tariffSuite'>STANDARD ROOM</h3>
                        <div className='listing'>
                           <h4><span>Double</span> <br />Rs. 2259</h4>
                           <h4><span>Single</span> <br />Rs. 1930</h4>
                        </div>
                     </div>
                  </div>
               </div>
            </div> */}
            <div className="row animated fadeInUp">
               <div className="col-md-6 listing-item">
                  <div className="about_img">
                     <figure><img src="images/Images/Tariff/tariff3.jpeg" alt="Room 3"/></figure>
                  </div>
               </div>
               <div className="col-md-6 listing-item">
                  <div className="blog_box">
                  <div className="blog_room text-center titlepage ">
                        <h2 className='tariffSuite listing pt-5'>Deluxe Suite</h2>
                        <div className='listing'>
                           <h3 className='pb-3'>Our deluxe rooms are comfortable and stylish, featuring a queen-size bed, a private bathroom with complimentary toiletries, and a flat-screen TV. These rooms also feature a work desk and chair, making them perfect for business travelers.</h3>
                           <h4 className='price'><span>Rs. 1949</span></h4>
                           {/* <h4><span>Single</span> <br />Rs. 1930</h4> */}
                           {/* <h4><span>Single</span> <br />Rs. 1930</h4> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row animated fadeInUp rev">
               
               <div className="col-md-6 listing-item">
                  <div className="blog_box">
                  <div className="blog_room text-center titlepage ">
                        <h2 className='tariffSuite listing pt-5'>Super Deluxe Suite</h2>
                        <div className='listing'>
                           <h3 className='pb-3'>Our super deluxe rooms are spacious and luxurious, featuring a king-size bed, a separate living area with a sofa bed, and a private balcony with stunning views of the surrounding area. These rooms also feature a flat-screen TV, a fully equipped kitchenette, and a luxurious en-suite bathroom with complimentary toiletries.</h3>
                           <h4 className='price'><span>Rs. 2249</span></h4>
                           {/* <h4><span>Single</span> <br />Rs. 1930</h4> */}
                           {/* <h4><span>Single</span> <br />Rs. 1930</h4> */}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 listing-item">
                  <div className="about_img">
                     <figure><img src="images/Images/Tariff/tariff1.jpeg" alt="Room 3"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </>
   )
}

export default Tariff
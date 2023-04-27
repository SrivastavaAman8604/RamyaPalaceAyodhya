import React from 'react'
import { Helmet } from 'react-helmet'
const Gallery = () => {
  return (
   <>
   <Helmet>
         <title>Gallery</title>
         <meta name='description' content='Some images of Hotel'/>
      </Helmet>
   <div className="back_re">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="title">
                     <h2>Gallery</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
    <div  className="gallery">
    <div className="container">
       <div className="row">
          <div className="col-md-12">
             <div className="titlepage">
                {/* <h2>gallery</h2> */}
             </div>
          </div>
        </div>
       {/*<div className="row">
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img animated fadeInUp">
                <figure><img src="images/Images/Gallery/20220509_184838-min.jpeg" alt="Spacious Room"/></figure>
             </div>
          </div>
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img animated fadeInUp">
                <figure><img src="images/Images/Gallery/20220509_184904-min.jpeg" alt="Spacious Room with AC"/></figure>
             </div>
          </div>
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img animated fadeInUp">
                <figure><img src="images/Images/Gallery/20220509_185104-min.jpeg" alt="Luxury Room"/></figure>
             </div>
          </div>
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img animated fadeInUp">
                <figure><img src="images/Images/Gallery/20220509_185034-min.jpeg" alt="Bathroom"/></figure>
             </div>
          </div>
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img animated fadeInUp">
                <figure><img src="images/Images/Gallery/20220509_185357-min.jpeg" alt="lobby"/></figure>
             </div>
          </div>
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img animated fadeInUp">
                <figure><img src="images/Images/Gallery/20220509_185451-min.jpeg" alt="lobbyimg"/></figure>
             </div>
          </div>
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img animated fadeInUp">
                <figure><img src="images/Images/Gallery/20220509_185737-min.jpeg" alt="banner"/></figure>
             </div>
          </div>
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img animated fadeInUp">
                <figure><img src="images/Images/Gallery/20220509_190007-min.jpeg" alt="hotel view"/></figure>
             </div>
          </div>
       </div> */}
      <div className="row">
         <div className="col-md-3 col-sm-6">
            <div className="gallery_img animated fadeInUp">
               <figure><img src="images/Images/Gallery/WhatsApp Image 2023-04-27 at 11.01.27 (2).jpeg" alt="day view"/></figure>
            </div>
         </div>
         <div className="col-md-3 col-sm-6">
            <div className="gallery_img animated fadeInUp">
               <figure><img src="images/Images/Gallery/WhatsApp Image 2023-04-27 at 11.01.28 (4).jpeg" alt="spacious room"/></figure>
            </div>
         </div>
         <div className="col-md-3 col-sm-6">
            <div className="gallery_img animated fadeInUp">
               <figure><img src="images/Images/Gallery/WhatsApp Image 2023-04-27 at 11.01.28 (6).jpeg" alt="reception"/></figure>
            </div>
         </div>
         <div className="col-md-3 col-sm-6">
            <div className="gallery_img animated fadeInUp">
               <figure><img src="images/Images/Gallery/WhatsApp Image 2023-04-27 at 11.01.28.jpeg" alt="bed room"/></figure>
            </div>
         </div>
         <div className="col-md-3 col-sm-6">
            <div className="gallery_img animated fadeInUp">
               <figure><img src="images/Images/Gallery/20220509_190007-min.jpg" alt="hotel night view"/></figure>
            </div>
         </div>
         <div className="col-md-3 col-sm-6">
            <div className="gallery_img animated fadeInUp">
               <figure><img src="images/Images/Gallery/WhatsApp Image 2023-04-27 at 11.01.27 (4).jpeg" alt="big bed room"/></figure>
            </div>
         </div>
         <div className="col-md-3 col-sm-6">
            <div className="gallery_img animated fadeInUp">
               <figure><img src="images/Images/Gallery/20220509_184838-min.jpg" alt="Spacious Room"/></figure>
            </div>
         </div>
         <div className="col-md-3 col-sm-6">
            <div className="gallery_img animated fadeInUp">
               <figure><img src="images/Images/Gallery/20220509_185104-min.jpg" alt="Spacious Room"/></figure>
            </div>
         </div>
         <div className="col-md-3 col-sm-6">
            <div className="gallery_img animated fadeInUp adjust">
               <figure><img src="images/Images/Gallery/WhatsApp Image 2023-04-27 at 11.01.36.jpeg" alt="Entrance(Main door)"/></figure>
            </div>
         </div>
         <div className="col-md-3 col-sm-6">
            <div className="gallery_img animated fadeInUp adjust">
               <figure><img src="images/Images/Gallery/20220509_185034-min.jpg" alt="bath room"/></figure>
            </div>
         </div>
         <div className="col-md-3 col-sm-6">
            <div className="gallery_img animated fadeInUp adjust">
               <figure><img src="images/Images/Gallery/WhatsApp Image 2023-04-27 at 11.01.31 (3).jpeg" alt="Spacious Room"/></figure>
            </div>
         </div>
         {/* <div className="col-md-3 col-sm-6 ">
            <div className="gallery_img animated fadeInUp adjust">
               <figure><img src="images/Images/Gallery/WhatsApp Image 2023-04-27 at 11.01.40 (1).jpeg" alt="Spacious Room"/></figure>
            </div>
         </div> */}
         <div className="col-md-3 col-sm-6 ">
            <div className="gallery_img animated fadeInUp adjust">
               <figure><img src="images/Images/Gallery/WhatsApp Image 2023-04-27 at 11.01.27 (3).jpeg" alt="Spacious Room"/></figure>
            </div>
         </div>
      </div>
    </div>
 </div>
 </>
  )
}
export default Gallery

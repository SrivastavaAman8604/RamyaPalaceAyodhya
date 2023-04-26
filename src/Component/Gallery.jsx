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
       <div className="row">
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img animated fadeInUp">
                <figure><img src="images/compress Image/20220509_184838-min.jpg" alt="Spacious Room"/></figure>
             </div>
          </div>
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img animated fadeInUp">
                <figure><img src="images/compress Image/20220509_184904-min.jpg" alt="Spacious Room with AC"/></figure>
             </div>
          </div>
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img animated fadeInUp">
                <figure><img src="images/compress Image/20220509_185104-min.jpg" alt="Luxury Room"/></figure>
             </div>
          </div>
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img animated fadeInUp">
                <figure><img src="images/compress Image/20220509_185034-min.jpg" alt="Bathroom"/></figure>
             </div>
          </div>
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img animated fadeInUp">
                <figure><img src="images/compress Image/20220509_185357-min.jpg" alt="lobby"/></figure>
             </div>
          </div>
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img animated fadeInUp">
                <figure><img src="images/compress Image/20220509_185451-min.jpg" alt="lobbyimg"/></figure>
             </div>
          </div>
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img animated fadeInUp">
                <figure><img src="images/compress Image/20220509_185737-min.jpg" alt="banner"/></figure>
             </div>
          </div>
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img animated fadeInUp">
                <figure><img src="images/compress Image/20220509_190007-min.jpg" alt="hotel view"/></figure>
             </div>
          </div>
       </div>
    </div>
 </div>
 </>
  )
}

export default Gallery

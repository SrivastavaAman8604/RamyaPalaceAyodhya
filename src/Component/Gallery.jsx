import React from 'react'

const Gallery = () => {
  return (
   <>
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
             <div className="gallery_img">
                <figure><img src="images/Images/20220509_184838.jpg" alt="#"/></figure>
             </div>
          </div>
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img">
                <figure><img src="images/Images/20220509_184904.jpg" alt="#"/></figure>
             </div>
          </div>
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img">
                <figure><img src="images/Images/20220509_185104.jpg" alt="#"/></figure>
             </div>
          </div>
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img">
                <figure><img src="images/Images/20220509_185034.jpg" alt="#"/></figure>
             </div>
          </div>
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img">
                <figure><img src="images/Images/20220509_185357.jpg" alt="#"/></figure>
             </div>
          </div>
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img">
                <figure><img src="images/Images/20220509_185451.jpg" alt="#"/></figure>
             </div>
          </div>
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img">
                <figure><img src="images/Images/20220509_185737.jpg" alt="#"/></figure>
             </div>
          </div>
          <div className="col-md-3 col-sm-6">
             <div className="gallery_img">
                <figure><img src="images/Images/20220509_190007.jpg" alt="#"/></figure>
             </div>
          </div>
       </div>
    </div>
 </div>
 </>
  )
}

export default Gallery

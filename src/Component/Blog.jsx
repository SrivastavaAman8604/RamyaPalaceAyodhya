import React from 'react'
import { Helmet } from 'react-helmet'

const Blog = () => {
  return (
    <>
    <Helmet>
         <title>Ayodhya</title>
         <meta name='description' content='Tourist Places in Ayodhya'/>
      </Helmet>
      <div className="back_re">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="title">
                      <h2>AYODHYA</h2>
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
                     {/* <p>Discover the Spiritual Essence </p> */}
                     {/* <p>Discover the Divine City: Ayodhya</p> */}
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
            <div className="row">
               <div className="col-md-4">
                  <div className="blog_box">
                     <div className="blog_img">
                        <figure><img src="images/ayodhya/Hanuman (1).jpg" alt="#"/></figure>
                     </div>
                     <div className="blog_room">
                        <h3>Hanuman Garhi</h3>
                        <span>Hindu temple dedicated to Hanuman.</span>
                        {/* <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p> */}
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="blog_box room">
                     <div className="blog_img">
                        <figure><img src="images/ayodhya/ramkot (1).jpg" alt="#"/></figure>
                     </div>
                     <div className="blog_room">
                        <h3>Ramkot Fort</h3>
                        <span>Ancient fort in Ayodhya.</span>
                        {/* <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are   </p> */}
                     </div>
                  </div>
               </div>
               <div className="col-md-4 ">
                  <div className="blog_box room">
                     <div className="blog_img ">
                        <figure><img src="images/ayodhya/sita-ki-rasoi (1).jpg" alt="#"/></figure>
                     </div>
                     <div className="blog_room">
                        <h3>Sita ki Rasoi</h3>
                        <span>Kitchen of Goddess Sita.  </span>
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

export default Blog

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
                     <h2>Discover the Spiritual Essence </h2>
                     <p >Ayodhya is a city located in the northern Indian state of Uttar Pradesh. It is situated on the banks of the Sarayu River and is considered to be one of the seven most important pilgrimage sites for Hindus. Ayodhya is best known for the Ram Janmabhoomi temple, which is believed to be the birthplace of Lord Rama, one of the most revered deities in Hinduism.<br/>

                     The history of Ayodhya is closely linked to the epic Ramayana, which tells the story of Lord Rama's life and his battle against the demon king Ravana. According to the legend, Ayodhya was ruled by Lord Rama's father, King Dasharatha, and was a prosperous city during his reign.<br/>

                     In 1992, the demolition of the Babri Masjid, a mosque that was built on the site believed to be Lord Rama's birthplace, led to widespread communal violence in India. The dispute over the ownership of the land continued for several years until the Indian Supreme Court ruled in 2019 that the site should be handed over to a trust to build a Hindu temple, while a separate piece of land should be allocated for the construction of a mosque.<br/>

                     Today, Ayodhya is a major pilgrimage site and attracts millions of devotees every year, especially during the festival of Diwali, which celebrates Lord Rama's return to Ayodhya after defeating Ravana. The city is also home to several other important Hindu temples, such as the Hanuman Garhi temple and the Kanak Bhawan temple.</p>
                     {/* <p>Discover the Divine City: Ayodhya</p> */}
                  </div>
               </div>
            </div>
            <div className="row animated fadeInUp">
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

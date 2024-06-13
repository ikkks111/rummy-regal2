import React from 'react';
import "../../styles/globals.scss"
import Navbar from '../../components/Navbar/Navbar';
import NavbarMobile from '../../components/Navbar/NavbarMobile';
import Footer from '../../components/Footer/Footer';


const Page = () => {
  return (
    <>
      <div className='main_dev'>
      <div className="navbar-container">
            <div className="navbar-desktop">
                <Navbar/>
            </div>
            <div className="navbar-mobile">
                <NavbarMobile/>
            </div>
        </div>
        <div className='container'>
          <div className='intro'>
            <h1>Contact Us</h1>
          </div>
          <p>Our goal at Rummy Mate is to provide you with the best possible Rummy experience. Whether you have concerns regarding our promotions or contests or need assistance with the rummy mate app download in India, we know that effective communication is essential. We always have helpful and courteous personnel available to help you.
</p>
          <h2>Rummy Mate App Download in India</h2>
         <p>The Indian rummy mate app downloads on your Android or iOS phones for free and invites your friends to the enthralling world of Rummy! You can download it from our official website or trusted app stores in India and can play poker using our application with a smooth interface and join tournaments and cash games that are available on our platform.
</p>
          <h2>Get in Touch
</h2>
          <p>We can be reached by going through the ways provided here; Here are but a few of them:
</p>
         <li>Contact Form: Please visit our contact form to provide us with any questions or comments on your mind and we will respond to you as soon as possible.
</li>
<li>Live Chat: Talk to one of our reps live for quicker response time. Check the bottom of our Web site to find the live chat option.
</li>
<li>Email: The email address for rummymatesocial@gmail.com for any inquiries or feedback regarding the website.
</li>
          <h2>We Value Your Feedback</h2>
          <p>We are committed to providing you with top-quality rummy mate earning app download to ensure your satisfaction. You may also send us your feedback and opinion on how we can make Rummy Affiliate better. Please do not hesitate to contact us through any of the above methods to convey your suggestions or feedback. We can interact and bring unforgettable Rummy times together!</p>
          
        </div>
      </div>
        <Footer/>
    </>
  )
}

export default Page;

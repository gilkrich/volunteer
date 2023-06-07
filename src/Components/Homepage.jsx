import React from 'react'
import { Outlet, Link, useParams } from 'react-router-dom'
import "./homepage.css"
import Handi from "../Components/images/handi.png"
import recomends from "../Components/images/recomends.jpg"
import fiveStars from "../Components/images/fivestars.webp"
import rank6 from "../Components/images/rank6.jpg"
import rank8 from "../Components/images/rank8.avif"
import rank7 from "../Components/images/rank7.jpg"
import rank9 from "../Components/images/rank9.avif"
import rank5 from "../Components/images/rank5.png"

const Homepage = () => {
  return (
    <div className='container-homepage'>
      <div className='main-img'>
        <img className='img-home' src={Handi} alt="" />
      </div>
      <div className='all-cards'>
        <div className="myCard">
          <div className="innerCard">
            <div className="frontSide">
              <p className="title">Who we are?</p>
            </div>
            <div className="backSide">
              <p>At People4Good, we believe in the power of volunteering to make a positive difference in the world. Our platform is dedicated to connecting passionate individuals, both professionals and people from all walks of life, with meaningful volunteer opportunities.</p>
            </div>
          </div>
        </div>
        <div className="myCard">
          <div className="innerCard">
            <div className="frontSide">
              <p className="title">Our Mission:</p>
            </div>
            <div className="backSide">
              <p>Our mission is to create a vibrant and inclusive community where volunteers can easily find and engage in causes they are passionate about. We strive to bridge the gap between volunteers and organizations in need, empowering individuals to contribute their time, skills, and expertise for the betterment of society.</p>
            </div>
          </div>
        </div>
        <div className="myCard">
          <div className="innerCard">
            <div className="frontSide">
              <p className="title">why you should use and join to our platform?</p>
            </div>
            <div className="backSide">
              <p>Connecting People and Causes: At the core of Pople4Good is the commitment to connect people with causes that resonate with them. Whether you are a professional looking to share your expertise, a student eager to gain experience, or simply someone who wants to give back, our platform provides a seamless experience to explore diverse volunteer opportunities</p>
              <p>Simple and User-Friendly: We've designed our platform with simplicity and user-friendliness in mind. Our intuitive interface allows you to easily navigate through volunteer opportunities. With just a few clicks, you can start making a difference and become an integral part of the volunteering community.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='about-us-section'>
        <div className='about-us'>
          <div className='about-us-header'><h1>Join the Pople4Good community:</h1></div>
          <div className='about-us-content'><p>We invite you to join our growing community of passionate individuals who believe in the power of volunteering. Together, we can create a positive and lasting impact on the causes we care about. Sign up today, explore the endless possibilities, and let your volunteering journey begin</p></div>
        </div>
      </div>
      <div className='practice-section'>
        <div className='practice'>
          <div className='step-section'>
            <h1><u>Step one</u></h1>
            <div className='step-content'>
              <p>You register on the website where you indicate the reason for registration: to volunteer as a professional, need some help or both.</p>
            </div>
          </div>
          <div className='arrow'>
            <img className='arrow-img' width="50" height="50" src="https://img.icons8.com/ios/50/arrow--v1.png" alt="arrow--v1" />
          </div>
          <div className='step-section'>
            <h1><u>Step two</u></h1>
            <div className='step-content'>
              <p>After registration, the option to create a 'request' opens up, where the requester specifies the problem and the profession they need assistance from. The 'request' is sent via email, along with a phone number that serves as a WhatsApp link of the requester, to all volunteer professionals on the website who specialize in that particular profession</p>
            </div>
          </div>
          <div className='arrow'>
            <img className='arrow-img' width="50" height="50" src="https://img.icons8.com/ios/50/arrow--v1.png" alt="arrow--v1" />
          </div>
          <div className='step-section'>
            <h1><u>Step three</u></h1>
            <div className='step-content'>
              <p>Among all the volunteers specializing in the required profession, the professionals willing to volunteer and engage in the task can contact the requester either by replying to the email or by initiating contact through WhatsApp.</p>
            </div>
          </div>
          <div className='arrow'>
            <img className='arrow-img' width="50" height="50" src="https://img.icons8.com/ios/50/arrow--v1.png" alt="arrow--v1" />
          </div>
          <div className='step-section'>
            <h1><u>Step four</u></h1>
            <div className='step-content'>
              <p>The link between the professional and the requester has been established and maintained, as we fulfill our mission together. There is an option to rate and provide feedback on the professional.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='people-ranks'>
        <div className='ranks-header'>
          <p>Recommend Customers: Hear what others are saying about our platform!</p>
          <img className='recomend-img' src={recomends} alt="" />
        </div>
        <div className='ranks-content'>
          <div className='top-ranks'>
            <div className='rank1'>
              <h3>Alexander</h3>
              <h4>"Highly recommended volunteering platform!"</h4>
              <img className='img-rank1' src={rank8} alt="" />
              <img className='five-stars' src={fiveStars} alt="" />
            </div>
            <div className='rank1'>
              <h3>Sophia</h3>
              <img className='img-rank1' src={rank6} alt="" />
              <h4>"Outstanding volunteer matching service!"</h4>
              <img className='five-stars' src={fiveStars} alt="" />
            </div>
            <div className='rank1'>
              <h3>Nathan</h3>
              <h4>"Discover meaningful volunteer experiences!"</h4>
              <img className='img-rank1' src={rank5} alt="" />
              <img className='five-stars' src={fiveStars} alt="" />
            </div>
          </div>
          <div className='buttom-ranks'>
            <div className='rank1'>
              <h3>Emma</h3>
              <img className='img-rank1' src={rank9} alt="" />
              <h4>"Empowering volunteers, transforming communities!"</h4>
              <img className='five-stars' src={fiveStars} alt="" />
            </div>
            <div className='rank1'>
              <h3>James</h3>
              <img className='img-rank1' src={rank7} alt="" />
              <h4>"The platform made me feel significant through volunteering"</h4>
              <img className='five-stars' src={fiveStars} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage;


// our-mission why-us-section join-us-section

<div className='content-section'>
  <div className='about-us-section'>
    <h1>Who we are?</h1>
    <p>At People4Good, we believe in the power of volunteering to make a positive difference in the world. Our platform is dedicated to connecting passionate individuals, both professionals and people from all walks of life, with meaningful volunteer opportunities.</p>
  </div>
  <div className='about-us-section'>
    <h1>Our Mission:</h1>
    <p>Our mission is to create a vibrant and inclusive community where volunteers can easily find and engage in causes they are passionate about. We strive to bridge the gap between volunteers and organizations in need, empowering individuals to contribute their time, skills, and expertise for the betterment of society.</p>
  </div>
  <div className='about-us-section'>
    <h1>why you should use and join to our platform?</h1>
    <p>Connecting People and Causes: At the core of Pople4Good is the commitment to connect people with causes that resonate with them. Whether you are a professional looking to share your expertise, a student eager to gain experience, or simply someone who wants to give back, our platform provides a seamless experience to explore diverse volunteer opportunities</p>
    <p>Simple and User-Friendly: We've designed our platform with simplicity and user-friendliness in mind. Our intuitive interface allows you to easily navigate through volunteer opportunities, create your volunteer profile, and connect with organizations. With just a few clicks, you can start making a difference and become an integral part of the volunteering community.</p>
  </div>
  <div className='about-us-section'>
    <h1>Join the Pople4Good community:</h1>
    <p>We invite you to join our growing community of passionate individuals who believe in the power of volunteering. Together, we can create a positive and lasting impact on the causes we care about. Sign up today, explore the endless possibilities, and let your volunteering journey begin</p>
  </div>
</div> 
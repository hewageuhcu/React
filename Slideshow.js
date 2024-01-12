import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import { BrowserRouter as Browser, Router, Route, Switch } from 'react-router-dom';

// Wallpaper slideshow
const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      showSlides();
    }, 2000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  const showSlides = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  return (
    <div>
       {/* tabs, contact us, and wallpaper */}
       <img
        src="https://th.bing.com/th/id/R.3bb0cebcd343edf4aa56cf49b5ffc01e?rik=gn4849riOnBpng&pid=ImgRaw&r=0"
        width="30%"
        height="80px"
        align="left"
        alt="Tabs Logo"
      ></img>
      <ul className="tab-labels">
        <li className="tab-label">
          <i>
            <h3>Home</h3>
          </i>
        </li>
        <li className="tab-label">
          <i>
            <h3>User</h3>
          </i>
        </li>
        <li className="tab-label">
          <i>
            <h3>Admin</h3>
          </i>
        </li>
        <li className="tab-label">
          <i>Contact Us</i>
        </li>
      </ul>

      {/* wallpaper slideshow */}
      <div className="slideshow-container">
        {/* Slides */}
        <div className={`mySlides ${slideIndex === 0 ? 'active' : ''}`}>
        <div className="text-overlay">
          <p>
            <i>
              Keeping You Cool, <br />
              Every Breath,<br />
              Every Beat.
            </i>
          </p>
        </div>
          <img
            src="https://www.bowersoxair.com/wp-content/uploads/2019/06/airconditionertrends-1.jpeg"
            width="100%"
            height="500px"
            alt="Slide 1"
          />
        </div>

        <div className={`mySlides ${slideIndex === 1 ? 'active' : ''}`}>
        <div className="text-overlay">
          <p>
            <i>
             Chill Out in Every <br />
       Climate.
            </i>
          </p>
        </div>
          <img
            src="https://parkerairconditioning.com.au/wp-content/uploads/2016/06/specials.jpg"
            width="100%"
            height="500px"
            alt="Slide 2"
          />
        </div>

        <div className={`mySlides ${slideIndex === 2 ? 'active' : ''}`}>
        <div className="text-overlay">
          <p>
            <i>
            Bringing Comfort,  <br />
            One Degree at a <br />
            Time.
            </i>
          </p>
        </div>
       
          <img
            src="https://th.bing.com/th/id/R.82e6c1f15cf388268662de8e766a3d6b?rik=JKnBZ%2bXBf4Q9Qg&riu=http%3a%2f%2fimg.zhuangxiutp.com%2fupload%2fnews%2f2019%2f0802%2fphotos%2fmiddle%2f20190802131211_8qt_5g2bavbo.jpg&ehk=0Lji%2bh24pKiLBzU5%2fsY2AuJr6ffM7Ye4MeZAc0HCFQc%3d&risl=&pid=ImgRaw&r=0"
            width="100%"
            height="500px"
            alt="Slide 3"
          />
        </div>

        {/* Navigation dots */}
        <div className="dot-container">
          <span className={`dot ${slideIndex === 0 ? 'active' : ''}`}></span>
          <span className={`dot ${slideIndex === 1 ? 'active' : ''}`}></span>
          <span className={`dot ${slideIndex === 2 ? 'active' : ''}`}></span>
        </div>
      </div>


      <div className="social">
        <p>Follow Us On Social Media</p>
      </div>

      <div className="columns">
        <div className="column">
          <a href="https://www.facebook.com/arcticlk/">
          <img
            src="https://th.bing.com/th?id=OIP.VMVTJwYYn2OmMGPYu2TdGQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            height="80px"
            width="80px"
            align="right"
            alt="Social Media Icon 1"
          ></img></a>
        </div>

        <div className="column">
          <a href="http://arctic.lk/contact-us.html#">
          <img
            src="https://th.bing.com/th?id=OIP.d9YMY3jpZr_ZxliOr3xMYQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            height="80px"
            width="80px"
            alt="Social Media Icon 2"
          ></img></a>
        </div>
      </div>

      <ul className="tab-labels">
        <div className="footer-text">
          <p>© 2023 • All Rights Reserved</p>
        </div>
      </ul>
    </div>
  );
};

export default Slideshow;

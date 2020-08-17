import React, { Component } from 'react';
import Header from '../../Components/Text/Header'
import './contact.css';

class Contact extends Component{
  render(){
    return(
      <div className = 'contact-us'>
        <Header>CONTACT US</Header>
        <div className = 'email-container'>
          <svg className = 'email-logo'  viewBox="0 0 139 84" >
            <path d="M125.969 0H121.625L69.5 33.166L17.375 0H13.0312C5.838 0 0 4.704 0 10.5V73.5C0 79.296 5.838 84 13.0312 84H17.375V18.522L69.5 50.827L121.625 18.515V84H125.969C133.162 84 139 79.296 139 73.5V10.5C139 4.704 133.162 0 125.969 0Z" fill="#F44336"/>
          </svg>
          <h3 className = 'email-text'>meghashettty@gmail.com</h3>
        </div>
        <div className = 'phone-container'>
          <svg className = 'phone-logo' viewBox="0 0 117 121">
            <path d="M107.763 79.669C100.635 79.6833 93.5497 78.5179 86.777 76.2172C83.6102 75.0736 80.0916 75.8441 77.645 78.217L64.3563 88.5849C50.0851 81.1747 38.5055 69.2017 31.3377 54.4438L41.0979 41.0319C43.5621 38.4816 44.4434 34.7223 43.3826 31.2882C41.1496 24.2744 40.0166 16.9365 40.0264 9.55264C40.0264 4.2769 35.8909 0 30.7896 0H9.23685C4.13551 0 0 4.2769 0 9.55264C0.0678331 71.0743 48.2752 120.93 107.763 121C112.864 121 117 116.723 117 111.447V89.2216C117 83.9459 112.864 79.669 107.763 79.669Z" fill="#009688"/>
          </svg>
          <h3 className = 'phone-text'>(408)-25-MEGHA</h3>
        </div>
        <div className = 'facebook-container'>
          <svg className = 'facebook-logo' viewBox="0 0 122 110">
            <g clip-path="url(#clip0)" >
            <path d="M115.266 1.94395e-07H6.72865C3.01202 0.00167866 -0.000930571 2.71996 2.15601e-07 6.07185V103.933C0.00186179 107.284 3.01668 110.001 6.73424 110H115.266C118.984 110.001 121.999 107.283 122 103.931C122 103.93 122 103.929 122 103.928V6.06682C121.998 2.71576 118.983 -0.000839039 115.266 1.94395e-07V1.94395e-07Z" fill="#4267B2"/>
              <path d="M84.2324 110V67.4609H100.138L102.521 50.8105H84.2324V40.206C84.2324 35.3963 85.7133 32.1191 93.3625 32.1191H103.057V17.2672C101.37 17.065 95.5834 16.6126 88.8501 16.6126C74.7915 16.6126 65.1699 24.347 65.1699 38.5569V50.8105H49.3242V67.4609H65.1699V110H84.2324Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0">
              <rect width="122" height="110" fill="white"/>
              </clipPath>
              </defs>
          </svg>
          <h3 className = 'facebook-text'>https://www.facebook.com/bayareanrityagurukul</h3>
        </div>
        


      </div>
    )
  }
}

export default Contact;

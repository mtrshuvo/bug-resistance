import React from 'react'
import { Link } from 'react-router-dom'
import ScrollButton from './ScrollButton'

import logo from '../../images/logo.png'
const Footer = () => {
  return (
    <footer id="footer-section">
    <div class="overlay pt-120">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <div class="section-header pb-120 text-center">
              <h4 class="sub-title-alt">Contact Me</h4>
              <h3 class="title">Think I can help? Lets Talk!</h3>
              <a href="contact.html" class="cmn-btn" style={{ textDecoration: "none" }}>Let's Work Together</a>
            </div>
          </div>
        </div>
        <div class="bottom-area">
          <div class="row d-flex justify-content-between">
            <div class="col-lg-4 col-md-4 col-sm-4 d-flex align-items-center justify-cen">
              <a href="index-2.html">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 d-flex align-items-center justify-content-end justify-cen">
              <ul class="d-flex" >
                <li><Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link></li>
                {/* <li><a href="home.html">Home</a></li> */}
                <li><Link to="/" style={{ textDecoration: "none", color: "white" }}>About</Link></li>
                <li><Link to="/" style={{ textDecoration: "none", color: "white" }}>Course Admission</Link></li>
                <li><Link to="/" style={{ textDecoration: "none", color: "white" }}>Career-Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ScrollButton />
    <div class="footer-bottom">
      <div class="container">
        <div class="main-content">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8 col-md-8 col-sm-12 d-flex justify-content-start justify-cen">
              <div class="left-area">
                <p>Copyright © 2021. Made with passion by <a href="https://themeforest.net/user/uiaxis">UIAXIS</a></p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-end justify-cen">
              <div class="right-area">
                <p>All right reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
import React,{useState} from 'react'
import logo from '../../images/logo.png'
import { Link} from 'react-router-dom'
const Navbar = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
          setVisible(true)
      }
      else if (scrolled <= 300) {
          setVisible(false)
      }
  };


  window.addEventListener('scroll', toggleVisible);
  return (
    <>
      {/* <!-- header-section start --> */}
      <header id="header-section" style={{backgroundColor:visible?'#5c2cc5':"transparent"}}>
        <div class="overlay">
          <div class="container">
            <div class="row d-flex header-area">
              {/* <div class="logo-section flex-grow-1 d-flex align-items-center">
                <Link class="site-logo site-title" to='/'><img src={logo} alt="site-logo"/></Link>
              </div> */}
              <button class="navbar-toggler ml-auto collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
              </button>
              <nav class="navbar navbar-expand-lg p-0">
              <div class="logo-section flex-grow-1 d-flex align-items-center">
                <Link class="site-logo site-title" to='/'><img src={logo} alt="site-logo"/></Link>
              </div>
                <div class="navbar-collapse collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav main-menu ml-auto">
                    {/* <li onClick={()=>{navigate('/')}}>Home</li> */}
                    <li><Link to="/">Home</Link></li>
                    {/* <li><a href="home.html">Home</a></li> */}
                    <li><Link to="/student">About</Link></li>
                    <li><Link to="/courseadmission">Course Admission</Link></li>
                    <li><Link to="/">Career-Blog</Link></li>
                    <li ><Link to='' >Contact</Link></li>
                    {/* <div class="right-area header-action d-flex align-items-center">
                      <li>
                      <button class="cmn-btn">Contact</button>
                      </li>
                  </div> */}
                  </ul>  
                </div>
              </nav>
              {/* <div class="right-area header-action d-flex align-items-center">
                <a href="contact.html" class="cmn-btn">Contact Me</a>
              </div> */}
            </div>
          </div>
        </div>
      </header>
      {/* <!-- header-section end --> */}
    </>
  )
}

export default Navbar
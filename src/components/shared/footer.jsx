import React from 'react'
import '../../assets/scss/layout/footer.scss'

//Components
import AppArea from '../footer/app-area'
import FooterMain from '../footer/footer-main'
import FooterDescription from '../footer/footer-description'
import FooterCopyRight from '../footer/footer-copyright'

const Footer = () => {
    return (
     <div className="footer">
       <div className="custom-container">
          <AppArea />
          <FooterMain />
          <FooterDescription />
       </div>
       <FooterCopyRight />
     </div>
    )
  }

export default Footer;

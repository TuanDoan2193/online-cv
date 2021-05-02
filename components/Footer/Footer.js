import React from 'react'
import './style.scss'

const Footer = () => (
  <div id='footer'>
    <div className='footer__contact-wrapper'>
      <div className='footer__contact-address'>
        <a
          rel='noreferrer'
          href='https://www.google.com/maps/place/00100+Kamppi/@60.1668825,24.9287911,15.5z/data=!4m5!3m4!1s0x46920a34cdd2ff11:0x81fb47b59afa1bfc!8m2!3d60.16758!4d24.9302261'
          target='_blank'
        >
          <i className='fas fa-home'></i>
          <span>
            <span className='halfwhite-color'>Address:</span> Kamppi area,
            Helsinki
          </span>
        </a>
      </div>
      <div className='footer__contact-email'>
        <a href='mailto:tuan.doan2193@gmail.com'>
          <i className='far fa-envelope'></i>
          <span>
            <span className='halfwhite-color'>Email:</span>{' '}
            tuan.doan2193@gmai.com
          </span>
        </a>
      </div>
      <div className='footer__contact-phone'>
        <a href='tel:+358504756336'>
          <i className='fas fa-mobile-alt'></i>
          <span>
            <span className='halfwhite-color'>Phone:</span> +3584756336
          </span>
        </a>
      </div>
    </div>
    <div className='footer__copy-right'>
      <h3>@Tuan Doan 2021 /All rights reserved.</h3>
    </div>
  </div>
)

export default Footer

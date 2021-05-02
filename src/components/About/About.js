import React, { forwardRef } from 'react'
import './style.scss'
import portrait from '../../images/portrait.jpg'

const Bio = forwardRef((props, ref) => {
  return (
    <div ref={ref} id='about'>
      <div className='blur-bg-text'>
        <span className='unique-color'>#</span> about me
      </div>
      <div className='container'>
        <div className='bio__content-wrapper'>
          <div className='bio__image-section'>
            <div className='bio__image-wrapper'>
              <div className='bio__image-title'>Tuan Doan.</div>
              <div className='bio__image-bg'>
                <img src={portrait} alt='portrait' />
              </div>
            </div>
          </div>
          <div className='bio__text-section'>
            <div className='bio__text-wrapper'>
              <h5>"I belive in luck. The harder I work, the luckier I am"</h5>
              <h2>
                Living in Helsinki, working as a Web Developer, looking for{' '}
                <span className='unique-color'>challenges.</span>
              </h2>
              <p>
                I have always wanted to see the impact of my work. And it should
                be something meaningful and helpful. Instantly I am hooked by
                programming. It provided everything I needed: the challenges,
                the thrill and rewarding feelings.
                <br />
                Although I graduated with a computer science certificate in
                Finland, landed a programming job, having been working for a few
                years, I am still learning. There are new technologies and
                updates every day to keep up with.
                <br />
                Some extra info:
              </p>
              <div className='bio__text-box-wrapper'>
                <div className='bio__text-box'>
                  <div className='bio__box-icon'>
                    <i className='fas fa-desktop'></i>
                  </div>
                  <h3>Web design</h3>
                  <p>
                    I love beautiul layouts. And I am learning how to design
                    one. Being a developer helps me to know what is in the
                    scope.
                  </p>
                </div>
                <div className='bio__text-box'>
                  <div className='bio__box-icon'>
                    <i className='fas fa-search'></i>
                  </div>
                  <h3>SEO</h3>
                  <p>
                    I like people to see my work as much as possible, thus I
                    have some experience imrpoving search results' position.
                  </p>
                </div>
                <div className='bio__text-box'>
                  <div className='bio__box-icon'>
                    <i className='fas fa-users'></i>
                  </div>
                  <h3>Team player</h3>
                  <p>
                    Working alone is easy and simple, but working in a team is
                    much more efficient. I used to be project manager for some
                    projects at university and I got the hang of it.
                  </p>
                </div>
                <div className='bio__text-box'>
                  <div className='bio__box-icon'>
                    <i className='fas fa-hiking'></i>
                  </div>
                  <h3>Hobbies</h3>
                  <p>
                    Travelling and good food are devine combo for me. I also
                    like to go to gym and play games.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Bio

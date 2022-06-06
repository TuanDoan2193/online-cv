import React, { forwardRef } from 'react'
import './style.scss'
import Slider from 'react-slick'
import '../../../node_modules/slick-carousel/slick/slick.scss'
import '../../../node_modules/slick-carousel/slick/slick-theme.scss'
import isoOmena from '../../images/isoOmena.JPG'
import matkus from '../../images/matkus.JPG'
import personalProjects from '../../images/personalProjects.JPG'
import rioShop from '../../images/rioshop.JPG'
import rioshopLayout from '../../images/rioshopLayout.JPG'
import kamppi from '../../images/kamppi.JPG'
import onlineCV from '../../images/onlineCV.JPG'

const Projects = forwardRef((props, ref) => {
  const settings = {
    dots: true,
    infinite: true,
    className: 'center',
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 4,
    speed: 500,
    initialSlide: 0,
    mobileFirst: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '60px',
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '120px',
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '100px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '200px',
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '120px',
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '100px',
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '40px',
        },
      },
    ],
  }

  const projects = [
    {
      title: 'Iso Omena website',
      owner: `HyperIn's project.`,
      description: 'Built with Bootstrap and AngularJS.',
      imgSrc: isoOmena,
    },
    {
      title: 'Matkus website',
      owner: `HyperIn's project.`,
      description: 'Built with Bootstrap and AngularJS.',
      imgSrc: matkus,
    },
    {
      title: 'Kamppi website',
      owner: `HyperIn's project.`,
      description: 'Built with Bootstrap and AngularJS.',
      imgSrc: kamppi,
    },
    {
      title: 'Rioshop webshop',
      owner: `Personal project.`,
      description:
        'A webshop with CMS. This is live but still need more content. Built with React, Redux, MUI, TS, MongoDB.',
      imgSrc: rioShop,
    },
    {
      title: 'Online CV',
      owner: `Personal project.`,
      description: 'My online CV. Made with SCSS, React.',
      imgSrc: onlineCV,
    },
    {
      title: 'Rioshop layout',
      owner: `Personal project.`,
      description: 'Layout for Rioshop webshop. Made with Figma.',
      imgSrc: rioshopLayout,
    },
    {
      title: 'Small projects',
      owner: `Personal project.`,
      description: 'Built with mostly CSS/SCSS and vanilla JS.',
      imgSrc: personalProjects,
    },
  ]

  const ProjectWrapper = ({ project }) => {
    const { title, owner, description, imgSrc } = project
    return (
      <div className='projects__project-wrapper'>
        <div className='projects__project'>
          <img src={`${imgSrc}`} alt='project isoOmena' />
          <div className='projects__project-description'>
            <h3>{title}</h3>
            <p>
              <span className='unique-color'>{owner}</span> {description}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id='projects' ref={ref}>
      <div className='blur-bg-text'>
        <span className='unique-color'>#</span> projects
      </div>
      <div className='container'>
        <div className='projects__title-wrapper'>
          <div className='projects__title'>My projects</div>
          <div className='projects__description'>
            I worked for HyperIn - a company that located in Helsinki for
            almost 3 years from 2018-2021. During that time period, I had the privillege to work on various interesting projects.
            When I am free, I enjoy working on my personal projects with
            prefered tech stacks.
            <br/>
            From 9-2021, I have been working at Supermetrics, specifically Google Sheet product team.
          </div>
        </div>
      </div>

      <Slider {...settings}>
        {projects.map((project, index) => (
          <ProjectWrapper project={project} key={index} />
        ))}
      </Slider>
    </div>
  )
})

export default Projects

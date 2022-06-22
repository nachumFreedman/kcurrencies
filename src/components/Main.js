import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import pic01 from '../images/course.jpg'
import pic02 from '../images/nachumboard.jpg'
import pic03 from '../images/ilovejlmhub.jpg'

import emailjs from 'emailjs-com'

// import { InitCoinMarketCap } from "../network/coinMarketCap";

const Main = props => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    // InitCoinMarketCap();
  })

  const handleSubmit = e => {
    e.preventDefault()
    let templateParams = {
      name: name,
      email: email,
      subject: 'kcurrencies',
      message: message,
    }
    emailjs
      .send(
        'service_jc24mmw',
        'template_8fbtlf8',
        templateParams,
        'user_ro01Z52c3g7WktjnrpxMj'
      )
      .then(() => {
        props.onCloseArticle()
      })
  }

  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )
  return (
    <div
      ref={props.setWrapperRef}
      id="main"
      style={props.timeout ? { display: 'flex' } : { display: 'none' }}
    >
      <article
        id="course"
        className={`${props.article === 'course' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Course</h2>
        <h2>
          The best way to get into tech is to dive in We believe in practical
          education
        </h2>
        <span className="image main">
          <img src={pic02} alt="" />
        </span>

        <h2> Course description</h2>
        <div style={{ flexDirection: 'row', width: '100%' }}>
          <h4>
            Our in-person & online classes in full-stack software development,
            allow you to progress in hi-tech using JLM Hub's Co-Create Method.
          </h4>
          The Co-Create method means you don't just learn how to but you also do
          it. We believe in practical education which means you don't just learn
          theory you build a startup concept, using this method we guarantee the
          best opportunities for all our students.
          <br />
          <br />
          <h3>Subject Outline - Full-Stack</h3>
          <h5>- Back-End and Front-End</h5>
          <h5>- Web Development</h5>
          <h5>- Interview Questions / coding challenges </h5>
          <h3>Course Includes</h3>
          <h5>
            - Six Months/Ninety classes with Nachum Freedman & Dvir Jacobovich
          </h5>
          <h5>
            - Twenty-six Hub Tokens - you can come to our space and spend time
            with an expert to further push your project outside of class hours
          </h5>{' '}
          <h5>
            - Four Resume Days Working on your resume with this course
            guarantees you a head start in the industry.
          </h5>{' '}
          <h4>
            Together we'll build your resume and portfolio to kickstart your
            Hi-Tech career.
          </h4>
          <h6>
            Price: 9000 nis (Subsidized price is for Olim. Regular price 15,000
            nis)* *Ask about other available subsidies.
          </h6>
        </div>
        {close}
      </article>
      <article
        id="testimonials"
        className={`${props.article === 'testimonials' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Testimonials</h2>
        <span className="image main">
          <img src={pic01} alt="" />
        </span>
        <h2>Gary Waller</h2>
        <h5>
          {' '}
          "These guys really want you to succeed. Would not have landed a job
          without them. Highly recommended."
        </h5>
        <h2>Anael Shomrai</h2>
        <h5> "A professional place that offers real work experience."</h5>
        <h2>David Benizri</h2>
        <h5>
          {' '}
          "The real deal. Extremely knowledgeable and committed to helping you
          learn!"
        </h5>
        <h2>Dov Brecher</h2>
        <h5>
          {' '}
          "JLM HUB is very professional and provides a great learning experience
          teaching coding in an easy and understandable..."
        </h5>{' '}
        <h2>Ariel-Yaniv Ha Or Payne</h2>
        <h5>
          {' '}
          "JLM HUB helped me with a few of my projects; DangerGames and
          consultations on application development. I learnt a lot speaking with
          them and I look forward to working together in the future."
        </h5>
        <h2>Dvaid oliver</h2>
        <h5>
          {' '}
          "JLM Hub offers a great learning environment that helped me bring my
          professionalism to a whole new leve. Highly recommend them for anyone
          looking to do the same."
        </h5>
        {close}
      </article>

      <article
        id="work"
        className={`${props.article === 'work' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Work</h2>
        <span className="image main">
          <img src={pic02} alt="" />
        </span>
        <p>
          Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at
          eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna
          nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin
          mauris nec lorem luctus ultrices.
        </p>
        <p>
          Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
          libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
          Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas
          laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et
          orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris
          aliquet magna magna sed nunc rhoncus amet feugiat tempus.
        </p>
        {close}
      </article>

      <article
        id="about"
        className={`${props.article === 'about' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Mission</h2>
        <span className="image main">
          <img src={pic03} alt="" />
        </span>
        <h4>JLM Hub is a Jerusalem Bootcamp built for you to master Hi-Tech</h4>
        <p>
          We primarily caters to young professionals, entry-level students,
          intermediate-level students, and senior students. The JLM Hub is the
          first of many similar training hubs to be established based on the
          Israel incubator ‘Co-Create’ system developed by Nachum Freedman ​In
          2015 Israel Incubator school founded the Co-Create system, which is
          committed to a unique approach to teaching and advancing young
          professionals involved in Hi-Tech programming. Over the years of
          progress, it has helped many people succeed and make strong career
          pivots to become software engineers. The core philosophy behind Israel
          incubator is based on their novel three-pronged ‘Co-Create method’.
          This is achieved by a combination of theory and practice aimed to
          teach people high-level skills and how to build their startup concept
          and manage their Hi-Tech careers. This method revolutionizes the way
          software programming is taught, learned, and developed ​ Theory
          adapted to aid skill Skills enhanced to develop a personal project
          personal projects tailored to produce companies
        </p>
        <h4>
          So come join one of our courses, and together let's move Jerusalem
          Hi-Tech forward!
        </h4>
        {close}
      </article>

      <article
        id="contact"
        className={`${props.article === 'contact' ? 'active' : ''} ${
          props.articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact</h2>
        <form method="post" action="#" onSubmit={handleSubmit}>
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              onChange={e => {
                setName(e.target.value)
              }}
              name="name"
              id="name"
            />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              onChange={e => {
                setEmail(e.target.value)
              }}
              name="email"
              id="email"
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              onChange={e => {
                setMessage(e.target.value)
              }}
              id="message"
              rows="4"
            ></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </form>
        <h3>Also contact us here</h3>
        <ul className="icons">
          <li>
            <a
              href="https://www.facebook.com/developementspace/"
              className="icon fa-facebook"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jerusalem.hitech.education"
              className="icon fa-instagram"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://wa.me/+972522377944" className="icon fa-whatsapp">
              <span className="label">WhatsApp</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/jlm-hub"
              className="icon fa-linkedin"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
        </ul>
        {close}
      </article>
    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

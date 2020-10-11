import PropTypes from 'prop-types'
import React, { useState } from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

import emailjs from 'emailjs-com';

const Main = props => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    let templateParams = {
      name: name,
      email: email,
      subject: "kcurrencies",
      message: message,
    };
    emailjs.send('service_jc24mmw', 'template_8fbtlf8', templateParams, 'user_ro01Z52c3g7WktjnrpxMj')
      .then(() => {
        props.onCloseArticle();
      })
  };

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
        id="intro"
        className={`${props.article === 'intro' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''
          }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Intro</h2>
        <span className="image main">
          <img src={pic01} alt="" />
        </span>
        <p>
          K Currencies offers in app flexible or locked term staking of over thirty of the top cryptocurrencies. Ensuring that your currency, stays kosher. We aim for the four P’s.
          Produce results
          Prolong your assets
          Predetermine success
          Product efficiency



          </p>
        <p>
          Our platform is an easy to use, decentralized way to earn high interest percentages on your assets, with zero risk and calculated earnings. K currencies is proud is offer a range of up to 10% APR on staking. Skate with confidence and assurance.

          </p>
        {close}
      </article>

      <article
        id="work"
        className={`${props.article === 'work' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''
          }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Work</h2>
        <span className="image main">
          <img src={pic02} alt="" />
        </span>
        <p>
          Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
          at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
          urna nisi, fringila lorem et vehicula lacinia quam. Integer
          sollicitudin mauris nec lorem luctus ultrices.
          </p>
        <p>
          Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
          libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
          Pellentesque condimentum sem. In efficitur ligula tate urna.
          Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
          Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
          libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
          tempus.
          </p>
        {close}
      </article>

      <article
        id="about"
        className={`${props.article === 'about' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''
          }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">About</h2>
        <span className="image main">
          <img src={pic03} alt="" />
        </span>
        <p>
          K currencies was created with the goal to help simplify and realize the potential of the DeFi market, all within your fingertips. We are a group of traders, coders and entrepreneurs that wanted to create an efficient and user friendly way for people to stake within their means. Limited verification means anybody can send coins and earn on holding coins with limitless opportunity. Aiming to keep the process Kosher is our goal. No hidden fees. No extra charges. No monthly minimums.
          </p>
        {close}
      </article>

      <article
        id="contact"
        className={`${props.article === 'contact' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''
          }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact</h2>
        <form method="post" action="#" onSubmit={handleSubmit}>
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" onChange={(e) => { setName(e.target.value) }} name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" onChange={(e) => { setEmail(e.target.value) }} name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" onChange={(e) => { setMessage(e.target.value) }} id="message" rows="4"></textarea>
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
        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/HuntaroSan"
              className="icon fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="icon fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://codebushi.com" className="icon fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/codebushi/gatsby-starter-dimension"
              className="icon fa-github"
            >
              <span className="label">GitHub</span>
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

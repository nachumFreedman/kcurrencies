import PropTypes from 'prop-types'
import React from 'react'
import logo from "../images/kcurrencieslogo.png"

const Header = props => (
  <>
    <img src={logo} style={{ width: "300px", height: "auto", position: "fixed", left: 20 }} />
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="logo">
        K.
    </div>
      <div className="content">
        <div className="inner">
          <p>
            Realize your potential.
            The best way to keep your currencies kosher.<br /> Decentralized finance at your fingertips.
        </p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('intro')
              }}
            >
              Intro
          </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('about')
              }}
            >
              About
          </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('contact')
              }}
            >
              Contact
          </button>
          </li>
        </ul>
      </nav>
    </header>
  </>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header

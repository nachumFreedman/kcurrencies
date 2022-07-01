import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/jlmhub.png'

const Header = props => (
  <>
    <header
      id="header"
      style={
        props.timeout
          ? {
              display: 'none',
              backgroundColor: 'white',
            }
          : {}
      }
    >
      <div className="logo">
        <img
          src={logo}
          alt="logo"
          style={{
            width: '100%',
            height: 'auto',
            position: 'absolute',
            left: 0,
            boxShadow: '.1px .1px .3px .3px darkslategrey',
            borderRadius: 10,
          }}
        />
      </div>
      <div className="content">
        <div className="inner">
          <h3>Develop the Hi-Tech skills you need for your next career</h3>{' '}
          <br />
          <h1>Learn code, become a developer, and get a job!</h1>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('course')
              }}
            >
              Course
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('testimonials')
              }}
            >
              Reviews
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('about')
              }}
            >
              Mission
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

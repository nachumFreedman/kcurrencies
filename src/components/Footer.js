import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
        <p className="copyright">&copy;  K currencies {new Date().getFullYear()} built by <a href="https://jlmhub.com">JLM hub</a>.</p>
    </footer >
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer

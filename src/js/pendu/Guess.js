import PropTypes from 'prop-types'
import React from 'react'

import '../css/Guess.css'

const GuessCount = ({ guesses }) => <div className="guesses">{guesses}</div>

GuessCount.propTypes = {
  guesses: PropTypes.number.isRequired,
}

export default Guess
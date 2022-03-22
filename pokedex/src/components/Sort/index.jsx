import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

import arrowDown from '../../asset/arrowDown.svg';

export function Sort ({letter}){

  const mode = letter;

  return (
    <div id='mainSort'>
      <div id="letters">  
      {mode === true ? <span className="letter">A<br/>Z</span> : <span className="letter">#</span> }       
      </div>
      <img src={arrowDown} alt="arrow down" />
    </div>
  )
}

Sort.propTypes={
  letter:PropTypes.bool
}

Sort.defaultTypes={
  letter:true
}
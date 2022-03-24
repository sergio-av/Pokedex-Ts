import React from 'react';
import PropTypes from 'prop-types'

import './styles.css';

export function CardPkm() {

    const namePkm = 'Pokemon Name';
    const imgPkm = 'https://i.ibb.co/0rp4CT8/image.jpg';
    const numberPkm = '999';

  return (
    <div id='mainCardPkm'>
        <div id='image'>
            <span>#{numberPkm}</span>
            <img src={imgPkm} alt="imgPkm" />
        </div>
        <div id="namePkm">{namePkm}</div>
    </div>
  )
}

CardPkm.prototype={
    namePkm: PropTypes.string,
    imgPkm: PropTypes.string,
    numberPkm:PropTypes.number,
}
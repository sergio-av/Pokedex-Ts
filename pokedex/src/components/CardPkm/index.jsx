import React from 'react';

import defaultImgPkm from '../../asset/defaultImgPkm.svg';

export function CardPkm() {

  return (
    <div id='mainCardPkm'>
        <div id='image'>
            <span>#999</span>
            <img src={defaultImgPkm} alt="imgPkm" />
        </div>
        <div id="namePkm">Pokemon Name</div>
    </div>
  )
}

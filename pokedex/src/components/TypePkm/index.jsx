import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

export function TypePkm({typePkm}) {

  
  const mode = typePkm;
  
  let type;

  switch (mode) {
    case 'normal':
       type ='mainTypePkm-normal';
      break;
    case 'fighting':
       type ='mainTypePkm-fighting';
      break;
    case 'flying':
       type ='mainTypePkm-flying';
      break;
    case 'ground':
       type ='mainTypePkm-ground';
      break;
    case 'poison':
       type ='mainTypePkm-poison';
      break;
    case 'rock':
       type ='mainTypePkm-rock';
      break;
    case 'bug':
       type ='mainTypePkm-bug';
      break;
    case 'ghost':
       type ='mainTypePkm-ghost';
      break;
    case 'steel':
       type ='mainTypePkm-steel';
      break;
    case 'fire':
       type ='mainTypePkm-fire';
      break;
    case 'water':
       type ='mainTypePkm-water';
      break;
    case 'grass':
       type ='mainTypePkm-grass';
      break;
    case 'electric':
       type ='mainTypePkm-electric';
      break;
    case 'psychic':
       type ='mainTypePkm-psychic';
      break;
    case 'ice':
       type ='mainTypePkm-ice';
      break;
    case 'dragon':
       type ='mainTypePkm-dragon';
      break;
    case 'dark':
       type ='mainTypePkm-dark';
      break;
    case 'fairy':
       type ='mainTypePkm-fairy';
      break;
    default:
       type ='mainTypePkm'
      break;
  }

  return (
    <div id={type}>
      <span id='lettersType'>Fighting</span>
    </div>
  )

}

TypePkm.prototype={
  typePkm:PropTypes.string
}

TypePkm.defaulType={
  typePkm:null
}
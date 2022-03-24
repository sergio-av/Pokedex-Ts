import React from 'react';

import iconSearch from '../../asset/iconSearch.png';

import './styles.css';

export function Search() {
    return (
        <div id='mainSearch'>
            <div>
                <img src={iconSearch} alt="iconSearch" id='iconSearch' />
                <span>Buscar Pokemon</span>
            </div>
        </div>
    )
}


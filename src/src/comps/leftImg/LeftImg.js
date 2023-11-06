import React from 'react'
// import { Link } from 'react-router-dom'
// import { useState } from 'react';
import './LeftImg.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function LeftImg(props) {
    const { leftSrc, alt, title, text, style,
        className, divImgClassName, imgClassName,
        divTextClassName, colText, colImg,
        darkMode = false, haveLogo = false, secIs = false, headSec } = props;

    return (
        <div className={`${className} container-fluid ${darkMode ? 'text-black' : 'text-white'}`} style={{ style }}>
            <div className='row w-100'>
                {secIs
                    ? <div className='headSec'>
                        {headSec}
                    </div>
                    : ''}
                <div className={`${divImgClassName} col-lg-${colImg} liftImg`}>
                    {haveLogo
                        ? <div className='holder'>{leftSrc} </div>
                        : <img src={leftSrc} className={imgClassName} alt={alt} />
                    }

                </div>
                <div className={`${divTextClassName} col-lg-${colText} rightText`}>
                    <div className='holder'>
                        <h1>{title}</h1>

                        <p>{text}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

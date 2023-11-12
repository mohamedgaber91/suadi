import React from 'react'
// import { Link } from 'react-router-dom'
// import { useState } from 'react';
import './RightImg.css'
import Button from '../botton/Button';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Heading } from '../../components/heading/heading';


export default function RightImg(props) {
    const { rightSrc, alt, title, text,textAr,
        style, className, divImgClassName,
        imgClassName,divTextClassName,
        haveButtons = false,colText, colImg, darkMode = false
        ,haveLogo = false ,lang = 'en', titleAr} = props;

    return (
        <div className={`${className} container-fluid ${darkMode ? 'text-black' : 'text-white'} ` } style={ style }>
            <div className='row w-100'>
                <div className={`${divTextClassName} col-lg-${colText} liftText`}>
                    <div className={`'holder' ${lang==="en" ?'text-start':'text-end'}`}>
                        <h1>{lang==="en" ?<p>{title}</p>:<p>{titleAr}</p>}</h1>
                        {haveLogo
                            ? <div>{text} </div>
                            : lang==="en" ?<p>{text}</p>:<p>{textAr}</p>
                        }
                        {haveButtons
                            ? <div className='signBtns'>
                                <Link to="/signIn" > <Button title='sign in'
                                    className={` ${darkMode ? '' : ''}`} /></Link>
                                <Link to="/signUp" > <Button title='sign up'
                                    className={` ${darkMode ? '' : ''}`} /></Link>
                            </div>
                            : ''}
                    </div>
                </div>
                <div className={`${divImgClassName} col-lg-${colImg} rightImg`}>
                    <img src={rightSrc} className={imgClassName} alt={alt} />
                </div>
            </div>
        </div>
    )
}

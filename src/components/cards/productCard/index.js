import React, { useState, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Avatar, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// import { AvatarWraperStyle } from './ui-elements-styled';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import '../../auction/styled'
/* eslint-disable import/no-unresolved */
import 'swiper/scss';
import 'swiper/scss/pagination';
import FontAwesome from 'react-fontawesome';
import UilHeart from '@iconscout/react-unicons/icons/uil-heart';
import { ReactSVG } from 'react-svg';

SwiperCore.use([Navigation, Pagination]);

const AuctionCard = (product) => {
    const { id, productName, description, auctionId, images, current_highestBid, categoryId, status, index } = product;
    console.log(current_highestBid)
    return (
        <figure className="mb-0">
            {/* <img src={} /> */}
            <Link
                //   onClick={() => dispatch(updateWishList(id))}
                className='inline-flex items-center justify-center absolute ltr:right-5 rtl:left-5 top-[15px] bg-white dark:bg-white10 w-[34px] h-[34px] rounded-full shadow-[0_5px_10px_rgba(160,160,260,0.13)]
                  text-danger'
                to="#"
            >
                {true ? (
                    <ReactSVG src={require(`static/img/icon/heart-fill.svg`).default} />
                ) : (
                    <UilHeart className="w-[14px] h-[14px]" />
                )}
            </Link>
            <NavLink to={`/productDetalis/${id}`}>
                <img
                    className="mx-auto mb-0 sm:max-w-[100px] ssm:max-w-[70px]"
                    src={images[0]}
                    alt=""
                />
                <div className='my-0 m-3   ltr:text-left rtl:text-right '>

                    <FontAwesome
                        className="text-[18px] ltr:mr-[10px] rtl:ml-[10px] text-body dark:text-white60"
                        name='edit' tooltip='Sign'
                        size="2x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />
                    <FontAwesome
                        className="text-[18px] ltr:mr-[10px] rtl:ml-[10px] text-body dark:text-white60"
                        name='id-badge'
                        size="2x"
                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                    />

                </div>
                <figcaption className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 ">
                    <div >
                        <h2 className=" pt-2 font-medium text-dark dark:text-white87 text-lg font-semibold">

                            {productName?.en}</h2>

                        <p className="flex mb-0 text-base leading-7 text-body dark:text-white60 flex">
                            <div className='flex items-center ustify-center text-center ml-auto mr-auto'>
                                <span className="relative bottom-2 left-2 m-0 p-0">
                                    <Avatar className="inline-flex items-center justify-center bg-gray-100 dark:bg-gray-900"
                                        shape="square"
                                        size="large" icon={<span class="fi fi-sa"></span>
                                        } />
                                </span>
                                <Avatar
                                    className="inline-flex items-center justify-center z-100 bg-gray-100" size="large"
                                    src="https://png.pngitem.com/pimgs/s/101-1010924_transparent-messi-face-png-cristiano-ronaldo-face-2017.png"
                                />
                                <h2 className="mb-1 font-medium text-dark dark:text-white87 text-lg font-semibold">{current_highestBid} SAR</h2>

                            </div>
                        </p>
                    </div>
                </figcaption></NavLink>
        </figure >
    );
}
AuctionCard.propTypes = {
    key: PropTypes.string,
    img: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
}
export default AuctionCard;

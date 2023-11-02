import React, { useState, useEffect, useCallback } from 'react';
import { Statistic } from 'antd';
import PropTypes from 'prop-types';
import reduxStore from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Swiper from 'react-id-swiper';
import { TestimonialStyleWrapper } from './styled'
/* eslint-disable import/no-unresolved */
import 'swiper/scss';
import 'swiper/scss/pagination';
import AuctionCard from '../cards/productCard';
import { Tag } from '../../components/tags/tags';
import Countdown from 'react-countdown';
import * as auctionApi from 'redux/auctions/api'
import * as auctionActions from 'redux/auctions/AuctionSlice'
import { Row, Col } from 'antd';

SwiperCore.use([Navigation, Pagination]);

const Auction = (props) => {
    const { params, id, auctionData, auctionName, startDate, endDate, status } = props;
    // console.log('auction',)
    const auctions = useSelector(state => state.auctions)
    const disptch = useDispatch();
    function rendererTime() {

        let completed = false;
        const currentDate = new Date(new Date().toISOString());
        const auctionEndDate = new Date(endDate);

        if (isNaN(currentDate) || isNaN(auctionEndDate)) {
            return "Invalid date format";
        }

        const timeDifference = auctionEndDate - currentDate;

        if (timeDifference <= 0) {
            completed = true;
        }
        const seconds = Math.floor((timeDifference / 1000) % 60);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (completed) {
            return <Tag color="red" classes="text-42 xl:text-2xl">{status}</Tag>;
        }
        return (

            status === 'active' && <div className="flex justify-center gap-x-[50px] sm:gap-x-5">
                <span>
                    <span className="text-dark dark:text-white87 text-38 xl:text-3xl sm:text-2xl xs:text-xl font-semibold">
                        {days}
                    </span>
                    <span className="block text-body dark:text-white60 text-base sm:text-[15px]">Days</span>
                </span>
                <span>
                    <span className="text-dark dark:text-white87 text-38 xl:text-3xl sm:text-2xl xs:text-xl font-semibold">
                        {hours}
                    </span>
                    <span className="block text-body dark:text-white60 text-base sm:text-[15px]">Hours</span>
                </span>
                <span>
                    <span className="text-dark dark:text-white87 text-38 xl:text-3xl sm:text-2xl xs:text-xl font-semibold">
                        {minutes}
                    </span>
                    <span className="block text-body dark:text-white60 text-base sm:text-[15px]">Minutes</span>
                </span>
                <span>
                    <span className="text-dark dark:text-white87 text-38 xl:text-3xl sm:text-2xl xs:text-xl font-semibold">
                        {seconds}
                    </span>
                    <span className="block text-body dark:text-white60 text-base sm:text-[15px]">Seconds</span>
                </span>
            </div>
        );
    }

    const checkAuctionStatus = useCallback((endDate) => {
        auctionApi.closeAuction(id.replace(/-/g, '')).then((res) => {
            disptch(auctionActions.updateItem(res));
            console.log(res)
        }).catch((err) => {
            console.log(err)

        });

    }, []);
    const [timeRemaining, setTimeRemaining] = useState();

    useEffect(() => {
        const currentDate = new Date(new Date().toISOString());
        const auctionEndDate = new Date(endDate);

        if (isNaN(currentDate) || isNaN(auctionEndDate)) {
            return "Invalid date format";
        }

        const timeDifference = auctionEndDate - currentDate;

        if (timeDifference <= 0 && status === 'active') {
            checkAuctionStatus(endDate);
        }
        const intervalId = setInterval(() => {
            setTimeRemaining(rendererTime());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);



    return (
        <TestimonialStyleWrapper>
            <div className="testimonial-custom-style">
                <div className="theme-1 bg-white dark:bg-white10 pt-16 px-24 lg:px-14 md:px-10 sm:px-[30px] ssm:px-[20px] xs:px-[15px] pb-[75px] lg:pb-[50px] rounded-tl-[10px] rounded-tr-[10px]">

                    <div className="flex  justify-between mb-10">
                        <div className="flex items-center">
                            <div className="md:shrink-0 flex items-center">

                                <img src='https://upload.wikimedia.org/wikipedia/ar/thumb/c/ce/%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AF%D9%88%D8%B1%D9%8A_%D8%B1%D9%88%D8%B4%D9%86_%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A.svg/1200px-%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AF%D9%88%D8%B1%D9%8A_%D8%B1%D9%88%D8%B4%D9%86_%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A.svg.png'
                                    className="w-16 md:w-32 lg:w-48 " />
                            </div>
                            <div className="md:shrink-0 flex items-center">

                                <h2 className="mt-5 mx-5 md:mx-10 md:mt-20 text-center text-dark dark:text-white87 text-3xl lg:text-[26px] sm:text-2xl font-semibold">
                                    <NavLink to={`/match`}> {auctionName?.ar}</NavLink>
                                </h2>
                            </div></div>
                        <div className="flex items-center">
                            <h2 className="text-center text-dark dark:text-white87 text-3xl lg:text-[26px] sm:text-2xl font-semibold">
                                <div className="md:shrink-0 flex items-center">
                                    <Countdown date={Date.now()} renderer={rendererTime} />
                                </div>
                            </h2></div>
                    </div>
                    <Swiper {...params} >
                        {auctionData.map((item, index) => {
                            return (
                                <div key={index + 1} className="p-3 text-center bg-white rounded-lg sm:px-5 dark:bg-white10 box-border  border-2">
                                    <AuctionCard {...item} index={index} />
                                </div>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </TestimonialStyleWrapper>
    )
}
Auction.propTypes = {
    params: PropTypes.object,
    auctionData: PropTypes.object,
    auctionStatus: PropTypes.string,
    auctionTimer: PropTypes.string,
    auctionTitle: PropTypes.string,
}
export default Auction;
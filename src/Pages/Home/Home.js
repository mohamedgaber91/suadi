// import { Link } from "react-router-dom";
import LeftImg from "../../comps/leftImg/LeftImg";
import RightImg from "../../comps/rightImg/RightImg";
import img from "../../imgs/G.svg";
import comp from "../../imgs/comp.svg";
import comp1 from "../../imgs/comp-1-1.png";
import comp2 from "../../imgs/comp-1-2.png";
import comp3 from "../../imgs/comp-1-3.png";
import comp4 from "../../imgs/comp-1-4.png";
import "./Home.css";
import Logo from "../../comps/logo/Logo";
import Services from "../../comps/services/Services";
import NavBar from "../../comps/NavBar/NavBar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import SlideNextButton from "./nextSwiper";
// import SlidePrevButton from "./backSwiper";
function Home(props) {
  var { darkMode = false } = props;
  if (darkMode) {
    document.querySelector("body").style.background = "#212529";
  } else {
    document.querySelector("body").style.background = "#fff";
  }
  return (
    <>
      <NavBar />
      <RightImg
        rightSrc={img}
        divImgClassName="imgG"
        alt="business"
        title="welcome to"
        haveLogo={true}
        text={<Logo />}
        haveButtons={true}
        className="home"
        imgClassName="homeImg"
        colImg="6"
        colText="6"
        divTextClassName="homeText"
        darkMode={darkMode}
      />
      <LeftImg
        leftSrc={<Logo />}
        alt="logo"
        title="Welcome to"
        text="First Gulf Consulting, where we specialize in providing tailored 
                solutions for individuals and businesses in the ever-evolving landscape of careers, business strategies,
                and cybersecurity. Our comprehensive suite of services includes custom career counseling, business audits,
                cybersecurity solutions, market data opinion polls, and a range of other valuable offerings."
        darkMode={darkMode}
        className="welcome"
        imgClassName="welcomeImg"
        colImg="6"
        colText="6"
        haveLogo={true}
        divTextClassName={`${darkMode ? "darkLogoBorder" : "logoBorder"} `}
      />

      <Services darkMode={darkMode} showNavbar="false" />


      <LeftImg
        leftSrc={
          <>
            {/* <img src={comp1} alt="..." />
            <img src={comp3} alt="..." />
            <img src={comp1} alt="..." />
            <img src={comp3} alt="..." />
            <img src={comp} className="bigComp" alt="..." />
            <img src={comp2} alt="..." />
            <img src={comp4} alt="..." />
            <img src={comp2} alt="..." />
            <img src={comp4} alt="..." /> */}

            <Swiper
              modules={[Pagination]}
              spaceBetween={window.innerWidth < 900 ? window.innerWidth < 600 ? 0 : 30 : 100}
              slidesPerView={
                window.innerWidth < 900
                  ? window.innerWidth < 600
                    ? 1 : 3 : 5
              }
              pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}

            >
              <SwiperSlide> <img src={comp3} alt="..." /></SwiperSlide>
              <SwiperSlide> <img src={comp1} alt="..." /></SwiperSlide>
              <SwiperSlide> <img src={comp3} alt="..." /></SwiperSlide>
              <SwiperSlide> <img src={comp} className="bigComp" alt="..." /></SwiperSlide>
              <SwiperSlide> <img src={comp2} alt="..." /></SwiperSlide>
              <SwiperSlide> <img src={comp4} alt="..." /></SwiperSlide>
              <SwiperSlide> <img src={comp2} alt="..." /></SwiperSlide>
              <SwiperSlide> <img src={comp4} alt="..." /></SwiperSlide>
            </Swiper>
          </>
        }
        className="comp welcome "
        alt="logo"
        title="BCG"
        text="BCG is a global consulting firm that partners with leaders in business and society
                 to tackle their most important challenges. Learn more about BCG"
        darkMode={darkMode}
        divImgClassName="companiesImg"
        colImg="12"
        colText="12"
        haveLogo={true}
        divTextClassName="bcg"
        secIs={true}
        headSec={<h2 className="text-start">Companies </h2>}
      />
      <LeftImg
        leftSrc={
          <>
            {/* <img src={comp1} alt="..." />
            <img src={comp3} alt="..." />
            <img src={comp1} alt="..." />
            <img src={comp3} alt="..." />
            <img src={comp} className="bigComp" alt="..." />
            <img src={comp2} alt="..." />
            <img src={comp4} alt="..." />
            <img src={comp2} alt="..." />
            <img src={comp4} alt="..." /> */}

            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={window.innerWidth < 900 ? window.innerWidth < 600 ? 0 : 30 : 100}
              slidesPerView={
                window.innerWidth < 900
                  ? window.innerWidth < 600
                    ? 1 : 3 : 5
              }
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide> <img src={comp3} alt="..." /></SwiperSlide>
              <SwiperSlide> <img src={comp1} alt="..." /></SwiperSlide>
              <SwiperSlide> <img src={comp3} alt="..." /></SwiperSlide>
              <SwiperSlide> <img src={comp} className="bigComp" alt="..." /></SwiperSlide>
              <SwiperSlide> <img src={comp2} alt="..." /></SwiperSlide>
              <SwiperSlide> <img src={comp4} alt="..." /></SwiperSlide>
              <SwiperSlide> <img src={comp2} alt="..." /></SwiperSlide>
              <SwiperSlide> <img src={comp4} alt="..." /></SwiperSlide>
            </Swiper>
          </>
        }
        className="comp Indiv "
        alt="logo"
        title="BCG"
        text="BCG is a global consulting firm that partners with leaders in business and society
                 to tackle their most important challenges. Learn more about BCG"
        darkMode={!darkMode}
        divImgClassName="companiesImg"
        colImg="12"
        colText="12"
        haveLogo={true}
        divTextClassName="bcg"
        secIs={true}
        headSec={<h2 className="text-start">Individuals </h2>}
      />
    </>
  );
}

export default Home;

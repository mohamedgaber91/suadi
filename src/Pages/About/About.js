import './About.css'
import LeftImg from '../../comps/leftImg/LeftImg';
import RightImg from '../../comps/rightImg/RightImg';
// import img1 from '../../imgs/about-1.jpg';
import img2 from '../../imgs/about-2.jpg';
import img3 from '../../imgs/about-3.png';
import img4 from '../../imgs/about-4.jpg';
import img5 from '../../imgs/cyper-1.jpg';

function Movies(props) {
    const {darkMode =true} = props;
    if(!darkMode){
        document.querySelector('body').style.background='#212529'
      }else{
        document.querySelector('body').style.background='#fff'
      }
    return (
        <>
            <LeftImg
                leftSrc={<h1>about fcg</h1>} alt='logo' title=''
                text=''
                darkMode={!darkMode} className='aboutHeader' divImgClassName='aboutHeaderImg'
                colImg='12' colText='0' haveLogo={true}
                divTextClassName='aboutHeaderText' />

            {darkMode
            ? <p className='text-start fs-5 p-5 m-5 ms-0 text-black'>
                caters to a diverse range of clients and entities, all seeking expert guidance and solutions in various domains. Our services are tailored to meet the needs of:
            </p>
            :<p className='text-start fs-5 p-5 m-5 ms-0  text-white'>
                caters to a diverse range of clients and entities, all seeking expert guidance and solutions in various domains. Our services are tailored to meet the needs of:
            </p>}

            <RightImg
                rightSrc={img2} alt='about-1' title='Individuals in Career Transition:' haveLogo={false}
                text={"Whether you're a recent graduate, a mid-career professional seeking a change, or someone re-entering the workforce, our custom career counselling services offer guidance and direction to help you make informed decisions about your career path."}
                haveButtons={false} className='aboutRight pt-0 p-5' divImgClassName='aboutRightImgDiv'
                imgClassName='aboutRightImg' colImg='4' colText='8'
                divTextClassName='aboutRightText ps-5 pe-5' darkMode={darkMode}
            />
            <LeftImg leftSrc={img3} haveLogo={false} alt='about-2' title='Businesses of All Sizes:'
                text='From start-ups to established enterprises, our business audit services provide valuable insights to enhance efficiency, reduce costs, and optimize operations. We partner with businesses looking to scale, pivot, or improve their overall performance.'
                darkMode={darkMode} className='aboutLeft' divImgClassName='aboutLeftImgDiv'
                imgClassName='aboutLeftImg' colImg='6' colText='6'
                divTextClassName='aboutLeftText' 
                />
            <RightImg
                rightSrc={img4} alt='about-1' title='Entrepreneurs and Business Owners:' haveLogo={false}
                text={"Entrepreneurs and business owners benefit from our strategic consulting services, enabling them to refine business plans, identify growth opportunities, and make informed decisions that lead to success"}
                haveButtons={false} className='aboutRight pt-5 p-5' divImgClassName='aboutRightImgDiv'
                imgClassName='aboutRightImg' colImg='4' colText='8'
                divTextClassName='aboutRightText ps-5 pe-5' darkMode={darkMode}
            />
            <RightImg
                rightSrc={img5} alt='Cybersecurity' title='Organizations Concerned About Cybersecurity: '
                haveLogo={false} text={'In an increasingly digitized world, cybersecurity is a top priority. Our cybersecurity solutions are designed for organizations of all sizes, ensuring the protection of sensitive data and maintaining compliance with industry regulations.'}
                haveButtons={false} className='cyper' imgClassName='cyperImg' colImg='6' colText='6'
                divTextClassName='cyperText' darkMode={false}
            />
            <RightImg
                rightSrc={img3} alt='Marketing' title='Marketing and Strategy Professionals: '
                haveLogo={false} text={'Our market data opinion polls and services provide marketing and strategy professionals with up-to-date insights into consumer behavior, industry trends, and market dynamics, helping them devise targeted and effective strategies.'}
                haveButtons={false} className='market' imgClassName='marketImg' colImg='6' colText='6'
                divTextClassName='marketText' darkMode={darkMode}
            />

             <LeftImg
                leftSrc={''} alt='HUMAN' title='Human Resources Departments: '
                text='HR teams can leverage our career counseling services to provide valuable guidance and support to employees navigating their career paths within the organization, fostering employee satisfaction and retention.'
                darkMode={!darkMode} className='human my-5' divImgClassName='humanImg'
                colImg='6' colText='6' haveLogo={true}
                divTextClassName='humanText' />

            <RightImg
                rightSrc={img2} alt='about-1' title='Individuals in Career Transition:' haveLogo={false}
                text={"Whether you're a recent graduate, a mid-career professional seeking a change, or someone re-entering the workforce, our custom career counselling services offer guidance and direction to help you make informed decisions about your career path."}
                haveButtons={false} className='aboutRight pt-0 p-5 mt-5' divImgClassName='aboutRightImgDiv'
                imgClassName='aboutRightImg' colImg='4' colText='8'
                divTextClassName='aboutRightText ps-5 pe-5 ' darkMode={darkMode}
            />
            <LeftImg leftSrc={img3} haveLogo={false} alt='about-2' title='Businesses of All Sizes:'
                text='From start-ups to established enterprises, our business audit services provide valuable insights to enhance efficiency, reduce costs, and optimize operations. We partner with businesses looking to scale, pivot, or improve their overall performance.'
                darkMode={darkMode} className='aboutLeft' divImgClassName='aboutLeftImgDiv'
                imgClassName='aboutLeftImg' colImg='6' colText='6'
                divTextClassName='aboutLeftText' 
                />
            <RightImg
                rightSrc={img4} alt='about-1' title='Entrepreneurs and Business Owners:' haveLogo={false}
                text={"Entrepreneurs and business owners benefit from our strategic consulting services, enabling them to refine business plans, identify growth opportunities, and make informed decisions that lead to success"}
                haveButtons={false} className='aboutRight pt-5 p-5' divImgClassName='aboutRightImgDiv'
                imgClassName='aboutRightImg' colImg='4' colText='8'
                divTextClassName='aboutRightText ps-5 pe-5' darkMode={darkMode}
            />
        </>
    );
}

export default Movies;
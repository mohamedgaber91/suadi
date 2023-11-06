import React, { useState } from 'react';
import { Row, Col, Carousel, Radio } from 'antd';
import { CarouselStyleWraper } from '../ui-elements-styled';
import { GlobalUtilityStyle } from '../styled';

const Carousels = () => {

  const [state, setState] = useState({
    dotPosition: 'top',
    changeValues: [],
  });
  const onChange = (a, b, c) => {
    setState({ ...state, changeValues: [a, b, c] });
  };

  const handlePositionChange = ({ target: { value: dotPosition } }) => setState({ dotPosition });
  const { dotPosition } = state;

  return (
    <>

      <GlobalUtilityStyle>
        <div className="min-h-[215px] lg:min-h-[580px] px-8 xl:px-[15px] pb-[30px] bg-transparent">
          <Row>
            <Col >


              <div className="bg-white dark:bg-white10 m-0 p-0 text-theme-gray dark:text-white60 text-[15px] mb-[25px] rounded-10 relative">

                <CarouselStyleWraper className="p-[25px]">
                  <Carousel autoplay>
                    <div>
                      <h3 className="text-white dark:text-white87">1</h3>
                    </div>
                    <div>
                      <h3 className="text-white dark:text-white87">2</h3>
                    </div>
                    <div>
                      <h3 className="text-white dark:text-white87">3</h3>
                    </div>
                    <div>
                      <h3 className="text-white dark:text-white87">4</h3>
                    </div>
                  </Carousel>
                </CarouselStyleWraper>
              </div>
            </Col>

          </Row>
        </div>
      </GlobalUtilityStyle>
    </>
  );
}

export default Carousels;

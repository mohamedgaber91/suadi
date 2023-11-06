import { Spin } from 'antd';
import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';

const AuthLayout = (WraperContent) => {
  const path = '/';

  return function () {
    return (
      <Suspense
        fallback={
          <div className="spin flex items-center justify-center h-[calc(100vh-132px)]">
            <Spin />
          </div>
        }
      >
        <div
          style={{ backgroundImage: `url("${require('../static/img/admin-bg-light.png')}")` }}
          className="bg-top bg-no-repeat"
        >
          <div className="py-[120px] 2xl:py-[80px] px-[15px]">
            <Link to="/" style={{ display: 'block' }}>

              <div className="flex justify-center h-[calc(30vh-132px)]">
                <img className="dark:hidden" src={require(`../static/img/FullLogoLight.svg`).default} alt="" />
                <img className="hidden dark:block" src={require(`../static/img/FullLogoDark.svg`).default} alt="" />

              </div></Link>
            <WraperContent />
          </div>
        </div>
      </Suspense>
    );
  };
};

export default AuthLayout;

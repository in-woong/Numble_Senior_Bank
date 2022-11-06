import React from 'react';
import mouse from '../lib/svg/mouse.svg';
import Vector9 from '../lib/svg/Vector9.svg';

const TodayLuck = () => {
  return (
    <>
      <div className='flex justify-center  items-center mt-[15.78px] w-[360px] h-[50px] bg-[#C6E2FF]'>
        <div className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center '>
          <img src={mouse} />
        </div>
        <span className='text-[14px] mx-[8px]'>74년생 오늘의 운세</span>
        <span className='text-[24px] flex '>
          90점 <img src={Vector9} className='ml-[6px]' />
        </span>
      </div>
    </>
  );
};

export default TodayLuck;

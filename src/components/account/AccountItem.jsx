import bankLogo from '../../lib/img/img_ci1.png';
const AccountItem = () => {
  return (
    <div className='bg-white h-[195px] w-[320px] rounded-[16px] p-[12px] mr-[16px]'>
      <div className='flex'>
        <img className='h-fit w-fit' src={bankLogo} alt='banklogo' />
        <div className='ml-[7px] w-full'>
          <p className='text-[#636363] text-[13px]'>
            <span className=' text-[#101417]'>입출금</span> 신한 주거래 계좌
          </p>
          <div className='flex justify-between h-[28px] items-center w-full'>
            <p className='text-[#6E6E6E] text-[11px]'>신한 100-484-323533</p>
            <button className='text-[13px] w-[90.89px]  h-[28px] border rounded-[16px]'>
              복사하기
            </button>
          </div>
        </div>
      </div>
      <p className='mt-[14px] text-[26px]'>45,564원</p>
      <button className='mt-[22px] bg-[#0471E8] w-[296px] h-[38px] rounded-[8px] text-white'>
        이체
      </button>
    </div>
  );
};

export default AccountItem;

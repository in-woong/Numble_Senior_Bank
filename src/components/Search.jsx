import search from '../lib/svg/search.svg';
const Search = () => {
  return (
    <div className='mx-auto w-[320px] h-[48px] py-[15.7px] pl-[24px] pr-[14.1px] flex justify-between items-center rounded-[16px] mt-[27.44px] bg-white'>
      <form className='w-full'>
        <input
          className='font-one text-[15px] w-11/12'
          placeholder='무슨 업무를 도와드릴까요?'
        />
      </form>
      <img src={search} />
    </div>
  );
};

export default Search;

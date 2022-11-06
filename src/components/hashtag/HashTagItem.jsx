const HashTagItem = ({ content }) => {
  return (
    <button className='bg-[#E6F0FA] mr-[8px] rounded-[8px]'>
      {<span className='text-[13px] text-[#2C2C2E] p-[8px]'>#{content}</span>}
    </button>
  );
};
export default HashTagItem;

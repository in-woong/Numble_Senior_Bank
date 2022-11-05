import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

import userButton from '../../../lib/svg/userButton.svg';
import zoomIn from '../../../lib/svg/zoomIn.svg';

const HeaderWrapper = styled.div([
  tw`max-w-[360px] pt-[42px] flex w-full justify-between px-5`,
]);
const ButtonWrapper = styled.div([tw`flex`]);
const Button = styled.button([tw`h-[28px] w-[28px] ml-[8px]`]);

const Header = () => {
  return (
    <HeaderWrapper>
      <h2 className='text-xl'>홈</h2>
      <ButtonWrapper>
        <Button>
          <img src={userButton} />
        </Button>
        <Button>
          <img src={zoomIn} />
        </Button>
      </ButtonWrapper>
    </HeaderWrapper>
  );
};

export default Header;

import styled from '@emotion/styled/macro';
import tw from 'twin.macro';
import FooterBtn from '../../common/Footer/Button';
import Home from '../../../lib/svg/Home.svg';
import AllButtons from '../../../lib/svg/AllButtons.svg';
import Houses from '../../../lib/svg/Houses.svg';
import Group from '../../../lib/svg/Group.svg';
import Recommend from '../../../lib/svg/Recommend.svg';

const FooterWrapper = styled.div([
  tw`fixed w-full h-[66px] bg-white left-0 bottom-0`,
]);

const BtnWrapper = styled.div([
  tw`w-[320px] mt-[4px] mb-[11px] flex justify-between items-start mx-auto`,
]);

const Footer = () => {
  return (
    <FooterWrapper>
      <BtnWrapper>
        <FooterBtn image={Home} name='홈' />
        <FooterBtn image={Group} name='계좌' />
        <FooterBtn image={Recommend} name='상품추천' />
        <FooterBtn image={Houses} name='우리동네' />
        <FooterBtn image={AllButtons} name='전체메뉴' />
      </BtnWrapper>
    </FooterWrapper>
  );
};

export default Footer;

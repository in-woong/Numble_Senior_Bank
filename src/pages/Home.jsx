import styled from '@emotion/styled/macro';
import React from 'react';
import tw, { css } from 'twin.macro';
import AccountCarousel from '../components/Account/AccountCarousel';
import AppsContainer from '../containers/AppsContainer';
import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import HashTagContainer from '../containers/HashTagContainer';
import SearchContainer from '../containers/SearchContainer';
import TodayLuckContainer from '../containers/TodayLuckContainer';

const HomeWrapper = styled.div([
  tw`bg-[#F3F6FB] pb-[95px]`,
  css`
    height: fit-content;
  `,
]);

const Home = () => {
  return (
    <HomeWrapper className='h-fit'>
      <HeaderContainer />
      <AccountCarousel />
      <TodayLuckContainer />
      <AppsContainer />
      <SearchContainer />
      <HashTagContainer />
      <FooterContainer />
    </HomeWrapper>
  );
};

export default Home;

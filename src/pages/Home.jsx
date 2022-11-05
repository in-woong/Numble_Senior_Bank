import styled from '@emotion/styled/macro';
import React from 'react';
import tw from 'twin.macro';
import AccountCarousel from '../components/Account/AccountCarousel';
import FooterContainer from '../containers/common/FooterContainer';
import HeaderContainer from '../containers/common/HeaderContainer';

const HomeWrapper = styled.div([tw``]);

const Home = () => {
  return (
    <HomeWrapper className=''>
      <HeaderContainer />
      <AccountCarousel />
      <FooterContainer />
    </HomeWrapper>
  );
};

export default Home;

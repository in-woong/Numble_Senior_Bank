import styled from '@emotion/styled/macro';
import React from 'react';
import tw from 'twin.macro';
import FooterContainer from '../containers/common/FooterContainer';
const HomeWrapper = styled.div([tw`relative`]);
const Home = () => {
  return (
    <HomeWrapper className=''>
      <h1>Home</h1>
      <FooterContainer />
    </HomeWrapper>
  );
};

export default Home;

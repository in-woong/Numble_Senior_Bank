import styled from '@emotion/styled/macro';
import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';

const AppWrapper = styled.div([
  tw`bg-white w-[155px] h-[120px] rounded-[16px] flex justify-center items-center`,
]);

const App = ({ name, image, link }) => {
  return (
    <AppWrapper>
      <Link to={`/${link}`}>
        <div className='flex justify-center items-center '>
          <img src={image} />
        </div>
        <p className='text-center'>{name}</p>
      </Link>
    </AppWrapper>
  );
};

export default App;

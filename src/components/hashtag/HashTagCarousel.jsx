import styled from '@emotion/styled/macro';
import tw, { css } from 'twin.macro';
import HashTagItem from './HashTagItem';

const Wrapper = styled.div([
  tw`ml-[19.97px] mt-[15.66px] `,
  css`
    overflow: hidden;
    white-space: nowrap;
  `,
]);

const HashTagCarousel = () => {
  return (
    <Wrapper>
      <HashTagItem content='자동이체' />
      <HashTagItem content='통장만들기' />
      <HashTagItem content='비밀번호찾기' />
      <HashTagItem className='mr-0' content='해외송금' />
    </Wrapper>
  );
};
export default HashTagCarousel;

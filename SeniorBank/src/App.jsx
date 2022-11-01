import { css } from '@emotion/react';
import tw, { styled } from 'twin.macro';

const Caption = tw.p`
font-light w-full
md:font-thin md:whitespace-normal md:text-left 
`;
const Icon = styled.div(({ index }) => [
  tw`
   md:flex-shrink-0 md:mt-20 md:leading-3
`,
  css`
    position: relative;
    &::before {
      content: '0${index}';
      padding: ${index};
    }
  `,
]);

function App() {
  return (
    <div className='App'>
      <Caption>1234</Caption>
      <Icon index={2} />
    </div>
  );
}

export default App;

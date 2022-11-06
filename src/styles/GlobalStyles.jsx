import React from 'react';
import { Global } from '@emotion/react';
import tw, { css, theme, GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css({
  body: {
    'font-family': 'font-adream',
    WebkitTapHgihlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;

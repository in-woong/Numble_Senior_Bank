import React from 'react';
import App from './App';

import Coin from '../lib/img/Coin.png';
import Account from '../lib/img/Account.png';
import ATM from '../lib/img/ATM.png';
import Group from '../lib/img/Group.png';
import MoneyPaper from '../lib/img/MoneyPaper.png';
import Talk from '../lib/img/Talk.png';

import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

const AppsWrapper = styled.div([
  tw`grid grid-cols-2 gap-[10px] w-[320px] mt-[16px] mx-auto`,
]);
const Apps = () => {
  return (
    <AppsWrapper>
      <App name='돈보내기' image={Coin} />
      <App name='통장정리' image={Account} />
      <App name='카드없는 ATM출금' image={ATM} />
      <App name='공과금내기' image={MoneyPaper} />
      <App name='정부 지원금 찾기' image={Group} />
      <App name='상담하기' image={Talk} />
    </AppsWrapper>
  );
};

export default Apps;

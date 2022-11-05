import CashBag from './pages/CashBag';
import Home from './pages/Home';
import HugeTransferPopUp from './pages/HugeTransferPopup';
import MyCash from './pages/MyCash';
import MyGround from './pages/MyGround';
import Recommend from './pages/Recommend';

import tw from 'twin.macro';
import styled from '@emotion/styled/macro';

import { Routes, Route } from 'react-router-dom';

const AppWrapper = styled.div([tw`w-[360px] h-[800px] bg-[#F3F6FB]`]);

function App() {
  return (
    <AppWrapper className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hugetansferpopup' element={<HugeTransferPopUp />} />
        <Route path='/cashbag' element={<CashBag />} />
        <Route path='/mycash' element={<MyCash />} />
        <Route path='/recommend' element={<Recommend />} />
        <Route path='/myground' element={<MyGround />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;

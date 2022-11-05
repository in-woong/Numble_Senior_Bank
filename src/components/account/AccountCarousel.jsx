import styled from '@emotion/styled/macro';
import tw from 'twin.macro';
import AccountItem from './AccountItem';

const Carousel = styled.div([
  tw` flex max-w-[360px] w-full mt-[16px] pl-[12.12px] truncate`,
]);

const AccountCarousel = () => {
  return (
    <Carousel>
      <AccountItem />
      <AccountItem />
    </Carousel>
  );
};

export default AccountCarousel;

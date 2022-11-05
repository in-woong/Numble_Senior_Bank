import styled from '@emotion/styled/macro';
import tw from 'twin.macro';

const ButtonImg = styled.img([tw`h-[36px] w-[36px] mx-auto`]);
const ButtonWrapper = styled.button([tw`w-[45px] h-[51px]`]);
const ButtonText = styled.p([tw`max-w-[360px]`]);
const FooterBtn = ({ image, name }) => {
  return (
    <ButtonWrapper>
      <ButtonImg src={image} alt={name} />
      <ButtonText className='font-one text-xs max-w-[45px]'>{name}</ButtonText>
    </ButtonWrapper>
  );
};

export default FooterBtn;

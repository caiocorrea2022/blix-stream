import styled from 'styled-components/native'
import { aspectRatioLogoAbout } from '../../config/data';

export const Avatar = styled.Image`
width: undefined;
height: 100%;
aspectRatio: ${aspectRatioLogoAbout}; 
`;

export const HeaderRightSide = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const HeaderLeftSide = styled.View`
    flex-direction: row;
    height: 2.5rem;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
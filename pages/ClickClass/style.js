import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const Image = styled.ImageBackground`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

export const ContentVideoDesktop = styled.View`
    align-self: center;
    width: 65%;
    height: 70%;
    aspect-ratio: 16/9;
`;

export const ContentVideoMobile = styled.View`
    width: ${windowWidth};
    aspect-ratio: 16/9;
    margin-bottom:2rem;
    justify-content: center;
    align-items: center;
`;

export const ContentList = styled.View`
    align-self: center;
    width: 30%;
    height: 70%;
`;
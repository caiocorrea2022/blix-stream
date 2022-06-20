import styled from 'styled-components/native';

export const Image = styled.ImageBackground`
  width: 100%;
  aspect-Ratio: 16 / 9;
  border-radius: 10px;
  overflow: hidden;
`;

export const ContentVideoDesktop = styled.View`
    align-self: center;
    width: 60%;
    aspect-ratio: 16/9;
`;

export const ContentVideoMobile = styled.View`
    align-self: center;
    width: 95%;
    aspect-ratio: 16/9;
    margin-bottom:2rem;
`;

export const ContentList = styled.View`
    align-self: center;
    width: 30%;
    height: 76%;
`;
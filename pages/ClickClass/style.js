import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const Container = styled.View`
    flex: 1;
    background-color: ${THEME.COLORS.BACKGROUND};
`;

export const Image = styled.ImageBackground`
  width: 100%;
  aspect-Ratio: 16 / 9;
  margin: 1rem 1rem 0.5rem 0rem;
  border-radius: 10px;
  overflow: hidden;
`;

export const ContentVideo = styled.View`
    align-self: center;
    width: 60%;
`;

export const ContentList = styled.View`
    align-self: center;
    width: 30%;
    height: 76%
`;
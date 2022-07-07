import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import THEME from '../../config/theme'

export const Poster = styled.ImageBackground`
    width: 100%;
    height: ${(Dimensions.get('window').height * 60) / 100}px;
`;

export const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: true,
    contentContainerStyle: {
      flexDirection: "column",
      backgroundColor: THEME.COLORS.BACKGROUND_MAIN,
      flexBasis: "auto",
    },
  })`  
  `;

export const Content = styled.View`
    background-color: ${THEME.COLORS.BACKGROUND_MAIN};
`;

export const Gradient = styled(LinearGradient)`
    height: 100%;
`;

export const Hero = styled.View`
    position: absolute;
    width: 100%;
    bottom: 3rem;
    padding: 0.5rem 1rem;
`;
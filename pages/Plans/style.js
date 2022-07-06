import styled from 'styled-components/native';
import THEME from '../../config/theme';


export const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: true,
    contentContainerStyle: {
      flexDirection: "column",
      backgroundColor: THEME.COLORS.BACKGROUND_ABOUT,
      flexBasis: "auto",
    },
  })`  
  `;
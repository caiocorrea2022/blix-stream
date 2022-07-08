import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const ViewButton = styled.View`
  padding: 0.5rem 0rem;
  justify-content:center;
  align-items: center;
`;

export const VerticalScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: true,
  contentContainerStyle: {
    flexDirection: "column",
    backgroundColor: THEME.COLORS.BACKGROUND_ABOUT,
  },
})`  
`;

export const ViewTextInput = styled.View`
  height: 5rem;
`;

export const ViewText = styled.View`
  height: 80%;
`;

export const ViewHelper = styled.View`
  height: 20%;
  justify-content: center;
`;


export const ViewCheckBox = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0rem;
`;

export const ViewTitle = styled.View`
  justify-content: center;
`;

export const Content = styled.View`
  justify-content: flex-start;
  padding: 1rem;
`;

export const Footer = styled.View`
  padding: 1rem 0rem;
  justify-content:center;
  align-items: center;
`;
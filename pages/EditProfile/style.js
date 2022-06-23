import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const VerticalScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: true,
  contentContainerStyle: {
    flexDirection: "column",
    backgroundColor: THEME.COLORS.BACKGROUND,
  },
})`  
`;

export const ViewTitle = styled.View`
  justify-content: center;
  padding: 1rem 0rem;
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

export const ViewDescription = styled.View`
  justify-content: center;
  padding: 0.5rem 0rem;
`;

export const Content = styled.View`
  justify-content: flex-start;
  padding: 1rem;
`;

export const ViewButton = styled.View`
  padding: 0.5rem 0rem;
  align-self: flex-start;
`;

export const ViewPlan = styled.View`
  padding: 0rem 1rem;
  justify-content: flex-start;
`;
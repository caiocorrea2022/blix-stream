import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const ContentDesktop = styled.View`
  width: 70%;
  padding: 2rem 6rem;
`;

export const ContentMobile = styled.View`
  padding: 2rem 1rem;
`;

export const Image = styled.Image`
  aspect-Ratio: 16/9;
  width: 100%;
  border-radius: 10px;
  padding: 1rem;
`;

export const ContentList = styled.View`
  width: 30%;
  padding: 2rem 0rem;
`;

export const ViewText = styled.View`
  width: 100%; 
  align-self: center;
  margin:0rem 0rem 1rem 0rem;
`;

export const ViewButton = styled.View`
  padding: 1rem 0rem;
  align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : 'center')};
`;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: true,
  contentContainerStyle: {
    flexDirection: "column",
    backgroundColor: THEME.COLORS.BACKGROUND_ABOUT,
    flexBasis: "auto",
  },
})`  
`;
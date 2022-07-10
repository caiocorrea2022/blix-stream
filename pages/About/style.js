import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const Poster = styled.ImageBackground`
  flex:2;
`;

export const ViewSection = styled.View`
  padding: 1rem 0rem;
  flex-basis: auto;
  background-color: ${({ background }) => (background ? background : null)};
`;

export const ViewAboutMe = styled.View`
  padding: 2rem;
  flex-basis: auto;
`;

export const ViewText = styled.View`
  padding: 1rem 0rem;
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

export const ViewCookies = styled.View`
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 1rem 0rem;
  z-index: 99999;
  bottom:0;
`;
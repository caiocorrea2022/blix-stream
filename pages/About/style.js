import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: true,
  contentContainerStyle: {
    flex:1,
    backgroundColor: "white",
  },
})`  
`;

export const ViewAboutMe = styled.View`
  background-color: white;
`;

export const ViewTitleAboutMe = styled.View`
  flex-basis: auto;
  align-items: center;
  justify-content: center;
  padding: 1rem 0rem 1rem 0rem;
`;


export const ViewSubtitleAboutMe = styled.View`
  justify-content: flex-start;
  flex-basis: auto;
  padding: 0rem 2rem;
`;

export const Poster = styled.ImageBackground`
  flex:2;
`;

export const TitleView = styled.View`
  height: 10%;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.View`
  height:${windowHeight * 0.70};
  width: 90%;
  background-color: yellow;
`;
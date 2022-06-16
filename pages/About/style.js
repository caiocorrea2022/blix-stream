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
  padding-top: 0.5rem;
`;


export const ViewSubtitleAboutMe = styled.View`
  justify-content: flex-start;
  flex-basis: auto;
  padding: 1rem;
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
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const ViewAboutMe = styled.View`
  padding: 2rem 0rem 2rem 0rem;
`;

export const Container = styled.View`
  background-color: white;
  flex:1;
`;

export const ViewTitleAboutMe = styled.View`
  flex-basis: auto;
  align-items: center;
  justify-content: center;
  padding: 0rem 0rem 1rem 0rem;
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
`;
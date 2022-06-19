import styled from 'styled-components/native';

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
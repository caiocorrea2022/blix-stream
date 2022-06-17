import styled from 'styled-components/native';

export const ContentDesktop = styled.View`
  width: 60%;
  padding: 2rem 6rem;
`;

export const ContentMobile = styled.View`
  padding: 2rem 1rem;
`;

export const Image = styled.Image`
  aspect-Ratio: 16 / 9;
  width: 100%;
  border-radius: 10px;
  padding: 1rem;
`;

export const ContentList = styled.View`
  width: 40%;
  padding: 2rem 0rem;
`;

export const ViewText = styled.View`
  width: 100%; 
  align-self: center;
  margin:0rem 0rem 1rem 0rem;
  background-color: pink;
`;

export const ViewButton = styled.View`
  padding: 1rem 0rem;
  align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : 'center')};
`;
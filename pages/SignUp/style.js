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
    backgroundColor: "white",
  },
})`  
`;

export const ContainerSideView = styled.View`
    flex-Direction: ${({ flexDirection }) => (flexDirection ? flexDirection: 'row')};
`;


export const SideView = styled.View`
    width: 45%;
    flex-Direction: ${({ flexDirection }) => (flexDirection ? flexDirection: 'column')};
    background-color: ${({ background }) => (background ? background : THEME.COLORS.PRIMARY_900)};
`;


export const ViewTextInput = styled.View`
  height: 5.5rem;
  padding: 0.5rem 1rem;
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
  padding: 1rem 0rem 0rem 0rem;
  justify-content: center;
`;

export const Content = styled.View`
  justify-content: flex-start;
  padding: 1rem 0rem;
`;

export const Footer = styled.View`
  padding: 0.5rem 0rem;
  justify-content:center;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`

`;
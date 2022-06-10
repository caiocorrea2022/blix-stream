import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const ContainerSideView = styled.View`
  flex:1;
  flex-Direction: row;
`;

export const Container = styled.View`
  background-color: ${THEME.COLORS.BACKGROUND};
  justify-content: center;
  flex:1;
`;

export const ViewButton = styled.View`
  flex: 0.5;
  padding: 0.5rem 0rem 0.5rem 0rem;
  justify-content:center;
  align-items: center;
`;

export const ViewTextInput = styled.View`
  padding: 0rem 0.5rem 0rem 0.5rem;
  flex: 1;
`;

export const ViewText = styled.View`
  height: 80%;
`;

export const ViewHelper = styled.View`
  height: 20%;
  justify-content: center;
`;


export const ViewCheckBox = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0rem 0.5rem 0rem;
`;

export const ViewTitle = styled.View`
  flex: 0.5;
  padding: 1rem 0rem 0rem 0rem;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 5;
  justify-content: flex-start;
  padding: 1rem 0rem 1rem 0rem;
`;

export const Footer = styled.View`
  flex: 0.5;
  flex-direction: row;
  padding: 0.5rem 0rem 0.5rem 0rem;
  justify-content:center;
  align-items: center;
`;

export const SideView = styled.View`
  background-color: ${THEME.COLORS.PRIMARY_900};
  flex:0.5;
  flex-Direction: column;
`;

export const BackButton = styled.TouchableOpacity`

`;

export const BackText = styled.Text`
  font-size: ${THEME.FONTSIZE.MEDIUM};
  font-family: ${THEME.FONTFAMILY.MEDIUM};
  color: ${THEME.COLORS.PRIMARY_900};
`;

export const Title = styled.Text`
  color: ${THEME.COLORS.TEXT_900};
  padding-left: 1rem;
  align-self: flex-start;
  font-Size: ${THEME.FONTSIZE.EXTRABIG};
  font-family: ${THEME.FONTFAMILY.BOLD};
`;
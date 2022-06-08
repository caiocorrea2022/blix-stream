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
  flex-Direction: column;
`;

export const ViewHeader = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 6.5;
  justify-content: flex-start;
  margin: 0rem 2rem;
`;

export const Footer = styled.View`
  flex: 1;
`;

export const SideView = styled.View`
  background-color: ${THEME.COLORS.PRIMARY_900};
  flex:0.5;
  flex-Direction: column;
`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export const BackText = styled.Text`
  font-size: ${THEME.FONTSIZE.MEDIUM};
  font-family: ${THEME.FONTFAMILY.MEDIUM};
  color: ${THEME.COLORS.PRIMARY_900};
  margin-left: 0.5rem;
`;

export const Title = styled.Text`
  color: ${THEME.COLORS.TEXT_900};
  align-self: flex-start;
  font-Size: ${THEME.FONTSIZE.BIG};
  font-family: ${THEME.FONTFAMILY.BOLD};
  margin-bottom: 1rem;
`;
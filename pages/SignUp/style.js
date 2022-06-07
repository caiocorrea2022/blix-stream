import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const Container = styled.View`
  padding: 1.5rem;
  background-color: ${THEME.COLORS.BACKGROUND};
  flex:1;
  flex-Direction: column;
`;

export const Content = styled.View`
  flex: 4;
  justify-content: center;
  margin: 0rem 2rem;
`;

export const ContainerSideView = styled.View`
  flex:1;
  flex-Direction: row;
`;

export const SideView = styled.View`
  background-color: ${THEME.COLORS.PRIMARY_900};
  flex:0.9;
  flex-Direction: column;
`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const BackText = styled.Text`
  font-size: ${THEME.FONTSIZE.MEDIUM};
  font-family: ${THEME.FONTFAMILY.MEDIUM};
  color: ${THEME.COLORS.PRIMARY_900};
  margin-left: 5px;
`;

export const Wrapper = styled.View`
`;

export const Title = styled.Text`
  color: ${THEME.COLORS.TEXT_900};
  align-self: flex-start;
  font-Size: ${THEME.FONTSIZE.EXTRABIG};
  font-family: ${THEME.FONTFAMILY.BOLD};
  margin-bottom: 24px;
`;
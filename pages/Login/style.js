import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const Container = styled.View`
  background-color: ${THEME.COLORS.BACKGROUND};
  justify-content: center;
  flex:1;
  flex-Direction: column;
`;

export const SideView = styled.View`
  background-color: ${THEME.COLORS.PRIMARY_900};
  flex:0.5;
  flex-Direction: column;
`;

export const ContainerSideView = styled.View`
  flex:1;
  flex-Direction: row;
`;

export const ViewHeader = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 6.5;
  justify-content: flex-start;
  margin: 0rem 2rem;
`;

export const Title = styled.Text`
  color: ${THEME.COLORS.TEXT_900};
  text-align: center;
  font-Size: ${THEME.FONTSIZE.EXTRABIG};
  font-family: ${THEME.FONTFAMILY.BOLD};
  margin-top: 0.5rem;
`;

export const Image = styled.Image`
  align-self: center;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
`;

import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const SideView = styled.View`
  background-color: ${THEME.COLORS.PRIMARY_900};
  flex:0.5;
  flex-Direction: column;
`;

export const ContainerSideView = styled.View`
  flex:1;
  flex-Direction: row;
`;

export const Container = styled.View`
  background-color: ${THEME.COLORS.BACKGROUND};
  justify-content: center;
  flex:1;
`;

export const ViewImage = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
`;

export const ViewTitle = styled.View`
  flex: 0.5;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${THEME.COLORS.TEXT_900};
  font-Size: ${THEME.FONTSIZE.EXTRABIG};
  font-family: ${THEME.FONTFAMILY.BOLD};
`;

export const Content = styled.View`
  flex: 5;
  justify-content: flex-start;
  padding: 1rem 0rem;
`;

export const ViewTextInput = styled.View`
  height: 5rem;
  padding: 0rem 4rem;
`;

export const ViewText = styled.View`
  height: 80%;
`;

export const ViewHelper = styled.View`
  height: 20%;
  justify-content: center;
`;

export const ViewButton = styled.View`
  width: 100%;
  padding: 1rem 0rem;
  justify-content:center;
  align-items: center;
`;














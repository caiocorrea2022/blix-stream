import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const Container = styled.View`
  padding: 0.5rem 0rem;
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const Text = styled.Text`
  flex-direction: row;
  max-width: 230;
  font-size: ${THEME.FONTSIZE.MEDIUM};
  font-family: ${THEME.FONTFAMILY.BOLD}
`;

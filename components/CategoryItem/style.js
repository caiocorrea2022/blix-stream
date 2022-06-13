import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const Container = styled.TouchableOpacity`
`;

export const Image = styled.ImageBackground`
  width: 15rem;
  aspect-Ratio: 16 / 9;
  margin: 1rem 1rem 0.5rem 0rem;
  border-radius: 10px;
  overflow: hidden;
`;

export const Text = styled.Text`
  flex-direction: row;
  max-width: 230;
  font-size: ${THEME.FONTSIZE.MEDIUM};
  font-family: ${THEME.FONTFAMILY.MEDIUM};
  color: ${THEME.COLORS.TEXT_900};
`;
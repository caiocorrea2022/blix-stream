import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const Container = styled.TouchableOpacity`
`;

export const Image = styled.ImageBackground`
  border-radius: 10px;
  width: 230px;
  aspect-Ratio: 16 / 9;
  margin: 1rem 1rem 0.5rem 0rem;
  border-radius: 10px;
  overflow: hidden;
`;

export const Text = styled.Text`
  margin-top: 5px;
  max-width: 98px;
  color: ${THEME.COLORS.TEXT_900};
  font-Size: ${THEME.FONTSIZE.MEDIUM};
  font-family: ${THEME.FONTFAMILY.BOLD};
`;
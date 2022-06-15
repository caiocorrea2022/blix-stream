import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const Container = styled.TouchableOpacity`
  width: 18rem;
  height: 3rem;
  padding: 0.5rem 0rem;
  border-radius: 30px;
  justify-content: center;
  align-self: center;
  background-color: ${THEME.COLORS.PRIMARY_900};
`;

export const Title = styled.Text`
  color: ${THEME.COLORS.TEXT_000};
  font-size: ${THEME.FONTSIZE.MEDIUM};
  font-family: ${THEME.FONTFAMILY.BOLD};
  text-align: center;
`;

export const Load = styled.ActivityIndicator.attrs({ color: THEME.COLORS.TEXT_000 })`
`;

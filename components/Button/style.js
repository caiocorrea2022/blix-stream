import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const Container = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: ${THEME.COLORS.PRIMARY_900};
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const Title = styled.Text`
  color: ${THEME.COLORS.TEXT_000};
  font-size: ${THEME.FONTSIZE.MEDIUM};
  font-family: ${THEME.FONTFAMILY.BOLD};
`;

export const Load = styled.ActivityIndicator.attrs()`
    color: ${THEME.COLORS.BACKGROUND};
`;

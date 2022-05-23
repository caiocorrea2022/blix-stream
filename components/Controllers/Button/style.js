import styled from 'styled-components/native';
import theme from '../../../global/theme';

export const Container = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: ${theme.colors.primary_900};
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const Title = styled.Text`
  color: ${theme.colors.text_000};
  font-size: ${theme.fontsSize.medium};
  font-family: ${theme.fontsFamily.text_Bold};
`;

export const Load = styled.ActivityIndicator.attrs()`
    color: ${theme.colors.background}
`;

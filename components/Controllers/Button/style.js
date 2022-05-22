import styled from 'styled-components/native';
import theme from '../../../global/theme';

export const Container = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: ${theme.colors.primary_900};
  margin-top: 2%;
  margin-bottom: 1%;
`;

export const Title = styled.Text`
  color: ${theme.colors.text_000};
  font-size: ${theme.fontsSize.medium};
  font-family: ${theme.fontsFamily.text_Bold};

`;

export const Load = styled.ActivityIndicator.attrs()`
    color: ${theme.colors.background}
`;
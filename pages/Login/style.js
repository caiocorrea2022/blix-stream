import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import theme from '../../global/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
  padding: 24px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 48
  },
})`
  width: 100%;
`;

export const Title = styled.Text`
  color: ${theme.colors.text_900};
  text-align: center;
  font-Size: ${theme.fontsSize.big};
  font-family: ${theme.fontsFamily.text_Bold} ;
  margin-top: 0.5%;
`;

export const Header = styled.View`
  display:flex;
  padding: 1%;
`;

export const Image = styled.Image`
  align-self: center;
  width: 150px;
  height: 150px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
`;


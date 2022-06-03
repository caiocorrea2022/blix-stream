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

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const BackText = styled.Text`
  font-size: 14px;
  font-family: ${theme.fontsFamily.text_Medium};
  color: ${theme.colors.primary_900};
  margin-left: 5px;
`;

export const Wrapper = styled.View`
`;

export const Title = styled.Text`
  color: ${theme.colors.text_900};
  align-self: flex-start;
  font-Size: ${theme.fontsSize.big};
  font-family: ${theme.fontsFamily.text_Bold};
  margin-bottom: 24px;
`;

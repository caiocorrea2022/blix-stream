import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import THEME from '../../config/theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${THEME.COLORS.BACKGROUND};
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
  font-size: ${THEME.FONTSIZE.MEDIUM};
  font-family: ${THEME.FONTFAMILY.MEDIUM};
  color: ${THEME.COLORS.PRIMARY_900};
  margin-left: 5px;
`;

export const Wrapper = styled.View`
`;

export const Title = styled.Text`
  color: ${THEME.COLORS.TEXT_900};
  align-self: flex-start;
  font-Size: ${THEME.FONTSIZE.EXTRABIG};
  font-family: ${THEME.FONTFAMILY.BOLD};
  margin-bottom: 24px;
`;
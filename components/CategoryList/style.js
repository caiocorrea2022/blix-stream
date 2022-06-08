import styled from 'styled-components/native';
import THEME from '../../config/theme';
import { Dimensions } from 'react-native'

export const List = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 8px 0 24px;
  padding-left: 1rem;
`;

export const CategoryContainer = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const CategoryImage = styled.Image`
  /* width: ${Math.round((Dimensions.get('window').width * 35) / 100)}px; */
  width: 10rem;
  height: 6rem;
  border-radius: 10px;
`;

export const CategoryName = styled.Text`
  margin-top: 5px;
  max-width: 98px;
  color: ${THEME.COLORS.TEXT_900};
  font-Size: ${THEME.FONTSIZE.MEDIUM};
  font-family: ${THEME.FONTFAMILY.BOLD};
`;

export const Info = styled.Text`
  margin-left: 4px;
  padding-bottom: 1px;
  color: ${THEME.COLORS.TEXT_900};
`;

import styled from 'styled-components/native';
import theme from '../../global/theme';
import { Dimensions } from 'react-native'

export const List = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 8px 0 24px;
  padding-left: 1rem;
`;

export const CategoryContainer = styled.TouchableOpacity`
  /* background: purple; */
  margin-right: 10px;
`;

export const CategoryImage = styled.Image`
  width: ${Math.round((Dimensions.get('window').width * 35) / 100)}px;
	height: 150px;
  border-radius: 10px;
`;

export const CategoryName = styled.Text`
  margin-top: 5px;
  max-width: 98px;
  color: ${theme.colors.text_900};
  /* font-family: roboto_700; */
  font-size: 13.5px;
`;

export const CategoryStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const RedCircle = styled.View`
  background: ${theme.colors.primary_900};
  width: 9px;
  height: 9px;
  border-radius: 4.5px;
`;

export const Info = styled.Text`
  margin-left: 4px;
  padding-bottom: 1px;
  color: ${theme.colors.text_900};
  /* font-family: roboto_500; */
`;
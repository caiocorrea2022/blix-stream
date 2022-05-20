import styled from 'styled-components/native'
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import theme from '../../global/theme';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  background: ${theme.colors.background};
  flex:1;
  flex-Direction: "column";
  padding: ${statusBarHeight + '0.5rem'};
`;

export const Title = styled.Text`
  color: ${theme.colors.text_900};
  text-align: center;
  font-Size: ${theme.fontsSize.big};
  font-family: ${props => `${props.fontFamily}`};
  margin-top: 0.5rem;
`;

export const Text = styled.Text`
  text-align: center;
  color: ${props => `${props.color}`};
  font-size: ${props => `${props.fontSize}`};
  font-Weight: ${props => `${props.fontWeight}`};
`;

export const Main = styled.View`
  flex:4;
  padding: 1rem;
`;

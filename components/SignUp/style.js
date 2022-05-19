import styled from 'styled-components/native'
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
  background: ${colors.background};
  flex:1;
  flex-Direction: "column";
  padding: ${statusBarHeight + '0.5rem'};
`;

export const Title = styled.Text`
  color: ${colors.title};
  text-align: center;
  font-Size: ${fonts.client};
  font-Weight: bold;
  margin-top: 0.5rem;
`;

export const Text = styled.Text`
  text-align: center;
  color: ${props => `${props.color}`};
  font-size: ${props => `${props.fontSize}px`};
  font-Weight: ${props => `${props.fontWeight}`};
`;

export const Main = styled.View`
  flex:4;
  padding: 1rem;
`;

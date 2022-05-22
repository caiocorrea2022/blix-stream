import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Platform, Dimensions } from 'react-native';
import theme from '../../global/theme';
import { LinearGradient } from 'expo-linear-gradient'

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
	background: ${theme.colors.background};
	flex: 1;
`;

export const Container = styled.ScrollView`
    flex: 1;
`;

export const Poster = styled.ImageBackground`
    width: 100%;
    height: ${(Dimensions.get('window').height * 60) / 100}px;
`;

export const Main = styled.View`
	margin-top: 0.8rem;
	margin-bottom: 0.8rem;
`;

export const Gradient = styled(LinearGradient)`
    height: 101%;
`;

export const CategoryText = styled.Text`
	color: ${theme.colors.text_900};
    font-family: ${theme.fontsFamily.text_Medium};
    font-size: ${theme.fontsSize.medium};
    margin-bottom: 0.1rem;
  	margin-left: 1rem;
`;
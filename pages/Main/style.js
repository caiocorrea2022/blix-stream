import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Platform, Dimensions } from 'react-native';
import THEME from '../../config/theme';
import { LinearGradient } from 'expo-linear-gradient'

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Container = styled.SafeAreaView`
	background: ${THEME.COLORS.BACKGROUND};
	flex: 1;
`;

export const Wrapper = styled.ScrollView`
    flex: 1;
`;

export const Poster = styled.ImageBackground`
    width: 100%;
    height: ${(Dimensions.get('window').height * 60) / 100}px;
`;

export const Content = styled.View`
	margin-top: 0.8rem;
	margin-bottom: 0.8rem;
`;

export const Gradient = styled(LinearGradient)`
    height: 101%;
`;

export const CategoryText = styled.Text`
	color: ${THEME.COLORS.TEXT_900};
    font-family: ${THEME.FONTFAMILY.MEDIUM};
    font-size: ${THEME.FONTSIZE.MEDIUM};
    margin: 0rem 0rem 0.2rem 1rem;
`;
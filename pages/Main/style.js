import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Platform, Dimensions } from 'react-native';
import THEME from '../../config/theme';
import { RFPercentage } from "react-native-responsive-fontsize";
import { LinearGradient } from 'expo-linear-gradient'

const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
	background: ${THEME.COLORS.BACKGROUND};
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
	color: ${THEME.COLORS.TEXT_900};
    font-family: ${THEME.FONTFAMILY.MEDIUM};
    font-size: ${RFPercentage(3)}px; //medium
    margin-bottom: 0.1rem;
  	margin-left: 1rem;
`;
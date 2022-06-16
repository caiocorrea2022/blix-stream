import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled.ScrollView`
	flex: 1;
`;

export const Poster = styled.ImageBackground`
    width: 100%;
    height: ${(Dimensions.get('window').height * 40) / 100}px;
`;

export const Content = styled.View`
	padding: 0rem 1rem;
`;

export const Gradient = styled(LinearGradient)`
    height: 100%;
`;

export const Hero = styled.View`
    position: absolute;
    width: 100%;
    bottom: 0.5rem;
    padding: 0.5rem 1rem;
`;
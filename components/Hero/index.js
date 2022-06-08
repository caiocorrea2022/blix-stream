import React from 'react'
import { Container,Text } from './style';
import THEME from '../../config/theme';

const Hero = () => {
	return (
		<Container>
			<Text fontFamily={THEME.FONTFAMILY.BOLD} fontSize={THEME.FONTSIZE.BIG}>Seja Bem-Vindo(a)!</Text>
			<Text fontFamily={THEME.FONTFAMILY.REGULAR} fontSize={THEME.FONTSIZE.MEDIUM}>Aqui você irá imergir em autoconhecimento.</Text>
		</Container>
	)
}

export default Hero
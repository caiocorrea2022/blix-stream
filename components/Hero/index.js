import React from 'react'
import { Container, Tags, Text} from './style';
import THEME from '../../config/theme';
import { Feather, Ionicons } from '@expo/vector-icons'

const Hero = () => {
	return (
		<Container>
			<Tags>
				<Text fontFamily={THEME.FONTFAMILY.BOLD}>Seja Bem-Vindo(a)!</Text>
                <Text fontFamily={THEME.FONTFAMILY.REGULAR}>Aqui você irá imergir em autoconhecimento.</Text>
			</Tags>
		</Container>
	)
}

export default Hero
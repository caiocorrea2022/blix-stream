import React from 'react'
import { Container, Tags, Text, MenuHero, Button, TextButton} from './style';
import THEME from '../../config/theme';
import { Feather, Ionicons } from '@expo/vector-icons'

const Hero = () => {
	return (
		<Container>
			<Tags>
				<Text fontSize={RFPercentage(2.5)} fontFamily={THEME.FONTFAMILY.BOLD}>Seja Bem-Vindo(a)!</Text>
                <Text fontSize={RFPercentage(2.5)} fontFamily={THEME.FONTFAMILY.REGULAR}>Aqui você irá imergir em autoconhecimento.</Text>
			</Tags>
			<MenuHero>
				<Button activeOpacity={0.5}>
					<TextButton>Novidades!</TextButton>
				</Button>
			</MenuHero>
		</Container>
	)
}

export default Hero
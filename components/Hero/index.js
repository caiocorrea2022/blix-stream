import React from 'react'
import { Container, Tags, Text, MenuHero, Button, TextButton} from './style';
import theme from '../../global/theme';
import { Feather, Ionicons } from '@expo/vector-icons'

const Hero = () => {
	return (
		<Container>
			<Tags>
				<Text fontSize={theme.fontsSize.medium} fontFamily={theme.fontsFamily.text_Bold}>Seja Bem-Vindo(a)!</Text>
                <Text fontSize={theme.fontsSize.extrasmall} fontFamily={theme.fontsFamily.text_Regular}>Aqui você irá imergir em autoconhecimento.</Text>
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
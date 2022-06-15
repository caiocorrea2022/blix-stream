import React from 'react'
import { Container, Text } from './style';
import THEME from '../../config/theme';
import Button from '../Button';

const Hero = ({userId, navigation, button, plan}) => {
	return (
		<Container>
			<Text fontFamily={THEME.FONTFAMILY.BOLD} fontSize={THEME.FONTSIZE.BIG}>Seja Bem-Vindo(a)!</Text>
			<Text fontFamily={THEME.FONTFAMILY.REGULAR} fontSize={THEME.FONTSIZE.MEDIUM}>Aqui você irá imergir em autoconhecimento.</Text>
			{button?
			plan?
			<></>
			:
			userId ?
			<Button
				title={'VER PLANOS'}
				colorbutton={THEME.COLORS.PRIMARY_900}
				onPress={() => navigation.navigate("Plans", { userId })}
				colortitle={THEME.COLORS.TEXT_000}>
			</Button> :
			<Button
				title={'ASSINAR AGORA'}
				colorbutton={THEME.COLORS.PRIMARY_900}
				onPress={() => navigation.navigate("Plans", { userId })}
				colortitle={THEME.COLORS.TEXT_000}>
			</Button>
			:
			<></>
			}
		</Container>
	)
}

export default Hero
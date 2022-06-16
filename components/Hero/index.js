import React from 'react'
import { Container } from './style';
import THEME from '../../config/theme';
import Button from '../Button';
import { Title, SubTitle } from '../../config/theme/globalStyles';

const Hero = ({ userId, navigation, button, plan }) => {
	return (
		<Container>
			<Title textAlign="flex-start" color={THEME.COLORS.BACKGROUND}>EMILY MONTEIRO</Title>
			{button ?
				plan ? (
					<></>
				) : (
					userId ? (
						<Button
							title={'VER PLANOS'}
							colorbutton={THEME.COLORS.PRIMARY_900}
							onPress={() => navigation.navigate("Plans", { userId })}
							colortitle={THEME.COLORS.TEXT_BUTTON}>
						</Button> 
						) : 
						<Button
							title={'ASSINAR AGORA'}
							colorbutton={THEME.COLORS.PRIMARY_900}
							onPress={() => navigation.navigate("Plans", { userId })}
							colortitle={THEME.COLORS.TEXT_BUTTON}>
						</Button>
				) :
				<></>
			}
		</Container>
	)
}

export default Hero
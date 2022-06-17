import React from 'react'
import { Container } from './style';
import THEME from '../../config/theme';
import Button from '../Button';
import { Title, SubTitle } from '../../config/theme/globalStyles';
import { DrawerActions } from '@react-navigation/native';

const Hero = ({ userId, navigation, button, plan }) => {
	const jumpToAction = DrawerActions.jumpTo('Aulas');

	return (
		<Container>
			<Title textAlign="flex-start" color={THEME.COLORS.BACKGROUND} fontFamily={THEME.FONTFAMILY.FONTABOUT} fontSize={THEME.FONTSIZE.GIANT}>EMILY MONTEIRO</Title>
			{button ?
				plan ? (
					<></>
				) : (
					userId ? (
						<Button
							title={'VER PLANOS'}
							colorbutton={THEME.COLORS.PRIMARY_900}
							onPress={() => navigation.navigate("Plans", { userId })}
							colortitle={THEME.COLORS.TEXT_BUTTON}
							borderRadius="30px"
							>
						</Button> 
						) : 
						<Button
							title={'ASSINAR AGORA'}
							colorbutton={THEME.COLORS.PRIMARY_900}
							onPress={() => navigation.navigate("Plans", { userId })}
							colortitle={THEME.COLORS.TEXT_BUTTON}
							borderRadius="30px"
							>
						</Button>
				) :
				<></>
			}
		</Container>
	)
}

export default Hero
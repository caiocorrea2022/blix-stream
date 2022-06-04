import React from 'react'
import { Container, HeaderLeftSide, HeaderIcons, Avatar} from './style';
import {Icon} from 'react-native-elements'
import THEME from '../../config/theme';

const Header = ({navigation}) => {
    return (
        <Container>
            <HeaderLeftSide>
                <Icon 
                    type = "material-community"
                    name = "menu"
                    color = {THEME.COLORS.TEXT_000}
                    size = {34}
                    onPress={() => navigation.toggleDrawer()}
                />
            </HeaderLeftSide>
            <HeaderIcons>
                <Avatar resizeMode='contain' source={require('../../assets/logo.png')} />
            </HeaderIcons>
        </Container>
	)

}

export default Header
import React from 'react'
import { Container, HeaderLeftSide, HeaderIcons, Avatar} from './style';
import {Icon} from 'react-native-elements'
import theme from '../../global/theme';

const Header = ({navigation}) => {
    return (
        <Container>
            <HeaderLeftSide>
                <Icon 
                    type = "material-community"
                    name = "menu"
                    color = {theme.colors.text_000}
                    size = {34}
                    onPress={() => {navigation.toggleDrawer()}}
                />
            </HeaderLeftSide>
            <HeaderIcons>
                <Avatar resizeMode='contain' source={require('../../assets/logo.png')} />
            </HeaderIcons>
        </Container>
	)

}

export default Header
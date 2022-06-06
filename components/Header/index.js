import React from 'react'
import { Container, HeaderLeftSide, HeaderIcons, Avatar, Text } from './style';
import { Icon } from 'react-native-elements'
import THEME from '../../config/theme';

const Header = ({ login, goBack, navigation }) => {
    return (
        <Container>
            <HeaderLeftSide>
                {
                    goBack ? (
                        <Icon
                            type="material-community"
                            name="arrow-left-circle"
                            color={THEME.COLORS.PRIMARY_900}
                            size={32}
                            onPress={goBack}
                        />
                    ) : (
                        <Icon
                            type="material-community"
                            name="menu"
                            color={THEME.COLORS.TEXT_000}
                            size={32}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                }
            </HeaderLeftSide>
            <HeaderIcons>
                {
                    goBack ? (
                        <div />
                    ) : (
                        <Text
                            onPress={() => navigation.navigate("Login")}>
                                LOGIN
                        </Text>
                    )
                }
                <Avatar resizeMode='contain' source={require('../../assets/logo.png')} />
            </HeaderIcons>
        </Container>
    )

}

export default Header
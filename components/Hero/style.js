import styled from 'styled-components/native'
import THEME from '../../config/theme';
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
    position: absolute;
    width: 100%;
    bottom: 2rem;
`;

export const Tags = styled.View`
    align-items: flex-start;
    padding: 10px 20px;
`;

export const Text = styled.Text`
    color: ${THEME.COLORS.TEXT_000};
    margin-bottom: 0.5rem;
    font-Size: ${props => `${props.fontSize}px`};
    font-family: ${props => `${props.fontFamily}`};
    text-align: start;
`;

export const MenuHero = styled.View`
    width: 100%;
    margin-top: 15px;
    padding: 0px 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TextButton = styled.Text`
    color: ${THEME.COLORS.TEXT_000};
    font-Size: ${RFPercentage(1)}px; //extrasmall
    font-family: ${THEME.FONTFAMILY.REGULAR};
`;

export const Button = styled.TouchableOpacity`
    background-color: ${THEME.COLORS.PRIMARY_900};
    width: 142px;
    height: 32px;
    border-radius: 2px;
    align-items: center;
    justify-content: center;
`;
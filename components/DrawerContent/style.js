import styled from 'styled-components/native';
import THEME from '../../config/theme';
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
 flex: 1;
`;

export const Text = styled.Text`
    color: ${THEME.COLORS.TEXT_800};
    padding: 0 0.5rem;
    font-Size: ${RFPercentage(2.5)}px;
    font-family: ${props => `${props.fontFamily}`};
    text-align: center;
`;

export const Footer = styled.View`
    margin: 0 10rem;
    flex-direction: 'row';
    justify-content: 'center';
`;
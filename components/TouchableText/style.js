import styled from 'styled-components/native';
import THEME from '../../config/theme';
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
    margin: 1rem 1rem;
`;

export const Title = styled.Text`
    color: ${THEME.COLORS.TEXT_900};
    font-size: ${RFPercentage(2)}px; //small
    font-family: ${THEME.FONTFAMILY.REGULAR};
    align-self: center;
`;
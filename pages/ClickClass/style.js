import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import THEME from '../../config/theme';
import { RFPercentage } from "react-native-responsive-fontsize";

const WIDTH = Dimensions.get('window').width;

export const Container = styled.View`
 flex: 1;
`;

export const Wrapper = styled.View`
 background-Color: red;
 margin: 5;
 padding: 5;
 height: 140;
 justify-content: 'center';
 flex-direction: "row";
`;

export const ContentVideo = styled.View`
    width: WIDTH * 0.35;
    resize: center;
    border-radius: 15;
    justify-content: center;
    margin-Right: "2%";
`;

export const Text = styled.Text`
	color: ${THEME.COLORS.TEXT_900};
    font-family: ${THEME.FONTFAMILY.MEDIUM};
    font-size: ${RFPercentage(3)}px; //medium
    margin-bottom: 0.1rem;
  	margin-left: 1rem;
    text-align: 'left';
`;
export const ContentText = styled.View`
    width: WIDTH * 0.60;
    resize: center;
    padding-Top: 2px;
    border-radius: 15;
    justify-content: flex-start;
    margin-Right: "2%";
`;
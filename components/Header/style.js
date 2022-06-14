import styled from 'styled-components/native'
import THEME from '../../config/theme';

export const Container = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 0.8rem 0 0.8rem;
    width: 100%;
    background-color: ${props => `${props.backgroundColor}`};
`;

export const Avatar = styled.Image`
	width: 2.0rem;
	height: 2.0rem;
	border-radius: 50%;
`;

export const Text = styled.Text`
    color: ${THEME.COLORS.TEXT_000};
    margin-right: 0.8rem;
    font-Size: ${THEME.FONTSIZE.MEDIUM};
    font-family: ${THEME.FONTFAMILY.REGULAR};
`;

export const HeaderRightSide = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const HeaderLeftSide = styled.View`
    flex-direction: row;
`;
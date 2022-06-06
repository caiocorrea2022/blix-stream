import styled from 'styled-components/native'
import THEME from '../../config/theme';

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
    font-Size: ${THEME.FONTSIZE.MEDIUM};
    font-family: ${props => `${props.fontFamily}`};
    text-align: start;
`;
import styled from 'styled-components/native'
import THEME from '../../config/theme';

export const Container = styled.View`
    position: absolute;
    width: 100%;
    bottom: 0.5rem;
    padding: 0.5rem 1rem;
`;
export const Text = styled.Text`
    color: ${THEME.COLORS.TEXT_000};
    margin-bottom: 0.5rem;
    font-Size: ${props => `${props.fontSize}`};
    font-family: ${props => `${props.fontFamily}`};
    text-align: start;
`;
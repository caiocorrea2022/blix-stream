import styled from 'styled-components/native'
import theme from '../../global/theme';

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
    color: ${theme.colors.text_000};
    margin-bottom: 0.5rem;
    font-Size: ${props => `${props.fontSize}`};
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
    color: ${theme.colors.text_000};
    font-Size: ${theme.fontsSize.extrasmall};
    font-family: ${theme.fontsFamily.text_Regular};
`;

export const Button = styled.TouchableOpacity`
    background-color: ${theme.colors.primary_900};
    width: 142px;
    height: 32px;
    border-radius: 2px;
    align-items: center;
    justify-content: center;
`;
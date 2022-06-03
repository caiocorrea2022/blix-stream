import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.TouchableOpacity`
    margin: 1rem 1rem;
`;

export const Title = styled.Text`
    color: ${theme.colors.text_900};
    font-size: ${theme.fontsSize.small};
    font-family: ${theme.fontsFamily.text_Regular};
    align-self: center;
`;
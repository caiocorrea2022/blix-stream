import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
})

export default styles;

import styled from 'styled-components/native';
import THEME from '../../config/theme';

export const Container = styled.View`
 flex: 1;
 background-color: ${THEME.COLORS.BACKGROUND};
 
`;

export const ContentVideo = styled.View`
 align-self: center;
 width: 60%;
`;

export const ContentList = styled.View`
align-self: center;
    width: 30%;
    height: 76%
 
`;


import styled from 'styled-components/native';
import THEME from '../../../config/theme';

export const Container = styled.View`
 flex: 1;
`;

export const Footer = styled.View`
    padding: 1rem 0rem;
    flex-direction: row;
    justify-content: center;
    background-color: ${THEME.COLORS.PRIMARY_700};
`;


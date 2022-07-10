import styled from 'styled-components/native'

export const Avatar = styled.Image`
width: undefined;
height: 100%;
aspect-ratio: ${({ aspectRatio }) => aspectRatio};
margin-right: 1rem;
`;

export const HeaderDesktop = styled.View`
    flex-direction: row;
    height: 2.5rem;
`;

export const ViewLogo = styled.View`
    align-items: flex-start;
    height: 2.5rem;
`;

export const Content = styled.View`
    align-items: flex-start;
    flex-direction: row; 
    padding: 0.5rem 0rem;
`;

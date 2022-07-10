import styled from 'styled-components/native'

export const Avatar = styled.Image`
width: undefined;
height: 100%;
aspect-ratio: ${({ aspectRatio }) => aspectRatio};
`;

export const HeaderLeftSide = styled.View`
    flex-direction: row;
    height: 2.5rem;
`;

export const ContainerMobile = styled.View`
    width:100%;
    padding: 1rem 0.5rem;
    background-color: green;
    `;

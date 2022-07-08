import styled from 'styled-components/native'

export const Avatar = styled.Image`
width: undefined;
height: 100%;
aspect-ratio: ${({ aspectRatio }) => aspectRatio};
`;

export const HeaderRightSide = styled.View`
    flex-direction: row;
    height: 2.5rem;
`;

export const HeaderMiddle = styled.View`
    flex-direction: row;
    align-items: center;
    height: 2.5rem;
`;

export const HeaderLeftSide = styled.View`
    flex-direction: row;
    height: 2.5rem;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
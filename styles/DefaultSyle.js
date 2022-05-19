import styled from 'styled-components/native'
import colors from './colors';

/*
** Global unique styles for entire app
*/

export const RoundBtn = styled.TouchableOpacity`
  background-color: ${colors.primary};
  margin-top: 2rem;
  margin-bottom: 1rem;
  border-Radius: 10px;
  height: 50px;
  width: 80%;
  justify-content: center;
  align-self: center;
`;
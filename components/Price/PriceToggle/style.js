import styled from "styled-components/native";
import THEME from '../../config/theme';

export const ToggleContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: 2rem;
`;

export const ToggleOption = styled.Text`
  line-height: 28px;
  text-align: right;
  color: ${THEME.COLORS.TEXT_700};
  opacity: 0.5;
`;

export const ToggleBack = styled.View`
  position: relative;
  width: 5.6rem;
  height: 3.2rem;
  background: ${THEME.COLORS.BACKGROUND};
  border-radius: 16px;
  margin: 0 2.4rem;
  cursor: pointer;

  &:hover {
    filter: brightness(125%);
  }
`;

export const ToggleFront = styled.View`
  position: absolute;
  left: ${(props) => (props.option === "monthly" ? "24px" : "0")};
  width: 2.4rem;
  height: 2.4rem;
  background: ${THEME.COLORS.BACKGROUND};
  border-radius: 50%;
  margin: 0.4rem;
`;

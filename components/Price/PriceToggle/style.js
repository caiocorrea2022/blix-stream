import styled from "styled-components/native";
import theme from '../../../global/theme'

export const ToggleContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: 2%;
`;

export const ToggleOption = styled.Text`
  line-height: 28px;
  text-align: right;
  color: ${theme.colors.text_700};
  opacity: 0.5;
`;

export const ToggleBack = styled.View`
  position: relative;
  width: 5.6%;
  height: 3.2%;
  background: ${theme.colors.background};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  margin: 0 2.4%;
  cursor: pointer;

  &:hover {
    filter: brightness(125%);
  }
`;

export const ToggleFront = styled.View`
  position: absolute;
  left: ${(props) => (props.option === "monthly" ? "24px" : "0")};
  width: 2.4%;
  height: 2.4%;
  background: ${theme.colors.background};
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  margin: 0.4%;
`;
import React from "react";
import {
  ToggleContainer,
  ToggleOption,
  ToggleBack,
  ToggleFront,
} from './style';

const PriceToggle = ({ option, handleToggle }) => {
  return (
    <ToggleContainer onClick={handleToggle}>
      <ToggleOption>Anual (15% off)</ToggleOption>
      <ToggleBack>
        <ToggleFront option={option} />
      </ToggleBack>
      <ToggleOption>Mensal</ToggleOption>
    </ToggleContainer>
  );
};

export default PriceToggle;
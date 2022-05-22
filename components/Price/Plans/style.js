import styled from "styled-components/native";

export const PriceFeatureContainer = styled.View`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  margin: 5% 2.4%;
  align-items: center;

  h1 {
    font-size: 3.2%;
    line-height: 3.9%;
    text-align: center;
    padding: 2%;
  }
`;

export const PriceCardContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 2.8%;

  @media (min-width: 1060px) {
    flex-direction: column;
    align-items: center;
  }
`;